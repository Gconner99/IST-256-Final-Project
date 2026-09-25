(function(){"use strict";function Me(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function te(t,e,i){return Math.min(i,Math.max(e,t))}function Ze(t,e=16){return Math.max(e,Math.round(t)&-2)}function zr(t,e,i,r){const a=Math.min(1,i/Math.max(t,1),r/Math.max(e,1));return{width:Ze(t*a),height:Ze(e*a)}}function Hi(t,e,i){return t+(e-t)*i}function es(t){const e=te(t,0,1);return e*e*(3-2*e)}const ts=["heraldry","wallpaper","giants","shower"],wt=["sailor","circus","fruit","nature","love","space","sweet","music"],li=["rush","tunnel","bloom","spiral","helix","prism","bounce","flip","glow","flash","hop","kick","jelly","tide","rings","loom","petal","flock","wheel","silk","bars","ripple","swing","burst","halo","clap","wave"],is=["bars","ripple","swing","burst","halo","clap","wave"];function Li(t){return!!t&&is.includes(t)}const rs={rush:"RUSH",tunnel:"TUNNEL",bloom:"BLOOM",spiral:"SPIRAL",helix:"HELIX",prism:"PRISM",bounce:"BOUNCE",flip:"FLIP",glow:"GLOW",flash:"FLASH",hop:"HOP",kick:"KICK",jelly:"JELLY",tide:"TIDE",rings:"RINGS",loom:"LOOM",petal:"PETAL",flock:"FLOCK",wheel:"WHEEL",silk:"SILK",bars:"BARS",ripple:"RIPPLE",swing:"SWING",burst:"BURST",halo:"HALO",clap:"CLAP",wave:"WAVE"};function De(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function Ui(t){return wt.includes(t)?t:"sailor"}function Or(t){return li.includes(t)?t:"rush"}function Ni(t){return li[(t>>>0)%li.length]}function Wi(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="bounce"?"shower":"heraldry"}function Hr(t,e){return e&&li.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"bounce":"rush"}const Ft=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a"],Lr={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a"},as={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","star","moon"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","moon","star","figure"],fruit:["pear","lemon","cherry","leaf","mushroom","flower","sun","cloud","bolt","umbrella","bird"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","drop","moth","bird"],love:["heart","wingfig","swan","cat","crown","moon","star","key","ring","envelope","bow","potion","house"],space:["rocket","planet","saturn","ufo","comet","satellite","star","moon"],sweet:["lolly","coneice","cupcake","donut","candy","cherry","heart"],music:["note","vinyl","headphone","mic","speaker","star","heart"]},Ur={sailor:["fish","boat","tail","swallow","anchor"],circus:["elephant","tent","horse","balloon","figure"],fruit:["pear","lemon","mushroom","sun","umbrella"],nature:["tree","deer","owl","fox","mountain"],love:["heart","wingfig","swan","cat","house"],space:["rocket","saturn","ufo","planet","comet"],sweet:["lolly","cupcake","donut","coneice","candy"],music:["vinyl","headphone","speaker","note","mic"]},Nr={sailor:["starfish","shell","star","fish","anchor"],circus:["ball","star","balloon","bow","ticket"],fruit:["cherry","leaf","star","drop","lemon"],nature:["leaf","acorn","drop","moth","bird"],love:["heart","star","key","moon","ring"],space:["star","moon","comet","satellite","planet"],sweet:["candy","heart","lolly","cherry","donut"],music:["note","star","heart","vinyl","mic"]},zt=144;function Wr(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function Oe(t,e){return e[Math.floor(t()*e.length)%e.length]}function qr(t,e){return t()<.32?e:Oe(t,Ft)}function ns(t,e="rush"){return e==="tunnel"?Ur[t]:e==="lattice"?Nr[t]:as[t]}function ss(t,e,i,r){const a=ns(r,e==="bloom"?"rush":e);let n=Oe(t,a);e==="lattice"&&t()<.4&&(n=Oe(t,Nr[r])),e==="tunnel"&&t()<.28&&(n=Oe(t,Ur[r]));const s=qr(t,i);let o=qr(t,i);return o===s&&(o=Oe(t,Ft)),{kind:n,pattern:t()<.58?"plain":Oe(t,["polka","hoop","half","bar"]),a:s,b:o,mirror:t()>.5}}function os(t,e,i="sailor"){const r=Me(t>>>0),a=240,n=[];for(let s=0;s<a;s++){const o=s<70?"lattice":s<130?"tunnel":"rush";n.push({x:r(),y:r(),z:r(),rot:(r()-.5)*.55,size:.55+r()*.9,vx:(r()-.5)*.06,vy:(r()-.35)*.08,vr:(r()-.5)*.25,charge:ss(r,o,e,i)})}return n}function cs(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function ls(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,r=e>>8&255,a=e&255;return(.22*i+.7*r+.08*a)/255}function Dr(t,e,i,r){t.save(),t.beginPath(),e(),t.clip();const a=i.a,n=i.b,s=r*2.4;if(t.fillStyle=a,t.fillRect(-s,-s,s*2,s*2),t.fillStyle=n,i.pattern==="polka"){const o=r*.38;for(let c=-4;c<5;c++)for(let f=-4;f<5;f++)t.beginPath(),t.arc((f+.5*(c&1))*o,c*o,o*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=r*.14;for(let o=1;o<=3;o++)t.beginPath(),t.arc(0,0,r*(.28*o),0,Math.PI*2),t.stroke()}else i.pattern==="half"?t.fillRect(0,-s,s,s*2):i.pattern==="bar"&&t.fillRect(-s,-r*.18,s*2,r*.36);t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,r*.07),t.strokeStyle=ls(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function $r(t,e,i,r=.42){for(let a=0;a<i*2;a++){const n=a%2===0?e:e*r,s=a*Math.PI/i-Math.PI/2,o=Math.cos(s)*n,c=Math.sin(s)*n;a===0?t.moveTo(o,c):t.lineTo(o,c)}t.closePath()}function fs(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function us(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function jr(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function ds(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function hs(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function ms(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function ps(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const r=-Math.PI*.95+i/7*Math.PI*1.9,a=i%2===0?e:e*.72;t.lineTo(Math.sin(r)*a,-Math.cos(r)*a*.85)}t.closePath()}function gs(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function vs(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function bs(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function ys(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function ws(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function xs(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function ks(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function _s(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function Ts(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function Cs(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function Ss(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function Es(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function Ps(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function As(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function Bs(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function Is(t,e){for(let i=0;i<5;i++){const r=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(r)*e*.45,Math.sin(r)*e*.45,e*.32,e*.22,r,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function Ms(t,e){$r(t,e,8,.55)}function Rs(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function Fs(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function zs(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function Os(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function Hs(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function Ls(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function Us(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function Ns(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function Ws(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function qs(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function Ds(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function $s(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function js(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function Vs(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),jr(t,e*.72)}function Gs(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function Ks(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function Xs(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function Zs(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function Qs(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function Ys(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function Js(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function eo(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function to(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function io(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function ro(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function ao(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function no(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function so(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function oo(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function co(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function lo(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function fo(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function uo(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function ho(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function mo(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function po(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function go(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function vo(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function bo(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":$r(t,i,5,e==="starfish"?.42:.4);break;case"heart":fs(t,i);break;case"moon":us(t,i);break;case"figure":jr(t,i);break;case"fish":ds(t,i);break;case"anchor":hs(t,i);break;case"wave":ms(t,i);break;case"shell":ps(t,i);break;case"boat":gs(t,i);break;case"tail":vs(t,i);break;case"swallow":bs(t,i);break;case"elephant":ys(t,i);break;case"tent":ws(t,i);break;case"ball":xs(t,i);break;case"bow":ks(t,i);break;case"horse":_s(t,i);break;case"balloon":Ts(t,i);break;case"ticket":Cs(t,i);break;case"pear":Ss(t,i);break;case"lemon":Es(t,i);break;case"cherry":Ps(t,i);break;case"leaf":As(t,i);break;case"mushroom":Bs(t,i);break;case"flower":Is(t,i);break;case"sun":Ms(t,i);break;case"cloud":Rs(t,i);break;case"bolt":Fs(t,i);break;case"umbrella":zs(t,i);break;case"bird":Os(t,i);break;case"tree":Hs(t,i);break;case"deer":Ls(t,i);break;case"fox":Us(t,i);break;case"owl":Ns(t,i);break;case"acorn":Ws(t,i);break;case"cone":qs(t,i);break;case"mountain":Ds(t,i);break;case"drop":$s(t,i);break;case"moth":js(t,i);break;case"wingfig":Vs(t,i);break;case"swan":Gs(t,i);break;case"cat":Ks(t,i);break;case"crown":Xs(t,i);break;case"key":Zs(t,i);break;case"ring":Qs(t,i);break;case"envelope":Ys(t,i);break;case"potion":Js(t,i);break;case"rocket":to(t,i);break;case"planet":io(t,i);break;case"saturn":ro(t,i);break;case"ufo":ao(t,i);break;case"comet":no(t,i);break;case"satellite":so(t,i);break;case"lolly":oo(t,i);break;case"coneice":co(t,i);break;case"cupcake":lo(t,i);break;case"donut":fo(t,i);break;case"candy":uo(t,i);break;case"note":ho(t,i);break;case"vinyl":mo(t,i);break;case"headphone":po(t,i);break;case"mic":go(t,i);break;case"speaker":vo(t,i);break;default:eo(t,i);break}}function yo(t,e,i){const r=()=>bo(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),Dr(t,r,e,i),t.restore();return}Dr(t,r,e,i)}function wo(t){const e=document.createElement("canvas");e.width=zt,e.height=zt;const i=e.getContext("2d");return i&&(i.translate(zt/2,zt/2),yo(i,t,zt*.38)),e}class xo{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];builtSeed=-1;builtInk="";builtKit="sailor";stamp(e){const i=cs(e);let r=this.stamps.get(i);return r||(r=wo(e),this.stamps.set(i,r)),r}ensure(e,i,r){this.builtSeed===e&&this.builtInk===i&&this.builtKit===r&&this.particles.length||(this.particles=os(e,i,r),this.stamps.clear(),this.builtSeed=e,this.builtInk=i,this.builtKit=r)}paint(e){const i=Math.max(16,Math.floor(e.width)),r=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==r&&(this.canvas.height=r);const a=this.canvas.getContext("2d",{alpha:!1});if(!a)return this.canvas;const n=Ui(e.kit),s=Wr(e.paper,fi(n,e.seed)),o=Wr(e.ink,Lr[n]);this.ensure(e.seed>>>0,o,n);const c=Hr(e.generator,e.move),f=te(e.audio,0,1),l=te(e.bass,0,1),m=te(e.beat,0,1),v=e.bpm>40?e.bpm:0;To(a,i,r,s,n,e.time,e.seed,m),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high";const u=e.time,b=i/Math.max(r,1),d=c==="bounce"||c==="flip"||c==="hop"||c==="kick"||c==="jelly"?36:c==="tide"||c==="rings"||c==="loom"||c==="petal"||c==="flock"||c==="wheel"||c==="silk"||Li(c)?48:c==="glow"||c==="flash"?28:c==="prism"?64:c==="helix"?130:c==="tunnel"?120:c==="bloom"?140:this.particles.length,h=c==="prism"?3:1;for(let p=0;p<d;p++){const w=this.particles[p],x=this.stamp(w.charge),_=_o(w,p,c,u,f,l,m,v);if(!_)continue;const S=_.px*Math.min(i,r);if(S<5)continue;const R=(.5+_.x)*i,B=(.5+_.y/b)*r;for(let F=0;F<h;F++){a.save();const A=h>1?(F-1)*S*.09:0,N=h>1?F===2?S*.06:F===0?-S*.03:0:0;if(R+A<-S||B+N<-S||R+A>i+S||B+N>r+S){a.restore();continue}a.translate(R+A,B+N),a.rotate(_.rot+(h>1?F*.1:0)),_.flip!=null&&a.scale(_.flip,1),_.squash&&a.scale(_.squash,1/Math.max(.35,_.squash)),_.glow&&(a.globalAlpha=_.alpha*.32*_.glow,a.fillStyle=_.tint??o,a.beginPath(),a.arc(0,0,S*(.4+_.glow*.16),0,Math.PI*2),a.fill()),a.globalAlpha=_.alpha*(h>1?.72:1),a.drawImage(x,-S/2,-S/2,S,S),a.restore()}}return Li(c)&&m>.04&&(a.save(),a.translate(i*.5,r*.5),a.strokeStyle=Ht(o,"#fff4d8",.72),a.globalAlpha=.18+m*.42,a.lineWidth=2.6+m*6,a.beginPath(),a.arc(0,0,Math.min(i,r)*(.16+m*.2),0,Math.PI*2),a.stroke(),a.globalAlpha=.1+m*.22,a.beginPath(),a.arc(0,0,Math.min(i,r)*(.3+m*.18),0,Math.PI*2),a.stroke(),a.restore()),this.canvas}}function Se(t){return(t%1+1)%1}function ko(t){const e=Se(t);return e<.5?e*2:2-e*2}function He(t){return ko(t)-.5}function _o(t,e,i,r,a,n,s,o){const c=Li(i),f=i==="kick"||i==="jelly"||c?Math.max(0,Math.sin(r*(o>40?o/60*Math.PI*2:6.2))):0,l=c?Math.max(s,f*.25):Math.max(s*.85,f*.18);if(i==="bounce"){const d=.11+Math.abs(t.vx)*2.4,h=.09+Math.abs(t.vy)*2.1;return{x:He(t.x+d*r),y:He(t.y+h*r*.92),px:te((.1+t.size*.07)*(1+l*.14),.08,.26),rot:t.rot+t.vr*r*1.6,alpha:1}}if(i==="flip"){const d=r*(2.2+a*.25)+e*.55,h=Math.cos(d);return{x:He(t.x+t.vx*r*.45),y:He(t.y+t.vy*r*.38),px:te((.12+t.size*.06)*(1+l*.1),.08,.24),rot:t.rot+Math.sin(d)*.15,alpha:te(.28+Math.abs(h)*.72,.2,1),flip:h}}if(i==="glow"){const d=.45+.55*Math.sin(r*2.4+e*.7),h=te(d*.55+l*.35+n*.18,0,1);return{x:(t.x-.5)*.86+Math.sin(r*.55+t.y*7)*.07,y:(t.y-.5)*.74+Math.cos(r*.48+t.x*6)*.06,px:te((.1+t.size*.08)*(.9+h*.16),.07,.24),rot:t.rot+r*.12*t.vr,alpha:te(.5+h*.45,.35,1),glow:h}}if(i==="flash"){const d=.7+.3*Math.sin(r*5.2+e)+l*.12,h=Ft[(Math.floor(r*3.2+e*3)>>>0)%Ft.length];return{x:He(t.x+t.vx*r*.32),y:He(t.y+t.vy*r*.28),px:te((.11+t.size*.07)*(1+l*.1),.08,.24),rot:t.rot+r*.4*t.vr,alpha:te(d,.4,1),glow:.16+l*.28,tint:h}}if(i==="hop"){const d=o>40?o/60:.85,h=Se(r*d+t.z),p=Math.abs(Math.sin(h*Math.PI))+l*.16,w=Math.cos(h*Math.PI*2);return{x:He(t.x+(.1+Math.abs(t.vx)*1.8)*r),y:He(t.y)*.62-p*.2,px:te(.1+t.size*.07+p*.02,.08,.22),rot:t.rot+p*.55,alpha:1,flip:w}}if(i==="kick"){const d=.1+Math.abs(t.vx)*2.1,h=.08+Math.abs(t.vy)*1.8;return{x:He(t.x+d*r),y:He(t.y+h*r),px:te((.1+t.size*.07)*(1+l*.28),.08,.28),rot:t.rot+t.vr*r,alpha:1,glow:l*.7}}if(i==="jelly"){const d=1+Math.sin(r*5.2+e)*.08+l*.2;return{x:He(t.x+t.vx*r*.5),y:He(t.y+t.vy*r*.42),px:te(.12+t.size*.07,.08,.24),rot:t.rot+Math.sin(r*3+e)*.2,alpha:1,squash:d}}if(i==="tide"){const p=e%8,w=Math.floor(e/8)%6,x=(p+.5)/8-.5,_=(w+.5)/6-.5,S=Math.sin(r*1.05+w*.72+p*.18);return{x:x*.9+S*.07,y:_*.74+Math.sin(r*.48+w*.9)*.035,px:te(.085+t.size*.045+l*.02,.06,.18),rot:t.rot+S*.22,alpha:1}}if(i==="rings"){const h=e%4,p=Math.floor(e/4),w=12,x=h&1?-1:1,_=p/w*Math.PI*2+r*(.28+h*.05)*x,S=.14+h*.11;return{x:Math.cos(_)*S,y:Math.sin(_)*S*.88,px:te(.07+t.size*.035+l*.02,.05,.16),rot:_+t.rot*.25,alpha:.96}}if(i==="loom"){const d=r*.62+t.x*Math.PI*2,h=r*.94+t.y*Math.PI*2;return{x:Math.sin(d)*.4+Math.sin(h*.5)*.06,y:Math.sin(d*2+t.z*Math.PI)*.3,px:te(.08+t.size*.045+l*.02,.06,.18),rot:d*.18+t.rot,alpha:1}}if(i==="petal"){const h=e%6,p=Math.floor(e/6)/8,w=h/6*Math.PI*2+r*.2,x=.8+.2*Math.sin(r*.85),_=(.1+p*.32)*x;return{x:Math.cos(w)*_,y:Math.sin(w)*_*.9,px:te(.075+t.size*.04+l*.02,.055,.18),rot:w+Math.PI*.5,alpha:te(.42+x*.55,.4,1)}}if(i==="flock"){const d=e%5,p=Se(t.z+r*(.11+d*.015))*Math.PI*2+d*.32,w=.2+Math.sin(p*2+d)*.1+d*.028;return{x:Math.cos(p)*w,y:Math.sin(p*.86)*w*.7,px:te(.075+t.size*.04+l*.02,.055,.17),rot:p+Math.PI*.5,alpha:1}}if(i==="wheel"){const h=e%3,x=Math.floor(e/3)/14*Math.PI*2+r*.38*(h===1?-1:1),_=.2+h*.12,S=.5+.5*Math.sin(x);return{x:Math.cos(x)*_,y:Math.sin(x)*_*.72,px:te((.075+t.size*.035)*(.78+S*.28)+l*.02,.05,.2),rot:x,alpha:te(.5+S*.45,.45,1)}}if(i==="silk"){const d=e%4,h=d<2?1:-1,p=Se(t.x+r*.075*h+d*.08),w=(d/3-.5)*.52+Math.sin(p*Math.PI*3+d)*.055;return{x:p-.5,y:w,px:te(.07+t.size*.038+l*.02,.05,.16),rot:Math.cos(p*Math.PI*3)*.28+t.rot*.15,alpha:.94}}if(i==="bars"){const p=e%8,w=Math.floor(e/8)%6,x=(p+.5)/8-.5,_=.32+.68*(.5+.5*Math.sin(r*2.15+p*.85+t.z)),S=te(_*(.45+a*.28+n*.18+l*.38),.18,1),R=.42-w/Math.max(5,1)*S*.82;return{x:x*.86,y:R,px:te(.075+t.size*.03+l*.03,.055,.18),rot:t.rot*.2,alpha:te(.45+(1-w/6)*.5+l*.15,.4,1),glow:l*.55,squash:1-l*.08}}if(i==="ripple"){const h=e%3,p=Math.floor(e/3),w=16,x=Se(r*.2),_=.15+h*.145+x*.16+l*.045,S=p/w*Math.PI*2+r*.1;return{x:Math.cos(S)*_,y:Math.sin(S)*_*.88,px:te(.062+t.size*.024+l*.02,.048,.13),rot:S+t.rot*.2,alpha:te(.96-h*.08,.6,1),glow:l*.45}}if(i==="swing"){const p=e%6,w=Math.floor(e/6)%8,x=o>40?o/60*Math.PI*2:5.4,_=p&1?-1:1,S=Math.sin(r*x+p*.85)*.82*_,R=.07+w*.072;return{x:(p/Math.max(5,1)-.5)*.9+Math.sin(S)*R,y:-.44+Math.cos(S)*R,px:te(.07+t.size*.03+l*.028,.05,.16),rot:S,alpha:1,glow:l*.4}}if(i==="burst"){const h=e%3,x=Math.floor(e/3)/16*Math.PI*2+r*.2*(h===1?-1:1),_=(.14+h*.13)*(1+l*.62);return{x:Math.cos(x)*_,y:Math.sin(x)*_*.9,px:te((.08+t.size*.035)*(1+l*.22),.055,.22),rot:x+t.rot*.2,alpha:te(.55+l*.4,.45,1),glow:l*.75,squash:1+l*.14}}if(i==="halo"){const h=e%2,x=Math.floor(e/2)/24*Math.PI*2+r*.26*(h?-1:1),_=.84+.16*Math.sin(r*1.15)+l*.2,S=(.26+h*.14)*_,R=te(.28+l*.65+n*.15,0,1);return{x:Math.cos(x)*S,y:Math.sin(x)*S*.9,px:te(.07+t.size*.032+R*.04,.05,.18),rot:x+Math.PI*.5,alpha:te(.5+R*.45,.4,1),glow:R}}if(i==="clap"){const d=e&1?1:-1,h=Math.floor(e/2)%8,p=Math.floor(e/16)%3,w=.28-l*.14;return{x:d*(w+p*.055),y:(h/7-.5)*.78,px:te(.08+t.size*.035+l*.03,.055,.18),rot:t.rot*.15+d*l*.2,alpha:1,squash:1-l*.16,glow:l*.5}}if(i==="wave"){const p=e%16,w=Math.floor(e/16)%3,x=(p+.5)/16-.5,_=.09+a*.07+l*.13,S=x*Math.PI*3.4+r*2.15+w*.55;return{x:x*.92,y:(w-1)*.2+Math.sin(S)*_,px:te(.065+t.size*.03+l*.026,.05,.15),rot:Math.cos(S)*.32,alpha:1,glow:l*.45}}if(i==="tunnel"){const h=.3+Se(t.z-r*(.4+a*.22+n*.1))*2.45;if(h<.34||h>2.65)return null;const p=t.x*Math.PI*2+r*.14+t.rot*.3,w=(.16+t.y*.58)/h;return{x:Math.cos(p)*w,y:Math.sin(p)*w,px:te(.2*t.size*(.95+n*.08+l*.12)/h,.04,.48),rot:t.rot+t.vr*r*.2,alpha:te((2.65-h)/.28,0,1)*te((h-.3)/.1,0,1)}}if(i==="lattice"){const p=(e%8+.5)/8-.5,w=(Math.floor(e/8)+.5)/6-.5,_=.32+(1-Se(r*(.2+a*.12)+t.z*.02))*2.2;return{x:p/(_*.62),y:w/(_*.62),px:te(.16*t.size/_,.05,.42),rot:t.rot*.25,alpha:te((2.4-_)/.25,0,1)}}if(i==="bloom"){const d=Se(t.z-r*(.34+n*.12)),h=d*d,p=t.x*Math.PI*2+r*.1+t.rot;return{x:Math.cos(p)*h*.92,y:Math.sin(p)*h*.92,px:te(.05+h*.32*t.size*(1+a*.06+l*.12),.04,.46),rot:t.rot+d*.4,alpha:te(1.05-h,0,1)*te(d/.08,0,1)}}if(i==="spiral"){const h=.28+Se(t.z-r*(.4+a*.2+n*.08))*2.6;if(h<.32||h>2.75)return null;const p=t.x*Math.PI*2+2.15/h+r*.1,w=(.1+t.y*.38)/h;return{x:Math.cos(p)*w,y:Math.sin(p)*w,px:te(.2*t.size*(.94+n*.08+l*.12)/h,.04,.5),rot:t.rot+p*.15,alpha:te((2.75-h)/.28,0,1)*te((h-.28)/.1,0,1)}}if(i==="helix"){const h=.26+Se(t.z-r*(.46+a*.22+n*.08))*2.7;if(h<.3||h>2.85)return null;const p=e&1?Math.PI:0,w=r*(1.7+1.35/h)+t.x*Math.PI*2+p,x=(.11+t.y*.26)/h;return{x:Math.cos(w)*x,y:Math.sin(w)*x*.92,px:te(.22*t.size*(.93+n*.08+l*.12)/h,.04,.52),rot:w+t.rot,alpha:te((2.85-h)/.28,0,1)*te((h-.26)/.1,0,1)}}if(i==="prism"){const h=.28+Se(t.z-r*(.42+a*.2+n*.08))*2.55;if(h<.32||h>2.7)return null;const p=r*.22+t.rot*.4,w=Se(t.x)-.5,x=Se(t.y)-.5,_=Math.cos(p),S=Math.sin(p);return{x:(w*_-x*S)/h,y:(w*S+x*_)/h,px:te(.2*t.size*(.94+n*.08+l*.12)/h,.04,.5),rot:t.rot+p,alpha:te((2.7-h)/.26,0,1)*te((h-.28)/.1,0,1)}}const v=.26+Se(t.z-r*(.46+a*.24+n*.1))*2.7;if(v<.3||v>2.85)return null;const u=(Se(t.x+t.vx*r*.03)-.5)/v,b=(Se(t.y+t.vy*r*.02)-.5)/v;return{x:u,y:b,px:te(.24*t.size*(.92+n*.08+l*.14)/v,.04,.58),rot:t.rot+t.vr*r*.12,alpha:te((2.85-v)/.3,0,1)*te((v-.26)/.1,0,1)}}const Ot={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e","#c98a4a","#7aa0b8","#16324a","#e8c9a0","#2a4a6a"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010","#ff6a3c","#3a1028","#f4c48a","#7a1028","#2a0810"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0","#d44c3a","#f2c86a","#3a2818","#ffb080","#8a3a18"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71","#c4a06a","#2a4030","#8a6a38","#d8e8c8","#405028"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14","#f0a0b8","#5a1838","#e8d0c4","#c45c78","#241018"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000","#2a1848","#0c2038","#3a2860","#101828","#1a2848"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8","#f4b4c8","#ffc08a","#2a1018","#e87890","#f8e0d0"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028","#3a2048","#181028","#4a1838","#0a0a12","#2a1828"]};function Ht(t,e,i){const r=parseInt(t.slice(1),16),a=parseInt(e.slice(1),16);if(Number.isNaN(r)||Number.isNaN(a))return t;const n=te(i,0,1),s=c=>Math.round((r>>c&255)*(1-n)+(a>>c&255)*n);return`#${(s(16)<<16|s(8)<<8|s(0)).toString(16).padStart(6,"0")}`}function To(t,e,i,r,a,n,s,o=0){const c=Me(s+4>>>0),f=Oe(c,Ot[a]),l=Oe(c,Ot[a]),m=Oe(c,Ot[a]);t.fillStyle=r,t.fillRect(0,0,e,i);const v=t.createLinearGradient(0,0,e,i);v.addColorStop(0,Ht(r,f,.38)),v.addColorStop(.45,Ht(r,m,.28)),v.addColorStop(1,Ht(r,l,.42)),t.fillStyle=v,t.fillRect(0,0,e,i);const u=e*(.5+Math.sin(n*.17)*.08),b=i*(.46+Math.cos(n*.13)*.06),d=t.createRadialGradient(u,b,0,u,b,Math.max(e,i)*.72);d.addColorStop(0,Ht(r,f,.42+o*.1)),d.addColorStop(1,r),t.fillStyle=d,t.globalAlpha=.88,t.fillRect(0,0,e,i),t.globalAlpha=1}function fi(t,e=0){const i=Me(e+17>>>0);return Oe(i,Ot[t])}function Lt(t,e){const i=Me(t+17>>>0);return Oe(i,Ot[wt[Math.floor(i()*wt.length)]])}function Et(t,e="#c41e3a"){const i=Me(t+91>>>0);return i()<.35?e:Oe(i,Ft)}function qi(t){return Lr[t]}function Co(t){return wt[(t>>>0)%wt.length]}function Ae(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const So=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Eo=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Po=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Ao=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Bo=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Vr=`
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
`,Gr=`
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
`,Io=`
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
`,Mo=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Ro=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Kr=`
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
`,Di={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Kr}${Gr}`,applyGlsl:Mo};function Fo(t){return t?{...Di,extraUniforms:`${Kr}${Gr}${Io}`,applyGlsl:Ro}:Di}const zo=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${Vr}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},Di],Xr=[...So,...Eo,...Po,...Ao,...Bo,...zo],Oo=new Map(Xr.map(t=>[t.id,t]));function Qe(t){return Oo.get(t)}function Ho(){const t={};for(const e of Xr)(t[e.category]??=[]).push(e);return t}const Lo=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function $i(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(r=>({...r,sourceId:null,effects:r.effects.map(a=>({...a,params:{...a.params}})),transform:{...r.transform},mask:{...r.mask,rect:{...r.mask.rect},center:{...r.mask.center}},feedback:{...r.feedback}})),keyframes:t.keyframes.map(r=>({...r})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Ae("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function Uo(t,e){const i=e.data,r=t.sources.map(n=>n.id),a=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&r.includes(n.sourceId)?n.sourceId:r[Math.min(s,r.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:a,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function No(t,e){if(t.length===0)return null;const i=Me(e);return t[Math.floor(i()*t.length)]}function Wo(t){return{...t,id:Ae("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const Pt=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],Zr=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function qo(t,e,i,r){if(e.randomizable===!1)return i;if(e.kind==="bool")return r<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return r<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(l=>{const m=parseInt(l.slice(1),16),v=m>>16&255,u=m>>8&255,b=m&255,d=h=>te(Math.round(Hi(h,t()*255,r)),0,255);return`#${[d(v),d(u),d(b)].map(h=>h.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const a=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),o=a+t()*(n-a),c=Hi(s,o,Math.max(r,.35));return e.kind==="int"?Math.round(c):c}function ji(t,e,i,r){const a=Qe(t.typeId);if(!a)return t;const n=Me(e),s={...t.params};for(const o of a.params)r&&o.id!==r||(s[o.id]=qo(n,o,s[o.id]??o.default,te(i,0,1)));return{...t,params:s}}function Do(t,e,i,r=!1,a){const n=t.effects.map((s,o)=>r&&a&&s.id!==a?s:ji(s,e+o*997,i));return{...t,effects:n}}function Qr(t,e,i){const r=Qe(t),a={};if(r)for(const n of r.params)a[n.id]=n.default;return ji({id:Ae("fx"),typeId:t,enabled:!0,params:a},e,i)}function Yr(t,e,i,r){const a={...t.params};if(t.typeId==="grade"&&(e==="lush"?(a.saturation=.18+r()*.42,a.brightness=-.04+r()*.16,a.contrast=.06+r()*.22,a.gamma=.82+r()*.35,a.hue=(r()-.5)*.18,a.exposure=-.15+r()*.4):e==="outsider"?(a.saturation=r()>.5?-.35+r()*.3:.4+r()*.5,a.contrast=.2+r()*.55,a.gamma=.55+r()*1.1,a.hue=(r()-.5)*.7):(a.saturation=.05+r()*.5,a.contrast=.1+r()*.35,a.hue=(r()-.5)*.35)),t.typeId==="duotone"&&(a.shadow=i.shadow,a.highlight=i.highlight,a.amount=e==="lush"?.45+r()*.4:.7+r()*.3),t.typeId==="grain"&&(a.leakColor=i.leak,a.leak=e==="lush"?.18+r()*.35:r()*.22,a.grain=e==="lush"?.12+r()*.22:.2+r()*.4),t.typeId==="bloom"&&(a.amount=e==="outsider"?.15+r()*.3:.4+r()*.45,a.halation=e==="lush"?.22+r()*.4:r()*.25,a.size=1.4+r()*2.2),t.typeId==="warp"&&(a.amount=e==="lush"?.012+r()*.04:.04+r()*.12),t.typeId==="chroma"&&(a.amount=e==="lush"?.002+r()*.006:.006+r()*.02),t.typeId==="analog"&&(a.mixScan=e==="lush"?r()*.2:.25+r()*.5,a.noise=e==="lush"?r()*.1:.12+r()*.35),t.typeId==="posterize"&&(a.levels=3+Math.floor(r()*6),a.dither=.08+r()*.35),t.typeId==="threshold"&&(a.mix=.35+r()*.45,a.soft=.04+r()*.18),t.typeId==="critters"){a.count=e==="lush"?3+Math.floor(r()*3):4+Math.floor(r()*4),a.size=.85+r()*.7,a.amount=.7+r()*.3,a.speed=.7+r()*1.3,a.seed=1+Math.floor(r()*9998);const n=r();e==="lush"?a.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?a.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":a.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){a.size=.12+r()*.05,a.count=1,a.crowd="normal",a.place="center";const n=r();e==="lush"?a.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?a.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":a.move=n>.78?"drift":"dance",a.echo=.35+r()*.5,a.amount=1,a.speed=a.move==="dance"?.55+r()*1.5:.32+r()*.7,a.seed=1+Math.floor(r()*9998);const s=r();e==="lush"?a.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?a.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":a.grow=s>.62?"quiet":s>.4?"horns":"wild";const o=r();e==="lush"?a.coat=o>.48?"cream":o>.24?"moss":"wild":e==="mix"?a.coat=o>.5?"sodium":o>.26?"cream":"wild":a.coat=o>.55?"night":"wild"}return t.typeId==="kaleido"&&(a.segments=e==="lush"?4+Math.floor(r()*4):5+Math.floor(r()*8),a.zoom=.7+r()*.8),t.typeId==="channels"&&(a.tint=i.leak,a.tintAmt=e==="lush"?.12+r()*.28:r()*.45),t.typeId==="key"&&(a.lo=.1+r()*.22,a.hi=.5+r()*.35,a.amount=.45+r()*.4,a.invert=r()>.72),t.typeId==="dropout"&&(a.amount=.28+r()*.4,a.rate=.18+r()*.4,a.tear=e==="outsider"?.3+r()*.5:r()*.28),{...t,params:a}}function $o(t,e="mix"){const i=Me(t>>>0);return Yr(Qr("critters",t,.85),e,Pt[t%Pt.length],i)}function jo(t,e="mix"){const i=Me(t>>>0);return Yr(Qr("dancer",t,.85),e,Pt[t%Pt.length],i)}function Vo(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="dancer")?e:{...e,effects:[...e.effects,jo(t.seed+i*4243,"mix")]})}}function Jr(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="critters")?e:{...e,effects:[...e.effects,$o(t.seed+i*7919,"mix")]})}}function Go(){return Zr.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Ko(t,e,i,r=!1){return{...t,blendMode:"normal",opacity:1,effects:[],feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function ea(t,e,i,r,a,n=!1){const s=Math.max(t.randomAmount,e==="all"?.75:0),o=t.seed>>>0,c=Me(o^2654435769),f=t.layers.map((w,x)=>e==="selected"&&w.id!==i?w:e==="param"?w.id!==i?w:{...w,effects:w.effects.map(_=>_.id===r&&a?ji(_,o+x*13,Math.max(s,.55),a):_)}:e==="all"?Ko(w,o+x*7919,s,n):Do(w,o+x*7919,s,!0,r)),l=ts,m=Me(o+0*7919>>>0),v=Go(),u=v[Math.floor(m()*v.length)]??Zr[0],d={"herald tour":{generator:"heraldry",a:Lt(o),b:Et(o)},"dense paper":{generator:"wallpaper",a:Lt(o+3),b:Et(o+3,"#1c4db8")},"giant charges":{generator:"giants",a:Lt(o+5),b:Et(o+5)},"heart rain":{generator:"shower",a:Lt(o+7),b:Et(o+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:Lt(o+9),b:Et(o+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[u.name],h=t.sources.map((w,x)=>{if(e!=="all"||w.kind!=="generator")return w;const _=Me(o+x*131),S=Pt[Math.floor(_()*Pt.length)],R=n?!1:_()>.35&&De(w.generator),B=d?d.generator:R?w.generator:l[Math.floor(_()*l.length)],F=Co(o+x*41),A=De(B)?Ni(o+x*73):void 0,N=De(B)?fi(F,o+x*17):S.inkA,Z=De(B)?qi(F):S.inkB;return{...w,generator:A?Wi(A):B,collageKit:De(B)?F:w.collageKit,collageMove:A??w.collageMove,colorA:d?d.a:N,colorB:d?qi(F):Z}}),p=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:f,sources:h,globalFeedback:p}}function Xo(t){const e=t.seed+7919>>>0,i=Me(e^2246822507),r=["shapes","toy pop","votives","moths","charms"],a=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,sources:t.sources.map((o,c)=>{if(!De(o.generator))return o;const f=wt[Math.floor(i()*wt.length)],l=Ni(e+c*59);return{...o,generator:Wi(l),collageKit:f,collageMove:l,colorA:fi(f,e+c*13),colorB:Et(e+c*29)}}),layers:t.layers.map(o=>({...o,effects:o.effects.map(c=>c.typeId==="critters"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),kit:r[Math.floor(i()*r.length)]}}:c.typeId==="dancer"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),grow:a[Math.floor(i()*a.length)],coat:n[Math.floor(i()*n.length)]}}:c)}))};return s=Jr(s),s}function Zo(){return{x:0,y:0,scale:1,rotation:0}}function Qo(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function ta(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Yo(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Jo(){return{width:960,height:540,fps:24,duration:4,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const ec={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},tc={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC"},ic={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function ia(t="plasma",e,i){const r=De(t)?Ui(e):void 0,a=ec[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let n;r&&(n=i==="mix"||i==="tour"?Ni(Date.now()+Math.floor(Math.random()*997)):i?Or(i):Hr(t));const s=n?Wi(n):t??"plasma",o=n?rs[n]:ic[t??""]??(t?t.toUpperCase():"SIGNAL"),c=r?`${o} · ${tc[r]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":o;return{id:Ae("src"),name:c,kind:"generator",generator:s,colorA:r?fi(r,n==="rush"?1:n==="tunnel"?5:n==="bounce"?7:11):a.a,colorB:r?qi(r):a.b,collageKit:r,collageMove:n,width:1280,height:720,duration:0}}function ra(t){const e=Qe(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const r of e.params)i[r.id]=r.default;return{id:Ae("fx"),typeId:t,enabled:!0,params:i}}function aa(t,e,i=[]){return{id:Ae("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Zo(),effects:i.map(ra),mask:Qo(),feedback:ta()}}function na(){const t=ia("wallpaper","sailor","rush"),e=aa("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Yo(),globalFeedback:{...ta(),amount:0,opacity:.4,scale:1},exportSettings:Jo(),presets:[]},r=ea({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[$i(i,"factory · tour"),$i(r,"factory · scramble")],i}function sa(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,exporting:!1}}class rc{state;listeners=new Set;constructor(e=na()){this.state={project:e,ui:sa(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...sa(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const E=new rc;function Vi(t,e,i,r,a){if(e<=0)return 0;const n=t*Math.max(.01,r);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const o=e*2,c=(s%o+o)%o;return c<=e?c:o-c}return a?(s%e+e)%e:te(s,0,e)}function ac(t,e,i,r,a){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===r&&(i!=="effect"||n.effectId===a)).sort((n,s)=>n.time-s.time)}function nc(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const r=t[t.length-1];if(e>=r.time)return r.value;for(let a=0;a<t.length-1;a++){const n=t[a],s=t[a+1];if(e>=n.time&&e<=s.time){const o=s.time-n.time||1;let c=(e-n.time)/o;return(s.easing==="smooth"||n.easing==="smooth")&&(c=es(c)),Hi(n.value,s.value,c)}}return i}function pt(t,e,i,r,a,n,s){const o=ac(t.keyframes,e,i,r,s);return nc(o,n,a)}function sc(t,e,i){const r={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(a=>({...a,params:{...a.params}}))};r.opacity=pt(t,e.id,"layer","opacity",e.opacity,i),r.transform.x=pt(t,e.id,"layer","x",e.transform.x,i),r.transform.y=pt(t,e.id,"layer","y",e.transform.y,i),r.transform.scale=pt(t,e.id,"layer","scale",e.transform.scale,i),r.transform.rotation=pt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const a of Object.keys(r.feedback))r.feedback[a]=pt(t,e.id,"feedback",a,e.feedback[a],i);for(const a of r.effects)for(const[n,s]of Object.entries(a.params))typeof s=="number"&&(a.params[n]=pt(t,e.id,"effect",n,s,i,a.id));return r}function oc(t,e){const i=t.layers[0]?.id??"";return pt(t,i,"playback","speed",t.playback.speed,e)}const cc=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function lc(t){return(t.type??"").startsWith("audio/")||cc.test(t.name)}function ui(t){return t.sources.find(e=>e.kind==="audio")}let Ut=null,ct=null,Nt=null;const Gi=new WeakSet;let Wt=0,qt=0,di=0;function hi(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(Ut||(Ut=new t,ct=Ut.createAnalyser(),ct.fftSize=256,ct.smoothingTimeConstant=.72,ct.connect(Ut.destination),Nt=new Uint8Array(ct.frequencyBinCount)),Ut):null}async function mi(){const t=hi();t&&t.state==="suspended"&&await Promise.race([t.resume().catch(()=>{}),new Promise(e=>setTimeout(e,400))])}function fc(t){const e=hi();if(!(!e||!ct||Gi.has(t)))try{e.createMediaElementSource(t).connect(ct),Gi.add(t)}catch{Gi.add(t)}}async function uc(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto",fc(i),mi();let r=null;const a=hi();if(a)try{const o=await t.arrayBuffer(),c=a.decodeAudioData(o.slice(0)).catch(()=>null);r=await Promise.race([c,new Promise(f=>setTimeout(()=>f(null),4e3))])}catch{r=null}const n=await Promise.race([new Promise(o=>{if(Number.isFinite(i.duration)&&i.duration>0){o(i.duration);return}i.addEventListener("loadedmetadata",()=>o(Number.isFinite(i.duration)?i.duration:r?.duration??0),{once:!0}),i.addEventListener("error",()=>o(r?.duration??0),{once:!0})}),new Promise(o=>setTimeout(()=>o(r?.duration??0),2500))]),s=r?dc(r.getChannelData(0),r.sampleRate):[];return{id:Ae("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:n||r?.duration||0,audio:i,pcm:r,beats:s,bpm:hc(s),objectUrl:e}}function dc(t,e){if(t.length<e*.4||e<1)return[];const i=Math.max(256,Math.floor(e*.012)),r=i*2,a=Math.floor((t.length-r)/i);if(a<16)return[];const n=new Float32Array(a);for(let l=0;l<a;l++){const m=l*i;let v=0;for(let u=0;u<r;u+=2){const b=t[m+u];v+=b*b}n[l]=Math.sqrt(v/(r*.5))}const s=Math.max(10,Math.floor(.32/(i/e))),o=.3,c=[];let f=-99;for(let l=s;l<a;l++){let m=0,v=0;for(let h=l-s;h<l;h++)m+=n[h],n[h]>v&&(v=n[h]);m/=s;const u=n[l]-n[l-1];if(!(n[l]>m*1.48&&n[l]>v*.82&&u>.006))continue;const d=l*i/e;d-f<o||(c.push(d),f=d)}return c}function hc(t){if(t.length<4)return 0;const e=[];for(let r=1;r<t.length;r++){const a=t[r]-t[r-1];a>=.28&&a<=.8&&e.push(a)}if(e.length<3)return 0;e.sort((r,a)=>r-a);const i=e[Math.floor(e.length/2)];return Ki(Math.round(60/i),70,170)}function mc(t,e,i=.2){if(!t.length)return 0;let r=0,a=t.length-1;for(;r<a;){const o=r+a+1>>1;t[o]<=e?r=o:a=o-1}const n=t[r];if(n>e)return 0;const s=e-n;return s>i*3.2?0:Math.exp(-s/i)}function Ki(t,e,i){return Math.max(e,Math.min(i,t))}function pc(t,e,i,r){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const a=(r%i+i)%i,n=Math.floor(a*e),s=Math.max(64,Math.floor(e*.046)),o=Math.max(0,Math.min(t.length-1,n)),c=Math.max(o+1,Math.min(t.length,n+s));let f=0;for(let h=o;h<c;h++)f+=t[h]*t[h];const l=Math.min(1,Math.sqrt(f/(c-o))*3.4),m=Math.max(s,Math.floor(e*.09)),v=Math.min(t.length,n+m);let u=0,b=0;for(let h=o;h<v;h+=8)u+=t[h]*t[h],b++;const d=Math.min(1,Math.sqrt(u/Math.max(1,b))*4.2);return{energy:l,bass:d}}function gc(){if(!ct||!Nt)return null;ct.getByteFrequencyData(Nt);let t=0,e=0;const i=Nt.length,r=Math.max(4,Math.floor(i*.12));for(let a=0;a<i;a++){const n=Nt[a]/255;t+=n,a<r&&(e+=n)}return{energy:t/i,bass:e/r}}function vc(t,e){let i=0,r=0,a=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=t.pcm.duration,o=(e%s+s)%s,c=pc(t.pcm.getChannelData(0),t.pcm.sampleRate,s,o);i=c.energy,r=c.bass;const f=t.beats??[];a=f.length?mc(f,o):Ki((i-.16)*.55,0,.45)}else if(t?.kind==="audio"){const s=gc();s&&(i=s.energy,r=s.bass,a=Ki((i-.16)*.45,0,.4))}di+=(a-di)*.22;const n=t?.kind==="audio"?.22:.14;return Wt+=(i-Wt)*n,qt+=(r-qt)*Math.min(n,.16),!t&&Wt<.002&&(Wt=0),!t&&qt<.002&&(qt=0),t||(di=0),{energy:Wt,bass:qt,beat:di}}function bc(t,e,i=0){const r=e.length,a=t.length;if(r<1)return;if(a<1){e.fill(0);return}for(let s=0;s<r;s++)e[s]=t[s%a];if(i<=0)return;const n=Math.max(1,Math.round(r*i));for(let s=0;s<n;s++)e[r-n+s]*=1-(s+1)/n}function yc(t,e,i=!1){const r=t.sampleRate,a=Math.max(1,Math.round(Math.max(.05,e)*r)),n=Math.max(1,t.numberOfChannels),s=new AudioBuffer({length:a,numberOfChannels:n,sampleRate:r}),o=i?.12:0;for(let c=0;c<n;c++)bc(t.getChannelData(c),s.getChannelData(c),o);return s}async function wc(t){if(t?.kind!=="audio")return null;if(t.pcm&&t.pcm.length>32&&t.pcm.duration>0)return t.pcm;if(!t.objectUrl)return null;const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return null;try{const i=await Promise.race([fetch(t.objectUrl).then(n=>n.arrayBuffer()),new Promise(n=>setTimeout(()=>n(null),2500))]);if(!i)return null;const r=hi()??new e,a=await Promise.race([r.decodeAudioData(i.slice(0)).catch(()=>null),new Promise(n=>setTimeout(()=>n(null),4e3))]);if(a&&a.length>32)return t.pcm=a,a}catch{return null}return null}function Xi(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const xc=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,kc=`#version 300 es
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
`,_c=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Tc=`#version 300 es
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
`,Cc=`#version 300 es
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
`,Sc=`#version 300 es
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
${Vr}
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
`,$c=`#version 300 es
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
`,jc=`#version 300 es
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
`,oa=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,Vc=`#version 300 es
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
`;class xt extends Error{}function Gc(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new xt("WebGL2 is required for Phosphene.");return e}function ca(t,e,i){const r=t.createShader(e);if(!r)throw new xt("Unable to create shader");if(t.shaderSource(r,i),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(r)??"shader compile failed";throw t.deleteShader(r),new xt(a)}return r}class me{gl;prog;uniforms=new Map;constructor(e,i,r=xc){this.gl=e;const a=ca(e,e.VERTEX_SHADER,r),n=ca(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new xt("Unable to create program");if(e.attachShader(s,a),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(a),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const o=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new xt(o)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const r=this.loc(e);r&&this.gl.uniform1i(r,i)}f(e,i){const r=this.loc(e);r&&this.gl.uniform1f(r,i)}v2(e,i,r){const a=this.loc(e);a&&this.gl.uniform2f(a,i,r)}v3(e,i,r,a){const n=this.loc(e);n&&this.gl.uniform3f(n,i,r,a)}v4(e,i,r,a,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,r,a,n)}dispose(){this.gl.deleteProgram(this.prog)}}function pi(t){const e=t.createTexture();if(!e)throw new xt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function la(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Kc(t,e,i,r){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,r,0,t.RGBA,t.UNSIGNED_BYTE,null)}class At{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new xt("Unable to create framebuffer");this.fbo=i,this.tex=pi(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Kc(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Re(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function Ye(t){t.drawArrays(t.TRIANGLES,0,3)}const Xc={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Zc={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},fa={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function Qc(t){return`${kc}
${t.extraUniforms??""}
${t.applyGlsl}
${_c}`}function Yc(t,e){return new me(t,Qc(e))}function Dt(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const Bt=8;function ua(t,e,i){return new ImageData(t,e,i)}function Jc(t,e,i){const r=t.find(n=>n.id===e);if(!r?.options)return Number(i)||0;const a=r.options.findIndex(n=>n.value===i);return a<0?0:a}class el{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;audioBeat=0;audioBpm=0;effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new xo;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=Gc(e),this.generatorProg=new me(this.gl,Ec)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=Bt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new At(e),this.pong??=new At(e),this.composite??=new At(e),this.post??=new At(e);this.ring.length<Bt;)this.ring.push(new At(e));this.copy??=new me(e,oa),this.blit??=new me(e,Cc),this.compositeProg??=new me(e,Tc),this.feedbackProg??=new me(e,Sc),this.textureProg??=new me(e,Vc),this.black||(this.black=pi(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const r=i[0];if(r.feedback.amount>.001||r.effects.some(n=>n.enabled))return!0;const a=e.sources.find(n=>n.id===r.sourceId);return!!(a&&a.kind!=="generator"&&a.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new me(this.gl,Ac),this.stageProg):e===13?(this.sketchProg??=new me(this.gl,Bc),this.sketchProg):e===14?(this.feltProg??=new me(this.gl,Ic),this.feltProg):e===15?(this.foilProg??=new me(this.gl,Mc),this.foilProg):e===16?(this.plushProg??=new me(this.gl,Rc),this.plushProg):e===17?(this.yarnProg??=new me(this.gl,Fc),this.yarnProg):e===18?(this.sequinProg??=new me(this.gl,zc),this.sequinProg):e===19?(this.quiltProg??=new me(this.gl,Oc),this.quiltProg):e===20?(this.corkProg??=new me(this.gl,Hc),this.corkProg):e===21?(this.ginghamProg??=new me(this.gl,Lc),this.ginghamProg):e===22?(this.sprinkleProg??=new me(this.gl,Uc),this.sprinkleProg):e===23?(this.velvetProg??=new me(this.gl,Nc),this.velvetProg):e===24?(this.confettiProg??=new me(this.gl,Wc),this.confettiProg):e===25?(this.discoProg??=new me(this.gl,qc),this.discoProg):e===26?(this.terrazzoProg??=new me(this.gl,Dc),this.terrazzoProg):e===27?(this.comicProg??=new me(this.gl,$c),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new me(this.gl,jc),this.fieldsProg):(this.generatorFull??=new me(this.gl,Pc),this.generatorFull)}compileType(e,i=!1){const r=e!=="dancer"?e:i?"dancer:mini":"dancer",a=this.effectProg.get(r);if(a)return a;const n=e==="dancer"?Fo(i):Qe(e);if(!n)return null;try{const s=Yc(this.gl,n);return this.effectProg.set(r,s),s}catch(s){return this.lastError=`${r}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const r=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(a=>!!a);for(const a of r)a.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new At(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=pi(this.gl),this.sourceTex.set(e.id,i));const r=e.frozenFrame||e.bitmap||e.video;return r&&la(this.gl,i,r),i}blitTo(e,i){const r=this.gl,a=this.copy;a&&(e.bind(),a.use(),Re(r,0,i),a.i("uTex",0),Ye(r))}drawHeraldry(e,i,r,a,n,s,o){const c=this.gl;this.copy??=new me(c,oa),this.heraldryTex??=pi(c);const f=this.heraldry.paint({width:s,height:o,time:r,duration:n,seed:a,generator:i.generator,kit:i.collageKit,move:i.collageMove,paper:i.colorA??"#ffffff",ink:i.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass,beat:this.audioBeat,bpm:this.audioBpm});if(la(c,this.heraldryTex,f),e){this.blitTo(e,this.heraldryTex);return}c.bindFramebuffer(c.FRAMEBUFFER,null),c.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Re(c,0,this.heraldryTex),this.copy.i("uTex",0),Ye(c)}drawGenerator(e,i,r,a=77,n=8){if(De(i.generator)){this.drawHeraldry(e,i,r,a,n,e.w,e.h);return}const s=this.gl,o=fa[i.generator??"plasma"]??0,c=this.genProg(o);e.bind(),c.use(),c.i("uMode",o),c.f("uTime",r);const f=i.colorA?Dt(i.colorA):[.07,.04,.1],l=i.colorB?Dt(i.colorB):[.92,.78,.55];c.v3("uColorA",f[0],f[1],f[2]),c.v3("uColorB",l[0],l[1],l[2]),c.f("uScale",6),c.f("uSeed",a),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Ye(s)}drawTexture(e,i,r){const a=this.gl,n=this.textureProg;n&&(e.bind(),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),n.use(),Re(a,0,i),n.i("uTex",0),n.v2("uTranslate",r.transform.x,r.transform.y),n.f("uScale",r.transform.scale),n.f("uRotation",r.transform.rotation),n.v2("uFit",1,1),Ye(a))}applyEffect(e,i,r,a,n,s,o,c,f){const l=Qe(r.typeId),m=this.progFor(r);if(!l||!m){this.blitTo(e,i);return}const v=this.gl;e.bind(),m.use(),Re(v,0,i),Re(v,1,c),Re(v,2,f),m.i("uTex",0),m.i("uFeedback",1),m.i("uHistory",2),m.i("uMask",3),m.v2("uResolution",e.w,e.h),m.v2("uTexel",1/e.w,1/e.h),m.f("uTime",n),m.f("uFrame",s),m.f("uQuality",o==="draft"?0:o==="preview"?1:2),m.f("u_audio",this.audioEnergy),m.f("u_bass",this.audioBass),m.v2("u_translate",a.transform.x,a.transform.y),m.f("u_scale",a.transform.scale),m.f("u_rotation",a.transform.rotation);const u=a.mask;m.i("u_maskType",Zc[u.type]??0),m.i("u_maskInvert",u.invert?1:0),m.f("u_maskSoftness",u.softness),m.v4("u_maskRect",u.rect.x,u.rect.y,u.rect.w,u.rect.h),m.v2("u_maskCenter",u.center.x,u.center.y),m.f("u_maskRadius",u.radius),m.f("u_maskGradientAngle",u.gradientAngle),m.f("u_maskNoiseScale",u.noiseScale);let b=1;for(const d of l.params){const h=r.params[d.id]??d.default,p=`u_${d.id}`;if(d.kind==="color"&&typeof h=="string"){const[w,x,_]=Dt(h);m.v3(p,w,x,_)}else d.kind==="bool"?m.f(p,h?1:0):d.kind==="enum"?m.f(p,Jc(l.params,d.id,h)):m.f(p,Number(h));d.id==="mix"&&(b=Number(h))}m.f("u_mix",b),Ye(v)}drawLite(e,i){const r=this.gl,a=e.layers.find(m=>m.enabled)??e.layers[0],n=a?e.sources.find(m=>m.id===a.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};if(De(s.generator)){this.drawHeraldry(null,s,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.canvas.width,this.canvas.height);const o=fa[s.generator??"plasma"]??0,c=this.genProg(o);c.use(),c.i("uMode",o),c.f("uTime",i);const f=s.colorA?Dt(s.colorA):[.07,.04,.1],l=s.colorB?Dt(s.colorB):[.92,.78,.55];c.v3("uColorA",f[0],f[1],f[2]),c.v3("uColorB",l[0],l[1],l[2]),c.f("uScale",6),c.f("uSeed",e.seed),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Ye(r)}render(e,i,r){const a=this.gl,n=r?.quality??e.quality,s=vc(ui(e),i);if(this.audioEnergy=s.energy,this.audioBass=s.bass,this.audioBeat=s.beat,this.audioBpm=ui(e)?.bpm??0,n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const o=this.ping,c=this.pong,f=this.composite,l=this.post,m=this.blit,v=this.compositeProg,u=this.feedbackProg,b=n==="draft"?.5:1,d=Math.max(16,Math.floor((r?.width??this.canvas.width)*b)),h=Math.max(16,Math.floor((r?.height??this.canvas.height)*b));this.ensureSize(d,h),f.bind(),a.clearColor(.02,.02,.03,1),a.clear(a.COLOR_BUFFER_BIT);const p=e.globalFeedback,w=Math.max(0,Math.min(Bt-1,Math.round(p.delay))),x=(this.ringIndex-1-w+Bt*8)%Bt,_=this.ring[x].tex,S=Math.floor(i*e.fps);for(const R of e.layers){if(!R.enabled)continue;const B=sc(e,R,i),F=e.sources.find(T=>T.id===B.sourceId)??null;if(!F||F.kind==="generator"||F.kind==="audio"){const T=F&&F.kind!=="audio"?F:{generator:"plasma"};this.drawGenerator(o,T,i,e.seed,e.duration)}else{const T=this.uploadSource(F);this.drawTexture(o,T,B)}let A=o,N=c;const Z=this.histFor(B.id);for(const T of B.effects){if(!T.enabled)continue;this.applyEffect(N,A.tex,T,B,i,S,n,_,Z.tex);const z=A;A=N,N=z}if(B.feedback.amount>.001){N.bind(),u.use(),Re(a,0,A.tex),Re(a,1,Z.tex),u.i("uTex",0),u.i("uFeedback",1),u.f("uAmount",B.feedback.amount),u.f("uOpacity",B.feedback.opacity),u.f("uScale",B.feedback.scale),u.f("uRotation",B.feedback.rotation),u.f("uDistortion",B.feedback.distortion),u.f("uTime",i),Ye(a);const T=A;A=N,N=T}this.blitTo(l,f.tex),f.bind(),v.use(),Re(a,0,l.tex),Re(a,1,A.tex),v.i("uBase",0),v.i("uLayer",1),v.f("uOpacity",B.opacity),v.i("uBlend",Xc[B.blendMode]??0),v.v2("uResolution",d,h),Ye(a),this.blitTo(Z,A.tex)}p.amount>.001&&(l.bind(),u.use(),Re(a,0,f.tex),Re(a,1,_),u.i("uTex",0),u.i("uFeedback",1),u.f("uAmount",p.amount),u.f("uOpacity",p.opacity),u.f("uScale",p.scale),u.f("uRotation",p.rotation),u.f("uDistortion",p.distortion),u.f("uTime",i),Ye(a),this.blitTo(f,l.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%Bt,a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),m.use(),Re(a,0,f.tex),m.i("uTex",0),m.f("uVignette",r?.vignette??.25),Ye(a)}capture(e,i,r,a,n="image/png",s=.92){const o=this.paintFrame(e,i,r,a);return new Promise((c,f)=>{o.toBlob(l=>{l?c(l):f(new Error("Export failed"))},n,s)})}paintFrame(e,i,r,a,n){const s=n??document.createElement("canvas");s.width!==r&&(s.width=r),s.height!==a&&(s.height=a);const o=s.getContext("2d",{alpha:!1});if(!o)throw new Error("No 2d context");this.render(e,i,{width:r,height:a,quality:"export",vignette:0}),this.gl.finish();const c=this.readPixels(this.width,this.height);if(this.width===r&&this.height===a)o.putImageData(ua(c,r,a),0,0);else{const f=document.createElement("canvas");f.width=this.width,f.height=this.height,f.getContext("2d")?.putImageData(ua(c,this.width,this.height),0,0),o.drawImage(f,0,0,r,a)}return s}readPixels(e,i){const r=this.gl,a=new Uint8Array(e*i*4);r.bindFramebuffer(r.FRAMEBUFFER,this.composite.fbo),r.readPixels(0,0,e,i,r.RGBA,r.UNSIGNED_BYTE,a),r.bindFramebuffer(r.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(a.length)),s=e*4;for(let o=0;o<i;o++)n.set(a.subarray((i-1-o)*s,(i-o)*s),o*s);return n}}const tl=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,il=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function rl(t){return t.type.startsWith("video/")||il.test(t.name)}function al(t){return t.type.startsWith("image/")||tl.test(t.name)}async function nl(t){if(rl(t))return ol(t);if(al(t))return ha(t);if(lc(t))return uc(t);throw new Error(`Unsupported media: ${t.name}`)}async function da(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return ha(i)}async function ha(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Ae("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await sl(e);return{id:Ae("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function sl(t){return new Promise((e,i)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>i(new Error("Image failed to load")),r.src=t})}function ol(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((r,a)=>{const n=()=>{r({id:Ae("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>a(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function cl(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Ae("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function ma(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function ll(t,e,i){if(t.kind!=="video"||!t.video)return;const r=t.video,a=r.duration;if(!Number.isFinite(a)||a<=0)return;const n=(e%a+a)%a,s=!!i?.playing&&!i?.freeze,o=(i?.mode??"forward")==="forward",c=i?.speed??1,f=s&&o&&c>.92&&c<1.08,l=Math.abs(r.currentTime-n);if(!s){if(r.paused||r.pause(),l>1/30)try{r.currentTime=n}catch{}return}if(f){if(r.playbackRate!==1&&(r.playbackRate=1),r.paused&&r.play().catch(()=>{}),l>.35)try{r.currentTime=n}catch{}return}r.paused||r.pause();const m=Math.max(.25,Math.min(4,Math.abs(c)||1));if(r.playbackRate!==m&&(r.playbackRate=m),l>1/30)try{r.currentTime=n}catch{}}const fl=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ul(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function vi(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Zi={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var pa;function dl(){return pa||(pa=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(r,a,n){function s(f,l){if(!a[f]){if(!r[f]){var m=typeof vi=="function"&&vi;if(!l&&m)return m(f,!0);if(o)return o(f,!0);var v=new Error("Cannot find module '"+f+"'");throw v.code="MODULE_NOT_FOUND",v}var u=a[f]={exports:{}};r[f][0].call(u.exports,function(b){var d=r[f][1][b];return s(d||b)},u,u.exports,i,r,a,n)}return a[f].exports}for(var o=typeof vi=="function"&&vi,c=0;c<n.length;c++)s(n[c]);return s})({1:[function(i,r,a){var n=i("./utils"),s=i("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(c){for(var f,l,m,v,u,b,d,h=[],p=0,w=c.length,x=w,_=n.getTypeOf(c)!=="string";p<c.length;)x=w-p,m=_?(f=c[p++],l=p<w?c[p++]:0,p<w?c[p++]:0):(f=c.charCodeAt(p++),l=p<w?c.charCodeAt(p++):0,p<w?c.charCodeAt(p++):0),v=f>>2,u=(3&f)<<4|l>>4,b=1<x?(15&l)<<2|m>>6:64,d=2<x?63&m:64,h.push(o.charAt(v)+o.charAt(u)+o.charAt(b)+o.charAt(d));return h.join("")},a.decode=function(c){var f,l,m,v,u,b,d=0,h=0,p="data:";if(c.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var w,x=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===o.charAt(64)&&x--,c.charAt(c.length-2)===o.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=s.uint8array?new Uint8Array(0|x):new Array(0|x);d<c.length;)f=o.indexOf(c.charAt(d++))<<2|(v=o.indexOf(c.charAt(d++)))>>4,l=(15&v)<<4|(u=o.indexOf(c.charAt(d++)))>>2,m=(3&u)<<6|(b=o.indexOf(c.charAt(d++))),w[h++]=f,u!==64&&(w[h++]=l),b!==64&&(w[h++]=m);return w}},{"./support":30,"./utils":32}],2:[function(i,r,a){var n=i("./external"),s=i("./stream/DataWorker"),o=i("./stream/Crc32Probe"),c=i("./stream/DataLengthProbe");function f(l,m,v,u,b){this.compressedSize=l,this.uncompressedSize=m,this.crc32=v,this.compression=u,this.compressedContent=b}f.prototype={getContentWorker:function(){var l=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),m=this;return l.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),l},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(l,m,v){return l.pipe(new o).pipe(new c("uncompressedSize")).pipe(m.compressWorker(v)).pipe(new c("compressedSize")).withStreamInfo("compression",m)},r.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,a){var n=i("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},a.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,a){var n=i("./utils"),s=(function(){for(var o,c=[],f=0;f<256;f++){o=f;for(var l=0;l<8;l++)o=1&o?3988292384^o>>>1:o>>>1;c[f]=o}return c})();r.exports=function(o,c){return o!==void 0&&o.length?n.getTypeOf(o)!=="string"?(function(f,l,m,v){var u=s,b=v+m;f^=-1;for(var d=v;d<b;d++)f=f>>>8^u[255&(f^l[d])];return-1^f})(0|c,o,o.length,0):(function(f,l,m,v){var u=s,b=v+m;f^=-1;for(var d=v;d<b;d++)f=f>>>8^u[255&(f^l.charCodeAt(d))];return-1^f})(0|c,o,o.length,0):0}},{"./utils":32}],5:[function(i,r,a){a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(i,r,a){var n=null;n=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:n}},{lie:37}],7:[function(i,r,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),o=i("./utils"),c=i("./stream/GenericWorker"),f=n?"uint8array":"array";function l(m,v){c.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=v,this.meta={}}a.magic="\b\0",o.inherits(l,c),l.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(f,m.data),!1)},l.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},l.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},l.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(v){m.push({data:v,meta:m.meta})}},a.compressWorker=function(m){return new l("Deflate",m)},a.uncompressWorker=function(){return new l("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,a){function n(u,b){var d,h="";for(d=0;d<b;d++)h+=String.fromCharCode(255&u),u>>>=8;return h}function s(u,b,d,h,p,w){var x,_,S=u.file,R=u.compression,B=w!==f.utf8encode,F=o.transformTo("string",w(S.name)),A=o.transformTo("string",f.utf8encode(S.name)),N=S.comment,Z=o.transformTo("string",w(N)),T=o.transformTo("string",f.utf8encode(N)),z=A.length!==S.name.length,y=T.length!==N.length,U="",ee="",q="",oe=S.dir,V=S.date,se={crc32:0,compressedSize:0,uncompressedSize:0};b&&!d||(se.crc32=u.crc32,se.compressedSize=u.compressedSize,se.uncompressedSize=u.uncompressedSize);var O=0;b&&(O|=8),B||!z&&!y||(O|=2048);var M=0,ne=0;oe&&(M|=16),p==="UNIX"?(ne=798,M|=(function(Q,ye){var Pe=Q;return Q||(Pe=ye?16893:33204),(65535&Pe)<<16})(S.unixPermissions,oe)):(ne=20,M|=(function(Q){return 63&(Q||0)})(S.dosPermissions)),x=V.getUTCHours(),x<<=6,x|=V.getUTCMinutes(),x<<=5,x|=V.getUTCSeconds()/2,_=V.getUTCFullYear()-1980,_<<=4,_|=V.getUTCMonth()+1,_<<=5,_|=V.getUTCDate(),z&&(ee=n(1,1)+n(l(F),4)+A,U+="up"+n(ee.length,2)+ee),y&&(q=n(1,1)+n(l(Z),4)+T,U+="uc"+n(q.length,2)+q);var Y="";return Y+=`
\0`,Y+=n(O,2),Y+=R.magic,Y+=n(x,2),Y+=n(_,2),Y+=n(se.crc32,4),Y+=n(se.compressedSize,4),Y+=n(se.uncompressedSize,4),Y+=n(F.length,2),Y+=n(U.length,2),{fileRecord:m.LOCAL_FILE_HEADER+Y+F+U,dirRecord:m.CENTRAL_FILE_HEADER+n(ne,2)+Y+n(Z.length,2)+"\0\0\0\0"+n(M,4)+n(h,4)+F+U+Z}}var o=i("../utils"),c=i("../stream/GenericWorker"),f=i("../utf8"),l=i("../crc32"),m=i("../signature");function v(u,b,d,h){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=d,this.encodeFileName=h,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(v,c),v.prototype.push=function(u){var b=u.meta.percent||0,d=this.entriesCount,h=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,c.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:d?(b+100*(d-h-1))/d:100}}))},v.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var b=this.streamFiles&&!u.file.dir;if(b){var d=s(u,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(u){this.accumulate=!1;var b=this.streamFiles&&!u.file.dir,d=s(u,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),b)this.push({data:(function(h){return m.DATA_DESCRIPTOR+n(h.crc32,4)+n(h.compressedSize,4)+n(h.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var u=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var d=this.bytesWritten-u,h=(function(p,w,x,_,S){var R=o.transformTo("string",S(_));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(p,2)+n(p,2)+n(w,4)+n(x,4)+n(R.length,2)+R})(this.dirRecords.length,d,u,this.zipComment,this.encodeFileName);this.push({data:h,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(u){this._sources.push(u);var b=this;return u.on("data",function(d){b.processChunk(d)}),u.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),u.on("error",function(d){b.error(d)}),this},v.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(u){var b=this._sources;if(!c.prototype.error.call(this,u))return!1;for(var d=0;d<b.length;d++)try{b[d].error(u)}catch{}return!0},v.prototype.lock=function(){c.prototype.lock.call(this);for(var u=this._sources,b=0;b<u.length;b++)u[b].lock()},r.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,a){var n=i("../compressions"),s=i("./ZipFileWorker");a.generateWorker=function(o,c,f){var l=new s(c.streamFiles,f,c.platform,c.encodeFileName),m=0;try{o.forEach(function(v,u){m++;var b=(function(w,x){var _=w||x,S=n[_];if(!S)throw new Error(_+" is not a valid compression method !");return S})(u.options.compression,c.compression),d=u.options.compressionOptions||c.compressionOptions||{},h=u.dir,p=u.date;u._compressWorker(b,d).withStreamInfo("file",{name:v,dir:h,date:p,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(l)}),l.entriesCount=m}catch(v){l.error(v)}return l}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,a){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var o in this)typeof this[o]!="function"&&(s[o]=this[o]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,o){return new n().loadAsync(s,o)},n.external=i("./external"),r.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,a){var n=i("./utils"),s=i("./external"),o=i("./utf8"),c=i("./zipEntries"),f=i("./stream/Crc32Probe"),l=i("./nodejsUtils");function m(v){return new s.Promise(function(u,b){var d=v.decompressed.getContentWorker().pipe(new f);d.on("error",function(h){b(h)}).on("end",function(){d.streamInfo.crc32!==v.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}r.exports=function(v,u){var b=this;return u=n.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),l.isNode&&l.isStream(v)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",v,!0,u.optimizedBinaryString,u.base64).then(function(d){var h=new c(u);return h.load(d),h}).then(function(d){var h=[s.Promise.resolve(d)],p=d.files;if(u.checkCRC32)for(var w=0;w<p.length;w++)h.push(m(p[w]));return s.Promise.all(h)}).then(function(d){for(var h=d.shift(),p=h.files,w=0;w<p.length;w++){var x=p[w],_=x.fileNameStr,S=n.resolve(x.fileNameStr);b.file(S,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:u.createFolders}),x.dir||(b.file(S).unsafeOriginalName=_)}return h.zipComment.length&&(b.comment=h.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,a){var n=i("../utils"),s=i("../stream/GenericWorker");function o(c,f){s.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(f)}n.inherits(o,s),o.prototype._bindStream=function(c){var f=this;(this._stream=c).pause(),c.on("data",function(l){f.push({data:l,meta:{percent:0}})}).on("error",function(l){f.isPaused?this.generatedError=l:f.error(l)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},o.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,a){var n=i("readable-stream").Readable;function s(o,c,f){n.call(this,c),this._helper=o;var l=this;o.on("data",function(m,v){l.push(m)||l._helper.pause(),f&&f(v)}).on("error",function(m){l.emit("error",m)}).on("end",function(){l.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},r.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,r,a){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,r,a){function n(S,R,B){var F,A=o.getTypeOf(R),N=o.extend(B||{},l);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&16384&N.unixPermissions&&(N.dir=!0),N.dosPermissions&&16&N.dosPermissions&&(N.dir=!0),N.dir&&(S=p(S)),N.createFolders&&(F=h(S))&&w.call(this,F,!0);var Z=A==="string"&&N.binary===!1&&N.base64===!1;B&&B.binary!==void 0||(N.binary=!Z),(R instanceof m&&R.uncompressedSize===0||N.dir||!R||R.length===0)&&(N.base64=!1,N.binary=!0,R="",N.compression="STORE",A="string");var T=null;T=R instanceof m||R instanceof c?R:b.isNode&&b.isStream(R)?new d(S,R):o.prepareContent(S,R,N.binary,N.optimizedBinaryString,N.base64);var z=new v(S,T,N);this.files[S]=z}var s=i("./utf8"),o=i("./utils"),c=i("./stream/GenericWorker"),f=i("./stream/StreamHelper"),l=i("./defaults"),m=i("./compressedObject"),v=i("./zipObject"),u=i("./generate"),b=i("./nodejsUtils"),d=i("./nodejs/NodejsStreamInputAdapter"),h=function(S){S.slice(-1)==="/"&&(S=S.substring(0,S.length-1));var R=S.lastIndexOf("/");return 0<R?S.substring(0,R):""},p=function(S){return S.slice(-1)!=="/"&&(S+="/"),S},w=function(S,R){return R=R!==void 0?R:l.createFolders,S=p(S),this.files[S]||n.call(this,S,null,{dir:!0,createFolders:R}),this.files[S]};function x(S){return Object.prototype.toString.call(S)==="[object RegExp]"}var _={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(S){var R,B,F;for(R in this.files)F=this.files[R],(B=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&S(B,F)},filter:function(S){var R=[];return this.forEach(function(B,F){S(B,F)&&R.push(F)}),R},file:function(S,R,B){if(arguments.length!==1)return S=this.root+S,n.call(this,S,R,B),this;if(x(S)){var F=S;return this.filter(function(N,Z){return!Z.dir&&F.test(N)})}var A=this.files[this.root+S];return A&&!A.dir?A:null},folder:function(S){if(!S)return this;if(x(S))return this.filter(function(A,N){return N.dir&&S.test(A)});var R=this.root+S,B=w.call(this,R),F=this.clone();return F.root=B.name,F},remove:function(S){S=this.root+S;var R=this.files[S];if(R||(S.slice(-1)!=="/"&&(S+="/"),R=this.files[S]),R&&!R.dir)delete this.files[S];else for(var B=this.filter(function(A,N){return N.name.slice(0,S.length)===S}),F=0;F<B.length;F++)delete this.files[B[F].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(S){var R,B={};try{if((B=o.extend(S||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=B.type.toLowerCase(),B.compression=B.compression.toUpperCase(),B.type==="binarystring"&&(B.type="string"),!B.type)throw new Error("No output type specified.");o.checkSupport(B.type),B.platform!=="darwin"&&B.platform!=="freebsd"&&B.platform!=="linux"&&B.platform!=="sunos"||(B.platform="UNIX"),B.platform==="win32"&&(B.platform="DOS");var F=B.comment||this.comment||"";R=u.generateWorker(this,B,F)}catch(A){(R=new c("error")).error(A)}return new f(R,B.type||"string",B.mimeType)},generateAsync:function(S,R){return this.generateInternalStream(S).accumulate(R)},generateNodeStream:function(S,R){return(S=S||{}).type||(S.type="nodebuffer"),this.generateInternalStream(S).toNodejsStream(R)}};r.exports=_},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,a){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,a){var n=i("./DataReader");function s(o){n.call(this,o);for(var c=0;c<this.data.length;c++)o[c]=255&o[c]}i("../utils").inherits(s,n),s.prototype.byteAt=function(o){return this.data[this.zero+o]},s.prototype.lastIndexOfSignature=function(o){for(var c=o.charCodeAt(0),f=o.charCodeAt(1),l=o.charCodeAt(2),m=o.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===c&&this.data[v+1]===f&&this.data[v+2]===l&&this.data[v+3]===m)return v-this.zero;return-1},s.prototype.readAndCheckSignature=function(o){var c=o.charCodeAt(0),f=o.charCodeAt(1),l=o.charCodeAt(2),m=o.charCodeAt(3),v=this.readData(4);return c===v[0]&&f===v[1]&&l===v[2]&&m===v[3]},s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,r,a){var n=i("../utils");function s(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var c,f=0;for(this.checkOffset(o),c=this.index+o-1;c>=this.index;c--)f=(f<<8)+this.byteAt(c);return this.index+=o,f},readString:function(o){return n.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},r.exports=s},{"../utils":32}],19:[function(i,r,a){var n=i("./Uint8ArrayReader");function s(o){n.call(this,o)}i("../utils").inherits(s,n),s.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,a){var n=i("./DataReader");function s(o){n.call(this,o)}i("../utils").inherits(s,n),s.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},s.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},s.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},s.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,r,a){var n=i("./ArrayReader");function s(o){n.call(this,o)}i("../utils").inherits(s,n),s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,a){var n=i("../utils"),s=i("../support"),o=i("./ArrayReader"),c=i("./StringReader"),f=i("./NodeBufferReader"),l=i("./Uint8ArrayReader");r.exports=function(m){var v=n.getTypeOf(m);return n.checkSupport(v),v!=="string"||s.uint8array?v==="nodebuffer"?new f(m):s.uint8array?new l(n.transformTo("uint8array",m)):new o(n.transformTo("array",m)):new c(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,a){a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,a){var n=i("./GenericWorker"),s=i("../utils");function o(c){n.call(this,"ConvertWorker to "+c),this.destType=c}s.inherits(o,n),o.prototype.processChunk=function(c){this.push({data:s.transformTo(this.destType,c.data),meta:c.meta})},r.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,a){var n=i("./GenericWorker"),s=i("../crc32");function o(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(o,n),o.prototype.processChunk=function(c){this.streamInfo.crc32=s(c.data,this.streamInfo.crc32||0),this.push(c)},r.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,a){var n=i("../utils"),s=i("./GenericWorker");function o(c){s.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(o,s),o.prototype.processChunk=function(c){if(c){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+c.data.length}s.prototype.processChunk.call(this,c)},r.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,a){var n=i("../utils"),s=i("./GenericWorker");function o(c){s.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(l){f.dataIsReady=!0,f.data=l,f.max=l&&l.length||0,f.type=n.getTypeOf(l),f.isPaused||f._tickAndRepeat()},function(l){f.error(l)})}n.inherits(o,s),o.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,f);break;case"uint8array":c=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":c=this.data.slice(this.index,f)}return this.index=f,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,a){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,o){return this._listeners[s].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,o){if(this._listeners[s])for(var c=0;c<this._listeners[s].length;c++)this._listeners[s][c].call(this,o)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var o=this;return s.on("data",function(c){o.processChunk(c)}),s.on("end",function(){o.end()}),s.on("error",function(c){o.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,o){return this.extraStreamInfo[s]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=n},{}],29:[function(i,r,a){var n=i("../utils"),s=i("./ConvertWorker"),o=i("./GenericWorker"),c=i("../base64"),f=i("../support"),l=i("../external"),m=null;if(f.nodestream)try{m=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(b,d){return new l.Promise(function(h,p){var w=[],x=b._internalType,_=b._outputType,S=b._mimeType;b.on("data",function(R,B){w.push(R),d&&d(B)}).on("error",function(R){w=[],p(R)}).on("end",function(){try{var R=(function(B,F,A){switch(B){case"blob":return n.newBlob(n.transformTo("arraybuffer",F),A);case"base64":return c.encode(F);default:return n.transformTo(B,F)}})(_,(function(B,F){var A,N=0,Z=null,T=0;for(A=0;A<F.length;A++)T+=F[A].length;switch(B){case"string":return F.join("");case"array":return Array.prototype.concat.apply([],F);case"uint8array":for(Z=new Uint8Array(T),A=0;A<F.length;A++)Z.set(F[A],N),N+=F[A].length;return Z;case"nodebuffer":return Buffer.concat(F);default:throw new Error("concat : unsupported type '"+B+"'")}})(x,w),S);h(R)}catch(B){p(B)}w=[]}).resume()})}function u(b,d,h){var p=d;switch(d){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=d,this._mimeType=h,n.checkSupport(p),this._worker=b.pipe(new s(p)),b.lock()}catch(w){this._worker=new o("error"),this._worker.error(w)}}u.prototype={accumulate:function(b){return v(this,b)},on:function(b,d){var h=this;return b==="data"?this._worker.on(b,function(p){d.call(h,p.data,p.meta)}):this._worker.on(b,function(){n.delay(d,arguments,h)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},b)}},r.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,a){if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var n=new ArrayBuffer(0);try{a.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),a.blob=s.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!i("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,a){for(var n=i("./utils"),s=i("./support"),o=i("./nodejsUtils"),c=i("./stream/GenericWorker"),f=new Array(256),l=0;l<256;l++)f[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;f[254]=f[254]=1;function m(){c.call(this,"utf-8 decode"),this.leftOver=null}function v(){c.call(this,"utf-8 encode")}a.utf8encode=function(u){return s.nodebuffer?o.newBufferFrom(u,"utf-8"):(function(b){var d,h,p,w,x,_=b.length,S=0;for(w=0;w<_;w++)(64512&(h=b.charCodeAt(w)))==55296&&w+1<_&&(64512&(p=b.charCodeAt(w+1)))==56320&&(h=65536+(h-55296<<10)+(p-56320),w++),S+=h<128?1:h<2048?2:h<65536?3:4;for(d=s.uint8array?new Uint8Array(S):new Array(S),w=x=0;x<S;w++)(64512&(h=b.charCodeAt(w)))==55296&&w+1<_&&(64512&(p=b.charCodeAt(w+1)))==56320&&(h=65536+(h-55296<<10)+(p-56320),w++),h<128?d[x++]=h:(h<2048?d[x++]=192|h>>>6:(h<65536?d[x++]=224|h>>>12:(d[x++]=240|h>>>18,d[x++]=128|h>>>12&63),d[x++]=128|h>>>6&63),d[x++]=128|63&h);return d})(u)},a.utf8decode=function(u){return s.nodebuffer?n.transformTo("nodebuffer",u).toString("utf-8"):(function(b){var d,h,p,w,x=b.length,_=new Array(2*x);for(d=h=0;d<x;)if((p=b[d++])<128)_[h++]=p;else if(4<(w=f[p]))_[h++]=65533,d+=w-1;else{for(p&=w===2?31:w===3?15:7;1<w&&d<x;)p=p<<6|63&b[d++],w--;1<w?_[h++]=65533:p<65536?_[h++]=p:(p-=65536,_[h++]=55296|p>>10&1023,_[h++]=56320|1023&p)}return _.length!==h&&(_.subarray?_=_.subarray(0,h):_.length=h),n.applyFromCharCode(_)})(u=n.transformTo(s.uint8array?"uint8array":"array",u))},n.inherits(m,c),m.prototype.processChunk=function(u){var b=n.transformTo(s.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var d=b;(b=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),b.set(d,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var h=(function(w,x){var _;for((x=x||w.length)>w.length&&(x=w.length),_=x-1;0<=_&&(192&w[_])==128;)_--;return _<0||_===0?x:_+f[w[_]]>x?_:x})(b),p=b;h!==b.length&&(s.uint8array?(p=b.subarray(0,h),this.leftOver=b.subarray(h,b.length)):(p=b.slice(0,h),this.leftOver=b.slice(h,b.length))),this.push({data:a.utf8decode(p),meta:u.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=m,n.inherits(v,c),v.prototype.processChunk=function(u){this.push({data:a.utf8encode(u.data),meta:u.meta})},a.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,a){var n=i("./support"),s=i("./base64"),o=i("./nodejsUtils"),c=i("./external");function f(d){return d}function l(d,h){for(var p=0;p<d.length;++p)h[p]=255&d.charCodeAt(p);return h}i("setimmediate"),a.newBlob=function(d,h){a.checkSupport("blob");try{return new Blob([d],{type:h})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(d),p.getBlob(h)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(d,h,p){var w=[],x=0,_=d.length;if(_<=p)return String.fromCharCode.apply(null,d);for(;x<_;)h==="array"||h==="nodebuffer"?w.push(String.fromCharCode.apply(null,d.slice(x,Math.min(x+p,_)))):w.push(String.fromCharCode.apply(null,d.subarray(x,Math.min(x+p,_)))),x+=p;return w.join("")},stringifyByChar:function(d){for(var h="",p=0;p<d.length;p++)h+=String.fromCharCode(d[p]);return h},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function v(d){var h=65536,p=a.getTypeOf(d),w=!0;if(p==="uint8array"?w=m.applyCanBeUsed.uint8array:p==="nodebuffer"&&(w=m.applyCanBeUsed.nodebuffer),w)for(;1<h;)try{return m.stringifyByChunk(d,p,h)}catch{h=Math.floor(h/2)}return m.stringifyByChar(d)}function u(d,h){for(var p=0;p<d.length;p++)h[p]=d[p];return h}a.applyFromCharCode=v;var b={};b.string={string:f,array:function(d){return l(d,new Array(d.length))},arraybuffer:function(d){return b.string.uint8array(d).buffer},uint8array:function(d){return l(d,new Uint8Array(d.length))},nodebuffer:function(d){return l(d,o.allocBuffer(d.length))}},b.array={string:v,array:f,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(d)}},b.arraybuffer={string:function(d){return v(new Uint8Array(d))},array:function(d){return u(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:f,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(new Uint8Array(d))}},b.uint8array={string:v,array:function(d){return u(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:f,nodebuffer:function(d){return o.newBufferFrom(d)}},b.nodebuffer={string:v,array:function(d){return u(d,new Array(d.length))},arraybuffer:function(d){return b.nodebuffer.uint8array(d).buffer},uint8array:function(d){return u(d,new Uint8Array(d.length))},nodebuffer:f},a.transformTo=function(d,h){if(h=h||"",!d)return h;a.checkSupport(d);var p=a.getTypeOf(h);return b[p][d](h)},a.resolve=function(d){for(var h=d.split("/"),p=[],w=0;w<h.length;w++){var x=h[w];x==="."||x===""&&w!==0&&w!==h.length-1||(x===".."?p.pop():p.push(x))}return p.join("/")},a.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":n.nodebuffer&&o.isBuffer(d)?"nodebuffer":n.uint8array&&d instanceof Uint8Array?"uint8array":n.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(d){if(!n[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(d){var h,p,w="";for(p=0;p<(d||"").length;p++)w+="\\x"+((h=d.charCodeAt(p))<16?"0":"")+h.toString(16).toUpperCase();return w},a.delay=function(d,h,p){setImmediate(function(){d.apply(p||null,h||[])})},a.inherits=function(d,h){function p(){}p.prototype=h.prototype,d.prototype=new p},a.extend=function(){var d,h,p={};for(d=0;d<arguments.length;d++)for(h in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],h)&&p[h]===void 0&&(p[h]=arguments[d][h]);return p},a.prepareContent=function(d,h,p,w,x){return c.Promise.resolve(h).then(function(_){return n.blob&&(_ instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(_))!==-1)&&typeof FileReader<"u"?new c.Promise(function(S,R){var B=new FileReader;B.onload=function(F){S(F.target.result)},B.onerror=function(F){R(F.target.error)},B.readAsArrayBuffer(_)}):_}).then(function(_){var S=a.getTypeOf(_);return S?(S==="arraybuffer"?_=a.transformTo("uint8array",_):S==="string"&&(x?_=s.decode(_):p&&w!==!0&&(_=(function(R){return l(R,n.uint8array?new Uint8Array(R.length):new Array(R.length))})(_))),_):c.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,a){var n=i("./reader/readerFor"),s=i("./utils"),o=i("./signature"),c=i("./zipEntry"),f=i("./support");function l(m){this.files=[],this.loadOptions=m}l.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(v)+", expected "+s.pretty(m)+")")}},isSignature:function(m,v){var u=this.reader.index;this.reader.setIndex(m);var b=this.reader.readString(4)===v;return this.reader.setIndex(u),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),v=f.uint8array?"uint8array":"array",u=s.transformTo(v,m);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,v,u,b=this.zip64EndOfCentralSize-44;0<b;)m=this.reader.readInt(2),v=this.reader.readInt(4),u=this.reader.readData(v),this.zip64ExtensibleData[m]={id:m,length:v,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,v;for(m=0;m<this.files.length;m++)v=this.files[m],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(m=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var v=m;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var b=v-u;if(0<b)this.isSignature(v,o.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(m){this.reader=n(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=l},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,a){var n=i("./reader/readerFor"),s=i("./utils"),o=i("./compressedObject"),c=i("./crc32"),f=i("./utf8"),l=i("./compressions"),m=i("./support");function v(u,b){this.options=u,this.loadOptions=b}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var b,d;if(u.skip(22),this.fileNameLength=u.readInt(2),d=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=(function(h){for(var p in l)if(Object.prototype.hasOwnProperty.call(l,p)&&l[p].magic===h)return l[p];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,b,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var b=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(b),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var b,d,h,p=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<p;)b=u.readInt(2),d=u.readInt(2),h=u.readData(d),this.extraFields[b]={id:b,length:d,value:h};u.setIndex(p)},handleUTF8:function(){var u=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var d=s.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var h=this.findExtraFieldUnicodeComment();if(h!==null)this.fileCommentStr=h;else{var p=s.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var b=n(u.value);return b.readInt(1)!==1||c(this.fileName)!==b.readInt(4)?null:f.utf8decode(b.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var b=n(u.value);return b.readInt(1)!==1||c(this.fileComment)!==b.readInt(4)?null:f.utf8decode(b.readData(u.length-5))}return null}},r.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,a){function n(b,d,h){this.name=b,this.dir=h.dir,this.date=h.date,this.comment=h.comment,this.unixPermissions=h.unixPermissions,this.dosPermissions=h.dosPermissions,this._data=d,this._dataBinary=h.binary,this.options={compression:h.compression,compressionOptions:h.compressionOptions}}var s=i("./stream/StreamHelper"),o=i("./stream/DataWorker"),c=i("./utf8"),f=i("./compressedObject"),l=i("./stream/GenericWorker");n.prototype={internalStream:function(b){var d=null,h="string";try{if(!b)throw new Error("No output type specified.");var p=(h=b.toLowerCase())==="string"||h==="text";h!=="binarystring"&&h!=="text"||(h="string"),d=this._decompressWorker();var w=!this._dataBinary;w&&!p&&(d=d.pipe(new c.Utf8EncodeWorker)),!w&&p&&(d=d.pipe(new c.Utf8DecodeWorker))}catch(x){(d=new l("error")).error(x)}return new s(d,h,"")},async:function(b,d){return this.internalStream(b).accumulate(d)},nodeStream:function(b,d){return this.internalStream(b||"nodebuffer").toNodejsStream(d)},_compressWorker:function(b,d){if(this._data instanceof f&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var h=this._decompressWorker();return this._dataBinary||(h=h.pipe(new c.Utf8EncodeWorker)),f.createWorkerFrom(h,b,d)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof l?this._data:new o(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<m.length;u++)n.prototype[m[u]]=v;r.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,a){(function(n){var s,o,c=n.MutationObserver||n.WebKitMutationObserver;if(c){var f=0,l=new c(b),m=n.document.createTextNode("");l.observe(m,{characterData:!0}),s=function(){m.data=f=++f%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var d=n.document.createElement("script");d.onreadystatechange=function(){b(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},n.document.documentElement.appendChild(d)}:function(){setTimeout(b,0)};else{var v=new n.MessageChannel;v.port1.onmessage=b,s=function(){v.port2.postMessage(0)}}var u=[];function b(){var d,h;o=!0;for(var p=u.length;p;){for(h=u,u=[],d=-1;++d<p;)h[d]();p=u.length}o=!1}r.exports=function(d){u.push(d)!==1||o||s()}}).call(this,typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,a){var n=i("immediate");function s(){}var o={},c=["REJECTED"],f=["FULFILLED"],l=["PENDING"];function m(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,p!==s&&d(this,p)}function v(p,w,x){this.promise=p,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function u(p,w,x){n(function(){var _;try{_=w(x)}catch(S){return o.reject(p,S)}_===p?o.reject(p,new TypeError("Cannot resolve promise with itself")):o.resolve(p,_)})}function b(p){var w=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof w=="function")return function(){w.apply(p,arguments)}}function d(p,w){var x=!1;function _(B){x||(x=!0,o.reject(p,B))}function S(B){x||(x=!0,o.resolve(p,B))}var R=h(function(){w(S,_)});R.status==="error"&&_(R.value)}function h(p,w){var x={};try{x.value=p(w),x.status="success"}catch(_){x.status="error",x.value=_}return x}(r.exports=m).prototype.finally=function(p){if(typeof p!="function")return this;var w=this.constructor;return this.then(function(x){return w.resolve(p()).then(function(){return x})},function(x){return w.resolve(p()).then(function(){throw x})})},m.prototype.catch=function(p){return this.then(null,p)},m.prototype.then=function(p,w){if(typeof p!="function"&&this.state===f||typeof w!="function"&&this.state===c)return this;var x=new this.constructor(s);return this.state!==l?u(x,this.state===f?p:w,this.outcome):this.queue.push(new v(x,p,w)),x},v.prototype.callFulfilled=function(p){o.resolve(this.promise,p)},v.prototype.otherCallFulfilled=function(p){u(this.promise,this.onFulfilled,p)},v.prototype.callRejected=function(p){o.reject(this.promise,p)},v.prototype.otherCallRejected=function(p){u(this.promise,this.onRejected,p)},o.resolve=function(p,w){var x=h(b,w);if(x.status==="error")return o.reject(p,x.value);var _=x.value;if(_)d(p,_);else{p.state=f,p.outcome=w;for(var S=-1,R=p.queue.length;++S<R;)p.queue[S].callFulfilled(w)}return p},o.reject=function(p,w){p.state=c,p.outcome=w;for(var x=-1,_=p.queue.length;++x<_;)p.queue[x].callRejected(w);return p},m.resolve=function(p){return p instanceof this?p:o.resolve(new this(s),p)},m.reject=function(p){var w=new this(s);return o.reject(w,p)},m.all=function(p){var w=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=p.length,_=!1;if(!x)return this.resolve([]);for(var S=new Array(x),R=0,B=-1,F=new this(s);++B<x;)A(p[B],B);return F;function A(N,Z){w.resolve(N).then(function(T){S[Z]=T,++R!==x||_||(_=!0,o.resolve(F,S))},function(T){_||(_=!0,o.reject(F,T))})}},m.race=function(p){var w=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=p.length,_=!1;if(!x)return this.resolve([]);for(var S=-1,R=new this(s);++S<x;)B=p[S],w.resolve(B).then(function(F){_||(_=!0,o.resolve(R,F))},function(F){_||(_=!0,o.reject(R,F))});var B;return R}},{immediate:36}],38:[function(i,r,a){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,a){var n=i("./zlib/deflate"),s=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/messages"),f=i("./zlib/zstream"),l=Object.prototype.toString,m=0,v=-1,u=0,b=8;function d(p){if(!(this instanceof d))return new d(p);this.options=s.assign({level:v,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},p||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var x=n.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(x!==m)throw new Error(c[x]);if(w.header&&n.deflateSetHeader(this.strm,w.header),w.dictionary){var _;if(_=typeof w.dictionary=="string"?o.string2buf(w.dictionary):l.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(x=n.deflateSetDictionary(this.strm,_))!==m)throw new Error(c[x]);this._dict_set=!0}}function h(p,w){var x=new d(w);if(x.push(p,!0),x.err)throw x.msg||c[x.err];return x.result}d.prototype.push=function(p,w){var x,_,S=this.strm,R=this.options.chunkSize;if(this.ended)return!1;_=w===~~w?w:w===!0?4:0,typeof p=="string"?S.input=o.string2buf(p):l.call(p)==="[object ArrayBuffer]"?S.input=new Uint8Array(p):S.input=p,S.next_in=0,S.avail_in=S.input.length;do{if(S.avail_out===0&&(S.output=new s.Buf8(R),S.next_out=0,S.avail_out=R),(x=n.deflate(S,_))!==1&&x!==m)return this.onEnd(x),!(this.ended=!0);S.avail_out!==0&&(S.avail_in!==0||_!==4&&_!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(s.shrinkBuf(S.output,S.next_out))):this.onData(s.shrinkBuf(S.output,S.next_out)))}while((0<S.avail_in||S.avail_out===0)&&x!==1);return _===4?(x=n.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===m):_!==2||(this.onEnd(m),!(S.avail_out=0))},d.prototype.onData=function(p){this.chunks.push(p)},d.prototype.onEnd=function(p){p===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},a.Deflate=d,a.deflate=h,a.deflateRaw=function(p,w){return(w=w||{}).raw=!0,h(p,w)},a.gzip=function(p,w){return(w=w||{}).gzip=!0,h(p,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,a){var n=i("./zlib/inflate"),s=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/constants"),f=i("./zlib/messages"),l=i("./zlib/zstream"),m=i("./zlib/gzheader"),v=Object.prototype.toString;function u(d){if(!(this instanceof u))return new u(d);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},d||{});var h=this.options;h.raw&&0<=h.windowBits&&h.windowBits<16&&(h.windowBits=-h.windowBits,h.windowBits===0&&(h.windowBits=-15)),!(0<=h.windowBits&&h.windowBits<16)||d&&d.windowBits||(h.windowBits+=32),15<h.windowBits&&h.windowBits<48&&(15&h.windowBits)==0&&(h.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var p=n.inflateInit2(this.strm,h.windowBits);if(p!==c.Z_OK)throw new Error(f[p]);this.header=new m,n.inflateGetHeader(this.strm,this.header)}function b(d,h){var p=new u(h);if(p.push(d,!0),p.err)throw p.msg||f[p.err];return p.result}u.prototype.push=function(d,h){var p,w,x,_,S,R,B=this.strm,F=this.options.chunkSize,A=this.options.dictionary,N=!1;if(this.ended)return!1;w=h===~~h?h:h===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof d=="string"?B.input=o.binstring2buf(d):v.call(d)==="[object ArrayBuffer]"?B.input=new Uint8Array(d):B.input=d,B.next_in=0,B.avail_in=B.input.length;do{if(B.avail_out===0&&(B.output=new s.Buf8(F),B.next_out=0,B.avail_out=F),(p=n.inflate(B,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&A&&(R=typeof A=="string"?o.string2buf(A):v.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,p=n.inflateSetDictionary(this.strm,R)),p===c.Z_BUF_ERROR&&N===!0&&(p=c.Z_OK,N=!1),p!==c.Z_STREAM_END&&p!==c.Z_OK)return this.onEnd(p),!(this.ended=!0);B.next_out&&(B.avail_out!==0&&p!==c.Z_STREAM_END&&(B.avail_in!==0||w!==c.Z_FINISH&&w!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=o.utf8border(B.output,B.next_out),_=B.next_out-x,S=o.buf2string(B.output,x),B.next_out=_,B.avail_out=F-_,_&&s.arraySet(B.output,B.output,x,_,0),this.onData(S)):this.onData(s.shrinkBuf(B.output,B.next_out)))),B.avail_in===0&&B.avail_out===0&&(N=!0)}while((0<B.avail_in||B.avail_out===0)&&p!==c.Z_STREAM_END);return p===c.Z_STREAM_END&&(w=c.Z_FINISH),w===c.Z_FINISH?(p=n.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===c.Z_OK):w!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(B.avail_out=0))},u.prototype.onData=function(d){this.chunks.push(d)},u.prototype.onEnd=function(d){d===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},a.Inflate=u,a.inflate=b,a.inflateRaw=function(d,h){return(h=h||{}).raw=!0,b(d,h)},a.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(c){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var l=f.shift();if(l){if(typeof l!="object")throw new TypeError(l+"must be non-object");for(var m in l)l.hasOwnProperty(m)&&(c[m]=l[m])}}return c},a.shrinkBuf=function(c,f){return c.length===f?c:c.subarray?c.subarray(0,f):(c.length=f,c)};var s={arraySet:function(c,f,l,m,v){if(f.subarray&&c.subarray)c.set(f.subarray(l,l+m),v);else for(var u=0;u<m;u++)c[v+u]=f[l+u]},flattenChunks:function(c){var f,l,m,v,u,b;for(f=m=0,l=c.length;f<l;f++)m+=c[f].length;for(b=new Uint8Array(m),f=v=0,l=c.length;f<l;f++)u=c[f],b.set(u,v),v+=u.length;return b}},o={arraySet:function(c,f,l,m,v){for(var u=0;u<m;u++)c[v+u]=f[l+u]},flattenChunks:function(c){return[].concat.apply([],c)}};a.setTyped=function(c){c?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,s)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,o))},a.setTyped(n)},{}],42:[function(i,r,a){var n=i("./common"),s=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var c=new n.Buf8(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function l(m,v){if(v<65537&&(m.subarray&&o||!m.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(m,v));for(var u="",b=0;b<v;b++)u+=String.fromCharCode(m[b]);return u}c[254]=c[254]=1,a.string2buf=function(m){var v,u,b,d,h,p=m.length,w=0;for(d=0;d<p;d++)(64512&(u=m.charCodeAt(d)))==55296&&d+1<p&&(64512&(b=m.charCodeAt(d+1)))==56320&&(u=65536+(u-55296<<10)+(b-56320),d++),w+=u<128?1:u<2048?2:u<65536?3:4;for(v=new n.Buf8(w),d=h=0;h<w;d++)(64512&(u=m.charCodeAt(d)))==55296&&d+1<p&&(64512&(b=m.charCodeAt(d+1)))==56320&&(u=65536+(u-55296<<10)+(b-56320),d++),u<128?v[h++]=u:(u<2048?v[h++]=192|u>>>6:(u<65536?v[h++]=224|u>>>12:(v[h++]=240|u>>>18,v[h++]=128|u>>>12&63),v[h++]=128|u>>>6&63),v[h++]=128|63&u);return v},a.buf2binstring=function(m){return l(m,m.length)},a.binstring2buf=function(m){for(var v=new n.Buf8(m.length),u=0,b=v.length;u<b;u++)v[u]=m.charCodeAt(u);return v},a.buf2string=function(m,v){var u,b,d,h,p=v||m.length,w=new Array(2*p);for(u=b=0;u<p;)if((d=m[u++])<128)w[b++]=d;else if(4<(h=c[d]))w[b++]=65533,u+=h-1;else{for(d&=h===2?31:h===3?15:7;1<h&&u<p;)d=d<<6|63&m[u++],h--;1<h?w[b++]=65533:d<65536?w[b++]=d:(d-=65536,w[b++]=55296|d>>10&1023,w[b++]=56320|1023&d)}return l(w,b)},a.utf8border=function(m,v){var u;for((v=v||m.length)>m.length&&(v=m.length),u=v-1;0<=u&&(192&m[u])==128;)u--;return u<0||u===0?v:u+c[m[u]]>v?u:v}},{"./common":41}],43:[function(i,r,a){r.exports=function(n,s,o,c){for(var f=65535&n|0,l=n>>>16&65535|0,m=0;o!==0;){for(o-=m=2e3<o?2e3:o;l=l+(f=f+s[c++]|0)|0,--m;);f%=65521,l%=65521}return f|l<<16|0}},{}],44:[function(i,r,a){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,a){var n=(function(){for(var s,o=[],c=0;c<256;c++){s=c;for(var f=0;f<8;f++)s=1&s?3988292384^s>>>1:s>>>1;o[c]=s}return o})();r.exports=function(s,o,c,f){var l=n,m=f+c;s^=-1;for(var v=f;v<m;v++)s=s>>>8^l[255&(s^o[v])];return-1^s}},{}],46:[function(i,r,a){var n,s=i("../utils/common"),o=i("./trees"),c=i("./adler32"),f=i("./crc32"),l=i("./messages"),m=0,v=4,u=0,b=-2,d=-1,h=4,p=2,w=8,x=9,_=286,S=30,R=19,B=2*_+1,F=15,A=3,N=258,Z=N+A+1,T=42,z=113,y=1,U=2,ee=3,q=4;function oe(g,W){return g.msg=l[W],W}function V(g){return(g<<1)-(4<g?9:0)}function se(g){for(var W=g.length;0<=--W;)g[W]=0}function O(g){var W=g.state,H=W.pending;H>g.avail_out&&(H=g.avail_out),H!==0&&(s.arraySet(g.output,W.pending_buf,W.pending_out,H,g.next_out),g.next_out+=H,W.pending_out+=H,g.total_out+=H,g.avail_out-=H,W.pending-=H,W.pending===0&&(W.pending_out=0))}function M(g,W){o._tr_flush_block(g,0<=g.block_start?g.block_start:-1,g.strstart-g.block_start,W),g.block_start=g.strstart,O(g.strm)}function ne(g,W){g.pending_buf[g.pending++]=W}function Y(g,W){g.pending_buf[g.pending++]=W>>>8&255,g.pending_buf[g.pending++]=255&W}function Q(g,W){var H,C,k=g.max_chain_length,P=g.strstart,D=g.prev_length,$=g.nice_match,I=g.strstart>g.w_size-Z?g.strstart-(g.w_size-Z):0,G=g.window,J=g.w_mask,X=g.prev,ae=g.strstart+N,pe=G[P+D-1],ue=G[P+D];g.prev_length>=g.good_match&&(k>>=2),$>g.lookahead&&($=g.lookahead);do if(G[(H=W)+D]===ue&&G[H+D-1]===pe&&G[H]===G[P]&&G[++H]===G[P+1]){P+=2,H++;do;while(G[++P]===G[++H]&&G[++P]===G[++H]&&G[++P]===G[++H]&&G[++P]===G[++H]&&G[++P]===G[++H]&&G[++P]===G[++H]&&G[++P]===G[++H]&&G[++P]===G[++H]&&P<ae);if(C=N-(ae-P),P=ae-N,D<C){if(g.match_start=W,$<=(D=C))break;pe=G[P+D-1],ue=G[P+D]}}while((W=X[W&J])>I&&--k!=0);return D<=g.lookahead?D:g.lookahead}function ye(g){var W,H,C,k,P,D,$,I,G,J,X=g.w_size;do{if(k=g.window_size-g.lookahead-g.strstart,g.strstart>=X+(X-Z)){for(s.arraySet(g.window,g.window,X,X,0),g.match_start-=X,g.strstart-=X,g.block_start-=X,W=H=g.hash_size;C=g.head[--W],g.head[W]=X<=C?C-X:0,--H;);for(W=H=X;C=g.prev[--W],g.prev[W]=X<=C?C-X:0,--H;);k+=X}if(g.strm.avail_in===0)break;if(D=g.strm,$=g.window,I=g.strstart+g.lookahead,G=k,J=void 0,J=D.avail_in,G<J&&(J=G),H=J===0?0:(D.avail_in-=J,s.arraySet($,D.input,D.next_in,J,I),D.state.wrap===1?D.adler=c(D.adler,$,J,I):D.state.wrap===2&&(D.adler=f(D.adler,$,J,I)),D.next_in+=J,D.total_in+=J,J),g.lookahead+=H,g.lookahead+g.insert>=A)for(P=g.strstart-g.insert,g.ins_h=g.window[P],g.ins_h=(g.ins_h<<g.hash_shift^g.window[P+1])&g.hash_mask;g.insert&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[P+A-1])&g.hash_mask,g.prev[P&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=P,P++,g.insert--,!(g.lookahead+g.insert<A)););}while(g.lookahead<Z&&g.strm.avail_in!==0)}function Pe(g,W){for(var H,C;;){if(g.lookahead<Z){if(ye(g),g.lookahead<Z&&W===m)return y;if(g.lookahead===0)break}if(H=0,g.lookahead>=A&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),H!==0&&g.strstart-H<=g.w_size-Z&&(g.match_length=Q(g,H)),g.match_length>=A)if(C=o._tr_tally(g,g.strstart-g.match_start,g.match_length-A),g.lookahead-=g.match_length,g.match_length<=g.max_lazy_match&&g.lookahead>=A){for(g.match_length--;g.strstart++,g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart,--g.match_length!=0;);g.strstart++}else g.strstart+=g.match_length,g.match_length=0,g.ins_h=g.window[g.strstart],g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+1])&g.hash_mask;else C=o._tr_tally(g,0,g.window[g.strstart]),g.lookahead--,g.strstart++;if(C&&(M(g,!1),g.strm.avail_out===0))return y}return g.insert=g.strstart<A-1?g.strstart:A-1,W===v?(M(g,!0),g.strm.avail_out===0?ee:q):g.last_lit&&(M(g,!1),g.strm.avail_out===0)?y:U}function fe(g,W){for(var H,C,k;;){if(g.lookahead<Z){if(ye(g),g.lookahead<Z&&W===m)return y;if(g.lookahead===0)break}if(H=0,g.lookahead>=A&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),g.prev_length=g.match_length,g.prev_match=g.match_start,g.match_length=A-1,H!==0&&g.prev_length<g.max_lazy_match&&g.strstart-H<=g.w_size-Z&&(g.match_length=Q(g,H),g.match_length<=5&&(g.strategy===1||g.match_length===A&&4096<g.strstart-g.match_start)&&(g.match_length=A-1)),g.prev_length>=A&&g.match_length<=g.prev_length){for(k=g.strstart+g.lookahead-A,C=o._tr_tally(g,g.strstart-1-g.prev_match,g.prev_length-A),g.lookahead-=g.prev_length-1,g.prev_length-=2;++g.strstart<=k&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+A-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),--g.prev_length!=0;);if(g.match_available=0,g.match_length=A-1,g.strstart++,C&&(M(g,!1),g.strm.avail_out===0))return y}else if(g.match_available){if((C=o._tr_tally(g,0,g.window[g.strstart-1]))&&M(g,!1),g.strstart++,g.lookahead--,g.strm.avail_out===0)return y}else g.match_available=1,g.strstart++,g.lookahead--}return g.match_available&&(C=o._tr_tally(g,0,g.window[g.strstart-1]),g.match_available=0),g.insert=g.strstart<A-1?g.strstart:A-1,W===v?(M(g,!0),g.strm.avail_out===0?ee:q):g.last_lit&&(M(g,!1),g.strm.avail_out===0)?y:U}function de(g,W,H,C,k){this.good_length=g,this.max_lazy=W,this.nice_length=H,this.max_chain=C,this.func=k}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*B),this.dyn_dtree=new s.Buf16(2*(2*S+1)),this.bl_tree=new s.Buf16(2*(2*R+1)),se(this.dyn_ltree),se(this.dyn_dtree),se(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(F+1),this.heap=new s.Buf16(2*_+1),se(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*_+1),se(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function we(g){var W;return g&&g.state?(g.total_in=g.total_out=0,g.data_type=p,(W=g.state).pending=0,W.pending_out=0,W.wrap<0&&(W.wrap=-W.wrap),W.status=W.wrap?T:z,g.adler=W.wrap===2?0:1,W.last_flush=m,o._tr_init(W),u):oe(g,b)}function st(g){var W=we(g);return W===u&&(function(H){H.window_size=2*H.w_size,se(H.head),H.max_lazy_match=n[H.level].max_lazy,H.good_match=n[H.level].good_length,H.nice_match=n[H.level].nice_length,H.max_chain_length=n[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=A-1,H.match_available=0,H.ins_h=0})(g.state),W}function Xe(g,W,H,C,k,P){if(!g)return b;var D=1;if(W===d&&(W=6),C<0?(D=0,C=-C):15<C&&(D=2,C-=16),k<1||x<k||H!==w||C<8||15<C||W<0||9<W||P<0||h<P)return oe(g,b);C===8&&(C=9);var $=new Te;return(g.state=$).strm=g,$.wrap=D,$.gzhead=null,$.w_bits=C,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=k+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+A-1)/A),$.window=new s.Buf8(2*$.w_size),$.head=new s.Buf16($.hash_size),$.prev=new s.Buf16($.w_size),$.lit_bufsize=1<<k+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new s.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=W,$.strategy=P,$.method=H,st(g)}n=[new de(0,0,0,0,function(g,W){var H=65535;for(H>g.pending_buf_size-5&&(H=g.pending_buf_size-5);;){if(g.lookahead<=1){if(ye(g),g.lookahead===0&&W===m)return y;if(g.lookahead===0)break}g.strstart+=g.lookahead,g.lookahead=0;var C=g.block_start+H;if((g.strstart===0||g.strstart>=C)&&(g.lookahead=g.strstart-C,g.strstart=C,M(g,!1),g.strm.avail_out===0)||g.strstart-g.block_start>=g.w_size-Z&&(M(g,!1),g.strm.avail_out===0))return y}return g.insert=0,W===v?(M(g,!0),g.strm.avail_out===0?ee:q):(g.strstart>g.block_start&&(M(g,!1),g.strm.avail_out),y)}),new de(4,4,8,4,Pe),new de(4,5,16,8,Pe),new de(4,6,32,32,Pe),new de(4,4,16,16,fe),new de(8,16,32,32,fe),new de(8,16,128,128,fe),new de(8,32,128,256,fe),new de(32,128,258,1024,fe),new de(32,258,258,4096,fe)],a.deflateInit=function(g,W){return Xe(g,W,w,15,8,0)},a.deflateInit2=Xe,a.deflateReset=st,a.deflateResetKeep=we,a.deflateSetHeader=function(g,W){return g&&g.state?g.state.wrap!==2?b:(g.state.gzhead=W,u):b},a.deflate=function(g,W){var H,C,k,P;if(!g||!g.state||5<W||W<0)return g?oe(g,b):b;if(C=g.state,!g.output||!g.input&&g.avail_in!==0||C.status===666&&W!==v)return oe(g,g.avail_out===0?-5:b);if(C.strm=g,H=C.last_flush,C.last_flush=W,C.status===T)if(C.wrap===2)g.adler=0,ne(C,31),ne(C,139),ne(C,8),C.gzhead?(ne(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),ne(C,255&C.gzhead.time),ne(C,C.gzhead.time>>8&255),ne(C,C.gzhead.time>>16&255),ne(C,C.gzhead.time>>24&255),ne(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),ne(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(ne(C,255&C.gzhead.extra.length),ne(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(g.adler=f(g.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(ne(C,0),ne(C,0),ne(C,0),ne(C,0),ne(C,0),ne(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),ne(C,3),C.status=z);else{var D=w+(C.w_bits-8<<4)<<8;D|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(D|=32),D+=31-D%31,C.status=z,Y(C,D),C.strstart!==0&&(Y(C,g.adler>>>16),Y(C,65535&g.adler)),g.adler=1}if(C.status===69)if(C.gzhead.extra){for(k=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>k&&(g.adler=f(g.adler,C.pending_buf,C.pending-k,k)),O(g),k=C.pending,C.pending!==C.pending_buf_size));)ne(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>k&&(g.adler=f(g.adler,C.pending_buf,C.pending-k,k)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){k=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>k&&(g.adler=f(g.adler,C.pending_buf,C.pending-k,k)),O(g),k=C.pending,C.pending===C.pending_buf_size)){P=1;break}P=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,ne(C,P)}while(P!==0);C.gzhead.hcrc&&C.pending>k&&(g.adler=f(g.adler,C.pending_buf,C.pending-k,k)),P===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){k=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>k&&(g.adler=f(g.adler,C.pending_buf,C.pending-k,k)),O(g),k=C.pending,C.pending===C.pending_buf_size)){P=1;break}P=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,ne(C,P)}while(P!==0);C.gzhead.hcrc&&C.pending>k&&(g.adler=f(g.adler,C.pending_buf,C.pending-k,k)),P===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&O(g),C.pending+2<=C.pending_buf_size&&(ne(C,255&g.adler),ne(C,g.adler>>8&255),g.adler=0,C.status=z)):C.status=z),C.pending!==0){if(O(g),g.avail_out===0)return C.last_flush=-1,u}else if(g.avail_in===0&&V(W)<=V(H)&&W!==v)return oe(g,-5);if(C.status===666&&g.avail_in!==0)return oe(g,-5);if(g.avail_in!==0||C.lookahead!==0||W!==m&&C.status!==666){var $=C.strategy===2?(function(I,G){for(var J;;){if(I.lookahead===0&&(ye(I),I.lookahead===0)){if(G===m)return y;break}if(I.match_length=0,J=o._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++,J&&(M(I,!1),I.strm.avail_out===0))return y}return I.insert=0,G===v?(M(I,!0),I.strm.avail_out===0?ee:q):I.last_lit&&(M(I,!1),I.strm.avail_out===0)?y:U})(C,W):C.strategy===3?(function(I,G){for(var J,X,ae,pe,ue=I.window;;){if(I.lookahead<=N){if(ye(I),I.lookahead<=N&&G===m)return y;if(I.lookahead===0)break}if(I.match_length=0,I.lookahead>=A&&0<I.strstart&&(X=ue[ae=I.strstart-1])===ue[++ae]&&X===ue[++ae]&&X===ue[++ae]){pe=I.strstart+N;do;while(X===ue[++ae]&&X===ue[++ae]&&X===ue[++ae]&&X===ue[++ae]&&X===ue[++ae]&&X===ue[++ae]&&X===ue[++ae]&&X===ue[++ae]&&ae<pe);I.match_length=N-(pe-ae),I.match_length>I.lookahead&&(I.match_length=I.lookahead)}if(I.match_length>=A?(J=o._tr_tally(I,1,I.match_length-A),I.lookahead-=I.match_length,I.strstart+=I.match_length,I.match_length=0):(J=o._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++),J&&(M(I,!1),I.strm.avail_out===0))return y}return I.insert=0,G===v?(M(I,!0),I.strm.avail_out===0?ee:q):I.last_lit&&(M(I,!1),I.strm.avail_out===0)?y:U})(C,W):n[C.level].func(C,W);if($!==ee&&$!==q||(C.status=666),$===y||$===ee)return g.avail_out===0&&(C.last_flush=-1),u;if($===U&&(W===1?o._tr_align(C):W!==5&&(o._tr_stored_block(C,0,0,!1),W===3&&(se(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),O(g),g.avail_out===0))return C.last_flush=-1,u}return W!==v?u:C.wrap<=0?1:(C.wrap===2?(ne(C,255&g.adler),ne(C,g.adler>>8&255),ne(C,g.adler>>16&255),ne(C,g.adler>>24&255),ne(C,255&g.total_in),ne(C,g.total_in>>8&255),ne(C,g.total_in>>16&255),ne(C,g.total_in>>24&255)):(Y(C,g.adler>>>16),Y(C,65535&g.adler)),O(g),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?u:1)},a.deflateEnd=function(g){var W;return g&&g.state?(W=g.state.status)!==T&&W!==69&&W!==73&&W!==91&&W!==103&&W!==z&&W!==666?oe(g,b):(g.state=null,W===z?oe(g,-3):u):b},a.deflateSetDictionary=function(g,W){var H,C,k,P,D,$,I,G,J=W.length;if(!g||!g.state||(P=(H=g.state).wrap)===2||P===1&&H.status!==T||H.lookahead)return b;for(P===1&&(g.adler=c(g.adler,W,J,0)),H.wrap=0,J>=H.w_size&&(P===0&&(se(H.head),H.strstart=0,H.block_start=0,H.insert=0),G=new s.Buf8(H.w_size),s.arraySet(G,W,J-H.w_size,H.w_size,0),W=G,J=H.w_size),D=g.avail_in,$=g.next_in,I=g.input,g.avail_in=J,g.next_in=0,g.input=W,ye(H);H.lookahead>=A;){for(C=H.strstart,k=H.lookahead-(A-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[C+A-1])&H.hash_mask,H.prev[C&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=C,C++,--k;);H.strstart=C,H.lookahead=A-1,ye(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=A-1,H.match_available=0,g.next_in=$,g.input=I,g.avail_in=D,H.wrap=P,u},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,a){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,a){r.exports=function(n,s){var o,c,f,l,m,v,u,b,d,h,p,w,x,_,S,R,B,F,A,N,Z,T,z,y,U;o=n.state,c=n.next_in,y=n.input,f=c+(n.avail_in-5),l=n.next_out,U=n.output,m=l-(s-n.avail_out),v=l+(n.avail_out-257),u=o.dmax,b=o.wsize,d=o.whave,h=o.wnext,p=o.window,w=o.hold,x=o.bits,_=o.lencode,S=o.distcode,R=(1<<o.lenbits)-1,B=(1<<o.distbits)-1;e:do{x<15&&(w+=y[c++]<<x,x+=8,w+=y[c++]<<x,x+=8),F=_[w&R];t:for(;;){if(w>>>=A=F>>>24,x-=A,(A=F>>>16&255)===0)U[l++]=65535&F;else{if(!(16&A)){if((64&A)==0){F=_[(65535&F)+(w&(1<<A)-1)];continue t}if(32&A){o.mode=12;break e}n.msg="invalid literal/length code",o.mode=30;break e}N=65535&F,(A&=15)&&(x<A&&(w+=y[c++]<<x,x+=8),N+=w&(1<<A)-1,w>>>=A,x-=A),x<15&&(w+=y[c++]<<x,x+=8,w+=y[c++]<<x,x+=8),F=S[w&B];i:for(;;){if(w>>>=A=F>>>24,x-=A,!(16&(A=F>>>16&255))){if((64&A)==0){F=S[(65535&F)+(w&(1<<A)-1)];continue i}n.msg="invalid distance code",o.mode=30;break e}if(Z=65535&F,x<(A&=15)&&(w+=y[c++]<<x,(x+=8)<A&&(w+=y[c++]<<x,x+=8)),u<(Z+=w&(1<<A)-1)){n.msg="invalid distance too far back",o.mode=30;break e}if(w>>>=A,x-=A,(A=l-m)<Z){if(d<(A=Z-A)&&o.sane){n.msg="invalid distance too far back",o.mode=30;break e}if(z=p,(T=0)===h){if(T+=b-A,A<N){for(N-=A;U[l++]=p[T++],--A;);T=l-Z,z=U}}else if(h<A){if(T+=b+h-A,(A-=h)<N){for(N-=A;U[l++]=p[T++],--A;);if(T=0,h<N){for(N-=A=h;U[l++]=p[T++],--A;);T=l-Z,z=U}}}else if(T+=h-A,A<N){for(N-=A;U[l++]=p[T++],--A;);T=l-Z,z=U}for(;2<N;)U[l++]=z[T++],U[l++]=z[T++],U[l++]=z[T++],N-=3;N&&(U[l++]=z[T++],1<N&&(U[l++]=z[T++]))}else{for(T=l-Z;U[l++]=U[T++],U[l++]=U[T++],U[l++]=U[T++],2<(N-=3););N&&(U[l++]=U[T++],1<N&&(U[l++]=U[T++]))}break}}break}}while(c<f&&l<v);c-=N=x>>3,w&=(1<<(x-=N<<3))-1,n.next_in=c,n.next_out=l,n.avail_in=c<f?f-c+5:5-(c-f),n.avail_out=l<v?v-l+257:257-(l-v),o.hold=w,o.bits=x}},{}],49:[function(i,r,a){var n=i("../utils/common"),s=i("./adler32"),o=i("./crc32"),c=i("./inffast"),f=i("./inftrees"),l=1,m=2,v=0,u=-2,b=1,d=852,h=592;function p(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(T){var z;return T&&T.state?(z=T.state,T.total_in=T.total_out=z.total=0,T.msg="",z.wrap&&(T.adler=1&z.wrap),z.mode=b,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new n.Buf32(d),z.distcode=z.distdyn=new n.Buf32(h),z.sane=1,z.back=-1,v):u}function _(T){var z;return T&&T.state?((z=T.state).wsize=0,z.whave=0,z.wnext=0,x(T)):u}function S(T,z){var y,U;return T&&T.state?(U=T.state,z<0?(y=0,z=-z):(y=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?u:(U.window!==null&&U.wbits!==z&&(U.window=null),U.wrap=y,U.wbits=z,_(T))):u}function R(T,z){var y,U;return T?(U=new w,(T.state=U).window=null,(y=S(T,z))!==v&&(T.state=null),y):u}var B,F,A=!0;function N(T){if(A){var z;for(B=new n.Buf32(512),F=new n.Buf32(32),z=0;z<144;)T.lens[z++]=8;for(;z<256;)T.lens[z++]=9;for(;z<280;)T.lens[z++]=7;for(;z<288;)T.lens[z++]=8;for(f(l,T.lens,0,288,B,0,T.work,{bits:9}),z=0;z<32;)T.lens[z++]=5;f(m,T.lens,0,32,F,0,T.work,{bits:5}),A=!1}T.lencode=B,T.lenbits=9,T.distcode=F,T.distbits=5}function Z(T,z,y,U){var ee,q=T.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new n.Buf8(q.wsize)),U>=q.wsize?(n.arraySet(q.window,z,y-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(U<(ee=q.wsize-q.wnext)&&(ee=U),n.arraySet(q.window,z,y-U,ee,q.wnext),(U-=ee)?(n.arraySet(q.window,z,y-U,U,0),q.wnext=U,q.whave=q.wsize):(q.wnext+=ee,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=ee))),0}a.inflateReset=_,a.inflateReset2=S,a.inflateResetKeep=x,a.inflateInit=function(T){return R(T,15)},a.inflateInit2=R,a.inflate=function(T,z){var y,U,ee,q,oe,V,se,O,M,ne,Y,Q,ye,Pe,fe,de,Te,we,st,Xe,g,W,H,C,k=0,P=new n.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return u;(y=T.state).mode===12&&(y.mode=13),oe=T.next_out,ee=T.output,se=T.avail_out,q=T.next_in,U=T.input,V=T.avail_in,O=y.hold,M=y.bits,ne=V,Y=se,W=v;e:for(;;)switch(y.mode){case b:if(y.wrap===0){y.mode=13;break}for(;M<16;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(2&y.wrap&&O===35615){P[y.check=0]=255&O,P[1]=O>>>8&255,y.check=o(y.check,P,2,0),M=O=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&O)<<8)+(O>>8))%31){T.msg="incorrect header check",y.mode=30;break}if((15&O)!=8){T.msg="unknown compression method",y.mode=30;break}if(M-=4,g=8+(15&(O>>>=4)),y.wbits===0)y.wbits=g;else if(g>y.wbits){T.msg="invalid window size",y.mode=30;break}y.dmax=1<<g,T.adler=y.check=1,y.mode=512&O?10:12,M=O=0;break;case 2:for(;M<16;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(y.flags=O,(255&y.flags)!=8){T.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){T.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=O>>8&1),512&y.flags&&(P[0]=255&O,P[1]=O>>>8&255,y.check=o(y.check,P,2,0)),M=O=0,y.mode=3;case 3:for(;M<32;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}y.head&&(y.head.time=O),512&y.flags&&(P[0]=255&O,P[1]=O>>>8&255,P[2]=O>>>16&255,P[3]=O>>>24&255,y.check=o(y.check,P,4,0)),M=O=0,y.mode=4;case 4:for(;M<16;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}y.head&&(y.head.xflags=255&O,y.head.os=O>>8),512&y.flags&&(P[0]=255&O,P[1]=O>>>8&255,y.check=o(y.check,P,2,0)),M=O=0,y.mode=5;case 5:if(1024&y.flags){for(;M<16;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}y.length=O,y.head&&(y.head.extra_len=O),512&y.flags&&(P[0]=255&O,P[1]=O>>>8&255,y.check=o(y.check,P,2,0)),M=O=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(V<(Q=y.length)&&(Q=V),Q&&(y.head&&(g=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),n.arraySet(y.head.extra,U,q,Q,g)),512&y.flags&&(y.check=o(y.check,U,Q,q)),V-=Q,q+=Q,y.length-=Q),y.length))break e;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(V===0)break e;for(Q=0;g=U[q+Q++],y.head&&g&&y.length<65536&&(y.head.name+=String.fromCharCode(g)),g&&Q<V;);if(512&y.flags&&(y.check=o(y.check,U,Q,q)),V-=Q,q+=Q,g)break e}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(V===0)break e;for(Q=0;g=U[q+Q++],y.head&&g&&y.length<65536&&(y.head.comment+=String.fromCharCode(g)),g&&Q<V;);if(512&y.flags&&(y.check=o(y.check,U,Q,q)),V-=Q,q+=Q,g)break e}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;M<16;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(O!==(65535&y.check)){T.msg="header crc mismatch",y.mode=30;break}M=O=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),T.adler=y.check=0,y.mode=12;break;case 10:for(;M<32;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}T.adler=y.check=p(O),M=O=0,y.mode=11;case 11:if(y.havedict===0)return T.next_out=oe,T.avail_out=se,T.next_in=q,T.avail_in=V,y.hold=O,y.bits=M,2;T.adler=y.check=1,y.mode=12;case 12:if(z===5||z===6)break e;case 13:if(y.last){O>>>=7&M,M-=7&M,y.mode=27;break}for(;M<3;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}switch(y.last=1&O,M-=1,3&(O>>>=1)){case 0:y.mode=14;break;case 1:if(N(y),y.mode=20,z!==6)break;O>>>=2,M-=2;break e;case 2:y.mode=17;break;case 3:T.msg="invalid block type",y.mode=30}O>>>=2,M-=2;break;case 14:for(O>>>=7&M,M-=7&M;M<32;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if((65535&O)!=(O>>>16^65535)){T.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&O,M=O=0,y.mode=15,z===6)break e;case 15:y.mode=16;case 16:if(Q=y.length){if(V<Q&&(Q=V),se<Q&&(Q=se),Q===0)break e;n.arraySet(ee,U,q,Q,oe),V-=Q,q+=Q,se-=Q,oe+=Q,y.length-=Q;break}y.mode=12;break;case 17:for(;M<14;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(y.nlen=257+(31&O),O>>>=5,M-=5,y.ndist=1+(31&O),O>>>=5,M-=5,y.ncode=4+(15&O),O>>>=4,M-=4,286<y.nlen||30<y.ndist){T.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;M<3;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}y.lens[D[y.have++]]=7&O,O>>>=3,M-=3}for(;y.have<19;)y.lens[D[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,H={bits:y.lenbits},W=f(0,y.lens,0,19,y.lencode,0,y.work,H),y.lenbits=H.bits,W){T.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;de=(k=y.lencode[O&(1<<y.lenbits)-1])>>>16&255,Te=65535&k,!((fe=k>>>24)<=M);){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(Te<16)O>>>=fe,M-=fe,y.lens[y.have++]=Te;else{if(Te===16){for(C=fe+2;M<C;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(O>>>=fe,M-=fe,y.have===0){T.msg="invalid bit length repeat",y.mode=30;break}g=y.lens[y.have-1],Q=3+(3&O),O>>>=2,M-=2}else if(Te===17){for(C=fe+3;M<C;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}M-=fe,g=0,Q=3+(7&(O>>>=fe)),O>>>=3,M-=3}else{for(C=fe+7;M<C;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}M-=fe,g=0,Q=11+(127&(O>>>=fe)),O>>>=7,M-=7}if(y.have+Q>y.nlen+y.ndist){T.msg="invalid bit length repeat",y.mode=30;break}for(;Q--;)y.lens[y.have++]=g}}if(y.mode===30)break;if(y.lens[256]===0){T.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,H={bits:y.lenbits},W=f(l,y.lens,0,y.nlen,y.lencode,0,y.work,H),y.lenbits=H.bits,W){T.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,H={bits:y.distbits},W=f(m,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,H),y.distbits=H.bits,W){T.msg="invalid distances set",y.mode=30;break}if(y.mode=20,z===6)break e;case 20:y.mode=21;case 21:if(6<=V&&258<=se){T.next_out=oe,T.avail_out=se,T.next_in=q,T.avail_in=V,y.hold=O,y.bits=M,c(T,Y),oe=T.next_out,ee=T.output,se=T.avail_out,q=T.next_in,U=T.input,V=T.avail_in,O=y.hold,M=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;de=(k=y.lencode[O&(1<<y.lenbits)-1])>>>16&255,Te=65535&k,!((fe=k>>>24)<=M);){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(de&&(240&de)==0){for(we=fe,st=de,Xe=Te;de=(k=y.lencode[Xe+((O&(1<<we+st)-1)>>we)])>>>16&255,Te=65535&k,!(we+(fe=k>>>24)<=M);){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}O>>>=we,M-=we,y.back+=we}if(O>>>=fe,M-=fe,y.back+=fe,y.length=Te,de===0){y.mode=26;break}if(32&de){y.back=-1,y.mode=12;break}if(64&de){T.msg="invalid literal/length code",y.mode=30;break}y.extra=15&de,y.mode=22;case 22:if(y.extra){for(C=y.extra;M<C;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}y.length+=O&(1<<y.extra)-1,O>>>=y.extra,M-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;de=(k=y.distcode[O&(1<<y.distbits)-1])>>>16&255,Te=65535&k,!((fe=k>>>24)<=M);){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if((240&de)==0){for(we=fe,st=de,Xe=Te;de=(k=y.distcode[Xe+((O&(1<<we+st)-1)>>we)])>>>16&255,Te=65535&k,!(we+(fe=k>>>24)<=M);){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}O>>>=we,M-=we,y.back+=we}if(O>>>=fe,M-=fe,y.back+=fe,64&de){T.msg="invalid distance code",y.mode=30;break}y.offset=Te,y.extra=15&de,y.mode=24;case 24:if(y.extra){for(C=y.extra;M<C;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}y.offset+=O&(1<<y.extra)-1,O>>>=y.extra,M-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){T.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(se===0)break e;if(Q=Y-se,y.offset>Q){if((Q=y.offset-Q)>y.whave&&y.sane){T.msg="invalid distance too far back",y.mode=30;break}ye=Q>y.wnext?(Q-=y.wnext,y.wsize-Q):y.wnext-Q,Q>y.length&&(Q=y.length),Pe=y.window}else Pe=ee,ye=oe-y.offset,Q=y.length;for(se<Q&&(Q=se),se-=Q,y.length-=Q;ee[oe++]=Pe[ye++],--Q;);y.length===0&&(y.mode=21);break;case 26:if(se===0)break e;ee[oe++]=y.length,se--,y.mode=21;break;case 27:if(y.wrap){for(;M<32;){if(V===0)break e;V--,O|=U[q++]<<M,M+=8}if(Y-=se,T.total_out+=Y,y.total+=Y,Y&&(T.adler=y.check=y.flags?o(y.check,ee,Y,oe-Y):s(y.check,ee,Y,oe-Y)),Y=se,(y.flags?O:p(O))!==y.check){T.msg="incorrect data check",y.mode=30;break}M=O=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;M<32;){if(V===0)break e;V--,O+=U[q++]<<M,M+=8}if(O!==(4294967295&y.total)){T.msg="incorrect length check",y.mode=30;break}M=O=0}y.mode=29;case 29:W=1;break e;case 30:W=-3;break e;case 31:return-4;case 32:default:return u}return T.next_out=oe,T.avail_out=se,T.next_in=q,T.avail_in=V,y.hold=O,y.bits=M,(y.wsize||Y!==T.avail_out&&y.mode<30&&(y.mode<27||z!==4))&&Z(T,T.output,T.next_out,Y-T.avail_out)?(y.mode=31,-4):(ne-=T.avail_in,Y-=T.avail_out,T.total_in+=ne,T.total_out+=Y,y.total+=Y,y.wrap&&Y&&(T.adler=y.check=y.flags?o(y.check,ee,Y,T.next_out-Y):s(y.check,ee,Y,T.next_out-Y)),T.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(ne==0&&Y===0||z===4)&&W===v&&(W=-5),W)},a.inflateEnd=function(T){if(!T||!T.state)return u;var z=T.state;return z.window&&(z.window=null),T.state=null,v},a.inflateGetHeader=function(T,z){var y;return T&&T.state?(2&(y=T.state).wrap)==0?u:((y.head=z).done=!1,v):u},a.inflateSetDictionary=function(T,z){var y,U=z.length;return T&&T.state?(y=T.state).wrap!==0&&y.mode!==11?u:y.mode===11&&s(1,z,U,0)!==y.check?-3:Z(T,z,U,U)?(y.mode=31,-4):(y.havedict=1,v):u},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,a){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(l,m,v,u,b,d,h,p){var w,x,_,S,R,B,F,A,N,Z=p.bits,T=0,z=0,y=0,U=0,ee=0,q=0,oe=0,V=0,se=0,O=0,M=null,ne=0,Y=new n.Buf16(16),Q=new n.Buf16(16),ye=null,Pe=0;for(T=0;T<=15;T++)Y[T]=0;for(z=0;z<u;z++)Y[m[v+z]]++;for(ee=Z,U=15;1<=U&&Y[U]===0;U--);if(U<ee&&(ee=U),U===0)return b[d++]=20971520,b[d++]=20971520,p.bits=1,0;for(y=1;y<U&&Y[y]===0;y++);for(ee<y&&(ee=y),T=V=1;T<=15;T++)if(V<<=1,(V-=Y[T])<0)return-1;if(0<V&&(l===0||U!==1))return-1;for(Q[1]=0,T=1;T<15;T++)Q[T+1]=Q[T]+Y[T];for(z=0;z<u;z++)m[v+z]!==0&&(h[Q[m[v+z]]++]=z);if(B=l===0?(M=ye=h,19):l===1?(M=s,ne-=257,ye=o,Pe-=257,256):(M=c,ye=f,-1),T=y,R=d,oe=z=O=0,_=-1,S=(se=1<<(q=ee))-1,l===1&&852<se||l===2&&592<se)return 1;for(;;){for(F=T-oe,N=h[z]<B?(A=0,h[z]):h[z]>B?(A=ye[Pe+h[z]],M[ne+h[z]]):(A=96,0),w=1<<T-oe,y=x=1<<q;b[R+(O>>oe)+(x-=w)]=F<<24|A<<16|N|0,x!==0;);for(w=1<<T-1;O&w;)w>>=1;if(w!==0?(O&=w-1,O+=w):O=0,z++,--Y[T]==0){if(T===U)break;T=m[v+h[z]]}if(ee<T&&(O&S)!==_){for(oe===0&&(oe=ee),R+=y,V=1<<(q=T-oe);q+oe<U&&!((V-=Y[q+oe])<=0);)q++,V<<=1;if(se+=1<<q,l===1&&852<se||l===2&&592<se)return 1;b[_=O&S]=ee<<24|q<<16|R-d|0}}return O!==0&&(b[R+O]=T-oe<<24|64<<16|0),p.bits=ee,0}},{"../utils/common":41}],51:[function(i,r,a){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,a){var n=i("../utils/common"),s=0,o=1;function c(k){for(var P=k.length;0<=--P;)k[P]=0}var f=0,l=29,m=256,v=m+1+l,u=30,b=19,d=2*v+1,h=15,p=16,w=7,x=256,_=16,S=17,R=18,B=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],F=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Z=new Array(2*(v+2));c(Z);var T=new Array(2*u);c(T);var z=new Array(512);c(z);var y=new Array(256);c(y);var U=new Array(l);c(U);var ee,q,oe,V=new Array(u);function se(k,P,D,$,I){this.static_tree=k,this.extra_bits=P,this.extra_base=D,this.elems=$,this.max_length=I,this.has_stree=k&&k.length}function O(k,P){this.dyn_tree=k,this.max_code=0,this.stat_desc=P}function M(k){return k<256?z[k]:z[256+(k>>>7)]}function ne(k,P){k.pending_buf[k.pending++]=255&P,k.pending_buf[k.pending++]=P>>>8&255}function Y(k,P,D){k.bi_valid>p-D?(k.bi_buf|=P<<k.bi_valid&65535,ne(k,k.bi_buf),k.bi_buf=P>>p-k.bi_valid,k.bi_valid+=D-p):(k.bi_buf|=P<<k.bi_valid&65535,k.bi_valid+=D)}function Q(k,P,D){Y(k,D[2*P],D[2*P+1])}function ye(k,P){for(var D=0;D|=1&k,k>>>=1,D<<=1,0<--P;);return D>>>1}function Pe(k,P,D){var $,I,G=new Array(h+1),J=0;for($=1;$<=h;$++)G[$]=J=J+D[$-1]<<1;for(I=0;I<=P;I++){var X=k[2*I+1];X!==0&&(k[2*I]=ye(G[X]++,X))}}function fe(k){var P;for(P=0;P<v;P++)k.dyn_ltree[2*P]=0;for(P=0;P<u;P++)k.dyn_dtree[2*P]=0;for(P=0;P<b;P++)k.bl_tree[2*P]=0;k.dyn_ltree[2*x]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function de(k){8<k.bi_valid?ne(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function Te(k,P,D,$){var I=2*P,G=2*D;return k[I]<k[G]||k[I]===k[G]&&$[P]<=$[D]}function we(k,P,D){for(var $=k.heap[D],I=D<<1;I<=k.heap_len&&(I<k.heap_len&&Te(P,k.heap[I+1],k.heap[I],k.depth)&&I++,!Te(P,$,k.heap[I],k.depth));)k.heap[D]=k.heap[I],D=I,I<<=1;k.heap[D]=$}function st(k,P,D){var $,I,G,J,X=0;if(k.last_lit!==0)for(;$=k.pending_buf[k.d_buf+2*X]<<8|k.pending_buf[k.d_buf+2*X+1],I=k.pending_buf[k.l_buf+X],X++,$===0?Q(k,I,P):(Q(k,(G=y[I])+m+1,P),(J=B[G])!==0&&Y(k,I-=U[G],J),Q(k,G=M(--$),D),(J=F[G])!==0&&Y(k,$-=V[G],J)),X<k.last_lit;);Q(k,x,P)}function Xe(k,P){var D,$,I,G=P.dyn_tree,J=P.stat_desc.static_tree,X=P.stat_desc.has_stree,ae=P.stat_desc.elems,pe=-1;for(k.heap_len=0,k.heap_max=d,D=0;D<ae;D++)G[2*D]!==0?(k.heap[++k.heap_len]=pe=D,k.depth[D]=0):G[2*D+1]=0;for(;k.heap_len<2;)G[2*(I=k.heap[++k.heap_len]=pe<2?++pe:0)]=1,k.depth[I]=0,k.opt_len--,X&&(k.static_len-=J[2*I+1]);for(P.max_code=pe,D=k.heap_len>>1;1<=D;D--)we(k,G,D);for(I=ae;D=k.heap[1],k.heap[1]=k.heap[k.heap_len--],we(k,G,1),$=k.heap[1],k.heap[--k.heap_max]=D,k.heap[--k.heap_max]=$,G[2*I]=G[2*D]+G[2*$],k.depth[I]=(k.depth[D]>=k.depth[$]?k.depth[D]:k.depth[$])+1,G[2*D+1]=G[2*$+1]=I,k.heap[1]=I++,we(k,G,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(ue,qe){var si,ot,oi,xe,zi,Fr,mt=qe.dyn_tree,Yn=qe.max_code,V0=qe.stat_desc.static_tree,G0=qe.stat_desc.has_stree,K0=qe.stat_desc.extra_bits,Jn=qe.stat_desc.extra_base,ci=qe.stat_desc.max_length,Oi=0;for(xe=0;xe<=h;xe++)ue.bl_count[xe]=0;for(mt[2*ue.heap[ue.heap_max]+1]=0,si=ue.heap_max+1;si<d;si++)ci<(xe=mt[2*mt[2*(ot=ue.heap[si])+1]+1]+1)&&(xe=ci,Oi++),mt[2*ot+1]=xe,Yn<ot||(ue.bl_count[xe]++,zi=0,Jn<=ot&&(zi=K0[ot-Jn]),Fr=mt[2*ot],ue.opt_len+=Fr*(xe+zi),G0&&(ue.static_len+=Fr*(V0[2*ot+1]+zi)));if(Oi!==0){do{for(xe=ci-1;ue.bl_count[xe]===0;)xe--;ue.bl_count[xe]--,ue.bl_count[xe+1]+=2,ue.bl_count[ci]--,Oi-=2}while(0<Oi);for(xe=ci;xe!==0;xe--)for(ot=ue.bl_count[xe];ot!==0;)Yn<(oi=ue.heap[--si])||(mt[2*oi+1]!==xe&&(ue.opt_len+=(xe-mt[2*oi+1])*mt[2*oi],mt[2*oi+1]=xe),ot--)}})(k,P),Pe(G,pe,k.bl_count)}function g(k,P,D){var $,I,G=-1,J=P[1],X=0,ae=7,pe=4;for(J===0&&(ae=138,pe=3),P[2*(D+1)+1]=65535,$=0;$<=D;$++)I=J,J=P[2*($+1)+1],++X<ae&&I===J||(X<pe?k.bl_tree[2*I]+=X:I!==0?(I!==G&&k.bl_tree[2*I]++,k.bl_tree[2*_]++):X<=10?k.bl_tree[2*S]++:k.bl_tree[2*R]++,G=I,pe=(X=0)===J?(ae=138,3):I===J?(ae=6,3):(ae=7,4))}function W(k,P,D){var $,I,G=-1,J=P[1],X=0,ae=7,pe=4;for(J===0&&(ae=138,pe=3),$=0;$<=D;$++)if(I=J,J=P[2*($+1)+1],!(++X<ae&&I===J)){if(X<pe)for(;Q(k,I,k.bl_tree),--X!=0;);else I!==0?(I!==G&&(Q(k,I,k.bl_tree),X--),Q(k,_,k.bl_tree),Y(k,X-3,2)):X<=10?(Q(k,S,k.bl_tree),Y(k,X-3,3)):(Q(k,R,k.bl_tree),Y(k,X-11,7));G=I,pe=(X=0)===J?(ae=138,3):I===J?(ae=6,3):(ae=7,4)}}c(V);var H=!1;function C(k,P,D,$){Y(k,(f<<1)+($?1:0),3),(function(I,G,J,X){de(I),ne(I,J),ne(I,~J),n.arraySet(I.pending_buf,I.window,G,J,I.pending),I.pending+=J})(k,P,D)}a._tr_init=function(k){H||((function(){var P,D,$,I,G,J=new Array(h+1);for(I=$=0;I<l-1;I++)for(U[I]=$,P=0;P<1<<B[I];P++)y[$++]=I;for(y[$-1]=I,I=G=0;I<16;I++)for(V[I]=G,P=0;P<1<<F[I];P++)z[G++]=I;for(G>>=7;I<u;I++)for(V[I]=G<<7,P=0;P<1<<F[I]-7;P++)z[256+G++]=I;for(D=0;D<=h;D++)J[D]=0;for(P=0;P<=143;)Z[2*P+1]=8,P++,J[8]++;for(;P<=255;)Z[2*P+1]=9,P++,J[9]++;for(;P<=279;)Z[2*P+1]=7,P++,J[7]++;for(;P<=287;)Z[2*P+1]=8,P++,J[8]++;for(Pe(Z,v+1,J),P=0;P<u;P++)T[2*P+1]=5,T[2*P]=ye(P,5);ee=new se(Z,B,m+1,v,h),q=new se(T,F,0,u,h),oe=new se(new Array(0),A,0,b,w)})(),H=!0),k.l_desc=new O(k.dyn_ltree,ee),k.d_desc=new O(k.dyn_dtree,q),k.bl_desc=new O(k.bl_tree,oe),k.bi_buf=0,k.bi_valid=0,fe(k)},a._tr_stored_block=C,a._tr_flush_block=function(k,P,D,$){var I,G,J=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(X){var ae,pe=4093624447;for(ae=0;ae<=31;ae++,pe>>>=1)if(1&pe&&X.dyn_ltree[2*ae]!==0)return s;if(X.dyn_ltree[18]!==0||X.dyn_ltree[20]!==0||X.dyn_ltree[26]!==0)return o;for(ae=32;ae<m;ae++)if(X.dyn_ltree[2*ae]!==0)return o;return s})(k)),Xe(k,k.l_desc),Xe(k,k.d_desc),J=(function(X){var ae;for(g(X,X.dyn_ltree,X.l_desc.max_code),g(X,X.dyn_dtree,X.d_desc.max_code),Xe(X,X.bl_desc),ae=b-1;3<=ae&&X.bl_tree[2*N[ae]+1]===0;ae--);return X.opt_len+=3*(ae+1)+5+5+4,ae})(k),I=k.opt_len+3+7>>>3,(G=k.static_len+3+7>>>3)<=I&&(I=G)):I=G=D+5,D+4<=I&&P!==-1?C(k,P,D,$):k.strategy===4||G===I?(Y(k,2+($?1:0),3),st(k,Z,T)):(Y(k,4+($?1:0),3),(function(X,ae,pe,ue){var qe;for(Y(X,ae-257,5),Y(X,pe-1,5),Y(X,ue-4,4),qe=0;qe<ue;qe++)Y(X,X.bl_tree[2*N[qe]+1],3);W(X,X.dyn_ltree,ae-1),W(X,X.dyn_dtree,pe-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,J+1),st(k,k.dyn_ltree,k.dyn_dtree)),fe(k),$&&de(k)},a._tr_tally=function(k,P,D){return k.pending_buf[k.d_buf+2*k.last_lit]=P>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&P,k.pending_buf[k.l_buf+k.last_lit]=255&D,k.last_lit++,P===0?k.dyn_ltree[2*D]++:(k.matches++,P--,k.dyn_ltree[2*(y[D]+m+1)]++,k.dyn_dtree[2*M(P)]++),k.last_lit===k.lit_bufsize-1},a._tr_align=function(k){Y(k,2,3),Q(k,x,Z),(function(P){P.bi_valid===16?(ne(P,P.bi_buf),P.bi_buf=0,P.bi_valid=0):8<=P.bi_valid&&(P.pending_buf[P.pending++]=255&P.bi_buf,P.bi_buf>>=8,P.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(i,r,a){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,a){(function(n){(function(s,o){if(!s.setImmediate){var c,f,l,m,v=1,u={},b=!1,d=s.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(s);h=h&&h.setTimeout?h:s,c={}.toString.call(s.process)==="[object process]"?function(_){process.nextTick(function(){w(_)})}:(function(){if(s.postMessage&&!s.importScripts){var _=!0,S=s.onmessage;return s.onmessage=function(){_=!1},s.postMessage("","*"),s.onmessage=S,_}})()?(m="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",x,!1):s.attachEvent("onmessage",x),function(_){s.postMessage(m+_,"*")}):s.MessageChannel?((l=new MessageChannel).port1.onmessage=function(_){w(_.data)},function(_){l.port2.postMessage(_)}):d&&"onreadystatechange"in d.createElement("script")?(f=d.documentElement,function(_){var S=d.createElement("script");S.onreadystatechange=function(){w(_),S.onreadystatechange=null,f.removeChild(S),S=null},f.appendChild(S)}):function(_){setTimeout(w,0,_)},h.setImmediate=function(_){typeof _!="function"&&(_=new Function(""+_));for(var S=new Array(arguments.length-1),R=0;R<S.length;R++)S[R]=arguments[R+1];var B={callback:_,args:S};return u[v]=B,c(v),v++},h.clearImmediate=p}function p(_){delete u[_]}function w(_){if(b)setTimeout(w,0,_);else{var S=u[_];if(S){b=!0;try{(function(R){var B=R.callback,F=R.args;switch(F.length){case 0:B();break;case 1:B(F[0]);break;case 2:B(F[0],F[1]);break;case 3:B(F[0],F[1],F[2]);break;default:B.apply(o,F)}})(S)}finally{p(_),b=!1}}}}function x(_){_.source===s&&typeof _.data=="string"&&_.data.indexOf(m)===0&&w(+_.data.slice(m.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Zi)),Zi.exports}var hl=dl();const ml=ul(hl);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function L(t){if(!t)throw new Error("Assertion failed.")}const pl=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},$e=t=>t&&t[t.length-1],gt=t=>t>=0&&t<2**32,K=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},lt=t=>{const e=K(t);return(e&1)===0?-(e>>1):e+1>>1},Le=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),Je=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),et=new TextEncoder,bi={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},yi={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},wi={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},gl=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,xi=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class ga{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(a=>{let n=!1;e=()=>{n||(a(),this.pending--,n=!0)}}),r=this.currentPromise;return this.currentPromise=i,this.pending++,await r,e}}const va=(t,e,i)=>{let r=0,a=t.length-1,n=-1;for(;r<=a;){const s=r+(a-r+1)/2|0;i(t[s])<=e?(n=s,r=s+1):a=s-1}return n},ba=()=>{let t,e;return{promise:new Promise((r,a)=>{t=r,e=a}),resolve:t,reject:e}},kt=t=>{throw new Error(`Unexpected value: ${t}`)},vl=(t,e,i)=>{const r=t.getUint8(e),a=t.getUint8(e+1),n=t.getUint8(e+2);return r<<16|a<<8|n},Qi=(t,e,i,r)=>{i=i>>>0,i=i&16777215,r?(t.setUint8(e,i&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i>>>16&255)):(t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255))},bl=(t,e,i,r)=>{i=Ee(i,-8388608,8388607),i<0&&(i=i+16777216&16777215),Qi(t,e,i,r)},Ee=(t,e,i)=>Math.max(e,Math.min(i,t)),yl=(t,e,i)=>t+(e-t)*i,wl="und",ya=(t,e)=>Math.round(t/e)*e,wa=(t,e)=>Math.round(t*e)/e,xa=(t,e)=>Math.floor(t*e)/e,xl=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},kl=/^[a-z]{3}$/,_l=t=>kl.test(t),vt=1e6*(1+Number.EPSILON),Tl=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let r=0,a=1,n=1,s=0,o=t;for(;;){const c=Math.floor(o),f=c*n+r,l=c*s+a;if(l>e)return{num:i*n,den:s};if(r=n,a=s,n=f,s=l,o=1/(o-c),!isFinite(o))break}return{num:i*n,den:s}};class ka{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Yi=null;const Cl=()=>Yi!==null?Yi:Yi=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));let Ji=null;const _a=()=>Ji!==null?Ji:Ji=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let er=null;const Sl=()=>er!==null?er:er=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let tr=null;const El=()=>{if(tr!==null)return tr;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?tr=Number(t[1]):null},Ta=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Pl=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Al=(t,e)=>{let i=-1,r=1/0;for(let a=0;a<t.length;a++){const n=e(t[a]);n<r&&(r=n,i=a)}return i},Ca=t=>{L(Number.isInteger(t.num)),L(Number.isInteger(t.den)),L(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const a=e%i;e=i,i=a}const r=e||1;return{num:t.num/r,den:t.den/r}},ir=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Bl=t=>new Promise(e=>setTimeout(e,t)),Sa=t=>Array.isArray(t)?t:[t];class rr{constructor(){this._listeners=new Map}on(e,i,r){this._listeners.has(e)||this._listeners.set(e,new Set);const a={fn:i,once:r?.once??!1};return this._listeners.get(e).add(a),()=>{this._listeners.get(e)?.delete(a)}}_emit(...e){const[i,r]=e,a=this._listeners.get(i);if(a)for(const n of a){try{n.fn(r)}catch(s){console.error(s)}n.once&&a.delete(n)}}}const Il=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var tt;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(tt||(tt={}));class ve{constructor(){}static get level(){return ve._level}static set level(e){if(e!==tt.Silent&&e!==tt.Errors&&e!==tt.Warnings&&e!==tt.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ve._level=e}static get _emitter(){return ve._emitterInstance??=new rr}static on(e,i,r){return ve._emitter.on(e,i,r)}static _error(...e){ve._emitter._emit("error",e),ve._level>=tt.Errors&&console.error(...e)}static _warn(...e){ve._emitter._emit("warn",e),ve._level>=tt.Warnings&&console.warn(...e)}static _info(...e){ve._emitter._emit("info",e),ve._level>=tt.Info&&console.info(...e)}}ve._level=tt.Info,ve._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ea{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Ml{constructor(e,i,r,a){if(this.data=e,this.mimeType=i,this.name=r,this.description=a,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("name, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("description, when provided, must be a string.")}}const Rl=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof Ea)&&!(e instanceof Ml)&&!Il(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},Fl=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ke{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,r=7-(this.pos&7),a=(i&1<<r)>>r;return this.pos++,a}readBits(e){if(e===1)return this.readBit();let i=0;for(let r=0;r<e;r++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const r=this.pos+e;for(let a=this.pos;a<r;a++){const n=Math.floor(a/8);let s=this.bytes[n];const o=7-(a&7);s&=~(1<<o),s|=(i&1<<r-a-1)>>r-a-1<<o,this.bytes[n]=s}this.pos=r}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new ke(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ki=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],ar=[-1,1,2,3,4,5,6,8],zl=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new ke(t);let i=e.readBits(5);i===31&&(i=32+e.readBits(6));const r=e.readBits(4);let a=null;r===15?a=e.readBits(24):r<ki.length&&(a=ki[r]);const n=e.readBits(4);let s=null;return n>=1&&n<=7&&(s=ar[n]),{objectType:i,frequencyIndex:r,sampleRate:a,channelConfiguration:n,numberOfChannels:s}},Pa=t=>{let e=ki.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const r=ar.indexOf(t.numberOfChannels);if(r===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let a=13;t.objectType>=32&&(a+=6),e===15&&(a+=24);const n=Math.ceil(a/8),s=new Uint8Array(n),o=new ke(s);return t.objectType<32?o.writeBits(5,t.objectType):(o.writeBits(5,31),o.writeBits(6,t.objectType-32)),o.writeBits(4,e),e===15&&o.writeBits(24,i),o.writeBits(4,r),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ft=["avc","hevc","vp9","av1","vp8","prores"],je=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],nr=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],_t=[...nr,...je],$t=["webvtt"],_i=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Aa=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],Ba=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Ia=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],jt=["ap4x","ap4h","apch","apcn","apcs","apco"],sr=["dtsc","dtsh","dtsl","dtse"],Ol=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Hl=(t,e,i,r,a)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),o=_i.find(v=>s<=v.maxMacroblocks&&r<=v.maxBitrate)??$e(_i),c=o?o.level:0,f="64".padStart(2,"0"),l="00",m=c.toString(16).padStart(2,"0");return`avc1.${f}${l}${m}`}else if(t==="hevc"){const c=e*i,f=Aa.find(m=>c<=m.maxPictureSize&&r<=m.maxBitrate)??$e(Aa);return`hev1.1.6.${f.tier}${f.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(Ba.find(f=>s<=f.maxPictureSize&&r<=f.maxBitrate)??$e(Ba)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,o=Ia.find(l=>s<=l.maxPictureSize&&r<=l.maxBitrate)??$e(Ia);return`av01.0.${o.level.toString().padStart(2,"0")}${o.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),o=Ol.filter(l=>l.alpha===a);let c=o[0].fourCc,f=1/0;for(const{fourCc:l,bitrate:m}of o){const v=Math.abs(m*s-r);v<f&&(f=v,c=l)}return c}else kt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Ll=t=>{const e=t.split("."),a=(1<<7)+1,n=Number(e[1]),s=e[2],o=Number(s.slice(0,-1)),c=(n<<5)+o,f=s.slice(-1)==="H"?1:0,m=Number(e[3])===8?0:1,v=0,u=e[4]?Number(e[4]):0,b=e[5]?Number(e[5][0]):1,d=e[5]?Number(e[5][1]):1,h=e[5]?Number(e[5][2]):0,p=(f<<7)+(m<<6)+(v<<5)+(u<<4)+(b<<3)+(d<<2)+h;return[a,c,p,0]},Ul=(t,e,i)=>{if(t==="aac")return e>=2&&i<=24e3?"mp4a.40.29":i<=24e3?"mp4a.40.5":"mp4a.40.2";if(t==="mp3")return"mp3";if(t==="opus")return"opus";if(t==="vorbis")return"vorbis";if(t==="flac")return"flac";if(t==="ac3")return"ac-3";if(t==="eac3")return"ec-3";if(t==="dts")return"dtsc";if(je.includes(t))return t;throw new TypeError(`Unhandled codec '${t}'.`)},Ma=/^pcm-([usf])(\d+)(be)?$/,Tt=t=>{if(L(je.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Ma.exec(t);L(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const r=Number(e[2])/8,a=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:r,littleEndian:a,silentValue:n}},Ti=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":jt.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":sr.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":Ma.test(t)?t:t==="webvtt"?"webvtt":null,Nl=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Wl=t=>t==="aac"?{aac:{format:"aac"}}:t==="opus"?{opus:{format:"opus"}}:{},ql=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...jt],Dl=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,$l=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,jl=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Vl=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Ra=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!ql.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!xi(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const r=Object.keys(bi);if(i.primaries!=null&&!r.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${r.join(", ")}.`);const a=Object.keys(yi);if(i.transfer!=null&&!a.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(wi);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Dl.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!$l.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!jl.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!Vl.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(jt.some(i=>t.decoderConfig.codec.startsWith(i))&&!jt.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${jt.join(", ")}.`);if(e!==null&&Ti(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Gl=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Fa=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Gl.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!xi(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!sr.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${sr.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!je.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${je.join(", ")}).`);if(e!==null&&Ti(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Kl=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Xl=[48e3,44100,32e3],Zl=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var ut;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(ut||(ut={}));var Ue;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Ue||(Ue={}));const Vt=function*(t){let e=0,i=-1;for(;e<t.length-2;){const r=t.indexOf(0,e);if(r===-1||r>=t.length-2)break;e=r;let a=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?a=4:t[e+1]===0&&t[e+2]===1&&(a=3),a===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+a,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},za=function*(t,e){let i=0;const r=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let a;e===1?a=r.getUint8(i):e===2?a=r.getUint16(i,!1):e===3?a=vl(r,i):(L(e===4),a=r.getUint32(i,!1)),i+=e,yield{offset:i,length:a},i+=a}},Ql=(t,e)=>{if(e.description){const a=(Le(e.description)[4]&3)+1;return za(t,a)}else return Vt(t)},Oa=t=>t&31,Ci=t=>{const e=[],i=t.length;for(let r=0;r<i;r++)r+2<i&&t[r]===0&&t[r+1]===0&&t[r+2]===3?(e.push(0,0),r+=2):e.push(t[r]);return new Uint8Array(e)},Yl=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),r=new Uint8Array(i);let a=0;for(const n of t){const s=new DataView(r.buffer,r.byteOffset,r.byteLength);switch(e){case 1:s.setUint8(a,n.byteLength);break;case 2:s.setUint16(a,n.byteLength,!1);break;case 3:Qi(s,a,n.byteLength,!1);break;case 4:s.setUint32(a,n.byteLength,!1);break}a+=e,r.set(n,a),a+=n.byteLength}return r},Jl=t=>{try{const e=[],i=[],r=[];for(const o of Vt(t)){const c=t.subarray(o.offset,o.offset+o.length),f=Oa(c[0]);f===ut.SPS?e.push(c):f===ut.PPS?i.push(c):f===ut.SPS_EXT&&r.push(c)}if(e.length===0||i.length===0)return null;const a=e[0],n=tf(a);L(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?r:null}}catch(e){return ve._error("Error building AVC Decoder Configuration Record:",e),null}},ef=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){L(t.chromaFormat!==null),L(t.bitDepthLumaMinus8!==null),L(t.bitDepthChromaMinus8!==null),L(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}}return new Uint8Array(e)},Ha={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},tf=t=>{try{const e=new ke(Ci(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const r=e.readAlignedByte(),a=e.readAlignedByte(),n=e.readAlignedByte();K(e);let s=1,o=0,c=0,f=0;if((r===100||r===110||r===122||r===244||r===44||r===83||r===86||r===118||r===128)&&(s=K(e),s===3&&(f=e.readBits(1)),o=K(e),c=K(e),e.skipBits(1),e.readBits(1))){for(let T=0;T<(s!==3?8:12);T++)if(e.readBits(1)){const y=T<6?16:64;let U=8,ee=8;for(let q=0;q<y;q++){if(ee!==0){const oe=lt(e);ee=(U+oe+256)%256}U=ee===0?U:ee}}}K(e);const l=K(e);if(l===0)K(e);else if(l===1){e.skipBits(1),lt(e),lt(e);const Z=K(e);for(let T=0;T<Z;T++)lt(e)}K(e),e.skipBits(1);const m=K(e),v=K(e),u=16*(m+1),b=16*(v+1);let d=u,h=b;const p=e.readBits(1);if(p||e.skipBits(1),e.skipBits(1),e.readBits(1)){const Z=K(e),T=K(e),z=K(e),y=K(e);let U,ee;if((f===0?s:0)===0)U=1,ee=2-p;else{const oe=s===3?1:2,V=s===1?2:1;U=oe,ee=V*(2-p)}d-=U*(Z+T),h-=ee*(z+y)}let x=2,_=2,S=2,R=0,B={num:1,den:1},F=null,A=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)B={num:e.readBits(16),den:e.readBits(16)};else{const se=Ha[V];se&&(B=se)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),R=e.readBits(1),e.readBits(1)&&(x=e.readBits(8),_=e.readBits(8),S=e.readBits(8))),e.readBits(1)&&(K(e),K(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const ee=e.readBits(1);ee&&La(e);const q=e.readBits(1);q&&La(e),(ee||q)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),K(e),K(e),K(e),K(e),F=K(e),A=K(e))}if(F===null){L(A===null);const Z=a&16;if((r===44||r===86||r===100||r===110||r===122||r===244)&&Z)F=0,A=0;else{const T=m+1,z=v+1,y=(2-p)*z,U=_i.find(q=>q.level>=n)??$e(_i),ee=Math.min(Math.floor(U.maxDpbMbs/(T*y)),16);F=ee,A=ee}}return L(A!==null),{profileIdc:r,constraintFlags:a,levelIdc:n,frameMbsOnlyFlag:p,chromaFormatIdc:s,bitDepthLumaMinus8:o,bitDepthChromaMinus8:c,codedWidth:u,codedHeight:b,displayWidth:d,displayHeight:h,pixelAspectRatio:B,colourPrimaries:x,matrixCoefficients:S,transferCharacteristics:_,fullRangeFlag:R,numReorderFrames:F,maxDecFrameBuffering:A}}catch(e){return ve._error("Error parsing AVC SPS:",e),null}},La=t=>{const e=K(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)K(t),K(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},rf=(t,e)=>{if(e.description){const a=(Le(e.description)[21]&3)+1;return za(t,a)}else return Vt(t)},or=t=>t>>1&63,af=t=>{try{const e=new ke(Ci(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),r=e.readBits(1),{general_profile_space:a,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:o,general_constraint_indicator_flags:c,general_level_idc:f}=sf(e,i);K(e);const l=K(e);let m=0;l===3&&(m=e.readBits(1));const v=K(e),u=K(e);let b=v,d=u;if(e.readBits(1)){const T=K(e),z=K(e),y=K(e),U=K(e);let ee=1,q=1;const oe=m===0?l:0;oe===1?(ee=2,q=2):oe===2&&(ee=2,q=1),b-=(T+z)*ee,d-=(y+U)*q}const h=K(e),p=K(e);K(e);const x=e.readBits(1)?0:i;let _=0;for(let T=x;T<=i;T++)K(e),_=K(e),K(e);K(e),K(e),K(e),K(e),K(e),K(e),e.readBits(1)&&e.readBits(1)&&of(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),K(e),K(e),e.skipBits(1));const S=K(e);if(cf(e,S),e.readBits(1)){const T=K(e);for(let z=0;z<T;z++)K(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let R=2,B=2,F=2,A=0,N=0,Z={num:1,den:1};if(e.readBits(1)){const T=ff(e,i);Z=T.pixelAspectRatio,R=T.colourPrimaries,B=T.transferCharacteristics,F=T.matrixCoefficients,A=T.fullRangeFlag,N=T.minSpatialSegmentationIdc}return{displayWidth:b,displayHeight:d,pixelAspectRatio:Z,colourPrimaries:R,transferCharacteristics:B,matrixCoefficients:F,fullRangeFlag:A,maxDecFrameBuffering:_+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:r,generalProfileSpace:a,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:o,generalConstraintIndicatorFlags:c,generalLevelIdc:f,chromaFormatIdc:l,bitDepthLumaMinus8:h,bitDepthChromaMinus8:p,minSpatialSegmentationIdc:N}}catch(e){return ve._error("Error parsing HEVC SPS:",e),null}},nf=t=>{try{const e=[],i=[],r=[],a=[];for(const f of Vt(t)){const l=t.subarray(f.offset,f.offset+f.length),m=or(l[0]);m===Ue.VPS_NUT?e.push(l):m===Ue.SPS_NUT?i.push(l):m===Ue.PPS_NUT?r.push(l):(m===Ue.PREFIX_SEI_NUT||m===Ue.SUFFIX_SEI_NUT)&&a.push(l)}if(i.length===0||r.length===0)return null;const n=af(i[0]);if(!n)return null;let s=0;if(r.length>0){const f=r[0],l=new ke(Ci(f));l.skipBits(16),K(l),K(l),l.skipBits(1),l.skipBits(1),l.skipBits(3),l.skipBits(1),l.skipBits(1),K(l),K(l),lt(l),l.skipBits(1),l.skipBits(1),l.readBits(1)&&K(l),lt(l),lt(l),l.skipBits(1),l.skipBits(1),l.skipBits(1),l.skipBits(1);const m=l.readBits(1),v=l.readBits(1);!m&&!v?s=0:m&&!v?s=2:!m&&v?s=3:s=0}const o=[...e.length?[{arrayCompleteness:1,nalUnitType:Ue.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Ue.SPS_NUT,nalUnits:i}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:Ue.PPS_NUT,nalUnits:r}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:or(a[0][0]),nalUnits:a}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:o}}catch(e){return ve._error("Error building HEVC Decoder Configuration Record:",e),null}},sf=(t,e)=>{const i=t.readBits(2),r=t.readBits(1),a=t.readBits(5);let n=0;for(let l=0;l<32;l++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let l=0;l<6;l++)s[l]=t.readBits(8);const o=t.readBits(8),c=[],f=[];for(let l=0;l<e;l++)c.push(t.readBits(1)),f.push(t.readBits(1));if(e>0)for(let l=e;l<8;l++)t.skipBits(2);for(let l=0;l<e;l++)c[l]&&t.skipBits(88),f[l]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:r,general_profile_idc:a,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:o}},of=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))K(t);else{const a=Math.min(64,1<<4+(e<<1));e>1&&lt(t);for(let n=0;n<a;n++)lt(t)}},cf=(t,e)=>{const i=[];for(let r=0;r<e;r++)i[r]=lf(t,r,e,i)},lf=(t,e,i,r)=>{let a=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const c=K(t);s=e-(c+1)}else s=e-1;t.readBits(1),K(t);const o=r[s]??0;for(let c=0;c<=o;c++)t.readBits(1)||t.readBits(1);a=r[s]}else{const o=K(t),c=K(t);for(let f=0;f<o;f++)K(t),t.readBits(1);for(let f=0;f<c;f++)K(t),t.readBits(1);a=o+c}return a},ff=(t,e)=>{let i=2,r=2,a=2,n=0,s=0,o={num:1,den:1};if(t.readBits(1)){const c=t.readBits(8);if(c===255)o={num:t.readBits(16),den:t.readBits(16)};else{const f=Ha[c];f&&(o=f)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),r=t.readBits(8),a=t.readBits(8))),t.readBits(1)&&(K(t),K(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(K(t),K(t),K(t),K(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&K(t),t.readBits(1)&&uf(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=K(t),K(t),K(t),K(t),K(t)),{pixelAspectRatio:o,colourPrimaries:i,transferCharacteristics:r,matrixCoefficients:a,fullRangeFlag:n,minSpatialSegmentationIdc:s}},uf=(t,e,i)=>{let r=!1,a=!1,n=!1;r=t.readBits(1)===1,a=t.readBits(1)===1,(r||a)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const o=t.readBits(1)===1;let c=!0;o||(c=t.readBits(1)===1);let f=!1;c?K(t):f=t.readBits(1)===1;let l=1;f||(l=K(t)+1),r&&Ua(t,l,n),a&&Ua(t,l,n)}},Ua=(t,e,i)=>{for(let r=0;r<e;r++)K(t),K(t),i&&(K(t),K(t)),t.readBits(1)},df=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const r of i.nalUnits){e.push(r.length>>8&255),e.push(r.length&255);for(let a=0;a<r.length;a++)e.push(r[a])}}return new Uint8Array(e)};var Na;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Na||(Na={}));const hf=function*(t){const e=new ke(t),i=()=>{let r=0;for(let a=0;a<8;a++){const n=e.readAlignedByte();if(r|=(n&127)<<a*7,!(n&128))break;if(a===7&&n&128)return null}return r>=2**32-1?null:r};for(;e.getBitsLeft()>=8;){e.skipBits(1);const r=e.readBits(4),a=e.readBits(1),n=e.readBits(1);e.skipBits(1),a&&e.skipBits(8);let s;if(n){const o=i();if(o===null)return;s=o}else s=Math.floor(e.getBitsLeft()/8);L(e.pos%8===0),yield{type:r,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},mf=t=>{const e=Je(t),i=e.getUint8(9),r=e.getUint16(10,!0),a=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let o=null;return s&&(o=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:r,inputSampleRate:a,outputGain:n,channelMappingFamily:s,channelMappingTable:o}},pf=(t,e,i)=>{switch(t){case"avc":{for(const r of Ql(i,e)){const a=i[r.offset],n=Oa(a);if(n>=ut.NON_IDR_SLICE&&n<=ut.SLICE_DPC)return"delta";if(n===ut.IDR)return"key";if(n===ut.SEI&&(!Sl()||El()>=144)){const s=i.subarray(r.offset,r.offset+r.length),o=Ci(s);let c=1;do{let f=0;for(;;){const v=o[c++];if(v===void 0||(f+=v,v<255))break}let l=0;for(;;){const v=o[c++];if(v===void 0||(l+=v,v<255))break}if(f===6){const v=new ke(o);v.pos=8*c;const u=K(v),b=v.readBits(1);if(u===0&&b===1)return"key"}c+=l}while(c<o.length-1)}}return"delta"}case"hevc":{for(const r of rf(i,e)){const a=or(i[r.offset]);if(a<Ue.BLA_W_LP)return"delta";if(a<=Ue.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const r=new ke(i);if(r.readBits(2)!==2)return null;const a=r.readBits(1);return(r.readBits(1)<<1)+a===3&&r.skipBits(1),r.readBits(1)?null:r.readBits(1)===0?"key":"delta"}case"av1":{let r=!1;for(const{type:a,data:n}of hf(i))if(a===1){const s=new ke(n);s.skipBits(4),r=!!s.readBits(1)}else if(a===3||a===6||a===7){if(r)return"key";const s=new ke(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:kt(t),L(!1)}};var Wa;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Wa||(Wa={}));const gf=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new ke(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const r=e.readBits(6),a=e.readBits(5);if(a>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const o=e.readBits(1),c=Math.floor(r/2);return{fscod:i,bsid:a,bsmod:n,acmod:s,lfeon:o,bitRateCode:c}},vf=[1,2,3,6],bf=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new ke(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const r=e.readBits(11),a=e.readBits(2);let n=0,s;a===3?(n=e.readBits(2),s=3):s=e.readBits(2);const o=e.readBits(3),c=e.readBits(1),f=e.readBits(5);if(f<11||f>16)return null;const l=vf[s];let m;return a<3?m=Xl[a]/1e3:m=Zl[n]/1e3,{dataRate:Math.round((r+1)*m/(l*16)),substreams:[{fscod:a,fscod2:n,bsid:f,bsmod:0,acmod:o,lfeon:c,numDepSub:0,chanLoc:0}]}},yf=1683496997,wf=18,xf=10,qa=32,kf=20,_f=8,Tf=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Cf=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Sf=[16,16,20,20,0,24,24,0],Da=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Ef=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Pf=8,Af=[32e3,44100,48e3,0],Bf=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],If=[512,1024,2048,4096],Mf=t=>{const e=Rf(t),i=Je(t);let r=e?Math.ceil(e.frameSize/4)*4:0,a=null;for(;r+4<=t.length&&i.getUint32(r)===yf;){const s=Ff(t.subarray(r));if(!s)break;a??=s,r+=s.frameSize}if(e)return{frameSize:a?r:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:a!==null};if(!a?.asset)return null;const{asset:n}=a;return{frameSize:r,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Rf=t=>{if(t.length<wf||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new ke(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==qa-1)return null;const i=e.readBits(1),r=e.readBits(7)+1;if(r%_f!==0)return null;const a=e.readBits(14)+1;if(a<96)return null;const n=e.readBits(6);if(n>=Da.length)return null;const s=Tf[e.readBits(4)];if(s===0)return null;const o=Cf[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const c=e.readBits(2);if(c===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const f=Sf[e.readBits(3)];if(f===0)return null;const l=c!==0;return{frameSize:a,sampleRate:s,numberOfChannels:Da[n]+(l?1:0),sampleCount:r*qa,channelLayout:Ef[n]|(l?Pf:0),amode:n,lfePresent:l,bitRate:o,pcmResolution:f}},Ff=t=>{if(t.length<xf||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new ke(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),r=e.readBits(1),a=8+4*r,n=16+4*r;e.skipBits(a);const s=e.readBits(n)+1,o={frameSize:s,asset:null};if(!e.readBits(1))return o;const c=Af[e.readBits(2)],f=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const l=e.readBits(3)+1,m=e.readBits(3)+1,v=[];for(let p=0;p<l;p++)v.push(e.readBits(i+1));for(const p of v)e.skipBits(8*xl(p));if(e.readBits(1)){e.skipBits(2);const p=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*p)}for(let p=0;p<m;p++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const u=e.readBits(5)+1,b=Bf[e.readBits(4)],d=e.readBits(8)+1;let h=0;if(e.readBits(1)&&(d>2&&e.skipBits(1),d>6&&e.skipBits(1),e.readBits(1))){const p=e.readBits(2)+1<<2;h=e.readBits(p)}return c===0||e.getBitsLeft()<0?o:{frameSize:s,asset:{sampleRate:b,numberOfChannels:d,sampleCount:Math.round(f*b/c),channelLayout:h,pcmResolution:u}}},zf=t=>{const e=new Uint8Array(kf),i=Je(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const r=t.core&&!t.hasExtensions?1:0,a=new ke(e);return a.seekToByte(13),a.writeBits(2,Math.max(If.indexOf(t.sampleCount),0)),a.writeBits(5,r),a.writeBits(1,t.core?.lfePresent?1:0),a.writeBits(6,t.core?.amode??0),a.writeBits(14,t.core?t.core.frameSize-1:0),a.writeBits(1,0),a.writeBits(3,0),a.writeBits(16,t.channelLayout),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $a=new Uint8Array(0);class it{constructor(e,i,r,a,n=-1,s,o){if(this.data=e,this.type=i,this.timestamp=r,this.duration=a,this.sequenceNumber=n,e===$a&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(r))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(a)||a<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(o!==void 0&&(typeof o!="object"||!o))throw new TypeError("sideData, when provided, must be an object.");if(o?.alpha!==void 0&&!(o.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(o?.alphaByteLength!==void 0&&(!Number.isInteger(o.alphaByteLength)||o.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=o??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===$a}get microsecondTimestamp(){return Math.trunc(vt*this.timestamp)}get microsecondDuration(){return Math.trunc(vt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const r=new Uint8Array(e.byteLength);return e.copyTo(r),new it(r,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new it(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Of=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const r=[...new Set(t.codecStrings)];i+=`; codecs="${r.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const cr=8,ja=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Hf=7,Lf=9,Va=t=>{const e=t.filePos,i=cu(t,9),r=new ke(i);if(r.readBits(12)!==4095||(r.skipBits(1),r.readBits(2)!==0))return null;const s=r.readBits(1),o=r.readBits(2)+1,c=r.readBits(4);if(c===15)return null;r.skipBits(1);const f=r.readBits(3);if(f===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);const l=r.readBits(13);r.skipBits(11);const m=r.readBits(2)+1;if(m!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let v=null;return s===1?t.filePos-=2:v=r.readBits(16),{objectType:o,samplingFrequencyIndex:c,channelConfiguration:f,frameLength:l,numberOfAacFrames:m,crcCheck:v,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Uf=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(a=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");a&&(r=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},Nf=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,a=0;function n(){for(;r=e.stack.pop();)try{if(!r.async&&a===1)return a=0,e.stack.push(r),Promise.resolve().then(n);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return a|=2,Promise.resolve(s).then(n,function(o){return i(o),n()})}else a|=1}catch(o){i(o)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});Pl();let Ga=-1/0,Ka=-1/0,Gt=null;typeof FinalizationRegistry<"u"&&(Gt=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Ga>=1e3&&(ve._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Ga=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Ka>=1e3&&(ve._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Ka=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class Ct{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const lr=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Wf=new Set(lr);class Be{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(vt*this.timestamp)}get microsecondDuration(){return Math.trunc(vt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Wf.has(i.format))throw new TypeError("init.format must be one of: "+lr.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&ir(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const r=i.layout??$f(i.format,i.codedWidth,i.codedHeight);let a=i.colorSpace??null;a===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?a={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:a={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?Le(e):Le(e).slice(),this._layout=r,this.colorSpace=new fr(a)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&ir(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new fr(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&ir(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Be(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*vt),duration:Math.trunc((i.duration??0)*vt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let r=0,a=0;if("naturalWidth"in e?(r=e.naturalWidth,a=e.naturalHeight):"videoWidth"in e?(r=e.videoWidth,a=e.videoHeight):"width"in e&&(r=Number(e.width),a=Number(e.height)),!r||!a)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:r,height:a},s=new OffscreenCanvas(n.width,n.height),o=s.getContext("2d",{alpha:_a(),willReadFrequently:!0});if(!o)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");o.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new fr({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Ct){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!lr.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=Ca({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Gt?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return L(this._data!==null),this._data instanceof Ct?new Be(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Xt(this._data)?new Be(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(L(this._layout),new Be(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Be(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Gt?.unregister(this),this._data instanceof Ct?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Xt(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Ya(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Xt(this._data)?this._data.allocationSize(e):Ja(this,e).allocationSize}async copyTo(e,i={}){if(!xi(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Ya(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(L(this._data!==null),Xt(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof Ct){const f={stack:[],error:void 0,hasError:!1};try{const l=Uf(f,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(l instanceof Be))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(l.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${l.format}' instead.`);return await l.copyTo(e,i)}catch(l){f.error=l,f.hasError=!0}finally{Nf(f)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const f=this.toVideoFrame(),l=await f.copyTo(e,i);return f.close(),l}const r=Ja(this,i);L(this.format);const a=Le(e);if(a.byteLength<r.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${r.allocationSize}, Available: ${a.byteLength}`);const n=Si(this.format);let s;if(this._data instanceof Ct){let f=this._data.getDataPlanes();if(f instanceof Promise&&(f=await f),!Array.isArray(f)||f.some(l=>!(l.data instanceof Uint8Array)||!Number.isInteger(l.stride)||l.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=f}else if(this._data instanceof Uint8Array)L(this._layout),L(this._layout.length===n.length),s=this._layout.map((f,l)=>{const m=Math.ceil(this.codedHeight/n[l].heightDivisor);return{data:this._data.subarray(f.offset,f.offset+f.stride*m),stride:f.stride}});else{const l=this._data.getContext("2d");L(l);const m=l.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:Le(m.data),stride:4*this.codedWidth}]}const o=[],c=n.length;for(let f=0;f<c;f++){const l=r.computedLayouts[f],m=s[f].stride,v=s[f].data;let u=l.sourceTop*m;u+=l.sourceLeftBytes;let b=l.destinationOffset;const d=l.sourceWidthBytes,h={offset:b,stride:l.destinationStride};for(let p=0;p<l.sourceHeight;p++){if(u+d>v.byteLength)throw new Error("Source buffer OOB read.");if(b+d>a.byteLength)throw new Error("Destination buffer OOB write.");const w=v.subarray(u,u+d);a.set(w,b),u+=m,b+=l.destinationStride}o.push(h)}if(i.format!==void 0){const f=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),l=this.format.includes("X")&&i.format.includes("A");if(f||l)for(let m=0;m<r.allocationSize;m+=4){if(f){const v=a[m],u=a[m+2];a[m]=u,a[m+2]=v}l&&(a[m+3]=255)}}return o}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(L(this._data!==null),this._data instanceof Ct){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,o)=>s+o.data.byteLength,0),r=new Uint8Array(i);let a=0;const n=[];for(const s of e)r.set(s.data,a),n.push(a),a+=s.data.byteLength;return new VideoFrame(r,{format:this.format,layout:e.map((s,o)=>({offset:n[o],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Xt(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(L(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,r,a,n,s,o,c,f){let l=0,m=0,v=this.displayWidth,u=this.displayHeight,b=0,d=0,h=this.displayWidth,p=this.displayHeight;if(s!==void 0?(l=i,m=r,v=a,u=n,b=s,d=o,c!==void 0?(h=c,p=f):(h=v,p=u)):(b=i,d=r,a!==void 0&&(h=a,p=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(l))throw new TypeError("sx must be a number.");if(!Number.isFinite(m))throw new TypeError("sy must be a number.");if(!Number.isFinite(v)||v<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(u)||u<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(b))throw new TypeError("dx must be a number.");if(!Number.isFinite(d))throw new TypeError("dy must be a number.");if(!Number.isFinite(h)||h<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(p)||p<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:l,sy:m,sWidth:v,sHeight:u}=this._rotateSourceRegion(l,m,v,u,this.rotation));const w=this.toCanvasImageSource();e.save();const x=b+h/2,_=d+p/2;e.translate(x,_),e.rotate(this.rotation*Math.PI/180);const S=this.rotation%180===0?1:h/p;e.scale(1/S,S),e.drawImage(w,l,m,v,u,-h/2,-p/2,h,p),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&ur(i.crop,"options.");const r=e.canvas.width,a=e.canvas.height,n=i.rotation??this.rotation,[s,o]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let c=i.crop;c&&(c=Qa(c,s,o));let f,l,m,v;const{sx:u,sy:b,sWidth:d,sHeight:h}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??o,n);if(i.fit==="fill")f=0,l=0,m=r,v=a;else{const[w,x]=i.crop?[i.crop.width,i.crop.height]:[s,o],_=i.fit==="contain"?Math.min(r/w,a/x):Math.max(r/w,a/x);m=w*_,v=x*_,f=(r-m)/2,l=(a-v)/2}e.save();const p=n%180===0?1:m/v;e.translate(r/2,a/2),e.rotate(n*Math.PI/180),e.scale(1/p,p),e.translate(-r/2,-a/2),e.drawImage(this.toCanvasImageSource(),u,b,d,h,f,l,m,v),e.restore()}_rotateSourceRegion(e,i,r,a,n){return n===90?[e,i,r,a]=[i,this.squarePixelHeight-e-r,a,r]:n===180?[e,i]=[this.squarePixelWidth-e-r,this.squarePixelHeight-i-a]:n===270&&([e,i,r,a]=[this.squarePixelWidth-i-a,e,a,r]),{sx:e,sy:i,sWidth:r,sHeight:a}}_drawWithFitAndMipmapping(e,i,r){const a=e.width,n=e.height,[s,o]=r.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=r.crop?r.crop.width:s,f=r.crop?r.crop.height:o;let l=0;2*a<c&&2*n<f&&(l=Math.floor(Math.log2(Math.min(c/a,f/n))));const m=a*2**l,v=n*2**l,{canvas:u,context:b,isNew:d}=l>0?Za(m,v):{canvas:e,context:i,isNew:r.targetIsFresh};b.imageSmoothingQuality="high",r.fillBlack?(b.fillStyle="black",b.fillRect(0,0,m,v)):d||b.clearRect(0,0,m,v),this.drawWithFit(b,{fit:r.fit,rotation:r.rotation,crop:r.crop}),b.globalCompositeOperation="copy";for(let h=l;h>1;h--){const p=a*2**h,w=n*2**h;b.drawImage(u,0,0,p,w,0,0,p/2,w/2)}b.globalCompositeOperation="source-over",l>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(u,0,0,2*a,2*n,0,0,a,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(L(this._data!==null),this._data instanceof Ct||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&ur(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=pl(this.rotation+(e.rotate??0)),[r,a]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=Qa(n,r,a));const s=n?n.width:r,o=n?n.height:a,c=s/o;let f,l;e.width!==void 0&&e.height===void 0?(f=e.width,l=f/c):e.width===void 0&&e.height!==void 0?(l=e.height,f=l*c):e.width!==void 0&&e.height!==void 0?(f=e.width,l=e.height):(f=s,l=o),f=ya(f,e.roundDimensionsTo??1),l=ya(l,e.roundDimensionsTo??1);const m={width:f,height:l,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:r,height:a},alpha:e.alpha??"keep"};for(const d of qf){let h=d(this,m);if(h instanceof Promise&&(h=await h),h!==null)return h}const{canvas:v,context:u,isNew:b}=Za(m.width,m.height);return this._drawWithFitAndMipmapping(v,u,{fit:m.fit,rotation:m.rotation,crop:m.crop,targetIsFresh:b,fillBlack:m.alpha==="discard"}),new Be(v,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const qf=[],Df=3,Kt=[];let Xa=0;const Za=(t,e)=>{for(const a of Kt)if(a.canvas.width===t&&a.canvas.height===e)return a.age=Xa++,{canvas:a.canvas,context:a.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const r=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!r)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Kt.length>=Df&&Kt.splice(Al(Kt,a=>a.age),1),Kt.push({canvas:i,context:r,age:Xa++}),{canvas:i,context:r,isNew:!0}};class fr{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(bi);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const r=Object.keys(yi);if(e.transfer!=null&&!r.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${r.join(", ")}.`);const a=Object.keys(wi);if(e.matrix!=null&&!a.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${a.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Xt=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Qa=(t,e,i)=>{const r=Math.min(t.left,e),a=Math.min(t.top,i),n=Math.min(t.width,e-r),s=Math.min(t.height,i-a);return L(n>=0),L(s>=0),{left:r,top:a,width:n,height:s}},ur=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Ya=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},$f=(t,e,i)=>{const r=Si(t),a=[];let n=0;for(const s of r){const o=Math.ceil(e/s.widthDivisor),c=Math.ceil(i/s.heightDivisor),f=o*s.sampleBytes,l=f*c;a.push({offset:n,stride:f}),n+=l}return a},Si=t=>{const e=(i,r,a,n,s)=>{const o=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:r,widthDivisor:a,heightDivisor:n},{sampleBytes:r,widthDivisor:a,heightDivisor:n}];return s&&o.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),o};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:kt(t),L(!1)}},Ja=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},r=e.rect,a=jf(i,r,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return Gf(a,s,n)},jf=(t,e,i,r,a)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>r)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!Vf(a,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},Vf=(t,e)=>{if(t===null)return!0;const i=Si(t);for(let r=0;r<i.length;r++){const a=i[r],n=a.widthDivisor,s=a.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},Gf=(t,e,i)=>{const r=Si(e),a=r.length;if(i!==void 0&&i.length!==a)throw new TypeError(`Layout must have ${a} planes.`);let n=0;const s=[],o=[];for(let c=0;c<a;c++){const f=r[c],l=f.sampleBytes,m=f.widthDivisor,v=f.heightDivisor,u={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(u.sourceTop=Math.ceil(Math.trunc(t.y||0)/v),u.sourceHeight=Math.ceil(Math.trunc(t.height||0)/v),u.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/m)*l,u.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/m)*l,i!==void 0){const h=i[c];if(h.stride<u.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);u.destinationOffset=h.offset,u.destinationStride=h.stride}else u.destinationOffset=n,u.destinationStride=u.sourceWidthBytes;const d=u.destinationStride*u.sourceHeight+u.destinationOffset;if(d>4294967295)throw new TypeError("Allocation size exceeds limit.");o.push(d),n=Math.max(n,d);for(let h=0;h<c;h++){const p=s[h];if(!(o[c]<=p.destinationOffset||o[h]<=u.destinationOffset))throw new TypeError("Planes overlap.")}s.push(u)}return{allocationSize:n,computedLayouts:s}},Ei=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class Zt{constructor(){this._referenceCount=0}}class Fe{get microsecondTimestamp(){return Math.trunc(vt*this.timestamp)}get microsecondDuration(){return Math.trunc(vt*this.duration)}constructor(e){if(this._closed=!1,Qt(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof Zt){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!Ei.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!Ei.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");const i=e.data.byteLength/(bt(e.format)*e.numberOfChannels);if(!Number.isInteger(i))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=i,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=i/e.sampleRate;let r;if(e.data instanceof ArrayBuffer)r=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))r=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const a=this.numberOfFrames*this.numberOfChannels*bt(this.format);if(r.byteLength<a)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=r}Gt?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!Ei.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const i=e.format??this.format,r=e.frameOffset??0;if(r>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const a=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-r;if(a>this.numberOfFrames-r)throw new RangeError("frameCount out of range");const n=bt(i),s=St(i);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?a:a*this.numberOfChannels)*n}copyTo(e,i){if(!xi(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(i.planeIndex)||i.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(i.format!==void 0&&!Ei.has(i.format))throw new TypeError("Invalid format.");if(i.frameOffset!==void 0&&(!Number.isInteger(i.frameOffset)||i.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(i.frameCount!==void 0&&(!Number.isInteger(i.frameCount)||i.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{format:r,frameCount:a,frameOffset:n}=i;let{planeIndex:s}=i;const o=this.format,c=r??this.format;if(!c)throw new Error("Destination format not determined");const f=this.numberOfFrames,l=this.numberOfChannels,m=n??0;if(m>=f)throw new RangeError("frameOffset out of range");const v=a!==void 0?a:f-m;if(v>f-m)throw new RangeError("frameCount out of range");const u=bt(c),b=St(c);if(b&&s>=l)throw new RangeError("planeIndex out of range");if(!b&&s!==0)throw new RangeError("planeIndex out of range");const h=(b?v:v*l)*u;if(e.byteLength<h)throw new RangeError("Destination buffer is too small");const p=Je(e),w=tn(c);if(Qt(this._data))Cl()&&l>2&&c!==o?Xf(this._data,p,o,c,l,s,m,v):this._data.copyTo(e,{planeIndex:s,frameOffset:m,frameCount:v,format:c});else{const x=en(o),_=bt(o),S=St(o);let R;if(this._data instanceof Zt){const F=A=>{const N=this._data.getDataPlane(A);if(!(N instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");const Z=f*_*(S?1:l);if(N.byteLength!==Z)throw new TypeError(`Data plane ${A} has invalid size. Expected exactly ${Z} bytes, got ${N.byteLength} bytes.`);return N};if(S)if(b)R=F(s),s=0;else{R=new Uint8Array(f*_*l);for(let A=0;A<l;A++){const N=F(A);R.set(N,A*f*_)}}else R=F(0)}else R=this._data;const B=Je(R);for(let F=0;F<v;F++)if(b){const A=F*u;let N;S?N=(s*f+(F+m))*_:N=((F+m)*l+s)*_;const Z=x(B,N);w(p,A,Z)}else for(let A=0;A<l;A++){const Z=(F*l+A)*u;let T;S?T=(A*f+(F+m))*_:T=((F+m)*l+A)*_;const z=x(B,T);w(p,Z,z)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof Zt){const e=new Fe(this._data);return e.setTimestamp(this.timestamp),e}else if(Qt(this._data)){const e=new Fe(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new Fe({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,i=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startSample must be a non-negative integer.");if(!Number.isInteger(i)||i<0)throw new TypeError("endSample must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startSample out of range.");if(i>this.numberOfFrames)throw new RangeError("endSample out of range.");if(i<e)throw new RangeError("endSample must not be less than startSample.");if(this._closed)throw new Error("AudioSample is closed.");const r=i-e,a=bt(this.format);let n;if(St(this.format)){const s=r*a;if(n=new Uint8Array(s*this.numberOfChannels),r>0)for(let o=0;o<this.numberOfChannels;o++)this.copyTo(n.subarray(o*s,(o+1)*s),{planeIndex:o,format:this.format,frameOffset:e,frameCount:r})}else n=new Uint8Array(r*this.numberOfChannels*a),r>0&&this.copyTo(n,{planeIndex:0,format:this.format,frameOffset:e,frameCount:r});return new Fe({data:n,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Gt?.unregister(this),this._data instanceof Zt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Qt(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof Zt?this._createAudioDataFromData():Qt(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(St(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),i=new ArrayBuffer(e*this.numberOfChannels);for(let r=0;r<this.numberOfChannels;r++)this.copyTo(new Uint8Array(i,r*e,e),{planeIndex:r,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:i})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),i=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let r=0;r<this.numberOfChannels;r++)this.copyTo(i,{planeIndex:r,format:"f32-planar"}),e.copyToChannel(i,r);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const r=48e3*5,a=e.numberOfChannels,n=e.sampleRate,s=e.length,o=Math.floor(r/a);let c=0,f=s;for(;f>0;){const l=Math.min(o,f),m=new Float32Array(a*l);for(let v=0;v<a;v++)e.copyFromChannel(m.subarray(v*l,(v+1)*l),v,c);yield new Fe({format:"f32-planar",sampleRate:n,numberOfFrames:l,numberOfChannels:a,timestamp:i+c/n,data:m}),c+=l,f-=l}}static fromAudioBuffer(e,i){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const r=48e3*5,a=e.numberOfChannels,n=e.sampleRate,s=e.length,o=Math.floor(r/a);let c=0,f=s;const l=[];for(;f>0;){const m=Math.min(o,f),v=new Float32Array(a*m);for(let b=0;b<a;b++)e.copyFromChannel(v.subarray(b*m,(b+1)*m),b,c);const u=new Fe({format:"f32-planar",sampleRate:n,numberOfFrames:m,numberOfChannels:a,timestamp:i+c/n,data:v});l.push(u),c+=m,f-=m}return l}}const bt=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},St=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},en=t=>{switch(t){case"u8":case"u8-planar":return(e,i)=>(e.getUint8(i)-128)/128;case"s16":case"s16-planar":return(e,i)=>e.getInt16(i,!0)/32768;case"s32":case"s32-planar":return(e,i)=>e.getInt32(i,!0)/2147483648;case"f32":case"f32-planar":return(e,i)=>e.getFloat32(i,!0)}},tn=t=>{switch(t){case"u8":case"u8-planar":return(e,i,r)=>e.setUint8(i,Ee((r+1)*127.5,0,255));case"s16":case"s16-planar":return(e,i,r)=>e.setInt16(i,Ee(Math.round(r*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,i,r)=>e.setInt32(i,Ee(Math.round(r*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,i,r)=>e.setFloat32(i,r,!0)}},Qt=t=>typeof AudioData<"u"&&t instanceof AudioData,Kf=t=>{switch(t){case"u8-planar":return"u8";case"s16-planar":return"s16";case"s32-planar":return"s32";case"f32-planar":return"f32";default:return t}},Xf=(t,e,i,r,a,n,s,o)=>{const c=en(i),f=tn(r),l=bt(i),m=bt(r),v=St(i);if(St(r))if(v){const b=new ArrayBuffer(o*l),d=Je(b);t.copyTo(b,{planeIndex:n,frameOffset:s,frameCount:o,format:i});for(let h=0;h<o;h++){const p=h*l,w=h*m,x=c(d,p);f(e,w,x)}}else{const b=new ArrayBuffer(o*a*l),d=Je(b);t.copyTo(b,{planeIndex:0,frameOffset:s,frameCount:o,format:i});for(let h=0;h<o;h++){const p=(h*a+n)*l,w=h*m,x=c(d,p);f(e,w,x)}}else if(v){const b=o*l,d=new ArrayBuffer(b),h=Je(d);for(let p=0;p<a;p++){t.copyTo(d,{planeIndex:p,frameOffset:s,frameCount:o,format:i});for(let w=0;w<o;w++){const x=w*l,_=(w*a+p)*m,S=c(h,x);f(e,_,S)}}}else{const b=new ArrayBuffer(o*a*l),d=Je(b);t.copyTo(b,{planeIndex:0,frameOffset:s,frameCount:o,format:i});for(let h=0;h<o;h++)for(let p=0;p<a;p++){const w=h*a+p,x=w*l,_=w*m,S=c(d,x);f(e,_,S)}}},Zf=(t,e)=>{const i=t.allocationSize({format:e,planeIndex:0}),r=new ArrayBuffer(i);return t.copyTo(r,{format:e,planeIndex:0}),new Fe({data:r,format:e,numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,timestamp:t.timestamp,duration:t.duration})};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const rn=new Map,an=new Map,Qf=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!ft.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${ft.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof Ie))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Ie)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&ur(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");nn(t.codec,t)},nn=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Ti(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},sn=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),r=(n,s,o)=>({codec:t.fullCodecString??Hl(t.codec,t.width,t.height,o,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Nl(t.codec)}),a=[];return i.quantizer!==null&&a.push({config:r(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&a.push({config:r(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),L(a.length>0),a},Yf=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!_t.includes(t.codec))throw new TypeError(`Invalid audio codec '${t.codec}'. Must be one of: ${_t.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0&&!(je.includes(t.codec)||t.codec==="flac"))throw new TypeError("config.quality must be provided for compressed audio codecs.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof Ie))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof Ie)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.numberOfChannels!==void 0&&(!Number.isInteger(t.transform.numberOfChannels)||t.transform.numberOfChannels<=0))throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");if(t.transform.sampleRate!==void 0&&(!Number.isInteger(t.transform.sampleRate)||t.transform.sampleRate<=0))throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");if(t.transform.sampleFormat!==void 0&&!["u8","s16","s32","f32"].includes(t.transform.sampleFormat))throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");if(t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");on(t.codec,t)},on=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Ti(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`)},cn=t=>{const e=t.bitrateMode;return{codec:t.fullCodecString??Ul(t.codec,t.numberOfChannels,t.sampleRate),numberOfChannels:t.numberOfChannels,sampleRate:t.sampleRate,bitrate:t.quality?._toAudioBitrate(t.codec),bitrateMode:t.quality?._bitrateMode??e,...Wl(t.codec)}};class Ie{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in ln):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?ln[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,r,a){const n=Jf[e];let s=null,o=this._bitrateMode??a??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(o="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(L(this._quality!==void 0),s=Ee(Math.round(yl(n.worst,n.best,this._quality)),n.min,n.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let f=this._quality;f===void 0&&(L(s!==null&&n),f=Ee((s-n.worst)/(n.best-n.worst),0,1)),c=fn(e,i,r,dr(f))}return{quantizer:s,bitrate:c,bitrateMode:o}}_toVideoBitrate(e,i,r){return this._bitrate!==void 0?this._bitrate:(L(this._quality!==void 0),fn(e,i,r,dr(this._quality)))}_toAudioBitrate(e){if(je.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=dr(this._quality),a={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!a)throw new Error(`Unhandled codec: ${e}`);let n=a*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((o,c)=>Math.abs(c-n)<Math.abs(o-n)?c:o):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((o,c)=>Math.abs(c-n)<Math.abs(o-n)?c:o)),Math.round(n/1e3)*1e3}}const ln={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},Jf={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},dr=t=>.3*Math.exp(2.5538*t),fn=(t,e,i,r)=>{const a=e*i,n=1920*1080,s=3e6,o=Math.pow(a/n,.95),c=s*o,f={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},m=c*f[t]*r;return Math.ceil(m/1e3)*1e3},un=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};L(!1)},eu=new Ie("high"),tu=async(t,e={})=>{const{width:i=1280,height:r=720,quality:a,bitrate:n,...s}=e;if(!ft.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(r)||r<=0)throw new TypeError("height must be a positive integer.");if(a!==void 0&&!(a instanceof Ie))throw new TypeError("quality, when provided, must be a Quality.");if(a!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof Ie)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");nn(t,s);const o=Pi(a,n)??new Ie("medium");let c;try{c=sn({codec:t,width:i,height:r,quality:o,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const f=JSON.stringify(c),l=rn.get(f);if(l)return l;const m=(async()=>{for(const{config:u}of c)if(dn.some(b=>b.supports(t,u)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||r%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:u,quantizer:b}of c){try{if(!(await VideoEncoder.isConfigSupported(u)).supported)continue}catch{continue}if(!_a()||await new Promise(async h=>{try{const p=new VideoEncoder({output:()=>{},error:()=>h(!1)});p.configure(u);const w=new Uint8Array(i*r*4),x=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:r,timestamp:0});p.encode(x,b!==null?un(t,b):void 0),x.close(),await p.flush(),h(!0)}catch{h(!1)}}))return!0}return!1})();return rn.set(f,m),m},iu=async(t,e={})=>{const{numberOfChannels:i=2,sampleRate:r=48e3,quality:a,bitrate:n,...s}=e;if(!_t.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("numberOfChannels must be a positive integer.");if(!Number.isInteger(r)||r<=0)throw new TypeError("sampleRate must be a positive integer.");if(a!==void 0&&!(a instanceof Ie))throw new TypeError("quality, when provided, must be a Quality.");if(a!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof Ie)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer.");on(t,s);const o=Pi(a,n)??new Ie("medium"),c=cn({codec:t,numberOfChannels:i,sampleRate:r,quality:o,...s}),f=JSON.stringify(c),l=an.get(f);if(l)return l;const m=(async()=>{if(hn.some(v=>v.supports(t,c))||je.includes(t))return!0;if(typeof AudioEncoder>"u")return!1;try{return(await AudioEncoder.isConfigSupported(c)).supported===!0}catch{return!1}})();return an.set(f,m),m},Pi=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof Ie?e:new Ie({bitrate:e})},ru=async(t,e)=>{for(const i of t)if(await tu(i,e))return i;return null},au=async(t,e)=>{for(const i of t)if(await iu(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const dn=[],hn=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const nu=t=>{let r=t,a=4096,n=0,s=12,o=0;for(r<0&&(r=-r,n=128),r+=33,r>8191&&(r=8191);(r&a)!==a&&s>=5;)a>>=1,s--;return o=r>>s-4&15,~(n|s-5<<4|o)&255},su=t=>{let i=2048,r=0,a=11,n=0,s=t;for(s<0&&(s=-s,r=128),s>4095&&(s=4095);(s&i)!==i&&a>=5;)i>>=1,a--;return n=s>>(a===4?1:a-4)&15,(r|a-4<<4|n)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Yt{constructor(e,i,r,a,n){this.bytes=e,this.view=i,this.offset=r,this.start=a,this.end=n,this.bufferPos=a-r}static tempFromBytes(e){return new Yt(e,Je(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Yt(this.bytes,this.view,this.offset,e,e+i)}}const ou=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},cu=(t,e)=>{ou(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class lu{constructor(e){this.mutex=new ga,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,r){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let a=this.trackTimestampInfo.get(e);if(a){if(r&&(a.maxTimestampBeforeLastKeyPacket=a.maxTimestamp),a.maxTimestampBeforeLastKeyPacket!==null&&i<a.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${a.maxTimestampBeforeLastKeyPacket}s.`);a.maxTimestamp=Math.max(a.maxTimestamp,i)}else{if(!r)throw new Error("First packet must be a key packet.");a={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,a)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const mn=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,fu=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),r=Math.floor(t%(60*1e3)/1e3),a=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+a.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ai{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const r=this.writer.getPos(),a=e.size??r-i;this.writer.seek(i),this.writeBoxHeader(e,a),this.writer.seek(r)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);L(i!==void 0);const r=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(r)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const r of e.children)r&&(i+=this.measureBox(r));return i}}}const ce=new Uint8Array(8),Ne=new DataView(ce.buffer),be=t=>[(t%256+256)%256],re=t=>(Ne.setUint16(0,t,!1),[ce[0],ce[1]]),hr=t=>(Ne.setInt16(0,t,!1),[ce[0],ce[1]]),pn=t=>(Ne.setUint32(0,t,!1),[ce[1],ce[2],ce[3]]),j=t=>(Ne.setUint32(0,t,!1),[ce[0],ce[1],ce[2],ce[3]]),dt=t=>(Ne.setInt32(0,t,!1),[ce[0],ce[1],ce[2],ce[3]]),rt=t=>(Ne.setUint32(0,Math.floor(t/2**32),!1),Ne.setUint32(4,t,!1),[ce[0],ce[1],ce[2],ce[3],ce[4],ce[5],ce[6],ce[7]]),uu=t=>(Ne.setInt32(0,Math.floor(t/2**32),!1),Ne.setUint32(4,t,!1),[ce[0],ce[1],ce[2],ce[3],ce[4],ce[5],ce[6],ce[7]]),gn=t=>(Ne.setInt16(0,2**8*t,!1),[ce[0],ce[1]]),Ve=t=>(Ne.setInt32(0,2**16*t,!1),[ce[0],ce[1],ce[2],ce[3]]),mr=t=>(Ne.setInt32(0,2**30*t,!1),[ce[0],ce[1],ce[2],ce[3]]),pr=(t,e)=>{const i=[];let r=t;do{let a=r&127;r>>=7,i.length>0&&(a|=128),i.push(a)}while(r>0||e);return i.reverse()},he=(t,e=!1)=>{const i=Array(t.length).fill(null).map((r,a)=>t.charCodeAt(a));return e&&i.push(0),i},vn=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),r=Math.round(Math.sin(e));return[i,r,0,-r,i,0,0,0,1]},bn=vn(0),yn=t=>[Ve(t[0]),Ve(t[1]),mr(t[2]),Ve(t[3]),Ve(t[4]),mr(t[5]),Ve(t[6]),Ve(t[7]),mr(t[8])],ie=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),le=(t,e,i,r,a)=>ie(t,[be(e),pn(i),r??[]],a),du=t=>t.isQuickTime?ie("ftyp",[he("qt  "),j(512),he("qt  ")]):t.fragmented?t.cmaf?ie("ftyp",[he("iso5"),j(512),he("iso5"),he("iso6"),he("mp41"),he("cmfc"),he("dash")]):ie("ftyp",[he("iso5"),j(512),he("iso5"),he("iso6"),he("mp41")]):ie("ftyp",[he("isom"),j(512),he("isom"),t.holdsAvc?he("avc1"):[],he("mp41")]),wn=()=>ie("styp",[he("iso5"),j(0),he("iso5"),he("iso6"),he("mp41"),he("cmfc"),he("dash")]),xn=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),le("sidx",1,0,[j(1),j(Ke),rt(ge(t.minWrittenTimestamp,Ke)),rt(0),re(0),re(1),j(e&2147483647),j(ge(i,Ke)),j(0)])},Bi=t=>({type:"mdat",largeSize:t}),hu=t=>({type:"free",size:t}),Jt=t=>ie("moov",void 0,[mu(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>pu(e,t.creationTime)),t.isFragmented?Yu(t.trackDatas):null,ud(t)]),mu=(t,e)=>{const i=Math.max(0,...e.map(s=>ge(Ii(s),Ke)+ge(s.startTimestampOffset??0,Ke))),r=Math.max(0,...e.map(s=>s.track.id))+1,a=!gt(t)||!gt(i),n=a?rt:j;return le("mvhd",+a,0,[n(t),n(t),j(Ke),n(i),Ve(1),gn(1),Array(10).fill(0),yn(bn),Array(24).fill(0),j(r)])},Ii=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let r=0;r<t.samples.length;r++){const a=t.samples[r];a.timestamp<e&&(e=a.timestamp),a.timestamp+a.duration>i&&(i=a.timestamp+a.duration)}return e===1/0?0:i-e},pu=(t,e)=>{const i=kd(t),r=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return ie("trak",void 0,[gu(t,e),r?vu(t,t.startTimestampOffset):null,bu(t,e),i.name!==void 0?ie("udta",void 0,[ie("name",[...et.encode(i.name)])]):null])},gu=(t,e)=>{const i=ge(Ii(t),Ke)+ge(t.startTimestampOffset??0,Ke),r=!gt(e)||!gt(i),a=r?rt:j;let n;if(t.type==="video"){const c=t.track.metadata.rotation;n=vn(c??0)}else n=bn;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const o=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:kt(t);return le("tkhd",+r,s,[a(e),a(e),j(t.track.id),j(0),a(i),Array(8).fill(0),re(0),re(o),gn(t.type==="audio"?1:0),re(0),yn(n),Ve(t.type==="video"?t.info.width:0),Ve(t.type==="video"?t.info.height:0)])},vu=(t,e)=>{const i=ge(e,Ke),r=ge(Ii(t),Ke),a=!gt(i)||!gt(r),n=a?rt:j,s=a?uu:dt;return ie("edts",void 0,[le("elst",a?1:0,0,[j(2),n(i),s(-1),Ve(1),n(r),s(0),Ve(1)])])},bu=(t,e)=>ie("mdia",void 0,[yu(t,e),gr(!0,wu[t.type],xu[t.type]),ku(t)]),yu=(t,e)=>{const i=ge(Ii(t),t.timescale),r=!gt(e)||!gt(i),a=r?rt:j;return le("mdhd",+r,0,[a(e),a(e),j(t.timescale),a(i),re(Pn(t.track.metadata.languageCode??wl)),re(0)])},wu={video:"vide",audio:"soun",subtitle:"text"},xu={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},gr=(t,e,i,r="\0\0\0\0")=>le("hdlr",0,0,[t?he("mhlr"):j(0),he(e),he(r),j(0),j(0),he(i,!0)]),ku=t=>ie("minf",void 0,[_u[t.type](),Tu(),Eu(t)]),_u={video:()=>le("vmhd",0,1,[re(0),re(0),re(0),re(0)]),audio:()=>le("smhd",0,0,[re(0),re(0)]),subtitle:()=>le("nmhd",0,0)},Tu=()=>ie("dinf",void 0,[Cu()]),Cu=()=>le("dref",0,0,[j(1)],[Su()]),Su=()=>le("url ",0,1),Eu=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return ie("stbl",void 0,[Pu(t),ju(t),e?Zu(t):null,e?Qu(t):null,Gu(t),Ku(t),Xu(t),Vu(t)])},Pu=t=>{let e;if(t.type==="video")e=Au(pd(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=En(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);L(i),e=zu(i,t)}else t.type==="subtitle"&&(e=Du(bd[t.track.source._codec],t));return L(e),le("stsd",0,0,[j(1)],[e])},Au=(t,e)=>ie(t,[Array(6).fill(0),re(1),re(0),re(0),Array(12).fill(0),re(e.info.width),re(e.info.height),j(4718592),j(4718592),j(0),re(1),be(10),he("Mediabunny"),Array(21).fill(0),re(e.info.hasAlphaChannel?32:24),hr(65535)],[gd[e.track.source._codec]?.(e)??null,Bu(e),gl(e.info.decoderConfig.colorSpace)?Iu(e):null]),Bu=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:ie("pasp",[j(t.info.pixelAspectRatio.num),j(t.info.pixelAspectRatio.den)]),Iu=t=>ie("colr",[he(t.muxer.isQuickTime?"nclc":"nclx"),re(bi[t.info.decoderConfig.colorSpace.primaries]),re(yi[t.info.decoderConfig.colorSpace.transfer]),re(wi[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:be((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Mu=t=>t.info.decoderConfig&&ie("avcC",[...Le(t.info.decoderConfig.description)]),Ru=t=>t.info.decoderConfig&&ie("hvcC",[...Le(t.info.decoderConfig.description)]),kn=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),r=Number(i[1]),a=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,o=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),c=(n<<4)+(s<<1)+o,f=i[5]?Number(i[5]):e.colorSpace?.primaries?bi[e.colorSpace.primaries]:2,l=i[6]?Number(i[6]):e.colorSpace?.transfer?yi[e.colorSpace.transfer]:2,m=i[7]?Number(i[7]):e.colorSpace?.matrix?wi[e.colorSpace.matrix]:2;return le("vpcC",1,0,[be(r),be(a),be(c),be(f),be(l),be(m),re(0)])},Fu=t=>ie("av1C",Ll(t.info.decoderConfig.codec)),zu=(t,e)=>{let i=0,r,a=16;const n=je.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:o}=Tt(s);a=8*o,a>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)r=[Array(6).fill(0),re(1),re(i),re(0),j(0),re(e.info.numberOfChannels),re(a),re(0),re(0),re(e.info.sampleRate<2**16?e.info.sampleRate:0),re(0)];else{const s=n?0:-2;r=[Array(6).fill(0),re(1),re(i),re(0),j(0),re(e.info.numberOfChannels),re(Math.min(a,16)),hr(s),re(0),re(e.info.sampleRate<2**16?e.info.sampleRate:0),re(0),n?[j(1),j(a/8),j(e.info.numberOfChannels*a/8)]:[j(0),j(0),j(0)],j(2)]}return ie(t,r,[vd(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},vr=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...be(e),...be(21),...pn(0),...j(0),...j(0)];if(t.info.decoderConfig.description){const r=Le(t.info.decoderConfig.description);i=[...i,...be(5),...pr(r.byteLength),...r]}return i=[...re(1),...be(0),...be(4),...pr(i.length),...i,...be(6),...be(1),...be(2)],i=[...be(3),...pr(i.length),...i],le("esds",0,0,i)},yt=t=>ie("wave",void 0,[Ou(t),Hu(t),ie("\0\0\0\0")]),Ou=t=>ie("frma",[he(En(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Hu=t=>{const{littleEndian:e}=Tt(t.track.source._codec);return ie("enda",[re(+e)])},Lu=t=>{let e=t.info.numberOfChannels,i=3840,r=t.info.sampleRate,a=0,n=0,s=new Uint8Array(0);const o=t.info.decoderConfig?.description;if(o){L(o.byteLength>=18);const c=Le(o),f=mf(c);e=f.outputChannelCount,i=f.preSkip,r=f.inputSampleRate,a=f.outputGain,n=f.channelMappingFamily,f.channelMappingTable&&(s=f.channelMappingTable)}return ie("dOps",[be(0),be(e),re(i),j(r),hr(a),be(n),...s])},Uu=t=>{const e=t.info.decoderConfig?.description;L(e);const i=Le(e);return le("dfLa",0,0,[...i.subarray(4)])},at=t=>{const{littleEndian:e,sampleSize:i}=Tt(t.track.source._codec),r=+e;return le("pcmC",0,0,[be(r),be(8*i)])},Nu=t=>{L(t.info.primingPacket);const e=gf(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),r=new ke(i);return r.writeBits(2,e.fscod),r.writeBits(5,e.bsid),r.writeBits(3,e.bsmod),r.writeBits(3,e.acmod),r.writeBits(1,e.lfeon),r.writeBits(5,e.bitRateCode),r.writeBits(5,0),ie("dac3",[...i])},Wu=t=>{L(t.info.primingPacket);const e=bf(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const r=Math.ceil(i/8),a=new Uint8Array(r),n=new ke(a);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return ie("dec3",[...a])},qu=t=>{L(t.info.primingPacket);const e=Mf(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return ie("ddts",[...zf(e)])},Du=(t,e)=>ie(t,[Array(6).fill(0),re(1)],[yd[e.track.source._codec](e)]),$u=t=>ie("vttC",[...et.encode(t.info.config.description)]),ju=t=>le("stts",0,0,[j(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[j(e.sampleCount),j(e.sampleDelta)])]),Vu=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return le("stss",0,0,[j(e.length),e.map(([i])=>j(i+1))])},Gu=t=>le("stsc",0,0,[j(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[j(e.firstChunk),j(e.samplesPerChunk),j(1)])]),Ku=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=Tt(t.track.source._codec);return le("stsz",0,0,[j(e*t.info.numberOfChannels),j(t.samples.reduce((i,r)=>i+ge(r.duration,t.timescale),0))])}return le("stsz",0,0,[j(0),j(t.samples.length),t.samples.map(e=>j(e.size))])},Xu=t=>t.finalizedChunks.length>0&&$e(t.finalizedChunks).offset>=2**32?le("co64",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>rt(e.offset))]):le("stco",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>j(e.offset))]),Zu=t=>le("ctts",1,0,[j(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[j(e.sampleCount),dt(e.sampleCompositionTimeOffset)])]),Qu=t=>{let e=1/0,i=-1/0,r=1/0,a=-1/0;L(t.compositionTimeOffsetTable.length>0),L(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const o=t.compositionTimeOffsetTable[s];e=Math.min(e,o.sampleCompositionTimeOffset),i=Math.max(i,o.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const o=t.samples[s];r=Math.min(r,ge(o.timestamp,t.timescale)),a=Math.max(a,ge(o.timestamp+o.duration,t.timescale))}const n=Math.max(-e,0);return a>=2**31?null:le("cslg",0,0,[dt(n),dt(e),dt(i),dt(r),dt(a)])},Yu=t=>ie("mvex",void 0,t.map(Ju)),Ju=t=>le("trex",0,0,[j(t.track.id),j(1),j(0),j(0),j(0)]),_n=(t,e)=>ie("moof",void 0,[ed(t),...e.map(td)]),ed=t=>le("mfhd",0,0,[j(t)]),Tn=t=>{let e=0,i=0;const r=0,a=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|r<<8|a},td=t=>ie("traf",void 0,[id(t),rd(t),ad(t)]),id=t=>{L(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],r={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Tn(i)};return le("tfhd",0,e,[j(t.track.id),j(r.duration),j(r.size),j(r.flags)])},rd=t=>(L(t.currentChunk),le("tfdt",1,0,[rt(ge(t.currentChunk.startTimestamp,t.timescale))])),ad=t=>{L(t.currentChunk);const e=t.currentChunk.samples.map(d=>d.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(d=>d.size),r=t.currentChunk.samples.map(Tn),a=t.currentChunk.samples.map(d=>ge(d.timestamp-d.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),o=new Set(r),c=new Set(a),f=o.size===2&&r[0]!==r[1],l=n.size>1,m=s.size>1,v=!f&&o.size>1,u=c.size>1||[...c].some(d=>d!==0);let b=0;return b|=1,b|=4*+f,b|=256*+l,b|=512*+m,b|=1024*+v,b|=2048*+u,le("trun",1,b,[j(t.currentChunk.samples.length),j(t.currentChunk.offset-t.currentChunk.moofOffset||0),f?j(r[0]):[],t.currentChunk.samples.map((d,h)=>[l?j(e[h]):[],m?j(i[h]):[],v?j(r[h]):[],u?dt(a[h]):[]])])},nd=t=>ie("mfra",void 0,[...t.map(sd),od()]),sd=t=>le("tfra",1,0,[j(t.track.id),j(63),j(t.finalizedChunks.length),t.finalizedChunks.map(i=>[rt(ge(i.samples[0].timestamp,t.timescale)),rt(i.moofOffset),j(i.trafIndex+1),j(1),j(1)])]),od=()=>le("mfro",0,0,[j(0)]),cd=()=>ie("vtte"),ld=(t,e,i,r,a)=>ie("vttc",void 0,[a!==null?ie("vsid",[dt(a)]):null,i!==null?ie("iden",[...et.encode(i)]):null,e!==null?ie("ctim",[...et.encode(fu(e))]):null,r!==null?ie("sttg",[...et.encode(r)]):null,ie("payl",[...et.encode(t)])]),fd=t=>ie("vtta",[...et.encode(t)]),ud=t=>{const e=[],i=t.format._options.metadataFormat??"auto",r=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const a=hd(r);a&&e.push(a)}else if(i==="mdta"){const a=md(r);a&&e.push(a)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&dd(e,t.output._metadataTags);return e.length===0?null:ie("udta",void 0,e)},dd=(t,e)=>{for(const{key:i,value:r}of Ta(e))switch(i){case"title":t.push(nt("©nam",r));break;case"description":t.push(nt("©des",r));break;case"artist":t.push(nt("©ART",r));break;case"album":t.push(nt("©alb",r));break;case"albumArtist":t.push(nt("albr",r));break;case"genre":t.push(nt("©gen",r));break;case"date":t.push(nt("©day",r.toISOString().slice(0,10)));break;case"comment":t.push(nt("©cmt",r));break;case"lyrics":t.push(nt("©lyr",r));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:kt(i)}if(e.raw)for(const i in e.raw){const r=e.raw[i];r==null||i.length!==4||t.some(a=>a.type===i)||(typeof r=="string"?t.push(nt(i,r)):r instanceof Uint8Array&&t.push(ie(i,Array.from(r))))}},nt=(t,e)=>{const i=et.encode(e);return ie(t,[re(i.length),re(Pn("und")),Array.from(i)])},Cn={"image/jpeg":13,"image/png":14,"image/bmp":27},Sn=(t,e)=>{const i=[];for(const{key:r,value:a}of Ta(t))switch(r){case"title":i.push({key:e?"title":"©nam",value:Ge(a)});break;case"description":i.push({key:e?"description":"©des",value:Ge(a)});break;case"artist":i.push({key:e?"artist":"©ART",value:Ge(a)});break;case"album":i.push({key:e?"album":"©alb",value:Ge(a)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Ge(a)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Ge(a)});break;case"genre":i.push({key:e?"genre":"©gen",value:Ge(a)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Ge(a)});break;case"date":i.push({key:e?"date":"©day",value:Ge(a.toISOString().slice(0,10))});break;case"images":for(const n of a)n.kind==="coverFront"&&i.push({key:"covr",value:ie("data",[j(Cn[n.mimeType]??0),j(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${a}/${t.tracksTotal}`:a.toString();i.push({key:"track",value:Ge(n)})}else i.push({key:"trkn",value:ie("data",[j(0),j(0),re(0),re(a),re(t.tracksTotal??0),re(0)])});break;case"discNumber":e||i.push({key:"disc",value:ie("data",[j(0),j(0),re(0),re(a),re(t.discsTotal??0),re(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:kt(r)}if(t.raw)for(const r in t.raw){const a=t.raw[r];a==null||!e&&r.length!==4||i.some(n=>n.key===r)||(typeof a=="string"?i.push({key:r,value:Ge(a)}):a instanceof Uint8Array?i.push({key:r,value:ie("data",[j(0),j(0),Array.from(a)])}):a instanceof Ea&&i.push({key:r,value:ie("data",[j(Cn[a.mimeType]??0),j(0),Array.from(a.data)])}))}return i},hd=t=>{const e=Sn(t,!1);return e.length===0?null:le("meta",0,0,void 0,[gr(!1,"mdir","","appl"),ie("ilst",void 0,e.map(i=>ie(i.key,void 0,[i.value])))])},md=t=>{const e=Sn(t,!0);return e.length===0?null:ie("meta",void 0,[gr(!1,"mdta",""),le("keys",0,0,[j(e.length)],e.map(i=>ie("mdta",[...et.encode(i.key)]))),ie("ilst",void 0,e.map((i,r)=>{const a=String.fromCharCode(...j(r+1));return ie(a,void 0,[i.value])}))])},Ge=t=>ie("data",[j(1),j(0),...et.encode(t)]),pd=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},gd={avc:Mu,hevc:Ru,vp8:kn,vp9:kn,av1:Fu,prores:null},En=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},vd=(t,e)=>{switch(t){case"aac":return vr;case"mp3":return vr;case"opus":return Lu;case"vorbis":return vr;case"flac":return Uu;case"ac3":return Nu;case"eac3":return Wu;case"dts":return qu}if(e)switch(t){case"pcm-s24":return yt;case"pcm-s24be":return yt;case"pcm-s32":return yt;case"pcm-s32be":return yt;case"pcm-f32":return yt;case"pcm-f32be":return yt;case"pcm-f64":return yt;case"pcm-f64be":return yt}else switch(t){case"pcm-s16":return at;case"pcm-s16be":return at;case"pcm-s24":return at;case"pcm-s24be":return at;case"pcm-s32":return at;case"pcm-s32be":return at;case"pcm-f32":return at;case"pcm-f32be":return at;case"pcm-f64":return at;case"pcm-f64be":return at}return null},bd={webvtt:"wvtt"},yd={webvtt:$u},Pn=t=>{L(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class br{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){L(!this.started),this.target._start(),this.started=!0}write(e){L(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return L(this.started&&!this.finalized),this.target._flush()}async finalize(){L(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const r=i+e.byteLength-this.trackedStart;let a=this.trackedWrites.byteLength;for(;a<r;)a*=2;if(a!==this.trackedWrites.byteLength){const n=new Uint8Array(a);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ht extends rr{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new wd(this,e)}}const yr=2**16,wr=2**32;class Mi extends ht{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(yr,{maxByteLength:wr})}catch{this._buffer=new ArrayBuffer(yr),this._supportsResize=!1}else this._buffer=new ArrayBuffer(yr);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>wr)throw new Error(`ArrayBuffer exceeded maximum size of ${wr} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const r=new ArrayBuffer(i),a=new Uint8Array(r);a.set(this._bytes,0),this._buffer=r,this._bytes=a}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class wd extends ht{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class xr{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ke=57600,xd=2082844800,kd=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ge=(t,e,i=!0)=>{const r=t*e;return i?Math.round(r):r};class _d extends lu{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new Mi,this.auxWriter=new br(this.auxTarget,!1),this.auxBoxWriter=new Ai(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=ba(),this.creationTime=Math.floor(Date.now()/1e3)+xd,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof zn,this.isCmaf=i instanceof Fn,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Fn?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(r=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":r instanceof Mi),this.boxWriter=new Ai(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof Mi?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const r=await this.output._getInitTarget(),a=new br(r,!0);a.start(),this.initWriter=a,this.initBoxWriter=new Ai(a)}const i=this.output.tracks.some(r=>r.isVideoTrack()&&r.source._codec==="avc");{const r=this.initBoxWriter??this.boxWriter;if(L(r),this.formatOptions.onFtyp&&r.writer.startTrackingWrites(),r.writeBox(du({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:a,start:n}=r.writer.stopTrackingWrites();this.formatOptions.onFtyp(a,n)}this.ftypSize=r.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const r of this.output.tracks)if(r.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(L(this.writer),L(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Bi(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const r of this.output.tracks)r.isVideoTrack()&&r.metadata.decoderConfig?this.getVideoTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig}):r.isAudioTrack()&&r.metadata.decoderConfig&&this.getAudioTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return Of({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,r){const a=this.trackDatas.find(u=>u.track===e);if(a)return a;Ra(r,e.source._codec),L(r),L(r.decoderConfig);const n={...r.decoderConfig};L(n.codedWidth!==void 0),L(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const u=Jl(i.data);if(!u)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=ef(u),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const u=nf(i.data);if(!u)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=df(u),s=!0}const o=Tl(1/(e.metadata.frameRate??Ke),1e6).den,c=n.displayAspectWidth,f=n.displayAspectHeight,l=c===void 0||f===void 0?{num:1,den:1}:Ca({num:c*n.codedHeight,den:f*n.codedWidth}),m=n.codec==="ap4h"||n.codec==="ap4x",v={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:l,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:m},timescale:o,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(v),this.trackDatas.sort((u,b)=>u.track.id-b.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),v}getAudioTrackData(e,i,r){const a=this.trackDatas.find(c=>c.track===e);if(a)return a;Fa(r,e.source._codec),L(r),L(r.decoderConfig);const n={...r.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=Va(Yt.tempFromBytes(i.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const f=ki[c.samplingFrequencyIndex],l=ar[c.channelConfiguration];if(f===void 0||l===void 0)throw new Error("Invalid ADTS frame header.");n.description=Pa({objectType:c.objectType,sampleRate:f,numberOfChannels:l}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const o={muxer:this,track:e,type:"audio",info:{numberOfChannels:r.decoderConfig.numberOfChannels,sampleRate:r.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&je.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(o),this.trackDatas.sort((c,f)=>c.track.id-f.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}getSubtitleTrackData(e,i){const r=this.trackDatas.find(n=>n.track===e);if(r)return r;Kl(i),L(i),L(i.config);const a={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(a),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),a}async addEncodedVideoPacket(e,i,r){const a=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,r);let s=i.data;if(n.info.requiresAnnexBTransformation){const c=[...Vt(s)].map(f=>s.subarray(f.offset,f.offset+f.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=Yl(c,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const o=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,o)}finally{a()}}async addEncodedAudioPacket(e,i,r){const a=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,r);let s=i.data;if(n.info.requiresAdtsStripping){const l=Va(Yt.tempFromBytes(s));if(!l)throw new Error("Expected ADTS frame, didn't get one.");const m=l.crcCheck===null?Hf:Lf;s=s.subarray(m)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let o=i.timestamp,c=i.duration;if(n.info.requiresPcmTransformation){const m=Tt(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(c=s.byteLength/m/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const v=o-n.info.expectedNextPcmPacketTimestamp;if(v<.01)o=n.info.expectedNextPcmPacketTimestamp;else{const u=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,v);o=n.info.expectedNextPcmPacketTimestamp+u}}n.info.expectedNextPcmPacketTimestamp=o+c}const f=this.createSampleForTrack(n,s,o,c,i.type);await this.registerSample(n,f)}finally{a()}}async padWithSilence(e,i,r){const a=ge(r,e.timescale);if(r=a/e.timescale,a>0){const{sampleSize:n,silentValue:s}=Tt(e.info.decoderConfig.codec),o=a*e.info.numberOfChannels,c=new Uint8Array(n*o).fill(s),f=this.createSampleForTrack(e,new Uint8Array(c.buffer),i,r,"key");await this.registerSample(e,f)}return r}async addSubtitleCue(e,i,r){const a=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,r);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{a()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const r=new Set([]);for(const f of e.cueQueue)L(f.timestamp<=i),L(e.lastCueEndTimestamp<=f.timestamp+f.duration),r.add(Math.max(f.timestamp,e.lastCueEndTimestamp)),r.add(f.timestamp+f.duration);const a=[...r].sort((f,l)=>f-l),n=a[0],s=a[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const f=cd();this.auxBoxWriter.writeBox(f);const l=this.auxTarget._getSlice(0,this.auxWriter.getPos()),m=this.createSampleForTrack(e,l,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,m),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let f=0;f<e.cueQueue.length;f++){const l=e.cueQueue[f];if(l.timestamp>=s)break;mn.lastIndex=0;const m=mn.test(l.text),v=l.timestamp+l.duration;let u=e.cueToSourceId.get(l);if(u===void 0&&s<v&&(u=e.nextSourceId++,e.cueToSourceId.set(l,u)),l.notes){const d=fd(l.notes);this.auxBoxWriter.writeBox(d)}const b=ld(l.text,m?n:null,l.identifier??null,l.settings??null,u??null);this.auxBoxWriter.writeBox(b),v===s&&e.cueQueue.splice(f--,1)}const o=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,o,n,s-n,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,r,a,n){return{timestamp:r,decodeTimestamp:r,duration:a,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:ge(a,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let a=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],o=ge(s.duration,e.timescale);a+=o}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:a,sampleDelta:1});else{const n=$e(e.timeToSampleTable);n.sampleCount+=a}e.timestampProcessingQueue.length=0;return}const r=e.timestampProcessingQueue.map(a=>a.timestamp).sort((a,n)=>a-n);this.isFragmented||(e.startTimestampOffset??=r[0]);for(let a=0;a<e.timestampProcessingQueue.length;a++){const n=e.timestampProcessingQueue[a];n.decodeTimestamp=r[a];const s=ge(n.timestamp-n.decodeTimestamp,e.timescale),o=ge(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){L(e.lastSample);const c=ge(n.decodeTimestamp,e.timescale,!1),f=Math.round(c-e.lastTimescaleUnits);if(L(f>=0),e.lastTimescaleUnits+=f,e.lastSample.timescaleUnitsToNextSample=f,!this.isFragmented){let l=$e(e.timeToSampleTable);if(L(l),l.sampleCount===1){l.sampleDelta=f;const v=e.timeToSampleTable[e.timeToSampleTable.length-2];v&&v.sampleDelta===f&&(v.sampleCount++,e.timeToSampleTable.pop(),l=v)}else l.sampleDelta!==f&&(l.sampleCount--,e.timeToSampleTable.push(l={sampleCount:1,sampleDelta:f}));l.sampleDelta===o?l.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:o});const m=$e(e.compositionTimeOffsetTable);L(m),m.sampleCompositionTimeOffset===s?m.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=ge(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:o}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,L(e.lastSample),L(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){L(i.type==="key");const a=ge(i.timestamp,e.timescale,!1),n=Math.round(a-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const a=e.track.metadata.maximumPacketCount;if(L(a!==void 0),e.samples.length>a)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${a}). Either add less packets or increase the maximum packet count.`)}let r=!1;if(!e.currentChunk)r=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const a=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const o=s.sampleQueue[0];return o?o.type==="key":s.closed});a>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(r=!0,await this.finalizeFragment())}else r=a>=.5}r&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),L(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(L(!this.isFragmented),L(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((r,a)=>r+ge(a.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||$e(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const r of e.currentChunk.samples)L(r.data),this.writer.write(r.data),r.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(L(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,r=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<r&&(i=n,r=n.sampleQueue[0].timestamp)}if(!i)break;const a=i.sampleQueue.shift();await this.addSampleToTrack(i,a)}}async finalizeFragment(e=!this.isCmaf){if(L(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const u=this.initBoxWriter??this.boxWriter;L(u),this.formatOptions.onMoov&&u.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const b=Jt(this);if(u.writeBox(b),this.formatOptions.onMoov){const{data:d,start:h}=u.writer.stopTrackingWrites();this.formatOptions.onMoov(d,h)}if(this.isCmaf){L(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Ai(this.writer);const d=this.boxWriter.measureBox(wn()),h=this.boxWriter.measureBox(xn(this,0));this.segmentHeaderSize=d+h,this.writer.seek(this.segmentHeaderSize)}}L(this.writer),L(this.boxWriter);const i=this.trackDatas.filter(u=>u.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const r=this.nextFragmentNumber++,a=_n(r,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(a);let o=s+cr,c=1/0;for(let u=0;u<i.length;u++){const b=i[u];b.currentChunk.offset=o,b.currentChunk.moofOffset=n,b.currentChunk.trafIndex=u;for(const d of b.currentChunk.samples)o+=d.size;c=Math.min(c,b.currentChunk.startTimestamp)}const f=o-s,l=f>=2**32;if(l)for(const u of i)u.currentChunk.offset+=ja-cr;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const m=_n(r,i);if(this.boxWriter.writeBox(m),this.formatOptions.onMoof){const{data:u,start:b}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(u,b,c)}L(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const v=Bi(l);v.size=f,this.boxWriter.writeBox(v),this.writer.seek(s+(l?ja:cr));for(const u of i)for(const b of u.currentChunk.samples)this.writer.write(b.data),b.data=null;if(this.formatOptions.onMdat){const{data:u,start:b}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(u,b)}for(const u of i)u.finalizedChunks.push(u.currentChunk),this.finalizedChunks.push(u.currentChunk),u.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){L(this.writer),L(this.boxWriter),this.ensureOneEnabledTrack();const e=Jt(this),r=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;L(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=Bi(!0),this.boxWriter.writeBox(this.mdat);for(const a of this.trackDatas){for(const n of a.sampleQueue)await this.addSampleToTrack(a,n);a.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){L(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const r=i.track.metadata.maximumPacketCount;L(r!==void 0),e+=8*Math.ceil(2/3*r),e+=4*r,e+=8*Math.ceil(2/3*r),e+=12*Math.ceil(2/3*r),e+=4*r,e+=8*r}return e}async onTrackClose(e){const i=await this.mutex.acquire(),r=this.trackDatas.find(a=>a.track===e);r&&(r.closed=!0,r.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(r,1/0),this.processTimestamps(r)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(a=>a.type===e);if(i.length===0)continue;if(!i.some(a=>a.track.metadata.disposition?.default!==!1)){const a=i[0];a.track.metadata.disposition={...a.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){L(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let r=0;r<i.samples.length;r++){const a=i.samples[r];a.timestamp-=i.startTimestampOffset,a.decodeTimestamp-=i.startTimestampOffset}if(L(this.writer),L(this.boxWriter),this.fastStart==="in-memory"){this.mdat=Bi(!1);let i;for(let a=0;a<2;a++){const n=Jt(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let o=this.writer.getPos()+s+i;for(const c of this.finalizedChunks){c.offset=o;for(const{data:f}of c.samples)L(f),o+=f.byteLength,i+=f.byteLength}if(o<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const r=Jt(this);if(this.boxWriter.writeBox(r),this.formatOptions.onMoov){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(a,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const a of this.finalizedChunks)for(const n of a.samples)L(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(a,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(wn()),this.boxWriter.writeBox(xn(this,i))}else{const i=this.writer.getPos(),r=nd(this.trackDatas);this.boxWriter.writeBox(r);const a=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(a)}else{L(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);L(i!==void 0);const r=this.writer.getPos()-i;if(this.mdat.size=r,this.mdat.largeSize=r>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const a=Jt(this);if(this.fastStart==="reserve"){L(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(hu(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Td{constructor(e){this.sourceSampleRate=null,this.sourceNumberOfChannels=null,this.startTime=null,this.bufferStartFrame=0,this.maxWrittenFrame=null,this.targetSampleRate=e.targetSampleRate,this.targetNumberOfChannels=e.targetNumberOfChannels,this.onSample=e.onSample,this.bufferSizeInFrames=Math.floor(this.targetSampleRate*5),this.bufferSizeInSamples=this.bufferSizeInFrames*this.targetNumberOfChannels,this.outputBuffer=new Float32Array(this.bufferSizeInSamples)}doChannelMixerSetup(){L(this.sourceNumberOfChannels!==null);const e=this.sourceNumberOfChannels,i=this.targetNumberOfChannels;e===1&&i===2?this.channelMixer=(r,a)=>r[a*e]:e===1&&i===4?this.channelMixer=(r,a,n)=>r[a*e]*+(n<2):e===1&&i===6?this.channelMixer=(r,a,n)=>r[a*e]*+(n===2):e===2&&i===1?this.channelMixer=(r,a)=>{const n=a*e;return .5*(r[n]+r[n+1])}:e===2&&i===4?this.channelMixer=(r,a,n)=>r[a*e+n]*+(n<2):e===2&&i===6?this.channelMixer=(r,a,n)=>r[a*e+n]*+(n<2):e===4&&i===1?this.channelMixer=(r,a)=>{const n=a*e;return .25*(r[n]+r[n+1]+r[n+2]+r[n+3])}:e===4&&i===2?this.channelMixer=(r,a,n)=>{const s=a*e;return .5*(r[s+n]+r[s+n+2])}:e===4&&i===6?this.channelMixer=(r,a,n)=>{const s=a*e;return n<2?r[s+n]:n===2||n===3?0:r[s+n-2]}:e===6&&i===1?this.channelMixer=(r,a)=>{const n=a*e;return Math.SQRT1_2*(r[n]+r[n+1])+r[n+2]+.5*(r[n+4]+r[n+5])}:e===6&&i===2?this.channelMixer=(r,a,n)=>{const s=a*e;return r[s+n]+Math.SQRT1_2*(r[s+2]+r[s+n+4])}:e===6&&i===4?this.channelMixer=(r,a,n)=>{const s=a*e;return n<2?r[s+n]+Math.SQRT1_2*r[s+2]:r[s+n+2]}:this.channelMixer=(r,a,n)=>n<e?r[a*e+n]:0}ensureTempBufferSize(e){let i=this.tempSourceBuffer.length;for(;i<e;)i*=2;if(i!==this.tempSourceBuffer.length){const r=new Float32Array(i);r.set(this.tempSourceBuffer),this.tempSourceBuffer=r}}async add(e){this.sourceSampleRate===null&&(this.sourceSampleRate=e.sampleRate,this.sourceNumberOfChannels=e.numberOfChannels,this.startTime=e.timestamp,this.tempSourceBuffer=new Float32Array(this.sourceSampleRate*this.sourceNumberOfChannels),this.doChannelMixerSetup()),L(this.startTime!==null);const i=e.numberOfFrames*e.numberOfChannels;this.ensureTempBufferSize(i);const r=e.allocationSize({planeIndex:0,format:"f32"}),a=new Float32Array(this.tempSourceBuffer.buffer,0,r/4);e.copyTo(a,{planeIndex:0,format:"f32"});const n=e.timestamp-this.startTime,s=n+e.duration,o=Math.floor((n-1/this.sourceSampleRate)*this.targetSampleRate)+1,c=Math.ceil(s*this.targetSampleRate);for(let f=o;f<c;f++){if(f<this.bufferStartFrame)continue;for(;f>=this.bufferStartFrame+this.bufferSizeInFrames;)await this.finalizeCurrentBuffer(),this.bufferStartFrame+=this.bufferSizeInFrames;const l=f-this.bufferStartFrame;L(l<this.bufferSizeInFrames);const u=(f/this.targetSampleRate-n)*this.sourceSampleRate,b=Math.floor(u),d=Math.ceil(u),h=u-b;for(let p=0;p<this.targetNumberOfChannels;p++){let w=0,x=0;b>=0&&b<e.numberOfFrames&&(w=this.channelMixer(a,b,p)),d>=0&&d<e.numberOfFrames&&(x=this.channelMixer(a,d,p));const _=w+h*(x-w),S=l*this.targetNumberOfChannels+p;this.outputBuffer[S]+=_}this.maxWrittenFrame===null?this.maxWrittenFrame=l:this.maxWrittenFrame=Math.max(this.maxWrittenFrame,l)}}async finalizeCurrentBuffer(){if(this.maxWrittenFrame===null)return;L(this.startTime!==null);const e=(this.maxWrittenFrame+1)*this.targetNumberOfChannels,i=new Float32Array(e);i.set(this.outputBuffer.subarray(0,e));const r=new Fe({format:"f32",sampleRate:this.targetSampleRate,numberOfChannels:this.targetNumberOfChannels,timestamp:this.startTime+this.bufferStartFrame/this.targetSampleRate,data:i});await this.onSample(r),this.outputBuffer.fill(0),this.maxWrittenFrame=null}finalize(){return this.finalizeCurrentBuffer()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Cd=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(a=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");a&&(r=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},Sd=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,a=0;function n(){for(;r=e.stack.pop();)try{if(!r.async&&a===1)return a=0,e.stack.push(r),Promise.resolve().then(n);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return a|=2,Promise.resolve(s).then(n,function(o){return i(o),n()})}else a|=1}catch(o){i(o)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});class kr{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class An extends kr{constructor(e){if(super(),this._connectedTrack=null,!ft.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${ft.join(", ")}.`);this._codec=e}}const Bn=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Ed{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new ka,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,r){const a=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let o=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(o=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||o&&s!=="passThrough"){let m=n.transform?.width,v=n.transform?.height,u=n.transform?.fit??"fill";o&&s!=="passThrough"&&(L(this.outputWidth),L(this.outputHeight),L(s!=="deny"),m=this.outputWidth,v=this.outputHeight,u=s);const b=await e.transform({width:m,height:v,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:u,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=b.displayWidth,this.outputHeight=b.displayHeight),i&&e.close(),e=b,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const l=n.transform?.frameRate;if(l!==void 0){const m=e.timestamp+e.duration,v=xa(e.timestamp,l);if(this.frameRateLastSample!==null)if(v<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=m;return}else await this.padFrameRate(v,r);e===a&&(e=e.clone(),i=!0),e.setTimestamp(v),e.setDuration(1/l),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=v,this.frameRateLastEndTimestamp=m}await this.processAndEncode(e,r)}finally{i&&e.close()}}async processAndEncode(e,i){const r=this.encodingConfig;let a;if(r.transform?.process){let n=r.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const o of n)o instanceof Be?s.push(o):typeof VideoFrame<"u"&&o instanceof VideoFrame?s.push(new Be(o)):s.push(new Be(o,{timestamp:e.timestamp,duration:e.duration}))}catch(o){for(const c of s)c!==e&&c.close();for(const c of n)(c instanceof Be&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw o}a=s}else a=[e];try{for(const n of a){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),L(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,o=Math.floor(n.timestamp/s),c={...this.defaultEncodeOptions,...n.encodeOptions,...i},f={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:s===0||o!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=o,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const l=n.clone(),m=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(l,f)).catch(v=>this.setError(v)).finally(()=>{this.customEncoderQueueSize--,l.close()});this.customEncoderQueueSize>=4&&await m}else{L(this.encoder);const l=n.toVideoFrame(),m=va(this.preciseTimings,l.timestamp,u=>u.microsecondTimestamp),v=m!==-1?this.preciseTimings[m]:null;if(v&&v.microsecondTimestamp===l.timestamp?(v.timestamp!==n.timestamp&&(v.timestampIsValid=!1),v.duration!==n.duration&&(v.durationIsValid=!1)):(this.preciseTimings.splice(m+1,0,{microsecondTimestamp:l.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!l.format&&!l.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(l,f)}finally{l.close()}}else{this.splitter||(this.splitter=new Pd);const{colorFrame:b,alphaFrame:d}=await this.splitter.split(l);this.alphaFrameQueue.push(d);try{this.encoder.encode(b,f)}finally{b.close()}}else try{this.encoder.encode(l,f)}finally{l.close()}this.encoder.encodeQueueSize>=4&&await new Promise(u=>this.encoder.addEventListener("dequeue",u,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of a)n!==e&&n.close()}}async padFrameRate(e,i){const r=this.encodingConfig.transform.frameRate;L(this.frameRateLastSample);const a=Math.round((e-this.frameRateLastTimestamp)*r);for(let n=1;n<a;n++){const s={stack:[],error:void 0,hasError:!1};try{const o=Cd(s,this.frameRateLastSample.clone(),!1);o.setTimestamp(this.frameRateLastTimestamp+n/r),o.setDuration(1/r),await this.processAndEncode(o,i)}catch(o){s.error=o,s.hasError=!0}finally{Sd(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=Pi(this.encodingConfig.quality,this.encodingConfig.bitrate);L(i!==void 0);const r=sn({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let a=null,n;for(const o of r){const c=o.config;if(this.encodingConfig.onEncoderConfig?.(c),n=dn.find(l=>l.supports(this.encodingConfig.codec,c)),n){a=o;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){a=o;break}}catch{}}if(!a){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const o=r[0].config,c=r.map(({config:f,quantizer:l})=>l!==null?`quantizer ${l}`:`${f.bitrate} bps`);throw new Error(`This specific encoder configuration (${o.codec}, ${c.join(" / ")}, ${o.width}x${o.height}, hardware acceleration: ${o.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=a.config;if(a.quantizer!==null&&(this.defaultEncodeOptions=un(this.encodingConfig.codec,a.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(o,c)=>{if(!(o instanceof it))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");Bn(this.source._connectedTrack,o),this.encodingConfig.onEncodedPacket?.(o,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,o,c).catch(f=>{this.setError(f)})},this.customEncoder.onError=o=>{this.setError(o)},await this.customEncoder.init();else{const o=[],c=[];let f=0,l=0;const m=(u,b,d)=>{const h={};if(b){const S=new Uint8Array(b.byteLength);b.copyTo(S),h.alpha=S}let p=it.fromEncodedChunk(u,h);const w=va(this.preciseTimings,u.timestamp,S=>S.microsecondTimestamp),x=w!==-1?this.preciseTimings[w]:null;let _=null;this.emittedEncoderPackets===0&&p.type==="delta"&&d?.decoderConfig&&(_=pf(this.encodingConfig.codec,d.decoderConfig,p.data)),(x&&x.microsecondTimestamp===u.timestamp||_!==null)&&(p=p.clone({timestamp:x?.timestampIsValid?x.timestamp:void 0,duration:x?.durationIsValid?x.duration:void 0,type:_??void 0})),Bn(this.source._connectedTrack,p),this.encodingConfig.onEncodedPacket?.(p,d),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,p,d).catch(S=>{this.setError(S)}),this.emittedEncoderPackets++},v=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(u,b)=>{if(!this.alphaEncoder){m(u,null,b);return}const d=this.alphaFrameQueue.shift();L(d!==void 0),d?(this.alphaEncoder.encode(d,{...this.defaultEncodeOptions,keyFrame:u.type==="key"}),l++,d.close(),o.push({chunk:u,meta:b})):l===0?m(u,null,b):(c.push(f+l),o.push({chunk:u,meta:b}))},error:u=>{u.stack=v,this.setError(u)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const u=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(b,d)=>{l--;const h=o.shift();for(L(h!==void 0),m(h.chunk,b,h.meta),f++;c.length>0&&c[0]===f;){c.shift();const p=o.shift();L(p!==void 0),m(p.chunk,null,p.meta)}},error:b=>{b.stack=u,this.setError(b)}}),this.alphaEncoder.configure(s)}}L(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,r=xa(this.frameRateLastEndTimestamp,i);await this.padFrameRate(r)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Bl(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let _r=null;class Pd{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!_r){const a=new Blob([`(${Ad.toString()})()`],{type:"application/javascript"});_r=URL.createObjectURL(a)}this.worker=new Worker(_r),this.worker.addEventListener("message",a=>{const n=a.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",a=>{const n=new Error(a.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,r=ba();return this.pendingRequests.set(i,r),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),r.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Ad=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:o}=n.data;e=e.then(async()=>{try{const{colorFrame:c,alphaFrame:f}=await i(o);self.postMessage({id:s,colorFrame:c,alphaFrame:f},{transfer:[c,f]})}catch(c){self.postMessage({id:s,error:c.message})}finally{o.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const o=n.allocationSize();if((!t||t.byteLength!==o)&&(t=new Uint8Array(o)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return r(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return a(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},r=(n,s,o)=>{const c=o.visibleRect?.width??o.codedWidth,f=o.visibleRect?.height??o.codedHeight,l=c*f,m=Math.ceil(c/2),v=Math.ceil(f/2),u=l+m*v*2,b=new Uint8Array(u);for(let w=0,x=3;w<l;w++,x+=4)b[w]=n[x];b.fill(128,l);const d=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:f,timestamp:o.timestamp,duration:o.duration??void 0}),h={format:"I420",codedWidth:c,codedHeight:f,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[b.buffer]},p=new VideoFrame(b,h);return{colorFrame:d,alphaFrame:p}},a=(n,s,o)=>{const c=o.visibleRect?.width??o.codedWidth,f=o.visibleRect?.height??o.codedHeight,l=s.includes("P10"),m=s.includes("P12"),v=l||m?2:1;let u,b;s.startsWith("I420")?(u=Math.ceil(c/2),b=Math.ceil(f/2)):s.startsWith("I422")?(u=Math.ceil(c/2),b=f):(u=c,b=f);const d=c*f,h=u*b,p=d*v,w=h*v,x=d*v,_=p+w*2,S=s.replace("A",""),R=Math.ceil(c/2),B=Math.ceil(f/2),F=R*B,A=F*v,N=x+2*A,Z=new Uint8Array(N),T=_;Z.set(n.subarray(T,T+x),0);const z=x,y=l?512:m?2048:128;v===1?Z.fill(y,z):new Uint16Array(Z.buffer,z,2*F).fill(y);const U=l?"I420P10":m?"I420P12":"I420",ee=new VideoFrame(n.subarray(0,_),{format:S,codedWidth:c,codedHeight:f,timestamp:o.timestamp,duration:o.duration??void 0}),q={format:U,codedWidth:c,codedHeight:f,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[Z.buffer]},oe=new VideoFrame(Z,q);return{colorFrame:ee,alphaFrame:oe}}};class Bd extends An{constructor(e){Qf(e),super(e.codec),this._encoder=new Ed(this,e)}add(e,i){if(!(e instanceof Be))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class In extends kr{constructor(e){if(super(),this._connectedTrack=null,!_t.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${_t.join(", ")}.`);this._codec=e}}class Id{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new ka,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.resampler=null,this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;const r=this.encodingConfig;r.transform?.numberOfChannels!==void 0||r.transform?.sampleRate!==void 0?(this.resampler||(this.resampler=new Td({targetNumberOfChannels:r.transform.numberOfChannels??e.numberOfChannels,targetSampleRate:r.transform.sampleRate??e.sampleRate,onSample:async n=>{await this.processAndEncode(n,!0)}})),await this.resampler.add(e)):await this.processAndEncode(e,i)}finally{i&&e.close()}}async processAndEncode(e,i){const r=this.encodingConfig;if(r.transform?.sampleFormat!==void 0&&Kf(e.format)!==r.transform.sampleFormat){const a=Zf(e,r.transform.sampleFormat);i&&e.close(),e=a,i=!0}if(r.transform?.process)try{let a=r.transform.process(e);if(a instanceof Promise&&(a=await a),a===null)return;Array.isArray(a)||(a=[a]);try{for(const n of a)if(!(n instanceof Fe))throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");for(const n of a)await this.encodeSample(n,!0)}finally{for(const n of a)n instanceof Fe&&n.close()}}finally{i&&e.close()}else await this.encodeSample(e,i)}async encodeSample(e,i){try{if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),L(this.encoderInitialized),this.closed)return;{const r=Math.round(e.timestamp*e.sampleRate),a=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=a;else{const n=r-this.lastEndSampleIndex;if(n>=64){const s=new Fe({data:new Float32Array(n*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:n,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.encodeSample(s,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.encodingConfig.onEncodedSample?.(e),this.customEncoder){this.customEncoderQueueSize++;const r=e.clone(),a=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(r)).catch(n=>this.setError(n)).finally(()=>{this.customEncoderQueueSize--,r.close()});this.customEncoderQueueSize>=4&&await a,await this.lastMuxerPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,i);else{L(this.encoder);const r=e.toAudioData();this.encoder.encode(r),r.close(),i&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(a=>this.encoder.addEventListener("dequeue",a,{once:!0})),await this.lastMuxerPromise}}finally{i&&e.close()}}async doPcmEncoding(e,i){L(this.outputSampleSize),L(this.writeOutputValue);const{numberOfChannels:r,numberOfFrames:a,sampleRate:n,timestamp:s}=e,o=2048,c=[];for(let v=0;v<a;v+=o){const u=Math.min(o,e.numberOfFrames-v),b=u*r*this.outputSampleSize,d=new ArrayBuffer(b),h=new DataView(d);c.push({frameCount:u,view:h})}const f=e.allocationSize({planeIndex:0,format:"f32-planar"}),l=new Float32Array(f/Float32Array.BYTES_PER_ELEMENT);for(let v=0;v<r;v++){e.copyTo(l,{planeIndex:v,format:"f32-planar"});for(let u=0;u<c.length;u++){const{frameCount:b,view:d}=c[u];for(let h=0;h<b;h++)this.writeOutputValue(d,(h*r+v)*this.outputSampleSize,l[u*o+h])}}i&&e.close();const m={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:r,sampleRate:n}};for(let v=0;v<c.length;v++){const{frameCount:u,view:b}=c[v],d=b.buffer,h=v*o,p=new it(new Uint8Array(d),"key",s+h/n,u/n);this.encodingConfig.onEncodedPacket?.(p,m),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,p,m)}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const{numberOfChannels:i,sampleRate:r}=e,a=Pi(this.encodingConfig.quality,this.encodingConfig.bitrate),n=cn({numberOfChannels:i,sampleRate:r,...this.encodingConfig,quality:a});this.encodingConfig.onEncoderConfig?.(n);const s=hn.find(o=>o.supports(this.encodingConfig.codec,n));if(s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=n,this.customEncoder.onPacket=(o,c)=>{if(!(o instanceof it))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(o,c),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,o,c).catch(f=>{this.setError(f)})},this.customEncoder.onError=o=>{this.setError(o)},await this.customEncoder.init();else if(je.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");let o;try{o=(await AudioEncoder.isConfigSupported(n)).supported??!1}catch{o=!1}if(!o)throw new Error(`This specific encoder configuration (${n.codec}, ${n.bitrate} bps, ${n.numberOfChannels} channels, ${n.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);const c=new Error("Encoding error").stack;this.encoder=new AudioEncoder({output:(f,l)=>{if(this.encodingConfig.codec==="aac"&&l?.decoderConfig){let v=!1;if(!l.decoderConfig.description||l.decoderConfig.description.byteLength<2?v=!0:v=zl(Le(l.decoderConfig.description)).objectType===0,v){const u=Number($e(n.codec.split(".")));l.decoderConfig.description=Pa({objectType:u,numberOfChannels:l.decoderConfig.numberOfChannels,sampleRate:l.decoderConfig.sampleRate})}}let m=it.fromEncodedChunk(f);m=m.clone({timestamp:wa(m.timestamp,n.sampleRate),duration:f.duration!=null?wa(m.duration,n.sampleRate):void 0}),this.encodingConfig.onEncodedPacket?.(m,l),this.lastMuxerPromise=this.muxer.addEncodedAudioPacket(this.source._connectedTrack,m,l).catch(v=>{this.setError(v)})},error:f=>{f.stack=c,this.setError(f)}}),this.encoder.configure(n)}L(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:i,sampleSize:r,littleEndian:a}=Tt(e);switch(this.outputSampleSize=r,r){case 1:i==="unsigned"?this.writeOutputValue=(n,s,o)=>n.setUint8(s,Ee((o+1)*127.5,0,255)):i==="signed"?this.writeOutputValue=(n,s,o)=>{n.setInt8(s,Ee(Math.round(o*128),-128,127))}:i==="ulaw"?this.writeOutputValue=(n,s,o)=>{const c=Ee(Math.floor(o*32767),-32768,32767);n.setUint8(s,nu(c))}:i==="alaw"?this.writeOutputValue=(n,s,o)=>{const c=Ee(Math.floor(o*32767),-32768,32767);n.setUint8(s,su(c))}:L(!1);break;case 2:i==="unsigned"?this.writeOutputValue=(n,s,o)=>n.setUint16(s,Ee((o+1)*32767.5,0,65535),a):i==="signed"?this.writeOutputValue=(n,s,o)=>n.setInt16(s,Ee(Math.round(o*32767),-32768,32767),a):L(!1);break;case 3:i==="unsigned"?this.writeOutputValue=(n,s,o)=>Qi(n,s,Ee((o+1)*83886075e-1,0,16777215),a):i==="signed"?this.writeOutputValue=(n,s,o)=>bl(n,s,Ee(Math.round(o*8388607),-8388608,8388607),a):L(!1);break;case 4:i==="unsigned"?this.writeOutputValue=(n,s,o)=>n.setUint32(s,Ee((o+1)*21474836475e-1,0,4294967295),a):i==="signed"?this.writeOutputValue=(n,s,o)=>n.setInt32(s,Ee(Math.round(o*2147483647),-2147483648,2147483647),a):i==="float"?this.writeOutputValue=(n,s,o)=>n.setFloat32(s,o,a):L(!1);break;case 8:i==="float"?this.writeOutputValue=(n,s,o)=>n.setFloat64(s,o,a):L(!1);break;default:kt(r),L(!1)}}async flushAndClose(e){try{e||(this.checkForEncoderError(),this.resampler&&await this.resampler.finalize()),this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&await this.encoder.flush())}finally{this.closed=!0,this.resampler=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&this.encoder.state!=="closed"&&this.encoder.close()}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}class Md extends In{constructor(e){Yf(e),super(e.codec),this._accumulatedTime=0,this._encoder=new Id(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const i=Fe._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const r of i)await this._encoder.add(r,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Rd extends kr{constructor(e){if(super(),this._connectedTrack=null,!$t.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${$t.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Mn{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>ft.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>_t.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>$t.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class Tr extends Mn{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new _d(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Rn extends Tr{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...ft,...nr,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...$t]}_codecUnsupportedHint(e){return new zn().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Fn extends Tr{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...ft,...nr,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...$t]}}class zn extends Tr{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...ft,..._t]}_codecUnsupportedHint(e){return new Rn().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const On=["video","audio","subtitle"];class ei{constructor(e,i,r,a,n){this.id=e,this.output=i,this.type=r,this.source=a,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof ei))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Sa(this.metadata.group),r=Sa(e.metadata.group);for(const a of i)if(this.type!==e.type&&r.some(o=>a===o)||r.some(o=>a._pairedGroups.has(o)))return!0;return!1}}class Fd extends ei{constructor(e,i,r,a){super(e,i,"video",r,a)}}class zd extends ei{constructor(e,i,r,a){super(e,i,"audio",r,a)}}class Od extends ei{constructor(e,i,r,a){super(e,i,"subtitle",r,a)}}class ti{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof ti))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const Cr=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!_l(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&Fl(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof ti)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof ti))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Hd extends rr{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new ti,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new ga,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Mn))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof ht||e.target instanceof xr))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof ht&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof ht)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof ht&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){L(this._target instanceof xr);const i=this._target.getTarget(e),r=a=>{if(!(a instanceof ht))throw new TypeError("getTarget must return a Target.");return a};return i instanceof Promise?i.then(r):r(i)}async _getTarget(e){L(this._target instanceof xr);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(L(this._initTarget!==null),this._initTarget instanceof ht)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof ht)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),r=a=>(this.state==="canceled"?a._close():this._rememberTarget(a),this._emit("target",{target:a,request:e,isRoot:!0}),this._rootTarget=a,a);return i instanceof Promise?this._rootTargetPromise=i.then(r):r(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),r=new br(i,typeof e=="boolean"?e:e(i));return r.start(),r})()}addVideoTrack(e,i={}){if(!(e instanceof An))throw new TypeError("source must be a VideoSource.");if(Cr(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Ra({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof it))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Fd(this.tracks.length+1,this,e,r))}addAudioTrack(e,i={}){if(!(e instanceof In))throw new TypeError("source must be an AudioSource.");if(Cr(i),i.decoderConfig!==void 0&&Fa({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof it))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new zd(this.tracks.length+1,this,e,r))}addSubtitleTrack(e,i={}){if(!(e instanceof Rd))throw new TypeError("source must be a SubtitleSource.");Cr(i);const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Od(this.tracks.length+1,this,e,r))}setMetadataTags(e){if(Rl(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),r=this.tracks.reduce((s,o)=>s+(o.type===e.type?1:0),0),a=i[e.type].max;if(r===a)throw new Error(a===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${a} ${e.type} track${a===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const r of On){const a=this.tracks.reduce((s,o)=>s+(o.type===r?1:0),0),n=e[r].min;if(a<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const r of On){const a=this.tracks.reduce((s,o)=>s+(o.type===r?1:0),0),n=e[r].min;if(a<n)throw new Error(n===e[r].max?`${this.format._name} requires exactly ${n} ${r} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${r} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ve._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const r=this._mutex.acquire();try{await this._muxer.start();const a=this.tracks.map(n=>n.source._start());await Promise.all(a)}finally{(await r)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ve._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ve._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(r=>r._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ve._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const r=await this._rootWriterPromise;r.finalized||(await r.flush(),await r.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const Ld={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Ud=new Set(["window","buddy","dancer"]);function Hn(t){return!Ud.has(t.typeId)}const Nd=new Set(["bitmap","video","audio","pcm","beats","bpm","objectUrl","frozenFrame"]);function Wd(t){const e=JSON.parse(JSON.stringify(t,(i,r)=>{if(!Nd.has(i))return r}));return JSON.stringify(e,null,2)}function qd(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>Dd(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const r=Ld[i.generator??""];return r?{...i,generator:r}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Hn)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(r=>({...r,effects:(r.effects??[]).filter(Hn)}))}:i.data})),e}function Dd(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,beats:void 0,bpm:void 0,objectUrl:null,frozenFrame:null}}function $d(t,e){const i=new Blob([e],{type:"application/json"});It(t,i)}function It(t,e){const i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Sr=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function Ln(t,e,i=1280){const r=i/Math.max(t,e,1e-4);return{width:Ze(t*r),height:Ze(e*r)}}function jd(t,e){const i=t/Math.max(e,1);let r="16:9",a=1/0;for(const n of Sr){const s=Math.abs(i-n.rw/n.rh);s<a&&(a=s,r=n.id)}return r}function Vd(t,e,i=1280){if(t<2||e<2)return Ln(16,9,i);const r=Math.max(t,e),a=i/r;return{width:Ze(t*a),height:Ze(e*a)}}function Gd(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),r=e-i;return t<r?0:(t-r+1)/i}const Kd=960,Xd=1920;function Er(t,e=!1){const i=e?Kd:Xd;return zr(t.exportSettings.width,t.exportSettings.height,i,i)}async function Zd(t,e,i){const{width:r,height:a,format:n,quality:s,filename:o}=e.exportSettings,c=n==="jpg"?"image/jpeg":"image/png",f=await t.capture(e,i,Ze(r),Ze(a),c,s);It(`${o}.${n==="jpg"?"jpg":"png"}`,f)}async function Qd(t,e,i){const{fps:r,duration:a,filename:n,quality:s}=e.exportSettings,{width:o,height:c}=Er(e,!1),f=Math.max(1,Math.round(a*r)),l=new ml,m=l.folder(n)??l,v=document.createElement("canvas");for(let b=0;b<f;b++){const d=b/r;i?.(b,f),t.paintFrame(e,d,o,c,v);const h=await r0(v,"image/png",s);m.file(`${n}_${String(b).padStart(5,"0")}.png`,await h.arrayBuffer()),await Pr()}const u=await l.generateAsync({type:"blob"});It(`${n}_sequence.zip`,u)}async function Un(t,e,i,r=!1){const a=await Nn(t,e,t0(),i,r);It(`${e.exportSettings.filename}.webm`,a)}async function Yd(t,e,i,r=!1){try{return await Jd(t,e,i,r)?"mp4 clip saved · with music":"mp4 clip saved"}catch(a){const n=i0();if(n){const o=await Nn(t,e,n,i,r);return It(`${e.exportSettings.filename}.mp4`,o),"mp4 clip saved"}return await Un(t,e,i,r),`MP4 not available (${a instanceof Error?a.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function Jd(t,e,i,r=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const a=Math.min(24,Math.max(12,e.exportSettings.fps||24)),n=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:s,height:o}=Er(e,r),c=new Ie({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),f=new Rn({fastStart:"in-memory"}),m=await ru(["avc","hevc"].filter(x=>f.getSupportedVideoCodecs().includes(x)),{width:s,height:o,quality:c});if(!m)throw new Error("this browser cannot encode H.264");const v=new Mi,u=new Hd({format:f,target:v}),b=new Bd({codec:m,quality:c,keyFrameInterval:1});u.addVideoTrack(b,{frameRate:a});const d=await e0(u,f,e,n);t.resetTemporal();const h=document.createElement("canvas");await u.start();try{d&&await d.audioSource.add(d.buffer);const x=Math.max(1,Math.round(n*a)),_=1/a,S=e.exportSettings.loopClose!==!1;let R=null;for(let B=0;B<x;B++){const F=Vi(B/a,n,e.playback.mode,1,!0);i?.(B,x),t.paintFrame(e,F,s,o,h),B===0&&S?R=qn(h):Wn(h,R,B,x,S);const A=new Be(h,{timestamp:B*_,duration:_});await b.add(A,{keyFrame:B%a===0}),A.close(),await Pr()}await u.finalize()}catch(x){try{await u.cancel()}catch{}throw x}const p=v.buffer;if(!p||p.byteLength<32)throw new Error("MP4 mux produced an empty file");const w=p.slice(0);return It(`${e.exportSettings.filename}.mp4`,new Blob([w],{type:"video/mp4"})),!!d}async function e0(t,e,i,r){const a=await wc(ui(i));if(!a||a.length<32||a.duration<=0)return null;const n=i.exportSettings.loopClose!==!1;let s;try{s=yc(a,r,n)}catch{return null}const o=Math.min(2,Math.max(1,s.numberOfChannels)),c=s.sampleRate>=46e3?48e3:44100,f=e.getSupportedAudioCodecs(),l=["aac","mp3","opus"].filter(u=>f.includes(u)),m=await au(l.length?l:f,{numberOfChannels:o,sampleRate:c});if(!m)return null;const v=new Md({codec:m,quality:eu,transform:{numberOfChannels:o,sampleRate:c}});return t.addAudioTrack(v),{audioSource:v,buffer:s}}async function Nn(t,e,i,r,a=!1){const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),s=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:o,height:c}=Er(e,a),f=document.createElement("canvas");f.width=o,f.height=c;const l=f.getContext("2d");if(!l)throw new Error("No 2d context");const m=f.captureStream(0),v=m.getVideoTracks()[0],u=new MediaRecorder(m,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),b=[];u.ondataavailable=x=>{x.data.size&&b.push(x.data)},t.resetTemporal(),u.start(200);const d=Math.max(1,Math.round(s*n)),h=document.createElement("canvas"),p=e.exportSettings.loopClose!==!1;let w=null;for(let x=0;x<d;x++){const _=Vi(x/n,s,e.playback.mode,1,!0);r?.(x,d),t.paintFrame(e,_,o,c,h),x===0&&p?w=qn(h):Wn(h,w,x,d,p),l.drawImage(h,0,0,o,c),v.requestFrame?.(),await Pr()}if(await new Promise(x=>{u.onstop=()=>x(),u.stop()}),m.getTracks().forEach(x=>x.stop()),!b.length)throw new Error("recorder produced no data");return new Blob(b,{type:i})}function t0(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function i0(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Wn(t,e,i,r,a){if(!a||!e||i===0)return;const n=Gd(i,r);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function qn(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Pr(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function r0(t,e,i){return new Promise((r,a)=>{t.toBlob(n=>{n?r(n):a(new Error("frame capture failed"))},e,i)})}async function a0(t,e,i,r,a=!1){const n=e.exportSettings.format;return n==="mp4"?Yd(t,e,r,a):n==="webm"?Un(t,e,r,a):n==="sequence"?Qd(t,e,r):Zd(t,e,i)}const n0=768,s0="sana",Dn=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function o0(t=768,e=768){const i=Math.max(1,t),r=Math.max(1,e),a=n0/Math.max(i,r);return{width:Ze(i*a,256),height:Ze(r*a,256)}}function c0(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16);if(Number.isNaN(i))return"muted earth";const r=i>>16&255,a=i>>8&255,n=i&255;let s=Dn[0],o=1e9;for(const c of Dn){const f=(r-c.r)**2+(a-c.g)**2+(n-c.b)**2;f<o&&(o=f,s=c)}return s.name}function l0(t,e=[],i=!1){const r=t.trim()||"experimental photographic still, cinematic light, analog film",a="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${r}, ${a}`;const n=e.map(c0).filter((s,o,c)=>c.indexOf(s)===o).slice(0,4);return`${r}, palette of ${n.join(", ")}, ${a}`}function f0(t,e,i){return`#${[t,e,i].map(r=>Math.max(0,Math.min(255,r)).toString(16).padStart(2,"0")).join("")}`}function u0(t,e,i,r=4){const a=[];for(let n=0;n<3;n++)for(let s=0;s<3;s++){const o=Math.min(e-1,Math.floor((s+.5)/3*e)),f=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+o)*4,l=t[f],m=t[f+1],v=t[f+2],u=f0(l,m,v);a.some(d=>(d.r-l)**2+(d.g-m)**2+(d.b-v)**2<1400)||a.push({hex:u,r:l,g:m,b:v})}return a.slice(0,r).map(n=>n.hex)}function d0(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const r=i.getImageData(0,0,e.width,e.height);return u0(r.data,e.width,e.height)}function h0(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function m0(t,e,i,r,a=s0){const n=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${r}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(a)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${s}`}async function p0(t,e){const i=new AbortController,r=setTimeout(()=>i.abort(),e);try{const a=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!a.ok)throw a.status===429||a.status>=500?new Error(`busy:${a.status}`):new Error(`Generation failed (${a.status}). Try a shorter prompt.`);const n=await a.arrayBuffer(),s=new Uint8Array(n),o=a.headers.get("content-type")||"";if(!h0(s,o))throw new Error("Generation returned no image. Try again.");const c=o.startsWith("image/")?o.split(";")[0]:"image/jpeg";return new Blob([n],{type:c})}catch(a){throw a instanceof Error&&a.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):a}finally{clearTimeout(r)}}async function g0(t){const{width:e,height:i}=o0(t.width??768,t.height??768),r=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let a=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await p0(m0(r,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(o){a=o instanceof Error?o:new Error(String(o))}}const n=a?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":a?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function _e(t){const e=E.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function ii(t){if(!t)return;const e=E.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function ze(t,e,i=!0){E.setProject(r=>({...r,layers:r.layers.map(a=>a.id===t?e(a):a)}),i)}function ri(t,e=!0){E.setProject(i=>{const r=e?i.layers.map(a=>a.id===E.state.ui.selectedLayerId?{...a,sourceId:t.id}:a):i.layers;return{...i,sources:[...i.sources,t],layers:r}}),E.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function v0(t){const e=E.project.sources.filter(s=>s.kind==="audio");for(const s of e)ma(s);if(E.setProject(s=>{const o=s.sources.filter(l=>l.kind!=="audio"),c=s.layers.map(l=>e.some(m=>m.id===l.sourceId)?{...l,sourceId:o.find(m=>m.kind!=="audio")?.id??null}:l),f=Math.max(s.duration,t.duration||0);return{...s,sources:[...o,t],layers:c,duration:f,playback:{...s.playback,playing:!0,time:0}}}),mi(),t.audio){try{t.audio.currentTime=0}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"",r=t.bpm&&t.bpm>40?`${t.bpm}bpm`:"",a=t.beats?.length?`${t.beats.length} hits`:"",n=[i,r,a].filter(Boolean).join(" · ");E.patchUi({selectedSourceId:t.id,status:n?`beat-sync · ${t.name} · ${n}`:`beat-sync · ${t.name} — collage punches on the mix`})}async function Ri(t,e=!1){for(const i of Array.from(t))try{(/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i.test(i.name)||(i.type||"").startsWith("audio/"))&&E.patchUi({status:`reading ${i.name}…`});const a=await nl(i);if(a.kind==="audio"){v0(a);continue}if(e){const n=E.state.ui.selectedSourceId;E.setProject(s=>({...s,sources:s.sources.map(o=>o.id===n?{...a,id:o.id}:o)})),E.patchUi({status:`replaced ${i.name}`})}else ri(a,!0)}catch(r){E.patchUi({status:r instanceof Error?r.message:"import failed"})}}function b0(){E.setProject(e=>{const i=e.sources.find(a=>a.kind!=="audio")?.id??null,r=aa(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,r]}});const t=E.project.layers.at(-1);E.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function y0(t){E.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const r=JSON.parse(JSON.stringify(i));r.id=Ae("lyr"),r.name=`${i.name}*`,r.effects=r.effects.map(s=>({...s,id:Ae("fx")}));const a=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(a+1,0,r),{...e,layers:n}})}function w0(t){E.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Ar(t){const e=_e(E.project);if(!e)return;const i=ra(t);ze(e.id,r=>({...r,effects:[...r.effects,i]})),E.patchUi({selectedEffectId:i.id})}function x0(t,e){ze(t,i=>({...i,effects:i.effects.filter(r=>r.id!==e)}))}function $n(t,e,i){ze(t,r=>{const a=r.effects.findIndex(c=>c.id===e),n=a+i;if(a<0||n<0||n>=r.effects.length)return r;const s=[...r.effects],[o]=s.splice(a,1);return s.splice(n,0,o),{...r,effects:s}})}function k0(t,e){ze(t,i=>({...i,effects:i.effects.map(r=>r.id===e?{...r,enabled:!r.enabled}:r)}))}function ai(t,e,i,r,a=!0){ze(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:r}}:s)}),a)}function Mt(t,e=!1){const i=E.state.ui;(t==="all"||t==="selected")&&E.setProject(a=>({...a,seed:a.seed+1+(Date.now()&255)>>>0}),!1),E.setProject(a=>{let s=ea(a,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&i.includeCritters&&(s=Jr(s)),t==="all"&&i.includeIdol&&(s=Vo(s)),s});const r=E.project.layers[0]?.effects.map(a=>a.typeId).join(" · ");E.patchUi({status:`${e?"wacky look":"look"} · ${r||t} · seed ${E.project.seed}`})}function _0(){const t=_e(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(E.project.seed+Date.now())%9998;if(e){ai(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Ar("critters");const r=_e(E.project),a=ii(r);r&&a?.typeId==="critters"&&ai(r.id,a.id,"seed",i),E.patchUi({status:"stamped floaters"})}function T0(){const t=_e(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(E.project.seed+Date.now()+17)%9998;if(e){ai(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Ar("dancer");const r=_e(E.project),a=ii(r);r&&a?.typeId==="dancer"&&ai(r.id,a.id,"seed",i),E.patchUi({status:"stamped idol"})}function C0(){E.setProject(t=>Xo({...t,seed:t.seed+1+(Date.now()&255)>>>0})),E.patchUi({status:"new floater and idol seeds"})}async function S0(t){const e=E.project,{width:i,height:r}=zr(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const a=await t.capture(e,e.playback.time,i,r,"image/png",.92),n=await da(a,`print_${Date.now()}.png`);ri(n,!0),E.patchUi({status:"printed the live frame as a new still"})}catch(a){E.patchUi({status:a instanceof Error?a.message:"print failed"})}}function jn(t){E.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Vn(){$d(`${E.project.name||"phosphene"}.phos.json`,Wd(E.project)),E.patchUi({status:"project downloaded"})}async function E0(t){const e=await t.text(),i=qd(e);E.replace(i),E.patchUi({status:"project loaded — re-drop media if needed"})}function P0(){const t=prompt("Preset name",`look ${E.project.presets.length+1}`);if(!t)return;const e=$i(E.project,t);E.setProject(i=>({...i,presets:[...i.presets,e]}))}function Br(t){const e=E.project.presets.find(i=>i.id===t);e&&(E.setProject(i=>Uo(i,e)),E.patchUi({status:`preset ${e.name}`}))}function A0(){const t=No(E.project.presets,E.project.seed+Date.now());if(!t){E.patchUi({status:"no presets saved"});return}Br(t.id)}function B0(t){const e=E.project.presets.find(i=>i.id===t);e&&E.setProject(i=>({...i,presets:[...i.presets,Wo(e)]}))}function I0(t){E.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Gn(){const t=E.state.ui,e=_e(E.project),i=ii(e),r=t.selectedParam?.paramId;if(!e||!i||!r){E.patchUi({status:"select a numeric parameter first"});return}const a=i.params[r];if(typeof a!="number"){E.patchUi({status:"keyframes are numeric"});return}const n={id:Ae("kf"),time:E.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:r,value:a,easing:"smooth"};E.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),E.patchUi({status:`key ${r} @ ${n.time.toFixed(2)}s`})}function M0(){E.setProject(t=>({...t,keyframes:[]}))}async function R0(){const t=E.project.sources.find(i=>i.id===E.state.ui.selectedSourceId);if(!t)return;const e=await cl(t);e&&ri(e,!0)}function Kn(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of E.project.sources)ma(e);E.replace(na()),E.patchUi({status:"new piece",prompt:"",generating:!1})}}async function F0(){if(E.state.ui.generating)return;const t=E.state.ui.prompt.trim();if(!t){E.patchUi({status:"type a prompt first"});return}E.patchUi({generating:!0,status:"generating new image…"});try{const e=E.project.sources.find(f=>f.id===E.state.ui.selectedSourceId),i=E.state.ui.useSourceForGen;let r=[];const a=e?.frozenFrame||e?.bitmap||e?.video||null;i&&a&&(r=d0(a));const n=l0(t,r,i&&r.length>0),s=E.project.seed+Date.now()>>>0,o=await g0({prompt:n,seed:s,width:E.project.exportSettings.width,height:E.project.exportSettings.height,onStatus:f=>E.patchUi({generating:!0,status:f},!1)}),c=await da(o,`gen_${s}.jpg`);ri(c,!0),E.patchUi({generating:!1,status:i&&r.length?"new image from prompt + source":"new image from prompt"})}catch(e){E.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let Fi=!1,ni=null;function z0(t,e){ni=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is loaded and the clip keeps the music (aligned from the start of the clip). Stills and PNG sequences stay silent. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",H0(t),E.subscribe(()=>{Fi||Ir(t)}),Ir(t)}async function O0(t=!1){if(ni&&!E.state.ui.exporting){E.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),E.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await a0(ni,E.project,E.project.playback.time,(i,r)=>{E.patchUi({status:`export ${i+1}/${r}`,exporting:!0},!1)},t);E.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){E.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function H0(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const r=i.dataset.act,a=i.dataset.id;if(r==="save"&&Vn(),r==="load"&&t.querySelector("#proj-file")?.click(),r==="scratch"&&Kn(),r==="imagine"&&F0(),r==="seed-"&&jn(-1),r==="seed+"&&jn(1),r==="rand-all"&&Mt("all"),r==="rand-wacky"&&Mt("all",!0),r==="stamp-chaos"&&C0(),r==="reprint"&&ni&&S0(ni),r==="rand-sel"&&Mt("selected"),r==="rand-param"){const n=i.dataset.paramId,s=_e(E.project),o=ii(s);n&&s&&o&&E.patchUi({selectedParam:{layerId:s.id,effectId:o.id,paramId:n}},!1),Mt("param")}if(r==="help"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),r==="import"&&t.querySelector("#media-file")?.click(),r==="import-audio"&&t.querySelector("#audio-file")?.click(),r==="replace"&&t.querySelector("#replace-file")?.click(),r==="freeze"&&R0(),r==="gen"){const n=i.dataset.kind??"plasma",s=E.project.sources.find(l=>l.id===E.state.ui.selectedSourceId),o=i.dataset.kit??(De(n)?Ui(s?.collageKit):void 0),c=i.dataset.move??(De(n)?Or(s?.collageMove):void 0),f=ia(n,o,c);ri(f,!0),E.patchUi({status:f.collageMove?`place · ${f.collageMove} · ${f.collageKit??""}`:f.collageKit?`place · ${n} · ${f.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(r==="stamp-critters"&&_0(),r==="stamp-idol"&&T0(),r==="add-layer"&&b0(),r==="dup-layer"&&a&&y0(a),r==="del-layer"&&a&&w0(a),r==="sel-layer"&&a&&E.patchUi({selectedLayerId:a,selectedEffectId:E.project.layers.find(n=>n.id===a)?.effects[0]?.id??null}),r==="sel-fx"&&a&&E.patchUi({selectedEffectId:a}),r==="sel-src"&&a&&E.patchUi({selectedSourceId:a}),r==="bypass"&&a){const n=_e(E.project);n&&k0(n.id,a)}if(r==="fx-up"&&a){const n=_e(E.project);n&&$n(n.id,a,-1)}if(r==="fx-dn"&&a){const n=_e(E.project);n&&$n(n.id,a,1)}if(r==="fx-del"&&a){const n=_e(E.project);n&&x0(n.id,a)}if(r==="key"&&Gn(),r==="key-clear"&&M0(),r==="pst-save"&&P0(),r==="pst-rand"&&A0(),r==="pst-load"&&a&&Br(a),r==="pst-dup"&&a&&B0(a),r==="pst-del"&&a&&I0(a),r==="export"&&O0(),r==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));E.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:24,bitrate:Math.min(s.exportSettings.bitrate,8)}})),E.patchUi({status:`${n}s clip ready — hit Export`})}if(r==="exp-aspect"&&a){const n=Sr.find(s=>s.id===a);if(n){const s=Ln(n.rw,n.rh,1280);E.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:s.width,height:s.height}}))}}if(r==="exp-aspect-src"){const n=E.project,s=_e(n),o=n.sources.find(l=>l.id===(s?.sourceId??n.sources[0]?.id)),c=o?.kind==="audio"?n.sources.find(l=>l.kind!=="audio"):o,f=Vd(c?.width??1280,c?.height??720,1280);E.setProject(l=>({...l,exportSettings:{...l.exportSettings,width:f.width,height:f.height}}))}if(r==="play"&&(mi(),E.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),r==="use-src"&&a){if(E.project.sources.find(o=>o.id===a)?.kind==="audio")return;const s=_e(E.project);s&&ze(s.id,o=>({...o,sourceId:a}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(E0(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Ri(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Ri(i.files,!0),i.value=""),i.id==="audio-file"&&i instanceof HTMLInputElement&&i.files&&(Ri(i.files,!1),i.value=""),i.id==="quality"&&E.setProject(r=>({...r,quality:i.value})),i.id==="add-fx"&&(i.value&&Ar(i.value),i.value=""),i.id==="blend"){const r=_e(E.project);r&&ze(r.id,a=>({...a,blendMode:i.value}))}if(i.id==="mask-type"){const r=_e(E.project);r&&ze(r.id,a=>({...a,mask:{...a.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&Br(i.value),i.id==="exp-format"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,format:i.value}})),i.id==="play-mode"&&E.setProject(r=>({...r,playback:{...r.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,r=E.project;if(i.id==="gen-prompt"&&E.patchUi({prompt:i.value},!1),i.id==="gen-src"&&E.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked}),i.id==="seed"&&E.setProject(a=>({...a,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&E.setProject(a=>({...a,randomAmount:Number(i.value)}),!1),i.id==="speed"&&E.setProject(a=>({...a,playback:{...a.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&E.setProject(a=>({...a,playback:{...a.playback,loop:i.checked}}),!1),i.id==="loop-close"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&E.setProject(a=>({...a,playback:{...a.playback,freeze:i.checked}}),!1),i.id==="time"&&E.setProject(a=>({...a,playback:{...a.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const a=_e(r);a&&ze(a.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const a=_e(r);a&&ze(a.id,n=>({...n,enabled:i.checked}),!1)}for(const a of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${a}`&&E.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[a]:Number(i.value)}}),!1),i.id===`lfb-${a}`){const n=_e(r);n&&ze(n.id,s=>({...s,feedback:{...s.feedback,[a]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const a=_e(r),n=i.id.slice(3);a&&n in a.transform&&ze(a.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){Fi=!0;const a=L0(i.dataset.fxType||"",i.dataset.param),n=U0(i,a);ai(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),E.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="exp-q"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{Fi&&(Fi=!1,Ir(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),E.state.ui.dropActive||E.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&E.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),E.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Ri(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),mi(),E.setProject(r=>({...r,playback:{...r.playback,playing:!r.playback.playing}}))),(e.key==="r"||e.key==="R")&&Mt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&Mt("all",!0),(e.key==="k"||e.key==="K")&&Gn(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Kn()),e.key==="?"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Vn()))})}function L0(t,e){return Qe(t)?.params.find(i=>i.id===e)}function U0(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function Ir(t){const{project:e,ui:i}=E.state,r=t.querySelector("#proj-name"),a=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");r&&document.activeElement!==r&&(r.value=e.name),a&&document.activeElement!==a&&(a.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const o=t.querySelector("#top-export");o&&(o.disabled=i.exporting);const c=t.querySelector("#inc-critters");c&&(c.checked=i.includeCritters);const f=t.querySelector("#inc-idol");f&&(f.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),N0(t.querySelector("#rail")),W0(t.querySelector("#stack")),D0(t.querySelector("#transport"))}function N0(t){const e=E.project,i=E.state.ui;t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${We(i.prompt)}</textarea>
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
      ${e.sources.map(r=>{const a=r.kind==="audio"?`beat-sync · ${Rt(r.duration||0)}${r.bpm&&r.bpm>40?` · ${r.bpm}bpm`:""}`:`${r.kind} ${r.width}×${r.height}`,n=r.kind==="audio"?'<span class="status">beat</span>':`<button class="btn tiny" data-act="use-src" data-id="${r.id}">use</button>`;return`
        <div class="thumb ${r.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${r.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${We(r.name)}</b><span>${a}</span></div>
          ${n}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${Ce("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${Ce("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${Ce("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${Ce("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${Ce("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${Ce("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(r=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${We(r.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${r.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${r.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${r.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function W0(t){const e=E.project,i=_e(e),r=ii(i),a=Ho();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${We(n.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${n.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${n.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${Ce("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${fl.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${Ce("tr-x","X",i.transform.x,-1,1,.01)}
      ${Ce("tr-y","Y",i.transform.y,-1,1,.01)}
      ${Ce("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${Ce("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${Ce("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${Ce("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${Ce("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${Ce("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${Ce("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(n=>`<option ${i.mask.type===n?"selected":""} value="${n}">${n}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      ${i.effects.map((n,s)=>`
        <div class="fx ${n.id===r?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${We(Qe(n.typeId)?.name??n.typeId)}</span>
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
        ${Lo.map(n=>{const s=(a[n.id]??[]).filter(o=>o.id!=="dancer");return s.length?`<optgroup label="${n.label}">${s.map(o=>`<option value="${o.id}">${o.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${r?`
        <hr class="div" />
        <div class="sec">${We(Qe(r.typeId)?.name??"params")} · ${We(Qe(r.typeId)?.description??"")}</div>
        ${(Qe(r.typeId)?.params??[]).map(n=>q0(i.id,r,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const o=Number(s.dataTransfer?.getData("text/plain")),c=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(o)||Number.isNaN(c)||o===c||ze(i.id,f=>{const l=[...f.effects],[m]=l.splice(o,1);return l.splice(c,0,m),{...f,effects:l}})})})}function q0(t,e,i){const r=e.params[i.id]??i.default,a=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${a} ${r?"checked":""}/> ${We(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${We(i.label)}</span><input type="color" ${a} value="${We(String(r))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${We(i.label)}</span>
      <select ${a}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===r?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${We(i.label)}</span>
    <input type="range" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(r)}" />
    <input type="number" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(r).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function D0(t){const e=E.project,i=e.playback,r=e.exportSettings,a=E.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(o=>`<option ${i.mode===o?"selected":""} value="${o}">${o}</option>`).join("")}
        </select>
      </div>
      ${Ce("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${Rt(i.time)} / ${Rt(n)}</span>
        <span class="status" id="status-line">${E.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(o=>`<div class="key" style="left:${o.time/n*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${s}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${n}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${Sr.map(o=>`<button class="btn tiny ${jd(r.width,r.height)===o.id?"acid":""}" data-act="exp-aspect" data-id="${o.id}">${o.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${r.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${r.height}" title="height" />
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map(o=>`<option ${r.format===o?"selected":""} value="${o}">${o}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2,4,6,8].map(o=>`<button class="btn tiny ${Number(r.duration)===o?"acid":""}" data-act="clip" data-secs="${o}" ${a?"disabled":""}>${o}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="8" step="1" style="width:48px" value="${r.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${r.loopClose!==!1?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${a?"disabled":""}>${a?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",o=>{const c=o.currentTarget.getBoundingClientRect(),f=(o.clientX-c.left)/c.width*n;E.setProject(l=>({...l,playback:{...l.playback,time:Math.max(0,f)}}))})}function Ce(t,e,i,r,a,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${r}" max="${a}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${r}" max="${a}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function We(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Rt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function Xn(t,e){if(E.state.ui.exporting)return;const i=1,r=e.getBoundingClientRect(),a=Math.max(16,Math.floor(r.width*i)),n=Math.max(16,Math.floor(r.height*i));(t.width!==a||t.height!==n)&&(t.width=a,t.height=n)}function $0(t,e,i){const r=t.querySelector("#hud");r&&(r.textContent=`PHOSPHENE  ${Rt(i)}  ${e.toFixed(0)}FPS  ${E.project.quality.toUpperCase()}`);const a=Math.max(E.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/a*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${Rt(i)} / ${Rt(a)}`);const o=t.querySelector("#time");o&&document.activeElement!==o&&(o.value=String(i));const c=t.querySelector("#status-line");c&&(c.textContent=E.state.ui.status)}const Zn=window;Zn.__phospheneMark=!0;const Qn=document.querySelector("#app");if(!Qn)throw new Error("#app missing");const Mr=Qn,Rr=document.createElement("canvas");async function j0(){await new Promise(c=>requestAnimationFrame(()=>c()));let t;try{t=new el(Rr)}catch(c){const f=document.querySelector("#boot-note");f?f.textContent=`PHOSPHENE · plasma · ${c instanceof Error?c.message:"WebGL failed"}`:Mr.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${c instanceof Error?c.message:String(c)}</p>
      </div>`;return}z0(Mr,t),Zn.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>Xn(Rr,e)).observe(e),Xn(Rr,e);let r=performance.now(),a=60,n=0,s=performance.now();function o(c){const f=Math.min(.08,(c-r)/1e3);r=c;const l=E.state.ui.exporting,m=E.project,v=oc(m,m.playback.time),u=ui(m);if(!l&&m.playback.playing&&!m.playback.freeze){const b=u?.audio&&m.playback.mode==="forward"&&!u.audio.paused&&Number.isFinite(u.audio.currentTime);if(u?.audio&&Xi(u.audio,m.playback),b){const d=u.audio.currentTime;E.setProject(h=>({...h,playback:{...h.playback,time:d}}),!1)}else{let d=m.playback.time+f*v;const h=Math.max(m.duration,.001);m.playback.loop?d=(d%h+h)%h:d=Math.min(d,h),E.setProject(p=>({...p,playback:{...p.playback,time:d}}),!1),u?.audio&&m.playback.mode!=="forward"&&Xi(u.audio,{...m.playback,playing:!1,time:d})}}else u?.audio&&Xi(u.audio,{...m.playback,playing:!1});for(const b of E.project.sources)if(b.kind==="video"&&b.video&&!E.project.playback.freeze){const d=Vi(E.project.playback.time,b.duration||b.video.duration||1,E.project.playback.mode,1,E.project.playback.loop);ll(b,d,{playing:E.project.playback.playing,freeze:E.project.playback.freeze,mode:E.project.playback.mode,speed:E.project.playback.speed})}if(!l)try{t.render(E.project,E.project.playback.time)}catch(b){E.patchUi({status:b instanceof Error?b.message:"render error"},!1)}n++,c-s>400&&(a=n*1e3/(c-s),s=c,n=0),$0(Mr,a,E.project.playback.time),requestAnimationFrame(o)}requestAnimationFrame(o)}j0()})();

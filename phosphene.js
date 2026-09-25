(function(){"use strict";function Be(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function he(t,e,i){return Math.min(i,Math.max(e,t))}function qe(t,e=16){return Math.max(e,Math.round(t)&-2)}function gr(t,e,i,r){const a=Math.min(1,i/Math.max(t,1),r/Math.max(e,1));return{width:qe(t*a),height:qe(e*a)}}function gi(t,e,i){return t+(e-t)*i}function In(t){const e=he(t,0,1);return e*e*(3-2*e)}const Mn=["heraldry","wallpaper","giants","shower"],ut=["sailor","circus","fruit","nature","love","space","sweet","music"],Zt=["rush","tunnel","lattice","bloom","spiral","lanes","pulse"],Rn={rush:"RUSH",tunnel:"TUNNEL",lattice:"LATTICE",bloom:"BLOOM",spiral:"SPIRAL",lanes:"LANES",pulse:"PULSE"};function Oe(t){return t==="heraldry"||t==="wallpaper"||t==="giants"||t==="shower"}function bi(t){return ut.includes(t)?t:"sailor"}function br(t){return Zt.includes(t)?t:"rush"}function yi(t){return Zt[(t>>>0)%Zt.length]}function wi(t){return t==="rush"?"wallpaper":t==="tunnel"?"giants":t==="lattice"?"shower":"heraldry"}function yr(t,e){return e&&Zt.includes(e)?e:t==="wallpaper"?"rush":t==="giants"?"tunnel":t==="shower"?"lattice":"rush"}const xi=["#c41e3a","#1c4db8","#f0c020","#1a8a3a","#141414","#f4f4f4","#7a2ea0","#e84a8a","#2aa8a0","#f26a20","#6a7ad8","#2a2a2a"],wr={sailor:"#1c4db8",circus:"#ff2f86",fruit:"#f0c020",nature:"#1a8a3a",love:"#e84a8a",space:"#7ad8ff",sweet:"#ff6aa8",music:"#ffd86a"},zn={sailor:["fish","anchor","wave","shell","starfish","boat","tail","swallow","star","moon"],circus:["elephant","tent","ball","bow","horse","balloon","ticket","moon","star","figure"],fruit:["pear","lemon","cherry","leaf","mushroom","flower","sun","cloud","bolt","umbrella","bird"],nature:["tree","deer","fox","owl","mushroom","leaf","acorn","cone","mountain","drop","moth","bird"],love:["heart","wingfig","swan","cat","crown","moon","star","key","ring","envelope","bow","potion","house"],space:["rocket","planet","saturn","ufo","comet","satellite","star","moon"],sweet:["lolly","coneice","cupcake","donut","candy","cherry","heart"],music:["note","vinyl","headphone","mic","speaker","star","heart"]},xr={sailor:["fish","boat","tail","swallow","anchor"],circus:["elephant","tent","horse","balloon","figure"],fruit:["pear","lemon","mushroom","sun","umbrella"],nature:["tree","deer","owl","fox","mountain"],love:["heart","wingfig","swan","cat","house"],space:["rocket","saturn","ufo","planet","comet"],sweet:["lolly","cupcake","donut","coneice","candy"],music:["vinyl","headphone","speaker","note","mic"]},kr={sailor:["starfish","shell","star","fish","anchor"],circus:["ball","star","balloon","bow","ticket"],fruit:["cherry","leaf","star","drop","lemon"],nature:["leaf","acorn","drop","moth","bird"],love:["heart","star","key","moon","ring"],space:["star","moon","comet","satellite","planet"],sweet:["candy","heart","lolly","cherry","donut"],music:["note","star","heart","vinyl","mic"]},Et=144;function _r(t,e){return t&&/^#[0-9a-fA-F]{6}$/.test(t)?t:e}function De(t,e){return e[Math.floor(t()*e.length)%e.length]}function Tr(t,e){return t()<.32?e:De(t,xi)}function Fn(t,e="rush"){return e==="tunnel"?xr[t]:e==="lattice"?kr[t]:zn[t]}function On(t,e,i,r){const a=Fn(r,e==="bloom"?"rush":e);let n=De(t,a);e==="lattice"&&t()<.4&&(n=De(t,kr[r])),e==="tunnel"&&t()<.28&&(n=De(t,xr[r]));const o=Tr(t,i);let s=Tr(t,i);return s===o&&(s=De(t,xi)),{kind:n,pattern:t()<.58?"plain":De(t,["polka","hoop","half","bar"]),a:o,b:s,mirror:t()>.5}}function Hn(t,e,i="sailor"){const r=Be(t>>>0),a=240,n=[];for(let o=0;o<a;o++){const s=o<70?"lattice":o<130?"tunnel":"rush";n.push({x:r(),y:r(),z:r(),rot:(r()-.5)*.55,size:.55+r()*.9,vx:(r()-.5)*.06,vy:(r()-.35)*.08,vr:(r()-.5)*.25,charge:On(r,s,e,i)})}return n}function Ln(t){return`${t.kind}|${t.pattern}|${t.a}|${t.b}|${t.mirror?1:0}`}function Un(t){const e=parseInt(t.slice(1),16);if(Number.isNaN(e))return .5;const i=e>>16&255,r=e>>8&255,a=e&255;return(.22*i+.7*r+.08*a)/255}function Sr(t,e,i,r){t.save(),t.beginPath(),e(),t.clip();const a=i.a,n=i.b,o=r*2.4;if(t.fillStyle=a,t.fillRect(-o,-o,o*2,o*2),t.fillStyle=n,i.pattern==="polka"){const s=r*.38;for(let c=-4;c<5;c++)for(let l=-4;l<5;l++)t.beginPath(),t.arc((l+.5*(c&1))*s,c*s,s*.22,0,Math.PI*2),t.fill()}else if(i.pattern==="hoop"){t.strokeStyle=n,t.lineWidth=r*.14;for(let s=1;s<=3;s++)t.beginPath(),t.arc(0,0,r*(.28*s),0,Math.PI*2),t.stroke()}else i.pattern==="half"?t.fillRect(0,-o,o,o*2):i.pattern==="bar"&&t.fillRect(-o,-r*.18,o*2,r*.36);t.restore(),t.save(),t.beginPath(),e(),t.lineJoin="round",t.lineCap="round",t.lineWidth=Math.max(1.6,r*.07),t.strokeStyle=Un(i.a)>.55?"#141414":"#f6f1e6",t.stroke(),t.restore()}function Cr(t,e,i,r=.42){for(let a=0;a<i*2;a++){const n=a%2===0?e:e*r,o=a*Math.PI/i-Math.PI/2,s=Math.cos(o)*n,c=Math.sin(o)*n;a===0?t.moveTo(s,c):t.lineTo(s,c)}t.closePath()}function Nn(t,e){t.moveTo(0,e*.82),t.bezierCurveTo(e*.95,e*.18,e*.85,-e*.55,0,-e*.22),t.bezierCurveTo(-e*.85,-e*.55,-e*.95,e*.18,0,e*.82),t.closePath()}function Wn(t,e){t.arc(0,0,e,.55,Math.PI*2-.55),t.arc(e*.38,-e*.08,e*.72,Math.PI*.85,-Math.PI*.55,!0),t.closePath()}function Er(t,e){t.arc(0,-e*.62,e*.22,0,Math.PI*2),t.moveTo(-e*.28,-e*.32),t.lineTo(e*.28,-e*.32),t.lineTo(e*.34,e*.18),t.lineTo(e*.2,e*.18),t.lineTo(e*.32,e*.95),t.lineTo(e*.08,e*.95),t.lineTo(0,e*.22),t.lineTo(-e*.08,e*.95),t.lineTo(-e*.32,e*.95),t.lineTo(-e*.2,e*.18),t.lineTo(-e*.34,e*.18),t.closePath()}function qn(t,e){t.ellipse(-e*.08,0,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(e*.55,0),t.lineTo(e*.98,-e*.42),t.lineTo(e*.78,0),t.lineTo(e*.98,e*.42),t.closePath()}function Dn(t,e){t.moveTo(-e*.18,-e*.95),t.lineTo(e*.18,-e*.95),t.lineTo(e*.18,-e*.55),t.lineTo(e*.42,-e*.55),t.lineTo(e*.42,-e*.28),t.lineTo(e*.18,-e*.28),t.lineTo(e*.18,e*.35),t.quadraticCurveTo(e*.72,e*.22,e*.85,e*.7),t.lineTo(e*.55,e*.82),t.quadraticCurveTo(e*.35,e*.5,0,e*.62),t.quadraticCurveTo(-e*.35,e*.5,-e*.55,e*.82),t.lineTo(-e*.85,e*.7),t.quadraticCurveTo(-e*.72,e*.22,-e*.18,e*.35),t.lineTo(-e*.18,-e*.28),t.lineTo(-e*.42,-e*.28),t.lineTo(-e*.42,-e*.55),t.lineTo(-e*.18,-e*.55),t.closePath()}function $n(t,e){t.moveTo(-e,e*.15),t.quadraticCurveTo(-e*.66,-e*.55,-e*.33,e*.1),t.quadraticCurveTo(0,e*.7,e*.33,e*.1),t.quadraticCurveTo(e*.66,-e*.55,e,e*.15),t.lineTo(e,e*.55),t.quadraticCurveTo(e*.5,e*.2,0,e*.55),t.quadraticCurveTo(-e*.5,e*.85,-e,e*.55),t.closePath()}function jn(t,e){t.moveTo(0,e*.85);for(let i=0;i<=7;i++){const r=-Math.PI*.95+i/7*Math.PI*1.9,a=i%2===0?e:e*.72;t.lineTo(Math.sin(r)*a,-Math.cos(r)*a*.85)}t.closePath()}function Vn(t,e){t.moveTo(-e*.95,e*.15),t.lineTo(e*.95,e*.15),t.lineTo(e*.62,e*.72),t.lineTo(-e*.62,e*.72),t.closePath(),t.moveTo(0,e*.12),t.lineTo(0,-e*.95),t.lineTo(e*.62,e*.05),t.closePath()}function Gn(t,e){t.moveTo(-e*.15,-e*.9),t.quadraticCurveTo(e*.85,-e*.4,e*.35,e*.15),t.quadraticCurveTo(e*.95,e*.55,e*.15,e*.95),t.quadraticCurveTo(e*.05,e*.2,-e*.55,e*.05),t.quadraticCurveTo(-e*.95,-e*.55,-e*.15,-e*.9),t.closePath()}function Kn(t,e){t.moveTo(-e*.9,e*.15),t.quadraticCurveTo(-e*.1,-e*.15,e*.55,-e*.08),t.lineTo(e*.95,-e*.42),t.lineTo(e*.7,0),t.lineTo(e*.95,e*.42),t.lineTo(e*.5,e*.12),t.quadraticCurveTo(-e*.05,e*.55,-e*.55,e*.85),t.lineTo(-e*.35,e*.2),t.closePath()}function Xn(t,e){t.moveTo(-e*.7,e*.15),t.quadraticCurveTo(-e*.75,-e*.55,-e*.15,-e*.62),t.quadraticCurveTo(e*.45,-e*.7,e*.55,-e*.15),t.lineTo(e*.95,e*.35),t.lineTo(e*.72,e*.48),t.lineTo(e*.42,e*.05),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(e*.08,e*.2),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.32,e*.2),t.lineTo(-e*.7,e*.2),t.closePath(),t.moveTo(-e*.05,-e*.55),t.quadraticCurveTo(-e*.55,-e*.95,-e*.85,-e*.35),t.quadraticCurveTo(-e*.35,-e*.45,-e*.05,-e*.35),t.closePath()}function Zn(t,e){t.moveTo(0,-e),t.lineTo(e*.95,e*.85),t.lineTo(-e*.95,e*.85),t.closePath(),t.moveTo(0,-e),t.lineTo(e*.22,-e*.85),t.lineTo(e*.08,-e*.55),t.closePath()}function Qn(t,e){t.arc(0,0,e*.92,0,Math.PI*2)}function Yn(t,e){t.moveTo(0,0),t.bezierCurveTo(-e*.15,-e*.7,-e*.95,-e*.55,-e*.85,0),t.bezierCurveTo(-e*.95,e*.55,-e*.15,e*.7,0,0),t.bezierCurveTo(e*.15,-e*.7,e*.95,-e*.55,e*.85,0),t.bezierCurveTo(e*.95,e*.55,e*.15,e*.7,0,0),t.closePath()}function Jn(t,e){t.moveTo(-e*.85,e*.15),t.quadraticCurveTo(-e*.2,-e*.55,e*.35,-e*.2),t.lineTo(e*.82,-e*.55),t.lineTo(e*.95,-e*.32),t.lineTo(e*.55,.05*e),t.quadraticCurveTo(e*.7,e*.35,e*.2,e*.28),t.lineTo(e*.28,e*.85),t.lineTo(e*.08,e*.85),t.lineTo(0,e*.3),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.28,e*.28),t.lineTo(-e*.7,e*.22),t.lineTo(-e*.78,e*.75),t.lineTo(-e*.98,e*.72),t.closePath()}function eo(t,e){t.ellipse(0,-e*.2,e*.62,e*.72,0,0,Math.PI*2),t.moveTo(-e*.08,e*.48),t.lineTo(0,e*.62),t.lineTo(e*.08,e*.48),t.lineTo(0,e*.95),t.lineTo(-e*.02,e*.95),t.closePath()}function to(t,e){t.moveTo(-e*.95,-e*.48),t.lineTo(e*.95,-e*.48),t.arc(e*.95,0,e*.16,-Math.PI/2,Math.PI/2),t.lineTo(-e*.95,e*.48),t.arc(-e*.95,0,e*.16,Math.PI/2,-Math.PI/2),t.closePath()}function io(t,e){t.moveTo(0,e*.95),t.bezierCurveTo(e*.75,e*.7,e*.7,0,e*.32,-e*.35),t.quadraticCurveTo(e*.18,-e*.75,0,-e*.85),t.quadraticCurveTo(-e*.18,-e*.75,-e*.32,-e*.35),t.bezierCurveTo(-e*.7,0,-e*.75,e*.7,0,e*.95),t.closePath()}function ro(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.5,-e*.72,0,-e*.55),t.quadraticCurveTo(e*.5,-e*.72,e*.95,0),t.quadraticCurveTo(e*.5,e*.72,0,e*.55),t.quadraticCurveTo(-e*.5,e*.72,-e*.95,0),t.closePath()}function ao(t,e){t.arc(-e*.32,e*.28,e*.4,0,Math.PI*2),t.moveTo(e*.55,e*.22),t.arc(e*.32,e*.22,e*.38,0,Math.PI*2),t.moveTo(-e*.2,-e*.05),t.quadraticCurveTo(0,-e*.85,e*.15,-e*.95),t.quadraticCurveTo(e*.05,-e*.4,e*.22,-e*.08),t.lineTo(e*.12,0),t.quadraticCurveTo(0,-e*.55,-e*.28,-e*.02),t.closePath()}function no(t,e){t.moveTo(0,e),t.bezierCurveTo(e*.95,e*.25,e*.7,-e*.7,0,-e),t.bezierCurveTo(-e*.7,-e*.7,-e*.95,e*.25,0,e),t.closePath()}function oo(t,e){t.moveTo(-e*.95,0),t.quadraticCurveTo(-e*.2,-e,e*.95,0),t.lineTo(e*.55,e*.12),t.lineTo(e*.28,e*.95),t.lineTo(-e*.28,e*.95),t.lineTo(-e*.55,e*.12),t.closePath()}function so(t,e){for(let i=0;i<5;i++){const r=i/5*Math.PI*2-Math.PI/2;t.ellipse(Math.cos(r)*e*.45,Math.sin(r)*e*.45,e*.32,e*.22,r,0,Math.PI*2)}t.moveTo(e*.22,0),t.arc(0,0,e*.22,0,Math.PI*2)}function co(t,e){Cr(t,e,8,.55)}function lo(t,e){t.arc(-e*.42,e*.08,e*.42,0,Math.PI*2),t.moveTo(e*.55,e*.12),t.arc(e*.32,e*.05,e*.4,0,Math.PI*2),t.moveTo(e*.15,-e*.2),t.arc(0,-e*.18,e*.48,0,Math.PI*2)}function fo(t,e){t.moveTo(e*.15,-e),t.lineTo(-e*.15,-e*.05),t.lineTo(e*.08,-e*.05),t.lineTo(-e*.2,e),t.lineTo(e*.35,e*.08),t.lineTo(e*.08,e*.08),t.closePath()}function uo(t,e){t.moveTo(-e,e*.05),t.quadraticCurveTo(0,-e*1.05,e,e*.05),t.quadraticCurveTo(e*.5,-e*.05,0,e*.12),t.quadraticCurveTo(-e*.5,-e*.05,-e,e*.05),t.closePath(),t.moveTo(-e*.04,e*.08),t.lineTo(e*.04,e*.08),t.lineTo(e*.04,e*.72),t.quadraticCurveTo(e*.28,e*.95,e*.02,e*.95),t.lineTo(-e*.02,e*.82),t.quadraticCurveTo(e*.12,e*.82,-e*.04,e*.7),t.closePath()}function ho(t,e){t.moveTo(-e*.95,e*.15),t.quadraticCurveTo(-e*.2,-e*.35,e*.35,0),t.lineTo(e*.85,-e*.35),t.lineTo(e*.55,e*.08),t.quadraticCurveTo(e*.15,e*.55,-e*.35,e*.45),t.closePath()}function mo(t,e){t.moveTo(-e*.18,e*.25),t.lineTo(-e*.22,e),t.lineTo(e*.22,e),t.lineTo(e*.18,e*.25),t.closePath(),t.moveTo(0,-e),t.arc(-e*.28,-e*.15,e*.48,0,Math.PI*2),t.moveTo(e*.55,-e*.05),t.arc(e*.28,-e*.08,e*.45,0,Math.PI*2),t.moveTo(e*.2,-e*.45),t.arc(0,-e*.42,e*.5,0,Math.PI*2)}function po(t,e){t.moveTo(-e*.7,e*.2),t.quadraticCurveTo(-e*.2,-e*.25,e*.2,-e*.05),t.lineTo(e*.55,-e*.35),t.lineTo(e*.72,-e*.85),t.lineTo(e*.55,-e*.85),t.lineTo(e*.42,-e*.48),t.lineTo(e*.28,-e*.78),t.lineTo(e*.12,-e*.72),t.lineTo(e*.28,-e*.28),t.lineTo(e*.55,0),t.lineTo(e*.35,e*.85),t.lineTo(e*.15,e*.85),t.lineTo(e*.08,e*.25),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.35,e*.85),t.lineTo(-e*.22,e*.22),t.lineTo(-e*.7,e*.22),t.closePath()}function vo(t,e){t.moveTo(-e*.35,e*.15),t.quadraticCurveTo(-e*.15,-e*.55,e*.45,-e*.15),t.lineTo(e*.85,-e*.55),t.lineTo(e*.95,-e*.22),t.lineTo(e*.55,e*.08),t.lineTo(e*.35,e*.85),t.lineTo(e*.12,e*.85),t.lineTo(.05*e,e*.28),t.lineTo(-e*.15,e*.85),t.lineTo(-e*.38,e*.85),t.lineTo(-e*.22,e*.22),t.quadraticCurveTo(-e*.85,e*.55,-e*.95,-e*.15),t.quadraticCurveTo(-e*.55,e*.15,-e*.35,e*.15),t.closePath()}function go(t,e){t.moveTo(-e*.55,-e*.35),t.lineTo(-e*.42,-e*.85),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.42,-e*.85),t.lineTo(e*.55,-e*.35),t.quadraticCurveTo(e*.85,e*.55,0,e*.95),t.quadraticCurveTo(-e*.85,e*.55,-e*.55,-e*.35),t.closePath()}function bo(t,e){t.moveTo(-e*.7,-e*.15),t.quadraticCurveTo(0,-e*.85,e*.7,-e*.15),t.lineTo(e*.7,e*.08),t.lineTo(-e*.7,e*.08),t.closePath(),t.moveTo(-e*.52,e*.05),t.quadraticCurveTo(0,e*1.15,e*.52,e*.05),t.closePath()}function yo(t,e){t.moveTo(0,-e),t.lineTo(e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.closePath()}function wo(t,e){t.moveTo(-e,e*.75),t.lineTo(-e*.35,-e*.35),t.lineTo(0,e*.15),t.lineTo(e*.45,-e*.85),t.lineTo(e,e*.75),t.closePath()}function xo(t,e){t.moveTo(0,-e),t.bezierCurveTo(e*.75,-e*.15,e*.7,e*.75,0,e),t.bezierCurveTo(-e*.7,e*.75,-e*.75,-e*.15,0,-e),t.closePath()}function ko(t,e){t.ellipse(-e*.45,-e*.05,e*.55,e*.72,-.35,0,Math.PI*2),t.ellipse(e*.45,-e*.05,e*.55,e*.72,.35,0,Math.PI*2),t.moveTo(e*.12,e*.35),t.ellipse(0,e*.2,e*.12,e*.55,0,0,Math.PI*2)}function _o(t,e){t.ellipse(-e*.62,-e*.05,e*.42,e*.7,-.4,0,Math.PI*2),t.ellipse(e*.62,-e*.05,e*.42,e*.7,.4,0,Math.PI*2),Er(t,e*.72)}function To(t,e){t.ellipse(e*.05,e*.28,e*.7,e*.42,0,0,Math.PI*2),t.moveTo(-e*.15,e*.05),t.quadraticCurveTo(-e*.55,-e*.85,e*.15,-e*.75),t.quadraticCurveTo(-e*.15,-e*.35,e*.05,0),t.closePath()}function So(t,e){t.arc(0,e*.22,e*.58,0,Math.PI*2),t.moveTo(-e*.42,-e*.55),t.lineTo(-e*.55,-e*.95),t.lineTo(-e*.12,-e*.55),t.lineTo(e*.12,-e*.55),t.lineTo(e*.55,-e*.95),t.lineTo(e*.42,-e*.55),t.closePath(),t.moveTo(e*.85,e*.55),t.quadraticCurveTo(e*.95,-e*.15,e*.35,e*.15),t.quadraticCurveTo(e*.75,e*.85,e*.85,e*.55),t.closePath()}function Co(t,e){t.moveTo(-e*.95,e*.45),t.lineTo(-e*.95,-e*.05),t.lineTo(-e*.45,e*.15),t.lineTo(0,-e*.85),t.lineTo(e*.45,e*.15),t.lineTo(e*.95,-e*.05),t.lineTo(e*.95,e*.45),t.closePath()}function Eo(t,e){t.arc(-e*.45,0,e*.42,0,Math.PI*2),t.moveTo(-e*.05,-e*.12),t.lineTo(e*.95,-e*.12),t.lineTo(e*.95,e*.12),t.lineTo(e*.55,e*.12),t.lineTo(e*.55,e*.42),t.lineTo(e*.32,e*.42),t.lineTo(e*.32,e*.12),t.lineTo(-e*.05,e*.12),t.closePath()}function Po(t,e){t.arc(0,0,e*.92,0,Math.PI*2),t.arc(0,0,e*.52,0,Math.PI*2,!0)}function Bo(t,e){t.rect(-e*.95,-e*.55,e*1.9,e*1.15),t.moveTo(-e*.95,-e*.55),t.lineTo(0,e*.15),t.lineTo(e*.95,-e*.55),t.closePath()}function Ao(t,e){t.moveTo(-e*.22,-e),t.lineTo(e*.22,-e),t.lineTo(e*.22,-e*.45),t.quadraticCurveTo(e*.85,-e*.15,e*.72,e*.85),t.lineTo(-e*.72,e*.85),t.quadraticCurveTo(-e*.85,-e*.15,-e*.22,-e*.45),t.closePath()}function Io(t,e){t.moveTo(0,-e),t.lineTo(e*.95,-e*.15),t.lineTo(e*.7,-e*.15),t.lineTo(e*.7,e*.9),t.lineTo(-e*.7,e*.9),t.lineTo(-e*.7,-e*.15),t.lineTo(-e*.95,-e*.15),t.closePath()}function Mo(t,e){t.moveTo(0,-e),t.lineTo(e*.32,-e*.15),t.lineTo(e*.32,e*.45),t.lineTo(e*.55,e*.82),t.lineTo(e*.18,e*.55),t.lineTo(0,e*.95),t.lineTo(-e*.18,e*.55),t.lineTo(-e*.55,e*.82),t.lineTo(-e*.32,e*.45),t.lineTo(-e*.32,-e*.15),t.closePath()}function Ro(t,e){t.arc(0,0,e*.72,0,Math.PI*2)}function zo(t,e){t.ellipse(0,0,e*.95,e*.22,-.25,0,Math.PI*2),t.moveTo(e*.55,0),t.arc(0,0,e*.48,0,Math.PI*2)}function Fo(t,e){t.ellipse(0,e*.12,e*.9,e*.28,0,0,Math.PI*2),t.moveTo(e*.38,-e*.08),t.ellipse(0,-e*.18,e*.4,e*.32,0,Math.PI,0,!0)}function Oo(t,e){t.arc(e*.35,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.1,-e*.1),t.lineTo(-e*.9,e*.75),t.lineTo(-e*.15,e*.05),t.closePath()}function Ho(t,e){t.rect(-e*.22,-e*.22,e*.44,e*.44),t.moveTo(-e*.9,-e*.12),t.rect(-e*.9,-e*.12,e*.62,e*.24),t.moveTo(e*.28,-e*.12),t.rect(e*.28,-e*.12,e*.62,e*.24)}function Lo(t,e){t.arc(0,-e*.28,e*.52,0,Math.PI*2),t.moveTo(-e*.08,e*.2),t.rect(-e*.08,e*.18,e*.16,e*.72)}function Uo(t,e){t.arc(0,-e*.35,e*.42,Math.PI,0),t.lineTo(e*.38,-e*.15),t.lineTo(0,e*.95),t.lineTo(-e*.38,-e*.15),t.closePath()}function No(t,e){t.moveTo(-e*.55,e*.05),t.lineTo(-e*.38,e*.85),t.lineTo(e*.38,e*.85),t.lineTo(e*.55,e*.05),t.closePath(),t.moveTo(e*.55,e*.02),t.arc(0,-e*.05,e*.55,.15,Math.PI-.15,!0)}function Wo(t,e){t.arc(0,0,e*.78,0,Math.PI*2),t.moveTo(e*.28,0),t.arc(0,0,e*.28,0,Math.PI*2,!0)}function qo(t,e){t.ellipse(0,0,e*.38,e*.48,0,0,Math.PI*2),t.moveTo(-e*.38,-e*.15),t.lineTo(-e*.9,-e*.55),t.lineTo(-e*.9,e*.55),t.lineTo(-e*.38,e*.15),t.moveTo(e*.38,-e*.15),t.lineTo(e*.9,-e*.55),t.lineTo(e*.9,e*.55),t.lineTo(e*.38,e*.15)}function Do(t,e){t.ellipse(-e*.28,e*.48,e*.32,e*.22,-.3,0,Math.PI*2),t.moveTo(e*.02,e*.42),t.rect(0,-e*.75,e*.12,e*1.2),t.moveTo(e*.12,-e*.75),t.bezierCurveTo(e*.7,-e*.95,e*.75,-e*.15,e*.12,-e*.08),t.lineTo(e*.12,-e*.75)}function $o(t,e){t.arc(0,0,e*.82,0,Math.PI*2),t.moveTo(e*.18,0),t.arc(0,0,e*.18,0,Math.PI*2,!0)}function jo(t,e){t.arc(0,-e*.05,e*.7,Math.PI,0),t.moveTo(-e*.78,-e*.05),t.rect(-e*.92,-e*.12,e*.32,e*.7),t.moveTo(e*.6,-e*.05),t.rect(e*.6,-e*.12,e*.32,e*.7)}function Vo(t,e){t.ellipse(0,-e*.35,e*.32,e*.48,0,0,Math.PI*2),t.moveTo(-e*.1,e*.12),t.rect(-e*.1,e*.1,e*.2,e*.55),t.moveTo(-e*.32,e*.65),t.rect(-e*.32,e*.65,e*.64,e*.16)}function Go(t,e){t.rect(-e*.55,-e*.85,e*1.1,e*1.7),t.moveTo(e*.32,-e*.28),t.arc(0,-e*.28,e*.32,0,Math.PI*2),t.moveTo(e*.22,e*.42),t.arc(0,e*.42,e*.22,0,Math.PI*2)}function Ko(t,e,i){switch(t.beginPath(),e){case"star":case"starfish":Cr(t,i,5,e==="starfish"?.42:.4);break;case"heart":Nn(t,i);break;case"moon":Wn(t,i);break;case"figure":Er(t,i);break;case"fish":qn(t,i);break;case"anchor":Dn(t,i);break;case"wave":$n(t,i);break;case"shell":jn(t,i);break;case"boat":Vn(t,i);break;case"tail":Gn(t,i);break;case"swallow":Kn(t,i);break;case"elephant":Xn(t,i);break;case"tent":Zn(t,i);break;case"ball":Qn(t,i);break;case"bow":Yn(t,i);break;case"horse":Jn(t,i);break;case"balloon":eo(t,i);break;case"ticket":to(t,i);break;case"pear":io(t,i);break;case"lemon":ro(t,i);break;case"cherry":ao(t,i);break;case"leaf":no(t,i);break;case"mushroom":oo(t,i);break;case"flower":so(t,i);break;case"sun":co(t,i);break;case"cloud":lo(t,i);break;case"bolt":fo(t,i);break;case"umbrella":uo(t,i);break;case"bird":ho(t,i);break;case"tree":mo(t,i);break;case"deer":po(t,i);break;case"fox":vo(t,i);break;case"owl":go(t,i);break;case"acorn":bo(t,i);break;case"cone":yo(t,i);break;case"mountain":wo(t,i);break;case"drop":xo(t,i);break;case"moth":ko(t,i);break;case"wingfig":_o(t,i);break;case"swan":To(t,i);break;case"cat":So(t,i);break;case"crown":Co(t,i);break;case"key":Eo(t,i);break;case"ring":Po(t,i);break;case"envelope":Bo(t,i);break;case"potion":Ao(t,i);break;case"rocket":Mo(t,i);break;case"planet":Ro(t,i);break;case"saturn":zo(t,i);break;case"ufo":Fo(t,i);break;case"comet":Oo(t,i);break;case"satellite":Ho(t,i);break;case"lolly":Lo(t,i);break;case"coneice":Uo(t,i);break;case"cupcake":No(t,i);break;case"donut":Wo(t,i);break;case"candy":qo(t,i);break;case"note":Do(t,i);break;case"vinyl":$o(t,i);break;case"headphone":jo(t,i);break;case"mic":Vo(t,i);break;case"speaker":Go(t,i);break;default:Io(t,i);break}}function Xo(t,e,i){const r=()=>Ko(t,e.kind,i);if(e.mirror){t.save(),t.scale(-1,1),Sr(t,r,e,i),t.restore();return}Sr(t,r,e,i)}function Zo(t){const e=document.createElement("canvas");e.width=Et,e.height=Et;const i=e.getContext("2d");return i&&(i.translate(Et/2,Et/2),Xo(i,t,Et*.38)),e}class Qo{canvas=typeof document<"u"?document.createElement("canvas"):null;stamps=new Map;particles=[];builtSeed=-1;builtInk="";builtKit="sailor";stamp(e){const i=Ln(e);let r=this.stamps.get(i);return r||(r=Zo(e),this.stamps.set(i,r)),r}ensure(e,i,r){this.builtSeed===e&&this.builtInk===i&&this.builtKit===r&&this.particles.length||(this.particles=Hn(e,i,r),this.stamps.clear(),this.builtSeed=e,this.builtInk=i,this.builtKit=r)}paint(e){const i=Math.max(16,Math.floor(e.width)),r=Math.max(16,Math.floor(e.height));this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width!==i&&(this.canvas.width=i),this.canvas.height!==r&&(this.canvas.height=r);const a=this.canvas.getContext("2d",{alpha:!1});if(!a)return this.canvas;const n=bi(e.kit),o=_r(e.paper,Qt(n,e.seed)),s=_r(e.ink,wr[n]);this.ensure(e.seed>>>0,s,n),es(a,i,r,o,n,e.time,e.seed),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high";const c=yr(e.generator,e.move),l=he(e.audio,0,1),d=he(e.bass,0,1),u=e.time,y=i/Math.max(r,1),f=c==="lattice"?48:c==="lanes"?90:c==="pulse"?72:c==="tunnel"?120:c==="bloom"?140:this.particles.length;for(let p=0;p<f;p++){const m=this.particles[p],g=Yo(m,p,c,u,l,d);if(!g)continue;const b=g.px*Math.min(i,r);if(b<5)continue;const w=this.stamp(m.charge),k=(.5+g.x)*i,S=(.5+g.y/y)*r;k<-b||S<-b||k>i+b||S>r+b||(a.save(),a.globalAlpha=g.alpha,a.translate(k,S),a.rotate(g.rot),a.drawImage(w,-b/2,-b/2,b,b),a.restore())}return this.canvas}}function $e(t){return(t%1+1)%1}function Yo(t,e,i,r,a,n){if(i==="tunnel"){const u=.3+$e(t.z-r*(.4+a*.5+n*.22))*2.45;if(u<.34||u>2.65)return null;const y=t.x*Math.PI*2+r*.14+t.rot*.3,f=(.16+t.y*.58)/u;return{x:Math.cos(y)*f,y:Math.sin(y)*f,px:he(.2*t.size*(.95+n*.15)/u,.04,.5),rot:t.rot+t.vr*r*.2,alpha:he((2.65-u)/.28,0,1)*he((u-.3)/.1,0,1)}}if(i==="lattice"){const y=(e%8+.5)/8-.5,f=(Math.floor(e/8)+.5)/6-.5,m=.32+(1-$e(r*(.2+a*.12)+t.z*.02))*2.2;return{x:y/(m*.62),y:f/(m*.62),px:he(.16*t.size/m,.05,.42),rot:t.rot*.25,alpha:he((2.4-m)/.25,0,1)}}if(i==="bloom"){const d=$e(t.z-r*(.34+n*.28)),u=d*d,y=t.x*Math.PI*2+r*.1+t.rot;return{x:Math.cos(y)*u*.92,y:Math.sin(y)*u*.92,px:he(.05+u*.32*t.size*(1+a*.12),.04,.48),rot:t.rot+d*.4,alpha:he(1.05-u,0,1)*he(d/.08,0,1)}}if(i==="spiral"){const u=.28+$e(t.z-r*(.4+a*.48+n*.2))*2.6;if(u<.32||u>2.75)return null;const y=t.x*Math.PI*2+2.15/u+r*.1,f=(.1+t.y*.38)/u;return{x:Math.cos(y)*f,y:Math.sin(y)*f,px:he(.2*t.size*(.94+n*.14)/u,.04,.52),rot:t.rot+y*.15,alpha:he((2.75-u)/.28,0,1)*he((u-.28)/.1,0,1)}}if(i==="lanes"){const u=(Math.floor(t.x*6)+.5)/6-.5,f=.28+$e(t.z-r*(.44+a*.42+n*.18)+t.y*.04)*2.55;return f<.32||f>2.7?null:{x:u/(f*.82),y:($e(t.y)-.5)/f,px:he(.2*t.size*(.95+n*.12)/f,.045,.48),rot:t.rot*.35,alpha:he((2.7-f)/.26,0,1)*he((f-.28)/.1,0,1)}}if(i==="pulse"){const u=.4+(1-$e(r*(.17+a*.1+n*.06)))*1.95;return{x:(t.x-.5)/(u*.68),y:(t.y-.5)/(u*.68),px:he(.15*t.size/u,.05,.4),rot:t.rot*.2,alpha:he((2.3-u)/.22,0,1)}}const s=.26+$e(t.z-r*(.46+a*.58+n*.28))*2.7;if(s<.3||s>2.85)return null;const c=($e(t.x+t.vx*r*.03)-.5)/s,l=($e(t.y+t.vy*r*.02)-.5)/s;return{x:c,y:l,px:he(.24*t.size*(.92+n*.18)/s,.04,.62),rot:t.rot+t.vr*r*.12,alpha:he((2.85-s)/.3,0,1)*he((s-.26)/.1,0,1)}}const ki={sailor:["#0b2a4a","#123c5c","#f0e2c4","#0e4d5c","#1a1a2e"],circus:["#1a0614","#ff2f86","#2a0a18","#f5d76e","#101010"],fruit:["#fff1b8","#ff8a4c","#7ec8e3","#2d1b0e","#f4efe0"],nature:["#1a3324","#3d5c3a","#e8f0d8","#243028","#6b8f71"],love:["#3a1028","#f4c4d4","#2a0818","#8b1e4a","#1a0a14"],space:["#070b22","#12183a","#0a1028","#1a1040","#000000"],sweet:["#ffe4f0","#ff6aa8","#fff0d8","#3a1020","#ffd6e8"],music:["#120814","#2a1038","#0d0d0d","#1a0820","#241028"]};function Jo(t,e,i){const r=parseInt(t.slice(1),16),a=parseInt(e.slice(1),16);if(Number.isNaN(r)||Number.isNaN(a))return t;const n=he(i,0,1),o=c=>Math.round((r>>c&255)*(1-n)+(a>>c&255)*n);return`#${(o(16)<<16|o(8)<<8|o(0)).toString(16).padStart(6,"0")}`}function es(t,e,i,r,a,n,o){t.fillStyle=r,t.fillRect(0,0,e,i);const s=De(Be(o+4>>>0),ki[a]),c=e*(.5+Math.sin(n*.17)*.08),l=i*(.46+Math.cos(n*.13)*.06),d=t.createRadialGradient(c,l,0,c,l,Math.max(e,i)*.72);d.addColorStop(0,Jo(r,s,.45)),d.addColorStop(1,r),t.fillStyle=d,t.fillRect(0,0,e,i)}function Qt(t,e=0){const i=Be(e+17>>>0);return De(i,ki[t])}function Pt(t,e){const i=Be(t+17>>>0);return De(i,ki[ut[Math.floor(i()*ut.length)]])}function gt(t,e="#c41e3a"){const i=Be(t+91>>>0);return i()<.35?e:De(i,xi)}function _i(t){return wr[t]}function ts(t){return ut[(t>>>0)%ut.length]}function Ee(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const is=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],rs=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],as=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ns=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],os=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],Pr=`
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
`,Br=`
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
`,ss=`
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
`,cs=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,ls=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,Ar=`
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
`,Ti={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${Ar}${Br}`,applyGlsl:cs};function fs(t){return t?{...Ti,extraUniforms:`${Ar}${Br}${ss}`,applyGlsl:ls}:Ti}const ds=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${Pr}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},Ti],Ir=[...is,...rs,...as,...ns,...os,...ds],us=new Map(Ir.map(t=>[t.id,t]));function je(t){return us.get(t)}function hs(){const t={};for(const e of Ir)(t[e.category]??=[]).push(e);return t}const ms=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function Si(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(r=>({...r,sourceId:null,effects:r.effects.map(a=>({...a,params:{...a.params}})),transform:{...r.transform},mask:{...r.mask,rect:{...r.mask.rect},center:{...r.mask.center}},feedback:{...r.feedback}})),keyframes:t.keyframes.map(r=>({...r})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Ee("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function ps(t,e){const i=e.data,r=t.sources.map(n=>n.id),a=i.layers.map((n,o)=>({...n,id:n.id,sourceId:n.sourceId&&r.includes(n.sourceId)?n.sourceId:r[Math.min(o,r.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:a,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function vs(t,e){if(t.length===0)return null;const i=Be(e);return t[Math.floor(i()*t.length)]}function gs(t){return{...t,id:Ee("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const bt=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],Mr=[{name:"herald tour",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"dense paper",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"giant charges",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"heart rain",mood:"mix",wacky:!0,stack:[],blend:"normal"},{name:"cream paper",mood:"lush",wacky:!0,stack:[],blend:"normal"},{name:"lattice field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"normal"},{name:"tessera field",mood:"mix",wacky:!1,stack:["grade","bloom","chroma"],blend:"normal"},{name:"phase field",mood:"lush",wacky:!1,stack:["grade","bloom","grain"],blend:"screen"},{name:"coil field",mood:"outsider",wacky:!1,stack:["grade","posterize","bloom"],blend:"normal"},{name:"prism field",mood:"mix",wacky:!1,stack:["duotone","bloom","grain"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function bs(t,e,i,r){if(e.randomizable===!1)return i;if(e.kind==="bool")return r<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return r<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(d=>{const u=parseInt(d.slice(1),16),y=u>>16&255,f=u>>8&255,p=u&255,m=g=>he(Math.round(gi(g,t()*255,r)),0,255);return`#${[m(y),m(f),m(p)].map(g=>g.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const a=e.min??0,n=e.max??1,o=typeof i=="number"?i:Number(e.default),s=a+t()*(n-a),c=gi(o,s,Math.max(r,.35));return e.kind==="int"?Math.round(c):c}function Ci(t,e,i,r){const a=je(t.typeId);if(!a)return t;const n=Be(e),o={...t.params};for(const s of a.params)r&&s.id!==r||(o[s.id]=bs(n,s,o[s.id]??s.default,he(i,0,1)));return{...t,params:o}}function ys(t,e,i,r=!1,a){const n=t.effects.map((o,s)=>r&&a&&o.id!==a?o:Ci(o,e+s*997,i));return{...t,effects:n}}function Rr(t,e,i){const r=je(t),a={};if(r)for(const n of r.params)a[n.id]=n.default;return Ci({id:Ee("fx"),typeId:t,enabled:!0,params:a},e,i)}function zr(t,e,i,r){const a={...t.params};if(t.typeId==="grade"&&(e==="lush"?(a.saturation=.18+r()*.42,a.brightness=-.04+r()*.16,a.contrast=.06+r()*.22,a.gamma=.82+r()*.35,a.hue=(r()-.5)*.18,a.exposure=-.15+r()*.4):e==="outsider"?(a.saturation=r()>.5?-.35+r()*.3:.4+r()*.5,a.contrast=.2+r()*.55,a.gamma=.55+r()*1.1,a.hue=(r()-.5)*.7):(a.saturation=.05+r()*.5,a.contrast=.1+r()*.35,a.hue=(r()-.5)*.35)),t.typeId==="duotone"&&(a.shadow=i.shadow,a.highlight=i.highlight,a.amount=e==="lush"?.45+r()*.4:.7+r()*.3),t.typeId==="grain"&&(a.leakColor=i.leak,a.leak=e==="lush"?.18+r()*.35:r()*.22,a.grain=e==="lush"?.12+r()*.22:.2+r()*.4),t.typeId==="bloom"&&(a.amount=e==="outsider"?.15+r()*.3:.4+r()*.45,a.halation=e==="lush"?.22+r()*.4:r()*.25,a.size=1.4+r()*2.2),t.typeId==="warp"&&(a.amount=e==="lush"?.012+r()*.04:.04+r()*.12),t.typeId==="chroma"&&(a.amount=e==="lush"?.002+r()*.006:.006+r()*.02),t.typeId==="analog"&&(a.mixScan=e==="lush"?r()*.2:.25+r()*.5,a.noise=e==="lush"?r()*.1:.12+r()*.35),t.typeId==="posterize"&&(a.levels=3+Math.floor(r()*6),a.dither=.08+r()*.35),t.typeId==="threshold"&&(a.mix=.35+r()*.45,a.soft=.04+r()*.18),t.typeId==="critters"){a.count=e==="lush"?3+Math.floor(r()*3):4+Math.floor(r()*4),a.size=.85+r()*.7,a.amount=.7+r()*.3,a.speed=.7+r()*1.3,a.seed=1+Math.floor(r()*9998);const n=r();e==="lush"?a.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?a.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":a.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){a.size=.12+r()*.05,a.count=1,a.crowd="normal",a.place="center";const n=r();e==="lush"?a.move=n>.38?"float":n>.18?"drift":"dance":e==="mix"?a.move=n>.52?"float":n>.3?"drift":n>.16?"orbit":"dance":a.move=n>.78?"drift":"dance",a.echo=.35+r()*.5,a.amount=1,a.speed=a.move==="dance"?.55+r()*1.5:.32+r()*.7,a.seed=1+Math.floor(r()*9998);const o=r();e==="lush"?a.grow=o>.62?"petals":o>.42?"halo":o>.26?"wings":o>.12?"quiet":"wild":e==="mix"?a.grow=o>.7?"skirt":o>.52?"antenna":o>.36?"horns":o>.2?"petals":"wild":a.grow=o>.62?"quiet":o>.4?"horns":"wild";const s=r();e==="lush"?a.coat=s>.48?"cream":s>.24?"moss":"wild":e==="mix"?a.coat=s>.5?"sodium":s>.26?"cream":"wild":a.coat=s>.55?"night":"wild"}return t.typeId==="kaleido"&&(a.segments=e==="lush"?4+Math.floor(r()*4):5+Math.floor(r()*8),a.zoom=.7+r()*.8),t.typeId==="channels"&&(a.tint=i.leak,a.tintAmt=e==="lush"?.12+r()*.28:r()*.45),t.typeId==="key"&&(a.lo=.1+r()*.22,a.hi=.5+r()*.35,a.amount=.45+r()*.4,a.invert=r()>.72),t.typeId==="dropout"&&(a.amount=.28+r()*.4,a.rate=.18+r()*.4,a.tear=e==="outsider"?.3+r()*.5:r()*.28),{...t,params:a}}function ws(t,e="mix"){const i=Be(t>>>0);return zr(Rr("critters",t,.85),e,bt[t%bt.length],i)}function xs(t,e="mix"){const i=Be(t>>>0);return zr(Rr("dancer",t,.85),e,bt[t%bt.length],i)}function ks(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="dancer")?e:{...e,effects:[...e.effects,xs(t.seed+i*4243,"mix")]})}}function Fr(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="critters")?e:{...e,effects:[...e.effects,ws(t.seed+i*7919,"mix")]})}}function _s(){return Mr.filter(t=>t.name==="herald tour"||t.name==="dense paper"||t.name==="giant charges"||t.name==="heart rain"||t.name==="cream paper")}function Ts(t,e,i,r=!1){return{...t,blendMode:"normal",opacity:1,effects:[],feedback:{...t.feedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}}}function Or(t,e,i,r,a,n=!1){const o=Math.max(t.randomAmount,e==="all"?.75:0),s=t.seed>>>0,c=Be(s^2654435769),l=t.layers.map((w,k)=>e==="selected"&&w.id!==i?w:e==="param"?w.id!==i?w:{...w,effects:w.effects.map(S=>S.id===r&&a?Ci(S,s+k*13,Math.max(o,.55),a):S)}:e==="all"?Ts(w,s+k*7919,o,n):ys(w,s+k*7919,o,!0,r)),d=Mn,u=Be(s+0*7919>>>0),y=_s(),f=y[Math.floor(u()*y.length)]??Mr[0],m={"herald tour":{generator:"heraldry",a:Pt(s),b:gt(s)},"dense paper":{generator:"wallpaper",a:Pt(s+3),b:gt(s+3,"#1c4db8")},"giant charges":{generator:"giants",a:Pt(s+5),b:gt(s+5)},"heart rain":{generator:"shower",a:Pt(s+7),b:gt(s+7,"#e84a8a")},"cream paper":{generator:"heraldry",a:Pt(s+9),b:gt(s+9,"#c41e3a")},"lattice field":{generator:"lattice",a:"#1a0830",b:"#ffe14a"},"tessera field":{generator:"tessera",a:"#0a1a28",b:"#ff4ad2"},"phase field":{generator:"phase",a:"#120814",b:"#3dffd0"},"coil field":{generator:"coil",a:"#081018",b:"#ff6a3c"},"prism field":{generator:"prism",a:"#201028",b:"#7ad8ff"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[f.name],g=t.sources.map((w,k)=>{if(e!=="all"||w.kind!=="generator")return w;const S=Be(s+k*131),C=bt[Math.floor(S()*bt.length)],O=n?!1:S()>.35&&Oe(w.generator),A=m?m.generator:O?w.generator:d[Math.floor(S()*d.length)],L=ts(s+k*41),I=Oe(A)?yi(s+k*73):void 0,j=Oe(A)?Qt(L,s+k*17):C.inkA,Q=Oe(A)?_i(L):C.inkB;return{...w,generator:I?wi(I):A,collageKit:Oe(A)?L:w.collageKit,collageMove:I??w.collageMove,colorA:m?m.a:j,colorB:m?_i(L):Q}}),b=e==="all"?n?{...t.globalFeedback,amount:0,opacity:.4,scale:1,rotation:0,distortion:0}:{...t.globalFeedback,amount:c()>.72?.04+c()*.1:0,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:l,sources:g,globalFeedback:b}}function Ss(t){const e=t.seed+7919>>>0,i=Be(e^2246822507),r=["shapes","toy pop","votives","moths","charms"],a=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","spikes","sprout","quiet"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let o={...t,seed:e,sources:t.sources.map((s,c)=>{if(!Oe(s.generator))return s;const l=ut[Math.floor(i()*ut.length)],d=yi(e+c*59);return{...s,generator:wi(d),collageKit:l,collageMove:d,colorA:Qt(l,e+c*13),colorB:gt(e+c*29)}}),layers:t.layers.map(s=>({...s,effects:s.effects.map(c=>c.typeId==="critters"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),kit:r[Math.floor(i()*r.length)]}}:c.typeId==="dancer"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),grow:a[Math.floor(i()*a.length)],coat:n[Math.floor(i()*n.length)]}}:c)}))};return o=Fr(o),o}function Cs(){return{x:0,y:0,scale:1,rotation:0}}function Es(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function Hr(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Ps(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Bs(){return{width:960,height:540,fps:24,duration:4,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const As={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},lattice:{a:"#1a0830",b:"#ffe14a"},tessera:{a:"#0a1a28",b:"#ff4ad2"},phase:{a:"#120814",b:"#3dffd0"},coil:{a:"#081018",b:"#ff6a3c"},prism:{a:"#201028",b:"#7ad8ff"},heraldry:{a:"#ffffff",b:"#c41e3a"},wallpaper:{a:"#ffffff",b:"#1c4db8"},giants:{a:"#ffffff",b:"#c41e3a"},shower:{a:"#ffffff",b:"#e84a8a"}},Is={sailor:"SAILOR",circus:"CIRCUS",fruit:"FRUIT",nature:"GROVE",love:"LOVE",space:"SPACE",sweet:"SWEET",music:"MUSIC"},Ms={heraldry:"RUSH",wallpaper:"RUSH",giants:"TUNNEL",shower:"LATTICE"};function Lr(t="plasma",e,i){const r=Oe(t)?bi(e):void 0,a=As[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};let n;r&&(n=i==="mix"||i==="tour"?yi(Date.now()+Math.floor(Math.random()*997)):i?br(i):yr(t));const o=n?wi(n):t??"plasma",s=n?Rn[n]:Ms[t??""]??(t?t.toUpperCase():"SIGNAL"),c=r?`${s} · ${Is[r]}`:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":s;return{id:Ee("src"),name:c,kind:"generator",generator:o,colorA:r?Qt(r,n==="rush"?1:n==="tunnel"?5:n==="lattice"?7:11):a.a,colorB:r?_i(r):a.b,collageKit:r,collageMove:n,width:1280,height:720,duration:0}}function Ur(t){const e=je(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const r of e.params)i[r.id]=r.default;return{id:Ee("fx"),typeId:t,enabled:!0,params:i}}function Nr(t,e,i=[]){return{id:Ee("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Cs(),effects:i.map(Ur),mask:Es(),feedback:Hr()}}function Wr(){const t=Lr("wallpaper","sailor","rush"),e=Nr("COLLAGE",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Ps(),globalFeedback:{...Hr(),amount:0,opacity:.4,scale:1},exportSettings:Bs(),presets:[]},r=Or({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[Si(i,"factory · tour"),Si(r,"factory · scramble")],i}function qr(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!1,includeIdol:!1,exporting:!1}}class Rs{state;listeners=new Set;constructor(e=Wr()){this.state={project:e,ui:qr(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...qr(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const E=new Rs;function Ei(t,e,i,r,a){if(e<=0)return 0;const n=t*Math.max(.01,r);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let o=n;if(i==="reverse"&&(o=-n),i==="pingpong"){const s=e*2,c=(o%s+s)%s;return c<=e?c:s-c}return a?(o%e+e)%e:he(o,0,e)}function zs(t,e,i,r,a){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===r&&(i!=="effect"||n.effectId===a)).sort((n,o)=>n.time-o.time)}function Fs(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const r=t[t.length-1];if(e>=r.time)return r.value;for(let a=0;a<t.length-1;a++){const n=t[a],o=t[a+1];if(e>=n.time&&e<=o.time){const s=o.time-n.time||1;let c=(e-n.time)/s;return(o.easing==="smooth"||n.easing==="smooth")&&(c=In(c)),gi(n.value,o.value,c)}}return i}function ct(t,e,i,r,a,n,o){const s=zs(t.keyframes,e,i,r,o);return Fs(s,n,a)}function Os(t,e,i){const r={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(a=>({...a,params:{...a.params}}))};r.opacity=ct(t,e.id,"layer","opacity",e.opacity,i),r.transform.x=ct(t,e.id,"layer","x",e.transform.x,i),r.transform.y=ct(t,e.id,"layer","y",e.transform.y,i),r.transform.scale=ct(t,e.id,"layer","scale",e.transform.scale,i),r.transform.rotation=ct(t,e.id,"layer","rotation",e.transform.rotation,i);for(const a of Object.keys(r.feedback))r.feedback[a]=ct(t,e.id,"feedback",a,e.feedback[a],i);for(const a of r.effects)for(const[n,o]of Object.entries(a.params))typeof o=="number"&&(a.params[n]=ct(t,e.id,"effect",n,o,i,a.id));return r}function Hs(t,e){const i=t.layers[0]?.id??"";return ct(t,i,"playback","speed",t.playback.speed,e)}const Ls=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function Us(t){return(t.type??"").startsWith("audio/")||Ls.test(t.name)}function Dr(t){return t.sources.find(e=>e.kind==="audio")}let Bt=null,tt=null,At=null;const Pi=new WeakSet;let It=0,Mt=0;function Bi(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(Bt||(Bt=new t,tt=Bt.createAnalyser(),tt.fftSize=256,tt.smoothingTimeConstant=.72,tt.connect(Bt.destination),At=new Uint8Array(tt.frequencyBinCount)),Bt):null}async function Yt(){const t=Bi();t&&t.state==="suspended"&&await t.resume().catch(()=>{})}function Ns(t){const e=Bi();if(!(!e||!tt||Pi.has(t)))try{e.createMediaElementSource(t).connect(tt),Pi.add(t)}catch{Pi.add(t)}}async function Ws(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto";const r=await new Promise((o,s)=>{i.addEventListener("loadedmetadata",()=>o(Number.isFinite(i.duration)?i.duration:0),{once:!0}),i.addEventListener("error",()=>s(new Error(`Audio failed: ${t.name}`)),{once:!0})});Ns(i),await Yt();let a=null;const n=Bi();if(n)try{const o=await t.arrayBuffer();a=await n.decodeAudioData(o.slice(0))}catch{a=null}return{id:Ee("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:r,audio:i,pcm:a,objectUrl:e}}function qs(t,e,i,r){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const a=(r%i+i)%i,n=Math.floor(a*e),o=Math.max(64,Math.floor(e*.046)),s=Math.max(0,Math.min(t.length-1,n)),c=Math.max(s+1,Math.min(t.length,n+o));let l=0;for(let g=s;g<c;g++)l+=t[g]*t[g];const d=Math.min(1,Math.sqrt(l/(c-s))*3.4),u=Math.max(o,Math.floor(e*.09)),y=Math.min(t.length,n+u);let f=0,p=0;for(let g=s;g<y;g+=8)f+=t[g]*t[g],p++;const m=Math.min(1,Math.sqrt(f/Math.max(1,p))*4.2);return{energy:d,bass:m}}function Ds(){if(!tt||!At)return null;tt.getByteFrequencyData(At);let t=0,e=0;const i=At.length,r=Math.max(4,Math.floor(i*.12));for(let a=0;a<i;a++){const n=At[a]/255;t+=n,a<r&&(e+=n)}return{energy:t/i,bass:e/r}}function $s(t,e){let i=0,r=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const n=qs(t.pcm.getChannelData(0),t.pcm.sampleRate,t.pcm.duration,e);i=n.energy,r=n.bass}else if(t?.kind==="audio"){const n=Ds();n&&(i=n.energy,r=n.bass)}const a=t?.kind==="audio"?.28:.18;return It+=(i-It)*a,Mt+=(r-Mt)*Math.min(a,.22),!t&&It<.002&&(It=0),!t&&Mt<.002&&(Mt=0),{energy:It,bass:Mt}}function Ai(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const js=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,Vs=`#version 300 es
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
`,Gs=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Ks=`#version 300 es
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
`,Xs=`#version 300 es
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
`,Zs=`#version 300 es
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
`,Qs=`#version 300 es
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
`,Ys=`#version 300 es
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
${Pr}
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
`,Js=`#version 300 es
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
`,ec=`#version 300 es
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
`,tc=`#version 300 es
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
`,ic=`#version 300 es
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
`,rc=`#version 300 es
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
`,ac=`#version 300 es
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
`,nc=`#version 300 es
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
`,$r=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,vc=`#version 300 es
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
`;class ht extends Error{}function gc(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new ht("WebGL2 is required for Phosphene.");return e}function jr(t,e,i){const r=t.createShader(e);if(!r)throw new ht("Unable to create shader");if(t.shaderSource(r,i),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(r)??"shader compile failed";throw t.deleteShader(r),new ht(a)}return r}class me{gl;prog;uniforms=new Map;constructor(e,i,r=js){this.gl=e;const a=jr(e,e.VERTEX_SHADER,r),n=jr(e,e.FRAGMENT_SHADER,i),o=e.createProgram();if(!o)throw new ht("Unable to create program");if(e.attachShader(o,a),e.attachShader(o,n),e.linkProgram(o),e.deleteShader(a),e.deleteShader(n),!e.getProgramParameter(o,e.LINK_STATUS)){const s=e.getProgramInfoLog(o)??"link failed";throw e.deleteProgram(o),new ht(s)}this.prog=o}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const r=this.loc(e);r&&this.gl.uniform1i(r,i)}f(e,i){const r=this.loc(e);r&&this.gl.uniform1f(r,i)}v2(e,i,r){const a=this.loc(e);a&&this.gl.uniform2f(a,i,r)}v3(e,i,r,a){const n=this.loc(e);n&&this.gl.uniform3f(n,i,r,a)}v4(e,i,r,a,n){const o=this.loc(e);o&&this.gl.uniform4f(o,i,r,a,n)}dispose(){this.gl.deleteProgram(this.prog)}}function Jt(t){const e=t.createTexture();if(!e)throw new ht("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function Vr(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function bc(t,e,i,r){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,r,0,t.RGBA,t.UNSIGNED_BYTE,null)}class yt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new ht("Unable to create framebuffer");this.fbo=i,this.tex=Jt(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,bc(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Ae(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function Ve(t){t.drawArrays(t.TRIANGLES,0,3)}const yc={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},wc={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},Gr={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,lattice:28,tessera:29,phase:30,coil:31,prism:32,heraldry:33,wallpaper:34,giants:35,shower:36};function xc(t){return`${Vs}
${t.extraUniforms??""}
${t.applyGlsl}
${Gs}`}function kc(t,e){return new me(t,xc(e))}function Rt(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const wt=8;function Kr(t,e,i){return new ImageData(t,e,i)}function _c(t,e,i){const r=t.find(n=>n.id===e);if(!r?.options)return Number(i)||0;const a=r.options.findIndex(n=>n.value===i);return a<0?0:a}class Tc{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;fieldsProg=null;textureProg=null;black=null;heraldry=new Qo;heraldryTex=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=gc(e),this.generatorProg=new me(this.gl,Qs)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=wt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new yt(e),this.pong??=new yt(e),this.composite??=new yt(e),this.post??=new yt(e);this.ring.length<wt;)this.ring.push(new yt(e));this.copy??=new me(e,$r),this.blit??=new me(e,Xs),this.compositeProg??=new me(e,Ks),this.feedbackProg??=new me(e,Zs),this.textureProg??=new me(e,vc),this.black||(this.black=Jt(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const r=i[0];if(r.feedback.amount>.001||r.effects.some(n=>n.enabled))return!0;const a=e.sources.find(n=>n.id===r.sourceId);return!!(a&&a.kind!=="generator"&&a.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new me(this.gl,Js),this.stageProg):e===13?(this.sketchProg??=new me(this.gl,ec),this.sketchProg):e===14?(this.feltProg??=new me(this.gl,tc),this.feltProg):e===15?(this.foilProg??=new me(this.gl,ic),this.foilProg):e===16?(this.plushProg??=new me(this.gl,rc),this.plushProg):e===17?(this.yarnProg??=new me(this.gl,ac),this.yarnProg):e===18?(this.sequinProg??=new me(this.gl,nc),this.sequinProg):e===19?(this.quiltProg??=new me(this.gl,oc),this.quiltProg):e===20?(this.corkProg??=new me(this.gl,sc),this.corkProg):e===21?(this.ginghamProg??=new me(this.gl,cc),this.ginghamProg):e===22?(this.sprinkleProg??=new me(this.gl,lc),this.sprinkleProg):e===23?(this.velvetProg??=new me(this.gl,fc),this.velvetProg):e===24?(this.confettiProg??=new me(this.gl,dc),this.confettiProg):e===25?(this.discoProg??=new me(this.gl,uc),this.discoProg):e===26?(this.terrazzoProg??=new me(this.gl,hc),this.terrazzoProg):e===27?(this.comicProg??=new me(this.gl,mc),this.comicProg):e>=28&&e<=32?(this.fieldsProg??=new me(this.gl,pc),this.fieldsProg):(this.generatorFull??=new me(this.gl,Ys),this.generatorFull)}compileType(e,i=!1){const r=e!=="dancer"?e:i?"dancer:mini":"dancer",a=this.effectProg.get(r);if(a)return a;const n=e==="dancer"?fs(i):je(e);if(!n)return null;try{const o=kc(this.gl,n);return this.effectProg.set(r,o),o}catch(o){return this.lastError=`${r}: ${o instanceof Error?o.message:String(o)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const r=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(a=>!!a);for(const a of r)a.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new yt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=Jt(this.gl),this.sourceTex.set(e.id,i));const r=e.frozenFrame||e.bitmap||e.video;return r&&Vr(this.gl,i,r),i}blitTo(e,i){const r=this.gl,a=this.copy;a&&(e.bind(),a.use(),Ae(r,0,i),a.i("uTex",0),Ve(r))}drawHeraldry(e,i,r,a,n,o,s){const c=this.gl;this.copy??=new me(c,$r),this.heraldryTex??=Jt(c);const l=this.heraldry.paint({width:o,height:s,time:r,duration:n,seed:a,generator:i.generator,kit:i.collageKit,move:i.collageMove,paper:i.colorA??"#ffffff",ink:i.colorB??"#c41e3a",audio:this.audioEnergy,bass:this.audioBass});if(Vr(c,this.heraldryTex,l),e){this.blitTo(e,this.heraldryTex);return}c.bindFramebuffer(c.FRAMEBUFFER,null),c.viewport(0,0,this.canvas.width,this.canvas.height),this.copy.use(),Ae(c,0,this.heraldryTex),this.copy.i("uTex",0),Ve(c)}drawGenerator(e,i,r,a=77,n=8){if(Oe(i.generator)){this.drawHeraldry(e,i,r,a,n,e.w,e.h);return}const o=this.gl,s=Gr[i.generator??"plasma"]??0,c=this.genProg(s);e.bind(),c.use(),c.i("uMode",s),c.f("uTime",r);const l=i.colorA?Rt(i.colorA):[.07,.04,.1],d=i.colorB?Rt(i.colorB):[.92,.78,.55];c.v3("uColorA",l[0],l[1],l[2]),c.v3("uColorB",d[0],d[1],d[2]),c.f("uScale",6),c.f("uSeed",a),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Ve(o)}drawTexture(e,i,r){const a=this.gl,n=this.textureProg;n&&(e.bind(),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),n.use(),Ae(a,0,i),n.i("uTex",0),n.v2("uTranslate",r.transform.x,r.transform.y),n.f("uScale",r.transform.scale),n.f("uRotation",r.transform.rotation),n.v2("uFit",1,1),Ve(a))}applyEffect(e,i,r,a,n,o,s,c,l){const d=je(r.typeId),u=this.progFor(r);if(!d||!u){this.blitTo(e,i);return}const y=this.gl;e.bind(),u.use(),Ae(y,0,i),Ae(y,1,c),Ae(y,2,l),u.i("uTex",0),u.i("uFeedback",1),u.i("uHistory",2),u.i("uMask",3),u.v2("uResolution",e.w,e.h),u.v2("uTexel",1/e.w,1/e.h),u.f("uTime",n),u.f("uFrame",o),u.f("uQuality",s==="draft"?0:s==="preview"?1:2),u.f("u_audio",this.audioEnergy),u.f("u_bass",this.audioBass),u.v2("u_translate",a.transform.x,a.transform.y),u.f("u_scale",a.transform.scale),u.f("u_rotation",a.transform.rotation);const f=a.mask;u.i("u_maskType",wc[f.type]??0),u.i("u_maskInvert",f.invert?1:0),u.f("u_maskSoftness",f.softness),u.v4("u_maskRect",f.rect.x,f.rect.y,f.rect.w,f.rect.h),u.v2("u_maskCenter",f.center.x,f.center.y),u.f("u_maskRadius",f.radius),u.f("u_maskGradientAngle",f.gradientAngle),u.f("u_maskNoiseScale",f.noiseScale);let p=1;for(const m of d.params){const g=r.params[m.id]??m.default,b=`u_${m.id}`;if(m.kind==="color"&&typeof g=="string"){const[w,k,S]=Rt(g);u.v3(b,w,k,S)}else m.kind==="bool"?u.f(b,g?1:0):m.kind==="enum"?u.f(b,_c(d.params,m.id,g)):u.f(b,Number(g));m.id==="mix"&&(p=Number(g))}u.f("u_mix",p),Ve(y)}drawLite(e,i){const r=this.gl,a=e.layers.find(u=>u.enabled)??e.layers[0],n=a?e.sources.find(u=>u.id===a.sourceId):null,o=n&&n.kind!=="audio"?n:{generator:"plasma"};if(Oe(o.generator)){this.drawHeraldry(null,o,i,e.seed,e.duration,this.canvas.width,this.canvas.height);return}r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.canvas.width,this.canvas.height);const s=Gr[o.generator??"plasma"]??0,c=this.genProg(s);c.use(),c.i("uMode",s),c.f("uTime",i);const l=o.colorA?Rt(o.colorA):[.07,.04,.1],d=o.colorB?Rt(o.colorB):[.92,.78,.55];c.v3("uColorA",l[0],l[1],l[2]),c.v3("uColorB",d[0],d[1],d[2]),c.f("uScale",6),c.f("uSeed",e.seed),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Ve(r)}render(e,i,r){const a=this.gl,n=r?.quality??e.quality,o=$s(Dr(e),i);if(this.audioEnergy=o.energy,this.audioBass=o.bass,n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const s=this.ping,c=this.pong,l=this.composite,d=this.post,u=this.blit,y=this.compositeProg,f=this.feedbackProg,p=n==="draft"?.5:1,m=Math.max(16,Math.floor((r?.width??this.canvas.width)*p)),g=Math.max(16,Math.floor((r?.height??this.canvas.height)*p));this.ensureSize(m,g),l.bind(),a.clearColor(.02,.02,.03,1),a.clear(a.COLOR_BUFFER_BIT);const b=e.globalFeedback,w=Math.max(0,Math.min(wt-1,Math.round(b.delay))),k=(this.ringIndex-1-w+wt*8)%wt,S=this.ring[k].tex,C=Math.floor(i*e.fps);for(const O of e.layers){if(!O.enabled)continue;const A=Os(e,O,i),L=e.sources.find(_=>_.id===A.sourceId)??null;if(!L||L.kind==="generator"||L.kind==="audio"){const _=L&&L.kind!=="audio"?L:{generator:"plasma"};this.drawGenerator(s,_,i,e.seed,e.duration)}else{const _=this.uploadSource(L);this.drawTexture(s,_,A)}let I=s,j=c;const Q=this.histFor(A.id);for(const _ of A.effects){if(!_.enabled)continue;this.applyEffect(j,I.tex,_,A,i,C,n,S,Q.tex);const z=I;I=j,j=z}if(A.feedback.amount>.001){j.bind(),f.use(),Ae(a,0,I.tex),Ae(a,1,Q.tex),f.i("uTex",0),f.i("uFeedback",1),f.f("uAmount",A.feedback.amount),f.f("uOpacity",A.feedback.opacity),f.f("uScale",A.feedback.scale),f.f("uRotation",A.feedback.rotation),f.f("uDistortion",A.feedback.distortion),f.f("uTime",i),Ve(a);const _=I;I=j,j=_}this.blitTo(d,l.tex),l.bind(),y.use(),Ae(a,0,d.tex),Ae(a,1,I.tex),y.i("uBase",0),y.i("uLayer",1),y.f("uOpacity",A.opacity),y.i("uBlend",yc[A.blendMode]??0),y.v2("uResolution",m,g),Ve(a),this.blitTo(Q,I.tex)}b.amount>.001&&(d.bind(),f.use(),Ae(a,0,l.tex),Ae(a,1,S),f.i("uTex",0),f.i("uFeedback",1),f.f("uAmount",b.amount),f.f("uOpacity",b.opacity),f.f("uScale",b.scale),f.f("uRotation",b.rotation),f.f("uDistortion",b.distortion),f.f("uTime",i),Ve(a),this.blitTo(l,d.tex)),this.blitTo(this.ring[this.ringIndex],l.tex),this.ringIndex=(this.ringIndex+1)%wt,a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),u.use(),Ae(a,0,l.tex),u.i("uTex",0),u.f("uVignette",r?.vignette??.25),Ve(a)}capture(e,i,r,a,n="image/png",o=.92){const s=this.paintFrame(e,i,r,a);return new Promise((c,l)=>{s.toBlob(d=>{d?c(d):l(new Error("Export failed"))},n,o)})}paintFrame(e,i,r,a,n){const o=n??document.createElement("canvas");o.width!==r&&(o.width=r),o.height!==a&&(o.height=a);const s=o.getContext("2d",{alpha:!1});if(!s)throw new Error("No 2d context");this.render(e,i,{width:r,height:a,quality:"export",vignette:0}),this.gl.finish();const c=this.readPixels(this.width,this.height);if(this.width===r&&this.height===a)s.putImageData(Kr(c,r,a),0,0);else{const l=document.createElement("canvas");l.width=this.width,l.height=this.height,l.getContext("2d")?.putImageData(Kr(c,this.width,this.height),0,0),s.drawImage(l,0,0,r,a)}return o}readPixels(e,i){const r=this.gl,a=new Uint8Array(e*i*4);r.bindFramebuffer(r.FRAMEBUFFER,this.composite.fbo),r.readPixels(0,0,e,i,r.RGBA,r.UNSIGNED_BYTE,a),r.bindFramebuffer(r.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(a.length)),o=e*4;for(let s=0;s<i;s++)n.set(a.subarray((i-1-s)*o,(i-s)*o),s*o);return n}}const Sc=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Cc=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function Ec(t){return t.type.startsWith("video/")||Cc.test(t.name)}function Pc(t){return t.type.startsWith("image/")||Sc.test(t.name)}async function Bc(t){if(Ec(t))return Ic(t);if(Pc(t))return Zr(t);if(Us(t))return Ws(t);throw new Error(`Unsupported media: ${t.name}`)}async function Xr(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Zr(i)}async function Zr(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Ee("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await Ac(e);return{id:Ee("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function Ac(t){return new Promise((e,i)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>i(new Error("Image failed to load")),r.src=t})}function Ic(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((r,a)=>{const n=()=>{r({id:Ee("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>a(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function Mc(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Ee("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function Qr(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function Rc(t,e,i){if(t.kind!=="video"||!t.video)return;const r=t.video,a=r.duration;if(!Number.isFinite(a)||a<=0)return;const n=(e%a+a)%a,o=!!i?.playing&&!i?.freeze,s=(i?.mode??"forward")==="forward",c=i?.speed??1,l=o&&s&&c>.92&&c<1.08,d=Math.abs(r.currentTime-n);if(!o){if(r.paused||r.pause(),d>1/30)try{r.currentTime=n}catch{}return}if(l){if(r.playbackRate!==1&&(r.playbackRate=1),r.paused&&r.play().catch(()=>{}),d>.35)try{r.currentTime=n}catch{}return}r.paused||r.pause();const u=Math.max(.25,Math.min(4,Math.abs(c)||1));if(r.playbackRate!==u&&(r.playbackRate=u),d>1/30)try{r.currentTime=n}catch{}}const zc=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ti(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ii={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Yr;function Oc(){return Yr||(Yr=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(r,a,n){function o(l,d){if(!a[l]){if(!r[l]){var u=typeof ti=="function"&&ti;if(!d&&u)return u(l,!0);if(s)return s(l,!0);var y=new Error("Cannot find module '"+l+"'");throw y.code="MODULE_NOT_FOUND",y}var f=a[l]={exports:{}};r[l][0].call(f.exports,function(p){var m=r[l][1][p];return o(m||p)},f,f.exports,i,r,a,n)}return a[l].exports}for(var s=typeof ti=="function"&&ti,c=0;c<n.length;c++)o(n[c]);return o})({1:[function(i,r,a){var n=i("./utils"),o=i("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(c){for(var l,d,u,y,f,p,m,g=[],b=0,w=c.length,k=w,S=n.getTypeOf(c)!=="string";b<c.length;)k=w-b,u=S?(l=c[b++],d=b<w?c[b++]:0,b<w?c[b++]:0):(l=c.charCodeAt(b++),d=b<w?c.charCodeAt(b++):0,b<w?c.charCodeAt(b++):0),y=l>>2,f=(3&l)<<4|d>>4,p=1<k?(15&d)<<2|u>>6:64,m=2<k?63&u:64,g.push(s.charAt(y)+s.charAt(f)+s.charAt(p)+s.charAt(m));return g.join("")},a.decode=function(c){var l,d,u,y,f,p,m=0,g=0,b="data:";if(c.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var w,k=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===s.charAt(64)&&k--,c.charAt(c.length-2)===s.charAt(64)&&k--,k%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=o.uint8array?new Uint8Array(0|k):new Array(0|k);m<c.length;)l=s.indexOf(c.charAt(m++))<<2|(y=s.indexOf(c.charAt(m++)))>>4,d=(15&y)<<4|(f=s.indexOf(c.charAt(m++)))>>2,u=(3&f)<<6|(p=s.indexOf(c.charAt(m++))),w[g++]=l,f!==64&&(w[g++]=d),p!==64&&(w[g++]=u);return w}},{"./support":30,"./utils":32}],2:[function(i,r,a){var n=i("./external"),o=i("./stream/DataWorker"),s=i("./stream/Crc32Probe"),c=i("./stream/DataLengthProbe");function l(d,u,y,f,p){this.compressedSize=d,this.uncompressedSize=u,this.crc32=y,this.compression=f,this.compressedContent=p}l.prototype={getContentWorker:function(){var d=new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(d,u,y){return d.pipe(new s).pipe(new c("uncompressedSize")).pipe(u.compressWorker(y)).pipe(new c("compressedSize")).withStreamInfo("compression",u)},r.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,a){var n=i("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},a.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,a){var n=i("./utils"),o=(function(){for(var s,c=[],l=0;l<256;l++){s=l;for(var d=0;d<8;d++)s=1&s?3988292384^s>>>1:s>>>1;c[l]=s}return c})();r.exports=function(s,c){return s!==void 0&&s.length?n.getTypeOf(s)!=="string"?(function(l,d,u,y){var f=o,p=y+u;l^=-1;for(var m=y;m<p;m++)l=l>>>8^f[255&(l^d[m])];return-1^l})(0|c,s,s.length,0):(function(l,d,u,y){var f=o,p=y+u;l^=-1;for(var m=y;m<p;m++)l=l>>>8^f[255&(l^d.charCodeAt(m))];return-1^l})(0|c,s,s.length,0):0}},{"./utils":32}],5:[function(i,r,a){a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(i,r,a){var n=null;n=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:n}},{lie:37}],7:[function(i,r,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=i("pako"),s=i("./utils"),c=i("./stream/GenericWorker"),l=n?"uint8array":"array";function d(u,y){c.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=y,this.meta={}}a.magic="\b\0",s.inherits(d,c),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(l,u.data),!1)},d.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(y){u.push({data:y,meta:u.meta})}},a.compressWorker=function(u){return new d("Deflate",u)},a.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,a){function n(f,p){var m,g="";for(m=0;m<p;m++)g+=String.fromCharCode(255&f),f>>>=8;return g}function o(f,p,m,g,b,w){var k,S,C=f.file,O=f.compression,A=w!==l.utf8encode,L=s.transformTo("string",w(C.name)),I=s.transformTo("string",l.utf8encode(C.name)),j=C.comment,Q=s.transformTo("string",w(j)),_=s.transformTo("string",l.utf8encode(j)),z=I.length!==C.name.length,v=_.length!==j.length,H="",ee="",W="",oe=C.dir,V=C.date,ne={crc32:0,compressedSize:0,uncompressedSize:0};p&&!m||(ne.crc32=f.crc32,ne.compressedSize=f.compressedSize,ne.uncompressedSize=f.uncompressedSize);var R=0;p&&(R|=8),A||!z&&!v||(R|=2048);var M=0,ae=0;oe&&(M|=16),b==="UNIX"?(ae=798,M|=(function(Z,ye){var Ce=Z;return Z||(Ce=ye?16893:33204),(65535&Ce)<<16})(C.unixPermissions,oe)):(ae=20,M|=(function(Z){return 63&(Z||0)})(C.dosPermissions)),k=V.getUTCHours(),k<<=6,k|=V.getUTCMinutes(),k<<=5,k|=V.getUTCSeconds()/2,S=V.getUTCFullYear()-1980,S<<=4,S|=V.getUTCMonth()+1,S<<=5,S|=V.getUTCDate(),z&&(ee=n(1,1)+n(d(L),4)+I,H+="up"+n(ee.length,2)+ee),v&&(W=n(1,1)+n(d(Q),4)+_,H+="uc"+n(W.length,2)+W);var Y="";return Y+=`
\0`,Y+=n(R,2),Y+=O.magic,Y+=n(k,2),Y+=n(S,2),Y+=n(ne.crc32,4),Y+=n(ne.compressedSize,4),Y+=n(ne.uncompressedSize,4),Y+=n(L.length,2),Y+=n(H.length,2),{fileRecord:u.LOCAL_FILE_HEADER+Y+L+H,dirRecord:u.CENTRAL_FILE_HEADER+n(ae,2)+Y+n(Q.length,2)+"\0\0\0\0"+n(M,4)+n(g,4)+L+H+Q}}var s=i("../utils"),c=i("../stream/GenericWorker"),l=i("../utf8"),d=i("../crc32"),u=i("../signature");function y(f,p,m,g){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=p,this.zipPlatform=m,this.encodeFileName=g,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(y,c),y.prototype.push=function(f){var p=f.meta.percent||0,m=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,c.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:m?(p+100*(m-g-1))/m:100}}))},y.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var p=this.streamFiles&&!f.file.dir;if(p){var m=o(f,p,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(f){this.accumulate=!1;var p=this.streamFiles&&!f.file.dir,m=o(f,p,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),p)this.push({data:(function(g){return u.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var f=this.bytesWritten,p=0;p<this.dirRecords.length;p++)this.push({data:this.dirRecords[p],meta:{percent:100}});var m=this.bytesWritten-f,g=(function(b,w,k,S,C){var O=s.transformTo("string",C(S));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(b,2)+n(b,2)+n(w,4)+n(k,4)+n(O.length,2)+O})(this.dirRecords.length,m,f,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(f){this._sources.push(f);var p=this;return f.on("data",function(m){p.processChunk(m)}),f.on("end",function(){p.closedSource(p.previous.streamInfo),p._sources.length?p.prepareNextSource():p.end()}),f.on("error",function(m){p.error(m)}),this},y.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(f){var p=this._sources;if(!c.prototype.error.call(this,f))return!1;for(var m=0;m<p.length;m++)try{p[m].error(f)}catch{}return!0},y.prototype.lock=function(){c.prototype.lock.call(this);for(var f=this._sources,p=0;p<f.length;p++)f[p].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,a){var n=i("../compressions"),o=i("./ZipFileWorker");a.generateWorker=function(s,c,l){var d=new o(c.streamFiles,l,c.platform,c.encodeFileName),u=0;try{s.forEach(function(y,f){u++;var p=(function(w,k){var S=w||k,C=n[S];if(!C)throw new Error(S+" is not a valid compression method !");return C})(f.options.compression,c.compression),m=f.options.compressionOptions||c.compressionOptions||{},g=f.dir,b=f.date;f._compressWorker(p,m).withStreamInfo("file",{name:y,dir:g,date:b,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=u}catch(y){d.error(y)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,a){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new n;for(var s in this)typeof this[s]!="function"&&(o[s]=this[s]);return o}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(o,s){return new n().loadAsync(o,s)},n.external=i("./external"),r.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,a){var n=i("./utils"),o=i("./external"),s=i("./utf8"),c=i("./zipEntries"),l=i("./stream/Crc32Probe"),d=i("./nodejsUtils");function u(y){return new o.Promise(function(f,p){var m=y.decompressed.getContentWorker().pipe(new l);m.on("error",function(g){p(g)}).on("end",function(){m.streamInfo.crc32!==y.decompressed.crc32?p(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}r.exports=function(y,f){var p=this;return f=n.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),d.isNode&&d.isStream(y)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",y,!0,f.optimizedBinaryString,f.base64).then(function(m){var g=new c(f);return g.load(m),g}).then(function(m){var g=[o.Promise.resolve(m)],b=m.files;if(f.checkCRC32)for(var w=0;w<b.length;w++)g.push(u(b[w]));return o.Promise.all(g)}).then(function(m){for(var g=m.shift(),b=g.files,w=0;w<b.length;w++){var k=b[w],S=k.fileNameStr,C=n.resolve(k.fileNameStr);p.file(C,k.decompressed,{binary:!0,optimizedBinaryString:!0,date:k.date,dir:k.dir,comment:k.fileCommentStr.length?k.fileCommentStr:null,unixPermissions:k.unixPermissions,dosPermissions:k.dosPermissions,createFolders:f.createFolders}),k.dir||(p.file(C).unsafeOriginalName=S)}return g.zipComment.length&&(p.comment=g.zipComment),p})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,a){var n=i("../utils"),o=i("../stream/GenericWorker");function s(c,l){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}n.inherits(s,o),s.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(d){l.push({data:d,meta:{percent:0}})}).on("error",function(d){l.isPaused?this.generatedError=d:l.error(d)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},s.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,a){var n=i("readable-stream").Readable;function o(s,c,l){n.call(this,c),this._helper=s;var d=this;s.on("data",function(u,y){d.push(u)||d._helper.pause(),l&&l(y)}).on("error",function(u){d.emit("error",u)}).on("end",function(){d.push(null)})}i("../utils").inherits(o,n),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(i,r,a){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,o);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,o)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var o=new Buffer(n);return o.fill(0),o},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,r,a){function n(C,O,A){var L,I=s.getTypeOf(O),j=s.extend(A||{},d);j.date=j.date||new Date,j.compression!==null&&(j.compression=j.compression.toUpperCase()),typeof j.unixPermissions=="string"&&(j.unixPermissions=parseInt(j.unixPermissions,8)),j.unixPermissions&&16384&j.unixPermissions&&(j.dir=!0),j.dosPermissions&&16&j.dosPermissions&&(j.dir=!0),j.dir&&(C=b(C)),j.createFolders&&(L=g(C))&&w.call(this,L,!0);var Q=I==="string"&&j.binary===!1&&j.base64===!1;A&&A.binary!==void 0||(j.binary=!Q),(O instanceof u&&O.uncompressedSize===0||j.dir||!O||O.length===0)&&(j.base64=!1,j.binary=!0,O="",j.compression="STORE",I="string");var _=null;_=O instanceof u||O instanceof c?O:p.isNode&&p.isStream(O)?new m(C,O):s.prepareContent(C,O,j.binary,j.optimizedBinaryString,j.base64);var z=new y(C,_,j);this.files[C]=z}var o=i("./utf8"),s=i("./utils"),c=i("./stream/GenericWorker"),l=i("./stream/StreamHelper"),d=i("./defaults"),u=i("./compressedObject"),y=i("./zipObject"),f=i("./generate"),p=i("./nodejsUtils"),m=i("./nodejs/NodejsStreamInputAdapter"),g=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var O=C.lastIndexOf("/");return 0<O?C.substring(0,O):""},b=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},w=function(C,O){return O=O!==void 0?O:d.createFolders,C=b(C),this.files[C]||n.call(this,C,null,{dir:!0,createFolders:O}),this.files[C]};function k(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var O,A,L;for(O in this.files)L=this.files[O],(A=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&C(A,L)},filter:function(C){var O=[];return this.forEach(function(A,L){C(A,L)&&O.push(L)}),O},file:function(C,O,A){if(arguments.length!==1)return C=this.root+C,n.call(this,C,O,A),this;if(k(C)){var L=C;return this.filter(function(j,Q){return!Q.dir&&L.test(j)})}var I=this.files[this.root+C];return I&&!I.dir?I:null},folder:function(C){if(!C)return this;if(k(C))return this.filter(function(I,j){return j.dir&&C.test(I)});var O=this.root+C,A=w.call(this,O),L=this.clone();return L.root=A.name,L},remove:function(C){C=this.root+C;var O=this.files[C];if(O||(C.slice(-1)!=="/"&&(C+="/"),O=this.files[C]),O&&!O.dir)delete this.files[C];else for(var A=this.filter(function(I,j){return j.name.slice(0,C.length)===C}),L=0;L<A.length;L++)delete this.files[A[L].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var O,A={};try{if((A=s.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");s.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var L=A.comment||this.comment||"";O=f.generateWorker(this,A,L)}catch(I){(O=new c("error")).error(I)}return new l(O,A.type||"string",A.mimeType)},generateAsync:function(C,O){return this.generateInternalStream(C).accumulate(O)},generateNodeStream:function(C,O){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(O)}};r.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,a){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,a){var n=i("./DataReader");function o(s){n.call(this,s);for(var c=0;c<this.data.length;c++)s[c]=255&s[c]}i("../utils").inherits(o,n),o.prototype.byteAt=function(s){return this.data[this.zero+s]},o.prototype.lastIndexOfSignature=function(s){for(var c=s.charCodeAt(0),l=s.charCodeAt(1),d=s.charCodeAt(2),u=s.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===c&&this.data[y+1]===l&&this.data[y+2]===d&&this.data[y+3]===u)return y-this.zero;return-1},o.prototype.readAndCheckSignature=function(s){var c=s.charCodeAt(0),l=s.charCodeAt(1),d=s.charCodeAt(2),u=s.charCodeAt(3),y=this.readData(4);return c===y[0]&&l===y[1]&&d===y[2]&&u===y[3]},o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(i,r,a){var n=i("../utils");function o(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var c,l=0;for(this.checkOffset(s),c=this.index+s-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=s,l},readString:function(s){return n.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},r.exports=o},{"../utils":32}],19:[function(i,r,a){var n=i("./Uint8ArrayReader");function o(s){n.call(this,s)}i("../utils").inherits(o,n),o.prototype.readData=function(s){this.checkOffset(s);var c=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,a){var n=i("./DataReader");function o(s){n.call(this,s)}i("../utils").inherits(o,n),o.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},o.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},o.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},o.prototype.readData=function(s){this.checkOffset(s);var c=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(i,r,a){var n=i("./ArrayReader");function o(s){n.call(this,s)}i("../utils").inherits(o,n),o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,c},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,a){var n=i("../utils"),o=i("../support"),s=i("./ArrayReader"),c=i("./StringReader"),l=i("./NodeBufferReader"),d=i("./Uint8ArrayReader");r.exports=function(u){var y=n.getTypeOf(u);return n.checkSupport(y),y!=="string"||o.uint8array?y==="nodebuffer"?new l(u):o.uint8array?new d(n.transformTo("uint8array",u)):new s(n.transformTo("array",u)):new c(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,a){a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,a){var n=i("./GenericWorker"),o=i("../utils");function s(c){n.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(s,n),s.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},r.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,a){var n=i("./GenericWorker"),o=i("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(s,n),s.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},r.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,a){var n=i("../utils"),o=i("./GenericWorker");function s(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(s,o),s.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}o.prototype.processChunk.call(this,c)},r.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,a){var n=i("../utils"),o=i("./GenericWorker");function s(c){o.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(d){l.dataIsReady=!0,l.data=d,l.max=d&&d.length||0,l.type=n.getTypeOf(d),l.isPaused||l._tickAndRepeat()},function(d){l.error(d)})}n.inherits(s,o),s.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,a){function n(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,s){return this._listeners[o].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,s){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,s)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var s=this;return o.on("data",function(c){s.processChunk(c)}),o.on("end",function(){s.end()}),o.on("error",function(c){s.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,s){return this.extraStreamInfo[o]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=n},{}],29:[function(i,r,a){var n=i("../utils"),o=i("./ConvertWorker"),s=i("./GenericWorker"),c=i("../base64"),l=i("../support"),d=i("../external"),u=null;if(l.nodestream)try{u=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(p,m){return new d.Promise(function(g,b){var w=[],k=p._internalType,S=p._outputType,C=p._mimeType;p.on("data",function(O,A){w.push(O),m&&m(A)}).on("error",function(O){w=[],b(O)}).on("end",function(){try{var O=(function(A,L,I){switch(A){case"blob":return n.newBlob(n.transformTo("arraybuffer",L),I);case"base64":return c.encode(L);default:return n.transformTo(A,L)}})(S,(function(A,L){var I,j=0,Q=null,_=0;for(I=0;I<L.length;I++)_+=L[I].length;switch(A){case"string":return L.join("");case"array":return Array.prototype.concat.apply([],L);case"uint8array":for(Q=new Uint8Array(_),I=0;I<L.length;I++)Q.set(L[I],j),j+=L[I].length;return Q;case"nodebuffer":return Buffer.concat(L);default:throw new Error("concat : unsupported type '"+A+"'")}})(k,w),C);g(O)}catch(A){b(A)}w=[]}).resume()})}function f(p,m,g){var b=m;switch(m){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=m,this._mimeType=g,n.checkSupport(b),this._worker=p.pipe(new o(b)),p.lock()}catch(w){this._worker=new s("error"),this._worker.error(w)}}f.prototype={accumulate:function(p){return y(this,p)},on:function(p,m){var g=this;return p==="data"?this._worker.on(p,function(b){m.call(g,b.data,b.meta)}):this._worker.on(p,function(){n.delay(m,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(p){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},p)}},r.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,a){if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var n=new ArrayBuffer(0);try{a.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(n),a.blob=o.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!i("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,a){for(var n=i("./utils"),o=i("./support"),s=i("./nodejsUtils"),c=i("./stream/GenericWorker"),l=new Array(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;l[254]=l[254]=1;function u(){c.call(this,"utf-8 decode"),this.leftOver=null}function y(){c.call(this,"utf-8 encode")}a.utf8encode=function(f){return o.nodebuffer?s.newBufferFrom(f,"utf-8"):(function(p){var m,g,b,w,k,S=p.length,C=0;for(w=0;w<S;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<S&&(64512&(b=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(b-56320),w++),C+=g<128?1:g<2048?2:g<65536?3:4;for(m=o.uint8array?new Uint8Array(C):new Array(C),w=k=0;k<C;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<S&&(64512&(b=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(b-56320),w++),g<128?m[k++]=g:(g<2048?m[k++]=192|g>>>6:(g<65536?m[k++]=224|g>>>12:(m[k++]=240|g>>>18,m[k++]=128|g>>>12&63),m[k++]=128|g>>>6&63),m[k++]=128|63&g);return m})(f)},a.utf8decode=function(f){return o.nodebuffer?n.transformTo("nodebuffer",f).toString("utf-8"):(function(p){var m,g,b,w,k=p.length,S=new Array(2*k);for(m=g=0;m<k;)if((b=p[m++])<128)S[g++]=b;else if(4<(w=l[b]))S[g++]=65533,m+=w-1;else{for(b&=w===2?31:w===3?15:7;1<w&&m<k;)b=b<<6|63&p[m++],w--;1<w?S[g++]=65533:b<65536?S[g++]=b:(b-=65536,S[g++]=55296|b>>10&1023,S[g++]=56320|1023&b)}return S.length!==g&&(S.subarray?S=S.subarray(0,g):S.length=g),n.applyFromCharCode(S)})(f=n.transformTo(o.uint8array?"uint8array":"array",f))},n.inherits(u,c),u.prototype.processChunk=function(f){var p=n.transformTo(o.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var m=p;(p=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),p.set(m,this.leftOver.length)}else p=this.leftOver.concat(p);this.leftOver=null}var g=(function(w,k){var S;for((k=k||w.length)>w.length&&(k=w.length),S=k-1;0<=S&&(192&w[S])==128;)S--;return S<0||S===0?k:S+l[w[S]]>k?S:k})(p),b=p;g!==p.length&&(o.uint8array?(b=p.subarray(0,g),this.leftOver=p.subarray(g,p.length)):(b=p.slice(0,g),this.leftOver=p.slice(g,p.length))),this.push({data:a.utf8decode(b),meta:f.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=u,n.inherits(y,c),y.prototype.processChunk=function(f){this.push({data:a.utf8encode(f.data),meta:f.meta})},a.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,a){var n=i("./support"),o=i("./base64"),s=i("./nodejsUtils"),c=i("./external");function l(m){return m}function d(m,g){for(var b=0;b<m.length;++b)g[b]=255&m.charCodeAt(b);return g}i("setimmediate"),a.newBlob=function(m,g){a.checkSupport("blob");try{return new Blob([m],{type:g})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(m),b.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(m,g,b){var w=[],k=0,S=m.length;if(S<=b)return String.fromCharCode.apply(null,m);for(;k<S;)g==="array"||g==="nodebuffer"?w.push(String.fromCharCode.apply(null,m.slice(k,Math.min(k+b,S)))):w.push(String.fromCharCode.apply(null,m.subarray(k,Math.min(k+b,S)))),k+=b;return w.join("")},stringifyByChar:function(m){for(var g="",b=0;b<m.length;b++)g+=String.fromCharCode(m[b]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function y(m){var g=65536,b=a.getTypeOf(m),w=!0;if(b==="uint8array"?w=u.applyCanBeUsed.uint8array:b==="nodebuffer"&&(w=u.applyCanBeUsed.nodebuffer),w)for(;1<g;)try{return u.stringifyByChunk(m,b,g)}catch{g=Math.floor(g/2)}return u.stringifyByChar(m)}function f(m,g){for(var b=0;b<m.length;b++)g[b]=m[b];return g}a.applyFromCharCode=y;var p={};p.string={string:l,array:function(m){return d(m,new Array(m.length))},arraybuffer:function(m){return p.string.uint8array(m).buffer},uint8array:function(m){return d(m,new Uint8Array(m.length))},nodebuffer:function(m){return d(m,s.allocBuffer(m.length))}},p.array={string:y,array:l,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return s.newBufferFrom(m)}},p.arraybuffer={string:function(m){return y(new Uint8Array(m))},array:function(m){return f(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:l,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return s.newBufferFrom(new Uint8Array(m))}},p.uint8array={string:y,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:l,nodebuffer:function(m){return s.newBufferFrom(m)}},p.nodebuffer={string:y,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return p.nodebuffer.uint8array(m).buffer},uint8array:function(m){return f(m,new Uint8Array(m.length))},nodebuffer:l},a.transformTo=function(m,g){if(g=g||"",!m)return g;a.checkSupport(m);var b=a.getTypeOf(g);return p[b][m](g)},a.resolve=function(m){for(var g=m.split("/"),b=[],w=0;w<g.length;w++){var k=g[w];k==="."||k===""&&w!==0&&w!==g.length-1||(k===".."?b.pop():b.push(k))}return b.join("/")},a.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":n.nodebuffer&&s.isBuffer(m)?"nodebuffer":n.uint8array&&m instanceof Uint8Array?"uint8array":n.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(m){if(!n[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(m){var g,b,w="";for(b=0;b<(m||"").length;b++)w+="\\x"+((g=m.charCodeAt(b))<16?"0":"")+g.toString(16).toUpperCase();return w},a.delay=function(m,g,b){setImmediate(function(){m.apply(b||null,g||[])})},a.inherits=function(m,g){function b(){}b.prototype=g.prototype,m.prototype=new b},a.extend=function(){var m,g,b={};for(m=0;m<arguments.length;m++)for(g in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],g)&&b[g]===void 0&&(b[g]=arguments[m][g]);return b},a.prepareContent=function(m,g,b,w,k){return c.Promise.resolve(g).then(function(S){return n.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new c.Promise(function(C,O){var A=new FileReader;A.onload=function(L){C(L.target.result)},A.onerror=function(L){O(L.target.error)},A.readAsArrayBuffer(S)}):S}).then(function(S){var C=a.getTypeOf(S);return C?(C==="arraybuffer"?S=a.transformTo("uint8array",S):C==="string"&&(k?S=o.decode(S):b&&w!==!0&&(S=(function(O){return d(O,n.uint8array?new Uint8Array(O.length):new Array(O.length))})(S))),S):c.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,a){var n=i("./reader/readerFor"),o=i("./utils"),s=i("./signature"),c=i("./zipEntry"),l=i("./support");function d(u){this.files=[],this.loadOptions=u}d.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(y)+", expected "+o.pretty(u)+")")}},isSignature:function(u,y){var f=this.reader.index;this.reader.setIndex(u);var p=this.reader.readString(4)===y;return this.reader.setIndex(f),p},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),y=l.uint8array?"uint8array":"array",f=o.transformTo(y,u);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,y,f,p=this.zip64EndOfCentralSize-44;0<p;)u=this.reader.readInt(2),y=this.reader.readInt(4),f=this.reader.readData(y),this.zip64ExtensibleData[u]={id:u,length:y,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,y;for(u=0;u<this.files.length;u++)y=this.files[u],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(u=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var y=u;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var p=y-f;if(0<p)this.isSignature(y,s.CENTRAL_FILE_HEADER)||(this.reader.zero=p);else if(p<0)throw new Error("Corrupted zip: missing "+Math.abs(p)+" bytes.")},prepareReader:function(u){this.reader=n(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,a){var n=i("./reader/readerFor"),o=i("./utils"),s=i("./compressedObject"),c=i("./crc32"),l=i("./utf8"),d=i("./compressions"),u=i("./support");function y(f,p){this.options=f,this.loadOptions=p}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var p,m;if(f.skip(22),this.fileNameLength=f.readInt(2),m=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((p=(function(g){for(var b in d)if(Object.prototype.hasOwnProperty.call(d,b)&&d[b].magic===g)return d[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,p,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var p=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(p),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=n(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var p,m,g,b=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<b;)p=f.readInt(2),m=f.readInt(2),g=f.readData(m),this.extraFields[p]={id:p,length:m,value:g};f.setIndex(b)},handleUTF8:function(){var f=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var p=this.findExtraFieldUnicodePath();if(p!==null)this.fileNameStr=p;else{var m=o.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var b=o.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var p=n(f.value);return p.readInt(1)!==1||c(this.fileName)!==p.readInt(4)?null:l.utf8decode(p.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var p=n(f.value);return p.readInt(1)!==1||c(this.fileComment)!==p.readInt(4)?null:l.utf8decode(p.readData(f.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,a){function n(p,m,g){this.name=p,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=m,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var o=i("./stream/StreamHelper"),s=i("./stream/DataWorker"),c=i("./utf8"),l=i("./compressedObject"),d=i("./stream/GenericWorker");n.prototype={internalStream:function(p){var m=null,g="string";try{if(!p)throw new Error("No output type specified.");var b=(g=p.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),m=this._decompressWorker();var w=!this._dataBinary;w&&!b&&(m=m.pipe(new c.Utf8EncodeWorker)),!w&&b&&(m=m.pipe(new c.Utf8DecodeWorker))}catch(k){(m=new d("error")).error(k)}return new o(m,g,"")},async:function(p,m){return this.internalStream(p).accumulate(m)},nodeStream:function(p,m){return this.internalStream(p||"nodebuffer").toNodejsStream(m)},_compressWorker:function(p,m){if(this._data instanceof l&&this._data.compression.magic===p.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(g,p,m)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof d?this._data:new s(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=y;r.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,a){(function(n){var o,s,c=n.MutationObserver||n.WebKitMutationObserver;if(c){var l=0,d=new c(p),u=n.document.createTextNode("");d.observe(u,{characterData:!0}),o=function(){u.data=l=++l%2}}else if(n.setImmediate||n.MessageChannel===void 0)o="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var m=n.document.createElement("script");m.onreadystatechange=function(){p(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},n.document.documentElement.appendChild(m)}:function(){setTimeout(p,0)};else{var y=new n.MessageChannel;y.port1.onmessage=p,o=function(){y.port2.postMessage(0)}}var f=[];function p(){var m,g;s=!0;for(var b=f.length;b;){for(g=f,f=[],m=-1;++m<b;)g[m]();b=f.length}s=!1}r.exports=function(m){f.push(m)!==1||s||o()}}).call(this,typeof ei<"u"?ei:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,a){var n=i("immediate");function o(){}var s={},c=["REJECTED"],l=["FULFILLED"],d=["PENDING"];function u(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,b!==o&&m(this,b)}function y(b,w,k){this.promise=b,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof k=="function"&&(this.onRejected=k,this.callRejected=this.otherCallRejected)}function f(b,w,k){n(function(){var S;try{S=w(k)}catch(C){return s.reject(b,C)}S===b?s.reject(b,new TypeError("Cannot resolve promise with itself")):s.resolve(b,S)})}function p(b){var w=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof w=="function")return function(){w.apply(b,arguments)}}function m(b,w){var k=!1;function S(A){k||(k=!0,s.reject(b,A))}function C(A){k||(k=!0,s.resolve(b,A))}var O=g(function(){w(C,S)});O.status==="error"&&S(O.value)}function g(b,w){var k={};try{k.value=b(w),k.status="success"}catch(S){k.status="error",k.value=S}return k}(r.exports=u).prototype.finally=function(b){if(typeof b!="function")return this;var w=this.constructor;return this.then(function(k){return w.resolve(b()).then(function(){return k})},function(k){return w.resolve(b()).then(function(){throw k})})},u.prototype.catch=function(b){return this.then(null,b)},u.prototype.then=function(b,w){if(typeof b!="function"&&this.state===l||typeof w!="function"&&this.state===c)return this;var k=new this.constructor(o);return this.state!==d?f(k,this.state===l?b:w,this.outcome):this.queue.push(new y(k,b,w)),k},y.prototype.callFulfilled=function(b){s.resolve(this.promise,b)},y.prototype.otherCallFulfilled=function(b){f(this.promise,this.onFulfilled,b)},y.prototype.callRejected=function(b){s.reject(this.promise,b)},y.prototype.otherCallRejected=function(b){f(this.promise,this.onRejected,b)},s.resolve=function(b,w){var k=g(p,w);if(k.status==="error")return s.reject(b,k.value);var S=k.value;if(S)m(b,S);else{b.state=l,b.outcome=w;for(var C=-1,O=b.queue.length;++C<O;)b.queue[C].callFulfilled(w)}return b},s.reject=function(b,w){b.state=c,b.outcome=w;for(var k=-1,S=b.queue.length;++k<S;)b.queue[k].callRejected(w);return b},u.resolve=function(b){return b instanceof this?b:s.resolve(new this(o),b)},u.reject=function(b){var w=new this(o);return s.reject(w,b)},u.all=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var k=b.length,S=!1;if(!k)return this.resolve([]);for(var C=new Array(k),O=0,A=-1,L=new this(o);++A<k;)I(b[A],A);return L;function I(j,Q){w.resolve(j).then(function(_){C[Q]=_,++O!==k||S||(S=!0,s.resolve(L,C))},function(_){S||(S=!0,s.reject(L,_))})}},u.race=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var k=b.length,S=!1;if(!k)return this.resolve([]);for(var C=-1,O=new this(o);++C<k;)A=b[C],w.resolve(A).then(function(L){S||(S=!0,s.resolve(O,L))},function(L){S||(S=!0,s.reject(O,L))});var A;return O}},{immediate:36}],38:[function(i,r,a){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,a){var n=i("./zlib/deflate"),o=i("./utils/common"),s=i("./utils/strings"),c=i("./zlib/messages"),l=i("./zlib/zstream"),d=Object.prototype.toString,u=0,y=-1,f=0,p=8;function m(b){if(!(this instanceof m))return new m(b);this.options=o.assign({level:y,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},b||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var k=n.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(k!==u)throw new Error(c[k]);if(w.header&&n.deflateSetHeader(this.strm,w.header),w.dictionary){var S;if(S=typeof w.dictionary=="string"?s.string2buf(w.dictionary):d.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(k=n.deflateSetDictionary(this.strm,S))!==u)throw new Error(c[k]);this._dict_set=!0}}function g(b,w){var k=new m(w);if(k.push(b,!0),k.err)throw k.msg||c[k.err];return k.result}m.prototype.push=function(b,w){var k,S,C=this.strm,O=this.options.chunkSize;if(this.ended)return!1;S=w===~~w?w:w===!0?4:0,typeof b=="string"?C.input=s.string2buf(b):d.call(b)==="[object ArrayBuffer]"?C.input=new Uint8Array(b):C.input=b,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(O),C.next_out=0,C.avail_out=O),(k=n.deflate(C,S))!==1&&k!==u)return this.onEnd(k),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&k!==1);return S===4?(k=n.deflateEnd(this.strm),this.onEnd(k),this.ended=!0,k===u):S!==2||(this.onEnd(u),!(C.avail_out=0))},m.prototype.onData=function(b){this.chunks.push(b)},m.prototype.onEnd=function(b){b===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},a.Deflate=m,a.deflate=g,a.deflateRaw=function(b,w){return(w=w||{}).raw=!0,g(b,w)},a.gzip=function(b,w){return(w=w||{}).gzip=!0,g(b,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,a){var n=i("./zlib/inflate"),o=i("./utils/common"),s=i("./utils/strings"),c=i("./zlib/constants"),l=i("./zlib/messages"),d=i("./zlib/zstream"),u=i("./zlib/gzheader"),y=Object.prototype.toString;function f(m){if(!(this instanceof f))return new f(m);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},m||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||m&&m.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var b=n.inflateInit2(this.strm,g.windowBits);if(b!==c.Z_OK)throw new Error(l[b]);this.header=new u,n.inflateGetHeader(this.strm,this.header)}function p(m,g){var b=new f(g);if(b.push(m,!0),b.err)throw b.msg||l[b.err];return b.result}f.prototype.push=function(m,g){var b,w,k,S,C,O,A=this.strm,L=this.options.chunkSize,I=this.options.dictionary,j=!1;if(this.ended)return!1;w=g===~~g?g:g===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof m=="string"?A.input=s.binstring2buf(m):y.call(m)==="[object ArrayBuffer]"?A.input=new Uint8Array(m):A.input=m,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(L),A.next_out=0,A.avail_out=L),(b=n.inflate(A,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&I&&(O=typeof I=="string"?s.string2buf(I):y.call(I)==="[object ArrayBuffer]"?new Uint8Array(I):I,b=n.inflateSetDictionary(this.strm,O)),b===c.Z_BUF_ERROR&&j===!0&&(b=c.Z_OK,j=!1),b!==c.Z_STREAM_END&&b!==c.Z_OK)return this.onEnd(b),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&b!==c.Z_STREAM_END&&(A.avail_in!==0||w!==c.Z_FINISH&&w!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(k=s.utf8border(A.output,A.next_out),S=A.next_out-k,C=s.buf2string(A.output,k),A.next_out=S,A.avail_out=L-S,S&&o.arraySet(A.output,A.output,k,S,0),this.onData(C)):this.onData(o.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(j=!0)}while((0<A.avail_in||A.avail_out===0)&&b!==c.Z_STREAM_END);return b===c.Z_STREAM_END&&(w=c.Z_FINISH),w===c.Z_FINISH?(b=n.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===c.Z_OK):w!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(A.avail_out=0))},f.prototype.onData=function(m){this.chunks.push(m)},f.prototype.onEnd=function(m){m===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},a.Inflate=f,a.inflate=p,a.inflateRaw=function(m,g){return(g=g||{}).raw=!0,p(m,g)},a.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var d=l.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var u in d)d.hasOwnProperty(u)&&(c[u]=d[u])}}return c},a.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var o={arraySet:function(c,l,d,u,y){if(l.subarray&&c.subarray)c.set(l.subarray(d,d+u),y);else for(var f=0;f<u;f++)c[y+f]=l[d+f]},flattenChunks:function(c){var l,d,u,y,f,p;for(l=u=0,d=c.length;l<d;l++)u+=c[l].length;for(p=new Uint8Array(u),l=y=0,d=c.length;l<d;l++)f=c[l],p.set(f,y),y+=f.length;return p}},s={arraySet:function(c,l,d,u,y){for(var f=0;f<u;f++)c[y+f]=l[d+f]},flattenChunks:function(c){return[].concat.apply([],c)}};a.setTyped=function(c){c?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,o)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,s))},a.setTyped(n)},{}],42:[function(i,r,a){var n=i("./common"),o=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var c=new n.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function d(u,y){if(y<65537&&(u.subarray&&s||!u.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(u,y));for(var f="",p=0;p<y;p++)f+=String.fromCharCode(u[p]);return f}c[254]=c[254]=1,a.string2buf=function(u){var y,f,p,m,g,b=u.length,w=0;for(m=0;m<b;m++)(64512&(f=u.charCodeAt(m)))==55296&&m+1<b&&(64512&(p=u.charCodeAt(m+1)))==56320&&(f=65536+(f-55296<<10)+(p-56320),m++),w+=f<128?1:f<2048?2:f<65536?3:4;for(y=new n.Buf8(w),m=g=0;g<w;m++)(64512&(f=u.charCodeAt(m)))==55296&&m+1<b&&(64512&(p=u.charCodeAt(m+1)))==56320&&(f=65536+(f-55296<<10)+(p-56320),m++),f<128?y[g++]=f:(f<2048?y[g++]=192|f>>>6:(f<65536?y[g++]=224|f>>>12:(y[g++]=240|f>>>18,y[g++]=128|f>>>12&63),y[g++]=128|f>>>6&63),y[g++]=128|63&f);return y},a.buf2binstring=function(u){return d(u,u.length)},a.binstring2buf=function(u){for(var y=new n.Buf8(u.length),f=0,p=y.length;f<p;f++)y[f]=u.charCodeAt(f);return y},a.buf2string=function(u,y){var f,p,m,g,b=y||u.length,w=new Array(2*b);for(f=p=0;f<b;)if((m=u[f++])<128)w[p++]=m;else if(4<(g=c[m]))w[p++]=65533,f+=g-1;else{for(m&=g===2?31:g===3?15:7;1<g&&f<b;)m=m<<6|63&u[f++],g--;1<g?w[p++]=65533:m<65536?w[p++]=m:(m-=65536,w[p++]=55296|m>>10&1023,w[p++]=56320|1023&m)}return d(w,p)},a.utf8border=function(u,y){var f;for((y=y||u.length)>u.length&&(y=u.length),f=y-1;0<=f&&(192&u[f])==128;)f--;return f<0||f===0?y:f+c[u[f]]>y?f:y}},{"./common":41}],43:[function(i,r,a){r.exports=function(n,o,s,c){for(var l=65535&n|0,d=n>>>16&65535|0,u=0;s!==0;){for(s-=u=2e3<s?2e3:s;d=d+(l=l+o[c++]|0)|0,--u;);l%=65521,d%=65521}return l|d<<16|0}},{}],44:[function(i,r,a){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,a){var n=(function(){for(var o,s=[],c=0;c<256;c++){o=c;for(var l=0;l<8;l++)o=1&o?3988292384^o>>>1:o>>>1;s[c]=o}return s})();r.exports=function(o,s,c,l){var d=n,u=l+c;o^=-1;for(var y=l;y<u;y++)o=o>>>8^d[255&(o^s[y])];return-1^o}},{}],46:[function(i,r,a){var n,o=i("../utils/common"),s=i("./trees"),c=i("./adler32"),l=i("./crc32"),d=i("./messages"),u=0,y=4,f=0,p=-2,m=-1,g=4,b=2,w=8,k=9,S=286,C=30,O=19,A=2*S+1,L=15,I=3,j=258,Q=j+I+1,_=42,z=113,v=1,H=2,ee=3,W=4;function oe(h,U){return h.msg=d[U],U}function V(h){return(h<<1)-(4<h?9:0)}function ne(h){for(var U=h.length;0<=--U;)h[U]=0}function R(h){var U=h.state,F=U.pending;F>h.avail_out&&(F=h.avail_out),F!==0&&(o.arraySet(h.output,U.pending_buf,U.pending_out,F,h.next_out),h.next_out+=F,U.pending_out+=F,h.total_out+=F,h.avail_out-=F,U.pending-=F,U.pending===0&&(U.pending_out=0))}function M(h,U){s._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,U),h.block_start=h.strstart,R(h.strm)}function ae(h,U){h.pending_buf[h.pending++]=U}function Y(h,U){h.pending_buf[h.pending++]=U>>>8&255,h.pending_buf[h.pending++]=255&U}function Z(h,U){var F,T,x=h.max_chain_length,P=h.strstart,q=h.prev_length,D=h.nice_match,B=h.strstart>h.w_size-Q?h.strstart-(h.w_size-Q):0,G=h.window,J=h.w_mask,X=h.prev,re=h.strstart+j,pe=G[P+q-1],fe=G[P+q];h.prev_length>=h.good_match&&(x>>=2),D>h.lookahead&&(D=h.lookahead);do if(G[(F=U)+q]===fe&&G[F+q-1]===pe&&G[F]===G[P]&&G[++F]===G[P+1]){P+=2,F++;do;while(G[++P]===G[++F]&&G[++P]===G[++F]&&G[++P]===G[++F]&&G[++P]===G[++F]&&G[++P]===G[++F]&&G[++P]===G[++F]&&G[++P]===G[++F]&&G[++P]===G[++F]&&P<re);if(T=j-(re-P),P=re-j,q<T){if(h.match_start=U,D<=(q=T))break;pe=G[P+q-1],fe=G[P+q]}}while((U=X[U&J])>B&&--x!=0);return q<=h.lookahead?q:h.lookahead}function ye(h){var U,F,T,x,P,q,D,B,G,J,X=h.w_size;do{if(x=h.window_size-h.lookahead-h.strstart,h.strstart>=X+(X-Q)){for(o.arraySet(h.window,h.window,X,X,0),h.match_start-=X,h.strstart-=X,h.block_start-=X,U=F=h.hash_size;T=h.head[--U],h.head[U]=X<=T?T-X:0,--F;);for(U=F=X;T=h.prev[--U],h.prev[U]=X<=T?T-X:0,--F;);x+=X}if(h.strm.avail_in===0)break;if(q=h.strm,D=h.window,B=h.strstart+h.lookahead,G=x,J=void 0,J=q.avail_in,G<J&&(J=G),F=J===0?0:(q.avail_in-=J,o.arraySet(D,q.input,q.next_in,J,B),q.state.wrap===1?q.adler=c(q.adler,D,J,B):q.state.wrap===2&&(q.adler=l(q.adler,D,J,B)),q.next_in+=J,q.total_in+=J,J),h.lookahead+=F,h.lookahead+h.insert>=I)for(P=h.strstart-h.insert,h.ins_h=h.window[P],h.ins_h=(h.ins_h<<h.hash_shift^h.window[P+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[P+I-1])&h.hash_mask,h.prev[P&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=P,P++,h.insert--,!(h.lookahead+h.insert<I)););}while(h.lookahead<Q&&h.strm.avail_in!==0)}function Ce(h,U){for(var F,T;;){if(h.lookahead<Q){if(ye(h),h.lookahead<Q&&U===u)return v;if(h.lookahead===0)break}if(F=0,h.lookahead>=I&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),F!==0&&h.strstart-F<=h.w_size-Q&&(h.match_length=Z(h,F)),h.match_length>=I)if(T=s._tr_tally(h,h.strstart-h.match_start,h.match_length-I),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=I){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else T=s._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(T&&(M(h,!1),h.strm.avail_out===0))return v}return h.insert=h.strstart<I-1?h.strstart:I-1,U===y?(M(h,!0),h.strm.avail_out===0?ee:W):h.last_lit&&(M(h,!1),h.strm.avail_out===0)?v:H}function le(h,U){for(var F,T,x;;){if(h.lookahead<Q){if(ye(h),h.lookahead<Q&&U===u)return v;if(h.lookahead===0)break}if(F=0,h.lookahead>=I&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=I-1,F!==0&&h.prev_length<h.max_lazy_match&&h.strstart-F<=h.w_size-Q&&(h.match_length=Z(h,F),h.match_length<=5&&(h.strategy===1||h.match_length===I&&4096<h.strstart-h.match_start)&&(h.match_length=I-1)),h.prev_length>=I&&h.match_length<=h.prev_length){for(x=h.strstart+h.lookahead-I,T=s._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-I),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=x&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=I-1,h.strstart++,T&&(M(h,!1),h.strm.avail_out===0))return v}else if(h.match_available){if((T=s._tr_tally(h,0,h.window[h.strstart-1]))&&M(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return v}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(T=s._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<I-1?h.strstart:I-1,U===y?(M(h,!0),h.strm.avail_out===0?ee:W):h.last_lit&&(M(h,!1),h.strm.avail_out===0)?v:H}function de(h,U,F,T,x){this.good_length=h,this.max_lazy=U,this.nice_length=F,this.max_chain=T,this.func=x}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*A),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*O+1)),ne(this.dyn_ltree),ne(this.dyn_dtree),ne(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(L+1),this.heap=new o.Buf16(2*S+1),ne(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*S+1),ne(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function we(h){var U;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=b,(U=h.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?_:z,h.adler=U.wrap===2?0:1,U.last_flush=u,s._tr_init(U),f):oe(h,p)}function Je(h){var U=we(h);return U===f&&(function(F){F.window_size=2*F.w_size,ne(F.head),F.max_lazy_match=n[F.level].max_lazy,F.good_match=n[F.level].good_length,F.nice_match=n[F.level].nice_length,F.max_chain_length=n[F.level].max_chain,F.strstart=0,F.block_start=0,F.lookahead=0,F.insert=0,F.match_length=F.prev_length=I-1,F.match_available=0,F.ins_h=0})(h.state),U}function We(h,U,F,T,x,P){if(!h)return p;var q=1;if(U===m&&(U=6),T<0?(q=0,T=-T):15<T&&(q=2,T-=16),x<1||k<x||F!==w||T<8||15<T||U<0||9<U||P<0||g<P)return oe(h,p);T===8&&(T=9);var D=new Te;return(h.state=D).strm=h,D.wrap=q,D.gzhead=null,D.w_bits=T,D.w_size=1<<D.w_bits,D.w_mask=D.w_size-1,D.hash_bits=x+7,D.hash_size=1<<D.hash_bits,D.hash_mask=D.hash_size-1,D.hash_shift=~~((D.hash_bits+I-1)/I),D.window=new o.Buf8(2*D.w_size),D.head=new o.Buf16(D.hash_size),D.prev=new o.Buf16(D.w_size),D.lit_bufsize=1<<x+6,D.pending_buf_size=4*D.lit_bufsize,D.pending_buf=new o.Buf8(D.pending_buf_size),D.d_buf=1*D.lit_bufsize,D.l_buf=3*D.lit_bufsize,D.level=U,D.strategy=P,D.method=F,Je(h)}n=[new de(0,0,0,0,function(h,U){var F=65535;for(F>h.pending_buf_size-5&&(F=h.pending_buf_size-5);;){if(h.lookahead<=1){if(ye(h),h.lookahead===0&&U===u)return v;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var T=h.block_start+F;if((h.strstart===0||h.strstart>=T)&&(h.lookahead=h.strstart-T,h.strstart=T,M(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-Q&&(M(h,!1),h.strm.avail_out===0))return v}return h.insert=0,U===y?(M(h,!0),h.strm.avail_out===0?ee:W):(h.strstart>h.block_start&&(M(h,!1),h.strm.avail_out),v)}),new de(4,4,8,4,Ce),new de(4,5,16,8,Ce),new de(4,6,32,32,Ce),new de(4,4,16,16,le),new de(8,16,32,32,le),new de(8,16,128,128,le),new de(8,32,128,256,le),new de(32,128,258,1024,le),new de(32,258,258,4096,le)],a.deflateInit=function(h,U){return We(h,U,w,15,8,0)},a.deflateInit2=We,a.deflateReset=Je,a.deflateResetKeep=we,a.deflateSetHeader=function(h,U){return h&&h.state?h.state.wrap!==2?p:(h.state.gzhead=U,f):p},a.deflate=function(h,U){var F,T,x,P;if(!h||!h.state||5<U||U<0)return h?oe(h,p):p;if(T=h.state,!h.output||!h.input&&h.avail_in!==0||T.status===666&&U!==y)return oe(h,h.avail_out===0?-5:p);if(T.strm=h,F=T.last_flush,T.last_flush=U,T.status===_)if(T.wrap===2)h.adler=0,ae(T,31),ae(T,139),ae(T,8),T.gzhead?(ae(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),ae(T,255&T.gzhead.time),ae(T,T.gzhead.time>>8&255),ae(T,T.gzhead.time>>16&255),ae(T,T.gzhead.time>>24&255),ae(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),ae(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(ae(T,255&T.gzhead.extra.length),ae(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(h.adler=l(h.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(ae(T,0),ae(T,0),ae(T,0),ae(T,0),ae(T,0),ae(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),ae(T,3),T.status=z);else{var q=w+(T.w_bits-8<<4)<<8;q|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(q|=32),q+=31-q%31,T.status=z,Y(T,q),T.strstart!==0&&(Y(T,h.adler>>>16),Y(T,65535&h.adler)),h.adler=1}if(T.status===69)if(T.gzhead.extra){for(x=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>x&&(h.adler=l(h.adler,T.pending_buf,T.pending-x,x)),R(h),x=T.pending,T.pending!==T.pending_buf_size));)ae(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>x&&(h.adler=l(h.adler,T.pending_buf,T.pending-x,x)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){x=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>x&&(h.adler=l(h.adler,T.pending_buf,T.pending-x,x)),R(h),x=T.pending,T.pending===T.pending_buf_size)){P=1;break}P=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,ae(T,P)}while(P!==0);T.gzhead.hcrc&&T.pending>x&&(h.adler=l(h.adler,T.pending_buf,T.pending-x,x)),P===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){x=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>x&&(h.adler=l(h.adler,T.pending_buf,T.pending-x,x)),R(h),x=T.pending,T.pending===T.pending_buf_size)){P=1;break}P=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,ae(T,P)}while(P!==0);T.gzhead.hcrc&&T.pending>x&&(h.adler=l(h.adler,T.pending_buf,T.pending-x,x)),P===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&R(h),T.pending+2<=T.pending_buf_size&&(ae(T,255&h.adler),ae(T,h.adler>>8&255),h.adler=0,T.status=z)):T.status=z),T.pending!==0){if(R(h),h.avail_out===0)return T.last_flush=-1,f}else if(h.avail_in===0&&V(U)<=V(F)&&U!==y)return oe(h,-5);if(T.status===666&&h.avail_in!==0)return oe(h,-5);if(h.avail_in!==0||T.lookahead!==0||U!==u&&T.status!==666){var D=T.strategy===2?(function(B,G){for(var J;;){if(B.lookahead===0&&(ye(B),B.lookahead===0)){if(G===u)return v;break}if(B.match_length=0,J=s._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++,J&&(M(B,!1),B.strm.avail_out===0))return v}return B.insert=0,G===y?(M(B,!0),B.strm.avail_out===0?ee:W):B.last_lit&&(M(B,!1),B.strm.avail_out===0)?v:H})(T,U):T.strategy===3?(function(B,G){for(var J,X,re,pe,fe=B.window;;){if(B.lookahead<=j){if(ye(B),B.lookahead<=j&&G===u)return v;if(B.lookahead===0)break}if(B.match_length=0,B.lookahead>=I&&0<B.strstart&&(X=fe[re=B.strstart-1])===fe[++re]&&X===fe[++re]&&X===fe[++re]){pe=B.strstart+j;do;while(X===fe[++re]&&X===fe[++re]&&X===fe[++re]&&X===fe[++re]&&X===fe[++re]&&X===fe[++re]&&X===fe[++re]&&X===fe[++re]&&re<pe);B.match_length=j-(pe-re),B.match_length>B.lookahead&&(B.match_length=B.lookahead)}if(B.match_length>=I?(J=s._tr_tally(B,1,B.match_length-I),B.lookahead-=B.match_length,B.strstart+=B.match_length,B.match_length=0):(J=s._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++),J&&(M(B,!1),B.strm.avail_out===0))return v}return B.insert=0,G===y?(M(B,!0),B.strm.avail_out===0?ee:W):B.last_lit&&(M(B,!1),B.strm.avail_out===0)?v:H})(T,U):n[T.level].func(T,U);if(D!==ee&&D!==W||(T.status=666),D===v||D===ee)return h.avail_out===0&&(T.last_flush=-1),f;if(D===H&&(U===1?s._tr_align(T):U!==5&&(s._tr_stored_block(T,0,0,!1),U===3&&(ne(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),R(h),h.avail_out===0))return T.last_flush=-1,f}return U!==y?f:T.wrap<=0?1:(T.wrap===2?(ae(T,255&h.adler),ae(T,h.adler>>8&255),ae(T,h.adler>>16&255),ae(T,h.adler>>24&255),ae(T,255&h.total_in),ae(T,h.total_in>>8&255),ae(T,h.total_in>>16&255),ae(T,h.total_in>>24&255)):(Y(T,h.adler>>>16),Y(T,65535&h.adler)),R(h),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?f:1)},a.deflateEnd=function(h){var U;return h&&h.state?(U=h.state.status)!==_&&U!==69&&U!==73&&U!==91&&U!==103&&U!==z&&U!==666?oe(h,p):(h.state=null,U===z?oe(h,-3):f):p},a.deflateSetDictionary=function(h,U){var F,T,x,P,q,D,B,G,J=U.length;if(!h||!h.state||(P=(F=h.state).wrap)===2||P===1&&F.status!==_||F.lookahead)return p;for(P===1&&(h.adler=c(h.adler,U,J,0)),F.wrap=0,J>=F.w_size&&(P===0&&(ne(F.head),F.strstart=0,F.block_start=0,F.insert=0),G=new o.Buf8(F.w_size),o.arraySet(G,U,J-F.w_size,F.w_size,0),U=G,J=F.w_size),q=h.avail_in,D=h.next_in,B=h.input,h.avail_in=J,h.next_in=0,h.input=U,ye(F);F.lookahead>=I;){for(T=F.strstart,x=F.lookahead-(I-1);F.ins_h=(F.ins_h<<F.hash_shift^F.window[T+I-1])&F.hash_mask,F.prev[T&F.w_mask]=F.head[F.ins_h],F.head[F.ins_h]=T,T++,--x;);F.strstart=T,F.lookahead=I-1,ye(F)}return F.strstart+=F.lookahead,F.block_start=F.strstart,F.insert=F.lookahead,F.lookahead=0,F.match_length=F.prev_length=I-1,F.match_available=0,h.next_in=D,h.input=B,h.avail_in=q,F.wrap=P,f},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,a){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,a){r.exports=function(n,o){var s,c,l,d,u,y,f,p,m,g,b,w,k,S,C,O,A,L,I,j,Q,_,z,v,H;s=n.state,c=n.next_in,v=n.input,l=c+(n.avail_in-5),d=n.next_out,H=n.output,u=d-(o-n.avail_out),y=d+(n.avail_out-257),f=s.dmax,p=s.wsize,m=s.whave,g=s.wnext,b=s.window,w=s.hold,k=s.bits,S=s.lencode,C=s.distcode,O=(1<<s.lenbits)-1,A=(1<<s.distbits)-1;e:do{k<15&&(w+=v[c++]<<k,k+=8,w+=v[c++]<<k,k+=8),L=S[w&O];t:for(;;){if(w>>>=I=L>>>24,k-=I,(I=L>>>16&255)===0)H[d++]=65535&L;else{if(!(16&I)){if((64&I)==0){L=S[(65535&L)+(w&(1<<I)-1)];continue t}if(32&I){s.mode=12;break e}n.msg="invalid literal/length code",s.mode=30;break e}j=65535&L,(I&=15)&&(k<I&&(w+=v[c++]<<k,k+=8),j+=w&(1<<I)-1,w>>>=I,k-=I),k<15&&(w+=v[c++]<<k,k+=8,w+=v[c++]<<k,k+=8),L=C[w&A];i:for(;;){if(w>>>=I=L>>>24,k-=I,!(16&(I=L>>>16&255))){if((64&I)==0){L=C[(65535&L)+(w&(1<<I)-1)];continue i}n.msg="invalid distance code",s.mode=30;break e}if(Q=65535&L,k<(I&=15)&&(w+=v[c++]<<k,(k+=8)<I&&(w+=v[c++]<<k,k+=8)),f<(Q+=w&(1<<I)-1)){n.msg="invalid distance too far back",s.mode=30;break e}if(w>>>=I,k-=I,(I=d-u)<Q){if(m<(I=Q-I)&&s.sane){n.msg="invalid distance too far back",s.mode=30;break e}if(z=b,(_=0)===g){if(_+=p-I,I<j){for(j-=I;H[d++]=b[_++],--I;);_=d-Q,z=H}}else if(g<I){if(_+=p+g-I,(I-=g)<j){for(j-=I;H[d++]=b[_++],--I;);if(_=0,g<j){for(j-=I=g;H[d++]=b[_++],--I;);_=d-Q,z=H}}}else if(_+=g-I,I<j){for(j-=I;H[d++]=b[_++],--I;);_=d-Q,z=H}for(;2<j;)H[d++]=z[_++],H[d++]=z[_++],H[d++]=z[_++],j-=3;j&&(H[d++]=z[_++],1<j&&(H[d++]=z[_++]))}else{for(_=d-Q;H[d++]=H[_++],H[d++]=H[_++],H[d++]=H[_++],2<(j-=3););j&&(H[d++]=H[_++],1<j&&(H[d++]=H[_++]))}break}}break}}while(c<l&&d<y);c-=j=k>>3,w&=(1<<(k-=j<<3))-1,n.next_in=c,n.next_out=d,n.avail_in=c<l?l-c+5:5-(c-l),n.avail_out=d<y?y-d+257:257-(d-y),s.hold=w,s.bits=k}},{}],49:[function(i,r,a){var n=i("../utils/common"),o=i("./adler32"),s=i("./crc32"),c=i("./inffast"),l=i("./inftrees"),d=1,u=2,y=0,f=-2,p=1,m=852,g=592;function b(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function k(_){var z;return _&&_.state?(z=_.state,_.total_in=_.total_out=z.total=0,_.msg="",z.wrap&&(_.adler=1&z.wrap),z.mode=p,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new n.Buf32(m),z.distcode=z.distdyn=new n.Buf32(g),z.sane=1,z.back=-1,y):f}function S(_){var z;return _&&_.state?((z=_.state).wsize=0,z.whave=0,z.wnext=0,k(_)):f}function C(_,z){var v,H;return _&&_.state?(H=_.state,z<0?(v=0,z=-z):(v=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?f:(H.window!==null&&H.wbits!==z&&(H.window=null),H.wrap=v,H.wbits=z,S(_))):f}function O(_,z){var v,H;return _?(H=new w,(_.state=H).window=null,(v=C(_,z))!==y&&(_.state=null),v):f}var A,L,I=!0;function j(_){if(I){var z;for(A=new n.Buf32(512),L=new n.Buf32(32),z=0;z<144;)_.lens[z++]=8;for(;z<256;)_.lens[z++]=9;for(;z<280;)_.lens[z++]=7;for(;z<288;)_.lens[z++]=8;for(l(d,_.lens,0,288,A,0,_.work,{bits:9}),z=0;z<32;)_.lens[z++]=5;l(u,_.lens,0,32,L,0,_.work,{bits:5}),I=!1}_.lencode=A,_.lenbits=9,_.distcode=L,_.distbits=5}function Q(_,z,v,H){var ee,W=_.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new n.Buf8(W.wsize)),H>=W.wsize?(n.arraySet(W.window,z,v-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(H<(ee=W.wsize-W.wnext)&&(ee=H),n.arraySet(W.window,z,v-H,ee,W.wnext),(H-=ee)?(n.arraySet(W.window,z,v-H,H,0),W.wnext=H,W.whave=W.wsize):(W.wnext+=ee,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=ee))),0}a.inflateReset=S,a.inflateReset2=C,a.inflateResetKeep=k,a.inflateInit=function(_){return O(_,15)},a.inflateInit2=O,a.inflate=function(_,z){var v,H,ee,W,oe,V,ne,R,M,ae,Y,Z,ye,Ce,le,de,Te,we,Je,We,h,U,F,T,x=0,P=new n.Buf8(4),q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return f;(v=_.state).mode===12&&(v.mode=13),oe=_.next_out,ee=_.output,ne=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,R=v.hold,M=v.bits,ae=V,Y=ne,U=y;e:for(;;)switch(v.mode){case p:if(v.wrap===0){v.mode=13;break}for(;M<16;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(2&v.wrap&&R===35615){P[v.check=0]=255&R,P[1]=R>>>8&255,v.check=s(v.check,P,2,0),M=R=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&R)<<8)+(R>>8))%31){_.msg="incorrect header check",v.mode=30;break}if((15&R)!=8){_.msg="unknown compression method",v.mode=30;break}if(M-=4,h=8+(15&(R>>>=4)),v.wbits===0)v.wbits=h;else if(h>v.wbits){_.msg="invalid window size",v.mode=30;break}v.dmax=1<<h,_.adler=v.check=1,v.mode=512&R?10:12,M=R=0;break;case 2:for(;M<16;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(v.flags=R,(255&v.flags)!=8){_.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){_.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=R>>8&1),512&v.flags&&(P[0]=255&R,P[1]=R>>>8&255,v.check=s(v.check,P,2,0)),M=R=0,v.mode=3;case 3:for(;M<32;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}v.head&&(v.head.time=R),512&v.flags&&(P[0]=255&R,P[1]=R>>>8&255,P[2]=R>>>16&255,P[3]=R>>>24&255,v.check=s(v.check,P,4,0)),M=R=0,v.mode=4;case 4:for(;M<16;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}v.head&&(v.head.xflags=255&R,v.head.os=R>>8),512&v.flags&&(P[0]=255&R,P[1]=R>>>8&255,v.check=s(v.check,P,2,0)),M=R=0,v.mode=5;case 5:if(1024&v.flags){for(;M<16;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}v.length=R,v.head&&(v.head.extra_len=R),512&v.flags&&(P[0]=255&R,P[1]=R>>>8&255,v.check=s(v.check,P,2,0)),M=R=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(V<(Z=v.length)&&(Z=V),Z&&(v.head&&(h=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),n.arraySet(v.head.extra,H,W,Z,h)),512&v.flags&&(v.check=s(v.check,H,Z,W)),V-=Z,W+=Z,v.length-=Z),v.length))break e;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(V===0)break e;for(Z=0;h=H[W+Z++],v.head&&h&&v.length<65536&&(v.head.name+=String.fromCharCode(h)),h&&Z<V;);if(512&v.flags&&(v.check=s(v.check,H,Z,W)),V-=Z,W+=Z,h)break e}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(V===0)break e;for(Z=0;h=H[W+Z++],v.head&&h&&v.length<65536&&(v.head.comment+=String.fromCharCode(h)),h&&Z<V;);if(512&v.flags&&(v.check=s(v.check,H,Z,W)),V-=Z,W+=Z,h)break e}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;M<16;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(R!==(65535&v.check)){_.msg="header crc mismatch",v.mode=30;break}M=R=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),_.adler=v.check=0,v.mode=12;break;case 10:for(;M<32;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}_.adler=v.check=b(R),M=R=0,v.mode=11;case 11:if(v.havedict===0)return _.next_out=oe,_.avail_out=ne,_.next_in=W,_.avail_in=V,v.hold=R,v.bits=M,2;_.adler=v.check=1,v.mode=12;case 12:if(z===5||z===6)break e;case 13:if(v.last){R>>>=7&M,M-=7&M,v.mode=27;break}for(;M<3;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}switch(v.last=1&R,M-=1,3&(R>>>=1)){case 0:v.mode=14;break;case 1:if(j(v),v.mode=20,z!==6)break;R>>>=2,M-=2;break e;case 2:v.mode=17;break;case 3:_.msg="invalid block type",v.mode=30}R>>>=2,M-=2;break;case 14:for(R>>>=7&M,M-=7&M;M<32;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if((65535&R)!=(R>>>16^65535)){_.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&R,M=R=0,v.mode=15,z===6)break e;case 15:v.mode=16;case 16:if(Z=v.length){if(V<Z&&(Z=V),ne<Z&&(Z=ne),Z===0)break e;n.arraySet(ee,H,W,Z,oe),V-=Z,W+=Z,ne-=Z,oe+=Z,v.length-=Z;break}v.mode=12;break;case 17:for(;M<14;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(v.nlen=257+(31&R),R>>>=5,M-=5,v.ndist=1+(31&R),R>>>=5,M-=5,v.ncode=4+(15&R),R>>>=4,M-=4,286<v.nlen||30<v.ndist){_.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;M<3;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}v.lens[q[v.have++]]=7&R,R>>>=3,M-=3}for(;v.have<19;)v.lens[q[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,F={bits:v.lenbits},U=l(0,v.lens,0,19,v.lencode,0,v.work,F),v.lenbits=F.bits,U){_.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;de=(x=v.lencode[R&(1<<v.lenbits)-1])>>>16&255,Te=65535&x,!((le=x>>>24)<=M);){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(Te<16)R>>>=le,M-=le,v.lens[v.have++]=Te;else{if(Te===16){for(T=le+2;M<T;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(R>>>=le,M-=le,v.have===0){_.msg="invalid bit length repeat",v.mode=30;break}h=v.lens[v.have-1],Z=3+(3&R),R>>>=2,M-=2}else if(Te===17){for(T=le+3;M<T;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}M-=le,h=0,Z=3+(7&(R>>>=le)),R>>>=3,M-=3}else{for(T=le+7;M<T;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}M-=le,h=0,Z=11+(127&(R>>>=le)),R>>>=7,M-=7}if(v.have+Z>v.nlen+v.ndist){_.msg="invalid bit length repeat",v.mode=30;break}for(;Z--;)v.lens[v.have++]=h}}if(v.mode===30)break;if(v.lens[256]===0){_.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,F={bits:v.lenbits},U=l(d,v.lens,0,v.nlen,v.lencode,0,v.work,F),v.lenbits=F.bits,U){_.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,F={bits:v.distbits},U=l(u,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,F),v.distbits=F.bits,U){_.msg="invalid distances set",v.mode=30;break}if(v.mode=20,z===6)break e;case 20:v.mode=21;case 21:if(6<=V&&258<=ne){_.next_out=oe,_.avail_out=ne,_.next_in=W,_.avail_in=V,v.hold=R,v.bits=M,c(_,Y),oe=_.next_out,ee=_.output,ne=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,R=v.hold,M=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;de=(x=v.lencode[R&(1<<v.lenbits)-1])>>>16&255,Te=65535&x,!((le=x>>>24)<=M);){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(de&&(240&de)==0){for(we=le,Je=de,We=Te;de=(x=v.lencode[We+((R&(1<<we+Je)-1)>>we)])>>>16&255,Te=65535&x,!(we+(le=x>>>24)<=M);){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}R>>>=we,M-=we,v.back+=we}if(R>>>=le,M-=le,v.back+=le,v.length=Te,de===0){v.mode=26;break}if(32&de){v.back=-1,v.mode=12;break}if(64&de){_.msg="invalid literal/length code",v.mode=30;break}v.extra=15&de,v.mode=22;case 22:if(v.extra){for(T=v.extra;M<T;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}v.length+=R&(1<<v.extra)-1,R>>>=v.extra,M-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;de=(x=v.distcode[R&(1<<v.distbits)-1])>>>16&255,Te=65535&x,!((le=x>>>24)<=M);){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if((240&de)==0){for(we=le,Je=de,We=Te;de=(x=v.distcode[We+((R&(1<<we+Je)-1)>>we)])>>>16&255,Te=65535&x,!(we+(le=x>>>24)<=M);){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}R>>>=we,M-=we,v.back+=we}if(R>>>=le,M-=le,v.back+=le,64&de){_.msg="invalid distance code",v.mode=30;break}v.offset=Te,v.extra=15&de,v.mode=24;case 24:if(v.extra){for(T=v.extra;M<T;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}v.offset+=R&(1<<v.extra)-1,R>>>=v.extra,M-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){_.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(ne===0)break e;if(Z=Y-ne,v.offset>Z){if((Z=v.offset-Z)>v.whave&&v.sane){_.msg="invalid distance too far back",v.mode=30;break}ye=Z>v.wnext?(Z-=v.wnext,v.wsize-Z):v.wnext-Z,Z>v.length&&(Z=v.length),Ce=v.window}else Ce=ee,ye=oe-v.offset,Z=v.length;for(ne<Z&&(Z=ne),ne-=Z,v.length-=Z;ee[oe++]=Ce[ye++],--Z;);v.length===0&&(v.mode=21);break;case 26:if(ne===0)break e;ee[oe++]=v.length,ne--,v.mode=21;break;case 27:if(v.wrap){for(;M<32;){if(V===0)break e;V--,R|=H[W++]<<M,M+=8}if(Y-=ne,_.total_out+=Y,v.total+=Y,Y&&(_.adler=v.check=v.flags?s(v.check,ee,Y,oe-Y):o(v.check,ee,Y,oe-Y)),Y=ne,(v.flags?R:b(R))!==v.check){_.msg="incorrect data check",v.mode=30;break}M=R=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;M<32;){if(V===0)break e;V--,R+=H[W++]<<M,M+=8}if(R!==(4294967295&v.total)){_.msg="incorrect length check",v.mode=30;break}M=R=0}v.mode=29;case 29:U=1;break e;case 30:U=-3;break e;case 31:return-4;case 32:default:return f}return _.next_out=oe,_.avail_out=ne,_.next_in=W,_.avail_in=V,v.hold=R,v.bits=M,(v.wsize||Y!==_.avail_out&&v.mode<30&&(v.mode<27||z!==4))&&Q(_,_.output,_.next_out,Y-_.avail_out)?(v.mode=31,-4):(ae-=_.avail_in,Y-=_.avail_out,_.total_in+=ae,_.total_out+=Y,v.total+=Y,v.wrap&&Y&&(_.adler=v.check=v.flags?s(v.check,ee,Y,_.next_out-Y):o(v.check,ee,Y,_.next_out-Y)),_.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(ae==0&&Y===0||z===4)&&U===y&&(U=-5),U)},a.inflateEnd=function(_){if(!_||!_.state)return f;var z=_.state;return z.window&&(z.window=null),_.state=null,y},a.inflateGetHeader=function(_,z){var v;return _&&_.state?(2&(v=_.state).wrap)==0?f:((v.head=z).done=!1,y):f},a.inflateSetDictionary=function(_,z){var v,H=z.length;return _&&_.state?(v=_.state).wrap!==0&&v.mode!==11?f:v.mode===11&&o(1,z,H,0)!==v.check?-3:Q(_,z,H,H)?(v.mode=31,-4):(v.havedict=1,y):f},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,a){var n=i("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(d,u,y,f,p,m,g,b){var w,k,S,C,O,A,L,I,j,Q=b.bits,_=0,z=0,v=0,H=0,ee=0,W=0,oe=0,V=0,ne=0,R=0,M=null,ae=0,Y=new n.Buf16(16),Z=new n.Buf16(16),ye=null,Ce=0;for(_=0;_<=15;_++)Y[_]=0;for(z=0;z<f;z++)Y[u[y+z]]++;for(ee=Q,H=15;1<=H&&Y[H]===0;H--);if(H<ee&&(ee=H),H===0)return p[m++]=20971520,p[m++]=20971520,b.bits=1,0;for(v=1;v<H&&Y[v]===0;v++);for(ee<v&&(ee=v),_=V=1;_<=15;_++)if(V<<=1,(V-=Y[_])<0)return-1;if(0<V&&(d===0||H!==1))return-1;for(Z[1]=0,_=1;_<15;_++)Z[_+1]=Z[_]+Y[_];for(z=0;z<f;z++)u[y+z]!==0&&(g[Z[u[y+z]]++]=z);if(A=d===0?(M=ye=g,19):d===1?(M=o,ae-=257,ye=s,Ce-=257,256):(M=c,ye=l,-1),_=v,O=m,oe=z=R=0,S=-1,C=(ne=1<<(W=ee))-1,d===1&&852<ne||d===2&&592<ne)return 1;for(;;){for(L=_-oe,j=g[z]<A?(I=0,g[z]):g[z]>A?(I=ye[Ce+g[z]],M[ae+g[z]]):(I=96,0),w=1<<_-oe,v=k=1<<W;p[O+(R>>oe)+(k-=w)]=L<<24|I<<16|j|0,k!==0;);for(w=1<<_-1;R&w;)w>>=1;if(w!==0?(R&=w-1,R+=w):R=0,z++,--Y[_]==0){if(_===H)break;_=u[y+g[z]]}if(ee<_&&(R&C)!==S){for(oe===0&&(oe=ee),O+=v,V=1<<(W=_-oe);W+oe<H&&!((V-=Y[W+oe])<=0);)W++,V<<=1;if(ne+=1<<W,d===1&&852<ne||d===2&&592<ne)return 1;p[S=R&C]=ee<<24|W<<16|O-m|0}}return R!==0&&(p[O+R]=_-oe<<24|64<<16|0),b.bits=ee,0}},{"../utils/common":41}],51:[function(i,r,a){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,a){var n=i("../utils/common"),o=0,s=1;function c(x){for(var P=x.length;0<=--P;)x[P]=0}var l=0,d=29,u=256,y=u+1+d,f=30,p=19,m=2*y+1,g=15,b=16,w=7,k=256,S=16,C=17,O=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(y+2));c(Q);var _=new Array(2*f);c(_);var z=new Array(512);c(z);var v=new Array(256);c(v);var H=new Array(d);c(H);var ee,W,oe,V=new Array(f);function ne(x,P,q,D,B){this.static_tree=x,this.extra_bits=P,this.extra_base=q,this.elems=D,this.max_length=B,this.has_stree=x&&x.length}function R(x,P){this.dyn_tree=x,this.max_code=0,this.stat_desc=P}function M(x){return x<256?z[x]:z[256+(x>>>7)]}function ae(x,P){x.pending_buf[x.pending++]=255&P,x.pending_buf[x.pending++]=P>>>8&255}function Y(x,P,q){x.bi_valid>b-q?(x.bi_buf|=P<<x.bi_valid&65535,ae(x,x.bi_buf),x.bi_buf=P>>b-x.bi_valid,x.bi_valid+=q-b):(x.bi_buf|=P<<x.bi_valid&65535,x.bi_valid+=q)}function Z(x,P,q){Y(x,q[2*P],q[2*P+1])}function ye(x,P){for(var q=0;q|=1&x,x>>>=1,q<<=1,0<--P;);return q>>>1}function Ce(x,P,q){var D,B,G=new Array(g+1),J=0;for(D=1;D<=g;D++)G[D]=J=J+q[D-1]<<1;for(B=0;B<=P;B++){var X=x[2*B+1];X!==0&&(x[2*B]=ye(G[X]++,X))}}function le(x){var P;for(P=0;P<y;P++)x.dyn_ltree[2*P]=0;for(P=0;P<f;P++)x.dyn_dtree[2*P]=0;for(P=0;P<p;P++)x.bl_tree[2*P]=0;x.dyn_ltree[2*k]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function de(x){8<x.bi_valid?ae(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Te(x,P,q,D){var B=2*P,G=2*q;return x[B]<x[G]||x[B]===x[G]&&D[P]<=D[q]}function we(x,P,q){for(var D=x.heap[q],B=q<<1;B<=x.heap_len&&(B<x.heap_len&&Te(P,x.heap[B+1],x.heap[B],x.depth)&&B++,!Te(P,D,x.heap[B],x.depth));)x.heap[q]=x.heap[B],q=B,B<<=1;x.heap[q]=D}function Je(x,P,q){var D,B,G,J,X=0;if(x.last_lit!==0)for(;D=x.pending_buf[x.d_buf+2*X]<<8|x.pending_buf[x.d_buf+2*X+1],B=x.pending_buf[x.l_buf+X],X++,D===0?Z(x,B,P):(Z(x,(G=v[B])+u+1,P),(J=A[G])!==0&&Y(x,B-=H[G],J),Z(x,G=M(--D),q),(J=L[G])!==0&&Y(x,D-=V[G],J)),X<x.last_lit;);Z(x,k,P)}function We(x,P){var q,D,B,G=P.dyn_tree,J=P.stat_desc.static_tree,X=P.stat_desc.has_stree,re=P.stat_desc.elems,pe=-1;for(x.heap_len=0,x.heap_max=m,q=0;q<re;q++)G[2*q]!==0?(x.heap[++x.heap_len]=pe=q,x.depth[q]=0):G[2*q+1]=0;for(;x.heap_len<2;)G[2*(B=x.heap[++x.heap_len]=pe<2?++pe:0)]=1,x.depth[B]=0,x.opt_len--,X&&(x.static_len-=J[2*B+1]);for(P.max_code=pe,q=x.heap_len>>1;1<=q;q--)we(x,G,q);for(B=re;q=x.heap[1],x.heap[1]=x.heap[x.heap_len--],we(x,G,1),D=x.heap[1],x.heap[--x.heap_max]=q,x.heap[--x.heap_max]=D,G[2*B]=G[2*q]+G[2*D],x.depth[B]=(x.depth[q]>=x.depth[D]?x.depth[q]:x.depth[D])+1,G[2*q+1]=G[2*D+1]=B,x.heap[1]=B++,we(x,G,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(fe,Fe){var Gt,et,Kt,xe,pi,vr,st=Fe.dyn_tree,Bn=Fe.max_code,i0=Fe.stat_desc.static_tree,r0=Fe.stat_desc.has_stree,a0=Fe.stat_desc.extra_bits,An=Fe.stat_desc.extra_base,Xt=Fe.stat_desc.max_length,vi=0;for(xe=0;xe<=g;xe++)fe.bl_count[xe]=0;for(st[2*fe.heap[fe.heap_max]+1]=0,Gt=fe.heap_max+1;Gt<m;Gt++)Xt<(xe=st[2*st[2*(et=fe.heap[Gt])+1]+1]+1)&&(xe=Xt,vi++),st[2*et+1]=xe,Bn<et||(fe.bl_count[xe]++,pi=0,An<=et&&(pi=a0[et-An]),vr=st[2*et],fe.opt_len+=vr*(xe+pi),r0&&(fe.static_len+=vr*(i0[2*et+1]+pi)));if(vi!==0){do{for(xe=Xt-1;fe.bl_count[xe]===0;)xe--;fe.bl_count[xe]--,fe.bl_count[xe+1]+=2,fe.bl_count[Xt]--,vi-=2}while(0<vi);for(xe=Xt;xe!==0;xe--)for(et=fe.bl_count[xe];et!==0;)Bn<(Kt=fe.heap[--Gt])||(st[2*Kt+1]!==xe&&(fe.opt_len+=(xe-st[2*Kt+1])*st[2*Kt],st[2*Kt+1]=xe),et--)}})(x,P),Ce(G,pe,x.bl_count)}function h(x,P,q){var D,B,G=-1,J=P[1],X=0,re=7,pe=4;for(J===0&&(re=138,pe=3),P[2*(q+1)+1]=65535,D=0;D<=q;D++)B=J,J=P[2*(D+1)+1],++X<re&&B===J||(X<pe?x.bl_tree[2*B]+=X:B!==0?(B!==G&&x.bl_tree[2*B]++,x.bl_tree[2*S]++):X<=10?x.bl_tree[2*C]++:x.bl_tree[2*O]++,G=B,pe=(X=0)===J?(re=138,3):B===J?(re=6,3):(re=7,4))}function U(x,P,q){var D,B,G=-1,J=P[1],X=0,re=7,pe=4;for(J===0&&(re=138,pe=3),D=0;D<=q;D++)if(B=J,J=P[2*(D+1)+1],!(++X<re&&B===J)){if(X<pe)for(;Z(x,B,x.bl_tree),--X!=0;);else B!==0?(B!==G&&(Z(x,B,x.bl_tree),X--),Z(x,S,x.bl_tree),Y(x,X-3,2)):X<=10?(Z(x,C,x.bl_tree),Y(x,X-3,3)):(Z(x,O,x.bl_tree),Y(x,X-11,7));G=B,pe=(X=0)===J?(re=138,3):B===J?(re=6,3):(re=7,4)}}c(V);var F=!1;function T(x,P,q,D){Y(x,(l<<1)+(D?1:0),3),(function(B,G,J,X){de(B),ae(B,J),ae(B,~J),n.arraySet(B.pending_buf,B.window,G,J,B.pending),B.pending+=J})(x,P,q)}a._tr_init=function(x){F||((function(){var P,q,D,B,G,J=new Array(g+1);for(B=D=0;B<d-1;B++)for(H[B]=D,P=0;P<1<<A[B];P++)v[D++]=B;for(v[D-1]=B,B=G=0;B<16;B++)for(V[B]=G,P=0;P<1<<L[B];P++)z[G++]=B;for(G>>=7;B<f;B++)for(V[B]=G<<7,P=0;P<1<<L[B]-7;P++)z[256+G++]=B;for(q=0;q<=g;q++)J[q]=0;for(P=0;P<=143;)Q[2*P+1]=8,P++,J[8]++;for(;P<=255;)Q[2*P+1]=9,P++,J[9]++;for(;P<=279;)Q[2*P+1]=7,P++,J[7]++;for(;P<=287;)Q[2*P+1]=8,P++,J[8]++;for(Ce(Q,y+1,J),P=0;P<f;P++)_[2*P+1]=5,_[2*P]=ye(P,5);ee=new ne(Q,A,u+1,y,g),W=new ne(_,L,0,f,g),oe=new ne(new Array(0),I,0,p,w)})(),F=!0),x.l_desc=new R(x.dyn_ltree,ee),x.d_desc=new R(x.dyn_dtree,W),x.bl_desc=new R(x.bl_tree,oe),x.bi_buf=0,x.bi_valid=0,le(x)},a._tr_stored_block=T,a._tr_flush_block=function(x,P,q,D){var B,G,J=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(X){var re,pe=4093624447;for(re=0;re<=31;re++,pe>>>=1)if(1&pe&&X.dyn_ltree[2*re]!==0)return o;if(X.dyn_ltree[18]!==0||X.dyn_ltree[20]!==0||X.dyn_ltree[26]!==0)return s;for(re=32;re<u;re++)if(X.dyn_ltree[2*re]!==0)return s;return o})(x)),We(x,x.l_desc),We(x,x.d_desc),J=(function(X){var re;for(h(X,X.dyn_ltree,X.l_desc.max_code),h(X,X.dyn_dtree,X.d_desc.max_code),We(X,X.bl_desc),re=p-1;3<=re&&X.bl_tree[2*j[re]+1]===0;re--);return X.opt_len+=3*(re+1)+5+5+4,re})(x),B=x.opt_len+3+7>>>3,(G=x.static_len+3+7>>>3)<=B&&(B=G)):B=G=q+5,q+4<=B&&P!==-1?T(x,P,q,D):x.strategy===4||G===B?(Y(x,2+(D?1:0),3),Je(x,Q,_)):(Y(x,4+(D?1:0),3),(function(X,re,pe,fe){var Fe;for(Y(X,re-257,5),Y(X,pe-1,5),Y(X,fe-4,4),Fe=0;Fe<fe;Fe++)Y(X,X.bl_tree[2*j[Fe]+1],3);U(X,X.dyn_ltree,re-1),U(X,X.dyn_dtree,pe-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,J+1),Je(x,x.dyn_ltree,x.dyn_dtree)),le(x),D&&de(x)},a._tr_tally=function(x,P,q){return x.pending_buf[x.d_buf+2*x.last_lit]=P>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&P,x.pending_buf[x.l_buf+x.last_lit]=255&q,x.last_lit++,P===0?x.dyn_ltree[2*q]++:(x.matches++,P--,x.dyn_ltree[2*(v[q]+u+1)]++,x.dyn_dtree[2*M(P)]++),x.last_lit===x.lit_bufsize-1},a._tr_align=function(x){Y(x,2,3),Z(x,k,Q),(function(P){P.bi_valid===16?(ae(P,P.bi_buf),P.bi_buf=0,P.bi_valid=0):8<=P.bi_valid&&(P.pending_buf[P.pending++]=255&P.bi_buf,P.bi_buf>>=8,P.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,r,a){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,a){(function(n){(function(o,s){if(!o.setImmediate){var c,l,d,u,y=1,f={},p=!1,m=o.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(o);g=g&&g.setTimeout?g:o,c={}.toString.call(o.process)==="[object process]"?function(S){process.nextTick(function(){w(S)})}:(function(){if(o.postMessage&&!o.importScripts){var S=!0,C=o.onmessage;return o.onmessage=function(){S=!1},o.postMessage("","*"),o.onmessage=C,S}})()?(u="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",k,!1):o.attachEvent("onmessage",k),function(S){o.postMessage(u+S,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(S){w(S.data)},function(S){d.port2.postMessage(S)}):m&&"onreadystatechange"in m.createElement("script")?(l=m.documentElement,function(S){var C=m.createElement("script");C.onreadystatechange=function(){w(S),C.onreadystatechange=null,l.removeChild(C),C=null},l.appendChild(C)}):function(S){setTimeout(w,0,S)},g.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var C=new Array(arguments.length-1),O=0;O<C.length;O++)C[O]=arguments[O+1];var A={callback:S,args:C};return f[y]=A,c(y),y++},g.clearImmediate=b}function b(S){delete f[S]}function w(S){if(p)setTimeout(w,0,S);else{var C=f[S];if(C){p=!0;try{(function(O){var A=O.callback,L=O.args;switch(L.length){case 0:A();break;case 1:A(L[0]);break;case 2:A(L[0],L[1]);break;case 3:A(L[0],L[1],L[2]);break;default:A.apply(s,L)}})(C)}finally{b(S),p=!1}}}}function k(S){S.source===o&&typeof S.data=="string"&&S.data.indexOf(u)===0&&w(+S.data.slice(u.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof ei<"u"?ei:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ii)),Ii.exports}var Hc=Oc();const Lc=Fc(Hc);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function N(t){if(!t)throw new Error("Assertion failed.")}const Uc=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ge=t=>t&&t[t.length-1],lt=t=>t>=0&&t<2**32,K=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},it=t=>{const e=K(t);return(e&1)===0?-(e>>1):e+1>>1},He=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),ii=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),Ke=new TextEncoder,ri={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},ai={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},ni={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Nc=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,Mi=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Jr{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(a=>{let n=!1;e=()=>{n||(a(),this.pending--,n=!0)}}),r=this.currentPromise;return this.currentPromise=i,this.pending++,await r,e}}const ea=(t,e,i)=>{let r=0,a=t.length-1,n=-1;for(;r<=a;){const o=r+(a-r+1)/2|0;i(t[o])<=e?(n=o,r=o+1):a=o-1}return n},ta=()=>{let t,e;return{promise:new Promise((r,a)=>{t=r,e=a}),resolve:t,reject:e}},xt=t=>{throw new Error(`Unexpected value: ${t}`)},Wc=(t,e,i)=>{const r=t.getUint8(e),a=t.getUint8(e+1),n=t.getUint8(e+2);return r<<16|a<<8|n},qc=(t,e,i,r)=>{i=i>>>0,i=i&16777215,t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255)},ia=(t,e,i)=>Math.max(e,Math.min(i,t)),Dc=(t,e,i)=>t+(e-t)*i,$c="und",ra=(t,e)=>Math.round(t/e)*e,aa=(t,e)=>Math.floor(t*e)/e,jc=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},Vc=/^[a-z]{3}$/,Gc=t=>Vc.test(t),kt=1e6*(1+Number.EPSILON),Kc=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let r=0,a=1,n=1,o=0,s=t;for(;;){const c=Math.floor(s),l=c*n+r,d=c*o+a;if(d>e)return{num:i*n,den:o};if(r=n,a=o,n=l,o=d,s=1/(s-c),!isFinite(s))break}return{num:i*n,den:o}};class Xc{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Ri=null;const na=()=>Ri!==null?Ri:Ri=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let zi=null;const Zc=()=>zi!==null?zi:zi=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let Fi=null;const Qc=()=>{if(Fi!==null)return Fi;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?Fi=Number(t[1]):null},oa=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Yc=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Jc=(t,e)=>{let i=-1,r=1/0;for(let a=0;a<t.length;a++){const n=e(t[a]);n<r&&(r=n,i=a)}return i},sa=t=>{N(Number.isInteger(t.num)),N(Number.isInteger(t.den)),N(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const a=e%i;e=i,i=a}const r=e||1;return{num:t.num/r,den:t.den/r}},Oi=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},el=t=>new Promise(e=>setTimeout(e,t)),ca=t=>Array.isArray(t)?t:[t];class Hi{constructor(){this._listeners=new Map}on(e,i,r){this._listeners.has(e)||this._listeners.set(e,new Set);const a={fn:i,once:r?.once??!1};return this._listeners.get(e).add(a),()=>{this._listeners.get(e)?.delete(a)}}_emit(...e){const[i,r]=e,a=this._listeners.get(i);if(a)for(const n of a){try{n.fn(r)}catch(o){console.error(o)}n.once&&a.delete(n)}}}const tl=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Xe;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(Xe||(Xe={}));class ge{constructor(){}static get level(){return ge._level}static set level(e){if(e!==Xe.Silent&&e!==Xe.Errors&&e!==Xe.Warnings&&e!==Xe.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ge._level=e}static get _emitter(){return ge._emitterInstance??=new Hi}static on(e,i,r){return ge._emitter.on(e,i,r)}static _error(...e){ge._emitter._emit("error",e),ge._level>=Xe.Errors&&console.error(...e)}static _warn(...e){ge._emitter._emit("warn",e),ge._level>=Xe.Warnings&&console.warn(...e)}static _info(...e){ge._emitter._emit("info",e),ge._level>=Xe.Info&&console.info(...e)}}ge._level=Xe.Info,ge._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class la{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class il{constructor(e,i,r,a){if(this.data=e,this.mimeType=i,this.name=r,this.description=a,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("name, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("description, when provided, must be a string.")}}const rl=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof la)&&!(e instanceof il)&&!tl(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},al=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class _e{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,r=7-(this.pos&7),a=(i&1<<r)>>r;return this.pos++,a}readBits(e){if(e===1)return this.readBit();let i=0;for(let r=0;r<e;r++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const r=this.pos+e;for(let a=this.pos;a<r;a++){const n=Math.floor(a/8);let o=this.bytes[n];const s=7-(a&7);o&=~(1<<s),o|=(i&1<<r-a-1)>>r-a-1<<s,this.bytes[n]=o}this.pos=r}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new _e(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const fa=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],da=[-1,1,2,3,4,5,6,8],nl=t=>{let e=fa.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const r=da.indexOf(t.numberOfChannels);if(r===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let a=13;t.objectType>=32&&(a+=6),e===15&&(a+=24);const n=Math.ceil(a/8),o=new Uint8Array(n),s=new _e(o);return t.objectType<32?s.writeBits(5,t.objectType):(s.writeBits(5,31),s.writeBits(6,t.objectType-32)),s.writeBits(4,e),e===15&&s.writeBits(24,i),s.writeBits(4,r),o};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const rt=["avc","hevc","vp9","av1","vp8","prores"],mt=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Li=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],oi=[...Li,...mt],zt=["webvtt"],si=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],ua=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],ha=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],ma=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Ft=["ap4x","ap4h","apch","apcn","apcs","apco"],Ui=["dtsc","dtsh","dtsl","dtse"],ol=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],sl=(t,e,i,r,a)=>{if(t==="avc"){const o=Math.ceil(e/16)*Math.ceil(i/16),s=si.find(y=>o<=y.maxMacroblocks&&r<=y.maxBitrate)??Ge(si),c=s?s.level:0,l="64".padStart(2,"0"),d="00",u=c.toString(16).padStart(2,"0");return`avc1.${l}${d}${u}`}else if(t==="hevc"){const c=e*i,l=ua.find(u=>c<=u.maxPictureSize&&r<=u.maxBitrate)??Ge(ua);return`hev1.1.6.${l.tier}${l.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const o=e*i;return`vp09.00.${(ha.find(l=>o<=l.maxPictureSize&&r<=l.maxBitrate)??Ge(ha)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const o=e*i,s=ma.find(d=>o<=d.maxPictureSize&&r<=d.maxBitrate)??Ge(ma);return`av01.0.${s.level.toString().padStart(2,"0")}${s.tier}.08`}else if(t==="prores"){const o=Math.pow(e*i/2073600,.95),s=ol.filter(d=>d.alpha===a);let c=s[0].fourCc,l=1/0;for(const{fourCc:d,bitrate:u}of s){const y=Math.abs(u*o-r);y<l&&(l=y,c=d)}return c}else xt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},cl=t=>{const e=t.split("."),a=(1<<7)+1,n=Number(e[1]),o=e[2],s=Number(o.slice(0,-1)),c=(n<<5)+s,l=o.slice(-1)==="H"?1:0,u=Number(e[3])===8?0:1,y=0,f=e[4]?Number(e[4]):0,p=e[5]?Number(e[5][0]):1,m=e[5]?Number(e[5][1]):1,g=e[5]?Number(e[5][2]):0,b=(l<<7)+(u<<6)+(y<<5)+(f<<4)+(p<<3)+(m<<2)+g;return[a,c,b,0]},pa=/^pcm-([usf])(\d+)(be)?$/,_t=t=>{if(N(mt.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=pa.exec(t);N(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const r=Number(e[2])/8,a=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:r,littleEndian:a,silentValue:n}},Ni=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Ft.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Ui.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":pa.test(t)?t:t==="webvtt"?"webvtt":null,ll=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},fl=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Ft],dl=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,ul=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,hl=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,ml=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,va=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!fl.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Mi(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const r=Object.keys(ri);if(i.primaries!=null&&!r.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${r.join(", ")}.`);const a=Object.keys(ai);if(i.transfer!=null&&!a.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(ni);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!dl.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!ul.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!hl.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!ml.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Ft.some(i=>t.decoderConfig.codec.startsWith(i))&&!Ft.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Ft.join(", ")}.`);if(e!==null&&Ni(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},pl=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],ga=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!pl.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Mi(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Ui.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Ui.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!mt.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${mt.join(", ")}).`);if(e!==null&&Ni(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},vl=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const gl=[48e3,44100,32e3],bl=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var at;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(at||(at={}));var Me;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Me||(Me={}));const Ot=function*(t){let e=0,i=-1;for(;e<t.length-2;){const r=t.indexOf(0,e);if(r===-1||r>=t.length-2)break;e=r;let a=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?a=4:t[e+1]===0&&t[e+2]===1&&(a=3),a===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+a,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},ba=function*(t,e){let i=0;const r=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let a;e===1?a=r.getUint8(i):e===2?a=r.getUint16(i,!1):e===3?a=Wc(r,i):(N(e===4),a=r.getUint32(i,!1)),i+=e,yield{offset:i,length:a},i+=a}},yl=(t,e)=>{if(e.description){const a=(He(e.description)[4]&3)+1;return ba(t,a)}else return Ot(t)},ya=t=>t&31,ci=t=>{const e=[],i=t.length;for(let r=0;r<i;r++)r+2<i&&t[r]===0&&t[r+1]===0&&t[r+2]===3?(e.push(0,0),r+=2):e.push(t[r]);return new Uint8Array(e)},wl=(t,e)=>{const i=t.reduce((n,o)=>n+e+o.byteLength,0),r=new Uint8Array(i);let a=0;for(const n of t){const o=new DataView(r.buffer,r.byteOffset,r.byteLength);switch(e){case 1:o.setUint8(a,n.byteLength);break;case 2:o.setUint16(a,n.byteLength,!1);break;case 3:qc(o,a,n.byteLength);break;case 4:o.setUint32(a,n.byteLength,!1);break}a+=e,r.set(n,a),a+=n.byteLength}return r},xl=t=>{try{const e=[],i=[],r=[];for(const s of Ot(t)){const c=t.subarray(s.offset,s.offset+s.length),l=ya(c[0]);l===at.SPS?e.push(c):l===at.PPS?i.push(c):l===at.SPS_EXT&&r.push(c)}if(e.length===0||i.length===0)return null;const a=e[0],n=_l(a);N(n!==null);const o=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:o?n.chromaFormatIdc:null,bitDepthLumaMinus8:o?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:o?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:o?r:null}}catch(e){return ge._error("Error building AVC Decoder Configuration Record:",e),null}},kl=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){N(t.chromaFormat!==null),N(t.bitDepthLumaMinus8!==null),N(t.bitDepthChromaMinus8!==null),N(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}}return new Uint8Array(e)},wa={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},_l=t=>{try{const e=new _e(ci(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const r=e.readAlignedByte(),a=e.readAlignedByte(),n=e.readAlignedByte();K(e);let o=1,s=0,c=0,l=0;if((r===100||r===110||r===122||r===244||r===44||r===83||r===86||r===118||r===128)&&(o=K(e),o===3&&(l=e.readBits(1)),s=K(e),c=K(e),e.skipBits(1),e.readBits(1))){for(let _=0;_<(o!==3?8:12);_++)if(e.readBits(1)){const v=_<6?16:64;let H=8,ee=8;for(let W=0;W<v;W++){if(ee!==0){const oe=it(e);ee=(H+oe+256)%256}H=ee===0?H:ee}}}K(e);const d=K(e);if(d===0)K(e);else if(d===1){e.skipBits(1),it(e),it(e);const Q=K(e);for(let _=0;_<Q;_++)it(e)}K(e),e.skipBits(1);const u=K(e),y=K(e),f=16*(u+1),p=16*(y+1);let m=f,g=p;const b=e.readBits(1);if(b||e.skipBits(1),e.skipBits(1),e.readBits(1)){const Q=K(e),_=K(e),z=K(e),v=K(e);let H,ee;if((l===0?o:0)===0)H=1,ee=2-b;else{const oe=o===3?1:2,V=o===1?2:1;H=oe,ee=V*(2-b)}m-=H*(Q+_),g-=ee*(z+v)}let k=2,S=2,C=2,O=0,A={num:1,den:1},L=null,I=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)A={num:e.readBits(16),den:e.readBits(16)};else{const ne=wa[V];ne&&(A=ne)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),O=e.readBits(1),e.readBits(1)&&(k=e.readBits(8),S=e.readBits(8),C=e.readBits(8))),e.readBits(1)&&(K(e),K(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const ee=e.readBits(1);ee&&xa(e);const W=e.readBits(1);W&&xa(e),(ee||W)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),K(e),K(e),K(e),K(e),L=K(e),I=K(e))}if(L===null){N(I===null);const Q=a&16;if((r===44||r===86||r===100||r===110||r===122||r===244)&&Q)L=0,I=0;else{const _=u+1,z=y+1,v=(2-b)*z,H=si.find(W=>W.level>=n)??Ge(si),ee=Math.min(Math.floor(H.maxDpbMbs/(_*v)),16);L=ee,I=ee}}return N(I!==null),{profileIdc:r,constraintFlags:a,levelIdc:n,frameMbsOnlyFlag:b,chromaFormatIdc:o,bitDepthLumaMinus8:s,bitDepthChromaMinus8:c,codedWidth:f,codedHeight:p,displayWidth:m,displayHeight:g,pixelAspectRatio:A,colourPrimaries:k,matrixCoefficients:C,transferCharacteristics:S,fullRangeFlag:O,numReorderFrames:L,maxDecFrameBuffering:I}}catch(e){return ge._error("Error parsing AVC SPS:",e),null}},xa=t=>{const e=K(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)K(t),K(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Tl=(t,e)=>{if(e.description){const a=(He(e.description)[21]&3)+1;return ba(t,a)}else return Ot(t)},Wi=t=>t>>1&63,Sl=t=>{try{const e=new _e(ci(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),r=e.readBits(1),{general_profile_space:a,general_tier_flag:n,general_profile_idc:o,general_profile_compatibility_flags:s,general_constraint_indicator_flags:c,general_level_idc:l}=El(e,i);K(e);const d=K(e);let u=0;d===3&&(u=e.readBits(1));const y=K(e),f=K(e);let p=y,m=f;if(e.readBits(1)){const _=K(e),z=K(e),v=K(e),H=K(e);let ee=1,W=1;const oe=u===0?d:0;oe===1?(ee=2,W=2):oe===2&&(ee=2,W=1),p-=(_+z)*ee,m-=(v+H)*W}const g=K(e),b=K(e);K(e);const k=e.readBits(1)?0:i;let S=0;for(let _=k;_<=i;_++)K(e),S=K(e),K(e);K(e),K(e),K(e),K(e),K(e),K(e),e.readBits(1)&&e.readBits(1)&&Pl(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),K(e),K(e),e.skipBits(1));const C=K(e);if(Bl(e,C),e.readBits(1)){const _=K(e);for(let z=0;z<_;z++)K(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let O=2,A=2,L=2,I=0,j=0,Q={num:1,den:1};if(e.readBits(1)){const _=Il(e,i);Q=_.pixelAspectRatio,O=_.colourPrimaries,A=_.transferCharacteristics,L=_.matrixCoefficients,I=_.fullRangeFlag,j=_.minSpatialSegmentationIdc}return{displayWidth:p,displayHeight:m,pixelAspectRatio:Q,colourPrimaries:O,transferCharacteristics:A,matrixCoefficients:L,fullRangeFlag:I,maxDecFrameBuffering:S+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:r,generalProfileSpace:a,generalTierFlag:n,generalProfileIdc:o,generalProfileCompatibilityFlags:s,generalConstraintIndicatorFlags:c,generalLevelIdc:l,chromaFormatIdc:d,bitDepthLumaMinus8:g,bitDepthChromaMinus8:b,minSpatialSegmentationIdc:j}}catch(e){return ge._error("Error parsing HEVC SPS:",e),null}},Cl=t=>{try{const e=[],i=[],r=[],a=[];for(const l of Ot(t)){const d=t.subarray(l.offset,l.offset+l.length),u=Wi(d[0]);u===Me.VPS_NUT?e.push(d):u===Me.SPS_NUT?i.push(d):u===Me.PPS_NUT?r.push(d):(u===Me.PREFIX_SEI_NUT||u===Me.SUFFIX_SEI_NUT)&&a.push(d)}if(i.length===0||r.length===0)return null;const n=Sl(i[0]);if(!n)return null;let o=0;if(r.length>0){const l=r[0],d=new _e(ci(l));d.skipBits(16),K(d),K(d),d.skipBits(1),d.skipBits(1),d.skipBits(3),d.skipBits(1),d.skipBits(1),K(d),K(d),it(d),d.skipBits(1),d.skipBits(1),d.readBits(1)&&K(d),it(d),it(d),d.skipBits(1),d.skipBits(1),d.skipBits(1),d.skipBits(1);const u=d.readBits(1),y=d.readBits(1);!u&&!y?o=0:u&&!y?o=2:!u&&y?o=3:o=0}const s=[...e.length?[{arrayCompleteness:1,nalUnitType:Me.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Me.SPS_NUT,nalUnits:i}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:Me.PPS_NUT,nalUnits:r}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:Wi(a[0][0]),nalUnits:a}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:o,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:s}}catch(e){return ge._error("Error building HEVC Decoder Configuration Record:",e),null}},El=(t,e)=>{const i=t.readBits(2),r=t.readBits(1),a=t.readBits(5);let n=0;for(let d=0;d<32;d++)n=n<<1|t.readBits(1);const o=new Uint8Array(6);for(let d=0;d<6;d++)o[d]=t.readBits(8);const s=t.readBits(8),c=[],l=[];for(let d=0;d<e;d++)c.push(t.readBits(1)),l.push(t.readBits(1));if(e>0)for(let d=e;d<8;d++)t.skipBits(2);for(let d=0;d<e;d++)c[d]&&t.skipBits(88),l[d]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:r,general_profile_idc:a,general_profile_compatibility_flags:n,general_constraint_indicator_flags:o,general_level_idc:s}},Pl=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))K(t);else{const a=Math.min(64,1<<4+(e<<1));e>1&&it(t);for(let n=0;n<a;n++)it(t)}},Bl=(t,e)=>{const i=[];for(let r=0;r<e;r++)i[r]=Al(t,r,e,i)},Al=(t,e,i,r)=>{let a=0,n=0,o=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const c=K(t);o=e-(c+1)}else o=e-1;t.readBits(1),K(t);const s=r[o]??0;for(let c=0;c<=s;c++)t.readBits(1)||t.readBits(1);a=r[o]}else{const s=K(t),c=K(t);for(let l=0;l<s;l++)K(t),t.readBits(1);for(let l=0;l<c;l++)K(t),t.readBits(1);a=s+c}return a},Il=(t,e)=>{let i=2,r=2,a=2,n=0,o=0,s={num:1,den:1};if(t.readBits(1)){const c=t.readBits(8);if(c===255)s={num:t.readBits(16),den:t.readBits(16)};else{const l=wa[c];l&&(s=l)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),r=t.readBits(8),a=t.readBits(8))),t.readBits(1)&&(K(t),K(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(K(t),K(t),K(t),K(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&K(t),t.readBits(1)&&Ml(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),o=K(t),K(t),K(t),K(t),K(t)),{pixelAspectRatio:s,colourPrimaries:i,transferCharacteristics:r,matrixCoefficients:a,fullRangeFlag:n,minSpatialSegmentationIdc:o}},Ml=(t,e,i)=>{let r=!1,a=!1,n=!1;r=t.readBits(1)===1,a=t.readBits(1)===1,(r||a)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let o=0;o<=i;o++){const s=t.readBits(1)===1;let c=!0;s||(c=t.readBits(1)===1);let l=!1;c?K(t):l=t.readBits(1)===1;let d=1;l||(d=K(t)+1),r&&ka(t,d,n),a&&ka(t,d,n)}},ka=(t,e,i)=>{for(let r=0;r<e;r++)K(t),K(t),i&&(K(t),K(t)),t.readBits(1)},Rl=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const r of i.nalUnits){e.push(r.length>>8&255),e.push(r.length&255);for(let a=0;a<r.length;a++)e.push(r[a])}}return new Uint8Array(e)};var _a;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(_a||(_a={}));const zl=function*(t){const e=new _e(t),i=()=>{let r=0;for(let a=0;a<8;a++){const n=e.readAlignedByte();if(r|=(n&127)<<a*7,!(n&128))break;if(a===7&&n&128)return null}return r>=2**32-1?null:r};for(;e.getBitsLeft()>=8;){e.skipBits(1);const r=e.readBits(4),a=e.readBits(1),n=e.readBits(1);e.skipBits(1),a&&e.skipBits(8);let o;if(n){const s=i();if(s===null)return;o=s}else o=Math.floor(e.getBitsLeft()/8);N(e.pos%8===0),yield{type:r,data:t.subarray(e.pos/8,e.pos/8+o)},e.skipBits(o*8)}},Fl=t=>{const e=ii(t),i=e.getUint8(9),r=e.getUint16(10,!0),a=e.getUint32(12,!0),n=e.getInt16(16,!0),o=e.getUint8(18);let s=null;return o&&(s=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:r,inputSampleRate:a,outputGain:n,channelMappingFamily:o,channelMappingTable:s}},Ol=(t,e,i)=>{switch(t){case"avc":{for(const r of yl(i,e)){const a=i[r.offset],n=ya(a);if(n>=at.NON_IDR_SLICE&&n<=at.SLICE_DPC)return"delta";if(n===at.IDR)return"key";if(n===at.SEI&&(!Zc()||Qc()>=144)){const o=i.subarray(r.offset,r.offset+r.length),s=ci(o);let c=1;do{let l=0;for(;;){const y=s[c++];if(y===void 0||(l+=y,y<255))break}let d=0;for(;;){const y=s[c++];if(y===void 0||(d+=y,y<255))break}if(l===6){const y=new _e(s);y.pos=8*c;const f=K(y),p=y.readBits(1);if(f===0&&p===1)return"key"}c+=d}while(c<s.length-1)}}return"delta"}case"hevc":{for(const r of Tl(i,e)){const a=Wi(i[r.offset]);if(a<Me.BLA_W_LP)return"delta";if(a<=Me.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const r=new _e(i);if(r.readBits(2)!==2)return null;const a=r.readBits(1);return(r.readBits(1)<<1)+a===3&&r.skipBits(1),r.readBits(1)?null:r.readBits(1)===0?"key":"delta"}case"av1":{let r=!1;for(const{type:a,data:n}of zl(i))if(a===1){const o=new _e(n);o.skipBits(4),r=!!o.readBits(1)}else if(a===3||a===6||a===7){if(r)return"key";const o=new _e(n);return o.readBits(1)?null:o.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:xt(t),N(!1)}};var Ta;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Ta||(Ta={}));const Hl=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const r=e.readBits(6),a=e.readBits(5);if(a>8)return null;const n=e.readBits(3),o=e.readBits(3);(o&1)!==0&&o!==1&&e.skipBits(2),(o&4)!==0&&e.skipBits(2),o===2&&e.skipBits(2);const s=e.readBits(1),c=Math.floor(r/2);return{fscod:i,bsid:a,bsmod:n,acmod:o,lfeon:s,bitRateCode:c}},Ll=[1,2,3,6],Ul=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const r=e.readBits(11),a=e.readBits(2);let n=0,o;a===3?(n=e.readBits(2),o=3):o=e.readBits(2);const s=e.readBits(3),c=e.readBits(1),l=e.readBits(5);if(l<11||l>16)return null;const d=Ll[o];let u;return a<3?u=gl[a]/1e3:u=bl[n]/1e3,{dataRate:Math.round((r+1)*u/(d*16)),substreams:[{fscod:a,fscod2:n,bsid:l,bsmod:0,acmod:s,lfeon:c,numDepSub:0,chanLoc:0}]}},Nl=1683496997,Wl=18,ql=10,Sa=32,Dl=20,$l=8,jl=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Vl=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Gl=[16,16,20,20,0,24,24,0],Ca=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Kl=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Xl=8,Zl=[32e3,44100,48e3,0],Ql=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Yl=[512,1024,2048,4096],Jl=t=>{const e=ef(t),i=ii(t);let r=e?Math.ceil(e.frameSize/4)*4:0,a=null;for(;r+4<=t.length&&i.getUint32(r)===Nl;){const o=tf(t.subarray(r));if(!o)break;a??=o,r+=o.frameSize}if(e)return{frameSize:a?r:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:a!==null};if(!a?.asset)return null;const{asset:n}=a;return{frameSize:r,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},ef=t=>{if(t.length<Wl||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new _e(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Sa-1)return null;const i=e.readBits(1),r=e.readBits(7)+1;if(r%$l!==0)return null;const a=e.readBits(14)+1;if(a<96)return null;const n=e.readBits(6);if(n>=Ca.length)return null;const o=jl[e.readBits(4)];if(o===0)return null;const s=Vl[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const c=e.readBits(2);if(c===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const l=Gl[e.readBits(3)];if(l===0)return null;const d=c!==0;return{frameSize:a,sampleRate:o,numberOfChannels:Ca[n]+(d?1:0),sampleCount:r*Sa,channelLayout:Kl[n]|(d?Xl:0),amode:n,lfePresent:d,bitRate:s,pcmResolution:l}},tf=t=>{if(t.length<ql||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new _e(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),r=e.readBits(1),a=8+4*r,n=16+4*r;e.skipBits(a);const o=e.readBits(n)+1,s={frameSize:o,asset:null};if(!e.readBits(1))return s;const c=Zl[e.readBits(2)],l=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const d=e.readBits(3)+1,u=e.readBits(3)+1,y=[];for(let b=0;b<d;b++)y.push(e.readBits(i+1));for(const b of y)e.skipBits(8*jc(b));if(e.readBits(1)){e.skipBits(2);const b=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*b)}for(let b=0;b<u;b++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const f=e.readBits(5)+1,p=Ql[e.readBits(4)],m=e.readBits(8)+1;let g=0;if(e.readBits(1)&&(m>2&&e.skipBits(1),m>6&&e.skipBits(1),e.readBits(1))){const b=e.readBits(2)+1<<2;g=e.readBits(b)}return c===0||e.getBitsLeft()<0?s:{frameSize:o,asset:{sampleRate:p,numberOfChannels:m,sampleCount:Math.round(l*p/c),channelLayout:g,pcmResolution:f}}},rf=t=>{const e=new Uint8Array(Dl),i=ii(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const r=t.core&&!t.hasExtensions?1:0,a=new _e(e);return a.seekToByte(13),a.writeBits(2,Math.max(Yl.indexOf(t.sampleCount),0)),a.writeBits(5,r),a.writeBits(1,t.core?.lfePresent?1:0),a.writeBits(6,t.core?.amode??0),a.writeBits(14,t.core?t.core.frameSize-1:0),a.writeBits(1,0),a.writeBits(3,0),a.writeBits(16,t.channelLayout),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ea=new Uint8Array(0);class pt{constructor(e,i,r,a,n=-1,o,s){if(this.data=e,this.type=i,this.timestamp=r,this.duration=a,this.sequenceNumber=n,e===Ea&&o===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(o===void 0&&(o=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(r))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(a)||a<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(o)||o<0)throw new TypeError("byteLength must be a non-negative integer.");if(s!==void 0&&(typeof s!="object"||!s))throw new TypeError("sideData, when provided, must be an object.");if(s?.alpha!==void 0&&!(s.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(s?.alphaByteLength!==void 0&&(!Number.isInteger(s.alphaByteLength)||s.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=o,this.sideData=s??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Ea}get microsecondTimestamp(){return Math.trunc(kt*this.timestamp)}get microsecondDuration(){return Math.trunc(kt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const r=new Uint8Array(e.byteLength);return e.copyTo(r),new pt(r,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new pt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const af=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const r=[...new Set(t.codecStrings)];i+=`; codecs="${r.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const qi=8,Pa=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const nf=7,of=9,Ba=t=>{const e=t.filePos,i=xf(t,9),r=new _e(i);if(r.readBits(12)!==4095||(r.skipBits(1),r.readBits(2)!==0))return null;const o=r.readBits(1),s=r.readBits(2)+1,c=r.readBits(4);if(c===15)return null;r.skipBits(1);const l=r.readBits(3);if(l===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);const d=r.readBits(13);r.skipBits(11);const u=r.readBits(2)+1;if(u!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let y=null;return o===1?t.filePos-=2:y=r.readBits(16),{objectType:s,samplingFrequencyIndex:c,channelConfiguration:l,frameLength:d,numberOfAacFrames:u,crcCheck:y,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var sf=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(a=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");a&&(r=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},cf=(function(t){return function(e){function i(o){e.error=e.hasError?new t(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}var r,a=0;function n(){for(;r=e.stack.pop();)try{if(!r.async&&a===1)return a=0,e.stack.push(r),Promise.resolve().then(n);if(r.dispose){var o=r.dispose.call(r.value);if(r.async)return a|=2,Promise.resolve(o).then(n,function(s){return i(s),n()})}else a|=1}catch(s){i(s)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});Yc();let Aa=-1/0,Ia=-1/0,Di=null;typeof FinalizationRegistry<"u"&&(Di=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-Aa>=1e3&&(ge._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Aa=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-Ia>=1e3&&(ge._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Ia=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class vt{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const $i=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],lf=new Set($i);class Pe{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(kt*this.timestamp)}get microsecondDuration(){return Math.trunc(kt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!lf.has(i.format))throw new TypeError("init.format must be one of: "+$i.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Oi(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const r=i.layout??uf(i.format,i.codedWidth,i.codedHeight);let a=i.colorSpace??null;a===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?a={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:a={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?He(e):He(e).slice(),this._layout=r,this.colorSpace=new ji(a)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Oi(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new ji(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Oi(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Pe(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*kt),duration:Math.trunc((i.duration??0)*kt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let r=0,a=0;if("naturalWidth"in e?(r=e.naturalWidth,a=e.naturalHeight):"videoWidth"in e?(r=e.videoWidth,a=e.videoHeight):"width"in e&&(r=Number(e.width),a=Number(e.height)),!r||!a)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:r,height:a},o=new OffscreenCanvas(n.width,n.height),s=o.getContext("2d",{alpha:na(),willReadFrequently:!0});if(!s)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");s.drawImage(e,-n.left,-n.top),this._data=o,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new ji({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof vt){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!$i.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=sa({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Di?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return N(this._data!==null),this._data instanceof vt?new Pe(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Lt(this._data)?new Pe(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(N(this._layout),new Pe(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Pe(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Di?.unregister(this),this._data instanceof vt?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Lt(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(Fa(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Lt(this._data)?this._data.allocationSize(e):Oa(this,e).allocationSize}async copyTo(e,i={}){if(!Mi(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(Fa(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(N(this._data!==null),Lt(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof vt){const l={stack:[],error:void 0,hasError:!1};try{const d=sf(l,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(d instanceof Pe))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(d.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${d.format}' instead.`);return await d.copyTo(e,i)}catch(d){l.error=d,l.hasError=!0}finally{cf(l)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const l=this.toVideoFrame(),d=await l.copyTo(e,i);return l.close(),d}const r=Oa(this,i);N(this.format);const a=He(e);if(a.byteLength<r.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${r.allocationSize}, Available: ${a.byteLength}`);const n=li(this.format);let o;if(this._data instanceof vt){let l=this._data.getDataPlanes();if(l instanceof Promise&&(l=await l),!Array.isArray(l)||l.some(d=>!(d.data instanceof Uint8Array)||!Number.isInteger(d.stride)||d.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');o=l}else if(this._data instanceof Uint8Array)N(this._layout),N(this._layout.length===n.length),o=this._layout.map((l,d)=>{const u=Math.ceil(this.codedHeight/n[d].heightDivisor);return{data:this._data.subarray(l.offset,l.offset+l.stride*u),stride:l.stride}});else{const d=this._data.getContext("2d");N(d);const u=d.getImageData(0,0,this.codedWidth,this.codedHeight);o=[{data:He(u.data),stride:4*this.codedWidth}]}const s=[],c=n.length;for(let l=0;l<c;l++){const d=r.computedLayouts[l],u=o[l].stride,y=o[l].data;let f=d.sourceTop*u;f+=d.sourceLeftBytes;let p=d.destinationOffset;const m=d.sourceWidthBytes,g={offset:p,stride:d.destinationStride};for(let b=0;b<d.sourceHeight;b++){if(f+m>y.byteLength)throw new Error("Source buffer OOB read.");if(p+m>a.byteLength)throw new Error("Destination buffer OOB write.");const w=y.subarray(f,f+m);a.set(w,p),f+=u,p+=d.destinationStride}s.push(g)}if(i.format!==void 0){const l=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),d=this.format.includes("X")&&i.format.includes("A");if(l||d)for(let u=0;u<r.allocationSize;u+=4){if(l){const y=a[u],f=a[u+2];a[u]=f,a[u+2]=y}d&&(a[u+3]=255)}}return s}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof vt){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((o,s)=>o+s.data.byteLength,0),r=new Uint8Array(i);let a=0;const n=[];for(const o of e)r.set(o.data,a),n.push(a),a+=o.data.byteLength;return new VideoFrame(r,{format:this.format,layout:e.map((o,s)=>({offset:n[s],stride:o.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Lt(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(N(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,r,a,n,o,s,c,l){let d=0,u=0,y=this.displayWidth,f=this.displayHeight,p=0,m=0,g=this.displayWidth,b=this.displayHeight;if(o!==void 0?(d=i,u=r,y=a,f=n,p=o,m=s,c!==void 0?(g=c,b=l):(g=y,b=f)):(p=i,m=r,a!==void 0&&(g=a,b=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(d))throw new TypeError("sx must be a number.");if(!Number.isFinite(u))throw new TypeError("sy must be a number.");if(!Number.isFinite(y)||y<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(p))throw new TypeError("dx must be a number.");if(!Number.isFinite(m))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(b)||b<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:d,sy:u,sWidth:y,sHeight:f}=this._rotateSourceRegion(d,u,y,f,this.rotation));const w=this.toCanvasImageSource();e.save();const k=p+g/2,S=m+b/2;e.translate(k,S),e.rotate(this.rotation*Math.PI/180);const C=this.rotation%180===0?1:g/b;e.scale(1/C,C),e.drawImage(w,d,u,y,f,-g/2,-b/2,g,b),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Vi(i.crop,"options.");const r=e.canvas.width,a=e.canvas.height,n=i.rotation??this.rotation,[o,s]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let c=i.crop;c&&(c=za(c,o,s));let l,d,u,y;const{sx:f,sy:p,sWidth:m,sHeight:g}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??o,i.crop?.height??s,n);if(i.fit==="fill")l=0,d=0,u=r,y=a;else{const[w,k]=i.crop?[i.crop.width,i.crop.height]:[o,s],S=i.fit==="contain"?Math.min(r/w,a/k):Math.max(r/w,a/k);u=w*S,y=k*S,l=(r-u)/2,d=(a-y)/2}e.save();const b=n%180===0?1:u/y;e.translate(r/2,a/2),e.rotate(n*Math.PI/180),e.scale(1/b,b),e.translate(-r/2,-a/2),e.drawImage(this.toCanvasImageSource(),f,p,m,g,l,d,u,y),e.restore()}_rotateSourceRegion(e,i,r,a,n){return n===90?[e,i,r,a]=[i,this.squarePixelHeight-e-r,a,r]:n===180?[e,i]=[this.squarePixelWidth-e-r,this.squarePixelHeight-i-a]:n===270&&([e,i,r,a]=[this.squarePixelWidth-i-a,e,a,r]),{sx:e,sy:i,sWidth:r,sHeight:a}}_drawWithFitAndMipmapping(e,i,r){const a=e.width,n=e.height,[o,s]=r.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=r.crop?r.crop.width:o,l=r.crop?r.crop.height:s;let d=0;2*a<c&&2*n<l&&(d=Math.floor(Math.log2(Math.min(c/a,l/n))));const u=a*2**d,y=n*2**d,{canvas:f,context:p,isNew:m}=d>0?Ra(u,y):{canvas:e,context:i,isNew:r.targetIsFresh};p.imageSmoothingQuality="high",r.fillBlack?(p.fillStyle="black",p.fillRect(0,0,u,y)):m||p.clearRect(0,0,u,y),this.drawWithFit(p,{fit:r.fit,rotation:r.rotation,crop:r.crop}),p.globalCompositeOperation="copy";for(let g=d;g>1;g--){const b=a*2**g,w=n*2**g;p.drawImage(f,0,0,b,w,0,0,b/2,w/2)}p.globalCompositeOperation="source-over",d>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(f,0,0,2*a,2*n,0,0,a,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof vt||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Vi(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=Uc(this.rotation+(e.rotate??0)),[r,a]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=za(n,r,a));const o=n?n.width:r,s=n?n.height:a,c=o/s;let l,d;e.width!==void 0&&e.height===void 0?(l=e.width,d=l/c):e.width===void 0&&e.height!==void 0?(d=e.height,l=d*c):e.width!==void 0&&e.height!==void 0?(l=e.width,d=e.height):(l=o,d=s),l=ra(l,e.roundDimensionsTo??1),d=ra(d,e.roundDimensionsTo??1);const u={width:l,height:d,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:r,height:a},alpha:e.alpha??"keep"};for(const m of ff){let g=m(this,u);if(g instanceof Promise&&(g=await g),g!==null)return g}const{canvas:y,context:f,isNew:p}=Ra(u.width,u.height);return this._drawWithFitAndMipmapping(y,f,{fit:u.fit,rotation:u.rotation,crop:u.crop,targetIsFresh:p,fillBlack:u.alpha==="discard"}),new Pe(y,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const ff=[],df=3,Ht=[];let Ma=0;const Ra=(t,e)=>{for(const a of Ht)if(a.canvas.width===t&&a.canvas.height===e)return a.age=Ma++,{canvas:a.canvas,context:a.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const r=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!r)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Ht.length>=df&&Ht.splice(Jc(Ht,a=>a.age),1),Ht.push({canvas:i,context:r,age:Ma++}),{canvas:i,context:r,isNew:!0}};class ji{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(ri);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const r=Object.keys(ai);if(e.transfer!=null&&!r.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${r.join(", ")}.`);const a=Object.keys(ni);if(e.matrix!=null&&!a.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${a.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Lt=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,za=(t,e,i)=>{const r=Math.min(t.left,e),a=Math.min(t.top,i),n=Math.min(t.width,e-r),o=Math.min(t.height,i-a);return N(n>=0),N(o>=0),{left:r,top:a,width:n,height:o}},Vi=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},Fa=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},uf=(t,e,i)=>{const r=li(t),a=[];let n=0;for(const o of r){const s=Math.ceil(e/o.widthDivisor),c=Math.ceil(i/o.heightDivisor),l=s*o.sampleBytes,d=l*c;a.push({offset:n,stride:l}),n+=d}return a},li=t=>{const e=(i,r,a,n,o)=>{const s=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:r,widthDivisor:a,heightDivisor:n},{sampleBytes:r,widthDivisor:a,heightDivisor:n}];return o&&s.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),s};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:xt(t),N(!1)}},Oa=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},r=e.rect,a=hf(i,r,t.codedWidth,t.codedHeight,t.format),n=e.layout;let o;if(!e.format||e.format===t.format)o=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))o=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return pf(a,o,n)},hf=(t,e,i,r,a)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>r)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!mf(a,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},mf=(t,e)=>{if(t===null)return!0;const i=li(t);for(let r=0;r<i.length;r++){const a=i[r],n=a.widthDivisor,o=a.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%o!==0)return!1}return!0},pf=(t,e,i)=>{const r=li(e),a=r.length;if(i!==void 0&&i.length!==a)throw new TypeError(`Layout must have ${a} planes.`);let n=0;const o=[],s=[];for(let c=0;c<a;c++){const l=r[c],d=l.sampleBytes,u=l.widthDivisor,y=l.heightDivisor,f={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(f.sourceTop=Math.ceil(Math.trunc(t.y||0)/y),f.sourceHeight=Math.ceil(Math.trunc(t.height||0)/y),f.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/u)*d,f.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/u)*d,i!==void 0){const g=i[c];if(g.stride<f.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);f.destinationOffset=g.offset,f.destinationStride=g.stride}else f.destinationOffset=n,f.destinationStride=f.sourceWidthBytes;const m=f.destinationStride*f.sourceHeight+f.destinationOffset;if(m>4294967295)throw new TypeError("Allocation size exceeds limit.");s.push(m),n=Math.max(n,m);for(let g=0;g<c;g++){const b=o[g];if(!(s[c]<=b.destinationOffset||s[g]<=f.destinationOffset))throw new TypeError("Planes overlap.")}o.push(f)}return{allocationSize:n,computedLayouts:o}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ha=new Map,vf=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!rt.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${rt.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ft))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ft)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Vi(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");La(t.codec,t)},La=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Ni(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},Ua=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),r=(n,o,s)=>({codec:t.fullCodecString??sl(t.codec,t.width,t.height,s,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:o,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...ll(t.codec)}),a=[];return i.quantizer!==null&&a.push({config:r(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&a.push({config:r(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),N(a.length>0),a};class ft{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in Na):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?Na[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,r,a){const n=gf[e];let o=null,s=this._bitrateMode??a??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else o=this._quantizer,this._bitrate===void 0&&(s="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(N(this._quality!==void 0),o=ia(Math.round(Dc(n.worst,n.best,this._quality)),n.min,n.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let l=this._quality;l===void 0&&(N(o!==null&&n),l=ia((o-n.worst)/(n.best-n.worst),0,1)),c=Wa(e,i,r,Gi(l))}return{quantizer:o,bitrate:c,bitrateMode:s}}_toVideoBitrate(e,i,r){return this._bitrate!==void 0?this._bitrate:(N(this._quality!==void 0),Wa(e,i,r,Gi(this._quality)))}_toAudioBitrate(e){if(mt.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=Gi(this._quality),a={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!a)throw new Error(`Unhandled codec: ${e}`);let n=a*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((s,c)=>Math.abs(c-n)<Math.abs(s-n)?c:s):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((s,c)=>Math.abs(c-n)<Math.abs(s-n)?c:s)),Math.round(n/1e3)*1e3}}const Na={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},gf={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Gi=t=>.3*Math.exp(2.5538*t),Wa=(t,e,i,r)=>{const a=e*i,n=1920*1080,o=3e6,s=Math.pow(a/n,.95),c=o*s,l={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/o},u=c*l[t]*r;return Math.ceil(u/1e3)*1e3},qa=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};N(!1)},bf=async(t,e={})=>{const{width:i=1280,height:r=720,quality:a,bitrate:n,...o}=e;if(!rt.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(r)||r<=0)throw new TypeError("height must be a positive integer.");if(a!==void 0&&!(a instanceof ft))throw new TypeError("quality, when provided, must be a Quality.");if(a!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ft)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");La(t,o);const s=Da(a,n)??new ft("medium");let c;try{c=Ua({codec:t,width:i,height:r,quality:s,framerate:void 0,...o,alpha:"discard"})}catch{return!1}const l=JSON.stringify(c),d=Ha.get(l);if(d)return d;const u=(async()=>{for(const{config:f}of c)if($a.some(p=>p.supports(t,f)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||r%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:f,quantizer:p}of c){try{if(!(await VideoEncoder.isConfigSupported(f)).supported)continue}catch{continue}if(!na()||await new Promise(async g=>{try{const b=new VideoEncoder({output:()=>{},error:()=>g(!1)});b.configure(f);const w=new Uint8Array(i*r*4),k=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:r,timestamp:0});b.encode(k,p!==null?qa(t,p):void 0),k.close(),await b.flush(),g(!0)}catch{g(!1)}}))return!0}return!1})();return Ha.set(l,u),u},Da=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ft?e:new ft({bitrate:e})},yf=async(t,e)=>{for(const i of t)if(await bf(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $a=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ut{constructor(e,i,r,a,n){this.bytes=e,this.view=i,this.offset=r,this.start=a,this.end=n,this.bufferPos=a-r}static tempFromBytes(e){return new Ut(e,ii(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Ut(this.bytes,this.view,this.offset,e,e+i)}}const wf=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},xf=(t,e)=>{wf(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class kf{constructor(e){this.mutex=new Jr,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,r){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let a=this.trackTimestampInfo.get(e);if(a){if(r&&(a.maxTimestampBeforeLastKeyPacket=a.maxTimestamp),a.maxTimestampBeforeLastKeyPacket!==null&&i<a.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${a.maxTimestampBeforeLastKeyPacket}s.`);a.maxTimestamp=Math.max(a.maxTimestamp,i)}else{if(!r)throw new Error("First packet must be a key packet.");a={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,a)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ja=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,_f=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),r=Math.floor(t%(60*1e3)/1e3),a=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+a.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class fi{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const r=this.writer.getPos(),a=e.size??r-i;this.writer.seek(i),this.writeBoxHeader(e,a),this.writer.seek(r)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);N(i!==void 0);const r=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(r)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const r of e.children)r&&(i+=this.measureBox(r));return i}}}const se=new Uint8Array(8),Re=new DataView(se.buffer),be=t=>[(t%256+256)%256],ie=t=>(Re.setUint16(0,t,!1),[se[0],se[1]]),Ki=t=>(Re.setInt16(0,t,!1),[se[0],se[1]]),Va=t=>(Re.setUint32(0,t,!1),[se[1],se[2],se[3]]),$=t=>(Re.setUint32(0,t,!1),[se[0],se[1],se[2],se[3]]),nt=t=>(Re.setInt32(0,t,!1),[se[0],se[1],se[2],se[3]]),Ze=t=>(Re.setUint32(0,Math.floor(t/2**32),!1),Re.setUint32(4,t,!1),[se[0],se[1],se[2],se[3],se[4],se[5],se[6],se[7]]),Tf=t=>(Re.setInt32(0,Math.floor(t/2**32),!1),Re.setUint32(4,t,!1),[se[0],se[1],se[2],se[3],se[4],se[5],se[6],se[7]]),Ga=t=>(Re.setInt16(0,2**8*t,!1),[se[0],se[1]]),Le=t=>(Re.setInt32(0,2**16*t,!1),[se[0],se[1],se[2],se[3]]),Xi=t=>(Re.setInt32(0,2**30*t,!1),[se[0],se[1],se[2],se[3]]),Zi=(t,e)=>{const i=[];let r=t;do{let a=r&127;r>>=7,i.length>0&&(a|=128),i.push(a)}while(r>0||e);return i.reverse()},ue=(t,e=!1)=>{const i=Array(t.length).fill(null).map((r,a)=>t.charCodeAt(a));return e&&i.push(0),i},Ka=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),r=Math.round(Math.sin(e));return[i,r,0,-r,i,0,0,0,1]},Xa=Ka(0),Za=t=>[Le(t[0]),Le(t[1]),Xi(t[2]),Le(t[3]),Le(t[4]),Xi(t[5]),Le(t[6]),Le(t[7]),Xi(t[8])],te=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),ce=(t,e,i,r,a)=>te(t,[be(e),Va(i),r??[]],a),Sf=t=>t.isQuickTime?te("ftyp",[ue("qt  "),$(512),ue("qt  ")]):t.fragmented?t.cmaf?te("ftyp",[ue("iso5"),$(512),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]):te("ftyp",[ue("iso5"),$(512),ue("iso5"),ue("iso6"),ue("mp41")]):te("ftyp",[ue("isom"),$(512),ue("isom"),t.holdsAvc?ue("avc1"):[],ue("mp41")]),Qa=()=>te("styp",[ue("iso5"),$(0),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]),Ya=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),ce("sidx",1,0,[$(1),$(Ne),Ze(ve(t.minWrittenTimestamp,Ne)),Ze(0),ie(0),ie(1),$(e&2147483647),$(ve(i,Ne)),$(0)])},di=t=>({type:"mdat",largeSize:t}),Cf=t=>({type:"free",size:t}),Nt=t=>te("moov",void 0,[Ef(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>Pf(e,t.creationTime)),t.isFragmented?dd(t.trackDatas):null,Td(t)]),Ef=(t,e)=>{const i=Math.max(0,...e.map(o=>ve(ui(o),Ne)+ve(o.startTimestampOffset??0,Ne))),r=Math.max(0,...e.map(o=>o.track.id))+1,a=!lt(t)||!lt(i),n=a?Ze:$;return ce("mvhd",+a,0,[n(t),n(t),$(Ne),n(i),Le(1),Ga(1),Array(10).fill(0),Za(Xa),Array(24).fill(0),$(r)])},ui=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let r=0;r<t.samples.length;r++){const a=t.samples[r];a.timestamp<e&&(e=a.timestamp),a.timestamp+a.duration>i&&(i=a.timestamp+a.duration)}return e===1/0?0:i-e},Pf=(t,e)=>{const i=Fd(t),r=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return te("trak",void 0,[Bf(t,e),r?Af(t,t.startTimestampOffset):null,If(t,e),i.name!==void 0?te("udta",void 0,[te("name",[...Ke.encode(i.name)])]):null])},Bf=(t,e)=>{const i=ve(ui(t),Ne)+ve(t.startTimestampOffset??0,Ne),r=!lt(e)||!lt(i),a=r?Ze:$;let n;if(t.type==="video"){const c=t.track.metadata.rotation;n=Ka(c??0)}else n=Xa;let o=2;t.track.metadata.disposition?.default!==!1&&(o|=1);const s=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:xt(t);return ce("tkhd",+r,o,[a(e),a(e),$(t.track.id),$(0),a(i),Array(8).fill(0),ie(0),ie(s),Ga(t.type==="audio"?1:0),ie(0),Za(n),Le(t.type==="video"?t.info.width:0),Le(t.type==="video"?t.info.height:0)])},Af=(t,e)=>{const i=ve(e,Ne),r=ve(ui(t),Ne),a=!lt(i)||!lt(r),n=a?Ze:$,o=a?Tf:nt;return te("edts",void 0,[ce("elst",a?1:0,0,[$(2),n(i),o(-1),Le(1),n(r),o(0),Le(1)])])},If=(t,e)=>te("mdia",void 0,[Mf(t,e),Qi(!0,Rf[t.type],zf[t.type]),Ff(t)]),Mf=(t,e)=>{const i=ve(ui(t),t.timescale),r=!lt(e)||!lt(i),a=r?Ze:$;return ce("mdhd",+r,0,[a(e),a(e),$(t.timescale),a(i),ie(on(t.track.metadata.languageCode??$c)),ie(0)])},Rf={video:"vide",audio:"soun",subtitle:"text"},zf={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Qi=(t,e,i,r="\0\0\0\0")=>ce("hdlr",0,0,[t?ue("mhlr"):$(0),ue(e),ue(r),$(0),$(0),ue(i,!0)]),Ff=t=>te("minf",void 0,[Of[t.type](),Hf(),Nf(t)]),Of={video:()=>ce("vmhd",0,1,[ie(0),ie(0),ie(0),ie(0)]),audio:()=>ce("smhd",0,0,[ie(0),ie(0)]),subtitle:()=>ce("nmhd",0,0)},Hf=()=>te("dinf",void 0,[Lf()]),Lf=()=>ce("dref",0,0,[$(1)],[Uf()]),Uf=()=>ce("url ",0,1),Nf=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return te("stbl",void 0,[Wf(t),ad(t),e?ld(t):null,e?fd(t):null,od(t),sd(t),cd(t),nd(t)])},Wf=t=>{let e;if(t.type==="video")e=qf(Pd(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=nn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);N(i),e=Kf(i,t)}else t.type==="subtitle"&&(e=id(Id[t.track.source._codec],t));return N(e),ce("stsd",0,0,[$(1)],[e])},qf=(t,e)=>te(t,[Array(6).fill(0),ie(1),ie(0),ie(0),Array(12).fill(0),ie(e.info.width),ie(e.info.height),$(4718592),$(4718592),$(0),ie(1),be(10),ue("Mediabunny"),Array(21).fill(0),ie(e.info.hasAlphaChannel?32:24),Ki(65535)],[Bd[e.track.source._codec]?.(e)??null,Df(e),Nc(e.info.decoderConfig.colorSpace)?$f(e):null]),Df=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:te("pasp",[$(t.info.pixelAspectRatio.num),$(t.info.pixelAspectRatio.den)]),$f=t=>te("colr",[ue(t.muxer.isQuickTime?"nclc":"nclx"),ie(ri[t.info.decoderConfig.colorSpace.primaries]),ie(ai[t.info.decoderConfig.colorSpace.transfer]),ie(ni[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:be((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),jf=t=>t.info.decoderConfig&&te("avcC",[...He(t.info.decoderConfig.description)]),Vf=t=>t.info.decoderConfig&&te("hvcC",[...He(t.info.decoderConfig.description)]),Ja=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),r=Number(i[1]),a=Number(i[2]),n=Number(i[3]),o=i[4]?Number(i[4]):1,s=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),c=(n<<4)+(o<<1)+s,l=i[5]?Number(i[5]):e.colorSpace?.primaries?ri[e.colorSpace.primaries]:2,d=i[6]?Number(i[6]):e.colorSpace?.transfer?ai[e.colorSpace.transfer]:2,u=i[7]?Number(i[7]):e.colorSpace?.matrix?ni[e.colorSpace.matrix]:2;return ce("vpcC",1,0,[be(r),be(a),be(c),be(l),be(d),be(u),ie(0)])},Gf=t=>te("av1C",cl(t.info.decoderConfig.codec)),Kf=(t,e)=>{let i=0,r,a=16;const n=mt.includes(e.track.source._codec);if(n){const o=e.track.source._codec,{sampleSize:s}=_t(o);a=8*s,a>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)r=[Array(6).fill(0),ie(1),ie(i),ie(0),$(0),ie(e.info.numberOfChannels),ie(a),ie(0),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0)];else{const o=n?0:-2;r=[Array(6).fill(0),ie(1),ie(i),ie(0),$(0),ie(e.info.numberOfChannels),ie(Math.min(a,16)),Ki(o),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0),n?[$(1),$(a/8),$(e.info.numberOfChannels*a/8)]:[$(0),$(0),$(0)],$(2)]}return te(t,r,[Ad(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Yi=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...be(e),...be(21),...Va(0),...$(0),...$(0)];if(t.info.decoderConfig.description){const r=He(t.info.decoderConfig.description);i=[...i,...be(5),...Zi(r.byteLength),...r]}return i=[...ie(1),...be(0),...be(4),...Zi(i.length),...i,...be(6),...be(1),...be(2)],i=[...be(3),...Zi(i.length),...i],ce("esds",0,0,i)},dt=t=>te("wave",void 0,[Xf(t),Zf(t),te("\0\0\0\0")]),Xf=t=>te("frma",[ue(nn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Zf=t=>{const{littleEndian:e}=_t(t.track.source._codec);return te("enda",[ie(+e)])},Qf=t=>{let e=t.info.numberOfChannels,i=3840,r=t.info.sampleRate,a=0,n=0,o=new Uint8Array(0);const s=t.info.decoderConfig?.description;if(s){N(s.byteLength>=18);const c=He(s),l=Fl(c);e=l.outputChannelCount,i=l.preSkip,r=l.inputSampleRate,a=l.outputGain,n=l.channelMappingFamily,l.channelMappingTable&&(o=l.channelMappingTable)}return te("dOps",[be(0),be(e),ie(i),$(r),Ki(a),be(n),...o])},Yf=t=>{const e=t.info.decoderConfig?.description;N(e);const i=He(e);return ce("dfLa",0,0,[...i.subarray(4)])},Qe=t=>{const{littleEndian:e,sampleSize:i}=_t(t.track.source._codec),r=+e;return ce("pcmC",0,0,[be(r),be(8*i)])},Jf=t=>{N(t.info.primingPacket);const e=Hl(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),r=new _e(i);return r.writeBits(2,e.fscod),r.writeBits(5,e.bsid),r.writeBits(3,e.bsmod),r.writeBits(3,e.acmod),r.writeBits(1,e.lfeon),r.writeBits(5,e.bitRateCode),r.writeBits(5,0),te("dac3",[...i])},ed=t=>{N(t.info.primingPacket);const e=Ul(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const o of e.substreams)i+=23,o.numDepSub>0?i+=9:i+=1;const r=Math.ceil(i/8),a=new Uint8Array(r),n=new _e(a);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const o of e.substreams)n.writeBits(2,o.fscod),n.writeBits(5,o.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,o.bsmod),n.writeBits(3,o.acmod),n.writeBits(1,o.lfeon),n.writeBits(3,0),n.writeBits(4,o.numDepSub),o.numDepSub>0?n.writeBits(9,o.chanLoc):n.writeBits(1,0);return te("dec3",[...a])},td=t=>{N(t.info.primingPacket);const e=Jl(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return te("ddts",[...rf(e)])},id=(t,e)=>te(t,[Array(6).fill(0),ie(1)],[Md[e.track.source._codec](e)]),rd=t=>te("vttC",[...Ke.encode(t.info.config.description)]),ad=t=>ce("stts",0,0,[$(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[$(e.sampleCount),$(e.sampleDelta)])]),nd=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return ce("stss",0,0,[$(e.length),e.map(([i])=>$(i+1))])},od=t=>ce("stsc",0,0,[$(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[$(e.firstChunk),$(e.samplesPerChunk),$(1)])]),sd=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=_t(t.track.source._codec);return ce("stsz",0,0,[$(e*t.info.numberOfChannels),$(t.samples.reduce((i,r)=>i+ve(r.duration,t.timescale),0))])}return ce("stsz",0,0,[$(0),$(t.samples.length),t.samples.map(e=>$(e.size))])},cd=t=>t.finalizedChunks.length>0&&Ge(t.finalizedChunks).offset>=2**32?ce("co64",0,0,[$(t.finalizedChunks.length),t.finalizedChunks.map(e=>Ze(e.offset))]):ce("stco",0,0,[$(t.finalizedChunks.length),t.finalizedChunks.map(e=>$(e.offset))]),ld=t=>ce("ctts",1,0,[$(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[$(e.sampleCount),nt(e.sampleCompositionTimeOffset)])]),fd=t=>{let e=1/0,i=-1/0,r=1/0,a=-1/0;N(t.compositionTimeOffsetTable.length>0),N(t.samples.length>0);for(let o=0;o<t.compositionTimeOffsetTable.length;o++){const s=t.compositionTimeOffsetTable[o];e=Math.min(e,s.sampleCompositionTimeOffset),i=Math.max(i,s.sampleCompositionTimeOffset)}for(let o=0;o<t.samples.length;o++){const s=t.samples[o];r=Math.min(r,ve(s.timestamp,t.timescale)),a=Math.max(a,ve(s.timestamp+s.duration,t.timescale))}const n=Math.max(-e,0);return a>=2**31?null:ce("cslg",0,0,[nt(n),nt(e),nt(i),nt(r),nt(a)])},dd=t=>te("mvex",void 0,t.map(ud)),ud=t=>ce("trex",0,0,[$(t.track.id),$(1),$(0),$(0),$(0)]),en=(t,e)=>te("moof",void 0,[hd(t),...e.map(md)]),hd=t=>ce("mfhd",0,0,[$(t)]),tn=t=>{let e=0,i=0;const r=0,a=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|r<<8|a},md=t=>te("traf",void 0,[pd(t),vd(t),gd(t)]),pd=t=>{N(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],r={duration:i.timescaleUnitsToNextSample,size:i.size,flags:tn(i)};return ce("tfhd",0,e,[$(t.track.id),$(r.duration),$(r.size),$(r.flags)])},vd=t=>(N(t.currentChunk),ce("tfdt",1,0,[Ze(ve(t.currentChunk.startTimestamp,t.timescale))])),gd=t=>{N(t.currentChunk);const e=t.currentChunk.samples.map(m=>m.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(m=>m.size),r=t.currentChunk.samples.map(tn),a=t.currentChunk.samples.map(m=>ve(m.timestamp-m.decodeTimestamp,t.timescale)),n=new Set(e),o=new Set(i),s=new Set(r),c=new Set(a),l=s.size===2&&r[0]!==r[1],d=n.size>1,u=o.size>1,y=!l&&s.size>1,f=c.size>1||[...c].some(m=>m!==0);let p=0;return p|=1,p|=4*+l,p|=256*+d,p|=512*+u,p|=1024*+y,p|=2048*+f,ce("trun",1,p,[$(t.currentChunk.samples.length),$(t.currentChunk.offset-t.currentChunk.moofOffset||0),l?$(r[0]):[],t.currentChunk.samples.map((m,g)=>[d?$(e[g]):[],u?$(i[g]):[],y?$(r[g]):[],f?nt(a[g]):[]])])},bd=t=>te("mfra",void 0,[...t.map(yd),wd()]),yd=t=>ce("tfra",1,0,[$(t.track.id),$(63),$(t.finalizedChunks.length),t.finalizedChunks.map(i=>[Ze(ve(i.samples[0].timestamp,t.timescale)),Ze(i.moofOffset),$(i.trafIndex+1),$(1),$(1)])]),wd=()=>ce("mfro",0,0,[$(0)]),xd=()=>te("vtte"),kd=(t,e,i,r,a)=>te("vttc",void 0,[a!==null?te("vsid",[nt(a)]):null,i!==null?te("iden",[...Ke.encode(i)]):null,e!==null?te("ctim",[...Ke.encode(_f(e))]):null,r!==null?te("sttg",[...Ke.encode(r)]):null,te("payl",[...Ke.encode(t)])]),_d=t=>te("vtta",[...Ke.encode(t)]),Td=t=>{const e=[],i=t.format._options.metadataFormat??"auto",r=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const a=Cd(r);a&&e.push(a)}else if(i==="mdta"){const a=Ed(r);a&&e.push(a)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&Sd(e,t.output._metadataTags);return e.length===0?null:te("udta",void 0,e)},Sd=(t,e)=>{for(const{key:i,value:r}of oa(e))switch(i){case"title":t.push(Ye("©nam",r));break;case"description":t.push(Ye("©des",r));break;case"artist":t.push(Ye("©ART",r));break;case"album":t.push(Ye("©alb",r));break;case"albumArtist":t.push(Ye("albr",r));break;case"genre":t.push(Ye("©gen",r));break;case"date":t.push(Ye("©day",r.toISOString().slice(0,10)));break;case"comment":t.push(Ye("©cmt",r));break;case"lyrics":t.push(Ye("©lyr",r));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:xt(i)}if(e.raw)for(const i in e.raw){const r=e.raw[i];r==null||i.length!==4||t.some(a=>a.type===i)||(typeof r=="string"?t.push(Ye(i,r)):r instanceof Uint8Array&&t.push(te(i,Array.from(r))))}},Ye=(t,e)=>{const i=Ke.encode(e);return te(t,[ie(i.length),ie(on("und")),Array.from(i)])},rn={"image/jpeg":13,"image/png":14,"image/bmp":27},an=(t,e)=>{const i=[];for(const{key:r,value:a}of oa(t))switch(r){case"title":i.push({key:e?"title":"©nam",value:Ue(a)});break;case"description":i.push({key:e?"description":"©des",value:Ue(a)});break;case"artist":i.push({key:e?"artist":"©ART",value:Ue(a)});break;case"album":i.push({key:e?"album":"©alb",value:Ue(a)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Ue(a)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Ue(a)});break;case"genre":i.push({key:e?"genre":"©gen",value:Ue(a)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Ue(a)});break;case"date":i.push({key:e?"date":"©day",value:Ue(a.toISOString().slice(0,10))});break;case"images":for(const n of a)n.kind==="coverFront"&&i.push({key:"covr",value:te("data",[$(rn[n.mimeType]??0),$(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${a}/${t.tracksTotal}`:a.toString();i.push({key:"track",value:Ue(n)})}else i.push({key:"trkn",value:te("data",[$(0),$(0),ie(0),ie(a),ie(t.tracksTotal??0),ie(0)])});break;case"discNumber":e||i.push({key:"disc",value:te("data",[$(0),$(0),ie(0),ie(a),ie(t.discsTotal??0),ie(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:xt(r)}if(t.raw)for(const r in t.raw){const a=t.raw[r];a==null||!e&&r.length!==4||i.some(n=>n.key===r)||(typeof a=="string"?i.push({key:r,value:Ue(a)}):a instanceof Uint8Array?i.push({key:r,value:te("data",[$(0),$(0),Array.from(a)])}):a instanceof la&&i.push({key:r,value:te("data",[$(rn[a.mimeType]??0),$(0),Array.from(a.data)])}))}return i},Cd=t=>{const e=an(t,!1);return e.length===0?null:ce("meta",0,0,void 0,[Qi(!1,"mdir","","appl"),te("ilst",void 0,e.map(i=>te(i.key,void 0,[i.value])))])},Ed=t=>{const e=an(t,!0);return e.length===0?null:te("meta",void 0,[Qi(!1,"mdta",""),ce("keys",0,0,[$(e.length)],e.map(i=>te("mdta",[...Ke.encode(i.key)]))),te("ilst",void 0,e.map((i,r)=>{const a=String.fromCharCode(...$(r+1));return te(a,void 0,[i.value])}))])},Ue=t=>te("data",[$(1),$(0),...Ke.encode(t)]),Pd=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},Bd={avc:jf,hevc:Vf,vp8:Ja,vp9:Ja,av1:Gf,prores:null},nn=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},Ad=(t,e)=>{switch(t){case"aac":return Yi;case"mp3":return Yi;case"opus":return Qf;case"vorbis":return Yi;case"flac":return Yf;case"ac3":return Jf;case"eac3":return ed;case"dts":return td}if(e)switch(t){case"pcm-s24":return dt;case"pcm-s24be":return dt;case"pcm-s32":return dt;case"pcm-s32be":return dt;case"pcm-f32":return dt;case"pcm-f32be":return dt;case"pcm-f64":return dt;case"pcm-f64be":return dt}else switch(t){case"pcm-s16":return Qe;case"pcm-s16be":return Qe;case"pcm-s24":return Qe;case"pcm-s24be":return Qe;case"pcm-s32":return Qe;case"pcm-s32be":return Qe;case"pcm-f32":return Qe;case"pcm-f32be":return Qe;case"pcm-f64":return Qe;case"pcm-f64be":return Qe}return null},Id={webvtt:"wvtt"},Md={webvtt:rd},on=t=>{N(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ji{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){N(!this.started),this.target._start(),this.started=!0}write(e){N(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return N(this.started&&!this.finalized),this.target._flush()}async finalize(){N(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const r=i+e.byteLength-this.trackedStart;let a=this.trackedWrites.byteLength;for(;a<r;)a*=2;if(a!==this.trackedWrites.byteLength){const n=new Uint8Array(a);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ot extends Hi{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new Rd(this,e)}}const er=2**16,tr=2**32;class hi extends ot{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(er,{maxByteLength:tr})}catch{this._buffer=new ArrayBuffer(er),this._supportsResize=!1}else this._buffer=new ArrayBuffer(er);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>tr)throw new Error(`ArrayBuffer exceeded maximum size of ${tr} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const r=new ArrayBuffer(i),a=new Uint8Array(r);a.set(this._bytes,0),this._buffer=r,this._bytes=a}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class Rd extends ot{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class ir{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Ne=57600,zd=2082844800,Fd=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},ve=(t,e,i=!0)=>{const r=t*e;return i?Math.round(r):r};class Od extends kf{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new hi,this.auxWriter=new Ji(this.auxTarget,!1),this.auxBoxWriter=new fi(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=ta(),this.creationTime=Math.floor(Date.now()/1e3)+zd,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof un,this.isCmaf=i instanceof dn,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof dn?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(r=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":r instanceof hi),this.boxWriter=new fi(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof hi?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const r=await this.output._getInitTarget(),a=new Ji(r,!0);a.start(),this.initWriter=a,this.initBoxWriter=new fi(a)}const i=this.output.tracks.some(r=>r.isVideoTrack()&&r.source._codec==="avc");{const r=this.initBoxWriter??this.boxWriter;if(N(r),this.formatOptions.onFtyp&&r.writer.startTrackingWrites(),r.writeBox(Sf({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:a,start:n}=r.writer.stopTrackingWrites();this.formatOptions.onFtyp(a,n)}this.ftypSize=r.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const r of this.output.tracks)if(r.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(N(this.writer),N(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=di(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const r of this.output.tracks)r.isVideoTrack()&&r.metadata.decoderConfig?this.getVideoTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig}):r.isAudioTrack()&&r.metadata.decoderConfig&&this.getAudioTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return af({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,r){const a=this.trackDatas.find(f=>f.track===e);if(a)return a;va(r,e.source._codec),N(r),N(r.decoderConfig);const n={...r.decoderConfig};N(n.codedWidth!==void 0),N(n.codedHeight!==void 0);let o=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const f=xl(i.data);if(!f)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=kl(f),o=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const f=Cl(i.data);if(!f)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=Rl(f),o=!0}const s=Kc(1/(e.metadata.frameRate??Ne),1e6).den,c=n.displayAspectWidth,l=n.displayAspectHeight,d=c===void 0||l===void 0?{num:1,den:1}:sa({num:c*n.codedHeight,den:l*n.codedWidth}),u=n.codec==="ap4h"||n.codec==="ap4x",y={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:d,decoderConfig:n,requiresAnnexBTransformation:o,hasAlphaChannel:u},timescale:s,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(y),this.trackDatas.sort((f,p)=>f.track.id-p.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),y}getAudioTrackData(e,i,r){const a=this.trackDatas.find(c=>c.track===e);if(a)return a;ga(r,e.source._codec),N(r),N(r.decoderConfig);const n={...r.decoderConfig};let o=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=Ba(Ut.tempFromBytes(i.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const l=fa[c.samplingFrequencyIndex],d=da[c.channelConfiguration];if(l===void 0||d===void 0)throw new Error("Invalid ADTS frame header.");n.description=nl({objectType:c.objectType,sampleRate:l,numberOfChannels:d}),o=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const s={muxer:this,track:e,type:"audio",info:{numberOfChannels:r.decoderConfig.numberOfChannels,sampleRate:r.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&mt.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:o,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(s),this.trackDatas.sort((c,l)=>c.track.id-l.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),s}getSubtitleTrackData(e,i){const r=this.trackDatas.find(n=>n.track===e);if(r)return r;vl(i),N(i),N(i.config);const a={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(a),this.trackDatas.sort((n,o)=>n.track.id-o.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),a}async addEncodedVideoPacket(e,i,r){const a=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,r);let o=i.data;if(n.info.requiresAnnexBTransformation){const c=[...Ot(o)].map(l=>o.subarray(l.offset,l.offset+l.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");o=wl(c,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const s=this.createSampleForTrack(n,o,i.timestamp,i.duration,i.type);await this.registerSample(n,s)}finally{a()}}async addEncodedAudioPacket(e,i,r){const a=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,r);let o=i.data;if(n.info.requiresAdtsStripping){const d=Ba(Ut.tempFromBytes(o));if(!d)throw new Error("Expected ADTS frame, didn't get one.");const u=d.crcCheck===null?nf:of;o=o.subarray(u)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let s=i.timestamp,c=i.duration;if(n.info.requiresPcmTransformation){const u=_t(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(c=o.byteLength/u/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const y=s-n.info.expectedNextPcmPacketTimestamp;if(y<.01)s=n.info.expectedNextPcmPacketTimestamp;else{const f=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,y);s=n.info.expectedNextPcmPacketTimestamp+f}}n.info.expectedNextPcmPacketTimestamp=s+c}const l=this.createSampleForTrack(n,o,s,c,i.type);await this.registerSample(n,l)}finally{a()}}async padWithSilence(e,i,r){const a=ve(r,e.timescale);if(r=a/e.timescale,a>0){const{sampleSize:n,silentValue:o}=_t(e.info.decoderConfig.codec),s=a*e.info.numberOfChannels,c=new Uint8Array(n*s).fill(o),l=this.createSampleForTrack(e,new Uint8Array(c.buffer),i,r,"key");await this.registerSample(e,l)}return r}async addSubtitleCue(e,i,r){const a=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,r);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{a()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const r=new Set([]);for(const l of e.cueQueue)N(l.timestamp<=i),N(e.lastCueEndTimestamp<=l.timestamp+l.duration),r.add(Math.max(l.timestamp,e.lastCueEndTimestamp)),r.add(l.timestamp+l.duration);const a=[...r].sort((l,d)=>l-d),n=a[0],o=a[1]??n;if(i<o)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const l=xd();this.auxBoxWriter.writeBox(l);const d=this.auxTarget._getSlice(0,this.auxWriter.getPos()),u=this.createSampleForTrack(e,d,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,u),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let l=0;l<e.cueQueue.length;l++){const d=e.cueQueue[l];if(d.timestamp>=o)break;ja.lastIndex=0;const u=ja.test(d.text),y=d.timestamp+d.duration;let f=e.cueToSourceId.get(d);if(f===void 0&&o<y&&(f=e.nextSourceId++,e.cueToSourceId.set(d,f)),d.notes){const m=_d(d.notes);this.auxBoxWriter.writeBox(m)}const p=kd(d.text,u?n:null,d.identifier??null,d.settings??null,f??null);this.auxBoxWriter.writeBox(p),y===o&&e.cueQueue.splice(l--,1)}const s=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,s,n,o-n,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=o}}createSampleForTrack(e,i,r,a,n){return{timestamp:r,decodeTimestamp:r,duration:a,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:ve(a,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let a=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const o=e.timestampProcessingQueue[n],s=ve(o.duration,e.timescale);a+=s}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:a,sampleDelta:1});else{const n=Ge(e.timeToSampleTable);n.sampleCount+=a}e.timestampProcessingQueue.length=0;return}const r=e.timestampProcessingQueue.map(a=>a.timestamp).sort((a,n)=>a-n);this.isFragmented||(e.startTimestampOffset??=r[0]);for(let a=0;a<e.timestampProcessingQueue.length;a++){const n=e.timestampProcessingQueue[a];n.decodeTimestamp=r[a];const o=ve(n.timestamp-n.decodeTimestamp,e.timescale),s=ve(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){N(e.lastSample);const c=ve(n.decodeTimestamp,e.timescale,!1),l=Math.round(c-e.lastTimescaleUnits);if(N(l>=0),e.lastTimescaleUnits+=l,e.lastSample.timescaleUnitsToNextSample=l,!this.isFragmented){let d=Ge(e.timeToSampleTable);if(N(d),d.sampleCount===1){d.sampleDelta=l;const y=e.timeToSampleTable[e.timeToSampleTable.length-2];y&&y.sampleDelta===l&&(y.sampleCount++,e.timeToSampleTable.pop(),d=y)}else d.sampleDelta!==l&&(d.sampleCount--,e.timeToSampleTable.push(d={sampleCount:1,sampleDelta:l}));d.sampleDelta===s?d.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:s});const u=Ge(e.compositionTimeOffsetTable);N(u),u.sampleCompositionTimeOffset===o?u.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o})}}else e.lastTimescaleUnits=ve(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:s}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,N(e.lastSample),N(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){N(i.type==="key");const a=ve(i.timestamp,e.timescale,!1),n=Math.round(a-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const a=e.track.metadata.maximumPacketCount;if(N(a!==void 0),e.samples.length>a)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${a}). Either add less packets or increase the maximum packet count.`)}let r=!1;if(!e.currentChunk)r=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const a=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(o=>{if(e===o)return i.type==="key";const s=o.sampleQueue[0];return s?s.type==="key":o.closed});a>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(r=!0,await this.finalizeFragment())}else r=a>=.5}r&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),N(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(N(!this.isFragmented),N(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((r,a)=>r+ve(a.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ge(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const r of e.currentChunk.samples)N(r.data),this.writer.write(r.data),r.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(N(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,r=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<r&&(i=n,r=n.sampleQueue[0].timestamp)}if(!i)break;const a=i.sampleQueue.shift();await this.addSampleToTrack(i,a)}}async finalizeFragment(e=!this.isCmaf){if(N(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const f=this.initBoxWriter??this.boxWriter;N(f),this.formatOptions.onMoov&&f.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const p=Nt(this);if(f.writeBox(p),this.formatOptions.onMoov){const{data:m,start:g}=f.writer.stopTrackingWrites();this.formatOptions.onMoov(m,g)}if(this.isCmaf){N(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new fi(this.writer);const m=this.boxWriter.measureBox(Qa()),g=this.boxWriter.measureBox(Ya(this,0));this.segmentHeaderSize=m+g,this.writer.seek(this.segmentHeaderSize)}}N(this.writer),N(this.boxWriter);const i=this.trackDatas.filter(f=>f.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const r=this.nextFragmentNumber++,a=en(r,i),n=this.writer.getPos(),o=n+this.boxWriter.measureBox(a);let s=o+qi,c=1/0;for(let f=0;f<i.length;f++){const p=i[f];p.currentChunk.offset=s,p.currentChunk.moofOffset=n,p.currentChunk.trafIndex=f;for(const m of p.currentChunk.samples)s+=m.size;c=Math.min(c,p.currentChunk.startTimestamp)}const l=s-o,d=l>=2**32;if(d)for(const f of i)f.currentChunk.offset+=Pa-qi;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const u=en(r,i);if(this.boxWriter.writeBox(u),this.formatOptions.onMoof){const{data:f,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(f,p,c)}N(this.writer.getPos()===o),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const y=di(d);y.size=l,this.boxWriter.writeBox(y),this.writer.seek(o+(d?Pa:qi));for(const f of i)for(const p of f.currentChunk.samples)this.writer.write(p.data),p.data=null;if(this.formatOptions.onMdat){const{data:f,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(f,p)}for(const f of i)f.finalizedChunks.push(f.currentChunk),this.finalizedChunks.push(f.currentChunk),f.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){N(this.writer),N(this.boxWriter),this.ensureOneEnabledTrack();const e=Nt(this),r=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;N(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=di(!0),this.boxWriter.writeBox(this.mdat);for(const a of this.trackDatas){for(const n of a.sampleQueue)await this.addSampleToTrack(a,n);a.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){N(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const r=i.track.metadata.maximumPacketCount;N(r!==void 0),e+=8*Math.ceil(2/3*r),e+=4*r,e+=8*Math.ceil(2/3*r),e+=12*Math.ceil(2/3*r),e+=4*r,e+=8*r}return e}async onTrackClose(e){const i=await this.mutex.acquire(),r=this.trackDatas.find(a=>a.track===e);r&&(r.closed=!0,r.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(r,1/0),this.processTimestamps(r)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(a=>a.type===e);if(i.length===0)continue;if(!i.some(a=>a.track.metadata.disposition?.default!==!1)){const a=i[0];a.track.metadata.disposition={...a.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){N(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let r=0;r<i.samples.length;r++){const a=i.samples[r];a.timestamp-=i.startTimestampOffset,a.decodeTimestamp-=i.startTimestampOffset}if(N(this.writer),N(this.boxWriter),this.fastStart==="in-memory"){this.mdat=di(!1);let i;for(let a=0;a<2;a++){const n=Nt(this),o=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let s=this.writer.getPos()+o+i;for(const c of this.finalizedChunks){c.offset=s;for(const{data:l}of c.samples)N(l),s+=l.byteLength,i+=l.byteLength}if(s<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const r=Nt(this);if(this.boxWriter.writeBox(r),this.formatOptions.onMoov){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(a,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const a of this.finalizedChunks)for(const n of a.samples)N(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(a,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Qa()),this.boxWriter.writeBox(Ya(this,i))}else{const i=this.writer.getPos(),r=bd(this.trackDatas);this.boxWriter.writeBox(r);const a=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(a)}else{N(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);N(i!==void 0);const r=this.writer.getPos()-i;if(this.mdat.size=r,this.mdat.largeSize=r>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,o)}const a=Nt(this);if(this.fastStart==="reserve"){N(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(Cf(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);if(this.formatOptions.onMoov){const{data:n,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,o)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Hd=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(a=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");a&&(r=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},Ld=(function(t){return function(e){function i(o){e.error=e.hasError?new t(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}var r,a=0;function n(){for(;r=e.stack.pop();)try{if(!r.async&&a===1)return a=0,e.stack.push(r),Promise.resolve().then(n);if(r.dispose){var o=r.dispose.call(r.value);if(r.async)return a|=2,Promise.resolve(o).then(n,function(s){return i(s),n()})}else a|=1}catch(s){i(s)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});class rr{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class sn extends rr{constructor(e){if(super(),this._connectedTrack=null,!rt.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${rt.join(", ")}.`);this._codec=e}}const cn=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Ud{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new Xc,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,r){const a=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,o=n.sizeChangeBehavior??"deny";let s=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(s=!0,o==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||s&&o!=="passThrough"){let u=n.transform?.width,y=n.transform?.height,f=n.transform?.fit??"fill";s&&o!=="passThrough"&&(N(this.outputWidth),N(this.outputHeight),N(o!=="deny"),u=this.outputWidth,y=this.outputHeight,f=o);const p=await e.transform({width:u,height:y,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:f,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=p.displayWidth,this.outputHeight=p.displayHeight),i&&e.close(),e=p,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const d=n.transform?.frameRate;if(d!==void 0){const u=e.timestamp+e.duration,y=aa(e.timestamp,d);if(this.frameRateLastSample!==null)if(y<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=u;return}else await this.padFrameRate(y,r);e===a&&(e=e.clone(),i=!0),e.setTimestamp(y),e.setDuration(1/d),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=y,this.frameRateLastEndTimestamp=u}await this.processAndEncode(e,r)}finally{i&&e.close()}}async processAndEncode(e,i){const r=this.encodingConfig;let a;if(r.transform?.process){let n=r.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const o=[];try{for(const s of n)s instanceof Pe?o.push(s):typeof VideoFrame<"u"&&s instanceof VideoFrame?o.push(new Pe(s)):o.push(new Pe(s,{timestamp:e.timestamp,duration:e.duration}))}catch(s){for(const c of o)c!==e&&c.close();for(const c of n)(c instanceof Pe&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw s}a=o}else a=[e];try{for(const n of a){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),N(this.encoderInitialized),this.closed)break;const o=this.encodingConfig.keyFrameInterval??2,s=Math.floor(n.timestamp/o),c={...this.defaultEncodeOptions,...n.encodeOptions,...i},l={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:o===0||s!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=s,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const d=n.clone(),u=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(d,l)).catch(y=>this.setError(y)).finally(()=>{this.customEncoderQueueSize--,d.close()});this.customEncoderQueueSize>=4&&await u}else{N(this.encoder);const d=n.toVideoFrame(),u=ea(this.preciseTimings,d.timestamp,f=>f.microsecondTimestamp),y=u!==-1?this.preciseTimings[u]:null;if(y&&y.microsecondTimestamp===d.timestamp?(y.timestamp!==n.timestamp&&(y.timestampIsValid=!1),y.duration!==n.duration&&(y.durationIsValid=!1)):(this.preciseTimings.splice(u+1,0,{microsecondTimestamp:d.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!d.format&&!d.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(d,l)}finally{d.close()}}else{this.splitter||(this.splitter=new Nd);const{colorFrame:p,alphaFrame:m}=await this.splitter.split(d);this.alphaFrameQueue.push(m);try{this.encoder.encode(p,l)}finally{p.close()}}else try{this.encoder.encode(d,l)}finally{d.close()}this.encoder.encodeQueueSize>=4&&await new Promise(f=>this.encoder.addEventListener("dequeue",f,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of a)n!==e&&n.close()}}async padFrameRate(e,i){const r=this.encodingConfig.transform.frameRate;N(this.frameRateLastSample);const a=Math.round((e-this.frameRateLastTimestamp)*r);for(let n=1;n<a;n++){const o={stack:[],error:void 0,hasError:!1};try{const s=Hd(o,this.frameRateLastSample.clone(),!1);s.setTimestamp(this.frameRateLastTimestamp+n/r),s.setDuration(1/r),await this.processAndEncode(s,i)}catch(s){o.error=s,o.hasError=!0}finally{Ld(o)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=Da(this.encodingConfig.quality,this.encodingConfig.bitrate);N(i!==void 0);const r=Ua({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let a=null,n;for(const s of r){const c=s.config;if(this.encodingConfig.onEncoderConfig?.(c),n=$a.find(d=>d.supports(this.encodingConfig.codec,c)),n){a=s;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){a=s;break}}catch{}}if(!a){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const s=r[0].config,c=r.map(({config:l,quantizer:d})=>d!==null?`quantizer ${d}`:`${l.bitrate} bps`);throw new Error(`This specific encoder configuration (${s.codec}, ${c.join(" / ")}, ${s.width}x${s.height}, hardware acceleration: ${s.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const o=a.config;if(a.quantizer!==null&&(this.defaultEncodeOptions=qa(this.encodingConfig.codec,a.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=o,this.customEncoder.onPacket=(s,c)=>{if(!(s instanceof pt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");cn(this.source._connectedTrack,s),this.encodingConfig.onEncodedPacket?.(s,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,s,c).catch(l=>{this.setError(l)})},this.customEncoder.onError=s=>{this.setError(s)},await this.customEncoder.init();else{const s=[],c=[];let l=0,d=0;const u=(f,p,m)=>{const g={};if(p){const C=new Uint8Array(p.byteLength);p.copyTo(C),g.alpha=C}let b=pt.fromEncodedChunk(f,g);const w=ea(this.preciseTimings,f.timestamp,C=>C.microsecondTimestamp),k=w!==-1?this.preciseTimings[w]:null;let S=null;this.emittedEncoderPackets===0&&b.type==="delta"&&m?.decoderConfig&&(S=Ol(this.encodingConfig.codec,m.decoderConfig,b.data)),(k&&k.microsecondTimestamp===f.timestamp||S!==null)&&(b=b.clone({timestamp:k?.timestampIsValid?k.timestamp:void 0,duration:k?.durationIsValid?k.duration:void 0,type:S??void 0})),cn(this.source._connectedTrack,b),this.encodingConfig.onEncodedPacket?.(b,m),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,b,m).catch(C=>{this.setError(C)}),this.emittedEncoderPackets++},y=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(f,p)=>{if(!this.alphaEncoder){u(f,null,p);return}const m=this.alphaFrameQueue.shift();N(m!==void 0),m?(this.alphaEncoder.encode(m,{...this.defaultEncodeOptions,keyFrame:f.type==="key"}),d++,m.close(),s.push({chunk:f,meta:p})):d===0?u(f,null,p):(c.push(l+d),s.push({chunk:f,meta:p}))},error:f=>{f.stack=y,this.setError(f)}}),this.encoder.configure(o),this.encodingConfig.alpha==="keep"){const f=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(p,m)=>{d--;const g=s.shift();for(N(g!==void 0),u(g.chunk,p,g.meta),l++;c.length>0&&c[0]===l;){c.shift();const b=s.shift();N(b!==void 0),u(b.chunk,null,b.meta)}},error:p=>{p.stack=f,this.setError(p)}}),this.alphaEncoder.configure(o)}}N(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,r=aa(this.frameRateLastEndTimestamp,i);await this.padFrameRate(r)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await el(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let ar=null;class Nd{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!ar){const a=new Blob([`(${Wd.toString()})()`],{type:"application/javascript"});ar=URL.createObjectURL(a)}this.worker=new Worker(ar),this.worker.addEventListener("message",a=>{const n=a.data,o=this.pendingRequests.get(n.id);o&&(this.pendingRequests.delete(n.id),"error"in n?o.reject(new Error(n.error)):o.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",a=>{const n=new Error(a.message||"Color/alpha splitter worker error.");for(const o of this.pendingRequests.values())o.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,r=ta();return this.pendingRequests.set(i,r),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),r.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Wd=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:o,sourceFrame:s}=n.data;e=e.then(async()=>{try{const{colorFrame:c,alphaFrame:l}=await i(s);self.postMessage({id:o,colorFrame:c,alphaFrame:l},{transfer:[c,l]})}catch(c){self.postMessage({id:o,error:c.message})}finally{s.close()}})});const i=async n=>{const o=n.format;if(!o)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const s=n.allocationSize();if((!t||t.byteLength!==s)&&(t=new Uint8Array(s)),await n.copyTo(t),o==="RGBA"||o==="BGRA")return r(t,o,n);if(o==="I420A"||o==="I420AP10"||o==="I420AP12"||o==="I422A"||o==="I422AP10"||o==="I422AP12"||o==="I444A"||o==="I444AP10"||o==="I444AP12")return a(t,o,n);throw new Error(`CPU color/alpha splitting does not support format '${o}'.`)},r=(n,o,s)=>{const c=s.visibleRect?.width??s.codedWidth,l=s.visibleRect?.height??s.codedHeight,d=c*l,u=Math.ceil(c/2),y=Math.ceil(l/2),f=d+u*y*2,p=new Uint8Array(f);for(let w=0,k=3;w<d;w++,k+=4)p[w]=n[k];p.fill(128,d);const m=new VideoFrame(n,{format:o==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:l,timestamp:s.timestamp,duration:s.duration??void 0}),g={format:"I420",codedWidth:c,codedHeight:l,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[p.buffer]},b=new VideoFrame(p,g);return{colorFrame:m,alphaFrame:b}},a=(n,o,s)=>{const c=s.visibleRect?.width??s.codedWidth,l=s.visibleRect?.height??s.codedHeight,d=o.includes("P10"),u=o.includes("P12"),y=d||u?2:1;let f,p;o.startsWith("I420")?(f=Math.ceil(c/2),p=Math.ceil(l/2)):o.startsWith("I422")?(f=Math.ceil(c/2),p=l):(f=c,p=l);const m=c*l,g=f*p,b=m*y,w=g*y,k=m*y,S=b+w*2,C=o.replace("A",""),O=Math.ceil(c/2),A=Math.ceil(l/2),L=O*A,I=L*y,j=k+2*I,Q=new Uint8Array(j),_=S;Q.set(n.subarray(_,_+k),0);const z=k,v=d?512:u?2048:128;y===1?Q.fill(v,z):new Uint16Array(Q.buffer,z,2*L).fill(v);const H=d?"I420P10":u?"I420P12":"I420",ee=new VideoFrame(n.subarray(0,S),{format:C,codedWidth:c,codedHeight:l,timestamp:s.timestamp,duration:s.duration??void 0}),W={format:H,codedWidth:c,codedHeight:l,timestamp:s.timestamp,duration:s.duration??void 0,transfer:[Q.buffer]},oe=new VideoFrame(Q,W);return{colorFrame:ee,alphaFrame:oe}}};class qd extends sn{constructor(e){vf(e),super(e.codec),this._encoder=new Ud(this,e)}add(e,i){if(!(e instanceof Pe))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Dd extends rr{constructor(e){if(super(),this._connectedTrack=null,!oi.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${oi.join(", ")}.`);this._codec=e}}class $d extends rr{constructor(e){if(super(),this._connectedTrack=null,!zt.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${zt.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ln{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>rt.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>oi.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>zt.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class nr extends ln{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new Od(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class fn extends nr{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...rt,...Li,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...zt]}_codecUnsupportedHint(e){return new un().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class dn extends nr{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...rt,...Li,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...zt]}}class un extends nr{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...rt,...oi]}_codecUnsupportedHint(e){return new fn().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const hn=["video","audio","subtitle"];class Wt{constructor(e,i,r,a,n){this.id=e,this.output=i,this.type=r,this.source=a,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Wt))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=ca(this.metadata.group),r=ca(e.metadata.group);for(const a of i)if(this.type!==e.type&&r.some(s=>a===s)||r.some(s=>a._pairedGroups.has(s)))return!0;return!1}}class jd extends Wt{constructor(e,i,r,a){super(e,i,"video",r,a)}}class Vd extends Wt{constructor(e,i,r,a){super(e,i,"audio",r,a)}}class Gd extends Wt{constructor(e,i,r,a){super(e,i,"subtitle",r,a)}}class qt{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof qt))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const or=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!Gc(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&al(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof qt)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof qt))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Kd extends Hi{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new qt,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Jr,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof ln))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof ot||e.target instanceof ir))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof ot&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof ot)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof ot&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){N(this._target instanceof ir);const i=this._target.getTarget(e),r=a=>{if(!(a instanceof ot))throw new TypeError("getTarget must return a Target.");return a};return i instanceof Promise?i.then(r):r(i)}async _getTarget(e){N(this._target instanceof ir);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(N(this._initTarget!==null),this._initTarget instanceof ot)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof ot)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),r=a=>(this.state==="canceled"?a._close():this._rememberTarget(a),this._emit("target",{target:a,request:e,isRoot:!0}),this._rootTarget=a,a);return i instanceof Promise?this._rootTargetPromise=i.then(r):r(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),r=new Ji(i,typeof e=="boolean"?e:e(i));return r.start(),r})()}addVideoTrack(e,i={}){if(!(e instanceof sn))throw new TypeError("source must be a VideoSource.");if(or(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&va({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof pt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new jd(this.tracks.length+1,this,e,r))}addAudioTrack(e,i={}){if(!(e instanceof Dd))throw new TypeError("source must be an AudioSource.");if(or(i),i.decoderConfig!==void 0&&ga({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof pt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Vd(this.tracks.length+1,this,e,r))}addSubtitleTrack(e,i={}){if(!(e instanceof $d))throw new TypeError("source must be a SubtitleSource.");or(i);const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Gd(this.tracks.length+1,this,e,r))}setMetadataTags(e){if(rl(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),r=this.tracks.reduce((o,s)=>o+(s.type===e.type?1:0),0),a=i[e.type].max;if(r===a)throw new Error(a===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${a} ${e.type} track${a===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const o=this.format.getSupportedVideoCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const o=this.format.getSupportedAudioCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const o=this.format.getSupportedSubtitleCodecs();if(o.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!o.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${o.map(s=>`'${s}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const r of hn){const a=this.tracks.reduce((o,s)=>o+(s.type===r?1:0),0),n=e[r].min;if(a<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const r of hn){const a=this.tracks.reduce((o,s)=>o+(s.type===r?1:0),0),n=e[r].min;if(a<n)throw new Error(n===e[r].max?`${this.format._name} requires exactly ${n} ${r} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${r} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ge._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const r=this._mutex.acquire();try{await this._muxer.start();const a=this.tracks.map(n=>n.source._start());await Promise.all(a)}finally{(await r)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ge._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ge._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(r=>r._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ge._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const r=await this._rootWriterPromise;r.finalized||(await r.flush(),await r.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const Xd={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Zd=new Set(["window","buddy","dancer"]);function mn(t){return!Zd.has(t.typeId)}const Qd=new Set(["bitmap","video","audio","pcm","objectUrl","frozenFrame"]);function Yd(t){const e=JSON.parse(JSON.stringify(t,(i,r)=>{if(!Qd.has(i))return r}));return JSON.stringify(e,null,2)}function Jd(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>eu(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const r=Xd[i.generator??""];return r?{...i,generator:r}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(mn)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(r=>({...r,effects:(r.effects??[]).filter(mn)}))}:i.data})),e}function eu(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,objectUrl:null,frozenFrame:null}}function tu(t,e){const i=new Blob([e],{type:"application/json"});Tt(t,i)}function Tt(t,e){const i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const sr=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function pn(t,e,i=1280){const r=i/Math.max(t,e,1e-4);return{width:qe(t*r),height:qe(e*r)}}function iu(t,e){const i=t/Math.max(e,1);let r="16:9",a=1/0;for(const n of sr){const o=Math.abs(i-n.rw/n.rh);o<a&&(a=o,r=n.id)}return r}function ru(t,e,i=1280){if(t<2||e<2)return pn(16,9,i);const r=Math.max(t,e),a=i/r;return{width:qe(t*a),height:qe(e*a)}}function au(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),r=e-i;return t<r?0:(t-r+1)/i}const nu=960,ou=1920;function cr(t,e=!1){const i=e?nu:ou;return gr(t.exportSettings.width,t.exportSettings.height,i,i)}async function su(t,e,i){const{width:r,height:a,format:n,quality:o,filename:s}=e.exportSettings,c=n==="jpg"?"image/jpeg":"image/png",l=await t.capture(e,i,qe(r),qe(a),c,o);Tt(`${s}.${n==="jpg"?"jpg":"png"}`,l)}async function cu(t,e,i){const{fps:r,duration:a,filename:n,quality:o}=e.exportSettings,{width:s,height:c}=cr(e,!1),l=Math.max(1,Math.round(a*r)),d=new Lc,u=d.folder(n)??d,y=document.createElement("canvas");for(let p=0;p<l;p++){const m=p/r;i?.(p,l),t.paintFrame(e,m,s,c,y);const g=await hu(y,"image/png",o);u.file(`${n}_${String(p).padStart(5,"0")}.png`,await g.arrayBuffer()),await lr()}const f=await d.generateAsync({type:"blob"});Tt(`${n}_sequence.zip`,f)}async function vn(t,e,i,r=!1){const a=await gn(t,e,du(),i,r);Tt(`${e.exportSettings.filename}.webm`,a)}async function lu(t,e,i,r=!1){try{return await fu(t,e,i,r),"mp4 clip saved"}catch(a){const n=uu();if(n){const s=await gn(t,e,n,i,r);return Tt(`${e.exportSettings.filename}.mp4`,s),"mp4 clip saved"}return await vn(t,e,i,r),`MP4 not available (${a instanceof Error?a.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function fu(t,e,i,r=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const a=Math.min(24,Math.max(12,e.exportSettings.fps||24)),n=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:o,height:s}=cr(e,r),c=new ft({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),l=new fn({fastStart:"in-memory"}),u=await yf(["avc","hevc"].filter(w=>l.getSupportedVideoCodecs().includes(w)),{width:o,height:s,quality:c});if(!u)throw new Error("this browser cannot encode H.264");const y=new hi,f=new Kd({format:l,target:y}),p=new qd({codec:u,quality:c,keyFrameInterval:1});f.addVideoTrack(p,{frameRate:a}),t.resetTemporal();const m=document.createElement("canvas");await f.start();try{const w=Math.max(1,Math.round(n*a)),k=1/a,S=e.exportSettings.loopClose!==!1;let C=null;for(let O=0;O<w;O++){const A=Ei(O/a,n,e.playback.mode,1,!0);i?.(O,w),t.paintFrame(e,A,o,s,m),O===0&&S?C=yn(m):bn(m,C,O,w,S);const L=new Pe(m,{timestamp:O*k,duration:k});await p.add(L,{keyFrame:O%a===0}),L.close(),await lr()}await f.finalize()}catch(w){try{await f.cancel()}catch{}throw w}const g=y.buffer;if(!g||g.byteLength<32)throw new Error("MP4 mux produced an empty file");const b=g.slice(0);Tt(`${e.exportSettings.filename}.mp4`,new Blob([b],{type:"video/mp4"}))}async function gn(t,e,i,r,a=!1){const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),o=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:s,height:c}=cr(e,a),l=document.createElement("canvas");l.width=s,l.height=c;const d=l.getContext("2d");if(!d)throw new Error("No 2d context");const u=l.captureStream(0),y=u.getVideoTracks()[0],f=new MediaRecorder(u,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),p=[];f.ondataavailable=k=>{k.data.size&&p.push(k.data)},t.resetTemporal(),f.start(200);const m=Math.max(1,Math.round(o*n)),g=document.createElement("canvas"),b=e.exportSettings.loopClose!==!1;let w=null;for(let k=0;k<m;k++){const S=Ei(k/n,o,e.playback.mode,1,!0);r?.(k,m),t.paintFrame(e,S,s,c,g),k===0&&b?w=yn(g):bn(g,w,k,m,b),d.drawImage(g,0,0,s,c),y.requestFrame?.(),await lr()}if(await new Promise(k=>{f.onstop=()=>k(),f.stop()}),u.getTracks().forEach(k=>k.stop()),!p.length)throw new Error("recorder produced no data");return new Blob(p,{type:i})}function du(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function uu(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function bn(t,e,i,r,a){if(!a||!e||i===0)return;const n=au(i,r);if(n<=0)return;const o=t.getContext("2d");o&&(o.save(),o.globalAlpha=n,o.drawImage(e,0,0,t.width,t.height),o.restore())}function yn(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function lr(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function hu(t,e,i){return new Promise((r,a)=>{t.toBlob(n=>{n?r(n):a(new Error("frame capture failed"))},e,i)})}async function mu(t,e,i,r,a=!1){const n=e.exportSettings.format;return n==="mp4"?lu(t,e,r,a):n==="webm"?vn(t,e,r,a):n==="sequence"?cu(t,e,r):su(t,e,i)}const pu=768,vu="sana",wn=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function gu(t=768,e=768){const i=Math.max(1,t),r=Math.max(1,e),a=pu/Math.max(i,r);return{width:qe(i*a,256),height:qe(r*a,256)}}function bu(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16);if(Number.isNaN(i))return"muted earth";const r=i>>16&255,a=i>>8&255,n=i&255;let o=wn[0],s=1e9;for(const c of wn){const l=(r-c.r)**2+(a-c.g)**2+(n-c.b)**2;l<s&&(s=l,o=c)}return o.name}function yu(t,e=[],i=!1){const r=t.trim()||"experimental photographic still, cinematic light, analog film",a="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${r}, ${a}`;const n=e.map(bu).filter((o,s,c)=>c.indexOf(o)===s).slice(0,4);return`${r}, palette of ${n.join(", ")}, ${a}`}function wu(t,e,i){return`#${[t,e,i].map(r=>Math.max(0,Math.min(255,r)).toString(16).padStart(2,"0")).join("")}`}function xu(t,e,i,r=4){const a=[];for(let n=0;n<3;n++)for(let o=0;o<3;o++){const s=Math.min(e-1,Math.floor((o+.5)/3*e)),l=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+s)*4,d=t[l],u=t[l+1],y=t[l+2],f=wu(d,u,y);a.some(m=>(m.r-d)**2+(m.g-u)**2+(m.b-y)**2<1400)||a.push({hex:f,r:d,g:u,b:y})}return a.slice(0,r).map(n=>n.hex)}function ku(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const r=i.getImageData(0,0,e.width,e.height);return xu(r.data,e.width,e.height)}function _u(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function Tu(t,e,i,r,a=vu){const n=t.length>400?t.slice(0,400):t,o=`width=${i}&height=${r}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(a)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${o}`}async function Su(t,e){const i=new AbortController,r=setTimeout(()=>i.abort(),e);try{const a=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!a.ok)throw a.status===429||a.status>=500?new Error(`busy:${a.status}`):new Error(`Generation failed (${a.status}). Try a shorter prompt.`);const n=await a.arrayBuffer(),o=new Uint8Array(n),s=a.headers.get("content-type")||"";if(!_u(o,s))throw new Error("Generation returned no image. Try again.");const c=s.startsWith("image/")?s.split(";")[0]:"image/jpeg";return new Blob([n],{type:c})}catch(a){throw a instanceof Error&&a.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):a}finally{clearTimeout(r)}}async function Cu(t){const{width:e,height:i}=gu(t.width??768,t.height??768),r=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let a=null;for(let o=0;o<2;o++){t.onStatus?.(o===0?"generating new image…":"still working, trying once more…");try{return await Su(Tu(r,t.seed+o*7919,e,i),o===0?22e3:3e4)}catch(s){a=s instanceof Error?s:new Error(String(s))}}const n=a?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":a?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function ke(t){const e=E.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Dt(t){if(!t)return;const e=E.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Ie(t,e,i=!0){E.setProject(r=>({...r,layers:r.layers.map(a=>a.id===t?e(a):a)}),i)}function $t(t,e=!0){E.setProject(i=>{const r=e?i.layers.map(a=>a.id===E.state.ui.selectedLayerId?{...a,sourceId:t.id}:a):i.layers;return{...i,sources:[...i.sources,t],layers:r}}),E.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function Eu(t){const e=E.project.sources.filter(r=>r.kind==="audio");for(const r of e)Qr(r);if(E.setProject(r=>{const a=r.sources.filter(s=>s.kind!=="audio"),n=r.layers.map(s=>e.some(c=>c.id===s.sourceId)?{...s,sourceId:a.find(c=>c.kind!=="audio")?.id??null}:s),o=Math.max(r.duration,t.duration||0);return{...r,sources:[...a,t],layers:n,duration:o}}),Yt(),E.project.playback.playing&&t.audio){try{const r=t.duration||t.audio.duration||1;t.audio.currentTime=E.project.playback.time%Math.max(r,.001)}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"";E.patchUi({selectedSourceId:t.id,status:`soundtrack ${t.name}${i?` · ${i}`:""} — hit Play; the mix moves the collage`})}async function fr(t,e=!1){for(const i of Array.from(t))try{const r=await Bc(i);if(r.kind==="audio"){Eu(r);continue}if(e){const a=E.state.ui.selectedSourceId;E.setProject(n=>({...n,sources:n.sources.map(o=>o.id===a?{...r,id:o.id}:o)})),E.patchUi({status:`replaced ${i.name}`})}else $t(r,!0)}catch(r){E.patchUi({status:r instanceof Error?r.message:"import failed"})}}function Pu(){E.setProject(e=>{const i=e.sources.find(a=>a.kind!=="audio")?.id??null,r=Nr(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,r]}});const t=E.project.layers.at(-1);E.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function Bu(t){E.setProject(e=>{const i=e.layers.find(o=>o.id===t);if(!i)return e;const r=JSON.parse(JSON.stringify(i));r.id=Ee("lyr"),r.name=`${i.name}*`,r.effects=r.effects.map(o=>({...o,id:Ee("fx")}));const a=e.layers.findIndex(o=>o.id===t),n=[...e.layers];return n.splice(a+1,0,r),{...e,layers:n}})}function Au(t){E.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function dr(t){const e=ke(E.project);if(!e)return;const i=Ur(t);Ie(e.id,r=>({...r,effects:[...r.effects,i]})),E.patchUi({selectedEffectId:i.id})}function Iu(t,e){Ie(t,i=>({...i,effects:i.effects.filter(r=>r.id!==e)}))}function xn(t,e,i){Ie(t,r=>{const a=r.effects.findIndex(c=>c.id===e),n=a+i;if(a<0||n<0||n>=r.effects.length)return r;const o=[...r.effects],[s]=o.splice(a,1);return o.splice(n,0,s),{...r,effects:o}})}function Mu(t,e){Ie(t,i=>({...i,effects:i.effects.map(r=>r.id===e?{...r,enabled:!r.enabled}:r)}))}function jt(t,e,i,r,a=!0){Ie(t,n=>({...n,effects:n.effects.map(o=>o.id===e?{...o,params:{...o.params,[i]:r}}:o)}),a)}function St(t,e=!1){const i=E.state.ui;(t==="all"||t==="selected")&&E.setProject(a=>({...a,seed:a.seed+1+(Date.now()&255)>>>0}),!1),E.setProject(a=>{let o=Or(a,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&i.includeCritters&&(o=Fr(o)),t==="all"&&i.includeIdol&&(o=ks(o)),o});const r=E.project.layers[0]?.effects.map(a=>a.typeId).join(" · ");E.patchUi({status:`${e?"wacky look":"look"} · ${r||t} · seed ${E.project.seed}`})}function Ru(){const t=ke(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(E.project.seed+Date.now())%9998;if(e){jt(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}dr("critters");const r=ke(E.project),a=Dt(r);r&&a?.typeId==="critters"&&jt(r.id,a.id,"seed",i),E.patchUi({status:"stamped floaters"})}function zu(){const t=ke(E.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(E.project.seed+Date.now()+17)%9998;if(e){jt(t.id,e.id,"seed",i),E.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}dr("dancer");const r=ke(E.project),a=Dt(r);r&&a?.typeId==="dancer"&&jt(r.id,a.id,"seed",i),E.patchUi({status:"stamped idol"})}function Fu(){E.setProject(t=>Ss({...t,seed:t.seed+1+(Date.now()&255)>>>0})),E.patchUi({status:"new floater and idol seeds"})}async function Ou(t){const e=E.project,{width:i,height:r}=gr(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const a=await t.capture(e,e.playback.time,i,r,"image/png",.92),n=await Xr(a,`print_${Date.now()}.png`);$t(n,!0),E.patchUi({status:"printed the live frame as a new still"})}catch(a){E.patchUi({status:a instanceof Error?a.message:"print failed"})}}function kn(t){E.setProject(e=>({...e,seed:e.seed+t>>>0}))}function _n(){tu(`${E.project.name||"phosphene"}.phos.json`,Yd(E.project)),E.patchUi({status:"project downloaded"})}async function Hu(t){const e=await t.text(),i=Jd(e);E.replace(i),E.patchUi({status:"project loaded — re-drop media if needed"})}function Lu(){const t=prompt("Preset name",`look ${E.project.presets.length+1}`);if(!t)return;const e=Si(E.project,t);E.setProject(i=>({...i,presets:[...i.presets,e]}))}function ur(t){const e=E.project.presets.find(i=>i.id===t);e&&(E.setProject(i=>ps(i,e)),E.patchUi({status:`preset ${e.name}`}))}function Uu(){const t=vs(E.project.presets,E.project.seed+Date.now());if(!t){E.patchUi({status:"no presets saved"});return}ur(t.id)}function Nu(t){const e=E.project.presets.find(i=>i.id===t);e&&E.setProject(i=>({...i,presets:[...i.presets,gs(e)]}))}function Wu(t){E.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Tn(){const t=E.state.ui,e=ke(E.project),i=Dt(e),r=t.selectedParam?.paramId;if(!e||!i||!r){E.patchUi({status:"select a numeric parameter first"});return}const a=i.params[r];if(typeof a!="number"){E.patchUi({status:"keyframes are numeric"});return}const n={id:Ee("kf"),time:E.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:r,value:a,easing:"smooth"};E.setProject(o=>({...o,keyframes:[...o.keyframes,n]})),E.patchUi({status:`key ${r} @ ${n.time.toFixed(2)}s`})}function qu(){E.setProject(t=>({...t,keyframes:[]}))}async function Du(){const t=E.project.sources.find(i=>i.id===E.state.ui.selectedSourceId);if(!t)return;const e=await Mc(t);e&&$t(e,!0)}function Sn(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of E.project.sources)Qr(e);E.replace(Wr()),E.patchUi({status:"new piece",prompt:"",generating:!1})}}async function $u(){if(E.state.ui.generating)return;const t=E.state.ui.prompt.trim();if(!t){E.patchUi({status:"type a prompt first"});return}E.patchUi({generating:!0,status:"generating new image…"});try{const e=E.project.sources.find(l=>l.id===E.state.ui.selectedSourceId),i=E.state.ui.useSourceForGen;let r=[];const a=e?.frozenFrame||e?.bitmap||e?.video||null;i&&a&&(r=ku(a));const n=yu(t,r,i&&r.length>0),o=E.project.seed+Date.now()>>>0,s=await Cu({prompt:n,seed:o,width:E.project.exportSettings.width,height:E.project.exportSettings.height,onStatus:l=>E.patchUi({generating:!0,status:l},!1)}),c=await Xr(s,`gen_${o}.jpg`);$t(c,!0),E.patchUi({generating:!1,status:i&&r.length?"new image from prompt + source":"new image from prompt"})}catch(e){E.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let mi=!1,Vt=null;function ju(t,e){Vt=e,t.innerHTML="",t.className="shell",t.innerHTML=`
    <header class="topbar">
      <div class="brand">PHOSPHENE<small>VISUAL INSTRUMENT</small></div>
      <span class="led" id="led"></span>
      <input type="text" id="proj-name" style="width:140px" />
      <button class="btn tiny" data-act="save">Save</button>
      <button class="btn tiny" data-act="load">Load</button>
      <button class="btn tiny hot" data-act="scratch">New</button>
      <button class="btn tiny acid" data-act="export" id="top-export">Export</button>
      <input type="file" id="proj-file" accept=".json,.phos.json" hidden />
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
          <div class="dropveil" id="veil">DROP IMAGE / VIDEO / AUDIO</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>PHOSPHENE</h3>
        <p>A collage machine. Stamp kits fly at the camera on colored grounds. Each clip locks one move — Rush, Tunnel, Lattice, Bloom, Spiral, Lanes, or Pulse — and stays there. Drop an MP3 and the fly-through follows the mix.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music. Move buttons keep the current kit. Kit buttons keep the current move.</li>
          <li><strong>Soundtrack</strong> — drop an MP3 (or wav/ogg/m4a). It does not replace your picture. Hit Play and the timeline follows the song. Exported clips are silent for now — the motion still follows the mix. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Gu(t),E.subscribe(()=>{mi||hr(t)}),hr(t)}async function Vu(t=!1){if(Vt&&!E.state.ui.exporting){E.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),E.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await mu(Vt,E.project,E.project.playback.time,(i,r)=>{E.patchUi({status:`export ${i+1}/${r}`,exporting:!0},!1)},t);E.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){E.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Gu(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const r=i.dataset.act,a=i.dataset.id;if(r==="save"&&_n(),r==="load"&&t.querySelector("#proj-file")?.click(),r==="scratch"&&Sn(),r==="imagine"&&$u(),r==="seed-"&&kn(-1),r==="seed+"&&kn(1),r==="rand-all"&&St("all"),r==="rand-wacky"&&St("all",!0),r==="stamp-chaos"&&Fu(),r==="reprint"&&Vt&&Ou(Vt),r==="rand-sel"&&St("selected"),r==="rand-param"){const n=i.dataset.paramId,o=ke(E.project),s=Dt(o);n&&o&&s&&E.patchUi({selectedParam:{layerId:o.id,effectId:s.id,paramId:n}},!1),St("param")}if(r==="help"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),r==="import"&&t.querySelector("#media-file")?.click(),r==="replace"&&t.querySelector("#replace-file")?.click(),r==="freeze"&&Du(),r==="gen"){const n=i.dataset.kind??"plasma",o=E.project.sources.find(d=>d.id===E.state.ui.selectedSourceId),s=i.dataset.kit??(Oe(n)?bi(o?.collageKit):void 0),c=i.dataset.move??(Oe(n)?br(o?.collageMove):void 0),l=Lr(n,s,c);$t(l,!0),E.patchUi({status:l.collageMove?`place · ${l.collageMove} · ${l.collageKit??""}`:l.collageKit?`place · ${n} · ${l.collageKit}`:n==="critters"?"floaters on this layer":`place · ${n}`})}if(r==="stamp-critters"&&Ru(),r==="stamp-idol"&&zu(),r==="add-layer"&&Pu(),r==="dup-layer"&&a&&Bu(a),r==="del-layer"&&a&&Au(a),r==="sel-layer"&&a&&E.patchUi({selectedLayerId:a,selectedEffectId:E.project.layers.find(n=>n.id===a)?.effects[0]?.id??null}),r==="sel-fx"&&a&&E.patchUi({selectedEffectId:a}),r==="sel-src"&&a&&E.patchUi({selectedSourceId:a}),r==="bypass"&&a){const n=ke(E.project);n&&Mu(n.id,a)}if(r==="fx-up"&&a){const n=ke(E.project);n&&xn(n.id,a,-1)}if(r==="fx-dn"&&a){const n=ke(E.project);n&&xn(n.id,a,1)}if(r==="fx-del"&&a){const n=ke(E.project);n&&Iu(n.id,a)}if(r==="key"&&Tn(),r==="key-clear"&&qu(),r==="pst-save"&&Lu(),r==="pst-rand"&&Uu(),r==="pst-load"&&a&&ur(a),r==="pst-dup"&&a&&Nu(a),r==="pst-del"&&a&&Wu(a),r==="export"&&Vu(),r==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));E.setProject(o=>({...o,duration:Math.max(o.duration,n),exportSettings:{...o.exportSettings,duration:n,format:"mp4",fps:24,bitrate:Math.min(o.exportSettings.bitrate,8)}})),E.patchUi({status:`${n}s clip ready — hit Export`})}if(r==="exp-aspect"&&a){const n=sr.find(o=>o.id===a);if(n){const o=pn(n.rw,n.rh,1280);E.setProject(s=>({...s,exportSettings:{...s.exportSettings,width:o.width,height:o.height}}))}}if(r==="exp-aspect-src"){const n=E.project,o=ke(n),s=n.sources.find(d=>d.id===(o?.sourceId??n.sources[0]?.id)),c=s?.kind==="audio"?n.sources.find(d=>d.kind!=="audio"):s,l=ru(c?.width??1280,c?.height??720,1280);E.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:l.width,height:l.height}}))}if(r==="play"&&(Yt(),E.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),r==="use-src"&&a){if(E.project.sources.find(s=>s.id===a)?.kind==="audio")return;const o=ke(E.project);o&&Ie(o.id,s=>({...s,sourceId:a}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(Hu(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(fr(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(fr(i.files,!0),i.value=""),i.id==="quality"&&E.setProject(r=>({...r,quality:i.value})),i.id==="add-fx"&&(i.value&&dr(i.value),i.value=""),i.id==="blend"){const r=ke(E.project);r&&Ie(r.id,a=>({...a,blendMode:i.value}))}if(i.id==="mask-type"){const r=ke(E.project);r&&Ie(r.id,a=>({...a,mask:{...a.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&ur(i.value),i.id==="exp-format"&&E.setProject(r=>({...r,exportSettings:{...r.exportSettings,format:i.value}})),i.id==="play-mode"&&E.setProject(r=>({...r,playback:{...r.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,r=E.project;if(i.id==="gen-prompt"&&E.patchUi({prompt:i.value},!1),i.id==="gen-src"&&E.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&E.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&E.patchUi({includeIdol:i.checked}),i.id==="seed"&&E.setProject(a=>({...a,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&E.setProject(a=>({...a,randomAmount:Number(i.value)}),!1),i.id==="speed"&&E.setProject(a=>({...a,playback:{...a.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&E.setProject(a=>({...a,playback:{...a.playback,loop:i.checked}}),!1),i.id==="loop-close"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&E.setProject(a=>({...a,playback:{...a.playback,freeze:i.checked}}),!1),i.id==="time"&&E.setProject(a=>({...a,playback:{...a.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const a=ke(r);a&&Ie(a.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const a=ke(r);a&&Ie(a.id,n=>({...n,enabled:i.checked}),!1)}for(const a of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${a}`&&E.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[a]:Number(i.value)}}),!1),i.id===`lfb-${a}`){const n=ke(r);n&&Ie(n.id,o=>({...o,feedback:{...o.feedback,[a]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const a=ke(r),n=i.id.slice(3);a&&n in a.transform&&Ie(a.id,o=>({...o,transform:{...o.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){mi=!0;const a=Ku(i.dataset.fxType||"",i.dataset.param),n=Xu(i,a);jt(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),E.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="exp-q"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&E.setProject(a=>({...a,exportSettings:{...a.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{mi&&(mi=!1,hr(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),E.state.ui.dropActive||E.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&E.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),E.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&fr(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),Yt(),E.setProject(r=>({...r,playback:{...r.playback,playing:!r.playback.playing}}))),(e.key==="r"||e.key==="R")&&St(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&St("all",!0),(e.key==="k"||e.key==="K")&&Tn(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Sn()),e.key==="?"&&E.patchUi({helpOpen:!E.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),_n()))})}function Ku(t,e){return je(t)?.params.find(i=>i.id===e)}function Xu(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function hr(t){const{project:e,ui:i}=E.state,r=t.querySelector("#proj-name"),a=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),o=t.querySelector("#quality");r&&document.activeElement!==r&&(r.value=e.name),a&&document.activeElement!==a&&(a.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),o&&(o.value=e.quality);const s=t.querySelector("#top-export");s&&(s.disabled=i.exporting);const c=t.querySelector("#inc-critters");c&&(c.checked=i.includeCritters);const l=t.querySelector("#inc-idol");l&&(l.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),Zu(t.querySelector("#rail")),Qu(t.querySelector("#stack")),Ju(t.querySelector("#transport"))}function Zu(t){const e=E.project,i=E.state.ui;t.innerHTML=`
    <div class="sec">Sources</div>
    <div class="row">
      <button class="btn tiny acid" data-act="import">Import</button>
      <button class="btn tiny" data-act="replace">Replace</button>
      <button class="btn tiny" data-act="freeze">Still frame</button>
      <button class="btn tiny" data-act="reprint">Print frame</button>
      <input id="media-file" type="file" accept="image/*,video/*,audio/*,.tif,.tiff,.mov,.webm,.mp4,.gif,.mp3,.wav,.ogg,.m4a,.aac,.flac" multiple hidden />
      <input id="replace-file" type="file" accept="image/*,video/*,audio/*,.tif,.tiff,.mov,.webm,.mp4,.gif,.mp3,.wav,.ogg,.m4a,.aac,.flac" hidden />
    </div>
    <hr class="div" />
    <div class="sec">Generate new image</div>
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${ze(i.prompt)}</textarea>
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
      <button class="btn tiny" data-act="gen" data-kind="wallpaper" data-move="rush">Rush</button>
      <button class="btn tiny" data-act="gen" data-kind="giants" data-move="tunnel">Tunnel</button>
      <button class="btn tiny" data-act="gen" data-kind="shower" data-move="lattice">Lattice</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="bloom">Bloom</button>
    </div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="spiral">Spiral</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="lanes">Lanes</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="pulse">Pulse</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="mix">Mix</button>
    </div>
    <div class="row">
      <button class="btn tiny hot" data-act="rand-wacky">Rand wacky</button>
      <button class="btn tiny" data-act="reprint">Print frame</button>
    </div>
    <div class="status" style="margin-top:4px">Each clip keeps one move. Rush is the fly-at-the-lens. The others are pattern versions of that same coming-toward-you feel. Kit buttons keep the last move. Mix rolls a locked move.</div>
    <div style="margin-top:8px">
      ${e.sources.map(r=>{const a=r.kind==="audio"?`soundtrack · ${Ct(r.duration||0)}`:`${r.kind} ${r.width}×${r.height}`,n=r.kind==="audio"?'<span class="status">mix</span>':`<button class="btn tiny" data-act="use-src" data-id="${r.id}">use</button>`;return`
        <div class="thumb ${r.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${r.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${ze(r.name)}</b><span>${a}</span></div>
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
    ${e.presets.map(r=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${ze(r.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${r.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${r.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${r.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Qu(t){const e=E.project,i=ke(e),r=Dt(i),a=hs();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${ze(n.name)}</span>
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
        <select id="blend">${zc.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
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
        <div class="fx ${n.id===r?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${o}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${o+1}. ${ze(je(n.typeId)?.name??n.typeId)}</span>
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
        ${ms.map(n=>{const o=(a[n.id]??[]).filter(s=>s.id!=="dancer");return o.length?`<optgroup label="${n.label}">${o.map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${r?`
        <hr class="div" />
        <div class="sec">${ze(je(r.typeId)?.name??"params")} · ${ze(je(r.typeId)?.description??"")}</div>
        ${(je(r.typeId)?.params??[]).map(n=>Yu(i.id,r,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",o=>{o.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",o=>o.preventDefault()),n.addEventListener("drop",o=>{o.preventDefault();const s=Number(o.dataTransfer?.getData("text/plain")),c=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(s)||Number.isNaN(c)||s===c||Ie(i.id,l=>{const d=[...l.effects],[u]=d.splice(s,1);return d.splice(c,0,u),{...l,effects:d}})})})}function Yu(t,e,i){const r=e.params[i.id]??i.default,a=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${a} ${r?"checked":""}/> ${ze(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${ze(i.label)}</span><input type="color" ${a} value="${ze(String(r))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${ze(i.label)}</span>
      <select ${a}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===r?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${ze(i.label)}</span>
    <input type="range" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(r)}" />
    <input type="number" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(r).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function Ju(t){const e=E.project,i=e.playback,r=e.exportSettings,a=E.state.ui.exporting,n=Math.max(e.duration,.1),o=i.time/n*100;t.innerHTML=`
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
        <span class="status" id="clock">${Ct(i.time)} / ${Ct(n)}</span>
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
        ${sr.map(s=>`<button class="btn tiny ${iu(r.width,r.height)===s.id?"acid":""}" data-act="exp-aspect" data-id="${s.id}">${s.label}</button>`).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${r.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${r.height}" title="height" />
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map(s=>`<option ${r.format===s?"selected":""} value="${s}">${s}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2,4,6,8].map(s=>`<button class="btn tiny ${Number(r.duration)===s?"acid":""}" data-act="clip" data-secs="${s}" ${a?"disabled":""}>${s}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="8" step="1" style="width:48px" value="${r.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${r.loopClose!==!1?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${a?"disabled":""}>${a?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",s=>{const c=s.currentTarget.getBoundingClientRect(),l=(s.clientX-c.left)/c.width*n;E.setProject(d=>({...d,playback:{...d.playback,time:Math.max(0,l)}}))})}function Se(t,e,i,r,a,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${r}" max="${a}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${r}" max="${a}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function ze(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ct(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function Cn(t,e){if(E.state.ui.exporting)return;const i=1,r=e.getBoundingClientRect(),a=Math.max(16,Math.floor(r.width*i)),n=Math.max(16,Math.floor(r.height*i));(t.width!==a||t.height!==n)&&(t.width=a,t.height=n)}function e0(t,e,i){const r=t.querySelector("#hud");r&&(r.textContent=`PHOSPHENE  ${Ct(i)}  ${e.toFixed(0)}FPS  ${E.project.quality.toUpperCase()}`);const a=Math.max(E.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/a*100}%`);const o=t.querySelector("#clock");o&&(o.textContent=`${Ct(i)} / ${Ct(a)}`);const s=t.querySelector("#time");s&&document.activeElement!==s&&(s.value=String(i));const c=t.querySelector("#status-line");c&&(c.textContent=E.state.ui.status)}const En=window;En.__phospheneMark=!0;const Pn=document.querySelector("#app");if(!Pn)throw new Error("#app missing");const mr=Pn,pr=document.createElement("canvas");async function t0(){await new Promise(c=>requestAnimationFrame(()=>c()));let t;try{t=new Tc(pr)}catch(c){const l=document.querySelector("#boot-note");l?l.textContent=`PHOSPHENE · plasma · ${c instanceof Error?c.message:"WebGL failed"}`:mr.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${c instanceof Error?c.message:String(c)}</p>
      </div>`;return}ju(mr,t),En.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>Cn(pr,e)).observe(e),Cn(pr,e);let r=performance.now(),a=60,n=0,o=performance.now();function s(c){const l=Math.min(.08,(c-r)/1e3);r=c;const d=E.state.ui.exporting,u=E.project,y=Hs(u,u.playback.time),f=Dr(u);if(!d&&u.playback.playing&&!u.playback.freeze)if(f?.audio&&u.playback.mode==="forward"){Ai(f.audio,u.playback);const p=f.audio.currentTime;Number.isFinite(p)&&E.setProject(m=>({...m,playback:{...m.playback,time:p}}),!1)}else{let p=u.playback.time+l*y;const m=Math.max(u.duration,.001);u.playback.loop?p=(p%m+m)%m:p=Math.min(p,m),E.setProject(g=>({...g,playback:{...g.playback,time:p}}),!1),f?.audio&&Ai(f.audio,{...u.playback,playing:!1,time:p})}else f?.audio&&Ai(f.audio,{...u.playback,playing:!1});for(const p of E.project.sources)if(p.kind==="video"&&p.video&&!E.project.playback.freeze){const m=Ei(E.project.playback.time,p.duration||p.video.duration||1,E.project.playback.mode,1,E.project.playback.loop);Rc(p,m,{playing:E.project.playback.playing,freeze:E.project.playback.freeze,mode:E.project.playback.mode,speed:E.project.playback.speed})}if(!d)try{t.render(E.project,E.project.playback.time)}catch(p){E.patchUi({status:p instanceof Error?p.message:"render error"},!1)}n++,c-o>400&&(a=n*1e3/(c-o),o=c,n=0),e0(mr,a,E.project.playback.time),requestAnimationFrame(s)}requestAnimationFrame(s)}t0()})();

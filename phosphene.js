(function(){"use strict";function Ee(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const aa=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],sa=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],oa=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ca=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],la=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ar=`
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
`,sr=`
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
  float crystal, puff;
  vec3 ts;
};
Fig figRoll(float seed, float time) {
  Fig f;
  f.t = figDanceT(seed, time + (u_audio > 0.001 ? u_audio * 0.12 : 0.0));
  f.style = figDanceStyle(seed);
  f.facing = 0.0;
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
    f.peck = 0.32 * max(0.0, sin(f.t * 10.5));
  } else if (f.style < 2.5) {
    f.spin = sin(f.t * mix(1.4, 2.6, figH(seed + 0.44))) * mix(0.16, 0.38, figH(seed + 0.45));
    f.sway = sin(f.t * 1.15) * 0.16;
    f.bob = abs(sin(f.t * 3.1)) * 0.07;
  } else if (f.style < 3.5) {
    f.lean = 0.16 + 0.1 * sin(f.t * 2.4);
    f.bob = -0.08 + 0.05 * sin(f.t * 1.6);
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
    f.sway = sin(f.t * 5.6) * 0.16;
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
  f.nEyes = 2.0 + step(0.7, figH(seed + 6.1));
  f.eyeY = f.hs * mix(-0.02, 0.22, figH(seed + 6.2));
  f.eyeZ = f.hs * mix(0.92, 1.32, figH(seed + 6.3));
  f.eyeSpread = f.hs * mix(0.22, 0.78, figH(seed + 6.4));
  f.eyeR = f.hs * mix(0.28, 0.62, figH(seed + 6.5));
  f.eyeSq = mix(0.4, 1.7, figH(seed + 6.55));
  f.mouth = figH(seed + 7.0);
  f.ears = step(0.06, figH(seed + 8.3));
  f.tusks = step(0.42, figH(seed + 9.1));
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
  if (f.petals > 0.5) f.halo = 0.0;
  if (u_grow > 0.5 && u_grow < 1.5) { f.petals = 1.0; f.halo = 0.0; f.antenna = 0.0; f.crystal = 0.0; f.puff = 0.0; }
  else if (u_grow > 1.5 && u_grow < 2.5) { f.halo = 1.0; f.petals = 0.0; f.crystal = 0.0; f.puff = 0.0; }
  else if (u_grow > 2.5 && u_grow < 3.5) { f.antenna = 1.0; f.halo = 0.0; f.crystal = 0.0; f.puff = 0.0; }
  else if (u_grow > 3.5 && u_grow < 4.5) { f.skirt = 1.0; f.crystal = 0.0; f.puff = 0.0; }
  else if (u_grow > 4.5 && u_grow < 5.5) { f.wings = 1.0; f.crystal = 0.0; f.puff = 0.0; }
  else if (u_grow > 5.5 && u_grow < 6.5) { f.horn = 1.0; f.crest = 1.0; f.crystal = 0.0; f.puff = 0.0; }
  else if (u_grow > 6.5 && u_grow < 7.5) { f.crystal = 1.0; f.halo = 0.0; f.petals = 0.0; f.puff = 0.0; }
  else if (u_grow > 7.5 && u_grow < 8.5) { f.puff = 1.0; f.crystal = 0.0; f.wings = 0.0; }
  else if (u_grow > 8.5) {
    f.petals = 0.0; f.skirt = 0.0; f.antenna = 0.0; f.halo = 0.0;
    f.tusks = 0.0; f.wings = 0.0; f.bow = 0.0; f.pack = 0.0; f.orb = 0.0;
    f.extraLeg = 0.0; f.arms = 2.0; f.nEyes = min(f.nEyes, 2.0);
    f.crest = 0.0; f.horn = 0.0; f.crystal = 0.0; f.puff = 0.0;
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
  vec2 d = vec2(figBox(hp - vec3(0.0, hs * 0.04, hs * 0.78), vec3(hs * 0.78, hs * 0.66, hs * 0.16)), 2.4);
  for (int i = 0; i < 3; i++) {
    if (float(i) >= f.nEyes) break;
    float xi = 0.0;
    if (f.nEyes > 1.5 && f.nEyes < 2.5) xi = float(i) < 0.5 ? -f.eyeSpread : f.eyeSpread;
    if (f.nEyes > 2.5) xi = (float(i) - 1.0) * f.eyeSpread;
    float yi = f.eyeY + (float(i) - 1.0) * f.hs * 0.08;
    float eR = f.eyeR * mix(0.78, 1.28, fract(f.mouth + float(i) * 0.37));
    vec3 ep = hp - vec3(xi, yi, f.eyeZ);
    ep.y *= f.eyeSq;
    ep.z *= 1.55;
    d = figMin(d, vec2(length(ep) - eR, 5.0));
    vec3 look = vec3((u_audio - 0.35) * 0.28, u_bass * 0.18 - 0.04, 0.0) * eR;
    d = figMin(d, vec2(length(ep - vec3(0.0, 0.0, eR * 0.42) - look) - eR * 0.4, 5.6));
  }
  if (f.mouth < 0.3 || f.snout > 0.72) {
    vec3 sn = hp - vec3(0.0, hs * -0.04, hs * mix(1.28, 1.62, f.snout));
    d = figMin(d, vec2(figBox(sn, vec3(hs * mix(0.22, 0.38, f.snout), hs * 0.16, hs * mix(0.28, 0.48, f.snout))), 6.0));
  } else if (f.mouth < 0.55) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.02, hs * 0.4), vec3(0.0, 0.0, hs * 1.55), hs * 0.09), 7.0));
  } else if (f.mouth < 0.78) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.06, hs * 0.5), vec3(hs * 0.12, -hs * 0.4, hs * 1.42), hs * 0.1), 6.0));
  } else {
    d = figMin(d, vec2(figBox(hp - vec3(0.0, -hs * 0.14, hs * 0.95), vec3(hs * 0.34, hs * 0.08, hs * 0.18)), 7.0));
  }
  if (f.ears > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.48, hs * 0.55, 0.1), vec3(-hs * 1.15, hs * 1.35, 0.16), hs * 0.09), 7.5));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.52, hs * 0.42, 0.12), vec3(hs * 0.88, hs * 0.85, 0.04), hs * 0.07), 7.5));
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
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.08, hs * 0.82, 0.08), vec3(-hs * 0.52, hs * 1.08, 0.12), hs * 0.065), 6.9));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.08, hs * 0.82, 0.08), vec3(hs * 0.52, hs * 1.08, 0.12), hs * 0.065), 6.9));
  }
  if (f.petals > 0.5 && uQuality >= 0.5) {
    for (int k = 0; k < 5; k++) {
      float a = float(k) * 1.25663706 + 0.18;
      vec3 tip = vec3(sin(a) * hs * 1.32, cos(a) * hs * 1.18, hs * 0.18);
      d = figMin(d, vec2(figCap(hp, vec3(0.0, hs * 0.18, hs * 0.08), tip, hs * 0.068), 6.9));
    }
  }
  if (f.antenna > 0.5) {
    vec3 al = vec3(-hs * 0.38, hs * 1.82, 0.12);
    vec3 ar = vec3(hs * 0.4, hs * 1.72, 0.1);
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.22, hs * 0.62, hs * 0.08), al, 0.026), 4.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.22, hs * 0.58, hs * 0.06), ar, 0.024), 4.0));
    d = figMin(d, vec2(length(hp - al) - 0.05, 6.9));
    d = figMin(d, vec2(length(hp - ar) - 0.045, 6.9));
  }
  if (f.halo > 0.5) {
    vec3 hz = hp - vec3(0.0, hs * 0.42, hs * 0.06);
    float ring = abs(length(hz.xy) - hs * 1.32) - 0.032;
    d = figMin(d, vec2(max(ring, abs(hz.z) - 0.022), 8.0));
  }
  if (f.crest > 0.5) {
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, hs * 1.08, hs * 0.12), hs * 0.22), 4.0));
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.16, hs * 0.7, hs * 0.06), vec3(-hs * 0.06, hs * 1.32, hs * 0.14), hs * 0.042), 4.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.16, hs * 0.68, hs * 0.06), vec3(hs * 0.08, hs * 1.24, hs * 0.12), hs * 0.038), 4.0));
  }
  if (f.crystal > 0.5) {
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, hs * 1.28, hs * 0.22), hs * 0.3), 8.0));
    d = figMin(d, vec2(figOcta(hp - vec3(-hs * 0.46, hs * 0.92, hs * 0.18), hs * 0.16), 8.0));
    d = figMin(d, vec2(figOcta(hp - vec3(hs * 0.4, hs * 0.98, hs * 0.16), hs * 0.14), 8.0));
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
  p = figRotY(p, f.facing + f.spin * 0.55 + f.sway * 0.42);
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
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, f.hs * 0.22, f.hs * 0.18), f.hs * 0.55), 2.2));
  } else if (f.headKind < 0.92) {
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, f.hs * 0.58, 0.0), f.hs * 0.7), 2.0));
    d = figMin(d, vec2(figOcta(hp + vec3(0.0, f.hs * 0.12, 0.0), f.hs * 0.92), 2.2));
  } else {
    d = figMin(d, vec2(figBox(hp - vec3(0.0, 0.0, f.hs * 0.22), vec3(f.hs * 1.05, f.hs * 0.28, f.hs * 0.22)), 2.0));
    d = figMin(d, vec2(figOcta(hp - vec3(0.0, f.hs * 0.12, f.hs * 0.42), f.hs * 0.48), 2.2));
  }
  if (length(hp) < f.hs * 3.6) d = figMin(d, figureFaceF(hp, f));
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
    d = figMin(d, vec2(length(p - vec3(-f.ts.x * 0.95, f.ts.y * 0.12, 0.04)) - f.ts.x * 0.72, 6.9));
    d = figMin(d, vec2(length(p - vec3(f.ts.x * 0.92, f.ts.y * 0.08, 0.02)) - f.ts.x * 0.66, 6.9));
    d = figMin(d, vec2(length(p - vec3(0.0, -f.ts.y * 0.22, 0.06)) - f.ts.x * 0.95, 1.5));
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
    if (vibe > 0.82) hue = mix(0.86, 0.98, figH(seed + matId));
    else if (vibe > 0.64) hue = mix(0.07, 0.16, figH(seed + matId));
    else if (vibe > 0.46) hue = mix(0.52, 0.74, figH(seed + matId));
    else if (vibe > 0.28) hue = mix(0.30, 0.48, figH(seed + matId));
    sat = mix(0.55, 0.95, figH(seed + matId + 8.2));
    val = mix(0.82, 1.0, figH(seed + matId + 9.1));
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
    sat = mix(0.72, 1.0, figH(seed + matId + 8.2));
    val = mix(0.86, 1.0, figH(seed + matId + 9.1));
  } else if (u_coat > 5.5 && u_coat < 6.5) {
    hue = mix(0.88, 0.98, figH(seed + matId));
    sat = mix(0.78, 1.0, figH(seed + matId + 2.0));
    val = mix(0.88, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 6.5 && u_coat < 7.5) {
    hue = mix(0.72, 0.86, figH(seed + matId));
    sat = mix(0.55, 0.88, figH(seed + matId + 2.0));
    val = mix(0.55, 0.9, figH(seed + matId + 3.0));
  } else if (u_coat > 7.5 && u_coat < 8.5) {
    hue = mix(0.48, 0.58, figH(seed + matId));
    sat = mix(0.12, 0.42, figH(seed + matId + 2.0));
    val = mix(0.9, 1.0, figH(seed + matId + 3.0));
  } else if (u_coat > 8.5) {
    hue = mix(0.02, 0.09, figH(seed + matId));
    sat = mix(0.82, 1.0, figH(seed + matId + 2.0));
    val = mix(0.78, 1.0, figH(seed + matId + 3.0));
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
  if (u_coat > 4.5) col += vec3(0.1, 0.16, 0.22) * pow(1.0 - ndv, 1.6);
  if (u_coat > 8.5) col += vec3(0.22, 0.08, 0.02) * pow(spec * 6.0, 1.4);
  float ink = 1.0 - smoothstep(0.08, 0.36, ndv);
  col = mix(col, vec3(0.03, 0.015, 0.05), ink * 0.94);
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
  vec3 ro = vec3(0.0, 0.42, camZ);
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
`,fa=`
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
  vec3 ro = vec3(0.0, 0.42, camZ);
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
`,da=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,ua=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,or=`
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
`,ci={id:"dancer",name:"Idol",category:"wacky",description:"One seed-grown low-poly creature with a face like an animal that does not exist. Grow picks petals, a halo, antennae, a skirt, wings, horns, crystals, puff, or a quieter body. Coat tints the paint. Stamp for a new silhouette. Drop an MP3 and they dance to it. Mini army fills the frame with tiny ones in sync",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${or}${sr}`,applyGlsl:da};function ha(t){return t?{...ci,extraUniforms:`${or}${sr}${fa}`,applyGlsl:ua}:ci}const ma=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${ar}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},ci],cr=[...aa,...sa,...oa,...ca,...la,...ma],pa=new Map(cr.map(t=>[t.id,t]));function Fe(t){return pa.get(t)}function ga(){const t={};for(const e of cr)(t[e.category]??=[]).push(e);return t}const va=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function Ke(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function qt(t,e,i){return Math.min(i,Math.max(e,t))}function Ne(t,e=16){return Math.max(e,Math.round(t)&-2)}function lr(t,e,i,r){const n=Math.min(1,i/Math.max(t,1),r/Math.max(e,1));return{width:Ne(t*n),height:Ne(e*n)}}function li(t,e,i){return t+(e-t)*i}function ba(t){const e=qt(t,0,1);return e*e*(3-2*e)}function fi(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(r=>({...r,sourceId:null,effects:r.effects.map(n=>({...n,params:{...n.params}})),transform:{...r.transform},mask:{...r.mask,rect:{...r.mask.rect},center:{...r.mask.center}},feedback:{...r.feedback}})),keyframes:t.keyframes.map(r=>({...r})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Ee("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function ya(t,e){const i=e.data,r=t.sources.map(a=>a.id),n=i.layers.map((a,s)=>({...a,id:a.id,sourceId:a.sourceId&&r.includes(a.sourceId)?a.sourceId:r[Math.min(s,r.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:n,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function wa(t,e){if(t.length===0)return null;const i=Ke(e);return t[Math.floor(i()*t.length)]}function xa(t){return{...t,id:Ee("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const nt=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],ht=[{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"}];function _a(t,e,i,r){if(e.randomizable===!1)return i;if(e.kind==="bool")return r<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return r<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(d=>{const u=parseInt(d.slice(1),16),y=u>>16&255,f=u>>8&255,g=u&255,m=v=>qt(Math.round(li(v,t()*255,r)),0,255);return`#${[m(y),m(f),m(g)].map(v=>v.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const n=e.min??0,a=e.max??1,s=typeof i=="number"?i:Number(e.default),o=n+t()*(a-n),c=li(s,o,Math.max(r,.35));return e.kind==="int"?Math.round(c):c}function di(t,e,i,r){const n=Fe(t.typeId);if(!n)return t;const a=Ke(e),s={...t.params};for(const o of n.params)r&&o.id!==r||(s[o.id]=_a(a,o,s[o.id]??o.default,qt(i,0,1)));return{...t,params:s}}function ka(t,e,i,r=!1,n){const a=t.effects.map((s,o)=>r&&n&&s.id!==n?s:di(s,e+o*997,i));return{...t,effects:a}}function ui(t,e,i){const r=Fe(t),n={};if(r)for(const a of r.params)n[a.id]=a.default;return di({id:Ee("fx"),typeId:t,enabled:!0,params:n},e,i)}function hi(t,e,i,r){const n={...t.params};if(t.typeId==="grade"&&(e==="lush"?(n.saturation=.18+r()*.42,n.brightness=-.04+r()*.16,n.contrast=.06+r()*.22,n.gamma=.82+r()*.35,n.hue=(r()-.5)*.18,n.exposure=-.15+r()*.4):e==="outsider"?(n.saturation=r()>.5?-.35+r()*.3:.4+r()*.5,n.contrast=.2+r()*.55,n.gamma=.55+r()*1.1,n.hue=(r()-.5)*.7):(n.saturation=.05+r()*.5,n.contrast=.1+r()*.35,n.hue=(r()-.5)*.35)),t.typeId==="duotone"&&(n.shadow=i.shadow,n.highlight=i.highlight,n.amount=e==="lush"?.45+r()*.4:.7+r()*.3),t.typeId==="grain"&&(n.leakColor=i.leak,n.leak=e==="lush"?.18+r()*.35:r()*.22,n.grain=e==="lush"?.12+r()*.22:.2+r()*.4),t.typeId==="bloom"&&(n.amount=e==="outsider"?.15+r()*.3:.4+r()*.45,n.halation=e==="lush"?.22+r()*.4:r()*.25,n.size=1.4+r()*2.2),t.typeId==="warp"&&(n.amount=e==="lush"?.012+r()*.04:.04+r()*.12),t.typeId==="chroma"&&(n.amount=e==="lush"?.002+r()*.006:.006+r()*.02),t.typeId==="analog"&&(n.mixScan=e==="lush"?r()*.2:.25+r()*.5,n.noise=e==="lush"?r()*.1:.12+r()*.35),t.typeId==="posterize"&&(n.levels=3+Math.floor(r()*6),n.dither=.08+r()*.35),t.typeId==="threshold"&&(n.mix=.35+r()*.45,n.soft=.04+r()*.18),t.typeId==="critters"){n.count=e==="lush"?3+Math.floor(r()*3):4+Math.floor(r()*4),n.size=.85+r()*.7,n.amount=.7+r()*.3,n.speed=.7+r()*1.3,n.seed=1+Math.floor(r()*9998);const a=r();e==="lush"?n.kit=a>.72?"votives":a>.48?"charms":a>.22?"shapes":"toy pop":e==="mix"?n.kit=a>.62?"moths":a>.4?"toy pop":a>.2?"mix":"shapes":n.kit=a>.55?"toy pop":a>.28?"mix":"shapes"}if(t.typeId==="dancer"){n.size=.12+r()*.05,n.count=1,n.crowd="normal",n.place="center";const a=r();e==="lush"?n.move=a>.38?"float":a>.18?"drift":"dance":e==="mix"?n.move=a>.52?"float":a>.3?"drift":a>.16?"orbit":"dance":n.move=a>.78?"drift":"dance",n.echo=.35+r()*.5,n.amount=1,n.speed=n.move==="dance"?.55+r()*1.5:.32+r()*.7,n.seed=1+Math.floor(r()*9998);const s=r();e==="lush"?n.grow=s>.62?"petals":s>.42?"halo":s>.26?"wings":s>.12?"quiet":"wild":e==="mix"?n.grow=s>.7?"skirt":s>.52?"antenna":s>.36?"horns":s>.2?"petals":"wild":n.grow=s>.62?"quiet":s>.4?"horns":"wild";const o=r();e==="lush"?n.coat=o>.48?"cream":o>.24?"moss":"wild":e==="mix"?n.coat=o>.5?"sodium":o>.26?"cream":"wild":n.coat=o>.55?"night":"wild"}return t.typeId==="kaleido"&&(n.segments=e==="lush"?4+Math.floor(r()*4):5+Math.floor(r()*8),n.zoom=.7+r()*.8),t.typeId==="channels"&&(n.tint=i.leak,n.tintAmt=e==="lush"?.12+r()*.28:r()*.45),t.typeId==="key"&&(n.lo=.1+r()*.22,n.hi=.5+r()*.35,n.amount=.45+r()*.4,n.invert=r()>.72),t.typeId==="dropout"&&(n.amount=.28+r()*.4,n.rate=.18+r()*.4,n.tear=e==="outsider"?.3+r()*.5:r()*.28),{...t,params:n}}function Sa(t,e="mix"){const i=Ke(t>>>0);return hi(ui("critters",t,.85),e,nt[t%nt.length],i)}function Ta(t,e="mix"){const i=Ke(t>>>0);return hi(ui("dancer",t,.85),e,nt[t%nt.length],i)}function fr(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="dancer")?e:{...e,effects:[...e.effects,Ta(t.seed+i*4243,"mix")]})}}function dr(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="critters")?e:{...e,effects:[...e.effects,Sa(t.seed+i*7919,"mix")]})}}function Ea(t,e,i,r=!1){const n=Ke(e>>>0),a=r?ht.filter(u=>u.wacky):ht,s=a[Math.floor(n()*a.length)]??ht[0],o=nt[Math.floor(n()*nt.length)],l=s.stack.filter(u=>Fe(u)).slice(0,5).map((u,y)=>hi(ui(u,e+y*997,i),s.mood,o,n));if(s.name==="toy pop"||s.name==="candy idol"||s.name==="flower drift"||s.name==="chapel idol"||s.name==="cream garden"||s.name==="charm lamp"||s.name==="toy recital"||s.name==="candy keys"||s.name==="boombox garden"||s.name==="sticker book"||s.name==="sketch idol"||s.name==="pencil garden"||s.name==="felt garden"||s.name==="foil wrap"||s.name==="plush recital"||s.name==="yarn garden"||s.name==="sequin wrap"||s.name==="quilt recital"||s.name==="cork garden"||s.name==="picnic wrap"||s.name==="sprinkle recital"||s.name==="velvet lounge")for(const u of l)u.typeId==="critters"&&(s.name==="candy idol"?u.params.kit="mix":s.name==="cream garden"||s.name==="chapel idol"?u.params.kit="votives":s.name==="charm lamp"?u.params.kit="charms":u.params.kit="toy pop"),u.typeId==="dancer"&&(u.params.move="float",u.params.speed=.35+n()*.45,(s.name==="chapel idol"||s.name==="flower drift")&&(u.params.grow=s.name==="chapel idol"?"halo":"petals",u.params.coat="cream"),s.name==="candy keys"&&(u.params.grow="petals",u.params.coat="candy"),(s.name==="sticker book"||s.name==="pencil garden")&&(u.params.grow=s.name==="pencil garden"?"quiet":"wings",u.params.coat="cream"),s.name==="sketch idol"&&(u.params.grow="horns",u.params.coat="moss"),s.name==="felt garden"&&(u.params.grow="petals",u.params.coat="cream"),s.name==="plush recital"&&(u.params.grow="wings",u.params.coat="candy"),s.name==="yarn garden"&&(u.params.grow="petals",u.params.coat="cream"),s.name==="quilt recital"&&(u.params.grow="skirt",u.params.coat="moss"),s.name==="cork garden"&&(u.params.grow="crystal",u.params.coat="cream"),s.name==="sprinkle recital"&&(u.params.grow="puff",u.params.coat="jelly"),s.name==="velvet lounge"&&(u.params.grow="halo",u.params.coat="grape"));const d=r||s.mood==="lush"?.05+n()*.14:.04+n()*.22;return{...t,blendMode:s.blend??"normal",opacity:.88+n()*.12,effects:l,feedback:{...t.feedback,amount:d,opacity:.45+n()*.3,scale:1.005+n()*.03,rotation:(n()-.5)*.04,distortion:s.mood==="outsider"?n()*.28:n()*.1}}}function ur(t,e,i,r,n,a=!1){const s=Math.max(t.randomAmount,e==="all"?.75:0),o=t.seed>>>0,c=Ke(o^2654435769),l=t.layers.map((w,S)=>e==="selected"&&w.id!==i?w:e==="param"?w.id!==i?w:{...w,effects:w.effects.map(T=>T.id===r&&n?di(T,o+S*13,Math.max(s,.55),n):T)}:e==="all"?Ea(w,o+S*7919,s,a):ka(w,o+S*7919,s,!0,r)),d=a?["marsh","oil","paper","stars","cave","stage","sketch","felt","foil","plush","yarn","sequin","quilt","cork","gingham","sprinkle","velvet"]:["plasma","noise","gradient","stars","marsh","oil","paper","cave","stage","sketch","felt","foil","plush","yarn","sequin","quilt","cork","gingham","sprinkle","velvet"],u=Ke(o+0*7919>>>0),y=a?ht.filter(w=>w.wacky):ht,f=y[Math.floor(u()*y.length)]??ht[0],m={"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"}}[f.name],v=t.sources.map((w,S)=>{if(e!=="all"||w.kind!=="generator")return w;const T=Ke(o+S*131),E=nt[Math.floor(T()*nt.length)],O=a?T()>.45:T()>.35,P=m?m.generator:O?w.generator:d[Math.floor(T()*d.length)];return{...w,generator:P,colorA:m?m.a:E.inkA,colorB:m?m.b:E.inkB}}),b=e==="all"?{...t.globalFeedback,amount:.05+c()*.22,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:l,sources:v,globalFeedback:b}}function Ca(t){const e=t.seed+7919>>>0,i=Ke(e^2246822507),r=["shapes","toy pop","votives","moths","charms"],n=["wild","petals","halo","antenna","skirt","wings","horns","crystal","puff","quiet"],a=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava"];let s={...t,seed:e,layers:t.layers.map(o=>({...o,effects:o.effects.map(c=>c.typeId==="critters"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),kit:r[Math.floor(i()*r.length)]}}:c.typeId==="dancer"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),grow:n[Math.floor(i()*n.length)],coat:a[Math.floor(i()*a.length)]}}:c)}))};return s=dr(s),s=fr(s),s}function Ba(){return{x:0,y:0,scale:1,rotation:0}}function Aa(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function hr(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Pa(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Ia(){return{width:960,height:540,fps:24,duration:4,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const Ra={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"}};function mr(t="plasma"){const e=Ra[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};return{id:Ee("src"),name:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":t?t.toUpperCase():"SIGNAL",kind:"generator",generator:t??"plasma",colorA:e.a,colorB:e.b,width:1280,height:720,duration:0}}function pr(t){const e=Fe(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const r of e.params)i[r.id]=r.default;return{id:Ee("fx"),typeId:t,enabled:!0,params:i}}function gr(t,e,i=[]){return{id:Ee("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Ba(),effects:i.map(pr),mask:Aa(),feedback:hr()}}function vr(){const t=mr("plasma"),e=gr("SIGNAL",t.id,["grade","bloom","grain"]);e.effects.forEach(n=>{n.typeId==="grade"&&(n.params.saturation=.22,n.params.contrast=.12,n.params.gamma=.92),n.typeId==="bloom"&&(n.params.amount=.42,n.params.halation=.28),n.typeId==="grain"&&(n.params.grain=.16,n.params.leak=.2)});const i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Pa(),globalFeedback:{...hr(),amount:.18,opacity:.55,scale:1.01},exportSettings:Ia(),presets:[]},r=ur({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[fi(i,"factory · signal"),fi(r,"factory · scramble")],i}function br(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!0,includeIdol:!0,exporting:!1}}class Ma{state;listeners=new Set;constructor(e=vr()){this.state={project:e,ui:br(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...br(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const C=new Ma;function mi(t,e,i,r,n){if(e<=0)return 0;const a=t*Math.max(.01,r);if(i==="random")return Math.floor(Math.abs(Math.sin(a*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=a;if(i==="reverse"&&(s=-a),i==="pingpong"){const o=e*2,c=(s%o+o)%o;return c<=e?c:o-c}return n?(s%e+e)%e:qt(s,0,e)}function Fa(t,e,i,r,n){return t.filter(a=>a.layerId===e&&a.target===i&&a.paramId===r&&(i!=="effect"||a.effectId===n)).sort((a,s)=>a.time-s.time)}function za(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const r=t[t.length-1];if(e>=r.time)return r.value;for(let n=0;n<t.length-1;n++){const a=t[n],s=t[n+1];if(e>=a.time&&e<=s.time){const o=s.time-a.time||1;let c=(e-a.time)/o;return(s.easing==="smooth"||a.easing==="smooth")&&(c=ba(c)),li(a.value,s.value,c)}}return i}function at(t,e,i,r,n,a,s){const o=Fa(t.keyframes,e,i,r,s);return za(o,a,n)}function Oa(t,e,i){const r={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(n=>({...n,params:{...n.params}}))};r.opacity=at(t,e.id,"layer","opacity",e.opacity,i),r.transform.x=at(t,e.id,"layer","x",e.transform.x,i),r.transform.y=at(t,e.id,"layer","y",e.transform.y,i),r.transform.scale=at(t,e.id,"layer","scale",e.transform.scale,i),r.transform.rotation=at(t,e.id,"layer","rotation",e.transform.rotation,i);for(const n of Object.keys(r.feedback))r.feedback[n]=at(t,e.id,"feedback",n,e.feedback[n],i);for(const n of r.effects)for(const[a,s]of Object.entries(n.params))typeof s=="number"&&(n.params[a]=at(t,e.id,"effect",a,s,i,n.id));return r}function Ha(t,e){const i=t.layers[0]?.id??"";return at(t,i,"playback","speed",t.playback.speed,e)}const La=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function Ua(t){return(t.type??"").startsWith("audio/")||La.test(t.name)}function yr(t){return t.sources.find(e=>e.kind==="audio")}let _t=null,Ze=null,kt=null;const pi=new WeakSet;let St=0,Tt=0;function gi(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(_t||(_t=new t,Ze=_t.createAnalyser(),Ze.fftSize=256,Ze.smoothingTimeConstant=.72,Ze.connect(_t.destination),kt=new Uint8Array(Ze.frequencyBinCount)),_t):null}async function $t(){const t=gi();t&&t.state==="suspended"&&await t.resume().catch(()=>{})}function Na(t){const e=gi();if(!(!e||!Ze||pi.has(t)))try{e.createMediaElementSource(t).connect(Ze),pi.add(t)}catch{pi.add(t)}}async function Wa(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto";const r=await new Promise((s,o)=>{i.addEventListener("loadedmetadata",()=>s(Number.isFinite(i.duration)?i.duration:0),{once:!0}),i.addEventListener("error",()=>o(new Error(`Audio failed: ${t.name}`)),{once:!0})});Na(i),await $t();let n=null;const a=gi();if(a)try{const s=await t.arrayBuffer();n=await a.decodeAudioData(s.slice(0))}catch{n=null}return{id:Ee("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:r,audio:i,pcm:n,objectUrl:e}}function Da(t,e,i,r){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const n=(r%i+i)%i,a=Math.floor(n*e),s=Math.max(64,Math.floor(e*.046)),o=Math.max(0,Math.min(t.length-1,a)),c=Math.max(o+1,Math.min(t.length,a+s));let l=0;for(let v=o;v<c;v++)l+=t[v]*t[v];const d=Math.min(1,Math.sqrt(l/(c-o))*3.4),u=Math.max(s,Math.floor(e*.09)),y=Math.min(t.length,a+u);let f=0,g=0;for(let v=o;v<y;v+=8)f+=t[v]*t[v],g++;const m=Math.min(1,Math.sqrt(f/Math.max(1,g))*4.2);return{energy:d,bass:m}}function qa(){if(!Ze||!kt)return null;Ze.getByteFrequencyData(kt);let t=0,e=0;const i=kt.length,r=Math.max(4,Math.floor(i*.12));for(let n=0;n<i;n++){const a=kt[n]/255;t+=a,n<r&&(e+=a)}return{energy:t/i,bass:e/r}}function $a(t,e){let i=0,r=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const a=Da(t.pcm.getChannelData(0),t.pcm.sampleRate,t.pcm.duration,e);i=a.energy,r=a.bass}else if(t?.kind==="audio"){const a=qa();a&&(i=a.energy,r=a.bass)}const n=t?.kind==="audio"?.28:.18;return St+=(i-St)*n,Tt+=(r-Tt)*Math.min(n,.22),!t&&St<.002&&(St=0),!t&&Tt<.002&&(Tt=0),{energy:St,bass:Tt}}function vi(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const ja=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,Va=`#version 300 es
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
`,Ga=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Xa=`#version 300 es
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
`,Ka=`#version 300 es
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
`,Za=`#version 300 es
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
`,Qa=`#version 300 es
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
`,Ya=`#version 300 es
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
${ar}
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
`,Ja=`#version 300 es
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
`,es=`#version 300 es
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
`,ts=`#version 300 es
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
  float wool = vnoise(uv * 48.0) * 0.55 + vnoise(uv * 96.0 + 2.1) * 0.45;
  vec3 board = mix(vec3(0.93, 0.84, 0.76), uColorA, 0.18);
  board = mix(board, vec3(0.86, 0.62, 0.72), 0.12 + 0.08 * u_bass);
  board *= 0.9 + 0.16 * wool;
  float nap = abs(sin(uv.x * 90.0 + wool * 4.0)) * 0.04;
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
`,is=`#version 300 es
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
  float shine = pow(max(0.0, sin((w.x * 9.0 + w.y * 3.0) * 3.14159 + uTime * 1.4 + u_bass)), 8.0);
  col += shine * vec3(0.55, 0.5, 0.45);
  float fold = 1.0 - smoothstep(0.0, 0.012, abs(fract(w.y * 5.0 + crinkle * 2.0) - 0.5));
  col = mix(col, col * 0.72, fold * 0.55);
  float speckle = step(0.92, hash21(floor(w * 80.0)));
  col = mix(col, vec3(1.0, 0.95, 0.8), speckle * 0.35);
  col = mix(col, gold, 0.08 + 0.1 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,rs=`#version 300 es
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
  vec2 tuft = uv * vec2(18.0, 14.0);
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
`,ns=`#version 300 es
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
  vec2 g = uv * vec2(16.0, 22.0);
  vec2 cell = floor(g);
  vec2 f = fract(g);
  float id = hash21(cell + uSeed);
  float rib = 0.5 + 0.5 * sin(uv.x * 52.0);
  vec3 wool = mix(vec3(0.96, 0.78, 0.86), uColorA, 0.24);
  vec3 mint = mix(vec3(0.62, 0.88, 0.82), uColorB, 0.28);
  float stripe = step(0.5, fract(uv.x * 5.5 + uSeed * 0.08));
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
`,as=`#version 300 es
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
  vec2 g = uv * vec2(15.0, 13.0);
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
`,ss=`#version 300 es
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
  float gingham = step(0.5, fract(f.x * 6.0)) * step(0.5, fract(f.y * 6.0));
  float dots = step(0.7, hash21(floor(f * 8.0) + cell));
  float stripes = step(0.5, fract(f.x * 5.0 + f.y * 0.35));
  float kind = fract(id * 7.13);
  quilt = mix(quilt, quilt * 0.8, gingham * step(kind, 0.33));
  quilt = mix(quilt, mix(quilt, vec3(1.0), 0.2), dots * step(0.33, kind) * step(kind, 0.66));
  quilt = mix(quilt, quilt * mix(0.84, 1.12, stripes), step(0.66, kind));
  float seam = min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y));
  float stitch = step(0.5, fract((uv.x + uv.y) * 46.0));
  vec3 col = mix(quilt, vec3(0.94, 0.9, 0.84), (1.0 - smoothstep(0.0, 0.038, seam)) * 0.72);
  col = mix(col, vec3(0.58, 0.28, 0.42), (1.0 - smoothstep(0.0, 0.016, seam)) * stitch * 0.5);
  col = mix(col, vec3(1.0, 0.9, 0.92), 0.05 + 0.08 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,os=`#version 300 es
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
  board = mix(board, vec3(0.58, 0.36, 0.2), vnoise(uv * 9.0) * 0.35);
  float pore = vnoise(uv * 48.0 + uSeed) * 0.55 + vnoise(uv * 96.0) * 0.45;
  board *= 0.86 + 0.22 * pore;
  vec2 pin = uv * vec2(7.0, 5.0);
  vec2 cell = floor(pin);
  vec2 f = fract(pin) - 0.5;
  float id = hash21(cell + uSeed);
  vec2 jitter = vec2(id, hash21(cell + 4.2)) - 0.5;
  float head = length(f - jitter * 0.28);
  float pinM = 1.0 - smoothstep(0.07, 0.11, head);
  vec3 pinC = mix(mix(uColorB, vec3(0.95, 0.35, 0.48), 0.4), vec3(0.35, 0.7, 0.85), step(0.5, id));
  vec3 col = mix(board, pinC, pinM * step(0.35, id));
  col = mix(col, vec3(0.95, 0.82, 0.62), 0.05 + 0.08 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,cs=`#version 300 es
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
  float cx = step(0.5, fract(uv.x * 10.0 + uSeed * 0.05));
  float cy = step(0.5, fract(uv.y * 10.0));
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
`,ls=`#version 300 es
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
  vec2 g = uv * vec2(22.0, 16.0);
  vec2 cell = floor(g);
  vec2 f = fract(g) - 0.5;
  float id = hash21(cell + uSeed);
  float ang = id * 6.28318;
  vec2 dir = vec2(cos(ang), sin(ang));
  float sprinkle = 1.0 - smoothstep(0.08, 0.16, abs(dot(f, vec2(-dir.y, dir.x))) * 4.2 + length(f * dir) * 0.7);
  sprinkle *= step(0.28, id);
  vec3 sc = mix(mix(uColorB, vec3(1.0, 0.45, 0.62), 0.4), vec3(0.45, 0.85, 1.0), fract(id * 5.1));
  sc = mix(sc, vec3(1.0, 0.86, 0.28), step(0.8, fract(id * 3.7)));
  vec3 col = mix(icing, sc, sprinkle);
  col = mix(col, vec3(1.0, 0.92, 0.94), 0.06 + 0.1 * u_bass);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,fs=`#version 300 es
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
  float crush = vnoise(uv * 7.0 + uSeed) * 0.65 + vnoise(uv * 22.0 - uTime * 0.03) * 0.35;
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
`,ds=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,us=`#version 300 es
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
`;class lt extends Error{}function hs(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new lt("WebGL2 is required for Phosphene.");return e}function wr(t,e,i){const r=t.createShader(e);if(!r)throw new lt("Unable to create shader");if(t.shaderSource(r,i),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(r)??"shader compile failed";throw t.deleteShader(r),new lt(n)}return r}class we{gl;prog;uniforms=new Map;constructor(e,i,r=ja){this.gl=e;const n=wr(e,e.VERTEX_SHADER,r),a=wr(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new lt("Unable to create program");if(e.attachShader(s,n),e.attachShader(s,a),e.linkProgram(s),e.deleteShader(n),e.deleteShader(a),!e.getProgramParameter(s,e.LINK_STATUS)){const o=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new lt(o)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const r=this.loc(e);r&&this.gl.uniform1i(r,i)}f(e,i){const r=this.loc(e);r&&this.gl.uniform1f(r,i)}v2(e,i,r){const n=this.loc(e);n&&this.gl.uniform2f(n,i,r)}v3(e,i,r,n){const a=this.loc(e);a&&this.gl.uniform3f(a,i,r,n)}v4(e,i,r,n,a){const s=this.loc(e);s&&this.gl.uniform4f(s,i,r,n,a)}dispose(){this.gl.deleteProgram(this.prog)}}function bi(t){const e=t.createTexture();if(!e)throw new lt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function ms(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function ps(t,e,i,r){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,r,0,t.RGBA,t.UNSIGNED_BYTE,null)}class mt{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new lt("Unable to create framebuffer");this.fbo=i,this.tex=bi(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,ps(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Ae(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function Qe(t){t.drawArrays(t.TRIANGLES,0,3)}const gs={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},vs={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},xr={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23};function bs(t){return`${Va}
${t.extraUniforms??""}
${t.applyGlsl}
${Ga}`}function ys(t,e){return new we(t,bs(e))}function Et(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const pt=8;function _r(t,e,i){return new ImageData(t,e,i)}function ws(t,e,i){const r=t.find(a=>a.id===e);if(!r?.options)return Number(i)||0;const n=r.options.findIndex(a=>a.value===i);return n<0?0:n}class xs{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;textureProg=null;black=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=hs(e),this.generatorProg=new we(this.gl,Qa)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=pt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new mt(e),this.pong??=new mt(e),this.composite??=new mt(e),this.post??=new mt(e);this.ring.length<pt;)this.ring.push(new mt(e));this.copy??=new we(e,ds),this.blit??=new we(e,Ka),this.compositeProg??=new we(e,Xa),this.feedbackProg??=new we(e,Za),this.textureProg??=new we(e,us),this.black||(this.black=bi(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(a=>a.enabled);if(i.length!==1)return!0;const r=i[0];if(r.feedback.amount>.001||r.effects.some(a=>a.enabled))return!0;const n=e.sources.find(a=>a.id===r.sourceId);return!!(n&&n.kind!=="generator"&&n.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new we(this.gl,Ja),this.stageProg):e===13?(this.sketchProg??=new we(this.gl,es),this.sketchProg):e===14?(this.feltProg??=new we(this.gl,ts),this.feltProg):e===15?(this.foilProg??=new we(this.gl,is),this.foilProg):e===16?(this.plushProg??=new we(this.gl,rs),this.plushProg):e===17?(this.yarnProg??=new we(this.gl,ns),this.yarnProg):e===18?(this.sequinProg??=new we(this.gl,as),this.sequinProg):e===19?(this.quiltProg??=new we(this.gl,ss),this.quiltProg):e===20?(this.corkProg??=new we(this.gl,os),this.corkProg):e===21?(this.ginghamProg??=new we(this.gl,cs),this.ginghamProg):e===22?(this.sprinkleProg??=new we(this.gl,ls),this.sprinkleProg):e===23?(this.velvetProg??=new we(this.gl,fs),this.velvetProg):(this.generatorFull??=new we(this.gl,Ya),this.generatorFull)}compileType(e,i=!1){const r=e!=="dancer"?e:i?"dancer:mini":"dancer",n=this.effectProg.get(r);if(n)return n;const a=e==="dancer"?ha(i):Fe(e);if(!a)return null;try{const s=ys(this.gl,a);return this.effectProg.set(r,s),s}catch(s){return this.lastError=`${r}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const r=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(n=>!!n);for(const n of r)n.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new mt(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=bi(this.gl),this.sourceTex.set(e.id,i));const r=e.frozenFrame||e.bitmap||e.video;return r&&ms(this.gl,i,r),i}blitTo(e,i){const r=this.gl,n=this.copy;n&&(e.bind(),n.use(),Ae(r,0,i),n.i("uTex",0),Qe(r))}drawGenerator(e,i,r,n=77){const a=this.gl,s=xr[i.generator??"plasma"]??0,o=this.genProg(s);e.bind(),o.use(),o.i("uMode",s),o.f("uTime",r);const c=i.colorA?Et(i.colorA):[.07,.04,.1],l=i.colorB?Et(i.colorB):[.92,.78,.55];o.v3("uColorA",c[0],c[1],c[2]),o.v3("uColorB",l[0],l[1],l[2]),o.f("uScale",6),o.f("uSeed",n),o.f("u_audio",this.audioEnergy),o.f("u_bass",this.audioBass),Qe(a)}drawTexture(e,i,r){const n=this.gl,a=this.textureProg;a&&(e.bind(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),a.use(),Ae(n,0,i),a.i("uTex",0),a.v2("uTranslate",r.transform.x,r.transform.y),a.f("uScale",r.transform.scale),a.f("uRotation",r.transform.rotation),a.v2("uFit",1,1),Qe(n))}applyEffect(e,i,r,n,a,s,o,c,l){const d=Fe(r.typeId),u=this.progFor(r);if(!d||!u){this.blitTo(e,i);return}const y=this.gl;e.bind(),u.use(),Ae(y,0,i),Ae(y,1,c),Ae(y,2,l),u.i("uTex",0),u.i("uFeedback",1),u.i("uHistory",2),u.i("uMask",3),u.v2("uResolution",e.w,e.h),u.v2("uTexel",1/e.w,1/e.h),u.f("uTime",a),u.f("uFrame",s),u.f("uQuality",o==="draft"?0:o==="preview"?1:2),u.f("u_audio",this.audioEnergy),u.f("u_bass",this.audioBass),u.v2("u_translate",n.transform.x,n.transform.y),u.f("u_scale",n.transform.scale),u.f("u_rotation",n.transform.rotation);const f=n.mask;u.i("u_maskType",vs[f.type]??0),u.i("u_maskInvert",f.invert?1:0),u.f("u_maskSoftness",f.softness),u.v4("u_maskRect",f.rect.x,f.rect.y,f.rect.w,f.rect.h),u.v2("u_maskCenter",f.center.x,f.center.y),u.f("u_maskRadius",f.radius),u.f("u_maskGradientAngle",f.gradientAngle),u.f("u_maskNoiseScale",f.noiseScale);let g=1;for(const m of d.params){const v=r.params[m.id]??m.default,b=`u_${m.id}`;if(m.kind==="color"&&typeof v=="string"){const[w,S,T]=Et(v);u.v3(b,w,S,T)}else m.kind==="bool"?u.f(b,v?1:0):m.kind==="enum"?u.f(b,ws(d.params,m.id,v)):u.f(b,Number(v));m.id==="mix"&&(g=Number(v))}u.f("u_mix",g),Qe(y)}drawLite(e,i){const r=this.gl,n=e.layers.find(u=>u.enabled)??e.layers[0],a=n?e.sources.find(u=>u.id===n.sourceId):null,s=a&&a.kind!=="audio"?a:{generator:"plasma"};r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.canvas.width,this.canvas.height);const o=xr[s.generator??"plasma"]??0,c=this.genProg(o);c.use(),c.i("uMode",o),c.f("uTime",i);const l=s.colorA?Et(s.colorA):[.07,.04,.1],d=s.colorB?Et(s.colorB):[.92,.78,.55];c.v3("uColorA",l[0],l[1],l[2]),c.v3("uColorB",d[0],d[1],d[2]),c.f("uScale",6),c.f("uSeed",e.seed),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Qe(r)}render(e,i,r){const n=this.gl,a=r?.quality??e.quality,s=$a(yr(e),i);if(this.audioEnergy=s.energy,this.audioBass=s.bass,a!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const o=this.ping,c=this.pong,l=this.composite,d=this.post,u=this.blit,y=this.compositeProg,f=this.feedbackProg,g=a==="draft"?.5:1,m=Math.max(16,Math.floor((r?.width??this.canvas.width)*g)),v=Math.max(16,Math.floor((r?.height??this.canvas.height)*g));this.ensureSize(m,v),l.bind(),n.clearColor(.02,.02,.03,1),n.clear(n.COLOR_BUFFER_BIT);const b=e.globalFeedback,w=Math.max(0,Math.min(pt-1,Math.round(b.delay))),S=(this.ringIndex-1-w+pt*8)%pt,T=this.ring[S].tex,E=Math.floor(i*e.fps);for(const O of e.layers){if(!O.enabled)continue;const P=Oa(e,O,i),L=e.sources.find(_=>_.id===P.sourceId)??null;if(!L||L.kind==="generator"||L.kind==="audio"){const _=L&&L.kind!=="audio"?L:{generator:"plasma"};this.drawGenerator(o,_,i,e.seed)}else{const _=this.uploadSource(L);this.drawTexture(o,_,P)}let I=o,j=c;const Q=this.histFor(P.id);for(const _ of P.effects){if(!_.enabled)continue;this.applyEffect(j,I.tex,_,P,i,E,a,T,Q.tex);const F=I;I=j,j=F}if(P.feedback.amount>.001){j.bind(),f.use(),Ae(n,0,I.tex),Ae(n,1,Q.tex),f.i("uTex",0),f.i("uFeedback",1),f.f("uAmount",P.feedback.amount),f.f("uOpacity",P.feedback.opacity),f.f("uScale",P.feedback.scale),f.f("uRotation",P.feedback.rotation),f.f("uDistortion",P.feedback.distortion),f.f("uTime",i),Qe(n);const _=I;I=j,j=_}this.blitTo(d,l.tex),l.bind(),y.use(),Ae(n,0,d.tex),Ae(n,1,I.tex),y.i("uBase",0),y.i("uLayer",1),y.f("uOpacity",P.opacity),y.i("uBlend",gs[P.blendMode]??0),y.v2("uResolution",m,v),Qe(n),this.blitTo(Q,I.tex)}b.amount>.001&&(d.bind(),f.use(),Ae(n,0,l.tex),Ae(n,1,T),f.i("uTex",0),f.i("uFeedback",1),f.f("uAmount",b.amount),f.f("uOpacity",b.opacity),f.f("uScale",b.scale),f.f("uRotation",b.rotation),f.f("uDistortion",b.distortion),f.f("uTime",i),Qe(n),this.blitTo(l,d.tex)),this.blitTo(this.ring[this.ringIndex],l.tex),this.ringIndex=(this.ringIndex+1)%pt,n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,this.canvas.width,this.canvas.height),u.use(),Ae(n,0,l.tex),u.i("uTex",0),u.f("uVignette",r?.vignette??.25),Qe(n)}capture(e,i,r,n,a="image/png",s=.92){const o=this.paintFrame(e,i,r,n);return new Promise((c,l)=>{o.toBlob(d=>{d?c(d):l(new Error("Export failed"))},a,s)})}paintFrame(e,i,r,n,a){const s=a??document.createElement("canvas");s.width!==r&&(s.width=r),s.height!==n&&(s.height=n);const o=s.getContext("2d",{alpha:!1});if(!o)throw new Error("No 2d context");this.render(e,i,{width:r,height:n,quality:"export",vignette:0}),this.gl.finish();const c=this.readPixels(this.width,this.height);if(this.width===r&&this.height===n)o.putImageData(_r(c,r,n),0,0);else{const l=document.createElement("canvas");l.width=this.width,l.height=this.height,l.getContext("2d")?.putImageData(_r(c,this.width,this.height),0,0),o.drawImage(l,0,0,r,n)}return s}readPixels(e,i){const r=this.gl,n=new Uint8Array(e*i*4);r.bindFramebuffer(r.FRAMEBUFFER,this.composite.fbo),r.readPixels(0,0,e,i,r.RGBA,r.UNSIGNED_BYTE,n),r.bindFramebuffer(r.FRAMEBUFFER,null);const a=new Uint8ClampedArray(new ArrayBuffer(n.length)),s=e*4;for(let o=0;o<i;o++)a.set(n.subarray((i-1-o)*s,(i-o)*s),o*s);return a}}const _s=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,ks=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function Ss(t){return t.type.startsWith("video/")||ks.test(t.name)}function Ts(t){return t.type.startsWith("image/")||_s.test(t.name)}async function Es(t){if(Ss(t))return Bs(t);if(Ts(t))return Sr(t);if(Ua(t))return Wa(t);throw new Error(`Unsupported media: ${t.name}`)}async function kr(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Sr(i)}async function Sr(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Ee("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await Cs(e);return{id:Ee("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function Cs(t){return new Promise((e,i)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>i(new Error("Image failed to load")),r.src=t})}function Bs(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((r,n)=>{const a=()=>{r({id:Ee("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",a,{once:!0}),i.addEventListener("error",()=>n(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function As(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Ee("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function Tr(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function Ps(t,e,i){if(t.kind!=="video"||!t.video)return;const r=t.video,n=r.duration;if(!Number.isFinite(n)||n<=0)return;const a=(e%n+n)%n,s=!!i?.playing&&!i?.freeze,o=(i?.mode??"forward")==="forward",c=i?.speed??1,l=s&&o&&c>.92&&c<1.08,d=Math.abs(r.currentTime-a);if(!s){if(r.paused||r.pause(),d>1/30)try{r.currentTime=a}catch{}return}if(l){if(r.playbackRate!==1&&(r.playbackRate=1),r.paused&&r.play().catch(()=>{}),d>.35)try{r.currentTime=a}catch{}return}r.paused||r.pause();const u=Math.max(.25,Math.min(4,Math.abs(c)||1));if(r.playbackRate!==u&&(r.playbackRate=u),d>1/30)try{r.currentTime=a}catch{}}const Is=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Vt(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var yi={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Er;function Ms(){return Er||(Er=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(r,n,a){function s(l,d){if(!n[l]){if(!r[l]){var u=typeof Vt=="function"&&Vt;if(!d&&u)return u(l,!0);if(o)return o(l,!0);var y=new Error("Cannot find module '"+l+"'");throw y.code="MODULE_NOT_FOUND",y}var f=n[l]={exports:{}};r[l][0].call(f.exports,function(g){var m=r[l][1][g];return s(m||g)},f,f.exports,i,r,n,a)}return n[l].exports}for(var o=typeof Vt=="function"&&Vt,c=0;c<a.length;c++)s(a[c]);return s})({1:[function(i,r,n){var a=i("./utils"),s=i("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(c){for(var l,d,u,y,f,g,m,v=[],b=0,w=c.length,S=w,T=a.getTypeOf(c)!=="string";b<c.length;)S=w-b,u=T?(l=c[b++],d=b<w?c[b++]:0,b<w?c[b++]:0):(l=c.charCodeAt(b++),d=b<w?c.charCodeAt(b++):0,b<w?c.charCodeAt(b++):0),y=l>>2,f=(3&l)<<4|d>>4,g=1<S?(15&d)<<2|u>>6:64,m=2<S?63&u:64,v.push(o.charAt(y)+o.charAt(f)+o.charAt(g)+o.charAt(m));return v.join("")},n.decode=function(c){var l,d,u,y,f,g,m=0,v=0,b="data:";if(c.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var w,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===o.charAt(64)&&S--,c.charAt(c.length-2)===o.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=s.uint8array?new Uint8Array(0|S):new Array(0|S);m<c.length;)l=o.indexOf(c.charAt(m++))<<2|(y=o.indexOf(c.charAt(m++)))>>4,d=(15&y)<<4|(f=o.indexOf(c.charAt(m++)))>>2,u=(3&f)<<6|(g=o.indexOf(c.charAt(m++))),w[v++]=l,f!==64&&(w[v++]=d),g!==64&&(w[v++]=u);return w}},{"./support":30,"./utils":32}],2:[function(i,r,n){var a=i("./external"),s=i("./stream/DataWorker"),o=i("./stream/Crc32Probe"),c=i("./stream/DataLengthProbe");function l(d,u,y,f,g){this.compressedSize=d,this.uncompressedSize=u,this.crc32=y,this.compression=f,this.compressedContent=g}l.prototype={getContentWorker:function(){var d=new s(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new s(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(d,u,y){return d.pipe(new o).pipe(new c("uncompressedSize")).pipe(u.compressWorker(y)).pipe(new c("compressedSize")).withStreamInfo("compression",u)},r.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,n){var a=i("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},n.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,n){var a=i("./utils"),s=(function(){for(var o,c=[],l=0;l<256;l++){o=l;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;c[l]=o}return c})();r.exports=function(o,c){return o!==void 0&&o.length?a.getTypeOf(o)!=="string"?(function(l,d,u,y){var f=s,g=y+u;l^=-1;for(var m=y;m<g;m++)l=l>>>8^f[255&(l^d[m])];return-1^l})(0|c,o,o.length,0):(function(l,d,u,y){var f=s,g=y+u;l^=-1;for(var m=y;m<g;m++)l=l>>>8^f[255&(l^d.charCodeAt(m))];return-1^l})(0|c,o,o.length,0):0}},{"./utils":32}],5:[function(i,r,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(i,r,n){var a=null;a=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:a}},{lie:37}],7:[function(i,r,n){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),o=i("./utils"),c=i("./stream/GenericWorker"),l=a?"uint8array":"array";function d(u,y){c.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=y,this.meta={}}n.magic="\b\0",o.inherits(d,c),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,u.data),!1)},d.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(y){u.push({data:y,meta:u.meta})}},n.compressWorker=function(u){return new d("Deflate",u)},n.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,n){function a(f,g){var m,v="";for(m=0;m<g;m++)v+=String.fromCharCode(255&f),f>>>=8;return v}function s(f,g,m,v,b,w){var S,T,E=f.file,O=f.compression,P=w!==l.utf8encode,L=o.transformTo("string",w(E.name)),I=o.transformTo("string",l.utf8encode(E.name)),j=E.comment,Q=o.transformTo("string",w(j)),_=o.transformTo("string",l.utf8encode(j)),F=I.length!==E.name.length,p=_.length!==j.length,H="",ee="",W="",se=E.dir,V=E.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};g&&!m||(ae.crc32=f.crc32,ae.compressedSize=f.compressedSize,ae.uncompressedSize=f.uncompressedSize);var M=0;g&&(M|=8),P||!F&&!p||(M|=2048);var R=0,ne=0;se&&(R|=16),b==="UNIX"?(ne=798,R|=(function(Z,ve){var Te=Z;return Z||(Te=ve?16893:33204),(65535&Te)<<16})(E.unixPermissions,se)):(ne=20,R|=(function(Z){return 63&(Z||0)})(E.dosPermissions)),S=V.getUTCHours(),S<<=6,S|=V.getUTCMinutes(),S<<=5,S|=V.getUTCSeconds()/2,T=V.getUTCFullYear()-1980,T<<=4,T|=V.getUTCMonth()+1,T<<=5,T|=V.getUTCDate(),F&&(ee=a(1,1)+a(d(L),4)+I,H+="up"+a(ee.length,2)+ee),p&&(W=a(1,1)+a(d(Q),4)+_,H+="uc"+a(W.length,2)+W);var Y="";return Y+=`
\0`,Y+=a(M,2),Y+=O.magic,Y+=a(S,2),Y+=a(T,2),Y+=a(ae.crc32,4),Y+=a(ae.compressedSize,4),Y+=a(ae.uncompressedSize,4),Y+=a(L.length,2),Y+=a(H.length,2),{fileRecord:u.LOCAL_FILE_HEADER+Y+L+H,dirRecord:u.CENTRAL_FILE_HEADER+a(ne,2)+Y+a(Q.length,2)+"\0\0\0\0"+a(R,4)+a(v,4)+L+H+Q}}var o=i("../utils"),c=i("../stream/GenericWorker"),l=i("../utf8"),d=i("../crc32"),u=i("../signature");function y(f,g,m,v){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=m,this.encodeFileName=v,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(y,c),y.prototype.push=function(f){var g=f.meta.percent||0,m=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,c.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:m?(g+100*(m-v-1))/m:100}}))},y.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var g=this.streamFiles&&!f.file.dir;if(g){var m=s(f,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(f){this.accumulate=!1;var g=this.streamFiles&&!f.file.dir,m=s(f,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),g)this.push({data:(function(v){return u.DATA_DESCRIPTOR+a(v.crc32,4)+a(v.compressedSize,4)+a(v.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var f=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var m=this.bytesWritten-f,v=(function(b,w,S,T,E){var O=o.transformTo("string",E(T));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+a(b,2)+a(b,2)+a(w,4)+a(S,4)+a(O.length,2)+O})(this.dirRecords.length,m,f,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(f){this._sources.push(f);var g=this;return f.on("data",function(m){g.processChunk(m)}),f.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),f.on("error",function(m){g.error(m)}),this},y.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(f){var g=this._sources;if(!c.prototype.error.call(this,f))return!1;for(var m=0;m<g.length;m++)try{g[m].error(f)}catch{}return!0},y.prototype.lock=function(){c.prototype.lock.call(this);for(var f=this._sources,g=0;g<f.length;g++)f[g].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,n){var a=i("../compressions"),s=i("./ZipFileWorker");n.generateWorker=function(o,c,l){var d=new s(c.streamFiles,l,c.platform,c.encodeFileName),u=0;try{o.forEach(function(y,f){u++;var g=(function(w,S){var T=w||S,E=a[T];if(!E)throw new Error(T+" is not a valid compression method !");return E})(f.options.compression,c.compression),m=f.options.compressionOptions||c.compressionOptions||{},v=f.dir,b=f.date;f._compressWorker(g,m).withStreamInfo("file",{name:y,dir:v,date:b,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=u}catch(y){d.error(y)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,n){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new a;for(var o in this)typeof this[o]!="function"&&(s[o]=this[o]);return s}}(a.prototype=i("./object")).loadAsync=i("./load"),a.support=i("./support"),a.defaults=i("./defaults"),a.version="3.10.1",a.loadAsync=function(s,o){return new a().loadAsync(s,o)},a.external=i("./external"),r.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,n){var a=i("./utils"),s=i("./external"),o=i("./utf8"),c=i("./zipEntries"),l=i("./stream/Crc32Probe"),d=i("./nodejsUtils");function u(y){return new s.Promise(function(f,g){var m=y.decompressed.getContentWorker().pipe(new l);m.on("error",function(v){g(v)}).on("end",function(){m.streamInfo.crc32!==y.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}r.exports=function(y,f){var g=this;return f=a.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),d.isNode&&d.isStream(y)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",y,!0,f.optimizedBinaryString,f.base64).then(function(m){var v=new c(f);return v.load(m),v}).then(function(m){var v=[s.Promise.resolve(m)],b=m.files;if(f.checkCRC32)for(var w=0;w<b.length;w++)v.push(u(b[w]));return s.Promise.all(v)}).then(function(m){for(var v=m.shift(),b=v.files,w=0;w<b.length;w++){var S=b[w],T=S.fileNameStr,E=a.resolve(S.fileNameStr);g.file(E,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:f.createFolders}),S.dir||(g.file(E).unsafeOriginalName=T)}return v.zipComment.length&&(g.comment=v.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,n){var a=i("../utils"),s=i("../stream/GenericWorker");function o(c,l){s.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}a.inherits(o,s),o.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(d){l.push({data:d,meta:{percent:0}})}).on("error",function(d){l.isPaused?this.generatedError=d:l.error(d)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,n){var a=i("readable-stream").Readable;function s(o,c,l){a.call(this,c),this._helper=o;var d=this;o.on("data",function(u,y){d.push(u)||d._helper.pause(),l&&l(y)}).on("error",function(u){d.emit("error",u)}).on("end",function(){d.push(null)})}i("../utils").inherits(s,a),s.prototype._read=function(){this._helper.resume()},r.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,r,n){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,s);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,s)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var s=new Buffer(a);return s.fill(0),s},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(i,r,n){function a(E,O,P){var L,I=o.getTypeOf(O),j=o.extend(P||{},d);j.date=j.date||new Date,j.compression!==null&&(j.compression=j.compression.toUpperCase()),typeof j.unixPermissions=="string"&&(j.unixPermissions=parseInt(j.unixPermissions,8)),j.unixPermissions&&16384&j.unixPermissions&&(j.dir=!0),j.dosPermissions&&16&j.dosPermissions&&(j.dir=!0),j.dir&&(E=b(E)),j.createFolders&&(L=v(E))&&w.call(this,L,!0);var Q=I==="string"&&j.binary===!1&&j.base64===!1;P&&P.binary!==void 0||(j.binary=!Q),(O instanceof u&&O.uncompressedSize===0||j.dir||!O||O.length===0)&&(j.base64=!1,j.binary=!0,O="",j.compression="STORE",I="string");var _=null;_=O instanceof u||O instanceof c?O:g.isNode&&g.isStream(O)?new m(E,O):o.prepareContent(E,O,j.binary,j.optimizedBinaryString,j.base64);var F=new y(E,_,j);this.files[E]=F}var s=i("./utf8"),o=i("./utils"),c=i("./stream/GenericWorker"),l=i("./stream/StreamHelper"),d=i("./defaults"),u=i("./compressedObject"),y=i("./zipObject"),f=i("./generate"),g=i("./nodejsUtils"),m=i("./nodejs/NodejsStreamInputAdapter"),v=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var O=E.lastIndexOf("/");return 0<O?E.substring(0,O):""},b=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},w=function(E,O){return O=O!==void 0?O:d.createFolders,E=b(E),this.files[E]||a.call(this,E,null,{dir:!0,createFolders:O}),this.files[E]};function S(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var O,P,L;for(O in this.files)L=this.files[O],(P=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&E(P,L)},filter:function(E){var O=[];return this.forEach(function(P,L){E(P,L)&&O.push(L)}),O},file:function(E,O,P){if(arguments.length!==1)return E=this.root+E,a.call(this,E,O,P),this;if(S(E)){var L=E;return this.filter(function(j,Q){return!Q.dir&&L.test(j)})}var I=this.files[this.root+E];return I&&!I.dir?I:null},folder:function(E){if(!E)return this;if(S(E))return this.filter(function(I,j){return j.dir&&E.test(I)});var O=this.root+E,P=w.call(this,O),L=this.clone();return L.root=P.name,L},remove:function(E){E=this.root+E;var O=this.files[E];if(O||(E.slice(-1)!=="/"&&(E+="/"),O=this.files[E]),O&&!O.dir)delete this.files[E];else for(var P=this.filter(function(I,j){return j.name.slice(0,E.length)===E}),L=0;L<P.length;L++)delete this.files[P[L].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var O,P={};try{if((P=o.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");o.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var L=P.comment||this.comment||"";O=f.generateWorker(this,P,L)}catch(I){(O=new c("error")).error(I)}return new l(O,P.type||"string",P.mimeType)},generateAsync:function(E,O){return this.generateInternalStream(E).accumulate(O)},generateNodeStream:function(E,O){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(O)}};r.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,n){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,n){var a=i("./DataReader");function s(o){a.call(this,o);for(var c=0;c<this.data.length;c++)o[c]=255&o[c]}i("../utils").inherits(s,a),s.prototype.byteAt=function(o){return this.data[this.zero+o]},s.prototype.lastIndexOfSignature=function(o){for(var c=o.charCodeAt(0),l=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===c&&this.data[y+1]===l&&this.data[y+2]===d&&this.data[y+3]===u)return y-this.zero;return-1},s.prototype.readAndCheckSignature=function(o){var c=o.charCodeAt(0),l=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),y=this.readData(4);return c===y[0]&&l===y[1]&&d===y[2]&&u===y[3]},s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,r,n){var a=i("../utils");function s(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var c,l=0;for(this.checkOffset(o),c=this.index+o-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=o,l},readString:function(o){return a.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},r.exports=s},{"../utils":32}],19:[function(i,r,n){var a=i("./Uint8ArrayReader");function s(o){a.call(this,o)}i("../utils").inherits(s,a),s.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,n){var a=i("./DataReader");function s(o){a.call(this,o)}i("../utils").inherits(s,a),s.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},s.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},s.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},s.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,r,n){var a=i("./ArrayReader");function s(o){a.call(this,o)}i("../utils").inherits(s,a),s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,n){var a=i("../utils"),s=i("../support"),o=i("./ArrayReader"),c=i("./StringReader"),l=i("./NodeBufferReader"),d=i("./Uint8ArrayReader");r.exports=function(u){var y=a.getTypeOf(u);return a.checkSupport(y),y!=="string"||s.uint8array?y==="nodebuffer"?new l(u):s.uint8array?new d(a.transformTo("uint8array",u)):new o(a.transformTo("array",u)):new c(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,n){var a=i("./GenericWorker"),s=i("../utils");function o(c){a.call(this,"ConvertWorker to "+c),this.destType=c}s.inherits(o,a),o.prototype.processChunk=function(c){this.push({data:s.transformTo(this.destType,c.data),meta:c.meta})},r.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,n){var a=i("./GenericWorker"),s=i("../crc32");function o(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(o,a),o.prototype.processChunk=function(c){this.streamInfo.crc32=s(c.data,this.streamInfo.crc32||0),this.push(c)},r.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,n){var a=i("../utils"),s=i("./GenericWorker");function o(c){s.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}a.inherits(o,s),o.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}s.prototype.processChunk.call(this,c)},r.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,n){var a=i("../utils"),s=i("./GenericWorker");function o(c){s.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(d){l.dataIsReady=!0,l.data=d,l.max=d&&d.length||0,l.type=a.getTypeOf(d),l.isPaused||l._tickAndRepeat()},function(d){l.error(d)})}a.inherits(o,s),o.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,n){function a(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,o){return this._listeners[s].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,o){if(this._listeners[s])for(var c=0;c<this._listeners[s].length;c++)this._listeners[s][c].call(this,o)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var o=this;return s.on("data",function(c){o.processChunk(c)}),s.on("end",function(){o.end()}),s.on("error",function(c){o.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,o){return this.extraStreamInfo[s]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=a},{}],29:[function(i,r,n){var a=i("../utils"),s=i("./ConvertWorker"),o=i("./GenericWorker"),c=i("../base64"),l=i("../support"),d=i("../external"),u=null;if(l.nodestream)try{u=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(g,m){return new d.Promise(function(v,b){var w=[],S=g._internalType,T=g._outputType,E=g._mimeType;g.on("data",function(O,P){w.push(O),m&&m(P)}).on("error",function(O){w=[],b(O)}).on("end",function(){try{var O=(function(P,L,I){switch(P){case"blob":return a.newBlob(a.transformTo("arraybuffer",L),I);case"base64":return c.encode(L);default:return a.transformTo(P,L)}})(T,(function(P,L){var I,j=0,Q=null,_=0;for(I=0;I<L.length;I++)_+=L[I].length;switch(P){case"string":return L.join("");case"array":return Array.prototype.concat.apply([],L);case"uint8array":for(Q=new Uint8Array(_),I=0;I<L.length;I++)Q.set(L[I],j),j+=L[I].length;return Q;case"nodebuffer":return Buffer.concat(L);default:throw new Error("concat : unsupported type '"+P+"'")}})(S,w),E);v(O)}catch(P){b(P)}w=[]}).resume()})}function f(g,m,v){var b=m;switch(m){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=m,this._mimeType=v,a.checkSupport(b),this._worker=g.pipe(new s(b)),g.lock()}catch(w){this._worker=new o("error"),this._worker.error(w)}}f.prototype={accumulate:function(g){return y(this,g)},on:function(g,m){var v=this;return g==="data"?this._worker.on(g,function(b){m.call(v,b.data,b.meta)}):this._worker.on(g,function(){a.delay(m,arguments,v)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},g)}},r.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var a=new ArrayBuffer(0);try{n.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(a),n.blob=s.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!i("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,n){for(var a=i("./utils"),s=i("./support"),o=i("./nodejsUtils"),c=i("./stream/GenericWorker"),l=new Array(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;l[254]=l[254]=1;function u(){c.call(this,"utf-8 decode"),this.leftOver=null}function y(){c.call(this,"utf-8 encode")}n.utf8encode=function(f){return s.nodebuffer?o.newBufferFrom(f,"utf-8"):(function(g){var m,v,b,w,S,T=g.length,E=0;for(w=0;w<T;w++)(64512&(v=g.charCodeAt(w)))==55296&&w+1<T&&(64512&(b=g.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),w++),E+=v<128?1:v<2048?2:v<65536?3:4;for(m=s.uint8array?new Uint8Array(E):new Array(E),w=S=0;S<E;w++)(64512&(v=g.charCodeAt(w)))==55296&&w+1<T&&(64512&(b=g.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),w++),v<128?m[S++]=v:(v<2048?m[S++]=192|v>>>6:(v<65536?m[S++]=224|v>>>12:(m[S++]=240|v>>>18,m[S++]=128|v>>>12&63),m[S++]=128|v>>>6&63),m[S++]=128|63&v);return m})(f)},n.utf8decode=function(f){return s.nodebuffer?a.transformTo("nodebuffer",f).toString("utf-8"):(function(g){var m,v,b,w,S=g.length,T=new Array(2*S);for(m=v=0;m<S;)if((b=g[m++])<128)T[v++]=b;else if(4<(w=l[b]))T[v++]=65533,m+=w-1;else{for(b&=w===2?31:w===3?15:7;1<w&&m<S;)b=b<<6|63&g[m++],w--;1<w?T[v++]=65533:b<65536?T[v++]=b:(b-=65536,T[v++]=55296|b>>10&1023,T[v++]=56320|1023&b)}return T.length!==v&&(T.subarray?T=T.subarray(0,v):T.length=v),a.applyFromCharCode(T)})(f=a.transformTo(s.uint8array?"uint8array":"array",f))},a.inherits(u,c),u.prototype.processChunk=function(f){var g=a.transformTo(s.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var m=g;(g=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),g.set(m,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var v=(function(w,S){var T;for((S=S||w.length)>w.length&&(S=w.length),T=S-1;0<=T&&(192&w[T])==128;)T--;return T<0||T===0?S:T+l[w[T]]>S?T:S})(g),b=g;v!==g.length&&(s.uint8array?(b=g.subarray(0,v),this.leftOver=g.subarray(v,g.length)):(b=g.slice(0,v),this.leftOver=g.slice(v,g.length))),this.push({data:n.utf8decode(b),meta:f.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=u,a.inherits(y,c),y.prototype.processChunk=function(f){this.push({data:n.utf8encode(f.data),meta:f.meta})},n.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,n){var a=i("./support"),s=i("./base64"),o=i("./nodejsUtils"),c=i("./external");function l(m){return m}function d(m,v){for(var b=0;b<m.length;++b)v[b]=255&m.charCodeAt(b);return v}i("setimmediate"),n.newBlob=function(m,v){n.checkSupport("blob");try{return new Blob([m],{type:v})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(m),b.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(m,v,b){var w=[],S=0,T=m.length;if(T<=b)return String.fromCharCode.apply(null,m);for(;S<T;)v==="array"||v==="nodebuffer"?w.push(String.fromCharCode.apply(null,m.slice(S,Math.min(S+b,T)))):w.push(String.fromCharCode.apply(null,m.subarray(S,Math.min(S+b,T)))),S+=b;return w.join("")},stringifyByChar:function(m){for(var v="",b=0;b<m.length;b++)v+=String.fromCharCode(m[b]);return v},applyCanBeUsed:{uint8array:(function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function y(m){var v=65536,b=n.getTypeOf(m),w=!0;if(b==="uint8array"?w=u.applyCanBeUsed.uint8array:b==="nodebuffer"&&(w=u.applyCanBeUsed.nodebuffer),w)for(;1<v;)try{return u.stringifyByChunk(m,b,v)}catch{v=Math.floor(v/2)}return u.stringifyByChar(m)}function f(m,v){for(var b=0;b<m.length;b++)v[b]=m[b];return v}n.applyFromCharCode=y;var g={};g.string={string:l,array:function(m){return d(m,new Array(m.length))},arraybuffer:function(m){return g.string.uint8array(m).buffer},uint8array:function(m){return d(m,new Uint8Array(m.length))},nodebuffer:function(m){return d(m,o.allocBuffer(m.length))}},g.array={string:y,array:l,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(m)}},g.arraybuffer={string:function(m){return y(new Uint8Array(m))},array:function(m){return f(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:l,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(new Uint8Array(m))}},g.uint8array={string:y,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:l,nodebuffer:function(m){return o.newBufferFrom(m)}},g.nodebuffer={string:y,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return g.nodebuffer.uint8array(m).buffer},uint8array:function(m){return f(m,new Uint8Array(m.length))},nodebuffer:l},n.transformTo=function(m,v){if(v=v||"",!m)return v;n.checkSupport(m);var b=n.getTypeOf(v);return g[b][m](v)},n.resolve=function(m){for(var v=m.split("/"),b=[],w=0;w<v.length;w++){var S=v[w];S==="."||S===""&&w!==0&&w!==v.length-1||(S===".."?b.pop():b.push(S))}return b.join("/")},n.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":a.nodebuffer&&o.isBuffer(m)?"nodebuffer":a.uint8array&&m instanceof Uint8Array?"uint8array":a.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(m){if(!a[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(m){var v,b,w="";for(b=0;b<(m||"").length;b++)w+="\\x"+((v=m.charCodeAt(b))<16?"0":"")+v.toString(16).toUpperCase();return w},n.delay=function(m,v,b){setImmediate(function(){m.apply(b||null,v||[])})},n.inherits=function(m,v){function b(){}b.prototype=v.prototype,m.prototype=new b},n.extend=function(){var m,v,b={};for(m=0;m<arguments.length;m++)for(v in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],v)&&b[v]===void 0&&(b[v]=arguments[m][v]);return b},n.prepareContent=function(m,v,b,w,S){return c.Promise.resolve(v).then(function(T){return a.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new c.Promise(function(E,O){var P=new FileReader;P.onload=function(L){E(L.target.result)},P.onerror=function(L){O(L.target.error)},P.readAsArrayBuffer(T)}):T}).then(function(T){var E=n.getTypeOf(T);return E?(E==="arraybuffer"?T=n.transformTo("uint8array",T):E==="string"&&(S?T=s.decode(T):b&&w!==!0&&(T=(function(O){return d(O,a.uint8array?new Uint8Array(O.length):new Array(O.length))})(T))),T):c.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,n){var a=i("./reader/readerFor"),s=i("./utils"),o=i("./signature"),c=i("./zipEntry"),l=i("./support");function d(u){this.files=[],this.loadOptions=u}d.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(y)+", expected "+s.pretty(u)+")")}},isSignature:function(u,y){var f=this.reader.index;this.reader.setIndex(u);var g=this.reader.readString(4)===y;return this.reader.setIndex(f),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),y=l.uint8array?"uint8array":"array",f=s.transformTo(y,u);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,y,f,g=this.zip64EndOfCentralSize-44;0<g;)u=this.reader.readInt(2),y=this.reader.readInt(4),f=this.reader.readData(y),this.zip64ExtensibleData[u]={id:u,length:y,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,y;for(u=0;u<this.files.length;u++)y=this.files[u],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(u=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var y=u;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var g=y-f;if(0<g)this.isSignature(y,o.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(u){this.reader=a(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,n){var a=i("./reader/readerFor"),s=i("./utils"),o=i("./compressedObject"),c=i("./crc32"),l=i("./utf8"),d=i("./compressions"),u=i("./support");function y(f,g){this.options=f,this.loadOptions=g}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var g,m;if(f.skip(22),this.fileNameLength=f.readInt(2),m=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(v){for(var b in d)if(Object.prototype.hasOwnProperty.call(d,b)&&d[b].magic===v)return d[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,g,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var g=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(g),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=a(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var g,m,v,b=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<b;)g=f.readInt(2),m=f.readInt(2),v=f.readData(m),this.extraFields[g]={id:g,length:m,value:v};f.setIndex(b)},handleUTF8:function(){var f=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var m=s.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var b=s.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var g=a(f.value);return g.readInt(1)!==1||c(this.fileName)!==g.readInt(4)?null:l.utf8decode(g.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var g=a(f.value);return g.readInt(1)!==1||c(this.fileComment)!==g.readInt(4)?null:l.utf8decode(g.readData(f.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,n){function a(g,m,v){this.name=g,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=m,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var s=i("./stream/StreamHelper"),o=i("./stream/DataWorker"),c=i("./utf8"),l=i("./compressedObject"),d=i("./stream/GenericWorker");a.prototype={internalStream:function(g){var m=null,v="string";try{if(!g)throw new Error("No output type specified.");var b=(v=g.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),m=this._decompressWorker();var w=!this._dataBinary;w&&!b&&(m=m.pipe(new c.Utf8EncodeWorker)),!w&&b&&(m=m.pipe(new c.Utf8DecodeWorker))}catch(S){(m=new d("error")).error(S)}return new s(m,v,"")},async:function(g,m){return this.internalStream(g).accumulate(m)},nodeStream:function(g,m){return this.internalStream(g||"nodebuffer").toNodejsStream(m)},_compressWorker:function(g,m){if(this._data instanceof l&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(v,g,m)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof d?this._data:new o(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)a.prototype[u[f]]=y;r.exports=a},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,n){(function(a){var s,o,c=a.MutationObserver||a.WebKitMutationObserver;if(c){var l=0,d=new c(g),u=a.document.createTextNode("");d.observe(u,{characterData:!0}),s=function(){u.data=l=++l%2}}else if(a.setImmediate||a.MessageChannel===void 0)s="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var m=a.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},a.document.documentElement.appendChild(m)}:function(){setTimeout(g,0)};else{var y=new a.MessageChannel;y.port1.onmessage=g,s=function(){y.port2.postMessage(0)}}var f=[];function g(){var m,v;o=!0;for(var b=f.length;b;){for(v=f,f=[],m=-1;++m<b;)v[m]();b=f.length}o=!1}r.exports=function(m){f.push(m)!==1||o||s()}}).call(this,typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,n){var a=i("immediate");function s(){}var o={},c=["REJECTED"],l=["FULFILLED"],d=["PENDING"];function u(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,b!==s&&m(this,b)}function y(b,w,S){this.promise=b,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function f(b,w,S){a(function(){var T;try{T=w(S)}catch(E){return o.reject(b,E)}T===b?o.reject(b,new TypeError("Cannot resolve promise with itself")):o.resolve(b,T)})}function g(b){var w=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof w=="function")return function(){w.apply(b,arguments)}}function m(b,w){var S=!1;function T(P){S||(S=!0,o.reject(b,P))}function E(P){S||(S=!0,o.resolve(b,P))}var O=v(function(){w(E,T)});O.status==="error"&&T(O.value)}function v(b,w){var S={};try{S.value=b(w),S.status="success"}catch(T){S.status="error",S.value=T}return S}(r.exports=u).prototype.finally=function(b){if(typeof b!="function")return this;var w=this.constructor;return this.then(function(S){return w.resolve(b()).then(function(){return S})},function(S){return w.resolve(b()).then(function(){throw S})})},u.prototype.catch=function(b){return this.then(null,b)},u.prototype.then=function(b,w){if(typeof b!="function"&&this.state===l||typeof w!="function"&&this.state===c)return this;var S=new this.constructor(s);return this.state!==d?f(S,this.state===l?b:w,this.outcome):this.queue.push(new y(S,b,w)),S},y.prototype.callFulfilled=function(b){o.resolve(this.promise,b)},y.prototype.otherCallFulfilled=function(b){f(this.promise,this.onFulfilled,b)},y.prototype.callRejected=function(b){o.reject(this.promise,b)},y.prototype.otherCallRejected=function(b){f(this.promise,this.onRejected,b)},o.resolve=function(b,w){var S=v(g,w);if(S.status==="error")return o.reject(b,S.value);var T=S.value;if(T)m(b,T);else{b.state=l,b.outcome=w;for(var E=-1,O=b.queue.length;++E<O;)b.queue[E].callFulfilled(w)}return b},o.reject=function(b,w){b.state=c,b.outcome=w;for(var S=-1,T=b.queue.length;++S<T;)b.queue[S].callRejected(w);return b},u.resolve=function(b){return b instanceof this?b:o.resolve(new this(s),b)},u.reject=function(b){var w=new this(s);return o.reject(w,b)},u.all=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=b.length,T=!1;if(!S)return this.resolve([]);for(var E=new Array(S),O=0,P=-1,L=new this(s);++P<S;)I(b[P],P);return L;function I(j,Q){w.resolve(j).then(function(_){E[Q]=_,++O!==S||T||(T=!0,o.resolve(L,E))},function(_){T||(T=!0,o.reject(L,_))})}},u.race=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=b.length,T=!1;if(!S)return this.resolve([]);for(var E=-1,O=new this(s);++E<S;)P=b[E],w.resolve(P).then(function(L){T||(T=!0,o.resolve(O,L))},function(L){T||(T=!0,o.reject(O,L))});var P;return O}},{immediate:36}],38:[function(i,r,n){var a={};(0,i("./lib/utils/common").assign)(a,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=a},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,n){var a=i("./zlib/deflate"),s=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/messages"),l=i("./zlib/zstream"),d=Object.prototype.toString,u=0,y=-1,f=0,g=8;function m(b){if(!(this instanceof m))return new m(b);this.options=s.assign({level:y,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},b||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var S=a.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(S!==u)throw new Error(c[S]);if(w.header&&a.deflateSetHeader(this.strm,w.header),w.dictionary){var T;if(T=typeof w.dictionary=="string"?o.string2buf(w.dictionary):d.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(S=a.deflateSetDictionary(this.strm,T))!==u)throw new Error(c[S]);this._dict_set=!0}}function v(b,w){var S=new m(w);if(S.push(b,!0),S.err)throw S.msg||c[S.err];return S.result}m.prototype.push=function(b,w){var S,T,E=this.strm,O=this.options.chunkSize;if(this.ended)return!1;T=w===~~w?w:w===!0?4:0,typeof b=="string"?E.input=o.string2buf(b):d.call(b)==="[object ArrayBuffer]"?E.input=new Uint8Array(b):E.input=b,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new s.Buf8(O),E.next_out=0,E.avail_out=O),(S=a.deflate(E,T))!==1&&S!==u)return this.onEnd(S),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(s.shrinkBuf(E.output,E.next_out))):this.onData(s.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&S!==1);return T===4?(S=a.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===u):T!==2||(this.onEnd(u),!(E.avail_out=0))},m.prototype.onData=function(b){this.chunks.push(b)},m.prototype.onEnd=function(b){b===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},n.Deflate=m,n.deflate=v,n.deflateRaw=function(b,w){return(w=w||{}).raw=!0,v(b,w)},n.gzip=function(b,w){return(w=w||{}).gzip=!0,v(b,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,n){var a=i("./zlib/inflate"),s=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/constants"),l=i("./zlib/messages"),d=i("./zlib/zstream"),u=i("./zlib/gzheader"),y=Object.prototype.toString;function f(m){if(!(this instanceof f))return new f(m);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},m||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||m&&m.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var b=a.inflateInit2(this.strm,v.windowBits);if(b!==c.Z_OK)throw new Error(l[b]);this.header=new u,a.inflateGetHeader(this.strm,this.header)}function g(m,v){var b=new f(v);if(b.push(m,!0),b.err)throw b.msg||l[b.err];return b.result}f.prototype.push=function(m,v){var b,w,S,T,E,O,P=this.strm,L=this.options.chunkSize,I=this.options.dictionary,j=!1;if(this.ended)return!1;w=v===~~v?v:v===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof m=="string"?P.input=o.binstring2buf(m):y.call(m)==="[object ArrayBuffer]"?P.input=new Uint8Array(m):P.input=m,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new s.Buf8(L),P.next_out=0,P.avail_out=L),(b=a.inflate(P,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&I&&(O=typeof I=="string"?o.string2buf(I):y.call(I)==="[object ArrayBuffer]"?new Uint8Array(I):I,b=a.inflateSetDictionary(this.strm,O)),b===c.Z_BUF_ERROR&&j===!0&&(b=c.Z_OK,j=!1),b!==c.Z_STREAM_END&&b!==c.Z_OK)return this.onEnd(b),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&b!==c.Z_STREAM_END&&(P.avail_in!==0||w!==c.Z_FINISH&&w!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=o.utf8border(P.output,P.next_out),T=P.next_out-S,E=o.buf2string(P.output,S),P.next_out=T,P.avail_out=L-T,T&&s.arraySet(P.output,P.output,S,T,0),this.onData(E)):this.onData(s.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(j=!0)}while((0<P.avail_in||P.avail_out===0)&&b!==c.Z_STREAM_END);return b===c.Z_STREAM_END&&(w=c.Z_FINISH),w===c.Z_FINISH?(b=a.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===c.Z_OK):w!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(P.avail_out=0))},f.prototype.onData=function(m){this.chunks.push(m)},f.prototype.onEnd=function(m){m===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},n.Inflate=f,n.inflate=g,n.inflateRaw=function(m,v){return(v=v||{}).raw=!0,g(m,v)},n.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,n){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var d=l.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var u in d)d.hasOwnProperty(u)&&(c[u]=d[u])}}return c},n.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var s={arraySet:function(c,l,d,u,y){if(l.subarray&&c.subarray)c.set(l.subarray(d,d+u),y);else for(var f=0;f<u;f++)c[y+f]=l[d+f]},flattenChunks:function(c){var l,d,u,y,f,g;for(l=u=0,d=c.length;l<d;l++)u+=c[l].length;for(g=new Uint8Array(u),l=y=0,d=c.length;l<d;l++)f=c[l],g.set(f,y),y+=f.length;return g}},o={arraySet:function(c,l,d,u,y){for(var f=0;f<u;f++)c[y+f]=l[d+f]},flattenChunks:function(c){return[].concat.apply([],c)}};n.setTyped=function(c){c?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,s)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))},n.setTyped(a)},{}],42:[function(i,r,n){var a=i("./common"),s=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var c=new a.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function d(u,y){if(y<65537&&(u.subarray&&o||!u.subarray&&s))return String.fromCharCode.apply(null,a.shrinkBuf(u,y));for(var f="",g=0;g<y;g++)f+=String.fromCharCode(u[g]);return f}c[254]=c[254]=1,n.string2buf=function(u){var y,f,g,m,v,b=u.length,w=0;for(m=0;m<b;m++)(64512&(f=u.charCodeAt(m)))==55296&&m+1<b&&(64512&(g=u.charCodeAt(m+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),m++),w+=f<128?1:f<2048?2:f<65536?3:4;for(y=new a.Buf8(w),m=v=0;v<w;m++)(64512&(f=u.charCodeAt(m)))==55296&&m+1<b&&(64512&(g=u.charCodeAt(m+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),m++),f<128?y[v++]=f:(f<2048?y[v++]=192|f>>>6:(f<65536?y[v++]=224|f>>>12:(y[v++]=240|f>>>18,y[v++]=128|f>>>12&63),y[v++]=128|f>>>6&63),y[v++]=128|63&f);return y},n.buf2binstring=function(u){return d(u,u.length)},n.binstring2buf=function(u){for(var y=new a.Buf8(u.length),f=0,g=y.length;f<g;f++)y[f]=u.charCodeAt(f);return y},n.buf2string=function(u,y){var f,g,m,v,b=y||u.length,w=new Array(2*b);for(f=g=0;f<b;)if((m=u[f++])<128)w[g++]=m;else if(4<(v=c[m]))w[g++]=65533,f+=v-1;else{for(m&=v===2?31:v===3?15:7;1<v&&f<b;)m=m<<6|63&u[f++],v--;1<v?w[g++]=65533:m<65536?w[g++]=m:(m-=65536,w[g++]=55296|m>>10&1023,w[g++]=56320|1023&m)}return d(w,g)},n.utf8border=function(u,y){var f;for((y=y||u.length)>u.length&&(y=u.length),f=y-1;0<=f&&(192&u[f])==128;)f--;return f<0||f===0?y:f+c[u[f]]>y?f:y}},{"./common":41}],43:[function(i,r,n){r.exports=function(a,s,o,c){for(var l=65535&a|0,d=a>>>16&65535|0,u=0;o!==0;){for(o-=u=2e3<o?2e3:o;d=d+(l=l+s[c++]|0)|0,--u;);l%=65521,d%=65521}return l|d<<16|0}},{}],44:[function(i,r,n){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,n){var a=(function(){for(var s,o=[],c=0;c<256;c++){s=c;for(var l=0;l<8;l++)s=1&s?3988292384^s>>>1:s>>>1;o[c]=s}return o})();r.exports=function(s,o,c,l){var d=a,u=l+c;s^=-1;for(var y=l;y<u;y++)s=s>>>8^d[255&(s^o[y])];return-1^s}},{}],46:[function(i,r,n){var a,s=i("../utils/common"),o=i("./trees"),c=i("./adler32"),l=i("./crc32"),d=i("./messages"),u=0,y=4,f=0,g=-2,m=-1,v=4,b=2,w=8,S=9,T=286,E=30,O=19,P=2*T+1,L=15,I=3,j=258,Q=j+I+1,_=42,F=113,p=1,H=2,ee=3,W=4;function se(h,U){return h.msg=d[U],U}function V(h){return(h<<1)-(4<h?9:0)}function ae(h){for(var U=h.length;0<=--U;)h[U]=0}function M(h){var U=h.state,z=U.pending;z>h.avail_out&&(z=h.avail_out),z!==0&&(s.arraySet(h.output,U.pending_buf,U.pending_out,z,h.next_out),h.next_out+=z,U.pending_out+=z,h.total_out+=z,h.avail_out-=z,U.pending-=z,U.pending===0&&(U.pending_out=0))}function R(h,U){o._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,U),h.block_start=h.strstart,M(h.strm)}function ne(h,U){h.pending_buf[h.pending++]=U}function Y(h,U){h.pending_buf[h.pending++]=U>>>8&255,h.pending_buf[h.pending++]=255&U}function Z(h,U){var z,k,x=h.max_chain_length,B=h.strstart,D=h.prev_length,q=h.nice_match,A=h.strstart>h.w_size-Q?h.strstart-(h.w_size-Q):0,G=h.window,J=h.w_mask,K=h.prev,re=h.strstart+j,he=G[B+D-1],fe=G[B+D];h.prev_length>=h.good_match&&(x>>=2),q>h.lookahead&&(q=h.lookahead);do if(G[(z=U)+D]===fe&&G[z+D-1]===he&&G[z]===G[B]&&G[++z]===G[B+1]){B+=2,z++;do;while(G[++B]===G[++z]&&G[++B]===G[++z]&&G[++B]===G[++z]&&G[++B]===G[++z]&&G[++B]===G[++z]&&G[++B]===G[++z]&&G[++B]===G[++z]&&G[++B]===G[++z]&&B<re);if(k=j-(re-B),B=re-j,D<k){if(h.match_start=U,q<=(D=k))break;he=G[B+D-1],fe=G[B+D]}}while((U=K[U&J])>A&&--x!=0);return D<=h.lookahead?D:h.lookahead}function ve(h){var U,z,k,x,B,D,q,A,G,J,K=h.w_size;do{if(x=h.window_size-h.lookahead-h.strstart,h.strstart>=K+(K-Q)){for(s.arraySet(h.window,h.window,K,K,0),h.match_start-=K,h.strstart-=K,h.block_start-=K,U=z=h.hash_size;k=h.head[--U],h.head[U]=K<=k?k-K:0,--z;);for(U=z=K;k=h.prev[--U],h.prev[U]=K<=k?k-K:0,--z;);x+=K}if(h.strm.avail_in===0)break;if(D=h.strm,q=h.window,A=h.strstart+h.lookahead,G=x,J=void 0,J=D.avail_in,G<J&&(J=G),z=J===0?0:(D.avail_in-=J,s.arraySet(q,D.input,D.next_in,J,A),D.state.wrap===1?D.adler=c(D.adler,q,J,A):D.state.wrap===2&&(D.adler=l(D.adler,q,J,A)),D.next_in+=J,D.total_in+=J,J),h.lookahead+=z,h.lookahead+h.insert>=I)for(B=h.strstart-h.insert,h.ins_h=h.window[B],h.ins_h=(h.ins_h<<h.hash_shift^h.window[B+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[B+I-1])&h.hash_mask,h.prev[B&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=B,B++,h.insert--,!(h.lookahead+h.insert<I)););}while(h.lookahead<Q&&h.strm.avail_in!==0)}function Te(h,U){for(var z,k;;){if(h.lookahead<Q){if(ve(h),h.lookahead<Q&&U===u)return p;if(h.lookahead===0)break}if(z=0,h.lookahead>=I&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,z=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),z!==0&&h.strstart-z<=h.w_size-Q&&(h.match_length=Z(h,z)),h.match_length>=I)if(k=o._tr_tally(h,h.strstart-h.match_start,h.match_length-I),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=I){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,z=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else k=o._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(k&&(R(h,!1),h.strm.avail_out===0))return p}return h.insert=h.strstart<I-1?h.strstart:I-1,U===y?(R(h,!0),h.strm.avail_out===0?ee:W):h.last_lit&&(R(h,!1),h.strm.avail_out===0)?p:H}function le(h,U){for(var z,k,x;;){if(h.lookahead<Q){if(ve(h),h.lookahead<Q&&U===u)return p;if(h.lookahead===0)break}if(z=0,h.lookahead>=I&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,z=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=I-1,z!==0&&h.prev_length<h.max_lazy_match&&h.strstart-z<=h.w_size-Q&&(h.match_length=Z(h,z),h.match_length<=5&&(h.strategy===1||h.match_length===I&&4096<h.strstart-h.match_start)&&(h.match_length=I-1)),h.prev_length>=I&&h.match_length<=h.prev_length){for(x=h.strstart+h.lookahead-I,k=o._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-I),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=x&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+I-1])&h.hash_mask,z=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=I-1,h.strstart++,k&&(R(h,!1),h.strm.avail_out===0))return p}else if(h.match_available){if((k=o._tr_tally(h,0,h.window[h.strstart-1]))&&R(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return p}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(k=o._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<I-1?h.strstart:I-1,U===y?(R(h,!0),h.strm.avail_out===0?ee:W):h.last_lit&&(R(h,!1),h.strm.avail_out===0)?p:H}function de(h,U,z,k,x){this.good_length=h,this.max_lazy=U,this.nice_length=z,this.max_chain=k,this.func=x}function ke(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*P),this.dyn_dtree=new s.Buf16(2*(2*E+1)),this.bl_tree=new s.Buf16(2*(2*O+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(L+1),this.heap=new s.Buf16(2*T+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function be(h){var U;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=b,(U=h.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?_:F,h.adler=U.wrap===2?0:1,U.last_flush=u,o._tr_init(U),f):se(h,g)}function Ge(h){var U=be(h);return U===f&&(function(z){z.window_size=2*z.w_size,ae(z.head),z.max_lazy_match=a[z.level].max_lazy,z.good_match=a[z.level].good_length,z.nice_match=a[z.level].nice_length,z.max_chain_length=a[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=I-1,z.match_available=0,z.ins_h=0})(h.state),U}function Ue(h,U,z,k,x,B){if(!h)return g;var D=1;if(U===m&&(U=6),k<0?(D=0,k=-k):15<k&&(D=2,k-=16),x<1||S<x||z!==w||k<8||15<k||U<0||9<U||B<0||v<B)return se(h,g);k===8&&(k=9);var q=new ke;return(h.state=q).strm=h,q.wrap=D,q.gzhead=null,q.w_bits=k,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=x+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+I-1)/I),q.window=new s.Buf8(2*q.w_size),q.head=new s.Buf16(q.hash_size),q.prev=new s.Buf16(q.w_size),q.lit_bufsize=1<<x+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new s.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=U,q.strategy=B,q.method=z,Ge(h)}a=[new de(0,0,0,0,function(h,U){var z=65535;for(z>h.pending_buf_size-5&&(z=h.pending_buf_size-5);;){if(h.lookahead<=1){if(ve(h),h.lookahead===0&&U===u)return p;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var k=h.block_start+z;if((h.strstart===0||h.strstart>=k)&&(h.lookahead=h.strstart-k,h.strstart=k,R(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-Q&&(R(h,!1),h.strm.avail_out===0))return p}return h.insert=0,U===y?(R(h,!0),h.strm.avail_out===0?ee:W):(h.strstart>h.block_start&&(R(h,!1),h.strm.avail_out),p)}),new de(4,4,8,4,Te),new de(4,5,16,8,Te),new de(4,6,32,32,Te),new de(4,4,16,16,le),new de(8,16,32,32,le),new de(8,16,128,128,le),new de(8,32,128,256,le),new de(32,128,258,1024,le),new de(32,258,258,4096,le)],n.deflateInit=function(h,U){return Ue(h,U,w,15,8,0)},n.deflateInit2=Ue,n.deflateReset=Ge,n.deflateResetKeep=be,n.deflateSetHeader=function(h,U){return h&&h.state?h.state.wrap!==2?g:(h.state.gzhead=U,f):g},n.deflate=function(h,U){var z,k,x,B;if(!h||!h.state||5<U||U<0)return h?se(h,g):g;if(k=h.state,!h.output||!h.input&&h.avail_in!==0||k.status===666&&U!==y)return se(h,h.avail_out===0?-5:g);if(k.strm=h,z=k.last_flush,k.last_flush=U,k.status===_)if(k.wrap===2)h.adler=0,ne(k,31),ne(k,139),ne(k,8),k.gzhead?(ne(k,(k.gzhead.text?1:0)+(k.gzhead.hcrc?2:0)+(k.gzhead.extra?4:0)+(k.gzhead.name?8:0)+(k.gzhead.comment?16:0)),ne(k,255&k.gzhead.time),ne(k,k.gzhead.time>>8&255),ne(k,k.gzhead.time>>16&255),ne(k,k.gzhead.time>>24&255),ne(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),ne(k,255&k.gzhead.os),k.gzhead.extra&&k.gzhead.extra.length&&(ne(k,255&k.gzhead.extra.length),ne(k,k.gzhead.extra.length>>8&255)),k.gzhead.hcrc&&(h.adler=l(h.adler,k.pending_buf,k.pending,0)),k.gzindex=0,k.status=69):(ne(k,0),ne(k,0),ne(k,0),ne(k,0),ne(k,0),ne(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),ne(k,3),k.status=F);else{var D=w+(k.w_bits-8<<4)<<8;D|=(2<=k.strategy||k.level<2?0:k.level<6?1:k.level===6?2:3)<<6,k.strstart!==0&&(D|=32),D+=31-D%31,k.status=F,Y(k,D),k.strstart!==0&&(Y(k,h.adler>>>16),Y(k,65535&h.adler)),h.adler=1}if(k.status===69)if(k.gzhead.extra){for(x=k.pending;k.gzindex<(65535&k.gzhead.extra.length)&&(k.pending!==k.pending_buf_size||(k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),M(h),x=k.pending,k.pending!==k.pending_buf_size));)ne(k,255&k.gzhead.extra[k.gzindex]),k.gzindex++;k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),k.gzindex===k.gzhead.extra.length&&(k.gzindex=0,k.status=73)}else k.status=73;if(k.status===73)if(k.gzhead.name){x=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),M(h),x=k.pending,k.pending===k.pending_buf_size)){B=1;break}B=k.gzindex<k.gzhead.name.length?255&k.gzhead.name.charCodeAt(k.gzindex++):0,ne(k,B)}while(B!==0);k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),B===0&&(k.gzindex=0,k.status=91)}else k.status=91;if(k.status===91)if(k.gzhead.comment){x=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),M(h),x=k.pending,k.pending===k.pending_buf_size)){B=1;break}B=k.gzindex<k.gzhead.comment.length?255&k.gzhead.comment.charCodeAt(k.gzindex++):0,ne(k,B)}while(B!==0);k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),B===0&&(k.status=103)}else k.status=103;if(k.status===103&&(k.gzhead.hcrc?(k.pending+2>k.pending_buf_size&&M(h),k.pending+2<=k.pending_buf_size&&(ne(k,255&h.adler),ne(k,h.adler>>8&255),h.adler=0,k.status=F)):k.status=F),k.pending!==0){if(M(h),h.avail_out===0)return k.last_flush=-1,f}else if(h.avail_in===0&&V(U)<=V(z)&&U!==y)return se(h,-5);if(k.status===666&&h.avail_in!==0)return se(h,-5);if(h.avail_in!==0||k.lookahead!==0||U!==u&&k.status!==666){var q=k.strategy===2?(function(A,G){for(var J;;){if(A.lookahead===0&&(ve(A),A.lookahead===0)){if(G===u)return p;break}if(A.match_length=0,J=o._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,J&&(R(A,!1),A.strm.avail_out===0))return p}return A.insert=0,G===y?(R(A,!0),A.strm.avail_out===0?ee:W):A.last_lit&&(R(A,!1),A.strm.avail_out===0)?p:H})(k,U):k.strategy===3?(function(A,G){for(var J,K,re,he,fe=A.window;;){if(A.lookahead<=j){if(ve(A),A.lookahead<=j&&G===u)return p;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=I&&0<A.strstart&&(K=fe[re=A.strstart-1])===fe[++re]&&K===fe[++re]&&K===fe[++re]){he=A.strstart+j;do;while(K===fe[++re]&&K===fe[++re]&&K===fe[++re]&&K===fe[++re]&&K===fe[++re]&&K===fe[++re]&&K===fe[++re]&&K===fe[++re]&&re<he);A.match_length=j-(he-re),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=I?(J=o._tr_tally(A,1,A.match_length-I),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(J=o._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),J&&(R(A,!1),A.strm.avail_out===0))return p}return A.insert=0,G===y?(R(A,!0),A.strm.avail_out===0?ee:W):A.last_lit&&(R(A,!1),A.strm.avail_out===0)?p:H})(k,U):a[k.level].func(k,U);if(q!==ee&&q!==W||(k.status=666),q===p||q===ee)return h.avail_out===0&&(k.last_flush=-1),f;if(q===H&&(U===1?o._tr_align(k):U!==5&&(o._tr_stored_block(k,0,0,!1),U===3&&(ae(k.head),k.lookahead===0&&(k.strstart=0,k.block_start=0,k.insert=0))),M(h),h.avail_out===0))return k.last_flush=-1,f}return U!==y?f:k.wrap<=0?1:(k.wrap===2?(ne(k,255&h.adler),ne(k,h.adler>>8&255),ne(k,h.adler>>16&255),ne(k,h.adler>>24&255),ne(k,255&h.total_in),ne(k,h.total_in>>8&255),ne(k,h.total_in>>16&255),ne(k,h.total_in>>24&255)):(Y(k,h.adler>>>16),Y(k,65535&h.adler)),M(h),0<k.wrap&&(k.wrap=-k.wrap),k.pending!==0?f:1)},n.deflateEnd=function(h){var U;return h&&h.state?(U=h.state.status)!==_&&U!==69&&U!==73&&U!==91&&U!==103&&U!==F&&U!==666?se(h,g):(h.state=null,U===F?se(h,-3):f):g},n.deflateSetDictionary=function(h,U){var z,k,x,B,D,q,A,G,J=U.length;if(!h||!h.state||(B=(z=h.state).wrap)===2||B===1&&z.status!==_||z.lookahead)return g;for(B===1&&(h.adler=c(h.adler,U,J,0)),z.wrap=0,J>=z.w_size&&(B===0&&(ae(z.head),z.strstart=0,z.block_start=0,z.insert=0),G=new s.Buf8(z.w_size),s.arraySet(G,U,J-z.w_size,z.w_size,0),U=G,J=z.w_size),D=h.avail_in,q=h.next_in,A=h.input,h.avail_in=J,h.next_in=0,h.input=U,ve(z);z.lookahead>=I;){for(k=z.strstart,x=z.lookahead-(I-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[k+I-1])&z.hash_mask,z.prev[k&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=k,k++,--x;);z.strstart=k,z.lookahead=I-1,ve(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=I-1,z.match_available=0,h.next_in=q,h.input=A,h.avail_in=D,z.wrap=B,f},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,n){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,n){r.exports=function(a,s){var o,c,l,d,u,y,f,g,m,v,b,w,S,T,E,O,P,L,I,j,Q,_,F,p,H;o=a.state,c=a.next_in,p=a.input,l=c+(a.avail_in-5),d=a.next_out,H=a.output,u=d-(s-a.avail_out),y=d+(a.avail_out-257),f=o.dmax,g=o.wsize,m=o.whave,v=o.wnext,b=o.window,w=o.hold,S=o.bits,T=o.lencode,E=o.distcode,O=(1<<o.lenbits)-1,P=(1<<o.distbits)-1;e:do{S<15&&(w+=p[c++]<<S,S+=8,w+=p[c++]<<S,S+=8),L=T[w&O];t:for(;;){if(w>>>=I=L>>>24,S-=I,(I=L>>>16&255)===0)H[d++]=65535&L;else{if(!(16&I)){if((64&I)==0){L=T[(65535&L)+(w&(1<<I)-1)];continue t}if(32&I){o.mode=12;break e}a.msg="invalid literal/length code",o.mode=30;break e}j=65535&L,(I&=15)&&(S<I&&(w+=p[c++]<<S,S+=8),j+=w&(1<<I)-1,w>>>=I,S-=I),S<15&&(w+=p[c++]<<S,S+=8,w+=p[c++]<<S,S+=8),L=E[w&P];i:for(;;){if(w>>>=I=L>>>24,S-=I,!(16&(I=L>>>16&255))){if((64&I)==0){L=E[(65535&L)+(w&(1<<I)-1)];continue i}a.msg="invalid distance code",o.mode=30;break e}if(Q=65535&L,S<(I&=15)&&(w+=p[c++]<<S,(S+=8)<I&&(w+=p[c++]<<S,S+=8)),f<(Q+=w&(1<<I)-1)){a.msg="invalid distance too far back",o.mode=30;break e}if(w>>>=I,S-=I,(I=d-u)<Q){if(m<(I=Q-I)&&o.sane){a.msg="invalid distance too far back",o.mode=30;break e}if(F=b,(_=0)===v){if(_+=g-I,I<j){for(j-=I;H[d++]=b[_++],--I;);_=d-Q,F=H}}else if(v<I){if(_+=g+v-I,(I-=v)<j){for(j-=I;H[d++]=b[_++],--I;);if(_=0,v<j){for(j-=I=v;H[d++]=b[_++],--I;);_=d-Q,F=H}}}else if(_+=v-I,I<j){for(j-=I;H[d++]=b[_++],--I;);_=d-Q,F=H}for(;2<j;)H[d++]=F[_++],H[d++]=F[_++],H[d++]=F[_++],j-=3;j&&(H[d++]=F[_++],1<j&&(H[d++]=F[_++]))}else{for(_=d-Q;H[d++]=H[_++],H[d++]=H[_++],H[d++]=H[_++],2<(j-=3););j&&(H[d++]=H[_++],1<j&&(H[d++]=H[_++]))}break}}break}}while(c<l&&d<y);c-=j=S>>3,w&=(1<<(S-=j<<3))-1,a.next_in=c,a.next_out=d,a.avail_in=c<l?l-c+5:5-(c-l),a.avail_out=d<y?y-d+257:257-(d-y),o.hold=w,o.bits=S}},{}],49:[function(i,r,n){var a=i("../utils/common"),s=i("./adler32"),o=i("./crc32"),c=i("./inffast"),l=i("./inftrees"),d=1,u=2,y=0,f=-2,g=1,m=852,v=592;function b(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(_){var F;return _&&_.state?(F=_.state,_.total_in=_.total_out=F.total=0,_.msg="",F.wrap&&(_.adler=1&F.wrap),F.mode=g,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new a.Buf32(m),F.distcode=F.distdyn=new a.Buf32(v),F.sane=1,F.back=-1,y):f}function T(_){var F;return _&&_.state?((F=_.state).wsize=0,F.whave=0,F.wnext=0,S(_)):f}function E(_,F){var p,H;return _&&_.state?(H=_.state,F<0?(p=0,F=-F):(p=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?f:(H.window!==null&&H.wbits!==F&&(H.window=null),H.wrap=p,H.wbits=F,T(_))):f}function O(_,F){var p,H;return _?(H=new w,(_.state=H).window=null,(p=E(_,F))!==y&&(_.state=null),p):f}var P,L,I=!0;function j(_){if(I){var F;for(P=new a.Buf32(512),L=new a.Buf32(32),F=0;F<144;)_.lens[F++]=8;for(;F<256;)_.lens[F++]=9;for(;F<280;)_.lens[F++]=7;for(;F<288;)_.lens[F++]=8;for(l(d,_.lens,0,288,P,0,_.work,{bits:9}),F=0;F<32;)_.lens[F++]=5;l(u,_.lens,0,32,L,0,_.work,{bits:5}),I=!1}_.lencode=P,_.lenbits=9,_.distcode=L,_.distbits=5}function Q(_,F,p,H){var ee,W=_.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new a.Buf8(W.wsize)),H>=W.wsize?(a.arraySet(W.window,F,p-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(H<(ee=W.wsize-W.wnext)&&(ee=H),a.arraySet(W.window,F,p-H,ee,W.wnext),(H-=ee)?(a.arraySet(W.window,F,p-H,H,0),W.wnext=H,W.whave=W.wsize):(W.wnext+=ee,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=ee))),0}n.inflateReset=T,n.inflateReset2=E,n.inflateResetKeep=S,n.inflateInit=function(_){return O(_,15)},n.inflateInit2=O,n.inflate=function(_,F){var p,H,ee,W,se,V,ae,M,R,ne,Y,Z,ve,Te,le,de,ke,be,Ge,Ue,h,U,z,k,x=0,B=new a.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return f;(p=_.state).mode===12&&(p.mode=13),se=_.next_out,ee=_.output,ae=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,M=p.hold,R=p.bits,ne=V,Y=ae,U=y;e:for(;;)switch(p.mode){case g:if(p.wrap===0){p.mode=13;break}for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(2&p.wrap&&M===35615){B[p.check=0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0),R=M=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&M)<<8)+(M>>8))%31){_.msg="incorrect header check",p.mode=30;break}if((15&M)!=8){_.msg="unknown compression method",p.mode=30;break}if(R-=4,h=8+(15&(M>>>=4)),p.wbits===0)p.wbits=h;else if(h>p.wbits){_.msg="invalid window size",p.mode=30;break}p.dmax=1<<h,_.adler=p.check=1,p.mode=512&M?10:12,R=M=0;break;case 2:for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(p.flags=M,(255&p.flags)!=8){_.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){_.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=M>>8&1),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0)),R=M=0,p.mode=3;case 3:for(;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.head&&(p.head.time=M),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,B[2]=M>>>16&255,B[3]=M>>>24&255,p.check=o(p.check,B,4,0)),R=M=0,p.mode=4;case 4:for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.head&&(p.head.xflags=255&M,p.head.os=M>>8),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0)),R=M=0,p.mode=5;case 5:if(1024&p.flags){for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.length=M,p.head&&(p.head.extra_len=M),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0)),R=M=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(V<(Z=p.length)&&(Z=V),Z&&(p.head&&(h=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),a.arraySet(p.head.extra,H,W,Z,h)),512&p.flags&&(p.check=o(p.check,H,Z,W)),V-=Z,W+=Z,p.length-=Z),p.length))break e;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(V===0)break e;for(Z=0;h=H[W+Z++],p.head&&h&&p.length<65536&&(p.head.name+=String.fromCharCode(h)),h&&Z<V;);if(512&p.flags&&(p.check=o(p.check,H,Z,W)),V-=Z,W+=Z,h)break e}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(V===0)break e;for(Z=0;h=H[W+Z++],p.head&&h&&p.length<65536&&(p.head.comment+=String.fromCharCode(h)),h&&Z<V;);if(512&p.flags&&(p.check=o(p.check,H,Z,W)),V-=Z,W+=Z,h)break e}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(M!==(65535&p.check)){_.msg="header crc mismatch",p.mode=30;break}R=M=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),_.adler=p.check=0,p.mode=12;break;case 10:for(;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}_.adler=p.check=b(M),R=M=0,p.mode=11;case 11:if(p.havedict===0)return _.next_out=se,_.avail_out=ae,_.next_in=W,_.avail_in=V,p.hold=M,p.bits=R,2;_.adler=p.check=1,p.mode=12;case 12:if(F===5||F===6)break e;case 13:if(p.last){M>>>=7&R,R-=7&R,p.mode=27;break}for(;R<3;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}switch(p.last=1&M,R-=1,3&(M>>>=1)){case 0:p.mode=14;break;case 1:if(j(p),p.mode=20,F!==6)break;M>>>=2,R-=2;break e;case 2:p.mode=17;break;case 3:_.msg="invalid block type",p.mode=30}M>>>=2,R-=2;break;case 14:for(M>>>=7&R,R-=7&R;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if((65535&M)!=(M>>>16^65535)){_.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&M,R=M=0,p.mode=15,F===6)break e;case 15:p.mode=16;case 16:if(Z=p.length){if(V<Z&&(Z=V),ae<Z&&(Z=ae),Z===0)break e;a.arraySet(ee,H,W,Z,se),V-=Z,W+=Z,ae-=Z,se+=Z,p.length-=Z;break}p.mode=12;break;case 17:for(;R<14;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(p.nlen=257+(31&M),M>>>=5,R-=5,p.ndist=1+(31&M),M>>>=5,R-=5,p.ncode=4+(15&M),M>>>=4,R-=4,286<p.nlen||30<p.ndist){_.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;R<3;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.lens[D[p.have++]]=7&M,M>>>=3,R-=3}for(;p.have<19;)p.lens[D[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,z={bits:p.lenbits},U=l(0,p.lens,0,19,p.lencode,0,p.work,z),p.lenbits=z.bits,U){_.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;de=(x=p.lencode[M&(1<<p.lenbits)-1])>>>16&255,ke=65535&x,!((le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(ke<16)M>>>=le,R-=le,p.lens[p.have++]=ke;else{if(ke===16){for(k=le+2;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(M>>>=le,R-=le,p.have===0){_.msg="invalid bit length repeat",p.mode=30;break}h=p.lens[p.have-1],Z=3+(3&M),M>>>=2,R-=2}else if(ke===17){for(k=le+3;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}R-=le,h=0,Z=3+(7&(M>>>=le)),M>>>=3,R-=3}else{for(k=le+7;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}R-=le,h=0,Z=11+(127&(M>>>=le)),M>>>=7,R-=7}if(p.have+Z>p.nlen+p.ndist){_.msg="invalid bit length repeat",p.mode=30;break}for(;Z--;)p.lens[p.have++]=h}}if(p.mode===30)break;if(p.lens[256]===0){_.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,z={bits:p.lenbits},U=l(d,p.lens,0,p.nlen,p.lencode,0,p.work,z),p.lenbits=z.bits,U){_.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,z={bits:p.distbits},U=l(u,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,z),p.distbits=z.bits,U){_.msg="invalid distances set",p.mode=30;break}if(p.mode=20,F===6)break e;case 20:p.mode=21;case 21:if(6<=V&&258<=ae){_.next_out=se,_.avail_out=ae,_.next_in=W,_.avail_in=V,p.hold=M,p.bits=R,c(_,Y),se=_.next_out,ee=_.output,ae=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,M=p.hold,R=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;de=(x=p.lencode[M&(1<<p.lenbits)-1])>>>16&255,ke=65535&x,!((le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(de&&(240&de)==0){for(be=le,Ge=de,Ue=ke;de=(x=p.lencode[Ue+((M&(1<<be+Ge)-1)>>be)])>>>16&255,ke=65535&x,!(be+(le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}M>>>=be,R-=be,p.back+=be}if(M>>>=le,R-=le,p.back+=le,p.length=ke,de===0){p.mode=26;break}if(32&de){p.back=-1,p.mode=12;break}if(64&de){_.msg="invalid literal/length code",p.mode=30;break}p.extra=15&de,p.mode=22;case 22:if(p.extra){for(k=p.extra;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.length+=M&(1<<p.extra)-1,M>>>=p.extra,R-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;de=(x=p.distcode[M&(1<<p.distbits)-1])>>>16&255,ke=65535&x,!((le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if((240&de)==0){for(be=le,Ge=de,Ue=ke;de=(x=p.distcode[Ue+((M&(1<<be+Ge)-1)>>be)])>>>16&255,ke=65535&x,!(be+(le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}M>>>=be,R-=be,p.back+=be}if(M>>>=le,R-=le,p.back+=le,64&de){_.msg="invalid distance code",p.mode=30;break}p.offset=ke,p.extra=15&de,p.mode=24;case 24:if(p.extra){for(k=p.extra;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.offset+=M&(1<<p.extra)-1,M>>>=p.extra,R-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){_.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(ae===0)break e;if(Z=Y-ae,p.offset>Z){if((Z=p.offset-Z)>p.whave&&p.sane){_.msg="invalid distance too far back",p.mode=30;break}ve=Z>p.wnext?(Z-=p.wnext,p.wsize-Z):p.wnext-Z,Z>p.length&&(Z=p.length),Te=p.window}else Te=ee,ve=se-p.offset,Z=p.length;for(ae<Z&&(Z=ae),ae-=Z,p.length-=Z;ee[se++]=Te[ve++],--Z;);p.length===0&&(p.mode=21);break;case 26:if(ae===0)break e;ee[se++]=p.length,ae--,p.mode=21;break;case 27:if(p.wrap){for(;R<32;){if(V===0)break e;V--,M|=H[W++]<<R,R+=8}if(Y-=ae,_.total_out+=Y,p.total+=Y,Y&&(_.adler=p.check=p.flags?o(p.check,ee,Y,se-Y):s(p.check,ee,Y,se-Y)),Y=ae,(p.flags?M:b(M))!==p.check){_.msg="incorrect data check",p.mode=30;break}R=M=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(M!==(4294967295&p.total)){_.msg="incorrect length check",p.mode=30;break}R=M=0}p.mode=29;case 29:U=1;break e;case 30:U=-3;break e;case 31:return-4;case 32:default:return f}return _.next_out=se,_.avail_out=ae,_.next_in=W,_.avail_in=V,p.hold=M,p.bits=R,(p.wsize||Y!==_.avail_out&&p.mode<30&&(p.mode<27||F!==4))&&Q(_,_.output,_.next_out,Y-_.avail_out)?(p.mode=31,-4):(ne-=_.avail_in,Y-=_.avail_out,_.total_in+=ne,_.total_out+=Y,p.total+=Y,p.wrap&&Y&&(_.adler=p.check=p.flags?o(p.check,ee,Y,_.next_out-Y):s(p.check,ee,Y,_.next_out-Y)),_.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(ne==0&&Y===0||F===4)&&U===y&&(U=-5),U)},n.inflateEnd=function(_){if(!_||!_.state)return f;var F=_.state;return F.window&&(F.window=null),_.state=null,y},n.inflateGetHeader=function(_,F){var p;return _&&_.state?(2&(p=_.state).wrap)==0?f:((p.head=F).done=!1,y):f},n.inflateSetDictionary=function(_,F){var p,H=F.length;return _&&_.state?(p=_.state).wrap!==0&&p.mode!==11?f:p.mode===11&&s(1,F,H,0)!==p.check?-3:Q(_,F,H,H)?(p.mode=31,-4):(p.havedict=1,y):f},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,n){var a=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(d,u,y,f,g,m,v,b){var w,S,T,E,O,P,L,I,j,Q=b.bits,_=0,F=0,p=0,H=0,ee=0,W=0,se=0,V=0,ae=0,M=0,R=null,ne=0,Y=new a.Buf16(16),Z=new a.Buf16(16),ve=null,Te=0;for(_=0;_<=15;_++)Y[_]=0;for(F=0;F<f;F++)Y[u[y+F]]++;for(ee=Q,H=15;1<=H&&Y[H]===0;H--);if(H<ee&&(ee=H),H===0)return g[m++]=20971520,g[m++]=20971520,b.bits=1,0;for(p=1;p<H&&Y[p]===0;p++);for(ee<p&&(ee=p),_=V=1;_<=15;_++)if(V<<=1,(V-=Y[_])<0)return-1;if(0<V&&(d===0||H!==1))return-1;for(Z[1]=0,_=1;_<15;_++)Z[_+1]=Z[_]+Y[_];for(F=0;F<f;F++)u[y+F]!==0&&(v[Z[u[y+F]]++]=F);if(P=d===0?(R=ve=v,19):d===1?(R=s,ne-=257,ve=o,Te-=257,256):(R=c,ve=l,-1),_=p,O=m,se=F=M=0,T=-1,E=(ae=1<<(W=ee))-1,d===1&&852<ae||d===2&&592<ae)return 1;for(;;){for(L=_-se,j=v[F]<P?(I=0,v[F]):v[F]>P?(I=ve[Te+v[F]],R[ne+v[F]]):(I=96,0),w=1<<_-se,p=S=1<<W;g[O+(M>>se)+(S-=w)]=L<<24|I<<16|j|0,S!==0;);for(w=1<<_-1;M&w;)w>>=1;if(w!==0?(M&=w-1,M+=w):M=0,F++,--Y[_]==0){if(_===H)break;_=u[y+v[F]]}if(ee<_&&(M&E)!==T){for(se===0&&(se=ee),O+=p,V=1<<(W=_-se);W+se<H&&!((V-=Y[W+se])<=0);)W++,V<<=1;if(ae+=1<<W,d===1&&852<ae||d===2&&592<ae)return 1;g[T=M&E]=ee<<24|W<<16|O-m|0}}return M!==0&&(g[O+M]=_-se<<24|64<<16|0),b.bits=ee,0}},{"../utils/common":41}],51:[function(i,r,n){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,n){var a=i("../utils/common"),s=0,o=1;function c(x){for(var B=x.length;0<=--B;)x[B]=0}var l=0,d=29,u=256,y=u+1+d,f=30,g=19,m=2*y+1,v=15,b=16,w=7,S=256,T=16,E=17,O=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(y+2));c(Q);var _=new Array(2*f);c(_);var F=new Array(512);c(F);var p=new Array(256);c(p);var H=new Array(d);c(H);var ee,W,se,V=new Array(f);function ae(x,B,D,q,A){this.static_tree=x,this.extra_bits=B,this.extra_base=D,this.elems=q,this.max_length=A,this.has_stree=x&&x.length}function M(x,B){this.dyn_tree=x,this.max_code=0,this.stat_desc=B}function R(x){return x<256?F[x]:F[256+(x>>>7)]}function ne(x,B){x.pending_buf[x.pending++]=255&B,x.pending_buf[x.pending++]=B>>>8&255}function Y(x,B,D){x.bi_valid>b-D?(x.bi_buf|=B<<x.bi_valid&65535,ne(x,x.bi_buf),x.bi_buf=B>>b-x.bi_valid,x.bi_valid+=D-b):(x.bi_buf|=B<<x.bi_valid&65535,x.bi_valid+=D)}function Z(x,B,D){Y(x,D[2*B],D[2*B+1])}function ve(x,B){for(var D=0;D|=1&x,x>>>=1,D<<=1,0<--B;);return D>>>1}function Te(x,B,D){var q,A,G=new Array(v+1),J=0;for(q=1;q<=v;q++)G[q]=J=J+D[q-1]<<1;for(A=0;A<=B;A++){var K=x[2*A+1];K!==0&&(x[2*A]=ve(G[K]++,K))}}function le(x){var B;for(B=0;B<y;B++)x.dyn_ltree[2*B]=0;for(B=0;B<f;B++)x.dyn_dtree[2*B]=0;for(B=0;B<g;B++)x.bl_tree[2*B]=0;x.dyn_ltree[2*S]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function de(x){8<x.bi_valid?ne(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function ke(x,B,D,q){var A=2*B,G=2*D;return x[A]<x[G]||x[A]===x[G]&&q[B]<=q[D]}function be(x,B,D){for(var q=x.heap[D],A=D<<1;A<=x.heap_len&&(A<x.heap_len&&ke(B,x.heap[A+1],x.heap[A],x.depth)&&A++,!ke(B,q,x.heap[A],x.depth));)x.heap[D]=x.heap[A],D=A,A<<=1;x.heap[D]=q}function Ge(x,B,D){var q,A,G,J,K=0;if(x.last_lit!==0)for(;q=x.pending_buf[x.d_buf+2*K]<<8|x.pending_buf[x.d_buf+2*K+1],A=x.pending_buf[x.l_buf+K],K++,q===0?Z(x,A,B):(Z(x,(G=p[A])+u+1,B),(J=P[G])!==0&&Y(x,A-=H[G],J),Z(x,G=R(--q),D),(J=L[G])!==0&&Y(x,q-=V[G],J)),K<x.last_lit;);Z(x,S,B)}function Ue(x,B){var D,q,A,G=B.dyn_tree,J=B.stat_desc.static_tree,K=B.stat_desc.has_stree,re=B.stat_desc.elems,he=-1;for(x.heap_len=0,x.heap_max=m,D=0;D<re;D++)G[2*D]!==0?(x.heap[++x.heap_len]=he=D,x.depth[D]=0):G[2*D+1]=0;for(;x.heap_len<2;)G[2*(A=x.heap[++x.heap_len]=he<2?++he:0)]=1,x.depth[A]=0,x.opt_len--,K&&(x.static_len-=J[2*A+1]);for(B.max_code=he,D=x.heap_len>>1;1<=D;D--)be(x,G,D);for(A=re;D=x.heap[1],x.heap[1]=x.heap[x.heap_len--],be(x,G,1),q=x.heap[1],x.heap[--x.heap_max]=D,x.heap[--x.heap_max]=q,G[2*A]=G[2*D]+G[2*q],x.depth[A]=(x.depth[D]>=x.depth[q]?x.depth[D]:x.depth[q])+1,G[2*D+1]=G[2*q+1]=A,x.heap[1]=A++,be(x,G,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(fe,Me){var Nt,Xe,Wt,ye,si,nr,rt=Me.dyn_tree,ra=Me.max_code,ed=Me.stat_desc.static_tree,td=Me.stat_desc.has_stree,id=Me.stat_desc.extra_bits,na=Me.stat_desc.extra_base,Dt=Me.stat_desc.max_length,oi=0;for(ye=0;ye<=v;ye++)fe.bl_count[ye]=0;for(rt[2*fe.heap[fe.heap_max]+1]=0,Nt=fe.heap_max+1;Nt<m;Nt++)Dt<(ye=rt[2*rt[2*(Xe=fe.heap[Nt])+1]+1]+1)&&(ye=Dt,oi++),rt[2*Xe+1]=ye,ra<Xe||(fe.bl_count[ye]++,si=0,na<=Xe&&(si=id[Xe-na]),nr=rt[2*Xe],fe.opt_len+=nr*(ye+si),td&&(fe.static_len+=nr*(ed[2*Xe+1]+si)));if(oi!==0){do{for(ye=Dt-1;fe.bl_count[ye]===0;)ye--;fe.bl_count[ye]--,fe.bl_count[ye+1]+=2,fe.bl_count[Dt]--,oi-=2}while(0<oi);for(ye=Dt;ye!==0;ye--)for(Xe=fe.bl_count[ye];Xe!==0;)ra<(Wt=fe.heap[--Nt])||(rt[2*Wt+1]!==ye&&(fe.opt_len+=(ye-rt[2*Wt+1])*rt[2*Wt],rt[2*Wt+1]=ye),Xe--)}})(x,B),Te(G,he,x.bl_count)}function h(x,B,D){var q,A,G=-1,J=B[1],K=0,re=7,he=4;for(J===0&&(re=138,he=3),B[2*(D+1)+1]=65535,q=0;q<=D;q++)A=J,J=B[2*(q+1)+1],++K<re&&A===J||(K<he?x.bl_tree[2*A]+=K:A!==0?(A!==G&&x.bl_tree[2*A]++,x.bl_tree[2*T]++):K<=10?x.bl_tree[2*E]++:x.bl_tree[2*O]++,G=A,he=(K=0)===J?(re=138,3):A===J?(re=6,3):(re=7,4))}function U(x,B,D){var q,A,G=-1,J=B[1],K=0,re=7,he=4;for(J===0&&(re=138,he=3),q=0;q<=D;q++)if(A=J,J=B[2*(q+1)+1],!(++K<re&&A===J)){if(K<he)for(;Z(x,A,x.bl_tree),--K!=0;);else A!==0?(A!==G&&(Z(x,A,x.bl_tree),K--),Z(x,T,x.bl_tree),Y(x,K-3,2)):K<=10?(Z(x,E,x.bl_tree),Y(x,K-3,3)):(Z(x,O,x.bl_tree),Y(x,K-11,7));G=A,he=(K=0)===J?(re=138,3):A===J?(re=6,3):(re=7,4)}}c(V);var z=!1;function k(x,B,D,q){Y(x,(l<<1)+(q?1:0),3),(function(A,G,J,K){de(A),ne(A,J),ne(A,~J),a.arraySet(A.pending_buf,A.window,G,J,A.pending),A.pending+=J})(x,B,D)}n._tr_init=function(x){z||((function(){var B,D,q,A,G,J=new Array(v+1);for(A=q=0;A<d-1;A++)for(H[A]=q,B=0;B<1<<P[A];B++)p[q++]=A;for(p[q-1]=A,A=G=0;A<16;A++)for(V[A]=G,B=0;B<1<<L[A];B++)F[G++]=A;for(G>>=7;A<f;A++)for(V[A]=G<<7,B=0;B<1<<L[A]-7;B++)F[256+G++]=A;for(D=0;D<=v;D++)J[D]=0;for(B=0;B<=143;)Q[2*B+1]=8,B++,J[8]++;for(;B<=255;)Q[2*B+1]=9,B++,J[9]++;for(;B<=279;)Q[2*B+1]=7,B++,J[7]++;for(;B<=287;)Q[2*B+1]=8,B++,J[8]++;for(Te(Q,y+1,J),B=0;B<f;B++)_[2*B+1]=5,_[2*B]=ve(B,5);ee=new ae(Q,P,u+1,y,v),W=new ae(_,L,0,f,v),se=new ae(new Array(0),I,0,g,w)})(),z=!0),x.l_desc=new M(x.dyn_ltree,ee),x.d_desc=new M(x.dyn_dtree,W),x.bl_desc=new M(x.bl_tree,se),x.bi_buf=0,x.bi_valid=0,le(x)},n._tr_stored_block=k,n._tr_flush_block=function(x,B,D,q){var A,G,J=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(K){var re,he=4093624447;for(re=0;re<=31;re++,he>>>=1)if(1&he&&K.dyn_ltree[2*re]!==0)return s;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return o;for(re=32;re<u;re++)if(K.dyn_ltree[2*re]!==0)return o;return s})(x)),Ue(x,x.l_desc),Ue(x,x.d_desc),J=(function(K){var re;for(h(K,K.dyn_ltree,K.l_desc.max_code),h(K,K.dyn_dtree,K.d_desc.max_code),Ue(K,K.bl_desc),re=g-1;3<=re&&K.bl_tree[2*j[re]+1]===0;re--);return K.opt_len+=3*(re+1)+5+5+4,re})(x),A=x.opt_len+3+7>>>3,(G=x.static_len+3+7>>>3)<=A&&(A=G)):A=G=D+5,D+4<=A&&B!==-1?k(x,B,D,q):x.strategy===4||G===A?(Y(x,2+(q?1:0),3),Ge(x,Q,_)):(Y(x,4+(q?1:0),3),(function(K,re,he,fe){var Me;for(Y(K,re-257,5),Y(K,he-1,5),Y(K,fe-4,4),Me=0;Me<fe;Me++)Y(K,K.bl_tree[2*j[Me]+1],3);U(K,K.dyn_ltree,re-1),U(K,K.dyn_dtree,he-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,J+1),Ge(x,x.dyn_ltree,x.dyn_dtree)),le(x),q&&de(x)},n._tr_tally=function(x,B,D){return x.pending_buf[x.d_buf+2*x.last_lit]=B>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&B,x.pending_buf[x.l_buf+x.last_lit]=255&D,x.last_lit++,B===0?x.dyn_ltree[2*D]++:(x.matches++,B--,x.dyn_ltree[2*(p[D]+u+1)]++,x.dyn_dtree[2*R(B)]++),x.last_lit===x.lit_bufsize-1},n._tr_align=function(x){Y(x,2,3),Z(x,S,Q),(function(B){B.bi_valid===16?(ne(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,r,n){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,n){(function(a){(function(s,o){if(!s.setImmediate){var c,l,d,u,y=1,f={},g=!1,m=s.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(s);v=v&&v.setTimeout?v:s,c={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){w(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,E=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=E,T}})()?(u="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",S,!1):s.attachEvent("onmessage",S),function(T){s.postMessage(u+T,"*")}):s.MessageChannel?((d=new MessageChannel).port1.onmessage=function(T){w(T.data)},function(T){d.port2.postMessage(T)}):m&&"onreadystatechange"in m.createElement("script")?(l=m.documentElement,function(T){var E=m.createElement("script");E.onreadystatechange=function(){w(T),E.onreadystatechange=null,l.removeChild(E),E=null},l.appendChild(E)}):function(T){setTimeout(w,0,T)},v.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var E=new Array(arguments.length-1),O=0;O<E.length;O++)E[O]=arguments[O+1];var P={callback:T,args:E};return f[y]=P,c(y),y++},v.clearImmediate=b}function b(T){delete f[T]}function w(T){if(g)setTimeout(w,0,T);else{var E=f[T];if(E){g=!0;try{(function(O){var P=O.callback,L=O.args;switch(L.length){case 0:P();break;case 1:P(L[0]);break;case 2:P(L[0],L[1]);break;case 3:P(L[0],L[1],L[2]);break;default:P.apply(o,L)}})(E)}finally{b(T),g=!1}}}}function S(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(u)===0&&w(+T.data.slice(u.length))}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(yi)),yi.exports}var Fs=Ms();const zs=Rs(Fs);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function N(t){if(!t)throw new Error("Assertion failed.")}const Os=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},We=t=>t&&t[t.length-1],st=t=>t>=0&&t<2**32,X=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},Ye=t=>{const e=X(t);return(e&1)===0?-(e>>1):e+1>>1},ze=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),Gt=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),De=new TextEncoder,Xt={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Kt={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Zt={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Hs=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,wi=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Cr{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(n=>{let a=!1;e=()=>{a||(n(),this.pending--,a=!0)}}),r=this.currentPromise;return this.currentPromise=i,this.pending++,await r,e}}const Br=(t,e,i)=>{let r=0,n=t.length-1,a=-1;for(;r<=n;){const s=r+(n-r+1)/2|0;i(t[s])<=e?(a=s,r=s+1):n=s-1}return a},Ar=()=>{let t,e;return{promise:new Promise((r,n)=>{t=r,e=n}),resolve:t,reject:e}},gt=t=>{throw new Error(`Unexpected value: ${t}`)},Ls=(t,e,i)=>{const r=t.getUint8(e),n=t.getUint8(e+1),a=t.getUint8(e+2);return r<<16|n<<8|a},Us=(t,e,i,r)=>{i=i>>>0,i=i&16777215,t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255)},Pr=(t,e,i)=>Math.max(e,Math.min(i,t)),Ns=(t,e,i)=>t+(e-t)*i,Ws="und",Ir=(t,e)=>Math.round(t/e)*e,Rr=(t,e)=>Math.floor(t*e)/e,Ds=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},qs=/^[a-z]{3}$/,$s=t=>qs.test(t),vt=1e6*(1+Number.EPSILON),js=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let r=0,n=1,a=1,s=0,o=t;for(;;){const c=Math.floor(o),l=c*a+r,d=c*s+n;if(d>e)return{num:i*a,den:s};if(r=a,n=s,a=l,s=d,o=1/(o-c),!isFinite(o))break}return{num:i*a,den:s}};class Vs{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let xi=null;const Mr=()=>xi!==null?xi:xi=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let _i=null;const Gs=()=>_i!==null?_i:_i=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let ki=null;const Xs=()=>{if(ki!==null)return ki;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?ki=Number(t[1]):null},Fr=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Ks=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},Zs=(t,e)=>{let i=-1,r=1/0;for(let n=0;n<t.length;n++){const a=e(t[n]);a<r&&(r=a,i=n)}return i},zr=t=>{N(Number.isInteger(t.num)),N(Number.isInteger(t.den)),N(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const n=e%i;e=i,i=n}const r=e||1;return{num:t.num/r,den:t.den/r}},Si=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Qs=t=>new Promise(e=>setTimeout(e,t)),Or=t=>Array.isArray(t)?t:[t];class Ti{constructor(){this._listeners=new Map}on(e,i,r){this._listeners.has(e)||this._listeners.set(e,new Set);const n={fn:i,once:r?.once??!1};return this._listeners.get(e).add(n),()=>{this._listeners.get(e)?.delete(n)}}_emit(...e){const[i,r]=e,n=this._listeners.get(i);if(n)for(const a of n){try{a.fn(r)}catch(s){console.error(s)}a.once&&n.delete(a)}}}const Ys=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var qe;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(qe||(qe={}));class pe{constructor(){}static get level(){return pe._level}static set level(e){if(e!==qe.Silent&&e!==qe.Errors&&e!==qe.Warnings&&e!==qe.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");pe._level=e}static get _emitter(){return pe._emitterInstance??=new Ti}static on(e,i,r){return pe._emitter.on(e,i,r)}static _error(...e){pe._emitter._emit("error",e),pe._level>=qe.Errors&&console.error(...e)}static _warn(...e){pe._emitter._emit("warn",e),pe._level>=qe.Warnings&&console.warn(...e)}static _info(...e){pe._emitter._emit("info",e),pe._level>=qe.Info&&console.info(...e)}}pe._level=qe.Info,pe._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Hr{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Js{constructor(e,i,r,n){if(this.data=e,this.mimeType=i,this.name=r,this.description=n,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("name, when provided, must be a string.");if(n!==void 0&&typeof n!="string")throw new TypeError("description, when provided, must be a string.")}}const eo=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof Hr)&&!(e instanceof Js)&&!Ys(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},to=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class _e{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,r=7-(this.pos&7),n=(i&1<<r)>>r;return this.pos++,n}readBits(e){if(e===1)return this.readBit();let i=0;for(let r=0;r<e;r++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const r=this.pos+e;for(let n=this.pos;n<r;n++){const a=Math.floor(n/8);let s=this.bytes[a];const o=7-(n&7);s&=~(1<<o),s|=(i&1<<r-n-1)>>r-n-1<<o,this.bytes[a]=s}this.pos=r}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new _e(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Lr=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Ur=[-1,1,2,3,4,5,6,8],io=t=>{let e=Lr.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const r=Ur.indexOf(t.numberOfChannels);if(r===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let n=13;t.objectType>=32&&(n+=6),e===15&&(n+=24);const a=Math.ceil(n/8),s=new Uint8Array(a),o=new _e(s);return t.objectType<32?o.writeBits(5,t.objectType):(o.writeBits(5,31),o.writeBits(6,t.objectType-32)),o.writeBits(4,e),e===15&&o.writeBits(24,i),o.writeBits(4,r),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Je=["avc","hevc","vp9","av1","vp8","prores"],ft=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Ei=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Qt=[...Ei,...ft],Ct=["webvtt"],Yt=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Nr=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],Wr=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Dr=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Bt=["ap4x","ap4h","apch","apcn","apcs","apco"],Ci=["dtsc","dtsh","dtsl","dtse"],ro=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],no=(t,e,i,r,n)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),o=Yt.find(y=>s<=y.maxMacroblocks&&r<=y.maxBitrate)??We(Yt),c=o?o.level:0,l="64".padStart(2,"0"),d="00",u=c.toString(16).padStart(2,"0");return`avc1.${l}${d}${u}`}else if(t==="hevc"){const c=e*i,l=Nr.find(u=>c<=u.maxPictureSize&&r<=u.maxBitrate)??We(Nr);return`hev1.1.6.${l.tier}${l.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(Wr.find(l=>s<=l.maxPictureSize&&r<=l.maxBitrate)??We(Wr)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,o=Dr.find(d=>s<=d.maxPictureSize&&r<=d.maxBitrate)??We(Dr);return`av01.0.${o.level.toString().padStart(2,"0")}${o.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),o=ro.filter(d=>d.alpha===n);let c=o[0].fourCc,l=1/0;for(const{fourCc:d,bitrate:u}of o){const y=Math.abs(u*s-r);y<l&&(l=y,c=d)}return c}else gt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},ao=t=>{const e=t.split("."),n=(1<<7)+1,a=Number(e[1]),s=e[2],o=Number(s.slice(0,-1)),c=(a<<5)+o,l=s.slice(-1)==="H"?1:0,u=Number(e[3])===8?0:1,y=0,f=e[4]?Number(e[4]):0,g=e[5]?Number(e[5][0]):1,m=e[5]?Number(e[5][1]):1,v=e[5]?Number(e[5][2]):0,b=(l<<7)+(u<<6)+(y<<5)+(f<<4)+(g<<3)+(m<<2)+v;return[n,c,b,0]},qr=/^pcm-([usf])(\d+)(be)?$/,bt=t=>{if(N(ft.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=qr.exec(t);N(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const r=Number(e[2])/8,n=e[3]!=="be",a=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:r,littleEndian:n,silentValue:a}},Bi=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Bt.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Ci.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":qr.test(t)?t:t==="webvtt"?"webvtt":null,so=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},oo=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Bt],co=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,lo=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,fo=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,uo=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,$r=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!oo.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!wi(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const r=Object.keys(Xt);if(i.primaries!=null&&!r.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${r.join(", ")}.`);const n=Object.keys(Kt);if(i.transfer!=null&&!n.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${n.join(", ")}.`);const a=Object.keys(Zt);if(i.matrix!=null&&!a.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${a.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!co.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!lo.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!fo.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!uo.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Bt.some(i=>t.decoderConfig.codec.startsWith(i))&&!Bt.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Bt.join(", ")}.`);if(e!==null&&Bi(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},ho=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],jr=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!ho.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!wi(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Ci.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Ci.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!ft.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${ft.join(", ")}).`);if(e!==null&&Bi(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},mo=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const po=[48e3,44100,32e3],go=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var et;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(et||(et={}));var Pe;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Pe||(Pe={}));const At=function*(t){let e=0,i=-1;for(;e<t.length-2;){const r=t.indexOf(0,e);if(r===-1||r>=t.length-2)break;e=r;let n=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?n=4:t[e+1]===0&&t[e+2]===1&&(n=3),n===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+n,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Vr=function*(t,e){let i=0;const r=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let n;e===1?n=r.getUint8(i):e===2?n=r.getUint16(i,!1):e===3?n=Ls(r,i):(N(e===4),n=r.getUint32(i,!1)),i+=e,yield{offset:i,length:n},i+=n}},vo=(t,e)=>{if(e.description){const n=(ze(e.description)[4]&3)+1;return Vr(t,n)}else return At(t)},Gr=t=>t&31,Jt=t=>{const e=[],i=t.length;for(let r=0;r<i;r++)r+2<i&&t[r]===0&&t[r+1]===0&&t[r+2]===3?(e.push(0,0),r+=2):e.push(t[r]);return new Uint8Array(e)},bo=(t,e)=>{const i=t.reduce((a,s)=>a+e+s.byteLength,0),r=new Uint8Array(i);let n=0;for(const a of t){const s=new DataView(r.buffer,r.byteOffset,r.byteLength);switch(e){case 1:s.setUint8(n,a.byteLength);break;case 2:s.setUint16(n,a.byteLength,!1);break;case 3:Us(s,n,a.byteLength);break;case 4:s.setUint32(n,a.byteLength,!1);break}n+=e,r.set(a,n),n+=a.byteLength}return r},yo=t=>{try{const e=[],i=[],r=[];for(const o of At(t)){const c=t.subarray(o.offset,o.offset+o.length),l=Gr(c[0]);l===et.SPS?e.push(c):l===et.PPS?i.push(c):l===et.SPS_EXT&&r.push(c)}if(e.length===0||i.length===0)return null;const n=e[0],a=xo(n);N(a!==null);const s=a.profileIdc===100||a.profileIdc===110||a.profileIdc===122||a.profileIdc===144;return{configurationVersion:1,avcProfileIndication:a.profileIdc,profileCompatibility:a.constraintFlags,avcLevelIndication:a.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?a.chromaFormatIdc:null,bitDepthLumaMinus8:s?a.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?a.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?r:null}}catch(e){return pe._error("Error building AVC Decoder Configuration Record:",e),null}},wo=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let n=0;n<r;n++)e.push(i[n])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let n=0;n<r;n++)e.push(i[n])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){N(t.chromaFormat!==null),N(t.bitDepthLumaMinus8!==null),N(t.bitDepthChromaMinus8!==null),N(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let n=0;n<r;n++)e.push(i[n])}}return new Uint8Array(e)},Xr={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},xo=t=>{try{const e=new _e(Jt(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const r=e.readAlignedByte(),n=e.readAlignedByte(),a=e.readAlignedByte();X(e);let s=1,o=0,c=0,l=0;if((r===100||r===110||r===122||r===244||r===44||r===83||r===86||r===118||r===128)&&(s=X(e),s===3&&(l=e.readBits(1)),o=X(e),c=X(e),e.skipBits(1),e.readBits(1))){for(let _=0;_<(s!==3?8:12);_++)if(e.readBits(1)){const p=_<6?16:64;let H=8,ee=8;for(let W=0;W<p;W++){if(ee!==0){const se=Ye(e);ee=(H+se+256)%256}H=ee===0?H:ee}}}X(e);const d=X(e);if(d===0)X(e);else if(d===1){e.skipBits(1),Ye(e),Ye(e);const Q=X(e);for(let _=0;_<Q;_++)Ye(e)}X(e),e.skipBits(1);const u=X(e),y=X(e),f=16*(u+1),g=16*(y+1);let m=f,v=g;const b=e.readBits(1);if(b||e.skipBits(1),e.skipBits(1),e.readBits(1)){const Q=X(e),_=X(e),F=X(e),p=X(e);let H,ee;if((l===0?s:0)===0)H=1,ee=2-b;else{const se=s===3?1:2,V=s===1?2:1;H=se,ee=V*(2-b)}m-=H*(Q+_),v-=ee*(F+p)}let S=2,T=2,E=2,O=0,P={num:1,den:1},L=null,I=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)P={num:e.readBits(16),den:e.readBits(16)};else{const ae=Xr[V];ae&&(P=ae)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),O=e.readBits(1),e.readBits(1)&&(S=e.readBits(8),T=e.readBits(8),E=e.readBits(8))),e.readBits(1)&&(X(e),X(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const ee=e.readBits(1);ee&&Kr(e);const W=e.readBits(1);W&&Kr(e),(ee||W)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),X(e),X(e),X(e),X(e),L=X(e),I=X(e))}if(L===null){N(I===null);const Q=n&16;if((r===44||r===86||r===100||r===110||r===122||r===244)&&Q)L=0,I=0;else{const _=u+1,F=y+1,p=(2-b)*F,H=Yt.find(W=>W.level>=a)??We(Yt),ee=Math.min(Math.floor(H.maxDpbMbs/(_*p)),16);L=ee,I=ee}}return N(I!==null),{profileIdc:r,constraintFlags:n,levelIdc:a,frameMbsOnlyFlag:b,chromaFormatIdc:s,bitDepthLumaMinus8:o,bitDepthChromaMinus8:c,codedWidth:f,codedHeight:g,displayWidth:m,displayHeight:v,pixelAspectRatio:P,colourPrimaries:S,matrixCoefficients:E,transferCharacteristics:T,fullRangeFlag:O,numReorderFrames:L,maxDecFrameBuffering:I}}catch(e){return pe._error("Error parsing AVC SPS:",e),null}},Kr=t=>{const e=X(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)X(t),X(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},_o=(t,e)=>{if(e.description){const n=(ze(e.description)[21]&3)+1;return Vr(t,n)}else return At(t)},Ai=t=>t>>1&63,ko=t=>{try{const e=new _e(Jt(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),r=e.readBits(1),{general_profile_space:n,general_tier_flag:a,general_profile_idc:s,general_profile_compatibility_flags:o,general_constraint_indicator_flags:c,general_level_idc:l}=To(e,i);X(e);const d=X(e);let u=0;d===3&&(u=e.readBits(1));const y=X(e),f=X(e);let g=y,m=f;if(e.readBits(1)){const _=X(e),F=X(e),p=X(e),H=X(e);let ee=1,W=1;const se=u===0?d:0;se===1?(ee=2,W=2):se===2&&(ee=2,W=1),g-=(_+F)*ee,m-=(p+H)*W}const v=X(e),b=X(e);X(e);const S=e.readBits(1)?0:i;let T=0;for(let _=S;_<=i;_++)X(e),T=X(e),X(e);X(e),X(e),X(e),X(e),X(e),X(e),e.readBits(1)&&e.readBits(1)&&Eo(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),X(e),X(e),e.skipBits(1));const E=X(e);if(Co(e,E),e.readBits(1)){const _=X(e);for(let F=0;F<_;F++)X(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let O=2,P=2,L=2,I=0,j=0,Q={num:1,den:1};if(e.readBits(1)){const _=Ao(e,i);Q=_.pixelAspectRatio,O=_.colourPrimaries,P=_.transferCharacteristics,L=_.matrixCoefficients,I=_.fullRangeFlag,j=_.minSpatialSegmentationIdc}return{displayWidth:g,displayHeight:m,pixelAspectRatio:Q,colourPrimaries:O,transferCharacteristics:P,matrixCoefficients:L,fullRangeFlag:I,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:r,generalProfileSpace:n,generalTierFlag:a,generalProfileIdc:s,generalProfileCompatibilityFlags:o,generalConstraintIndicatorFlags:c,generalLevelIdc:l,chromaFormatIdc:d,bitDepthLumaMinus8:v,bitDepthChromaMinus8:b,minSpatialSegmentationIdc:j}}catch(e){return pe._error("Error parsing HEVC SPS:",e),null}},So=t=>{try{const e=[],i=[],r=[],n=[];for(const l of At(t)){const d=t.subarray(l.offset,l.offset+l.length),u=Ai(d[0]);u===Pe.VPS_NUT?e.push(d):u===Pe.SPS_NUT?i.push(d):u===Pe.PPS_NUT?r.push(d):(u===Pe.PREFIX_SEI_NUT||u===Pe.SUFFIX_SEI_NUT)&&n.push(d)}if(i.length===0||r.length===0)return null;const a=ko(i[0]);if(!a)return null;let s=0;if(r.length>0){const l=r[0],d=new _e(Jt(l));d.skipBits(16),X(d),X(d),d.skipBits(1),d.skipBits(1),d.skipBits(3),d.skipBits(1),d.skipBits(1),X(d),X(d),Ye(d),d.skipBits(1),d.skipBits(1),d.readBits(1)&&X(d),Ye(d),Ye(d),d.skipBits(1),d.skipBits(1),d.skipBits(1),d.skipBits(1);const u=d.readBits(1),y=d.readBits(1);!u&&!y?s=0:u&&!y?s=2:!u&&y?s=3:s=0}const o=[...e.length?[{arrayCompleteness:1,nalUnitType:Pe.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Pe.SPS_NUT,nalUnits:i}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:Pe.PPS_NUT,nalUnits:r}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:Ai(n[0][0]),nalUnits:n}]:[]];return{configurationVersion:1,generalProfileSpace:a.generalProfileSpace,generalTierFlag:a.generalTierFlag,generalProfileIdc:a.generalProfileIdc,generalProfileCompatibilityFlags:a.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:a.generalConstraintIndicatorFlags,generalLevelIdc:a.generalLevelIdc,minSpatialSegmentationIdc:a.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:a.chromaFormatIdc,bitDepthLumaMinus8:a.bitDepthLumaMinus8,bitDepthChromaMinus8:a.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:a.spsMaxSubLayersMinus1+1,temporalIdNested:a.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:o}}catch(e){return pe._error("Error building HEVC Decoder Configuration Record:",e),null}},To=(t,e)=>{const i=t.readBits(2),r=t.readBits(1),n=t.readBits(5);let a=0;for(let d=0;d<32;d++)a=a<<1|t.readBits(1);const s=new Uint8Array(6);for(let d=0;d<6;d++)s[d]=t.readBits(8);const o=t.readBits(8),c=[],l=[];for(let d=0;d<e;d++)c.push(t.readBits(1)),l.push(t.readBits(1));if(e>0)for(let d=e;d<8;d++)t.skipBits(2);for(let d=0;d<e;d++)c[d]&&t.skipBits(88),l[d]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:r,general_profile_idc:n,general_profile_compatibility_flags:a,general_constraint_indicator_flags:s,general_level_idc:o}},Eo=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))X(t);else{const n=Math.min(64,1<<4+(e<<1));e>1&&Ye(t);for(let a=0;a<n;a++)Ye(t)}},Co=(t,e)=>{const i=[];for(let r=0;r<e;r++)i[r]=Bo(t,r,e,i)},Bo=(t,e,i,r)=>{let n=0,a=0,s=0;if(e!==0&&(a=t.readBits(1)),a){if(e===i){const c=X(t);s=e-(c+1)}else s=e-1;t.readBits(1),X(t);const o=r[s]??0;for(let c=0;c<=o;c++)t.readBits(1)||t.readBits(1);n=r[s]}else{const o=X(t),c=X(t);for(let l=0;l<o;l++)X(t),t.readBits(1);for(let l=0;l<c;l++)X(t),t.readBits(1);n=o+c}return n},Ao=(t,e)=>{let i=2,r=2,n=2,a=0,s=0,o={num:1,den:1};if(t.readBits(1)){const c=t.readBits(8);if(c===255)o={num:t.readBits(16),den:t.readBits(16)};else{const l=Xr[c];l&&(o=l)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),a=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),r=t.readBits(8),n=t.readBits(8))),t.readBits(1)&&(X(t),X(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(X(t),X(t),X(t),X(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&X(t),t.readBits(1)&&Po(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=X(t),X(t),X(t),X(t),X(t)),{pixelAspectRatio:o,colourPrimaries:i,transferCharacteristics:r,matrixCoefficients:n,fullRangeFlag:a,minSpatialSegmentationIdc:s}},Po=(t,e,i)=>{let r=!1,n=!1,a=!1;r=t.readBits(1)===1,n=t.readBits(1)===1,(r||n)&&(a=t.readBits(1)===1,a&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),a&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const o=t.readBits(1)===1;let c=!0;o||(c=t.readBits(1)===1);let l=!1;c?X(t):l=t.readBits(1)===1;let d=1;l||(d=X(t)+1),r&&Zr(t,d,a),n&&Zr(t,d,a)}},Zr=(t,e,i)=>{for(let r=0;r<e;r++)X(t),X(t),i&&(X(t),X(t)),t.readBits(1)},Io=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const r of i.nalUnits){e.push(r.length>>8&255),e.push(r.length&255);for(let n=0;n<r.length;n++)e.push(r[n])}}return new Uint8Array(e)};var Qr;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Qr||(Qr={}));const Ro=function*(t){const e=new _e(t),i=()=>{let r=0;for(let n=0;n<8;n++){const a=e.readAlignedByte();if(r|=(a&127)<<n*7,!(a&128))break;if(n===7&&a&128)return null}return r>=2**32-1?null:r};for(;e.getBitsLeft()>=8;){e.skipBits(1);const r=e.readBits(4),n=e.readBits(1),a=e.readBits(1);e.skipBits(1),n&&e.skipBits(8);let s;if(a){const o=i();if(o===null)return;s=o}else s=Math.floor(e.getBitsLeft()/8);N(e.pos%8===0),yield{type:r,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},Mo=t=>{const e=Gt(t),i=e.getUint8(9),r=e.getUint16(10,!0),n=e.getUint32(12,!0),a=e.getInt16(16,!0),s=e.getUint8(18);let o=null;return s&&(o=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:r,inputSampleRate:n,outputGain:a,channelMappingFamily:s,channelMappingTable:o}},Fo=(t,e,i)=>{switch(t){case"avc":{for(const r of vo(i,e)){const n=i[r.offset],a=Gr(n);if(a>=et.NON_IDR_SLICE&&a<=et.SLICE_DPC)return"delta";if(a===et.IDR)return"key";if(a===et.SEI&&(!Gs()||Xs()>=144)){const s=i.subarray(r.offset,r.offset+r.length),o=Jt(s);let c=1;do{let l=0;for(;;){const y=o[c++];if(y===void 0||(l+=y,y<255))break}let d=0;for(;;){const y=o[c++];if(y===void 0||(d+=y,y<255))break}if(l===6){const y=new _e(o);y.pos=8*c;const f=X(y),g=y.readBits(1);if(f===0&&g===1)return"key"}c+=d}while(c<o.length-1)}}return"delta"}case"hevc":{for(const r of _o(i,e)){const n=Ai(i[r.offset]);if(n<Pe.BLA_W_LP)return"delta";if(n<=Pe.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const r=new _e(i);if(r.readBits(2)!==2)return null;const n=r.readBits(1);return(r.readBits(1)<<1)+n===3&&r.skipBits(1),r.readBits(1)?null:r.readBits(1)===0?"key":"delta"}case"av1":{let r=!1;for(const{type:n,data:a}of Ro(i))if(n===1){const s=new _e(a);s.skipBits(4),r=!!s.readBits(1)}else if(n===3||n===6||n===7){if(r)return"key";const s=new _e(a);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:gt(t),N(!1)}};var Yr;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Yr||(Yr={}));const zo=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const r=e.readBits(6),n=e.readBits(5);if(n>8)return null;const a=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const o=e.readBits(1),c=Math.floor(r/2);return{fscod:i,bsid:n,bsmod:a,acmod:s,lfeon:o,bitRateCode:c}},Oo=[1,2,3,6],Ho=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const r=e.readBits(11),n=e.readBits(2);let a=0,s;n===3?(a=e.readBits(2),s=3):s=e.readBits(2);const o=e.readBits(3),c=e.readBits(1),l=e.readBits(5);if(l<11||l>16)return null;const d=Oo[s];let u;return n<3?u=po[n]/1e3:u=go[a]/1e3,{dataRate:Math.round((r+1)*u/(d*16)),substreams:[{fscod:n,fscod2:a,bsid:l,bsmod:0,acmod:o,lfeon:c,numDepSub:0,chanLoc:0}]}},Lo=1683496997,Uo=18,No=10,Jr=32,Wo=20,Do=8,qo=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],$o=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],jo=[16,16,20,20,0,24,24,0],en=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],Vo=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Go=8,Xo=[32e3,44100,48e3,0],Ko=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Zo=[512,1024,2048,4096],Qo=t=>{const e=Yo(t),i=Gt(t);let r=e?Math.ceil(e.frameSize/4)*4:0,n=null;for(;r+4<=t.length&&i.getUint32(r)===Lo;){const s=Jo(t.subarray(r));if(!s)break;n??=s,r+=s.frameSize}if(e)return{frameSize:n?r:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:n!==null};if(!n?.asset)return null;const{asset:a}=n;return{frameSize:r,sampleRate:a.sampleRate,numberOfChannels:a.numberOfChannels,sampleCount:a.sampleCount,channelLayout:a.channelLayout,pcmResolution:a.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Yo=t=>{if(t.length<Uo||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new _e(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Jr-1)return null;const i=e.readBits(1),r=e.readBits(7)+1;if(r%Do!==0)return null;const n=e.readBits(14)+1;if(n<96)return null;const a=e.readBits(6);if(a>=en.length)return null;const s=qo[e.readBits(4)];if(s===0)return null;const o=$o[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const c=e.readBits(2);if(c===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const l=jo[e.readBits(3)];if(l===0)return null;const d=c!==0;return{frameSize:n,sampleRate:s,numberOfChannels:en[a]+(d?1:0),sampleCount:r*Jr,channelLayout:Vo[a]|(d?Go:0),amode:a,lfePresent:d,bitRate:o,pcmResolution:l}},Jo=t=>{if(t.length<No||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new _e(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),r=e.readBits(1),n=8+4*r,a=16+4*r;e.skipBits(n);const s=e.readBits(a)+1,o={frameSize:s,asset:null};if(!e.readBits(1))return o;const c=Xo[e.readBits(2)],l=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const d=e.readBits(3)+1,u=e.readBits(3)+1,y=[];for(let b=0;b<d;b++)y.push(e.readBits(i+1));for(const b of y)e.skipBits(8*Ds(b));if(e.readBits(1)){e.skipBits(2);const b=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*b)}for(let b=0;b<u;b++)e.skipBits(a);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const f=e.readBits(5)+1,g=Ko[e.readBits(4)],m=e.readBits(8)+1;let v=0;if(e.readBits(1)&&(m>2&&e.skipBits(1),m>6&&e.skipBits(1),e.readBits(1))){const b=e.readBits(2)+1<<2;v=e.readBits(b)}return c===0||e.getBitsLeft()<0?o:{frameSize:s,asset:{sampleRate:g,numberOfChannels:m,sampleCount:Math.round(l*g/c),channelLayout:v,pcmResolution:f}}},ec=t=>{const e=new Uint8Array(Wo),i=Gt(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const r=t.core&&!t.hasExtensions?1:0,n=new _e(e);return n.seekToByte(13),n.writeBits(2,Math.max(Zo.indexOf(t.sampleCount),0)),n.writeBits(5,r),n.writeBits(1,t.core?.lfePresent?1:0),n.writeBits(6,t.core?.amode??0),n.writeBits(14,t.core?t.core.frameSize-1:0),n.writeBits(1,0),n.writeBits(3,0),n.writeBits(16,t.channelLayout),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const tn=new Uint8Array(0);class dt{constructor(e,i,r,n,a=-1,s,o){if(this.data=e,this.type=i,this.timestamp=r,this.duration=n,this.sequenceNumber=a,e===tn&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(r))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(n)||n<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(a))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(o!==void 0&&(typeof o!="object"||!o))throw new TypeError("sideData, when provided, must be an object.");if(o?.alpha!==void 0&&!(o.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(o?.alphaByteLength!==void 0&&(!Number.isInteger(o.alphaByteLength)||o.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=o??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===tn}get microsecondTimestamp(){return Math.trunc(vt*this.timestamp)}get microsecondDuration(){return Math.trunc(vt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const r=new Uint8Array(e.byteLength);return e.copyTo(r),new dt(r,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new dt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const tc=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const r=[...new Set(t.codecStrings)];i+=`; codecs="${r.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Pi=8,rn=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ic=7,rc=9,nn=t=>{const e=t.filePos,i=bc(t,9),r=new _e(i);if(r.readBits(12)!==4095||(r.skipBits(1),r.readBits(2)!==0))return null;const s=r.readBits(1),o=r.readBits(2)+1,c=r.readBits(4);if(c===15)return null;r.skipBits(1);const l=r.readBits(3);if(l===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);const d=r.readBits(13);r.skipBits(11);const u=r.readBits(2)+1;if(u!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let y=null;return s===1?t.filePos-=2:y=r.readBits(16),{objectType:o,samplingFrequencyIndex:c,channelConfiguration:l,frameLength:d,numberOfAacFrames:u,crcCheck:y,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var nc=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(n=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");n&&(r=function(){try{n.call(this)}catch(a){return Promise.reject(a)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},ac=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,n=0;function a(){for(;r=e.stack.pop();)try{if(!r.async&&n===1)return n=0,e.stack.push(r),Promise.resolve().then(a);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(s).then(a,function(o){return i(o),a()})}else n|=1}catch(o){i(o)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return a()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});Ks();let an=-1/0,sn=-1/0,Ii=null;typeof FinalizationRegistry<"u"&&(Ii=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-an>=1e3&&(pe._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),an=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-sn>=1e3&&(pe._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),sn=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class ut{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Ri=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],sc=new Set(Ri);class Ce{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(vt*this.timestamp)}get microsecondDuration(){return Math.trunc(vt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!sc.has(i.format))throw new TypeError("init.format must be one of: "+Ri.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const a of i.layout){if(!a||typeof a!="object"||Array.isArray(a))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(a.offset)||a.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(a.stride)||a.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Si(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const r=i.layout??lc(i.format,i.codedWidth,i.codedHeight);let n=i.colorSpace??null;n===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?n={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:n={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?ze(e):ze(e).slice(),this._layout=r,this.colorSpace=new Mi(n)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Si(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new Mi(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Si(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Ce(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*vt),duration:Math.trunc((i.duration??0)*vt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let r=0,n=0;if("naturalWidth"in e?(r=e.naturalWidth,n=e.naturalHeight):"videoWidth"in e?(r=e.videoWidth,n=e.videoHeight):"width"in e&&(r=Number(e.width),n=Number(e.height)),!r||!n)throw new TypeError("Could not determine dimensions.");const a=i.visibleRect??{left:0,top:0,width:r,height:n},s=new OffscreenCanvas(a.width,a.height),o=s.getContext("2d",{alpha:Mr(),willReadFrequently:!0});if(!o)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");o.drawImage(e,-a.left,-a.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:a.width,height:a.height},this.squarePixelWidth=a.width,this.squarePixelHeight=a.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new Mi({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof ut){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Ri.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=zr({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Ii?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return N(this._data!==null),this._data instanceof ut?new Ce(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):It(this._data)?new Ce(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(N(this._layout),new Ce(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Ce(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Ii?.unregister(this),this._data instanceof ut?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):It(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(fn(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return It(this._data)?this._data.allocationSize(e):dn(this,e).allocationSize}async copyTo(e,i={}){if(!wi(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(fn(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(N(this._data!==null),It(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof ut){const l={stack:[],error:void 0,hasError:!1};try{const d=nc(l,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(d instanceof Ce))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(d.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${d.format}' instead.`);return await d.copyTo(e,i)}catch(d){l.error=d,l.hasError=!0}finally{ac(l)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const l=this.toVideoFrame(),d=await l.copyTo(e,i);return l.close(),d}const r=dn(this,i);N(this.format);const n=ze(e);if(n.byteLength<r.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${r.allocationSize}, Available: ${n.byteLength}`);const a=ei(this.format);let s;if(this._data instanceof ut){let l=this._data.getDataPlanes();if(l instanceof Promise&&(l=await l),!Array.isArray(l)||l.some(d=>!(d.data instanceof Uint8Array)||!Number.isInteger(d.stride)||d.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=l}else if(this._data instanceof Uint8Array)N(this._layout),N(this._layout.length===a.length),s=this._layout.map((l,d)=>{const u=Math.ceil(this.codedHeight/a[d].heightDivisor);return{data:this._data.subarray(l.offset,l.offset+l.stride*u),stride:l.stride}});else{const d=this._data.getContext("2d");N(d);const u=d.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:ze(u.data),stride:4*this.codedWidth}]}const o=[],c=a.length;for(let l=0;l<c;l++){const d=r.computedLayouts[l],u=s[l].stride,y=s[l].data;let f=d.sourceTop*u;f+=d.sourceLeftBytes;let g=d.destinationOffset;const m=d.sourceWidthBytes,v={offset:g,stride:d.destinationStride};for(let b=0;b<d.sourceHeight;b++){if(f+m>y.byteLength)throw new Error("Source buffer OOB read.");if(g+m>n.byteLength)throw new Error("Destination buffer OOB write.");const w=y.subarray(f,f+m);n.set(w,g),f+=u,g+=d.destinationStride}o.push(v)}if(i.format!==void 0){const l=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),d=this.format.includes("X")&&i.format.includes("A");if(l||d)for(let u=0;u<r.allocationSize;u+=4){if(l){const y=n[u],f=n[u+2];n[u]=f,n[u+2]=y}d&&(n[u+3]=255)}}return o}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof ut){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,o)=>s+o.data.byteLength,0),r=new Uint8Array(i);let n=0;const a=[];for(const s of e)r.set(s.data,n),a.push(n),n+=s.data.byteLength;return new VideoFrame(r,{format:this.format,layout:e.map((s,o)=>({offset:a[o],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return It(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(N(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,r,n,a,s,o,c,l){let d=0,u=0,y=this.displayWidth,f=this.displayHeight,g=0,m=0,v=this.displayWidth,b=this.displayHeight;if(s!==void 0?(d=i,u=r,y=n,f=a,g=s,m=o,c!==void 0?(v=c,b=l):(v=y,b=f)):(g=i,m=r,n!==void 0&&(v=n,b=a)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(d))throw new TypeError("sx must be a number.");if(!Number.isFinite(u))throw new TypeError("sy must be a number.");if(!Number.isFinite(y)||y<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(g))throw new TypeError("dx must be a number.");if(!Number.isFinite(m))throw new TypeError("dy must be a number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(b)||b<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:d,sy:u,sWidth:y,sHeight:f}=this._rotateSourceRegion(d,u,y,f,this.rotation));const w=this.toCanvasImageSource();e.save();const S=g+v/2,T=m+b/2;e.translate(S,T),e.rotate(this.rotation*Math.PI/180);const E=this.rotation%180===0?1:v/b;e.scale(1/E,E),e.drawImage(w,d,u,y,f,-v/2,-b/2,v,b),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Fi(i.crop,"options.");const r=e.canvas.width,n=e.canvas.height,a=i.rotation??this.rotation,[s,o]=a%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let c=i.crop;c&&(c=ln(c,s,o));let l,d,u,y;const{sx:f,sy:g,sWidth:m,sHeight:v}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??o,a);if(i.fit==="fill")l=0,d=0,u=r,y=n;else{const[w,S]=i.crop?[i.crop.width,i.crop.height]:[s,o],T=i.fit==="contain"?Math.min(r/w,n/S):Math.max(r/w,n/S);u=w*T,y=S*T,l=(r-u)/2,d=(n-y)/2}e.save();const b=a%180===0?1:u/y;e.translate(r/2,n/2),e.rotate(a*Math.PI/180),e.scale(1/b,b),e.translate(-r/2,-n/2),e.drawImage(this.toCanvasImageSource(),f,g,m,v,l,d,u,y),e.restore()}_rotateSourceRegion(e,i,r,n,a){return a===90?[e,i,r,n]=[i,this.squarePixelHeight-e-r,n,r]:a===180?[e,i]=[this.squarePixelWidth-e-r,this.squarePixelHeight-i-n]:a===270&&([e,i,r,n]=[this.squarePixelWidth-i-n,e,n,r]),{sx:e,sy:i,sWidth:r,sHeight:n}}_drawWithFitAndMipmapping(e,i,r){const n=e.width,a=e.height,[s,o]=r.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=r.crop?r.crop.width:s,l=r.crop?r.crop.height:o;let d=0;2*n<c&&2*a<l&&(d=Math.floor(Math.log2(Math.min(c/n,l/a))));const u=n*2**d,y=a*2**d,{canvas:f,context:g,isNew:m}=d>0?cn(u,y):{canvas:e,context:i,isNew:r.targetIsFresh};g.imageSmoothingQuality="high",r.fillBlack?(g.fillStyle="black",g.fillRect(0,0,u,y)):m||g.clearRect(0,0,u,y),this.drawWithFit(g,{fit:r.fit,rotation:r.rotation,crop:r.crop}),g.globalCompositeOperation="copy";for(let v=d;v>1;v--){const b=n*2**v,w=a*2**v;g.drawImage(f,0,0,b,w,0,0,b/2,w/2)}g.globalCompositeOperation="source-over",d>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(f,0,0,2*n,2*a,0,0,n,a),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof ut||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Fi(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=Os(this.rotation+(e.rotate??0)),[r,n]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let a=e.crop;a&&(a=ln(a,r,n));const s=a?a.width:r,o=a?a.height:n,c=s/o;let l,d;e.width!==void 0&&e.height===void 0?(l=e.width,d=l/c):e.width===void 0&&e.height!==void 0?(d=e.height,l=d*c):e.width!==void 0&&e.height!==void 0?(l=e.width,d=e.height):(l=s,d=o),l=Ir(l,e.roundDimensionsTo??1),d=Ir(d,e.roundDimensionsTo??1);const u={width:l,height:d,fit:e.fit??"fill",rotation:i,crop:a??{left:0,top:0,width:r,height:n},alpha:e.alpha??"keep"};for(const m of oc){let v=m(this,u);if(v instanceof Promise&&(v=await v),v!==null)return v}const{canvas:y,context:f,isNew:g}=cn(u.width,u.height);return this._drawWithFitAndMipmapping(y,f,{fit:u.fit,rotation:u.rotation,crop:u.crop,targetIsFresh:g,fillBlack:u.alpha==="discard"}),new Ce(y,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const oc=[],cc=3,Pt=[];let on=0;const cn=(t,e)=>{for(const n of Pt)if(n.canvas.width===t&&n.canvas.height===e)return n.age=on++,{canvas:n.canvas,context:n.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const r=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!r)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Pt.length>=cc&&Pt.splice(Zs(Pt,n=>n.age),1),Pt.push({canvas:i,context:r,age:on++}),{canvas:i,context:r,isNew:!0}};class Mi{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Xt);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const r=Object.keys(Kt);if(e.transfer!=null&&!r.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${r.join(", ")}.`);const n=Object.keys(Zt);if(e.matrix!=null&&!n.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${n.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const It=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,ln=(t,e,i)=>{const r=Math.min(t.left,e),n=Math.min(t.top,i),a=Math.min(t.width,e-r),s=Math.min(t.height,i-n);return N(a>=0),N(s>=0),{left:r,top:n,width:a,height:s}},Fi=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},fn=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},lc=(t,e,i)=>{const r=ei(t),n=[];let a=0;for(const s of r){const o=Math.ceil(e/s.widthDivisor),c=Math.ceil(i/s.heightDivisor),l=o*s.sampleBytes,d=l*c;n.push({offset:a,stride:l}),a+=d}return n},ei=t=>{const e=(i,r,n,a,s)=>{const o=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:r,widthDivisor:n,heightDivisor:a},{sampleBytes:r,widthDivisor:n,heightDivisor:a}];return s&&o.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),o};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:gt(t),N(!1)}},dn=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},r=e.rect,n=fc(i,r,t.codedWidth,t.codedHeight,t.format),a=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return uc(n,s,a)},fc=(t,e,i,r,n)=>{const a={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>r)throw new TypeError("visibleRect exceeds codedHeight.");a.x=e.x||0,a.y=e.y||0,a.width=e.width||0,a.height=e.height||0}if(!dc(n,a))throw new TypeError("visibleRect alignment is invalid for the format.");return a},dc=(t,e)=>{if(t===null)return!0;const i=ei(t);for(let r=0;r<i.length;r++){const n=i[r],a=n.widthDivisor,s=n.heightDivisor;if((e.x||0)%a!==0||(e.y||0)%s!==0)return!1}return!0},uc=(t,e,i)=>{const r=ei(e),n=r.length;if(i!==void 0&&i.length!==n)throw new TypeError(`Layout must have ${n} planes.`);let a=0;const s=[],o=[];for(let c=0;c<n;c++){const l=r[c],d=l.sampleBytes,u=l.widthDivisor,y=l.heightDivisor,f={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(f.sourceTop=Math.ceil(Math.trunc(t.y||0)/y),f.sourceHeight=Math.ceil(Math.trunc(t.height||0)/y),f.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/u)*d,f.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/u)*d,i!==void 0){const v=i[c];if(v.stride<f.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);f.destinationOffset=v.offset,f.destinationStride=v.stride}else f.destinationOffset=a,f.destinationStride=f.sourceWidthBytes;const m=f.destinationStride*f.sourceHeight+f.destinationOffset;if(m>4294967295)throw new TypeError("Allocation size exceeds limit.");o.push(m),a=Math.max(a,m);for(let v=0;v<c;v++){const b=s[v];if(!(o[c]<=b.destinationOffset||o[v]<=f.destinationOffset))throw new TypeError("Planes overlap.")}s.push(f)}return{allocationSize:a,computedLayouts:s}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const un=new Map,hc=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Je.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${Je.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ot))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ot)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Fi(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");hn(t.codec,t)},hn=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Bi(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},mn=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),r=(a,s,o)=>({codec:t.fullCodecString??no(t.codec,t.width,t.height,o,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:a,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...so(t.codec)}),n=[];return i.quantizer!==null&&n.push({config:r(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&n.push({config:r(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),N(n.length>0),n};class ot{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in pn):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?pn[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,r,n){const a=mc[e];let s=null,o=this._bitrateMode??n??"variable";if(this._quantizer!==void 0){if(a)if(this._quantizer<a.min||this._quantizer>a.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${a.min} and ${a.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(o="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&a&&!this._preferBitrate&&(N(this._quality!==void 0),s=Pr(Math.round(Ns(a.worst,a.best,this._quality)),a.min,a.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let l=this._quality;l===void 0&&(N(s!==null&&a),l=Pr((s-a.worst)/(a.best-a.worst),0,1)),c=gn(e,i,r,zi(l))}return{quantizer:s,bitrate:c,bitrateMode:o}}_toVideoBitrate(e,i,r){return this._bitrate!==void 0?this._bitrate:(N(this._quality!==void 0),gn(e,i,r,zi(this._quality)))}_toAudioBitrate(e){if(ft.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=zi(this._quality),n={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!n)throw new Error(`Unhandled codec: ${e}`);let a=n*i;return e==="aac"?a=[96e3,128e3,16e4,192e3].reduce((o,c)=>Math.abs(c-a)<Math.abs(o-a)?c:o):e==="opus"||e==="vorbis"?a=Math.max(6e3,a):e==="mp3"&&(a=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((o,c)=>Math.abs(c-a)<Math.abs(o-a)?c:o)),Math.round(a/1e3)*1e3}}const pn={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},mc={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},zi=t=>.3*Math.exp(2.5538*t),gn=(t,e,i,r)=>{const n=e*i,a=1920*1080,s=3e6,o=Math.pow(n/a,.95),c=s*o,l={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},u=c*l[t]*r;return Math.ceil(u/1e3)*1e3},vn=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};N(!1)},pc=async(t,e={})=>{const{width:i=1280,height:r=720,quality:n,bitrate:a,...s}=e;if(!Je.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(r)||r<=0)throw new TypeError("height must be a positive integer.");if(n!==void 0&&!(n instanceof ot))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&a!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(a!==void 0&&!(a instanceof ot)&&(!Number.isInteger(a)||a<=0))throw new TypeError("bitrate must be a positive integer or a quality.");hn(t,s);const o=bn(n,a)??new ot("medium");let c;try{c=mn({codec:t,width:i,height:r,quality:o,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const l=JSON.stringify(c),d=un.get(l);if(d)return d;const u=(async()=>{for(const{config:f}of c)if(yn.some(g=>g.supports(t,f)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||r%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:f,quantizer:g}of c){try{if(!(await VideoEncoder.isConfigSupported(f)).supported)continue}catch{continue}if(!Mr()||await new Promise(async v=>{try{const b=new VideoEncoder({output:()=>{},error:()=>v(!1)});b.configure(f);const w=new Uint8Array(i*r*4),S=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:r,timestamp:0});b.encode(S,g!==null?vn(t,g):void 0),S.close(),await b.flush(),v(!0)}catch{v(!1)}}))return!0}return!1})();return un.set(l,u),u},bn=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ot?e:new ot({bitrate:e})},gc=async(t,e)=>{for(const i of t)if(await pc(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const yn=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Rt{constructor(e,i,r,n,a){this.bytes=e,this.view=i,this.offset=r,this.start=n,this.end=a,this.bufferPos=n-r}static tempFromBytes(e){return new Rt(e,Gt(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Rt(this.bytes,this.view,this.offset,e,e+i)}}const vc=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},bc=(t,e)=>{vc(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class yc{constructor(e){this.mutex=new Cr,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,r){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let n=this.trackTimestampInfo.get(e);if(n){if(r&&(n.maxTimestampBeforeLastKeyPacket=n.maxTimestamp),n.maxTimestampBeforeLastKeyPacket!==null&&i<n.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${n.maxTimestampBeforeLastKeyPacket}s.`);n.maxTimestamp=Math.max(n.maxTimestamp,i)}else{if(!r)throw new Error("First packet must be a key packet.");n={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,n)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const wn=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,wc=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),r=Math.floor(t%(60*1e3)/1e3),n=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+n.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ti{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const a of e.children)a&&this.writeBox(a);const r=this.writer.getPos(),n=e.size??r-i;this.writer.seek(i),this.writeBoxHeader(e,n),this.writer.seek(r)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);N(i!==void 0);const r=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(r)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const r of e.children)r&&(i+=this.measureBox(r));return i}}}const oe=new Uint8Array(8),Ie=new DataView(oe.buffer),ge=t=>[(t%256+256)%256],ie=t=>(Ie.setUint16(0,t,!1),[oe[0],oe[1]]),Oi=t=>(Ie.setInt16(0,t,!1),[oe[0],oe[1]]),xn=t=>(Ie.setUint32(0,t,!1),[oe[1],oe[2],oe[3]]),$=t=>(Ie.setUint32(0,t,!1),[oe[0],oe[1],oe[2],oe[3]]),tt=t=>(Ie.setInt32(0,t,!1),[oe[0],oe[1],oe[2],oe[3]]),$e=t=>(Ie.setUint32(0,Math.floor(t/2**32),!1),Ie.setUint32(4,t,!1),[oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7]]),xc=t=>(Ie.setInt32(0,Math.floor(t/2**32),!1),Ie.setUint32(4,t,!1),[oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7]]),_n=t=>(Ie.setInt16(0,2**8*t,!1),[oe[0],oe[1]]),Oe=t=>(Ie.setInt32(0,2**16*t,!1),[oe[0],oe[1],oe[2],oe[3]]),Hi=t=>(Ie.setInt32(0,2**30*t,!1),[oe[0],oe[1],oe[2],oe[3]]),Li=(t,e)=>{const i=[];let r=t;do{let n=r&127;r>>=7,i.length>0&&(n|=128),i.push(n)}while(r>0||e);return i.reverse()},ue=(t,e=!1)=>{const i=Array(t.length).fill(null).map((r,n)=>t.charCodeAt(n));return e&&i.push(0),i},kn=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),r=Math.round(Math.sin(e));return[i,r,0,-r,i,0,0,0,1]},Sn=kn(0),Tn=t=>[Oe(t[0]),Oe(t[1]),Hi(t[2]),Oe(t[3]),Oe(t[4]),Hi(t[5]),Oe(t[6]),Oe(t[7]),Hi(t[8])],te=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),ce=(t,e,i,r,n)=>te(t,[ge(e),xn(i),r??[]],n),_c=t=>t.isQuickTime?te("ftyp",[ue("qt  "),$(512),ue("qt  ")]):t.fragmented?t.cmaf?te("ftyp",[ue("iso5"),$(512),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]):te("ftyp",[ue("iso5"),$(512),ue("iso5"),ue("iso6"),ue("mp41")]):te("ftyp",[ue("isom"),$(512),ue("isom"),t.holdsAvc?ue("avc1"):[],ue("mp41")]),En=()=>te("styp",[ue("iso5"),$(0),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]),Cn=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),ce("sidx",1,0,[$(1),$(Le),$e(me(t.minWrittenTimestamp,Le)),$e(0),ie(0),ie(1),$(e&2147483647),$(me(i,Le)),$(0)])},ii=t=>({type:"mdat",largeSize:t}),kc=t=>({type:"free",size:t}),Mt=t=>te("moov",void 0,[Sc(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>Tc(e,t.creationTime)),t.isFragmented?cl(t.trackDatas):null,xl(t)]),Sc=(t,e)=>{const i=Math.max(0,...e.map(s=>me(ri(s),Le)+me(s.startTimestampOffset??0,Le))),r=Math.max(0,...e.map(s=>s.track.id))+1,n=!st(t)||!st(i),a=n?$e:$;return ce("mvhd",+n,0,[a(t),a(t),$(Le),a(i),Oe(1),_n(1),Array(10).fill(0),Tn(Sn),Array(24).fill(0),$(r)])},ri=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let r=0;r<t.samples.length;r++){const n=t.samples[r];n.timestamp<e&&(e=n.timestamp),n.timestamp+n.duration>i&&(i=n.timestamp+n.duration)}return e===1/0?0:i-e},Tc=(t,e)=>{const i=Rl(t),r=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return te("trak",void 0,[Ec(t,e),r?Cc(t,t.startTimestampOffset):null,Bc(t,e),i.name!==void 0?te("udta",void 0,[te("name",[...De.encode(i.name)])]):null])},Ec=(t,e)=>{const i=me(ri(t),Le)+me(t.startTimestampOffset??0,Le),r=!st(e)||!st(i),n=r?$e:$;let a;if(t.type==="video"){const c=t.track.metadata.rotation;a=kn(c??0)}else a=Sn;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const o=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:gt(t);return ce("tkhd",+r,s,[n(e),n(e),$(t.track.id),$(0),n(i),Array(8).fill(0),ie(0),ie(o),_n(t.type==="audio"?1:0),ie(0),Tn(a),Oe(t.type==="video"?t.info.width:0),Oe(t.type==="video"?t.info.height:0)])},Cc=(t,e)=>{const i=me(e,Le),r=me(ri(t),Le),n=!st(i)||!st(r),a=n?$e:$,s=n?xc:tt;return te("edts",void 0,[ce("elst",n?1:0,0,[$(2),a(i),s(-1),Oe(1),a(r),s(0),Oe(1)])])},Bc=(t,e)=>te("mdia",void 0,[Ac(t,e),Ui(!0,Pc[t.type],Ic[t.type]),Rc(t)]),Ac=(t,e)=>{const i=me(ri(t),t.timescale),r=!st(e)||!st(i),n=r?$e:$;return ce("mdhd",+r,0,[n(e),n(e),$(t.timescale),n(i),ie(Fn(t.track.metadata.languageCode??Ws)),ie(0)])},Pc={video:"vide",audio:"soun",subtitle:"text"},Ic={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Ui=(t,e,i,r="\0\0\0\0")=>ce("hdlr",0,0,[t?ue("mhlr"):$(0),ue(e),ue(r),$(0),$(0),ue(i,!0)]),Rc=t=>te("minf",void 0,[Mc[t.type](),Fc(),Hc(t)]),Mc={video:()=>ce("vmhd",0,1,[ie(0),ie(0),ie(0),ie(0)]),audio:()=>ce("smhd",0,0,[ie(0),ie(0)]),subtitle:()=>ce("nmhd",0,0)},Fc=()=>te("dinf",void 0,[zc()]),zc=()=>ce("dref",0,0,[$(1)],[Oc()]),Oc=()=>ce("url ",0,1),Hc=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return te("stbl",void 0,[Lc(t),tl(t),e?sl(t):null,e?ol(t):null,rl(t),nl(t),al(t),il(t)])},Lc=t=>{let e;if(t.type==="video")e=Uc(Tl(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=Mn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);N(i),e=jc(i,t)}else t.type==="subtitle"&&(e=Jc(Bl[t.track.source._codec],t));return N(e),ce("stsd",0,0,[$(1)],[e])},Uc=(t,e)=>te(t,[Array(6).fill(0),ie(1),ie(0),ie(0),Array(12).fill(0),ie(e.info.width),ie(e.info.height),$(4718592),$(4718592),$(0),ie(1),ge(10),ue("Mediabunny"),Array(21).fill(0),ie(e.info.hasAlphaChannel?32:24),Oi(65535)],[El[e.track.source._codec]?.(e)??null,Nc(e),Hs(e.info.decoderConfig.colorSpace)?Wc(e):null]),Nc=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:te("pasp",[$(t.info.pixelAspectRatio.num),$(t.info.pixelAspectRatio.den)]),Wc=t=>te("colr",[ue(t.muxer.isQuickTime?"nclc":"nclx"),ie(Xt[t.info.decoderConfig.colorSpace.primaries]),ie(Kt[t.info.decoderConfig.colorSpace.transfer]),ie(Zt[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:ge((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Dc=t=>t.info.decoderConfig&&te("avcC",[...ze(t.info.decoderConfig.description)]),qc=t=>t.info.decoderConfig&&te("hvcC",[...ze(t.info.decoderConfig.description)]),Bn=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),r=Number(i[1]),n=Number(i[2]),a=Number(i[3]),s=i[4]?Number(i[4]):1,o=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),c=(a<<4)+(s<<1)+o,l=i[5]?Number(i[5]):e.colorSpace?.primaries?Xt[e.colorSpace.primaries]:2,d=i[6]?Number(i[6]):e.colorSpace?.transfer?Kt[e.colorSpace.transfer]:2,u=i[7]?Number(i[7]):e.colorSpace?.matrix?Zt[e.colorSpace.matrix]:2;return ce("vpcC",1,0,[ge(r),ge(n),ge(c),ge(l),ge(d),ge(u),ie(0)])},$c=t=>te("av1C",ao(t.info.decoderConfig.codec)),jc=(t,e)=>{let i=0,r,n=16;const a=ft.includes(e.track.source._codec);if(a){const s=e.track.source._codec,{sampleSize:o}=bt(s);n=8*o,n>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)r=[Array(6).fill(0),ie(1),ie(i),ie(0),$(0),ie(e.info.numberOfChannels),ie(n),ie(0),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0)];else{const s=a?0:-2;r=[Array(6).fill(0),ie(1),ie(i),ie(0),$(0),ie(e.info.numberOfChannels),ie(Math.min(n,16)),Oi(s),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0),a?[$(1),$(n/8),$(e.info.numberOfChannels*n/8)]:[$(0),$(0),$(0)],$(2)]}return te(t,r,[Cl(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Ni=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...ge(e),...ge(21),...xn(0),...$(0),...$(0)];if(t.info.decoderConfig.description){const r=ze(t.info.decoderConfig.description);i=[...i,...ge(5),...Li(r.byteLength),...r]}return i=[...ie(1),...ge(0),...ge(4),...Li(i.length),...i,...ge(6),...ge(1),...ge(2)],i=[...ge(3),...Li(i.length),...i],ce("esds",0,0,i)},ct=t=>te("wave",void 0,[Vc(t),Gc(t),te("\0\0\0\0")]),Vc=t=>te("frma",[ue(Mn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Gc=t=>{const{littleEndian:e}=bt(t.track.source._codec);return te("enda",[ie(+e)])},Xc=t=>{let e=t.info.numberOfChannels,i=3840,r=t.info.sampleRate,n=0,a=0,s=new Uint8Array(0);const o=t.info.decoderConfig?.description;if(o){N(o.byteLength>=18);const c=ze(o),l=Mo(c);e=l.outputChannelCount,i=l.preSkip,r=l.inputSampleRate,n=l.outputGain,a=l.channelMappingFamily,l.channelMappingTable&&(s=l.channelMappingTable)}return te("dOps",[ge(0),ge(e),ie(i),$(r),Oi(n),ge(a),...s])},Kc=t=>{const e=t.info.decoderConfig?.description;N(e);const i=ze(e);return ce("dfLa",0,0,[...i.subarray(4)])},je=t=>{const{littleEndian:e,sampleSize:i}=bt(t.track.source._codec),r=+e;return ce("pcmC",0,0,[ge(r),ge(8*i)])},Zc=t=>{N(t.info.primingPacket);const e=zo(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),r=new _e(i);return r.writeBits(2,e.fscod),r.writeBits(5,e.bsid),r.writeBits(3,e.bsmod),r.writeBits(3,e.acmod),r.writeBits(1,e.lfeon),r.writeBits(5,e.bitRateCode),r.writeBits(5,0),te("dac3",[...i])},Qc=t=>{N(t.info.primingPacket);const e=Ho(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const r=Math.ceil(i/8),n=new Uint8Array(r),a=new _e(n);a.writeBits(13,e.dataRate),a.writeBits(3,e.substreams.length-1);for(const s of e.substreams)a.writeBits(2,s.fscod),a.writeBits(5,s.bsid),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(3,s.bsmod),a.writeBits(3,s.acmod),a.writeBits(1,s.lfeon),a.writeBits(3,0),a.writeBits(4,s.numDepSub),s.numDepSub>0?a.writeBits(9,s.chanLoc):a.writeBits(1,0);return te("dec3",[...n])},Yc=t=>{N(t.info.primingPacket);const e=Qo(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return te("ddts",[...ec(e)])},Jc=(t,e)=>te(t,[Array(6).fill(0),ie(1)],[Al[e.track.source._codec](e)]),el=t=>te("vttC",[...De.encode(t.info.config.description)]),tl=t=>ce("stts",0,0,[$(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[$(e.sampleCount),$(e.sampleDelta)])]),il=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return ce("stss",0,0,[$(e.length),e.map(([i])=>$(i+1))])},rl=t=>ce("stsc",0,0,[$(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[$(e.firstChunk),$(e.samplesPerChunk),$(1)])]),nl=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=bt(t.track.source._codec);return ce("stsz",0,0,[$(e*t.info.numberOfChannels),$(t.samples.reduce((i,r)=>i+me(r.duration,t.timescale),0))])}return ce("stsz",0,0,[$(0),$(t.samples.length),t.samples.map(e=>$(e.size))])},al=t=>t.finalizedChunks.length>0&&We(t.finalizedChunks).offset>=2**32?ce("co64",0,0,[$(t.finalizedChunks.length),t.finalizedChunks.map(e=>$e(e.offset))]):ce("stco",0,0,[$(t.finalizedChunks.length),t.finalizedChunks.map(e=>$(e.offset))]),sl=t=>ce("ctts",1,0,[$(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[$(e.sampleCount),tt(e.sampleCompositionTimeOffset)])]),ol=t=>{let e=1/0,i=-1/0,r=1/0,n=-1/0;N(t.compositionTimeOffsetTable.length>0),N(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const o=t.compositionTimeOffsetTable[s];e=Math.min(e,o.sampleCompositionTimeOffset),i=Math.max(i,o.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const o=t.samples[s];r=Math.min(r,me(o.timestamp,t.timescale)),n=Math.max(n,me(o.timestamp+o.duration,t.timescale))}const a=Math.max(-e,0);return n>=2**31?null:ce("cslg",0,0,[tt(a),tt(e),tt(i),tt(r),tt(n)])},cl=t=>te("mvex",void 0,t.map(ll)),ll=t=>ce("trex",0,0,[$(t.track.id),$(1),$(0),$(0),$(0)]),An=(t,e)=>te("moof",void 0,[fl(t),...e.map(dl)]),fl=t=>ce("mfhd",0,0,[$(t)]),Pn=t=>{let e=0,i=0;const r=0,n=0,a=t.type==="delta";return i|=+a,a?e|=1:e|=2,e<<24|i<<16|r<<8|n},dl=t=>te("traf",void 0,[ul(t),hl(t),ml(t)]),ul=t=>{N(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],r={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Pn(i)};return ce("tfhd",0,e,[$(t.track.id),$(r.duration),$(r.size),$(r.flags)])},hl=t=>(N(t.currentChunk),ce("tfdt",1,0,[$e(me(t.currentChunk.startTimestamp,t.timescale))])),ml=t=>{N(t.currentChunk);const e=t.currentChunk.samples.map(m=>m.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(m=>m.size),r=t.currentChunk.samples.map(Pn),n=t.currentChunk.samples.map(m=>me(m.timestamp-m.decodeTimestamp,t.timescale)),a=new Set(e),s=new Set(i),o=new Set(r),c=new Set(n),l=o.size===2&&r[0]!==r[1],d=a.size>1,u=s.size>1,y=!l&&o.size>1,f=c.size>1||[...c].some(m=>m!==0);let g=0;return g|=1,g|=4*+l,g|=256*+d,g|=512*+u,g|=1024*+y,g|=2048*+f,ce("trun",1,g,[$(t.currentChunk.samples.length),$(t.currentChunk.offset-t.currentChunk.moofOffset||0),l?$(r[0]):[],t.currentChunk.samples.map((m,v)=>[d?$(e[v]):[],u?$(i[v]):[],y?$(r[v]):[],f?tt(n[v]):[]])])},pl=t=>te("mfra",void 0,[...t.map(gl),vl()]),gl=t=>ce("tfra",1,0,[$(t.track.id),$(63),$(t.finalizedChunks.length),t.finalizedChunks.map(i=>[$e(me(i.samples[0].timestamp,t.timescale)),$e(i.moofOffset),$(i.trafIndex+1),$(1),$(1)])]),vl=()=>ce("mfro",0,0,[$(0)]),bl=()=>te("vtte"),yl=(t,e,i,r,n)=>te("vttc",void 0,[n!==null?te("vsid",[tt(n)]):null,i!==null?te("iden",[...De.encode(i)]):null,e!==null?te("ctim",[...De.encode(wc(e))]):null,r!==null?te("sttg",[...De.encode(r)]):null,te("payl",[...De.encode(t)])]),wl=t=>te("vtta",[...De.encode(t)]),xl=t=>{const e=[],i=t.format._options.metadataFormat??"auto",r=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const n=kl(r);n&&e.push(n)}else if(i==="mdta"){const n=Sl(r);n&&e.push(n)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&_l(e,t.output._metadataTags);return e.length===0?null:te("udta",void 0,e)},_l=(t,e)=>{for(const{key:i,value:r}of Fr(e))switch(i){case"title":t.push(Ve("©nam",r));break;case"description":t.push(Ve("©des",r));break;case"artist":t.push(Ve("©ART",r));break;case"album":t.push(Ve("©alb",r));break;case"albumArtist":t.push(Ve("albr",r));break;case"genre":t.push(Ve("©gen",r));break;case"date":t.push(Ve("©day",r.toISOString().slice(0,10)));break;case"comment":t.push(Ve("©cmt",r));break;case"lyrics":t.push(Ve("©lyr",r));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:gt(i)}if(e.raw)for(const i in e.raw){const r=e.raw[i];r==null||i.length!==4||t.some(n=>n.type===i)||(typeof r=="string"?t.push(Ve(i,r)):r instanceof Uint8Array&&t.push(te(i,Array.from(r))))}},Ve=(t,e)=>{const i=De.encode(e);return te(t,[ie(i.length),ie(Fn("und")),Array.from(i)])},In={"image/jpeg":13,"image/png":14,"image/bmp":27},Rn=(t,e)=>{const i=[];for(const{key:r,value:n}of Fr(t))switch(r){case"title":i.push({key:e?"title":"©nam",value:He(n)});break;case"description":i.push({key:e?"description":"©des",value:He(n)});break;case"artist":i.push({key:e?"artist":"©ART",value:He(n)});break;case"album":i.push({key:e?"album":"©alb",value:He(n)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:He(n)});break;case"comment":i.push({key:e?"comment":"©cmt",value:He(n)});break;case"genre":i.push({key:e?"genre":"©gen",value:He(n)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:He(n)});break;case"date":i.push({key:e?"date":"©day",value:He(n.toISOString().slice(0,10))});break;case"images":for(const a of n)a.kind==="coverFront"&&i.push({key:"covr",value:te("data",[$(In[a.mimeType]??0),$(0),Array.from(a.data)])});break;case"trackNumber":if(e){const a=t.tracksTotal!==void 0?`${n}/${t.tracksTotal}`:n.toString();i.push({key:"track",value:He(a)})}else i.push({key:"trkn",value:te("data",[$(0),$(0),ie(0),ie(n),ie(t.tracksTotal??0),ie(0)])});break;case"discNumber":e||i.push({key:"disc",value:te("data",[$(0),$(0),ie(0),ie(n),ie(t.discsTotal??0),ie(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:gt(r)}if(t.raw)for(const r in t.raw){const n=t.raw[r];n==null||!e&&r.length!==4||i.some(a=>a.key===r)||(typeof n=="string"?i.push({key:r,value:He(n)}):n instanceof Uint8Array?i.push({key:r,value:te("data",[$(0),$(0),Array.from(n)])}):n instanceof Hr&&i.push({key:r,value:te("data",[$(In[n.mimeType]??0),$(0),Array.from(n.data)])}))}return i},kl=t=>{const e=Rn(t,!1);return e.length===0?null:ce("meta",0,0,void 0,[Ui(!1,"mdir","","appl"),te("ilst",void 0,e.map(i=>te(i.key,void 0,[i.value])))])},Sl=t=>{const e=Rn(t,!0);return e.length===0?null:te("meta",void 0,[Ui(!1,"mdta",""),ce("keys",0,0,[$(e.length)],e.map(i=>te("mdta",[...De.encode(i.key)]))),te("ilst",void 0,e.map((i,r)=>{const n=String.fromCharCode(...$(r+1));return te(n,void 0,[i.value])}))])},He=t=>te("data",[$(1),$(0),...De.encode(t)]),Tl=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},El={avc:Dc,hevc:qc,vp8:Bn,vp9:Bn,av1:$c,prores:null},Mn=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},Cl=(t,e)=>{switch(t){case"aac":return Ni;case"mp3":return Ni;case"opus":return Xc;case"vorbis":return Ni;case"flac":return Kc;case"ac3":return Zc;case"eac3":return Qc;case"dts":return Yc}if(e)switch(t){case"pcm-s24":return ct;case"pcm-s24be":return ct;case"pcm-s32":return ct;case"pcm-s32be":return ct;case"pcm-f32":return ct;case"pcm-f32be":return ct;case"pcm-f64":return ct;case"pcm-f64be":return ct}else switch(t){case"pcm-s16":return je;case"pcm-s16be":return je;case"pcm-s24":return je;case"pcm-s24be":return je;case"pcm-s32":return je;case"pcm-s32be":return je;case"pcm-f32":return je;case"pcm-f32be":return je;case"pcm-f64":return je;case"pcm-f64be":return je}return null},Bl={webvtt:"wvtt"},Al={webvtt:el},Fn=t=>{N(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Wi{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){N(!this.started),this.target._start(),this.started=!0}write(e){N(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return N(this.started&&!this.finalized),this.target._flush()}async finalize(){N(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const r=i+e.byteLength-this.trackedStart;let n=this.trackedWrites.byteLength;for(;n<r;)n*=2;if(n!==this.trackedWrites.byteLength){const a=new Uint8Array(n);a.set(this.trackedWrites,0),this.trackedWrites=a}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class it extends Ti{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new Pl(this,e)}}const Di=2**16,qi=2**32;class ni extends it{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Di,{maxByteLength:qi})}catch{this._buffer=new ArrayBuffer(Di),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Di);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>qi)throw new Error(`ArrayBuffer exceeded maximum size of ${qi} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const r=new ArrayBuffer(i),n=new Uint8Array(r);n.set(this._bytes,0),this._buffer=r,this._bytes=n}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class Pl extends it{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class $i{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Le=57600,Il=2082844800,Rl=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},me=(t,e,i=!0)=>{const r=t*e;return i?Math.round(r):r};class Ml extends yc{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new ni,this.auxWriter=new Wi(this.auxTarget,!1),this.auxBoxWriter=new ti(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Ar(),this.creationTime=Math.floor(Date.now()/1e3)+Il,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Nn,this.isCmaf=i instanceof Un,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Un?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(r=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":r instanceof ni),this.boxWriter=new ti(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof ni?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const r=await this.output._getInitTarget(),n=new Wi(r,!0);n.start(),this.initWriter=n,this.initBoxWriter=new ti(n)}const i=this.output.tracks.some(r=>r.isVideoTrack()&&r.source._codec==="avc");{const r=this.initBoxWriter??this.boxWriter;if(N(r),this.formatOptions.onFtyp&&r.writer.startTrackingWrites(),r.writeBox(_c({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:n,start:a}=r.writer.stopTrackingWrites();this.formatOptions.onFtyp(n,a)}this.ftypSize=r.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const r of this.output.tracks)if(r.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(N(this.writer),N(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ii(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const r of this.output.tracks)r.isVideoTrack()&&r.metadata.decoderConfig?this.getVideoTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig}):r.isAudioTrack()&&r.metadata.decoderConfig&&this.getAudioTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return tc({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,r){const n=this.trackDatas.find(f=>f.track===e);if(n)return n;$r(r,e.source._codec),N(r),N(r.decoderConfig);const a={...r.decoderConfig};N(a.codedWidth!==void 0),N(a.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!a.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const f=yo(i.data);if(!f)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");a.description=wo(f),s=!0}else if(e.source._codec==="hevc"&&!a.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const f=So(i.data);if(!f)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");a.description=Io(f),s=!0}const o=js(1/(e.metadata.frameRate??Le),1e6).den,c=a.displayAspectWidth,l=a.displayAspectHeight,d=c===void 0||l===void 0?{num:1,den:1}:zr({num:c*a.codedHeight,den:l*a.codedWidth}),u=a.codec==="ap4h"||a.codec==="ap4x",y={muxer:this,track:e,type:"video",info:{width:a.codedWidth,height:a.codedHeight,pixelAspectRatio:d,decoderConfig:a,requiresAnnexBTransformation:s,hasAlphaChannel:u},timescale:o,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(y),this.trackDatas.sort((f,g)=>f.track.id-g.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),y}getAudioTrackData(e,i,r){const n=this.trackDatas.find(c=>c.track===e);if(n)return n;jr(r,e.source._codec),N(r),N(r.decoderConfig);const a={...r.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!a.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=nn(Rt.tempFromBytes(i.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const l=Lr[c.samplingFrequencyIndex],d=Ur[c.channelConfiguration];if(l===void 0||d===void 0)throw new Error("Invalid ADTS frame header.");a.description=io({objectType:c.objectType,sampleRate:l,numberOfChannels:d}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const o={muxer:this,track:e,type:"audio",info:{numberOfChannels:r.decoderConfig.numberOfChannels,sampleRate:r.decoderConfig.sampleRate,decoderConfig:a,requiresPcmTransformation:!this.isFragmented&&ft.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:a.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(o),this.trackDatas.sort((c,l)=>c.track.id-l.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}getSubtitleTrackData(e,i){const r=this.trackDatas.find(a=>a.track===e);if(r)return r;mo(i),N(i),N(i.config);const n={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(n),this.trackDatas.sort((a,s)=>a.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),n}async addEncodedVideoPacket(e,i,r){const n=await this.mutex.acquire();try{const a=this.getVideoTrackData(e,i,r);let s=i.data;if(a.info.requiresAnnexBTransformation){const c=[...At(s)].map(l=>s.subarray(l.offset,l.offset+l.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=bo(c,4)}this.validateTimestamp(a.track,i.timestamp,i.type==="key");const o=this.createSampleForTrack(a,s,i.timestamp,i.duration,i.type);await this.registerSample(a,o)}finally{n()}}async addEncodedAudioPacket(e,i,r){const n=await this.mutex.acquire();try{const a=this.getAudioTrackData(e,i,r);let s=i.data;if(a.info.requiresAdtsStripping){const d=nn(Rt.tempFromBytes(s));if(!d)throw new Error("Expected ADTS frame, didn't get one.");const u=d.crcCheck===null?ic:rc;s=s.subarray(u)}this.validateTimestamp(a.track,i.timestamp,i.type==="key");let o=i.timestamp,c=i.duration;if(a.info.requiresPcmTransformation){const u=bt(a.info.decoderConfig.codec).sampleSize*a.info.numberOfChannels;if(c=s.byteLength/u/a.info.sampleRate,a.info.expectedNextPcmPacketTimestamp!==null){const y=o-a.info.expectedNextPcmPacketTimestamp;if(y<.01)o=a.info.expectedNextPcmPacketTimestamp;else{const f=await this.padWithSilence(a,a.info.expectedNextPcmPacketTimestamp,y);o=a.info.expectedNextPcmPacketTimestamp+f}}a.info.expectedNextPcmPacketTimestamp=o+c}const l=this.createSampleForTrack(a,s,o,c,i.type);await this.registerSample(a,l)}finally{n()}}async padWithSilence(e,i,r){const n=me(r,e.timescale);if(r=n/e.timescale,n>0){const{sampleSize:a,silentValue:s}=bt(e.info.decoderConfig.codec),o=n*e.info.numberOfChannels,c=new Uint8Array(a*o).fill(s),l=this.createSampleForTrack(e,new Uint8Array(c.buffer),i,r,"key");await this.registerSample(e,l)}return r}async addSubtitleCue(e,i,r){const n=await this.mutex.acquire();try{const a=this.getSubtitleTrackData(e,r);this.validateTimestamp(a.track,i.timestamp,!0),e.source._codec==="webvtt"&&(a.cueQueue.push(i),await this.processWebVTTCues(a,i.timestamp))}finally{n()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const r=new Set([]);for(const l of e.cueQueue)N(l.timestamp<=i),N(e.lastCueEndTimestamp<=l.timestamp+l.duration),r.add(Math.max(l.timestamp,e.lastCueEndTimestamp)),r.add(l.timestamp+l.duration);const n=[...r].sort((l,d)=>l-d),a=n[0],s=n[1]??a;if(i<s)break;if(e.lastCueEndTimestamp<a){this.auxWriter.seek(0);const l=bl();this.auxBoxWriter.writeBox(l);const d=this.auxTarget._getSlice(0,this.auxWriter.getPos()),u=this.createSampleForTrack(e,d,e.lastCueEndTimestamp,a-e.lastCueEndTimestamp,"key");await this.registerSample(e,u),e.lastCueEndTimestamp=a}this.auxWriter.seek(0);for(let l=0;l<e.cueQueue.length;l++){const d=e.cueQueue[l];if(d.timestamp>=s)break;wn.lastIndex=0;const u=wn.test(d.text),y=d.timestamp+d.duration;let f=e.cueToSourceId.get(d);if(f===void 0&&s<y&&(f=e.nextSourceId++,e.cueToSourceId.set(d,f)),d.notes){const m=wl(d.notes);this.auxBoxWriter.writeBox(m)}const g=yl(d.text,u?a:null,d.identifier??null,d.settings??null,f??null);this.auxBoxWriter.writeBox(g),y===s&&e.cueQueue.splice(l--,1)}const o=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,o,a,s-a,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,r,n,a){return{timestamp:r,decodeTimestamp:r,duration:n,data:i,size:i.byteLength,type:a,timescaleUnitsToNextSample:me(n,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let n=0;for(let a=0;a<e.timestampProcessingQueue.length;a++){const s=e.timestampProcessingQueue[a],o=me(s.duration,e.timescale);n+=o}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:n,sampleDelta:1});else{const a=We(e.timeToSampleTable);a.sampleCount+=n}e.timestampProcessingQueue.length=0;return}const r=e.timestampProcessingQueue.map(n=>n.timestamp).sort((n,a)=>n-a);this.isFragmented||(e.startTimestampOffset??=r[0]);for(let n=0;n<e.timestampProcessingQueue.length;n++){const a=e.timestampProcessingQueue[n];a.decodeTimestamp=r[n];const s=me(a.timestamp-a.decodeTimestamp,e.timescale),o=me(a.duration,e.timescale);if(e.lastTimescaleUnits!==null){N(e.lastSample);const c=me(a.decodeTimestamp,e.timescale,!1),l=Math.round(c-e.lastTimescaleUnits);if(N(l>=0),e.lastTimescaleUnits+=l,e.lastSample.timescaleUnitsToNextSample=l,!this.isFragmented){let d=We(e.timeToSampleTable);if(N(d),d.sampleCount===1){d.sampleDelta=l;const y=e.timeToSampleTable[e.timeToSampleTable.length-2];y&&y.sampleDelta===l&&(y.sampleCount++,e.timeToSampleTable.pop(),d=y)}else d.sampleDelta!==l&&(d.sampleCount--,e.timeToSampleTable.push(d={sampleCount:1,sampleDelta:l}));d.sampleDelta===o?d.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:o});const u=We(e.compositionTimeOffsetTable);N(u),u.sampleCompositionTimeOffset===s?u.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=me(a.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:o}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=a}if(e.timestampProcessingQueue.length=0,N(e.lastSample),N(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){N(i.type==="key");const n=me(i.timestamp,e.timescale,!1),a=Math.round(n-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=a}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const n=e.track.metadata.maximumPacketCount;if(N(n!==void 0),e.samples.length>n)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${n}). Either add less packets or increase the maximum packet count.`)}let r=!1;if(!e.currentChunk)r=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const n=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const a=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const o=s.sampleQueue[0];return o?o.type==="key":s.closed});n>=this.minimumFragmentDuration&&a&&i.timestamp>this.maxWrittenTimestamp&&(r=!0,await this.finalizeFragment())}else r=n>=.5}r&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),N(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(N(!this.isFragmented),N(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((r,n)=>r+me(n.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||We(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const r of e.currentChunk.samples)N(r.data),this.writer.write(r.data),r.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(N(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,r=1/0;for(const a of this.trackDatas){if(!e&&a.sampleQueue.length===0&&!a.closed)break e;a.sampleQueue.length>0&&a.sampleQueue[0].timestamp<r&&(i=a,r=a.sampleQueue[0].timestamp)}if(!i)break;const n=i.sampleQueue.shift();await this.addSampleToTrack(i,n)}}async finalizeFragment(e=!this.isCmaf){if(N(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const f=this.initBoxWriter??this.boxWriter;N(f),this.formatOptions.onMoov&&f.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const g=Mt(this);if(f.writeBox(g),this.formatOptions.onMoov){const{data:m,start:v}=f.writer.stopTrackingWrites();this.formatOptions.onMoov(m,v)}if(this.isCmaf){N(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new ti(this.writer);const m=this.boxWriter.measureBox(En()),v=this.boxWriter.measureBox(Cn(this,0));this.segmentHeaderSize=m+v,this.writer.seek(this.segmentHeaderSize)}}N(this.writer),N(this.boxWriter);const i=this.trackDatas.filter(f=>f.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const r=this.nextFragmentNumber++,n=An(r,i),a=this.writer.getPos(),s=a+this.boxWriter.measureBox(n);let o=s+Pi,c=1/0;for(let f=0;f<i.length;f++){const g=i[f];g.currentChunk.offset=o,g.currentChunk.moofOffset=a,g.currentChunk.trafIndex=f;for(const m of g.currentChunk.samples)o+=m.size;c=Math.min(c,g.currentChunk.startTimestamp)}const l=o-s,d=l>=2**32;if(d)for(const f of i)f.currentChunk.offset+=rn-Pi;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const u=An(r,i);if(this.boxWriter.writeBox(u),this.formatOptions.onMoof){const{data:f,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(f,g,c)}N(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const y=ii(d);y.size=l,this.boxWriter.writeBox(y),this.writer.seek(s+(d?rn:Pi));for(const f of i)for(const g of f.currentChunk.samples)this.writer.write(g.data),g.data=null;if(this.formatOptions.onMdat){const{data:f,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(f,g)}for(const f of i)f.finalizedChunks.push(f.currentChunk),this.finalizedChunks.push(f.currentChunk),f.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){N(this.writer),N(this.boxWriter),this.ensureOneEnabledTrack();const e=Mt(this),r=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;N(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ii(!0),this.boxWriter.writeBox(this.mdat);for(const n of this.trackDatas){for(const a of n.sampleQueue)await this.addSampleToTrack(n,a);n.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){N(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const r=i.track.metadata.maximumPacketCount;N(r!==void 0),e+=8*Math.ceil(2/3*r),e+=4*r,e+=8*Math.ceil(2/3*r),e+=12*Math.ceil(2/3*r),e+=4*r,e+=8*r}return e}async onTrackClose(e){const i=await this.mutex.acquire(),r=this.trackDatas.find(n=>n.track===e);r&&(r.closed=!0,r.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(r,1/0),this.processTimestamps(r)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(n=>n.type===e);if(i.length===0)continue;if(!i.some(n=>n.track.metadata.disposition?.default!==!1)){const n=i[0];n.track.metadata.disposition={...n.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){N(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let r=0;r<i.samples.length;r++){const n=i.samples[r];n.timestamp-=i.startTimestampOffset,n.decodeTimestamp-=i.startTimestampOffset}if(N(this.writer),N(this.boxWriter),this.fastStart==="in-memory"){this.mdat=ii(!1);let i;for(let n=0;n<2;n++){const a=Mt(this),s=this.boxWriter.measureBox(a);i=this.boxWriter.measureBox(this.mdat);let o=this.writer.getPos()+s+i;for(const c of this.finalizedChunks){c.offset=o;for(const{data:l}of c.samples)N(l),o+=l.byteLength,i+=l.byteLength}if(o<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const r=Mt(this);if(this.boxWriter.writeBox(r),this.formatOptions.onMoov){const{data:n,start:a}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,a)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const n of this.finalizedChunks)for(const a of n.samples)N(a.data),this.writer.write(a.data),a.data=null;if(this.formatOptions.onMdat){const{data:n,start:a}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,a)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(En()),this.boxWriter.writeBox(Cn(this,i))}else{const i=this.writer.getPos(),r=pl(this.trackDatas);this.boxWriter.writeBox(r);const n=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(n)}else{N(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);N(i!==void 0);const r=this.writer.getPos()-i;if(this.mdat.size=r,this.mdat.largeSize=r>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:a,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(a,s)}const n=Mt(this);if(this.fastStart==="reserve"){N(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);const a=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(kc(a))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);if(this.formatOptions.onMoov){const{data:a,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(a,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Fl=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(n=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");n&&(r=function(){try{n.call(this)}catch(a){return Promise.reject(a)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},zl=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,n=0;function a(){for(;r=e.stack.pop();)try{if(!r.async&&n===1)return n=0,e.stack.push(r),Promise.resolve().then(a);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(s).then(a,function(o){return i(o),a()})}else n|=1}catch(o){i(o)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return a()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});class ji{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class zn extends ji{constructor(e){if(super(),this._connectedTrack=null,!Je.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${Je.join(", ")}.`);this._codec=e}}const On=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Ol{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new Vs,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,r){const n=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const a=this.encodingConfig,s=a.sizeChangeBehavior??"deny";let o=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(o=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(a.transform?.width!==void 0||a.transform?.height!==void 0||a.transform?.rotate!==void 0||a.transform?.crop!==void 0||a.transform?.force===!0||o&&s!=="passThrough"){let u=a.transform?.width,y=a.transform?.height,f=a.transform?.fit??"fill";o&&s!=="passThrough"&&(N(this.outputWidth),N(this.outputHeight),N(s!=="deny"),u=this.outputWidth,y=this.outputHeight,f=s);const g=await e.transform({width:u,height:y,roundDimensionsTo:2,crop:a.transform?.crop,rotate:a.transform?.rotate,fit:f,alpha:a.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=g.displayWidth,this.outputHeight=g.displayHeight),i&&e.close(),e=g,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const d=a.transform?.frameRate;if(d!==void 0){const u=e.timestamp+e.duration,y=Rr(e.timestamp,d);if(this.frameRateLastSample!==null)if(y<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=u;return}else await this.padFrameRate(y,r);e===n&&(e=e.clone(),i=!0),e.setTimestamp(y),e.setDuration(1/d),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=y,this.frameRateLastEndTimestamp=u}await this.processAndEncode(e,r)}finally{i&&e.close()}}async processAndEncode(e,i){const r=this.encodingConfig;let n;if(r.transform?.process){let a=r.transform.process(e);if(a instanceof Promise&&(a=await a),a===null)return;Array.isArray(a)||(a=[a]);const s=[];try{for(const o of a)o instanceof Ce?s.push(o):typeof VideoFrame<"u"&&o instanceof VideoFrame?s.push(new Ce(o)):s.push(new Ce(o,{timestamp:e.timestamp,duration:e.duration}))}catch(o){for(const c of s)c!==e&&c.close();for(const c of a)(c instanceof Ce&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw o}n=s}else n=[e];try{for(const a of n){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(a),this.encoderInitialized||await this.ensureEncoderPromise),N(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,o=Math.floor(a.timestamp/s),c={...this.defaultEncodeOptions,...a.encodeOptions,...i},l={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:s===0||o!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=o,this.encodingConfig.onEncodedSample?.(a),this.customEncoder){this.customEncoderQueueSize++;const d=a.clone(),u=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(d,l)).catch(y=>this.setError(y)).finally(()=>{this.customEncoderQueueSize--,d.close()});this.customEncoderQueueSize>=4&&await u}else{N(this.encoder);const d=a.toVideoFrame(),u=Br(this.preciseTimings,d.timestamp,f=>f.microsecondTimestamp),y=u!==-1?this.preciseTimings[u]:null;if(y&&y.microsecondTimestamp===d.timestamp?(y.timestamp!==a.timestamp&&(y.timestampIsValid=!1),y.duration!==a.duration&&(y.durationIsValid=!1)):(this.preciseTimings.splice(u+1,0,{microsecondTimestamp:d.timestamp,timestamp:a.timestamp,duration:a.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!d.format&&!d.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(d,l)}finally{d.close()}}else{this.splitter||(this.splitter=new Hl);const{colorFrame:g,alphaFrame:m}=await this.splitter.split(d);this.alphaFrameQueue.push(m);try{this.encoder.encode(g,l)}finally{g.close()}}else try{this.encoder.encode(d,l)}finally{d.close()}this.encoder.encodeQueueSize>=4&&await new Promise(f=>this.encoder.addEventListener("dequeue",f,{once:!0}))}await this.lastMuxerPromise}}finally{for(const a of n)a!==e&&a.close()}}async padFrameRate(e,i){const r=this.encodingConfig.transform.frameRate;N(this.frameRateLastSample);const n=Math.round((e-this.frameRateLastTimestamp)*r);for(let a=1;a<n;a++){const s={stack:[],error:void 0,hasError:!1};try{const o=Fl(s,this.frameRateLastSample.clone(),!1);o.setTimestamp(this.frameRateLastTimestamp+a/r),o.setDuration(1/r),await this.processAndEncode(o,i)}catch(o){s.error=o,s.hasError=!0}finally{zl(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=bn(this.encodingConfig.quality,this.encodingConfig.bitrate);N(i!==void 0);const r=mn({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let n=null,a;for(const o of r){const c=o.config;if(this.encodingConfig.onEncoderConfig?.(c),a=yn.find(d=>d.supports(this.encodingConfig.codec,c)),a){n=o;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){n=o;break}}catch{}}if(!n){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const o=r[0].config,c=r.map(({config:l,quantizer:d})=>d!==null?`quantizer ${d}`:`${l.bitrate} bps`);throw new Error(`This specific encoder configuration (${o.codec}, ${c.join(" / ")}, ${o.width}x${o.height}, hardware acceleration: ${o.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=n.config;if(n.quantizer!==null&&(this.defaultEncodeOptions=vn(this.encodingConfig.codec,n.quantizer)),a)this.customEncoder=new a,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(o,c)=>{if(!(o instanceof dt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");On(this.source._connectedTrack,o),this.encodingConfig.onEncodedPacket?.(o,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,o,c).catch(l=>{this.setError(l)})},this.customEncoder.onError=o=>{this.setError(o)},await this.customEncoder.init();else{const o=[],c=[];let l=0,d=0;const u=(f,g,m)=>{const v={};if(g){const E=new Uint8Array(g.byteLength);g.copyTo(E),v.alpha=E}let b=dt.fromEncodedChunk(f,v);const w=Br(this.preciseTimings,f.timestamp,E=>E.microsecondTimestamp),S=w!==-1?this.preciseTimings[w]:null;let T=null;this.emittedEncoderPackets===0&&b.type==="delta"&&m?.decoderConfig&&(T=Fo(this.encodingConfig.codec,m.decoderConfig,b.data)),(S&&S.microsecondTimestamp===f.timestamp||T!==null)&&(b=b.clone({timestamp:S?.timestampIsValid?S.timestamp:void 0,duration:S?.durationIsValid?S.duration:void 0,type:T??void 0})),On(this.source._connectedTrack,b),this.encodingConfig.onEncodedPacket?.(b,m),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,b,m).catch(E=>{this.setError(E)}),this.emittedEncoderPackets++},y=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(f,g)=>{if(!this.alphaEncoder){u(f,null,g);return}const m=this.alphaFrameQueue.shift();N(m!==void 0),m?(this.alphaEncoder.encode(m,{...this.defaultEncodeOptions,keyFrame:f.type==="key"}),d++,m.close(),o.push({chunk:f,meta:g})):d===0?u(f,null,g):(c.push(l+d),o.push({chunk:f,meta:g}))},error:f=>{f.stack=y,this.setError(f)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const f=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(g,m)=>{d--;const v=o.shift();for(N(v!==void 0),u(v.chunk,g,v.meta),l++;c.length>0&&c[0]===l;){c.shift();const b=o.shift();N(b!==void 0),u(b.chunk,null,b.meta)}},error:g=>{g.stack=f,this.setError(g)}}),this.alphaEncoder.configure(s)}}N(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,r=Rr(this.frameRateLastEndTimestamp,i);await this.padFrameRate(r)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Qs(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let Vi=null;class Hl{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!Vi){const n=new Blob([`(${Ll.toString()})()`],{type:"application/javascript"});Vi=URL.createObjectURL(n)}this.worker=new Worker(Vi),this.worker.addEventListener("message",n=>{const a=n.data,s=this.pendingRequests.get(a.id);s&&(this.pendingRequests.delete(a.id),"error"in a?s.reject(new Error(a.error)):s.resolve({colorFrame:a.colorFrame,alphaFrame:a.alphaFrame}))}),this.worker.addEventListener("error",n=>{const a=new Error(n.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(a);this.pendingRequests.clear()})}const i=this.nextRequestId++,r=Ar();return this.pendingRequests.set(i,r),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),r.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Ll=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",a=>{const{id:s,sourceFrame:o}=a.data;e=e.then(async()=>{try{const{colorFrame:c,alphaFrame:l}=await i(o);self.postMessage({id:s,colorFrame:c,alphaFrame:l},{transfer:[c,l]})}catch(c){self.postMessage({id:s,error:c.message})}finally{o.close()}})});const i=async a=>{const s=a.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const o=a.allocationSize();if((!t||t.byteLength!==o)&&(t=new Uint8Array(o)),await a.copyTo(t),s==="RGBA"||s==="BGRA")return r(t,s,a);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return n(t,s,a);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},r=(a,s,o)=>{const c=o.visibleRect?.width??o.codedWidth,l=o.visibleRect?.height??o.codedHeight,d=c*l,u=Math.ceil(c/2),y=Math.ceil(l/2),f=d+u*y*2,g=new Uint8Array(f);for(let w=0,S=3;w<d;w++,S+=4)g[w]=a[S];g.fill(128,d);const m=new VideoFrame(a,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0}),v={format:"I420",codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[g.buffer]},b=new VideoFrame(g,v);return{colorFrame:m,alphaFrame:b}},n=(a,s,o)=>{const c=o.visibleRect?.width??o.codedWidth,l=o.visibleRect?.height??o.codedHeight,d=s.includes("P10"),u=s.includes("P12"),y=d||u?2:1;let f,g;s.startsWith("I420")?(f=Math.ceil(c/2),g=Math.ceil(l/2)):s.startsWith("I422")?(f=Math.ceil(c/2),g=l):(f=c,g=l);const m=c*l,v=f*g,b=m*y,w=v*y,S=m*y,T=b+w*2,E=s.replace("A",""),O=Math.ceil(c/2),P=Math.ceil(l/2),L=O*P,I=L*y,j=S+2*I,Q=new Uint8Array(j),_=T;Q.set(a.subarray(_,_+S),0);const F=S,p=d?512:u?2048:128;y===1?Q.fill(p,F):new Uint16Array(Q.buffer,F,2*L).fill(p);const H=d?"I420P10":u?"I420P12":"I420",ee=new VideoFrame(a.subarray(0,T),{format:E,codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0}),W={format:H,codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[Q.buffer]},se=new VideoFrame(Q,W);return{colorFrame:ee,alphaFrame:se}}};class Ul extends zn{constructor(e){hc(e),super(e.codec),this._encoder=new Ol(this,e)}add(e,i){if(!(e instanceof Ce))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Nl extends ji{constructor(e){if(super(),this._connectedTrack=null,!Qt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Qt.join(", ")}.`);this._codec=e}}class Wl extends ji{constructor(e){if(super(),this._connectedTrack=null,!Ct.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Ct.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Hn{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>Je.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Qt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Ct.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class Gi extends Hn{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new Ml(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Ln extends Gi{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Je,...Ei,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Ct]}_codecUnsupportedHint(e){return new Nn().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Un extends Gi{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Je,...Ei,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Ct]}}class Nn extends Gi{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...Je,...Qt]}_codecUnsupportedHint(e){return new Ln().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Wn=["video","audio","subtitle"];class Ft{constructor(e,i,r,n,a){this.id=e,this.output=i,this.type=r,this.source=n,this.metadata=a}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Ft))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Or(this.metadata.group),r=Or(e.metadata.group);for(const n of i)if(this.type!==e.type&&r.some(o=>n===o)||r.some(o=>n._pairedGroups.has(o)))return!0;return!1}}class Dl extends Ft{constructor(e,i,r,n){super(e,i,"video",r,n)}}class ql extends Ft{constructor(e,i,r,n){super(e,i,"audio",r,n)}}class $l extends Ft{constructor(e,i,r,n){super(e,i,"subtitle",r,n)}}class zt{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof zt))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const Xi=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!$s(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&to(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof zt)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof zt))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class jl extends Ti{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new zt,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Cr,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Hn))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof it||e.target instanceof $i))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof it&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof it)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof it&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){N(this._target instanceof $i);const i=this._target.getTarget(e),r=n=>{if(!(n instanceof it))throw new TypeError("getTarget must return a Target.");return n};return i instanceof Promise?i.then(r):r(i)}async _getTarget(e){N(this._target instanceof $i);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(N(this._initTarget!==null),this._initTarget instanceof it)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof it)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),r=n=>(this.state==="canceled"?n._close():this._rememberTarget(n),this._emit("target",{target:n,request:e,isRoot:!0}),this._rootTarget=n,n);return i instanceof Promise?this._rootTargetPromise=i.then(r):r(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),r=new Wi(i,typeof e=="boolean"?e:e(i));return r.start(),r})()}addVideoTrack(e,i={}){if(!(e instanceof zn))throw new TypeError("source must be a VideoSource.");if(Xi(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&$r({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof dt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Dl(this.tracks.length+1,this,e,r))}addAudioTrack(e,i={}){if(!(e instanceof Nl))throw new TypeError("source must be an AudioSource.");if(Xi(i),i.decoderConfig!==void 0&&jr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof dt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new ql(this.tracks.length+1,this,e,r))}addSubtitleTrack(e,i={}){if(!(e instanceof Wl))throw new TypeError("source must be a SubtitleSource.");Xi(i);const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new $l(this.tracks.length+1,this,e,r))}setMetadataTags(e){if(eo(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),r=this.tracks.reduce((s,o)=>s+(o.type===e.type?1:0),0),n=i[e.type].max;if(r===n)throw new Error(n===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${n} ${e.type} track${n===1?"":"s"}.`);const a=i.total.max;if(this.tracks.length===a)throw new Error(`${this.format._name} does not support more than ${a} tracks${a===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const r of Wn){const n=this.tracks.reduce((s,o)=>s+(o.type===r?1:0),0),a=e[r].min;if(n<a)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const r of Wn){const n=this.tracks.reduce((s,o)=>s+(o.type===r?1:0),0),a=e[r].min;if(n<a)throw new Error(a===e[r].max?`${this.format._name} requires exactly ${a} ${r} track${a===1?"":"s"}.`:`${this.format._name} requires at least ${a} ${r} track${a===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(pe._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const r=this._mutex.acquire();try{await this._muxer.start();const n=this.tracks.map(a=>a.source._start());await Promise.all(n)}finally{(await r)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return pe._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&pe._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(r=>r._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(pe._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const r=await this._rootWriterPromise;r.finalized||(await r.flush(),await r.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const Vl={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Gl=new Set(["window","buddy"]);function Dn(t){return!Gl.has(t.typeId)}const Xl=new Set(["bitmap","video","audio","pcm","objectUrl","frozenFrame"]);function Kl(t){const e=JSON.parse(JSON.stringify(t,(i,r)=>{if(!Xl.has(i))return r}));return JSON.stringify(e,null,2)}function Zl(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>Ql(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const r=Vl[i.generator??""];return r?{...i,generator:r}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Dn)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(r=>({...r,effects:(r.effects??[]).filter(Dn)}))}:i.data})),e}function Ql(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,objectUrl:null,frozenFrame:null}}function Yl(t,e){const i=new Blob([e],{type:"application/json"});yt(t,i)}function yt(t,e){const i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Ki=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function qn(t,e,i=1280){const r=i/Math.max(t,e,1e-4);return{width:Ne(t*r),height:Ne(e*r)}}function Jl(t,e){const i=t/Math.max(e,1);let r="16:9",n=1/0;for(const a of Ki){const s=Math.abs(i-a.rw/a.rh);s<n&&(n=s,r=a.id)}return r}function ef(t,e,i=1280){if(t<2||e<2)return qn(16,9,i);const r=Math.max(t,e),n=i/r;return{width:Ne(t*n),height:Ne(e*n)}}function tf(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),r=e-i;return t<r?0:(t-r+1)/i}const rf=960,nf=1920;function Zi(t,e=!1){const i=e?rf:nf;return lr(t.exportSettings.width,t.exportSettings.height,i,i)}async function af(t,e,i){const{width:r,height:n,format:a,quality:s,filename:o}=e.exportSettings,c=a==="jpg"?"image/jpeg":"image/png",l=await t.capture(e,i,Ne(r),Ne(n),c,s);yt(`${o}.${a==="jpg"?"jpg":"png"}`,l)}async function sf(t,e,i){const{fps:r,duration:n,filename:a,quality:s}=e.exportSettings,{width:o,height:c}=Zi(e,!1),l=Math.max(1,Math.round(n*r)),d=new zs,u=d.folder(a)??d,y=document.createElement("canvas");for(let g=0;g<l;g++){const m=g/r;i?.(g,l),t.paintFrame(e,m,o,c,y);const v=await df(y,"image/png",s);u.file(`${a}_${String(g).padStart(5,"0")}.png`,await v.arrayBuffer()),await Qi()}const f=await d.generateAsync({type:"blob"});yt(`${a}_sequence.zip`,f)}async function $n(t,e,i,r=!1){const n=await jn(t,e,lf(),i,r);yt(`${e.exportSettings.filename}.webm`,n)}async function of(t,e,i,r=!1){try{return await cf(t,e,i,r),"mp4 clip saved"}catch(n){const a=ff();if(a){const o=await jn(t,e,a,i,r);return yt(`${e.exportSettings.filename}.mp4`,o),"mp4 clip saved"}return await $n(t,e,i,r),`MP4 not available (${n instanceof Error?n.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function cf(t,e,i,r=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),a=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:s,height:o}=Zi(e,r),c=new ot({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),l=new Ln({fastStart:"in-memory"}),u=await gc(["avc","hevc"].filter(w=>l.getSupportedVideoCodecs().includes(w)),{width:s,height:o,quality:c});if(!u)throw new Error("this browser cannot encode H.264");const y=new ni,f=new jl({format:l,target:y}),g=new Ul({codec:u,quality:c,keyFrameInterval:1});f.addVideoTrack(g,{frameRate:n}),t.resetTemporal();const m=document.createElement("canvas");await f.start();try{const w=Math.max(1,Math.round(a*n)),S=1/n,T=e.exportSettings.loopClose!==!1;let E=null;for(let O=0;O<w;O++){const P=mi(O/n,a,e.playback.mode,1,!0);i?.(O,w),t.paintFrame(e,P,s,o,m),O===0&&T?E=Gn(m):Vn(m,E,O,w,T);const L=new Ce(m,{timestamp:O*S,duration:S});await g.add(L,{keyFrame:O%n===0}),L.close(),await Qi()}await f.finalize()}catch(w){try{await f.cancel()}catch{}throw w}const v=y.buffer;if(!v||v.byteLength<32)throw new Error("MP4 mux produced an empty file");const b=v.slice(0);yt(`${e.exportSettings.filename}.mp4`,new Blob([b],{type:"video/mp4"}))}async function jn(t,e,i,r,n=!1){const a=Math.min(24,Math.max(12,e.exportSettings.fps||24)),s=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:o,height:c}=Zi(e,n),l=document.createElement("canvas");l.width=o,l.height=c;const d=l.getContext("2d");if(!d)throw new Error("No 2d context");const u=l.captureStream(0),y=u.getVideoTracks()[0],f=new MediaRecorder(u,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),g=[];f.ondataavailable=S=>{S.data.size&&g.push(S.data)},t.resetTemporal(),f.start(200);const m=Math.max(1,Math.round(s*a)),v=document.createElement("canvas"),b=e.exportSettings.loopClose!==!1;let w=null;for(let S=0;S<m;S++){const T=mi(S/a,s,e.playback.mode,1,!0);r?.(S,m),t.paintFrame(e,T,o,c,v),S===0&&b?w=Gn(v):Vn(v,w,S,m,b),d.drawImage(v,0,0,o,c),y.requestFrame?.(),await Qi()}if(await new Promise(S=>{f.onstop=()=>S(),f.stop()}),u.getTracks().forEach(S=>S.stop()),!g.length)throw new Error("recorder produced no data");return new Blob(g,{type:i})}function lf(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function ff(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Vn(t,e,i,r,n){if(!n||!e||i===0)return;const a=tf(i,r);if(a<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=a,s.drawImage(e,0,0,t.width,t.height),s.restore())}function Gn(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Qi(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function df(t,e,i){return new Promise((r,n)=>{t.toBlob(a=>{a?r(a):n(new Error("frame capture failed"))},e,i)})}async function uf(t,e,i,r,n=!1){const a=e.exportSettings.format;return a==="mp4"?of(t,e,r,n):a==="webm"?$n(t,e,r,n):a==="sequence"?sf(t,e,r):af(t,e,i)}const hf=768,mf="sana",Xn=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function pf(t=768,e=768){const i=Math.max(1,t),r=Math.max(1,e),n=hf/Math.max(i,r);return{width:Ne(i*n,256),height:Ne(r*n,256)}}function gf(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16);if(Number.isNaN(i))return"muted earth";const r=i>>16&255,n=i>>8&255,a=i&255;let s=Xn[0],o=1e9;for(const c of Xn){const l=(r-c.r)**2+(n-c.g)**2+(a-c.b)**2;l<o&&(o=l,s=c)}return s.name}function vf(t,e=[],i=!1){const r=t.trim()||"experimental photographic still, cinematic light, analog film",n="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${r}, ${n}`;const a=e.map(gf).filter((s,o,c)=>c.indexOf(s)===o).slice(0,4);return`${r}, palette of ${a.join(", ")}, ${n}`}function bf(t,e,i){return`#${[t,e,i].map(r=>Math.max(0,Math.min(255,r)).toString(16).padStart(2,"0")).join("")}`}function yf(t,e,i,r=4){const n=[];for(let a=0;a<3;a++)for(let s=0;s<3;s++){const o=Math.min(e-1,Math.floor((s+.5)/3*e)),l=(Math.min(i-1,Math.floor((a+.5)/3*i))*e+o)*4,d=t[l],u=t[l+1],y=t[l+2],f=bf(d,u,y);n.some(m=>(m.r-d)**2+(m.g-u)**2+(m.b-y)**2<1400)||n.push({hex:f,r:d,g:u,b:y})}return n.slice(0,r).map(a=>a.hex)}function wf(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const r=i.getImageData(0,0,e.width,e.height);return yf(r.data,e.width,e.height)}function xf(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function _f(t,e,i,r,n=mf){const a=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${r}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(n)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(a)}?${s}`}async function kf(t,e){const i=new AbortController,r=setTimeout(()=>i.abort(),e);try{const n=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!n.ok)throw n.status===429||n.status>=500?new Error(`busy:${n.status}`):new Error(`Generation failed (${n.status}). Try a shorter prompt.`);const a=await n.arrayBuffer(),s=new Uint8Array(a),o=n.headers.get("content-type")||"";if(!xf(s,o))throw new Error("Generation returned no image. Try again.");const c=o.startsWith("image/")?o.split(";")[0]:"image/jpeg";return new Blob([a],{type:c})}catch(n){throw n instanceof Error&&n.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):n}finally{clearTimeout(r)}}async function Sf(t){const{width:e,height:i}=pf(t.width??768,t.height??768),r=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let n=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await kf(_f(r,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(o){n=o instanceof Error?o:new Error(String(o))}}const a=n?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":n?.message;throw new Error(a||"Generation failed. Try a shorter prompt.")}function xe(t){const e=C.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Ot(t){if(!t)return;const e=C.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Be(t,e,i=!0){C.setProject(r=>({...r,layers:r.layers.map(n=>n.id===t?e(n):n)}),i)}function Ht(t,e=!0){C.setProject(i=>{const r=e?i.layers.map(n=>n.id===C.state.ui.selectedLayerId?{...n,sourceId:t.id}:n):i.layers;return{...i,sources:[...i.sources,t],layers:r}}),C.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function Tf(t){const e=C.project.sources.filter(r=>r.kind==="audio");for(const r of e)Tr(r);if(C.setProject(r=>{const n=r.sources.filter(o=>o.kind!=="audio"),a=r.layers.map(o=>e.some(c=>c.id===o.sourceId)?{...o,sourceId:n.find(c=>c.kind!=="audio")?.id??null}:o),s=Math.max(r.duration,t.duration||0);return{...r,sources:[...n,t],layers:a,duration:s}}),$t(),C.project.playback.playing&&t.audio){try{const r=t.duration||t.audio.duration||1;t.audio.currentTime=C.project.playback.time%Math.max(r,.001)}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"";C.patchUi({selectedSourceId:t.id,status:`soundtrack ${t.name}${i?` · ${i}`:""} — hit Play; the mix moves idols, floaters, and places`})}async function Yi(t,e=!1){for(const i of Array.from(t))try{const r=await Es(i);if(r.kind==="audio"){Tf(r);continue}if(e){const n=C.state.ui.selectedSourceId;C.setProject(a=>({...a,sources:a.sources.map(s=>s.id===n?{...r,id:s.id}:s)})),C.patchUi({status:`replaced ${i.name}`})}else Ht(r,!0)}catch(r){C.patchUi({status:r instanceof Error?r.message:"import failed"})}}function Ef(){C.setProject(e=>{const i=e.sources.find(n=>n.kind!=="audio")?.id??null,r=gr(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,r]}});const t=C.project.layers.at(-1);C.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function Cf(t){C.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const r=JSON.parse(JSON.stringify(i));r.id=Ee("lyr"),r.name=`${i.name}*`,r.effects=r.effects.map(s=>({...s,id:Ee("fx")}));const n=e.layers.findIndex(s=>s.id===t),a=[...e.layers];return a.splice(n+1,0,r),{...e,layers:a}})}function Bf(t){C.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Ji(t){const e=xe(C.project);if(!e)return;const i=pr(t);Be(e.id,r=>({...r,effects:[...r.effects,i]})),C.patchUi({selectedEffectId:i.id})}function Af(t,e){Be(t,i=>({...i,effects:i.effects.filter(r=>r.id!==e)}))}function Kn(t,e,i){Be(t,r=>{const n=r.effects.findIndex(c=>c.id===e),a=n+i;if(n<0||a<0||a>=r.effects.length)return r;const s=[...r.effects],[o]=s.splice(n,1);return s.splice(a,0,o),{...r,effects:s}})}function Pf(t,e){Be(t,i=>({...i,effects:i.effects.map(r=>r.id===e?{...r,enabled:!r.enabled}:r)}))}function Lt(t,e,i,r,n=!0){Be(t,a=>({...a,effects:a.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:r}}:s)}),n)}function wt(t,e=!1){const i=C.state.ui;(t==="all"||t==="selected")&&C.setProject(n=>({...n,seed:n.seed+1+(Date.now()&255)>>>0}),!1),C.setProject(n=>{let s=ur(n,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&(i.includeCritters||e)&&(s=dr(s)),t==="all"&&(i.includeIdol||e)&&(s=fr(s)),s});const r=C.project.layers[0]?.effects.map(n=>n.typeId).join(" · ");C.patchUi({status:`${e?"wacky look":"look"} · ${r||t} · seed ${C.project.seed}`})}function If(){const t=xe(C.project);if(!t)return;const e=t.effects.find(a=>a.typeId==="critters"),i=1+(C.project.seed+Date.now())%9998;if(e){Lt(t.id,e.id,"seed",i),C.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Ji("critters");const r=xe(C.project),n=Ot(r);r&&n?.typeId==="critters"&&Lt(r.id,n.id,"seed",i),C.patchUi({status:"stamped floaters"})}function Rf(){const t=xe(C.project);if(!t)return;const e=t.effects.find(a=>a.typeId==="dancer"),i=1+(C.project.seed+Date.now()+17)%9998;if(e){Lt(t.id,e.id,"seed",i),C.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Ji("dancer");const r=xe(C.project),n=Ot(r);r&&n?.typeId==="dancer"&&Lt(r.id,n.id,"seed",i),C.patchUi({status:"stamped idol"})}function Mf(){C.setProject(t=>Ca({...t,seed:t.seed+1+(Date.now()&255)>>>0})),C.patchUi({status:"new floater and idol seeds"})}async function Ff(t){const e=C.project,{width:i,height:r}=lr(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const n=await t.capture(e,e.playback.time,i,r,"image/png",.92),a=await kr(n,`print_${Date.now()}.png`);Ht(a,!0),C.patchUi({status:"printed the live frame as a new still"})}catch(n){C.patchUi({status:n instanceof Error?n.message:"print failed"})}}function Zn(t){C.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Qn(){Yl(`${C.project.name||"phosphene"}.phos.json`,Kl(C.project)),C.patchUi({status:"project downloaded"})}async function zf(t){const e=await t.text(),i=Zl(e);C.replace(i),C.patchUi({status:"project loaded — re-drop media if needed"})}function Of(){const t=prompt("Preset name",`look ${C.project.presets.length+1}`);if(!t)return;const e=fi(C.project,t);C.setProject(i=>({...i,presets:[...i.presets,e]}))}function er(t){const e=C.project.presets.find(i=>i.id===t);e&&(C.setProject(i=>ya(i,e)),C.patchUi({status:`preset ${e.name}`}))}function Hf(){const t=wa(C.project.presets,C.project.seed+Date.now());if(!t){C.patchUi({status:"no presets saved"});return}er(t.id)}function Lf(t){const e=C.project.presets.find(i=>i.id===t);e&&C.setProject(i=>({...i,presets:[...i.presets,xa(e)]}))}function Uf(t){C.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Yn(){const t=C.state.ui,e=xe(C.project),i=Ot(e),r=t.selectedParam?.paramId;if(!e||!i||!r){C.patchUi({status:"select a numeric parameter first"});return}const n=i.params[r];if(typeof n!="number"){C.patchUi({status:"keyframes are numeric"});return}const a={id:Ee("kf"),time:C.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:r,value:n,easing:"smooth"};C.setProject(s=>({...s,keyframes:[...s.keyframes,a]})),C.patchUi({status:`key ${r} @ ${a.time.toFixed(2)}s`})}function Nf(){C.setProject(t=>({...t,keyframes:[]}))}async function Wf(){const t=C.project.sources.find(i=>i.id===C.state.ui.selectedSourceId);if(!t)return;const e=await As(t);e&&Ht(e,!0)}function Jn(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of C.project.sources)Tr(e);C.replace(vr()),C.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Df(){if(C.state.ui.generating)return;const t=C.state.ui.prompt.trim();if(!t){C.patchUi({status:"type a prompt first"});return}C.patchUi({generating:!0,status:"generating new image…"});try{const e=C.project.sources.find(l=>l.id===C.state.ui.selectedSourceId),i=C.state.ui.useSourceForGen;let r=[];const n=e?.frozenFrame||e?.bitmap||e?.video||null;i&&n&&(r=wf(n));const a=vf(t,r,i&&r.length>0),s=C.project.seed+Date.now()>>>0,o=await Sf({prompt:a,seed:s,width:C.project.exportSettings.width,height:C.project.exportSettings.height,onStatus:l=>C.patchUi({generating:!0,status:l},!1)}),c=await kr(o,`gen_${s}.jpg`);Ht(c,!0),C.patchUi({generating:!1,status:i&&r.length?"new image from prompt + source":"new image from prompt"})}catch(e){C.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let ai=!1,Ut=null;function qf(t,e){Ut=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny hot" data-act="rand-wacky" title="Outsider looks, idols, floaters, a new place">Rand wacky</button>
      <label class="check" title="Drop drifting colored shapes onto every layer when you hit Rand all">
        <input type="checkbox" id="inc-critters" /> floaters
      </label>
      <label class="check" title="Drop a dancing 3D figure in the middle when you hit Rand all">
        <input type="checkbox" id="inc-idol" /> idol
      </label>
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
        <p>A digital darkroom / video synth. Drop media, stack effects, randomize, feed the output back into itself.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> picks a new look each time — lush color/bloom mixed with outsider-art dirt. Keep the <em>floaters</em> box on to send stickers across the frame. <strong>Rand wacky</strong> stays pretty: cream/toy-pop looks, an idol + floaters, a calm place.</li>
          <li><strong>Idol</strong> is a small low-poly creature. Grow picks petals, a halo, antennae, a skirt, wings, horns, crystals, puff, or a quieter body. Coat tints the paint (cream, moss, sodium, night, candy, jelly, grape, ice, lava). Stamp it for a new seed — each stamp grows a different silhouette. Crowd → Mini army.</li>
          <li><strong>Stamp chaos</strong> rerolls floater + idol seeds and their kit/grow/coat — keeps the backdrop. <strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Backgrounds</strong> on the left rail: Plasma, Noise, Bars, plus Stars, Marsh, Oil, Paper, Cave, Stage, Sketch, Felt, Foil, Plush, Yarn, Sequins, Quilt, Cork, Gingham, Sprinkle, and Velvet. Stage is a candy toy-pop room. Sketch is a composition-notebook sticker album. The rest are textured toy-pop places — wool, wrapper, pile, knit, sparkle, patchwork, pin-board, picnic, frosting, crush pile. Click one to put that place on the picture. Rand all will swap these too. Drop an MP3 and fog/bloom/keys breathe with the mix.</li>
          <li><strong>Soundtrack</strong> — drop an MP3 (or wav/ogg/m4a). It does not replace your picture. Hit Play and the timeline follows the song; idols kick harder on the bass; floaters and places move with it. Exported clips are silent for now — the motion still follows the mix. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",jf(t),C.subscribe(()=>{ai||tr(t)}),tr(t)}async function $f(t=!1){if(Ut&&!C.state.ui.exporting){C.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),C.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await uf(Ut,C.project,C.project.playback.time,(i,r)=>{C.patchUi({status:`export ${i+1}/${r}`,exporting:!0},!1)},t);C.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){C.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function jf(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const r=i.dataset.act,n=i.dataset.id;if(r==="save"&&Qn(),r==="load"&&t.querySelector("#proj-file")?.click(),r==="scratch"&&Jn(),r==="imagine"&&Df(),r==="seed-"&&Zn(-1),r==="seed+"&&Zn(1),r==="rand-all"&&wt("all"),r==="rand-wacky"&&wt("all",!0),r==="stamp-chaos"&&Mf(),r==="reprint"&&Ut&&Ff(Ut),r==="rand-sel"&&wt("selected"),r==="rand-param"){const a=i.dataset.paramId,s=xe(C.project),o=Ot(s);a&&s&&o&&C.patchUi({selectedParam:{layerId:s.id,effectId:o.id,paramId:a}},!1),wt("param")}if(r==="help"&&C.patchUi({helpOpen:!C.state.ui.helpOpen}),r==="import"&&t.querySelector("#media-file")?.click(),r==="replace"&&t.querySelector("#replace-file")?.click(),r==="freeze"&&Wf(),r==="gen"){const a=i.dataset.kind??"plasma",s=mr(a);Ht(s,!0),C.patchUi({status:a==="critters"?"floaters on this layer":`place · ${a}`})}if(r==="stamp-critters"&&If(),r==="stamp-idol"&&Rf(),r==="add-layer"&&Ef(),r==="dup-layer"&&n&&Cf(n),r==="del-layer"&&n&&Bf(n),r==="sel-layer"&&n&&C.patchUi({selectedLayerId:n,selectedEffectId:C.project.layers.find(a=>a.id===n)?.effects[0]?.id??null}),r==="sel-fx"&&n&&C.patchUi({selectedEffectId:n}),r==="sel-src"&&n&&C.patchUi({selectedSourceId:n}),r==="bypass"&&n){const a=xe(C.project);a&&Pf(a.id,n)}if(r==="fx-up"&&n){const a=xe(C.project);a&&Kn(a.id,n,-1)}if(r==="fx-dn"&&n){const a=xe(C.project);a&&Kn(a.id,n,1)}if(r==="fx-del"&&n){const a=xe(C.project);a&&Af(a.id,n)}if(r==="key"&&Yn(),r==="key-clear"&&Nf(),r==="pst-save"&&Of(),r==="pst-rand"&&Hf(),r==="pst-load"&&n&&er(n),r==="pst-dup"&&n&&Lf(n),r==="pst-del"&&n&&Uf(n),r==="export"&&$f(),r==="clip"){const a=Math.max(1,Number(i.dataset.secs||4));C.setProject(s=>({...s,duration:Math.max(s.duration,a),exportSettings:{...s.exportSettings,duration:a,format:"mp4",fps:24,bitrate:Math.min(s.exportSettings.bitrate,8)}})),C.patchUi({status:`${a}s clip ready — hit Export`})}if(r==="exp-aspect"&&n){const a=Ki.find(s=>s.id===n);if(a){const s=qn(a.rw,a.rh,1280);C.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:s.width,height:s.height}}))}}if(r==="exp-aspect-src"){const a=C.project,s=xe(a),o=a.sources.find(d=>d.id===(s?.sourceId??a.sources[0]?.id)),c=o?.kind==="audio"?a.sources.find(d=>d.kind!=="audio"):o,l=ef(c?.width??1280,c?.height??720,1280);C.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:l.width,height:l.height}}))}if(r==="play"&&($t(),C.setProject(a=>({...a,playback:{...a.playback,playing:!a.playback.playing}}))),r==="use-src"&&n){if(C.project.sources.find(o=>o.id===n)?.kind==="audio")return;const s=xe(C.project);s&&Be(s.id,o=>({...o,sourceId:n}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(zf(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Yi(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Yi(i.files,!0),i.value=""),i.id==="quality"&&C.setProject(r=>({...r,quality:i.value})),i.id==="add-fx"&&(i.value&&Ji(i.value),i.value=""),i.id==="blend"){const r=xe(C.project);r&&Be(r.id,n=>({...n,blendMode:i.value}))}if(i.id==="mask-type"){const r=xe(C.project);r&&Be(r.id,n=>({...n,mask:{...n.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&er(i.value),i.id==="exp-format"&&C.setProject(r=>({...r,exportSettings:{...r.exportSettings,format:i.value}})),i.id==="play-mode"&&C.setProject(r=>({...r,playback:{...r.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&C.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&C.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,r=C.project;if(i.id==="gen-prompt"&&C.patchUi({prompt:i.value},!1),i.id==="gen-src"&&C.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&C.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&C.patchUi({includeIdol:i.checked}),i.id==="seed"&&C.setProject(n=>({...n,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&C.setProject(n=>({...n,randomAmount:Number(i.value)}),!1),i.id==="speed"&&C.setProject(n=>({...n,playback:{...n.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&C.setProject(n=>({...n,playback:{...n.playback,loop:i.checked}}),!1),i.id==="loop-close"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&C.setProject(n=>({...n,playback:{...n.playback,freeze:i.checked}}),!1),i.id==="time"&&C.setProject(n=>({...n,playback:{...n.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const n=xe(r);n&&Be(n.id,a=>({...a,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const n=xe(r);n&&Be(n.id,a=>({...a,enabled:i.checked}),!1)}for(const n of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${n}`&&C.setProject(a=>({...a,globalFeedback:{...a.globalFeedback,[n]:Number(i.value)}}),!1),i.id===`lfb-${n}`){const a=xe(r);a&&Be(a.id,s=>({...s,feedback:{...s.feedback,[n]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const n=xe(r),a=i.id.slice(3);n&&a in n.transform&&Be(n.id,s=>({...s,transform:{...s.transform,[a]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){ai=!0;const n=Vf(i.dataset.fxType||"",i.dataset.param),a=Gf(i,n);Lt(i.dataset.layer,i.dataset.fx,i.dataset.param,a,!1),C.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="exp-q"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{ai&&(ai=!1,tr(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),C.state.ui.dropActive||C.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&C.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),C.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Yi(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),$t(),C.setProject(r=>({...r,playback:{...r.playback,playing:!r.playback.playing}}))),(e.key==="r"||e.key==="R")&&wt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&wt("all",!0),(e.key==="k"||e.key==="K")&&Yn(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Jn()),e.key==="?"&&C.patchUi({helpOpen:!C.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Qn()))})}function Vf(t,e){return Fe(t)?.params.find(i=>i.id===e)}function Gf(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function tr(t){const{project:e,ui:i}=C.state,r=t.querySelector("#proj-name"),n=t.querySelector("#seed"),a=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");r&&document.activeElement!==r&&(r.value=e.name),n&&document.activeElement!==n&&(n.value=String(e.seed)),a&&(a.value=String(e.randomAmount)),s&&(s.value=e.quality);const o=t.querySelector("#top-export");o&&(o.disabled=i.exporting);const c=t.querySelector("#inc-critters");c&&(c.checked=i.includeCritters);const l=t.querySelector("#inc-idol");l&&(l.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),Xf(t.querySelector("#rail")),Kf(t.querySelector("#stack")),Qf(t.querySelector("#transport"))}function Xf(t){const e=C.project,i=C.state.ui;t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${Re(i.prompt)}</textarea>
    <label class="check"><input type="checkbox" id="gen-src" ${i.useSourceForGen?"checked":""}/> use selected source as reference</label>
    <button class="btn tiny acid" data-act="imagine" ${i.generating?"disabled":""}>${i.generating?"working…":"Generate"}</button>
    <button class="btn tiny" data-act="imagine" ${i.generating||!i.prompt.trim()?"disabled":""}>Again</button>
    <div class="status" style="margin-top:4px">Usually a few seconds. Again rolls a new seed. Does not overwrite the upload.</div>
    <div class="row" style="margin-top:6px">
      <button class="btn tiny" data-act="gen" data-kind="plasma">Plasma</button>
      <button class="btn tiny" data-act="gen" data-kind="noise">Noise</button>
      <button class="btn tiny" data-act="gen" data-kind="bars">Bars</button>
      <button class="btn tiny" data-act="gen" data-kind="gradient">Grad</button>
      <button class="btn tiny" data-act="gen" data-kind="checker">Check</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="stars">Stars</button>
      <button class="btn tiny acid" data-act="gen" data-kind="marsh">Marsh</button>
      <button class="btn tiny acid" data-act="gen" data-kind="oil">Oil</button>
      <button class="btn tiny acid" data-act="gen" data-kind="paper">Paper</button>
      <button class="btn tiny acid" data-act="gen" data-kind="cave">Cave</button>
      <button class="btn tiny acid" data-act="gen" data-kind="stage">Stage</button>
      <button class="btn tiny acid" data-act="gen" data-kind="sketch">Sketch</button>
      <button class="btn tiny acid" data-act="gen" data-kind="felt">Felt</button>
      <button class="btn tiny acid" data-act="gen" data-kind="foil">Foil</button>
      <button class="btn tiny acid" data-act="gen" data-kind="plush">Plush</button>
      <button class="btn tiny acid" data-act="gen" data-kind="yarn">Yarn</button>
      <button class="btn tiny acid" data-act="gen" data-kind="sequin">Sequins</button>
      <button class="btn tiny acid" data-act="gen" data-kind="quilt">Quilt</button>
      <button class="btn tiny acid" data-act="gen" data-kind="cork">Cork</button>
      <button class="btn tiny acid" data-act="gen" data-kind="gingham">Gingham</button>
      <button class="btn tiny acid" data-act="gen" data-kind="sprinkle">Sprinkle</button>
      <button class="btn tiny acid" data-act="gen" data-kind="velvet">Velvet</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="critters">Floaters</button>
      <button class="btn tiny acid" data-act="stamp-critters">Stamp floaters</button>
      <button class="btn tiny acid" data-act="stamp-idol">Stamp idol</button>
    </div>
    <div class="row">
      <button class="btn tiny hot" data-act="stamp-chaos">Stamp chaos</button>
      <button class="btn tiny" data-act="reprint">Print frame</button>
    </div>
    <label class="check"><input type="checkbox" id="inc-critters-rail" ${i.includeCritters?"checked":""}/> include floaters in Rand all</label>
    <label class="check"><input type="checkbox" id="inc-idol-rail" ${i.includeIdol?"checked":""}/> include idol in Rand all</label>
    <div class="status" style="margin-top:4px">Floaters Kit: Shapes, Toy pop. Idol Grow: petals, halo, antenna, skirt, wings, horns, crystal, puff, quiet. Coat: candy, jelly, grape, ice, lava. Places: Stage, Sketch, Felt, Foil, Plush, Yarn, Sequins, Quilt, Cork, Gingham, Sprinkle, Velvet. Stamp chaos rerolls overlays, not the backdrop.</div>
    <div style="margin-top:8px">
      ${e.sources.map(r=>{const n=r.kind==="audio"?`soundtrack · ${xt(r.duration||0)}`:`${r.kind} ${r.width}×${r.height}`,a=r.kind==="audio"?'<span class="status">mix</span>':`<button class="btn tiny" data-act="use-src" data-id="${r.id}">use</button>`;return`
        <div class="thumb ${r.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${r.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Re(r.name)}</b><span>${n}</span></div>
          ${a}
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
        <div class="hd"><span>${Re(r.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${r.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${r.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${r.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Kf(t){const e=C.project,i=xe(e),r=Ot(i),n=ga();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(a=>`
      <div class="layer ${a.id===i?.id?"on":""}" data-act="sel-layer" data-id="${a.id}">
        <div class="hd">
          <span class="name">${Re(a.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${a.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${a.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${Se("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${Is.map(a=>`<option value="${a}" ${a===i.blendMode?"selected":""}>${a}</option>`).join("")}</select>
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
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(a=>`<option ${i.mask.type===a?"selected":""} value="${a}">${a}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      ${i.effects.map((a,s)=>`
        <div class="fx ${a.id===r?.id?"on":""} ${a.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${a.id}">${s+1}. ${Re(Fe(a.typeId)?.name??a.typeId)}</span>
            <span>
              <button class="btn tiny" data-act="bypass" data-id="${a.id}">${a.enabled?"on":"off"}</button>
              <button class="btn tiny" data-act="fx-up" data-id="${a.id}">↑</button>
              <button class="btn tiny" data-act="fx-dn" data-id="${a.id}">↓</button>
              <button class="btn tiny" data-act="fx-del" data-id="${a.id}">x</button>
            </span>
          </div>
        </div>`).join("")}
      <select id="add-fx" class="addfx">
        <option value="">+ add effect</option>
        ${va.map(a=>{const s=n[a.id]??[];return s.length?`<optgroup label="${a.label}">${s.map(o=>`<option value="${o.id}">${o.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny acid" data-act="stamp-critters">stamp floaters</button>
        <button class="btn tiny acid" data-act="stamp-idol">stamp idol</button>
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${r?`
        <hr class="div" />
        <div class="sec">${Re(Fe(r.typeId)?.name??"params")} · ${Re(Fe(r.typeId)?.description??"")}</div>
        ${(Fe(r.typeId)?.params??[]).map(a=>Zf(i.id,r,a)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(a=>{a.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",a.getAttribute("data-fx-index")||"0")}),a.addEventListener("dragover",s=>s.preventDefault()),a.addEventListener("drop",s=>{s.preventDefault();const o=Number(s.dataTransfer?.getData("text/plain")),c=Number(a.getAttribute("data-fx-index"));!i||Number.isNaN(o)||Number.isNaN(c)||o===c||Be(i.id,l=>{const d=[...l.effects],[u]=d.splice(o,1);return d.splice(c,0,u),{...l,effects:d}})})})}function Zf(t,e,i){const r=e.params[i.id]??i.default,n=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${n} ${r?"checked":""}/> ${Re(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Re(i.label)}</span><input type="color" ${n} value="${Re(String(r))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Re(i.label)}</span>
      <select ${n}>${(i.options??[]).map(a=>`<option value="${a.value}" ${a.value===r?"selected":""}>${a.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Re(i.label)}</span>
    <input type="range" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(r)}" />
    <input type="number" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(r).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function Qf(t){const e=C.project,i=e.playback,r=e.exportSettings,n=C.state.ui.exporting,a=Math.max(e.duration,.1),s=i.time/a*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(o=>`<option ${i.mode===o?"selected":""} value="${o}">${o}</option>`).join("")}
        </select>
      </div>
      ${Se("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${xt(i.time)} / ${xt(a)}</span>
        <span class="status" id="status-line">${C.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(o=>`<div class="key" style="left:${o.time/a*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${s}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${a}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${Ki.map(o=>`<button class="btn tiny ${Jl(r.width,r.height)===o.id?"acid":""}" data-act="exp-aspect" data-id="${o.id}">${o.label}</button>`).join("")}
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
        ${[2,4,6,8].map(o=>`<button class="btn tiny ${Number(r.duration)===o?"acid":""}" data-act="clip" data-secs="${o}" ${n?"disabled":""}>${o}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="8" step="1" style="width:48px" value="${r.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${r.loopClose!==!1?"checked":""}/> close loop</label>
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${n?"disabled":""}>${n?"exporting…":"Export"}</button>
      </div>
    </div>
  `,t.querySelector("#timeline")?.addEventListener("click",o=>{const c=o.currentTarget.getBoundingClientRect(),l=(o.clientX-c.left)/c.width*a;C.setProject(d=>({...d,playback:{...d.playback,time:Math.max(0,l)}}))})}function Se(t,e,i,r,n,a){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${r}" max="${n}" step="${a}" value="${i}" />
    <input id="${t}" type="number" min="${r}" max="${n}" step="${a}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Re(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function xt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function ea(t,e){if(C.state.ui.exporting)return;const i=1,r=e.getBoundingClientRect(),n=Math.max(16,Math.floor(r.width*i)),a=Math.max(16,Math.floor(r.height*i));(t.width!==n||t.height!==a)&&(t.width=n,t.height=a)}function Yf(t,e,i){const r=t.querySelector("#hud");r&&(r.textContent=`PHOSPHENE  ${xt(i)}  ${e.toFixed(0)}FPS  ${C.project.quality.toUpperCase()}`);const n=Math.max(C.project.duration,.1),a=t.querySelector(".playhead");a&&(a.style.left=`${i/n*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${xt(i)} / ${xt(n)}`);const o=t.querySelector("#time");o&&document.activeElement!==o&&(o.value=String(i));const c=t.querySelector("#status-line");c&&(c.textContent=C.state.ui.status)}const ta=window;ta.__phospheneMark=!0;const ia=document.querySelector("#app");if(!ia)throw new Error("#app missing");const ir=ia,rr=document.createElement("canvas");async function Jf(){await new Promise(c=>requestAnimationFrame(()=>c()));let t;try{t=new xs(rr)}catch(c){const l=document.querySelector("#boot-note");l?l.textContent=`PHOSPHENE · plasma · ${c instanceof Error?c.message:"WebGL failed"}`:ir.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${c instanceof Error?c.message:String(c)}</p>
      </div>`;return}qf(ir,t),ta.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>ea(rr,e)).observe(e),ea(rr,e);let r=performance.now(),n=60,a=0,s=performance.now();function o(c){const l=Math.min(.08,(c-r)/1e3);r=c;const d=C.state.ui.exporting,u=C.project,y=Ha(u,u.playback.time),f=yr(u);if(!d&&u.playback.playing&&!u.playback.freeze)if(f?.audio&&u.playback.mode==="forward"){vi(f.audio,u.playback);const g=f.audio.currentTime;Number.isFinite(g)&&C.setProject(m=>({...m,playback:{...m.playback,time:g}}),!1)}else{let g=u.playback.time+l*y;const m=Math.max(u.duration,.001);u.playback.loop?g=(g%m+m)%m:g=Math.min(g,m),C.setProject(v=>({...v,playback:{...v.playback,time:g}}),!1),f?.audio&&vi(f.audio,{...u.playback,playing:!1,time:g})}else f?.audio&&vi(f.audio,{...u.playback,playing:!1});for(const g of C.project.sources)if(g.kind==="video"&&g.video&&!C.project.playback.freeze){const m=mi(C.project.playback.time,g.duration||g.video.duration||1,C.project.playback.mode,1,C.project.playback.loop);Ps(g,m,{playing:C.project.playback.playing,freeze:C.project.playback.freeze,mode:C.project.playback.mode,speed:C.project.playback.speed})}if(!d)try{t.render(C.project,C.project.playback.time)}catch(g){C.patchUi({status:g instanceof Error?g.message:"render error"},!1)}a++,c-s>400&&(n=a*1e3/(c-s),s=c,a=0),Yf(ir,n,C.project.playback.time),requestAnimationFrame(o)}requestAnimationFrame(o)}Jf()})();

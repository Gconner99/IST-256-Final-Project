(function(){"use strict";function Ce(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const cn=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ln=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],fn=[{id:"analog",name:"Cathode",category:"analog",description:"Cassette wrap: scanlines, tracking, chroma crawl, ghost",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"chroma",label:"Chroma crawl",kind:"float",min:0,max:1,step:.01,default:.22},{id:"ghost",label:"Ghost",kind:"float",min:0,max:1,step:.01,default:.18},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_mixScan;
uniform float u_tracking;
uniform float u_noise;
uniform float u_flicker;
uniform float u_weave;
uniform float u_chroma;
uniform float u_ghost;
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec2 p = uv;
  p.x += sin(uv.y * 40.0 + uTime * 8.0) * u_weave * (0.01 + u_bass * 0.008);
  float band = step(0.97 - u_bass * 0.08, hash21(vec2(floor(uTime * 9.0), 3.2)));
  p.x += band * (hash21(vec2(uv.y * 80.0, uTime)) - 0.5) * u_tracking * 0.12;
  float crawl = u_chroma * (0.004 + 0.004 * sin(uv.y * 72.0 + uTime * 2.4));
  float r = sampleSrc(p + vec2(crawl, 0.0)).r;
  float g = sampleSrc(p).g;
  float b = sampleSrc(p - vec2(crawl, 0.0)).b;
  vec3 c = vec3(r, g, b);
  vec3 ghost = sampleSrc(p - vec2(0.01 + u_ghost * 0.018, 0.0)).rgb;
  c = mix(c, c + ghost * 0.45, u_ghost * 0.35);
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
`}],dn=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],un=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],sr=`
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
`,or=`
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
`,hn=`
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
`,mn=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,pn=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,cr=`
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
`,ci={id:"dancer",name:"Idol",category:"wacky",description:"A seed-grown totem with a graphic face. Wild stays a simple body that dances. Grow adds petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp for a new seed. Drop an MP3 and they kick to the bass. Mini army fills the frame with tiny ones in sync.",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"wings",label:"Wings"},{value:"horns",label:"Horns"},{value:"crystal",label:"Crystal"},{value:"puff",label:"Puff"},{value:"spikes",label:"Spikes"},{value:"sprout",label:"Sprout"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"},{value:"jelly",label:"Jelly"},{value:"grape",label:"Grape"},{value:"ice",label:"Ice"},{value:"lava",label:"Lava"},{value:"slime",label:"Slime"},{value:"gold",label:"Gold"},{value:"ink",label:"Ink"},{value:"soda",label:"Soda"},{value:"banana",label:"Banana"},{value:"berry",label:"Berry"},{value:"mint",label:"Mint"},{value:"cobalt",label:"Cobalt"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${cr}${or}`,applyGlsl:mn};function gn(t){return t?{...ci,extraUniforms:`${cr}${or}${hn}`,applyGlsl:pn}:ci}const vn=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music (notes, piano, guitar, trumpet, drums, sax, boombox), chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${sr}
`,applyGlsl:`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`},ci],lr=[...cn,...ln,...fn,...dn,...un,...vn],bn=new Map(lr.map(t=>[t.id,t]));function ze(t){return bn.get(t)}function yn(){const t={};for(const e of lr)(t[e.category]??=[]).push(e);return t}const wn=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function Ze(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function $t(t,e,i){return Math.min(i,Math.max(e,t))}function Ne(t,e=16){return Math.max(e,Math.round(t)&-2)}function fr(t,e,i,r){const a=Math.min(1,i/Math.max(t,1),r/Math.max(e,1));return{width:Ne(t*a),height:Ne(e*a)}}function li(t,e,i){return t+(e-t)*i}function xn(t){const e=$t(t,0,1);return e*e*(3-2*e)}function fi(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(r=>({...r,sourceId:null,effects:r.effects.map(a=>({...a,params:{...a.params}})),transform:{...r.transform},mask:{...r.mask,rect:{...r.mask.rect},center:{...r.mask.center}},feedback:{...r.feedback}})),keyframes:t.keyframes.map(r=>({...r})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Ce("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function _n(t,e){const i=e.data,r=t.sources.map(n=>n.id),a=i.layers.map((n,s)=>({...n,id:n.id,sourceId:n.sourceId&&r.includes(n.sourceId)?n.sourceId:r[Math.min(s,r.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:a,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function kn(t,e){if(t.length===0)return null;const i=Ze(e);return t[Math.floor(i()*t.length)]}function Sn(t){return{...t,id:Ce("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const at=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],xt=[{name:"void tape",mood:"lush",wacky:!0,stack:["grade","analog","bloom","dancer"],blend:"normal"},{name:"tile tape",mood:"mix",wacky:!0,stack:["grade","analog","grain","dancer"],blend:"normal"},{name:"corridor tape",mood:"outsider",wacky:!0,stack:["grade","analog","bloom","dancer"],blend:"normal"},{name:"moon tape",mood:"lush",wacky:!0,stack:["grade","analog","bloom","dancer"],blend:"normal"},{name:"snow tape",mood:"outsider",wacky:!0,stack:["analog","posterize","grain","dancer"],blend:"normal"},{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"toy recital",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"candy keys",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"boombox garden",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sticker book",mood:"mix",wacky:!0,stack:["grain","bloom","critters","dancer"],blend:"normal"},{name:"sketch idol",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"pencil garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"felt garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"foil wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"plush recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"yarn garden",mood:"lush",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"sequin wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"quilt recital",mood:"mix",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"cork garden",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"picnic wrap",mood:"lush",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"sprinkle recital",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"velvet lounge",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"confetti parade",mood:"mix",wacky:!0,stack:["grade","bloom","dancer"],blend:"normal"},{name:"disco idol",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","dancer"],blend:"screen"},{name:"terrazzo garden",mood:"lush",wacky:!0,stack:["grade","grain","dancer"],blend:"normal"},{name:"comic wrap",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function Tn(t,e,i,r){if(e.randomizable===!1)return i;if(e.kind==="bool")return r<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return r<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(d=>{const u=parseInt(d.slice(1),16),y=u>>16&255,f=u>>8&255,g=u&255,m=v=>$t(Math.round(li(v,t()*255,r)),0,255);return`#${[m(y),m(f),m(g)].map(v=>v.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const a=e.min??0,n=e.max??1,s=typeof i=="number"?i:Number(e.default),o=a+t()*(n-a),c=li(s,o,Math.max(r,.35));return e.kind==="int"?Math.round(c):c}function di(t,e,i,r){const a=ze(t.typeId);if(!a)return t;const n=Ze(e),s={...t.params};for(const o of a.params)r&&o.id!==r||(s[o.id]=Tn(n,o,s[o.id]??o.default,$t(i,0,1)));return{...t,params:s}}function Cn(t,e,i,r=!1,a){const n=t.effects.map((s,o)=>r&&a&&s.id!==a?s:di(s,e+o*997,i));return{...t,effects:n}}function ui(t,e,i){const r=ze(t),a={};if(r)for(const n of r.params)a[n.id]=n.default;return di({id:Ce("fx"),typeId:t,enabled:!0,params:a},e,i)}function hi(t,e,i,r){const a={...t.params};if(t.typeId==="grade"&&(e==="lush"?(a.saturation=.18+r()*.42,a.brightness=-.04+r()*.16,a.contrast=.06+r()*.22,a.gamma=.82+r()*.35,a.hue=(r()-.5)*.18,a.exposure=-.15+r()*.4):e==="outsider"?(a.saturation=r()>.5?-.35+r()*.3:.4+r()*.5,a.contrast=.2+r()*.55,a.gamma=.55+r()*1.1,a.hue=(r()-.5)*.7):(a.saturation=.05+r()*.5,a.contrast=.1+r()*.35,a.hue=(r()-.5)*.35)),t.typeId==="duotone"&&(a.shadow=i.shadow,a.highlight=i.highlight,a.amount=e==="lush"?.45+r()*.4:.7+r()*.3),t.typeId==="grain"&&(a.leakColor=i.leak,a.leak=e==="lush"?.18+r()*.35:r()*.22,a.grain=e==="lush"?.12+r()*.22:.2+r()*.4),t.typeId==="bloom"&&(a.amount=e==="outsider"?.15+r()*.3:.4+r()*.45,a.halation=e==="lush"?.22+r()*.4:r()*.25,a.size=1.4+r()*2.2),t.typeId==="warp"&&(a.amount=e==="lush"?.012+r()*.04:.04+r()*.12),t.typeId==="chroma"&&(a.amount=e==="lush"?.002+r()*.006:.006+r()*.02),t.typeId==="analog"&&(a.mixScan=e==="lush"?r()*.22:.22+r()*.4,a.noise=e==="lush"?r()*.1:.12+r()*.28,a.chroma=e==="lush"?.1+r()*.18:.18+r()*.32,a.ghost=e==="lush"?.08+r()*.16:.14+r()*.28,a.tracking=e==="outsider"?.12+r()*.3:r()*.16),t.typeId==="posterize"&&(a.levels=3+Math.floor(r()*6),a.dither=.08+r()*.35),t.typeId==="threshold"&&(a.mix=.35+r()*.45,a.soft=.04+r()*.18),t.typeId==="critters"){a.count=e==="lush"?3+Math.floor(r()*3):4+Math.floor(r()*4),a.size=.85+r()*.7,a.amount=.7+r()*.3,a.speed=.7+r()*1.3,a.seed=1+Math.floor(r()*9998);const n=r();e==="lush"?a.kit=n>.72?"votives":n>.48?"charms":n>.22?"shapes":"toy pop":e==="mix"?a.kit=n>.62?"moths":n>.4?"toy pop":n>.2?"mix":"shapes":a.kit=n>.55?"toy pop":n>.28?"mix":"shapes"}if(t.typeId==="dancer"){a.size=.12+r()*.06,a.count=1,a.crowd="normal",a.place="center";const n=r();a.move=n>.86?"drift":"dance",a.echo=.28+r()*.4,a.amount=1,a.speed=a.move==="dance"?.7+r()*1.1:.32+r()*.55,a.seed=1+Math.floor(r()*9998);const s=r();a.grow=s>.84?"quiet":s>.7?"horns":"wild";const o=r();e==="lush"?a.coat=o>.48?"cream":o>.24?"moss":"wild":e==="mix"?a.coat=o>.5?"sodium":o>.26?"cream":"wild":a.coat=o>.55?"night":"wild"}return t.typeId==="kaleido"&&(a.segments=e==="lush"?4+Math.floor(r()*4):5+Math.floor(r()*8),a.zoom=.7+r()*.8),t.typeId==="channels"&&(a.tint=i.leak,a.tintAmt=e==="lush"?.12+r()*.28:r()*.45),t.typeId==="key"&&(a.lo=.1+r()*.22,a.hi=.5+r()*.35,a.amount=.45+r()*.4,a.invert=r()>.72),t.typeId==="dropout"&&(a.amount=.28+r()*.4,a.rate=.18+r()*.4,a.tear=e==="outsider"?.3+r()*.5:r()*.28),{...t,params:a}}function En(t,e="mix"){const i=Ze(t>>>0);return hi(ui("critters",t,.85),e,at[t%at.length],i)}function Bn(t,e="mix"){const i=Ze(t>>>0);return hi(ui("dancer",t,.85),e,at[t%at.length],i)}function dr(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="dancer")?e:{...e,effects:[...e.effects,Bn(t.seed+i*4243,"mix")]})}}function ur(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="critters")?e:{...e,effects:[...e.effects,En(t.seed+i*7919,"mix")]})}}function hr(){return xt.filter(t=>t.wacky&&t.name.endsWith(" tape"))}function An(t,e,i,r=!1){const a=Ze(e>>>0),n=r?hr():xt,s=n[Math.floor(a()*n.length)]??xt[0],o=at[Math.floor(a()*at.length)];let c=s.stack.filter(u=>ze(u));r&&!c.includes("analog")&&(c=["analog",...c]),r&&!c.includes("dancer")&&(c=[...c,"dancer"]),c=c.filter((u,y)=>c.indexOf(u)===y).slice(0,5);const l=c.map((u,y)=>hi(ui(u,e+y*997,i),s.mood,o,a));if(s.name==="toy pop"||s.name==="candy idol"||s.name==="flower drift"||s.name==="chapel idol"||s.name==="cream garden"||s.name==="charm lamp"||s.name==="toy recital"||s.name==="candy keys"||s.name==="boombox garden"||s.name==="sticker book"||s.name==="sketch idol"||s.name==="pencil garden"||s.name==="felt garden"||s.name==="foil wrap"||s.name==="plush recital"||s.name==="yarn garden"||s.name==="sequin wrap"||s.name==="quilt recital"||s.name==="cork garden"||s.name==="picnic wrap"||s.name==="sprinkle recital"||s.name==="velvet lounge"||s.name==="confetti parade"||s.name==="disco idol"||s.name==="terrazzo garden"||s.name==="comic wrap")for(const u of l)u.typeId==="critters"&&(s.name==="candy idol"?u.params.kit="mix":s.name==="cream garden"||s.name==="chapel idol"?u.params.kit="votives":s.name==="charm lamp"?u.params.kit="charms":u.params.kit="toy pop"),u.typeId==="dancer"&&(u.params.move="float",u.params.speed=.35+a()*.45,(s.name==="chapel idol"||s.name==="flower drift")&&(u.params.grow=s.name==="chapel idol"?"halo":"petals",u.params.coat="cream"),s.name==="candy keys"&&(u.params.grow="petals",u.params.coat="candy"),(s.name==="sticker book"||s.name==="pencil garden")&&(u.params.grow=s.name==="pencil garden"?"quiet":"wings",u.params.coat="cream"),s.name==="sketch idol"&&(u.params.grow="horns",u.params.coat="moss"),s.name==="felt garden"&&(u.params.grow="petals",u.params.coat="cream"),s.name==="plush recital"&&(u.params.grow="wings",u.params.coat="candy"),s.name==="yarn garden"&&(u.params.grow="petals",u.params.coat="cream"),s.name==="quilt recital"&&(u.params.grow="skirt",u.params.coat="moss"),s.name==="cork garden"&&(u.params.grow="crystal",u.params.coat="cream"),s.name==="sprinkle recital"&&(u.params.grow="puff",u.params.coat="jelly"),s.name==="velvet lounge"&&(u.params.grow="halo",u.params.coat="grape"),s.name==="confetti parade"&&(u.params.grow="spikes",u.params.coat="candy"),s.name==="disco idol"&&(u.params.grow="sprout",u.params.coat="gold"),s.name==="terrazzo garden"&&(u.params.grow="crystal",u.params.coat="slime"),s.name==="comic wrap"&&(u.params.grow="antenna",u.params.coat="ink"));if(s.name.endsWith(" tape"))for(const u of l)u.typeId==="dancer"&&(u.params.move="dance",u.params.grow="wild",u.params.speed=.7+a()*.9);const d=r||s.mood==="lush"?.08+a()*.16:.04+a()*.22;return{...t,blendMode:s.blend??"normal",opacity:.88+a()*.12,effects:l,feedback:{...t.feedback,amount:d,opacity:.45+a()*.3,scale:1.005+a()*.03,rotation:(a()-.5)*.04,distortion:s.mood==="outsider"?a()*.28:a()*.1}}}function mr(t,e,i,r,a,n=!1){const s=Math.max(t.randomAmount,e==="all"?.75:0),o=t.seed>>>0,c=Ze(o^2654435769),l=t.layers.map((w,S)=>e==="selected"&&w.id!==i?w:e==="param"?w.id!==i?w:{...w,effects:w.effects.map(T=>T.id===r&&a?di(T,o+S*13,Math.max(s,.55),a):T)}:e==="all"?An(w,o+S*7919,s,n):Cn(w,o+S*7919,s,!0,r)),d=n?["void","tile","corridor","moon","snow"]:["plasma","noise","stars","marsh","cave","void","tile","corridor","moon","snow","stage","sketch"],u=Ze(o+0*7919>>>0),y=n?hr():xt,f=y[Math.floor(u()*y.length)]??xt[0],m={"void tape":{generator:"void",a:"#120814",b:"#c9a06a"},"tile tape":{generator:"tile",a:"#1a1024",b:"#e8d2a8"},"corridor tape":{generator:"corridor",a:"#081018",b:"#7aa2ff"},"moon tape":{generator:"moon",a:"#060814",b:"#f0e0c0"},"snow tape":{generator:"snow",a:"#0a0a0c",b:"#d8d0c4"},"toy recital":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"candy keys":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"boombox garden":{generator:"stage",a:"#ff8ab8",b:"#7ad8ff"},"sticker book":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"pencil garden":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"sketch idol":{generator:"sketch",a:"#efe4c8",b:"#c45c66"},"felt garden":{generator:"felt",a:"#f0d4c4",b:"#7ec9c0"},"foil wrap":{generator:"foil",a:"#ff7ad2",b:"#7ae8ff"},"plush recital":{generator:"plush",a:"#f09ab8",b:"#7ed8c4"},"yarn garden":{generator:"yarn",a:"#f4b8d0",b:"#7ed8c4"},"sequin wrap":{generator:"sequin",a:"#ff6ad8",b:"#7ae8ff"},"quilt recital":{generator:"quilt",a:"#f2c48a",b:"#8a6ad8"},"cork garden":{generator:"cork",a:"#c48a5a",b:"#e87890"},"picnic wrap":{generator:"gingham",a:"#f4e6e4",b:"#d44c66"},"sprinkle recital":{generator:"sprinkle",a:"#ffd6e8",b:"#7ad8ff"},"velvet lounge":{generator:"velvet",a:"#6a2048",b:"#e878a0"},"confetti parade":{generator:"confetti",a:"#ff7ab8",b:"#7ae8ff"},"disco idol":{generator:"disco",a:"#2a1038",b:"#ffd86a"},"terrazzo garden":{generator:"terrazzo",a:"#e8d8cc",b:"#d45c78"},"comic wrap":{generator:"comic",a:"#fff4a8",b:"#2a1810"}}[f.name],v=t.sources.map((w,S)=>{if(e!=="all"||w.kind!=="generator")return w;const T=Ze(o+S*131),E=at[Math.floor(T()*at.length)],O=n?T()>.78:T()>.4,I=m?m.generator:O?w.generator:d[Math.floor(T()*d.length)];return{...w,generator:I,colorA:m?m.a:E.inkA,colorB:m?m.b:E.inkB}}),b=e==="all"?{...t.globalFeedback,amount:.05+c()*.22,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:l,sources:v,globalFeedback:b}}function In(t){const e=t.seed+7919>>>0,i=Ze(e^2246822507),r=["shapes","toy pop","votives","moths","charms"],a=["wild","wild","wild","quiet","horns","petals","halo"],n=["wild","cream","moss","sodium","night","candy","jelly","grape","ice","lava","slime","gold","ink","soda","banana","berry","mint","cobalt"];let s={...t,seed:e,layers:t.layers.map(o=>({...o,effects:o.effects.map(c=>c.typeId==="critters"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),kit:r[Math.floor(i()*r.length)]}}:c.typeId==="dancer"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),grow:a[Math.floor(i()*a.length)],coat:n[Math.floor(i()*n.length)]}}:c)}))};return s=ur(s),s=dr(s),s}const mi=["void","tile","corridor","moon","snow"],pr={void:{a:"#120814",b:"#c9a06a"},tile:{a:"#1a1024",b:"#e8d2a8"},corridor:{a:"#081018",b:"#7aa2ff"},moon:{a:"#060814",b:"#f0e0c0"},snow:{a:"#0a0a0c",b:"#d8d0c4"}};function Pn(t){return{...t,seed:t.seed+1>>>0,sources:t.sources.map(e=>{if(e.kind!=="generator")return e;const i=e.generator??"void",r=mi.indexOf(i),a=mi[(r<0?0:r+1)%mi.length],n=pr[a]??pr.void;return{...e,generator:a,name:a.toUpperCase(),colorA:n.a,colorB:n.b}})}}function Rn(){return{x:0,y:0,scale:1,rotation:0}}function Mn(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function gr(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function zn(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Fn(){return{width:960,height:540,fps:24,duration:8,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const On={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"},stage:{a:"#ff8ab8",b:"#7ad8ff"},sketch:{a:"#efe4c8",b:"#c45c66"},felt:{a:"#f0d4c4",b:"#7ec9c0"},foil:{a:"#ff7ad2",b:"#7ae8ff"},plush:{a:"#f09ab8",b:"#7ed8c4"},yarn:{a:"#f4b8d0",b:"#7ed8c4"},sequin:{a:"#ff6ad8",b:"#7ae8ff"},quilt:{a:"#f2c48a",b:"#8a6ad8"},cork:{a:"#c48a5a",b:"#e87890"},gingham:{a:"#f4e6e4",b:"#d44c66"},sprinkle:{a:"#ffd6e8",b:"#7ad8ff"},velvet:{a:"#6a2048",b:"#e878a0"},confetti:{a:"#ff7ab8",b:"#7ae8ff"},disco:{a:"#2a1038",b:"#ffd86a"},terrazzo:{a:"#e8d8cc",b:"#d45c78"},comic:{a:"#fff4a8",b:"#2a1810"},void:{a:"#120814",b:"#c9a06a"},tile:{a:"#1a1024",b:"#e8d2a8"},corridor:{a:"#081018",b:"#7aa2ff"},moon:{a:"#060814",b:"#f0e0c0"},snow:{a:"#0a0a0c",b:"#d8d0c4"}};function vr(t="plasma"){const e=On[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};return{id:Ce("src"),name:t==="critters"?"FLOATERS":t==="stage"?"STAGE":t==="sketch"?"SKETCH":t?t.toUpperCase():"SIGNAL",kind:"generator",generator:t??"plasma",colorA:e.a,colorB:e.b,width:1280,height:720,duration:0}}function br(t){const e=ze(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const r of e.params)i[r.id]=r.default;return{id:Ce("fx"),typeId:t,enabled:!0,params:i}}function yr(t,e,i=[]){return{id:Ce("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Rn(),effects:i.map(br),mask:Mn(),feedback:gr()}}function wr(){const t=vr("plasma"),e=yr("SIGNAL",t.id,["grade","analog","bloom","grain"]);e.effects.forEach(a=>{a.typeId==="grade"&&(a.params.saturation=.22,a.params.contrast=.12,a.params.gamma=.92),a.typeId==="analog"&&(a.params.mixScan=.22,a.params.chroma=.16,a.params.ghost=.12,a.params.tracking=.08,a.params.noise=.08),a.typeId==="bloom"&&(a.params.amount=.42,a.params.halation=.28),a.typeId==="grain"&&(a.params.grain=.16,a.params.leak=.2)});const i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"preview",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:zn(),globalFeedback:{...gr(),amount:.18,opacity:.55,scale:1.01},exportSettings:Fn(),presets:[]},r=mr({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[fi(i,"factory · signal"),fi(r,"factory · scramble")],i}function xr(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!0,includeIdol:!0,exporting:!1}}class Hn{state;listeners=new Set;constructor(e=wr()){this.state={project:e,ui:xr(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...xr(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const C=new Hn;function pi(t,e,i,r,a){if(e<=0)return 0;const n=t*Math.max(.01,r);if(i==="random")return Math.floor(Math.abs(Math.sin(n*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let s=n;if(i==="reverse"&&(s=-n),i==="pingpong"){const o=e*2,c=(s%o+o)%o;return c<=e?c:o-c}return a?(s%e+e)%e:$t(s,0,e)}function Ln(t,e,i,r,a){return t.filter(n=>n.layerId===e&&n.target===i&&n.paramId===r&&(i!=="effect"||n.effectId===a)).sort((n,s)=>n.time-s.time)}function Un(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const r=t[t.length-1];if(e>=r.time)return r.value;for(let a=0;a<t.length-1;a++){const n=t[a],s=t[a+1];if(e>=n.time&&e<=s.time){const o=s.time-n.time||1;let c=(e-n.time)/o;return(s.easing==="smooth"||n.easing==="smooth")&&(c=xn(c)),li(n.value,s.value,c)}}return i}function nt(t,e,i,r,a,n,s){const o=Ln(t.keyframes,e,i,r,s);return Un(o,n,a)}function Nn(t,e,i){const r={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(a=>({...a,params:{...a.params}}))};r.opacity=nt(t,e.id,"layer","opacity",e.opacity,i),r.transform.x=nt(t,e.id,"layer","x",e.transform.x,i),r.transform.y=nt(t,e.id,"layer","y",e.transform.y,i),r.transform.scale=nt(t,e.id,"layer","scale",e.transform.scale,i),r.transform.rotation=nt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const a of Object.keys(r.feedback))r.feedback[a]=nt(t,e.id,"feedback",a,e.feedback[a],i);for(const a of r.effects)for(const[n,s]of Object.entries(a.params))typeof s=="number"&&(a.params[n]=nt(t,e.id,"effect",n,s,i,a.id));return r}function Wn(t,e){const i=t.layers[0]?.id??"";return nt(t,i,"playback","speed",t.playback.speed,e)}const Dn=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function $n(t){return(t.type??"").startsWith("audio/")||Dn.test(t.name)}function _r(t){return t.sources.find(e=>e.kind==="audio")}let _t=null,Ke=null,kt=null;const gi=new WeakSet;let St=0,Tt=0;function vi(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(_t||(_t=new t,Ke=_t.createAnalyser(),Ke.fftSize=256,Ke.smoothingTimeConstant=.72,Ke.connect(_t.destination),kt=new Uint8Array(Ke.frequencyBinCount)),_t):null}async function qt(){const t=vi();t&&t.state==="suspended"&&await t.resume().catch(()=>{})}function qn(t){const e=vi();if(!(!e||!Ke||gi.has(t)))try{e.createMediaElementSource(t).connect(Ke),gi.add(t)}catch{gi.add(t)}}async function jn(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto";const r=await new Promise((s,o)=>{i.addEventListener("loadedmetadata",()=>s(Number.isFinite(i.duration)?i.duration:0),{once:!0}),i.addEventListener("error",()=>o(new Error(`Audio failed: ${t.name}`)),{once:!0})});qn(i),await qt();let a=null;const n=vi();if(n)try{const s=await t.arrayBuffer();a=await n.decodeAudioData(s.slice(0))}catch{a=null}return{id:Ce("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:r,audio:i,pcm:a,objectUrl:e}}function Vn(t,e,i,r){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const a=(r%i+i)%i,n=Math.floor(a*e),s=Math.max(64,Math.floor(e*.046)),o=Math.max(0,Math.min(t.length-1,n)),c=Math.max(o+1,Math.min(t.length,n+s));let l=0;for(let v=o;v<c;v++)l+=t[v]*t[v];const d=Math.min(1,Math.sqrt(l/(c-o))*3.4),u=Math.max(s,Math.floor(e*.09)),y=Math.min(t.length,n+u);let f=0,g=0;for(let v=o;v<y;v+=8)f+=t[v]*t[v],g++;const m=Math.min(1,Math.sqrt(f/Math.max(1,g))*4.2);return{energy:d,bass:m}}function Gn(){if(!Ke||!kt)return null;Ke.getByteFrequencyData(kt);let t=0,e=0;const i=kt.length,r=Math.max(4,Math.floor(i*.12));for(let a=0;a<i;a++){const n=kt[a]/255;t+=n,a<r&&(e+=n)}return{energy:t/i,bass:e/r}}function Xn(t,e){let i=0,r=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const n=Vn(t.pcm.getChannelData(0),t.pcm.sampleRate,t.pcm.duration,e);i=n.energy,r=n.bass}else if(t?.kind==="audio"){const n=Gn();n&&(i=n.energy,r=n.bass)}const a=t?.kind==="audio"?.28:.18;return St+=(i-St)*a,Tt+=(r-Tt)*Math.min(a,.22),!t&&St<.002&&(St=0),!t&&Tt<.002&&(Tt=0),{energy:St,bass:Tt}}function bi(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const Zn=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,Kn=`#version 300 es
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
`,Qn=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,Yn=`#version 300 es
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
`,Jn=`#version 300 es
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
`,es=`#version 300 es
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
${sr}
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
`,ds=`#version 300 es
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
`,us=`#version 300 es
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
`,hs=`#version 300 es
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
`,ms=`#version 300 es
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
`,ps=`#version 300 es
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
`,gs=`#version 300 es
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
`,vs=`#version 300 es
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
`,bs=`#version 300 es
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
`,ys=`#version 300 es
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
vec3 voidFog(vec2 uv) {
  float t = uTime * 0.12;
  float h = uv.y + 0.04 * sin(uv.x * 3.0 + t);
  vec3 col = mix(uColorA, uColorB, smoothstep(0.18, 0.92, h));
  float fog = smoothstep(0.35, 0.78, h);
  col = mix(col, uColorB * 0.55, fog * 0.45);
  float horizon = 1.0 - smoothstep(0.0, 0.012, abs(h - 0.42));
  col = mix(col, mix(uColorA, uColorB, 0.5), horizon * 0.55);
  float blob = length(uv - vec2(0.72 + 0.02 * sin(t), 0.62)) - 0.08;
  col = mix(col, uColorB * 0.35, 1.0 - smoothstep(0.0, 0.04, blob));
  col += (hash21(uv * 8.0 + t) - 0.5) * 0.03;
  col += u_bass * 0.04 * uColorB;
  return col;
}
vec3 tileFloor(vec2 uv) {
  float t = uTime * 0.08;
  vec2 p = uv - vec2(0.5, 0.18);
  p.y = max(p.y, 0.02);
  vec2 fl = vec2(p.x / p.y, 0.28 / p.y);
  fl.y += t;
  vec2 cell = floor(fl * 6.0);
  float checker = mod(cell.x + cell.y, 2.0);
  vec3 a = mix(uColorA, vec3(0.12, 0.08, 0.16), 0.35);
  vec3 b = mix(uColorB, vec3(0.9, 0.82, 0.7), 0.2);
  vec3 col = mix(a, b, checker);
  float grout = max(abs(fract(fl.x * 6.0) - 0.5), abs(fract(fl.y * 6.0) - 0.5));
  col = mix(col, uColorA * 0.4, 1.0 - smoothstep(0.44, 0.48, grout));
  float fog = smoothstep(0.22, 0.02, uv.y);
  vec3 sky = mix(uColorB, uColorA, uv.y);
  col = mix(sky, col, 1.0 - fog);
  col += u_audio * 0.03;
  return col;
}
vec3 corridor(vec2 uv) {
  vec2 p = uv - 0.5;
  float z = 0.22 / max(abs(p.x) * 1.15 + 0.12, 0.04);
  float t = uTime * 0.15 + u_bass * 0.2;
  float stripes = abs(fract(z * 3.4 + t) - 0.5);
  vec3 wall = mix(uColorA, uColorB, smoothstep(0.1, 0.9, uv.y));
  wall = mix(wall, uColorB * 0.25, 1.0 - smoothstep(0.0, 0.12, stripes));
  float floorBand = step(uv.y, 0.38);
  vec3 fl = mix(uColorA * 0.5, uColorB * 0.35, floorBand);
  float vanish = 1.0 - smoothstep(0.0, 0.18, length(p * vec2(1.4, 1.0)));
  vec3 col = mix(wall, fl, floorBand * (1.0 - vanish * 0.4));
  col = mix(col, uColorB, vanish * 0.22);
  return col;
}
vec3 moonDisk(vec2 uv) {
  vec3 col = mix(uColorA, uColorB * 0.15, smoothstep(0.2, 1.0, uv.y));
  vec2 m = uv - vec2(0.62, 0.68);
  float d = length(m * vec2(1.0, 1.08));
  float moon = 1.0 - smoothstep(0.16, 0.175, d);
  vec3 disk = mix(uColorB, vec3(1.0, 0.92, 0.78), 0.35);
  col = mix(col, disk, moon);
  float ground = 1.0 - smoothstep(0.0, 0.08, uv.y - 0.18);
  col = mix(col, uColorA * 0.55, ground * 0.85);
  float star = step(0.992, hash21(floor(uv * 28.0) + uSeed));
  col += star * (0.35 + 0.2 * u_audio) * (1.0 - moon);
  return col;
}
vec3 tvSnow(vec2 uv) {
  float t = floor(uTime * 18.0);
  float n = hash21(uv * uScale * 90.0 + t + uSeed);
  float band = hash21(vec2(floor(uv.y * 48.0), t));
  vec3 col = mix(uColorA, uColorB, n);
  col = mix(col, vec3(n), 0.55);
  col = mix(col, uColorB, step(0.92, band) * 0.35);
  float roll = fract(uv.y + uTime * 0.07);
  col *= 0.85 + 0.15 * sin(roll * 40.0);
  col += u_bass * 0.08 * uColorB;
  return col;
}
void main() {
  vec3 col;
  if (uMode == 28) col = voidFog(vUv);
  else if (uMode == 29) col = tileFloor(vUv);
  else if (uMode == 30) col = corridor(vUv);
  else if (uMode == 31) col = moonDisk(vUv);
  else col = tvSnow(vUv);
  fragColor = vec4(col, 1.0);
}
`,ws=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,xs=`#version 300 es
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
`;class lt extends Error{}function _s(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new lt("WebGL2 is required for Phosphene.");return e}function kr(t,e,i){const r=t.createShader(e);if(!r)throw new lt("Unable to create shader");if(t.shaderSource(r,i),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(r)??"shader compile failed";throw t.deleteShader(r),new lt(a)}return r}class me{gl;prog;uniforms=new Map;constructor(e,i,r=Zn){this.gl=e;const a=kr(e,e.VERTEX_SHADER,r),n=kr(e,e.FRAGMENT_SHADER,i),s=e.createProgram();if(!s)throw new lt("Unable to create program");if(e.attachShader(s,a),e.attachShader(s,n),e.linkProgram(s),e.deleteShader(a),e.deleteShader(n),!e.getProgramParameter(s,e.LINK_STATUS)){const o=e.getProgramInfoLog(s)??"link failed";throw e.deleteProgram(s),new lt(o)}this.prog=s}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const r=this.loc(e);r&&this.gl.uniform1i(r,i)}f(e,i){const r=this.loc(e);r&&this.gl.uniform1f(r,i)}v2(e,i,r){const a=this.loc(e);a&&this.gl.uniform2f(a,i,r)}v3(e,i,r,a){const n=this.loc(e);n&&this.gl.uniform3f(n,i,r,a)}v4(e,i,r,a,n){const s=this.loc(e);s&&this.gl.uniform4f(s,i,r,a,n)}dispose(){this.gl.deleteProgram(this.prog)}}function yi(t){const e=t.createTexture();if(!e)throw new lt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function ks(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function Ss(t,e,i,r){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,r,0,t.RGBA,t.UNSIGNED_BYTE,null)}class ht{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new lt("Unable to create framebuffer");this.fbo=i,this.tex=yi(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,Ss(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Ae(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function Qe(t){t.drawArrays(t.TRIANGLES,0,3)}const Ts={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},Cs={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},Sr={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11,stage:12,sketch:13,felt:14,foil:15,plush:16,yarn:17,sequin:18,quilt:19,cork:20,gingham:21,sprinkle:22,velvet:23,confetti:24,disco:25,terrazzo:26,comic:27,void:28,tile:29,corridor:30,moon:31,snow:32};function Es(t){return`${Kn}
${t.extraUniforms??""}
${t.applyGlsl}
${Qn}`}function Bs(t,e){return new me(t,Es(e))}function Ct(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const mt=8;function Tr(t,e,i){return new ImageData(t,e,i)}function As(t,e,i){const r=t.find(n=>n.id===e);if(!r?.options)return Number(i)||0;const a=r.options.findIndex(n=>n.value===i);return a<0?0:a}class Is{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;stageProg=null;sketchProg=null;feltProg=null;foilProg=null;plushProg=null;yarnProg=null;sequinProg=null;quiltProg=null;corkProg=null;ginghamProg=null;sprinkleProg=null;velvetProg=null;confettiProg=null;discoProg=null;terrazzoProg=null;comicProg=null;satoRoomsProg=null;textureProg=null;black=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=_s(e),this.generatorProg=new me(this.gl,ts)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=mt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new ht(e),this.pong??=new ht(e),this.composite??=new ht(e),this.post??=new ht(e);this.ring.length<mt;)this.ring.push(new ht(e));this.copy??=new me(e,ws),this.blit??=new me(e,Jn),this.compositeProg??=new me(e,Yn),this.feedbackProg??=new me(e,es),this.textureProg??=new me(e,xs),this.black||(this.black=yi(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(n=>n.enabled);if(i.length!==1)return!0;const r=i[0];if(r.feedback.amount>.001||r.effects.some(n=>n.enabled))return!0;const a=e.sources.find(n=>n.id===r.sourceId);return!!(a&&a.kind!=="generator"&&a.kind!=="audio")}genProg(e){return e<6?this.generatorProg:e===12?(this.stageProg??=new me(this.gl,rs),this.stageProg):e===13?(this.sketchProg??=new me(this.gl,as),this.sketchProg):e===14?(this.feltProg??=new me(this.gl,ns),this.feltProg):e===15?(this.foilProg??=new me(this.gl,ss),this.foilProg):e===16?(this.plushProg??=new me(this.gl,os),this.plushProg):e===17?(this.yarnProg??=new me(this.gl,cs),this.yarnProg):e===18?(this.sequinProg??=new me(this.gl,ls),this.sequinProg):e===19?(this.quiltProg??=new me(this.gl,fs),this.quiltProg):e===20?(this.corkProg??=new me(this.gl,ds),this.corkProg):e===21?(this.ginghamProg??=new me(this.gl,us),this.ginghamProg):e===22?(this.sprinkleProg??=new me(this.gl,hs),this.sprinkleProg):e===23?(this.velvetProg??=new me(this.gl,ms),this.velvetProg):e===24?(this.confettiProg??=new me(this.gl,ps),this.confettiProg):e===25?(this.discoProg??=new me(this.gl,gs),this.discoProg):e===26?(this.terrazzoProg??=new me(this.gl,vs),this.terrazzoProg):e===27?(this.comicProg??=new me(this.gl,bs),this.comicProg):e>=28&&e<=32?(this.satoRoomsProg??=new me(this.gl,ys),this.satoRoomsProg):(this.generatorFull??=new me(this.gl,is),this.generatorFull)}compileType(e,i=!1){const r=e!=="dancer"?e:i?"dancer:mini":"dancer",a=this.effectProg.get(r);if(a)return a;const n=e==="dancer"?gn(i):ze(e);if(!n)return null;try{const s=Bs(this.gl,n);return this.effectProg.set(r,s),s}catch(s){return this.lastError=`${r}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const r=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(a=>!!a);for(const a of r)a.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new ht(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=yi(this.gl),this.sourceTex.set(e.id,i));const r=e.frozenFrame||e.bitmap||e.video;return r&&ks(this.gl,i,r),i}blitTo(e,i){const r=this.gl,a=this.copy;a&&(e.bind(),a.use(),Ae(r,0,i),a.i("uTex",0),Qe(r))}drawGenerator(e,i,r,a=77){const n=this.gl,s=Sr[i.generator??"plasma"]??0,o=this.genProg(s);e.bind(),o.use(),o.i("uMode",s),o.f("uTime",r);const c=i.colorA?Ct(i.colorA):[.07,.04,.1],l=i.colorB?Ct(i.colorB):[.92,.78,.55];o.v3("uColorA",c[0],c[1],c[2]),o.v3("uColorB",l[0],l[1],l[2]),o.f("uScale",6),o.f("uSeed",a),o.f("u_audio",this.audioEnergy),o.f("u_bass",this.audioBass),Qe(n)}drawTexture(e,i,r){const a=this.gl,n=this.textureProg;n&&(e.bind(),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),n.use(),Ae(a,0,i),n.i("uTex",0),n.v2("uTranslate",r.transform.x,r.transform.y),n.f("uScale",r.transform.scale),n.f("uRotation",r.transform.rotation),n.v2("uFit",1,1),Qe(a))}applyEffect(e,i,r,a,n,s,o,c,l){const d=ze(r.typeId),u=this.progFor(r);if(!d||!u){this.blitTo(e,i);return}const y=this.gl;e.bind(),u.use(),Ae(y,0,i),Ae(y,1,c),Ae(y,2,l),u.i("uTex",0),u.i("uFeedback",1),u.i("uHistory",2),u.i("uMask",3),u.v2("uResolution",e.w,e.h),u.v2("uTexel",1/e.w,1/e.h),u.f("uTime",n),u.f("uFrame",s),u.f("uQuality",o==="draft"?0:o==="preview"?1:2),u.f("u_audio",this.audioEnergy),u.f("u_bass",this.audioBass),u.v2("u_translate",a.transform.x,a.transform.y),u.f("u_scale",a.transform.scale),u.f("u_rotation",a.transform.rotation);const f=a.mask;u.i("u_maskType",Cs[f.type]??0),u.i("u_maskInvert",f.invert?1:0),u.f("u_maskSoftness",f.softness),u.v4("u_maskRect",f.rect.x,f.rect.y,f.rect.w,f.rect.h),u.v2("u_maskCenter",f.center.x,f.center.y),u.f("u_maskRadius",f.radius),u.f("u_maskGradientAngle",f.gradientAngle),u.f("u_maskNoiseScale",f.noiseScale);let g=1;for(const m of d.params){const v=r.params[m.id]??m.default,b=`u_${m.id}`;if(m.kind==="color"&&typeof v=="string"){const[w,S,T]=Ct(v);u.v3(b,w,S,T)}else m.kind==="bool"?u.f(b,v?1:0):m.kind==="enum"?u.f(b,As(d.params,m.id,v)):u.f(b,Number(v));m.id==="mix"&&(g=Number(v))}u.f("u_mix",g),Qe(y)}drawLite(e,i){const r=this.gl,a=e.layers.find(u=>u.enabled)??e.layers[0],n=a?e.sources.find(u=>u.id===a.sourceId):null,s=n&&n.kind!=="audio"?n:{generator:"plasma"};r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.canvas.width,this.canvas.height);const o=Sr[s.generator??"plasma"]??0,c=this.genProg(o);c.use(),c.i("uMode",o),c.f("uTime",i);const l=s.colorA?Ct(s.colorA):[.07,.04,.1],d=s.colorB?Ct(s.colorB):[.92,.78,.55];c.v3("uColorA",l[0],l[1],l[2]),c.v3("uColorB",d[0],d[1],d[2]),c.f("uScale",6),c.f("uSeed",e.seed),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Qe(r)}render(e,i,r){const a=this.gl,n=r?.quality??e.quality,s=Xn(_r(e),i);if(this.audioEnergy=s.energy,this.audioBass=s.bass,n!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const o=this.ping,c=this.pong,l=this.composite,d=this.post,u=this.blit,y=this.compositeProg,f=this.feedbackProg,g=n==="draft"?.5:1,m=Math.max(16,Math.floor((r?.width??this.canvas.width)*g)),v=Math.max(16,Math.floor((r?.height??this.canvas.height)*g));this.ensureSize(m,v),l.bind(),a.clearColor(.02,.02,.03,1),a.clear(a.COLOR_BUFFER_BIT);const b=e.globalFeedback,w=Math.max(0,Math.min(mt-1,Math.round(b.delay))),S=(this.ringIndex-1-w+mt*8)%mt,T=this.ring[S].tex,E=Math.floor(i*e.fps);for(const O of e.layers){if(!O.enabled)continue;const I=Nn(e,O,i),L=e.sources.find(_=>_.id===I.sourceId)??null;if(!L||L.kind==="generator"||L.kind==="audio"){const _=L&&L.kind!=="audio"?L:{generator:"plasma"};this.drawGenerator(o,_,i,e.seed)}else{const _=this.uploadSource(L);this.drawTexture(o,_,I)}let P=o,j=c;const Q=this.histFor(I.id);for(const _ of I.effects){if(!_.enabled)continue;this.applyEffect(j,P.tex,_,I,i,E,n,T,Q.tex);const z=P;P=j,j=z}if(I.feedback.amount>.001){j.bind(),f.use(),Ae(a,0,P.tex),Ae(a,1,Q.tex),f.i("uTex",0),f.i("uFeedback",1),f.f("uAmount",I.feedback.amount),f.f("uOpacity",I.feedback.opacity),f.f("uScale",I.feedback.scale),f.f("uRotation",I.feedback.rotation),f.f("uDistortion",I.feedback.distortion),f.f("uTime",i),Qe(a);const _=P;P=j,j=_}this.blitTo(d,l.tex),l.bind(),y.use(),Ae(a,0,d.tex),Ae(a,1,P.tex),y.i("uBase",0),y.i("uLayer",1),y.f("uOpacity",I.opacity),y.i("uBlend",Ts[I.blendMode]??0),y.v2("uResolution",m,v),Qe(a),this.blitTo(Q,P.tex)}b.amount>.001&&(d.bind(),f.use(),Ae(a,0,l.tex),Ae(a,1,T),f.i("uTex",0),f.i("uFeedback",1),f.f("uAmount",b.amount),f.f("uOpacity",b.opacity),f.f("uScale",b.scale),f.f("uRotation",b.rotation),f.f("uDistortion",b.distortion),f.f("uTime",i),Qe(a),this.blitTo(l,d.tex)),this.blitTo(this.ring[this.ringIndex],l.tex),this.ringIndex=(this.ringIndex+1)%mt,a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),u.use(),Ae(a,0,l.tex),u.i("uTex",0),u.f("uVignette",r?.vignette??.25),Qe(a)}capture(e,i,r,a,n="image/png",s=.92){const o=this.paintFrame(e,i,r,a);return new Promise((c,l)=>{o.toBlob(d=>{d?c(d):l(new Error("Export failed"))},n,s)})}paintFrame(e,i,r,a,n){const s=n??document.createElement("canvas");s.width!==r&&(s.width=r),s.height!==a&&(s.height=a);const o=s.getContext("2d",{alpha:!1});if(!o)throw new Error("No 2d context");this.render(e,i,{width:r,height:a,quality:"export",vignette:0}),this.gl.finish();const c=this.readPixels(this.width,this.height);if(this.width===r&&this.height===a)o.putImageData(Tr(c,r,a),0,0);else{const l=document.createElement("canvas");l.width=this.width,l.height=this.height,l.getContext("2d")?.putImageData(Tr(c,this.width,this.height),0,0),o.drawImage(l,0,0,r,a)}return s}readPixels(e,i){const r=this.gl,a=new Uint8Array(e*i*4);r.bindFramebuffer(r.FRAMEBUFFER,this.composite.fbo),r.readPixels(0,0,e,i,r.RGBA,r.UNSIGNED_BYTE,a),r.bindFramebuffer(r.FRAMEBUFFER,null);const n=new Uint8ClampedArray(new ArrayBuffer(a.length)),s=e*4;for(let o=0;o<i;o++)n.set(a.subarray((i-1-o)*s,(i-o)*s),o*s);return n}}const Ps=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,Rs=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function Ms(t){return t.type.startsWith("video/")||Rs.test(t.name)}function zs(t){return t.type.startsWith("image/")||Ps.test(t.name)}async function Fs(t){if(Ms(t))return Hs(t);if(zs(t))return Er(t);if($n(t))return jn(t);throw new Error(`Unsupported media: ${t.name}`)}async function Cr(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Er(i)}async function Er(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Ce("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await Os(e);return{id:Ce("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function Os(t){return new Promise((e,i)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>i(new Error("Image failed to load")),r.src=t})}function Hs(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((r,a)=>{const n=()=>{r({id:Ce("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",n,{once:!0}),i.addEventListener("error",()=>a(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function Ls(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Ce("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function Br(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function Us(t,e,i){if(t.kind!=="video"||!t.video)return;const r=t.video,a=r.duration;if(!Number.isFinite(a)||a<=0)return;const n=(e%a+a)%a,s=!!i?.playing&&!i?.freeze,o=(i?.mode??"forward")==="forward",c=i?.speed??1,l=s&&o&&c>.92&&c<1.08,d=Math.abs(r.currentTime-n);if(!s){if(r.paused||r.pause(),d>1/30)try{r.currentTime=n}catch{}return}if(l){if(r.playbackRate!==1&&(r.playbackRate=1),r.paused&&r.play().catch(()=>{}),d>.35)try{r.currentTime=n}catch{}return}r.paused||r.pause();const u=Math.max(.25,Math.min(4,Math.abs(c)||1));if(r.playbackRate!==u&&(r.playbackRate=u),d>1/30)try{r.currentTime=n}catch{}}const Ns=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ws(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Vt(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wi={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Ar;function Ds(){return Ar||(Ar=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(r,a,n){function s(l,d){if(!a[l]){if(!r[l]){var u=typeof Vt=="function"&&Vt;if(!d&&u)return u(l,!0);if(o)return o(l,!0);var y=new Error("Cannot find module '"+l+"'");throw y.code="MODULE_NOT_FOUND",y}var f=a[l]={exports:{}};r[l][0].call(f.exports,function(g){var m=r[l][1][g];return s(m||g)},f,f.exports,i,r,a,n)}return a[l].exports}for(var o=typeof Vt=="function"&&Vt,c=0;c<n.length;c++)s(n[c]);return s})({1:[function(i,r,a){var n=i("./utils"),s=i("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(c){for(var l,d,u,y,f,g,m,v=[],b=0,w=c.length,S=w,T=n.getTypeOf(c)!=="string";b<c.length;)S=w-b,u=T?(l=c[b++],d=b<w?c[b++]:0,b<w?c[b++]:0):(l=c.charCodeAt(b++),d=b<w?c.charCodeAt(b++):0,b<w?c.charCodeAt(b++):0),y=l>>2,f=(3&l)<<4|d>>4,g=1<S?(15&d)<<2|u>>6:64,m=2<S?63&u:64,v.push(o.charAt(y)+o.charAt(f)+o.charAt(g)+o.charAt(m));return v.join("")},a.decode=function(c){var l,d,u,y,f,g,m=0,v=0,b="data:";if(c.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var w,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===o.charAt(64)&&S--,c.charAt(c.length-2)===o.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=s.uint8array?new Uint8Array(0|S):new Array(0|S);m<c.length;)l=o.indexOf(c.charAt(m++))<<2|(y=o.indexOf(c.charAt(m++)))>>4,d=(15&y)<<4|(f=o.indexOf(c.charAt(m++)))>>2,u=(3&f)<<6|(g=o.indexOf(c.charAt(m++))),w[v++]=l,f!==64&&(w[v++]=d),g!==64&&(w[v++]=u);return w}},{"./support":30,"./utils":32}],2:[function(i,r,a){var n=i("./external"),s=i("./stream/DataWorker"),o=i("./stream/Crc32Probe"),c=i("./stream/DataLengthProbe");function l(d,u,y,f,g){this.compressedSize=d,this.uncompressedSize=u,this.crc32=y,this.compression=f,this.compressedContent=g}l.prototype={getContentWorker:function(){var d=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(d,u,y){return d.pipe(new o).pipe(new c("uncompressedSize")).pipe(u.compressWorker(y)).pipe(new c("compressedSize")).withStreamInfo("compression",u)},r.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,a){var n=i("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},a.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,a){var n=i("./utils"),s=(function(){for(var o,c=[],l=0;l<256;l++){o=l;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;c[l]=o}return c})();r.exports=function(o,c){return o!==void 0&&o.length?n.getTypeOf(o)!=="string"?(function(l,d,u,y){var f=s,g=y+u;l^=-1;for(var m=y;m<g;m++)l=l>>>8^f[255&(l^d[m])];return-1^l})(0|c,o,o.length,0):(function(l,d,u,y){var f=s,g=y+u;l^=-1;for(var m=y;m<g;m++)l=l>>>8^f[255&(l^d.charCodeAt(m))];return-1^l})(0|c,o,o.length,0):0}},{"./utils":32}],5:[function(i,r,a){a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(i,r,a){var n=null;n=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:n}},{lie:37}],7:[function(i,r,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=i("pako"),o=i("./utils"),c=i("./stream/GenericWorker"),l=n?"uint8array":"array";function d(u,y){c.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=y,this.meta={}}a.magic="\b\0",o.inherits(d,c),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,u.data),!1)},d.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(y){u.push({data:y,meta:u.meta})}},a.compressWorker=function(u){return new d("Deflate",u)},a.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,a){function n(f,g){var m,v="";for(m=0;m<g;m++)v+=String.fromCharCode(255&f),f>>>=8;return v}function s(f,g,m,v,b,w){var S,T,E=f.file,O=f.compression,I=w!==l.utf8encode,L=o.transformTo("string",w(E.name)),P=o.transformTo("string",l.utf8encode(E.name)),j=E.comment,Q=o.transformTo("string",w(j)),_=o.transformTo("string",l.utf8encode(j)),z=P.length!==E.name.length,p=_.length!==j.length,H="",ee="",W="",se=E.dir,V=E.date,ne={crc32:0,compressedSize:0,uncompressedSize:0};g&&!m||(ne.crc32=f.crc32,ne.compressedSize=f.compressedSize,ne.uncompressedSize=f.uncompressedSize);var M=0;g&&(M|=8),I||!z&&!p||(M|=2048);var R=0,ae=0;se&&(R|=16),b==="UNIX"?(ae=798,R|=(function(K,be){var Te=K;return K||(Te=be?16893:33204),(65535&Te)<<16})(E.unixPermissions,se)):(ae=20,R|=(function(K){return 63&(K||0)})(E.dosPermissions)),S=V.getUTCHours(),S<<=6,S|=V.getUTCMinutes(),S<<=5,S|=V.getUTCSeconds()/2,T=V.getUTCFullYear()-1980,T<<=4,T|=V.getUTCMonth()+1,T<<=5,T|=V.getUTCDate(),z&&(ee=n(1,1)+n(d(L),4)+P,H+="up"+n(ee.length,2)+ee),p&&(W=n(1,1)+n(d(Q),4)+_,H+="uc"+n(W.length,2)+W);var Y="";return Y+=`
\0`,Y+=n(M,2),Y+=O.magic,Y+=n(S,2),Y+=n(T,2),Y+=n(ne.crc32,4),Y+=n(ne.compressedSize,4),Y+=n(ne.uncompressedSize,4),Y+=n(L.length,2),Y+=n(H.length,2),{fileRecord:u.LOCAL_FILE_HEADER+Y+L+H,dirRecord:u.CENTRAL_FILE_HEADER+n(ae,2)+Y+n(Q.length,2)+"\0\0\0\0"+n(R,4)+n(v,4)+L+H+Q}}var o=i("../utils"),c=i("../stream/GenericWorker"),l=i("../utf8"),d=i("../crc32"),u=i("../signature");function y(f,g,m,v){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=m,this.encodeFileName=v,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(y,c),y.prototype.push=function(f){var g=f.meta.percent||0,m=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,c.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:m?(g+100*(m-v-1))/m:100}}))},y.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var g=this.streamFiles&&!f.file.dir;if(g){var m=s(f,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(f){this.accumulate=!1;var g=this.streamFiles&&!f.file.dir,m=s(f,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),g)this.push({data:(function(v){return u.DATA_DESCRIPTOR+n(v.crc32,4)+n(v.compressedSize,4)+n(v.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var f=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var m=this.bytesWritten-f,v=(function(b,w,S,T,E){var O=o.transformTo("string",E(T));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(b,2)+n(b,2)+n(w,4)+n(S,4)+n(O.length,2)+O})(this.dirRecords.length,m,f,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(f){this._sources.push(f);var g=this;return f.on("data",function(m){g.processChunk(m)}),f.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),f.on("error",function(m){g.error(m)}),this},y.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(f){var g=this._sources;if(!c.prototype.error.call(this,f))return!1;for(var m=0;m<g.length;m++)try{g[m].error(f)}catch{}return!0},y.prototype.lock=function(){c.prototype.lock.call(this);for(var f=this._sources,g=0;g<f.length;g++)f[g].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,a){var n=i("../compressions"),s=i("./ZipFileWorker");a.generateWorker=function(o,c,l){var d=new s(c.streamFiles,l,c.platform,c.encodeFileName),u=0;try{o.forEach(function(y,f){u++;var g=(function(w,S){var T=w||S,E=n[T];if(!E)throw new Error(T+" is not a valid compression method !");return E})(f.options.compression,c.compression),m=f.options.compressionOptions||c.compressionOptions||{},v=f.dir,b=f.date;f._compressWorker(g,m).withStreamInfo("file",{name:y,dir:v,date:b,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=u}catch(y){d.error(y)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,a){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var o in this)typeof this[o]!="function"&&(s[o]=this[o]);return s}}(n.prototype=i("./object")).loadAsync=i("./load"),n.support=i("./support"),n.defaults=i("./defaults"),n.version="3.10.1",n.loadAsync=function(s,o){return new n().loadAsync(s,o)},n.external=i("./external"),r.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,a){var n=i("./utils"),s=i("./external"),o=i("./utf8"),c=i("./zipEntries"),l=i("./stream/Crc32Probe"),d=i("./nodejsUtils");function u(y){return new s.Promise(function(f,g){var m=y.decompressed.getContentWorker().pipe(new l);m.on("error",function(v){g(v)}).on("end",function(){m.streamInfo.crc32!==y.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}r.exports=function(y,f){var g=this;return f=n.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),d.isNode&&d.isStream(y)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",y,!0,f.optimizedBinaryString,f.base64).then(function(m){var v=new c(f);return v.load(m),v}).then(function(m){var v=[s.Promise.resolve(m)],b=m.files;if(f.checkCRC32)for(var w=0;w<b.length;w++)v.push(u(b[w]));return s.Promise.all(v)}).then(function(m){for(var v=m.shift(),b=v.files,w=0;w<b.length;w++){var S=b[w],T=S.fileNameStr,E=n.resolve(S.fileNameStr);g.file(E,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:f.createFolders}),S.dir||(g.file(E).unsafeOriginalName=T)}return v.zipComment.length&&(g.comment=v.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,a){var n=i("../utils"),s=i("../stream/GenericWorker");function o(c,l){s.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}n.inherits(o,s),o.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(d){l.push({data:d,meta:{percent:0}})}).on("error",function(d){l.isPaused?this.generatedError=d:l.error(d)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,a){var n=i("readable-stream").Readable;function s(o,c,l){n.call(this,c),this._helper=o;var d=this;o.on("data",function(u,y){d.push(u)||d._helper.pause(),l&&l(y)}).on("error",function(u){d.emit("error",u)}).on("end",function(){d.push(null)})}i("../utils").inherits(s,n),s.prototype._read=function(){this._helper.resume()},r.exports=s},{"../utils":32,"readable-stream":16}],14:[function(i,r,a){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(i,r,a){function n(E,O,I){var L,P=o.getTypeOf(O),j=o.extend(I||{},d);j.date=j.date||new Date,j.compression!==null&&(j.compression=j.compression.toUpperCase()),typeof j.unixPermissions=="string"&&(j.unixPermissions=parseInt(j.unixPermissions,8)),j.unixPermissions&&16384&j.unixPermissions&&(j.dir=!0),j.dosPermissions&&16&j.dosPermissions&&(j.dir=!0),j.dir&&(E=b(E)),j.createFolders&&(L=v(E))&&w.call(this,L,!0);var Q=P==="string"&&j.binary===!1&&j.base64===!1;I&&I.binary!==void 0||(j.binary=!Q),(O instanceof u&&O.uncompressedSize===0||j.dir||!O||O.length===0)&&(j.base64=!1,j.binary=!0,O="",j.compression="STORE",P="string");var _=null;_=O instanceof u||O instanceof c?O:g.isNode&&g.isStream(O)?new m(E,O):o.prepareContent(E,O,j.binary,j.optimizedBinaryString,j.base64);var z=new y(E,_,j);this.files[E]=z}var s=i("./utf8"),o=i("./utils"),c=i("./stream/GenericWorker"),l=i("./stream/StreamHelper"),d=i("./defaults"),u=i("./compressedObject"),y=i("./zipObject"),f=i("./generate"),g=i("./nodejsUtils"),m=i("./nodejs/NodejsStreamInputAdapter"),v=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var O=E.lastIndexOf("/");return 0<O?E.substring(0,O):""},b=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},w=function(E,O){return O=O!==void 0?O:d.createFolders,E=b(E),this.files[E]||n.call(this,E,null,{dir:!0,createFolders:O}),this.files[E]};function S(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var O,I,L;for(O in this.files)L=this.files[O],(I=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&E(I,L)},filter:function(E){var O=[];return this.forEach(function(I,L){E(I,L)&&O.push(L)}),O},file:function(E,O,I){if(arguments.length!==1)return E=this.root+E,n.call(this,E,O,I),this;if(S(E)){var L=E;return this.filter(function(j,Q){return!Q.dir&&L.test(j)})}var P=this.files[this.root+E];return P&&!P.dir?P:null},folder:function(E){if(!E)return this;if(S(E))return this.filter(function(P,j){return j.dir&&E.test(P)});var O=this.root+E,I=w.call(this,O),L=this.clone();return L.root=I.name,L},remove:function(E){E=this.root+E;var O=this.files[E];if(O||(E.slice(-1)!=="/"&&(E+="/"),O=this.files[E]),O&&!O.dir)delete this.files[E];else for(var I=this.filter(function(P,j){return j.name.slice(0,E.length)===E}),L=0;L<I.length;L++)delete this.files[I[L].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var O,I={};try{if((I=o.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=I.type.toLowerCase(),I.compression=I.compression.toUpperCase(),I.type==="binarystring"&&(I.type="string"),!I.type)throw new Error("No output type specified.");o.checkSupport(I.type),I.platform!=="darwin"&&I.platform!=="freebsd"&&I.platform!=="linux"&&I.platform!=="sunos"||(I.platform="UNIX"),I.platform==="win32"&&(I.platform="DOS");var L=I.comment||this.comment||"";O=f.generateWorker(this,I,L)}catch(P){(O=new c("error")).error(P)}return new l(O,I.type||"string",I.mimeType)},generateAsync:function(E,O){return this.generateInternalStream(E).accumulate(O)},generateNodeStream:function(E,O){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(O)}};r.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,a){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,a){var n=i("./DataReader");function s(o){n.call(this,o);for(var c=0;c<this.data.length;c++)o[c]=255&o[c]}i("../utils").inherits(s,n),s.prototype.byteAt=function(o){return this.data[this.zero+o]},s.prototype.lastIndexOfSignature=function(o){for(var c=o.charCodeAt(0),l=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===c&&this.data[y+1]===l&&this.data[y+2]===d&&this.data[y+3]===u)return y-this.zero;return-1},s.prototype.readAndCheckSignature=function(o){var c=o.charCodeAt(0),l=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),y=this.readData(4);return c===y[0]&&l===y[1]&&d===y[2]&&u===y[3]},s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./DataReader":18}],18:[function(i,r,a){var n=i("../utils");function s(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var c,l=0;for(this.checkOffset(o),c=this.index+o-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=o,l},readString:function(o){return n.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},r.exports=s},{"../utils":32}],19:[function(i,r,a){var n=i("./Uint8ArrayReader");function s(o){n.call(this,o)}i("../utils").inherits(s,n),s.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,a){var n=i("./DataReader");function s(o){n.call(this,o)}i("../utils").inherits(s,n),s.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},s.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},s.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},s.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./DataReader":18}],21:[function(i,r,a){var n=i("./ArrayReader");function s(o){n.call(this,o)}i("../utils").inherits(s,n),s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,a){var n=i("../utils"),s=i("../support"),o=i("./ArrayReader"),c=i("./StringReader"),l=i("./NodeBufferReader"),d=i("./Uint8ArrayReader");r.exports=function(u){var y=n.getTypeOf(u);return n.checkSupport(y),y!=="string"||s.uint8array?y==="nodebuffer"?new l(u):s.uint8array?new d(n.transformTo("uint8array",u)):new o(n.transformTo("array",u)):new c(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,a){a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,a){var n=i("./GenericWorker"),s=i("../utils");function o(c){n.call(this,"ConvertWorker to "+c),this.destType=c}s.inherits(o,n),o.prototype.processChunk=function(c){this.push({data:s.transformTo(this.destType,c.data),meta:c.meta})},r.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,a){var n=i("./GenericWorker"),s=i("../crc32");function o(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(o,n),o.prototype.processChunk=function(c){this.streamInfo.crc32=s(c.data,this.streamInfo.crc32||0),this.push(c)},r.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,a){var n=i("../utils"),s=i("./GenericWorker");function o(c){s.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(o,s),o.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}s.prototype.processChunk.call(this,c)},r.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,a){var n=i("../utils"),s=i("./GenericWorker");function o(c){s.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(d){l.dataIsReady=!0,l.data=d,l.max=d&&d.length||0,l.type=n.getTypeOf(d),l.isPaused||l._tickAndRepeat()},function(d){l.error(d)})}n.inherits(o,s),o.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,a){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,o){return this._listeners[s].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,o){if(this._listeners[s])for(var c=0;c<this._listeners[s].length;c++)this._listeners[s][c].call(this,o)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var o=this;return s.on("data",function(c){o.processChunk(c)}),s.on("end",function(){o.end()}),s.on("error",function(c){o.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,o){return this.extraStreamInfo[s]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=n},{}],29:[function(i,r,a){var n=i("../utils"),s=i("./ConvertWorker"),o=i("./GenericWorker"),c=i("../base64"),l=i("../support"),d=i("../external"),u=null;if(l.nodestream)try{u=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(g,m){return new d.Promise(function(v,b){var w=[],S=g._internalType,T=g._outputType,E=g._mimeType;g.on("data",function(O,I){w.push(O),m&&m(I)}).on("error",function(O){w=[],b(O)}).on("end",function(){try{var O=(function(I,L,P){switch(I){case"blob":return n.newBlob(n.transformTo("arraybuffer",L),P);case"base64":return c.encode(L);default:return n.transformTo(I,L)}})(T,(function(I,L){var P,j=0,Q=null,_=0;for(P=0;P<L.length;P++)_+=L[P].length;switch(I){case"string":return L.join("");case"array":return Array.prototype.concat.apply([],L);case"uint8array":for(Q=new Uint8Array(_),P=0;P<L.length;P++)Q.set(L[P],j),j+=L[P].length;return Q;case"nodebuffer":return Buffer.concat(L);default:throw new Error("concat : unsupported type '"+I+"'")}})(S,w),E);v(O)}catch(I){b(I)}w=[]}).resume()})}function f(g,m,v){var b=m;switch(m){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=m,this._mimeType=v,n.checkSupport(b),this._worker=g.pipe(new s(b)),g.lock()}catch(w){this._worker=new o("error"),this._worker.error(w)}}f.prototype={accumulate:function(g){return y(this,g)},on:function(g,m){var v=this;return g==="data"?this._worker.on(g,function(b){m.call(v,b.data,b.meta)}):this._worker.on(g,function(){n.delay(m,arguments,v)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},g)}},r.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,a){if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var n=new ArrayBuffer(0);try{a.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(n),a.blob=s.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!i("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,a){for(var n=i("./utils"),s=i("./support"),o=i("./nodejsUtils"),c=i("./stream/GenericWorker"),l=new Array(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;l[254]=l[254]=1;function u(){c.call(this,"utf-8 decode"),this.leftOver=null}function y(){c.call(this,"utf-8 encode")}a.utf8encode=function(f){return s.nodebuffer?o.newBufferFrom(f,"utf-8"):(function(g){var m,v,b,w,S,T=g.length,E=0;for(w=0;w<T;w++)(64512&(v=g.charCodeAt(w)))==55296&&w+1<T&&(64512&(b=g.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),w++),E+=v<128?1:v<2048?2:v<65536?3:4;for(m=s.uint8array?new Uint8Array(E):new Array(E),w=S=0;S<E;w++)(64512&(v=g.charCodeAt(w)))==55296&&w+1<T&&(64512&(b=g.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),w++),v<128?m[S++]=v:(v<2048?m[S++]=192|v>>>6:(v<65536?m[S++]=224|v>>>12:(m[S++]=240|v>>>18,m[S++]=128|v>>>12&63),m[S++]=128|v>>>6&63),m[S++]=128|63&v);return m})(f)},a.utf8decode=function(f){return s.nodebuffer?n.transformTo("nodebuffer",f).toString("utf-8"):(function(g){var m,v,b,w,S=g.length,T=new Array(2*S);for(m=v=0;m<S;)if((b=g[m++])<128)T[v++]=b;else if(4<(w=l[b]))T[v++]=65533,m+=w-1;else{for(b&=w===2?31:w===3?15:7;1<w&&m<S;)b=b<<6|63&g[m++],w--;1<w?T[v++]=65533:b<65536?T[v++]=b:(b-=65536,T[v++]=55296|b>>10&1023,T[v++]=56320|1023&b)}return T.length!==v&&(T.subarray?T=T.subarray(0,v):T.length=v),n.applyFromCharCode(T)})(f=n.transformTo(s.uint8array?"uint8array":"array",f))},n.inherits(u,c),u.prototype.processChunk=function(f){var g=n.transformTo(s.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var m=g;(g=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),g.set(m,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var v=(function(w,S){var T;for((S=S||w.length)>w.length&&(S=w.length),T=S-1;0<=T&&(192&w[T])==128;)T--;return T<0||T===0?S:T+l[w[T]]>S?T:S})(g),b=g;v!==g.length&&(s.uint8array?(b=g.subarray(0,v),this.leftOver=g.subarray(v,g.length)):(b=g.slice(0,v),this.leftOver=g.slice(v,g.length))),this.push({data:a.utf8decode(b),meta:f.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=u,n.inherits(y,c),y.prototype.processChunk=function(f){this.push({data:a.utf8encode(f.data),meta:f.meta})},a.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,a){var n=i("./support"),s=i("./base64"),o=i("./nodejsUtils"),c=i("./external");function l(m){return m}function d(m,v){for(var b=0;b<m.length;++b)v[b]=255&m.charCodeAt(b);return v}i("setimmediate"),a.newBlob=function(m,v){a.checkSupport("blob");try{return new Blob([m],{type:v})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(m),b.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(m,v,b){var w=[],S=0,T=m.length;if(T<=b)return String.fromCharCode.apply(null,m);for(;S<T;)v==="array"||v==="nodebuffer"?w.push(String.fromCharCode.apply(null,m.slice(S,Math.min(S+b,T)))):w.push(String.fromCharCode.apply(null,m.subarray(S,Math.min(S+b,T)))),S+=b;return w.join("")},stringifyByChar:function(m){for(var v="",b=0;b<m.length;b++)v+=String.fromCharCode(m[b]);return v},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function y(m){var v=65536,b=a.getTypeOf(m),w=!0;if(b==="uint8array"?w=u.applyCanBeUsed.uint8array:b==="nodebuffer"&&(w=u.applyCanBeUsed.nodebuffer),w)for(;1<v;)try{return u.stringifyByChunk(m,b,v)}catch{v=Math.floor(v/2)}return u.stringifyByChar(m)}function f(m,v){for(var b=0;b<m.length;b++)v[b]=m[b];return v}a.applyFromCharCode=y;var g={};g.string={string:l,array:function(m){return d(m,new Array(m.length))},arraybuffer:function(m){return g.string.uint8array(m).buffer},uint8array:function(m){return d(m,new Uint8Array(m.length))},nodebuffer:function(m){return d(m,o.allocBuffer(m.length))}},g.array={string:y,array:l,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(m)}},g.arraybuffer={string:function(m){return y(new Uint8Array(m))},array:function(m){return f(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:l,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(new Uint8Array(m))}},g.uint8array={string:y,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:l,nodebuffer:function(m){return o.newBufferFrom(m)}},g.nodebuffer={string:y,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return g.nodebuffer.uint8array(m).buffer},uint8array:function(m){return f(m,new Uint8Array(m.length))},nodebuffer:l},a.transformTo=function(m,v){if(v=v||"",!m)return v;a.checkSupport(m);var b=a.getTypeOf(v);return g[b][m](v)},a.resolve=function(m){for(var v=m.split("/"),b=[],w=0;w<v.length;w++){var S=v[w];S==="."||S===""&&w!==0&&w!==v.length-1||(S===".."?b.pop():b.push(S))}return b.join("/")},a.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":n.nodebuffer&&o.isBuffer(m)?"nodebuffer":n.uint8array&&m instanceof Uint8Array?"uint8array":n.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(m){if(!n[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(m){var v,b,w="";for(b=0;b<(m||"").length;b++)w+="\\x"+((v=m.charCodeAt(b))<16?"0":"")+v.toString(16).toUpperCase();return w},a.delay=function(m,v,b){setImmediate(function(){m.apply(b||null,v||[])})},a.inherits=function(m,v){function b(){}b.prototype=v.prototype,m.prototype=new b},a.extend=function(){var m,v,b={};for(m=0;m<arguments.length;m++)for(v in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],v)&&b[v]===void 0&&(b[v]=arguments[m][v]);return b},a.prepareContent=function(m,v,b,w,S){return c.Promise.resolve(v).then(function(T){return n.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new c.Promise(function(E,O){var I=new FileReader;I.onload=function(L){E(L.target.result)},I.onerror=function(L){O(L.target.error)},I.readAsArrayBuffer(T)}):T}).then(function(T){var E=a.getTypeOf(T);return E?(E==="arraybuffer"?T=a.transformTo("uint8array",T):E==="string"&&(S?T=s.decode(T):b&&w!==!0&&(T=(function(O){return d(O,n.uint8array?new Uint8Array(O.length):new Array(O.length))})(T))),T):c.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,a){var n=i("./reader/readerFor"),s=i("./utils"),o=i("./signature"),c=i("./zipEntry"),l=i("./support");function d(u){this.files=[],this.loadOptions=u}d.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(y)+", expected "+s.pretty(u)+")")}},isSignature:function(u,y){var f=this.reader.index;this.reader.setIndex(u);var g=this.reader.readString(4)===y;return this.reader.setIndex(f),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),y=l.uint8array?"uint8array":"array",f=s.transformTo(y,u);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,y,f,g=this.zip64EndOfCentralSize-44;0<g;)u=this.reader.readInt(2),y=this.reader.readInt(4),f=this.reader.readData(y),this.zip64ExtensibleData[u]={id:u,length:y,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,y;for(u=0;u<this.files.length;u++)y=this.files[u],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(u=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var y=u;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var g=y-f;if(0<g)this.isSignature(y,o.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(u){this.reader=n(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,a){var n=i("./reader/readerFor"),s=i("./utils"),o=i("./compressedObject"),c=i("./crc32"),l=i("./utf8"),d=i("./compressions"),u=i("./support");function y(f,g){this.options=f,this.loadOptions=g}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var g,m;if(f.skip(22),this.fileNameLength=f.readInt(2),m=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(v){for(var b in d)if(Object.prototype.hasOwnProperty.call(d,b)&&d[b].magic===v)return d[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,g,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var g=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(g),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var g,m,v,b=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<b;)g=f.readInt(2),m=f.readInt(2),v=f.readData(m),this.extraFields[g]={id:g,length:m,value:v};f.setIndex(b)},handleUTF8:function(){var f=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var m=s.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var b=s.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var g=n(f.value);return g.readInt(1)!==1||c(this.fileName)!==g.readInt(4)?null:l.utf8decode(g.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var g=n(f.value);return g.readInt(1)!==1||c(this.fileComment)!==g.readInt(4)?null:l.utf8decode(g.readData(f.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,a){function n(g,m,v){this.name=g,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=m,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var s=i("./stream/StreamHelper"),o=i("./stream/DataWorker"),c=i("./utf8"),l=i("./compressedObject"),d=i("./stream/GenericWorker");n.prototype={internalStream:function(g){var m=null,v="string";try{if(!g)throw new Error("No output type specified.");var b=(v=g.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),m=this._decompressWorker();var w=!this._dataBinary;w&&!b&&(m=m.pipe(new c.Utf8EncodeWorker)),!w&&b&&(m=m.pipe(new c.Utf8DecodeWorker))}catch(S){(m=new d("error")).error(S)}return new s(m,v,"")},async:function(g,m){return this.internalStream(g).accumulate(m)},nodeStream:function(g,m){return this.internalStream(g||"nodebuffer").toNodejsStream(m)},_compressWorker:function(g,m){if(this._data instanceof l&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(v,g,m)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof d?this._data:new o(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=y;r.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,a){(function(n){var s,o,c=n.MutationObserver||n.WebKitMutationObserver;if(c){var l=0,d=new c(g),u=n.document.createTextNode("");d.observe(u,{characterData:!0}),s=function(){u.data=l=++l%2}}else if(n.setImmediate||n.MessageChannel===void 0)s="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var m=n.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},n.document.documentElement.appendChild(m)}:function(){setTimeout(g,0)};else{var y=new n.MessageChannel;y.port1.onmessage=g,s=function(){y.port2.postMessage(0)}}var f=[];function g(){var m,v;o=!0;for(var b=f.length;b;){for(v=f,f=[],m=-1;++m<b;)v[m]();b=f.length}o=!1}r.exports=function(m){f.push(m)!==1||o||s()}}).call(this,typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,a){var n=i("immediate");function s(){}var o={},c=["REJECTED"],l=["FULFILLED"],d=["PENDING"];function u(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,b!==s&&m(this,b)}function y(b,w,S){this.promise=b,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function f(b,w,S){n(function(){var T;try{T=w(S)}catch(E){return o.reject(b,E)}T===b?o.reject(b,new TypeError("Cannot resolve promise with itself")):o.resolve(b,T)})}function g(b){var w=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof w=="function")return function(){w.apply(b,arguments)}}function m(b,w){var S=!1;function T(I){S||(S=!0,o.reject(b,I))}function E(I){S||(S=!0,o.resolve(b,I))}var O=v(function(){w(E,T)});O.status==="error"&&T(O.value)}function v(b,w){var S={};try{S.value=b(w),S.status="success"}catch(T){S.status="error",S.value=T}return S}(r.exports=u).prototype.finally=function(b){if(typeof b!="function")return this;var w=this.constructor;return this.then(function(S){return w.resolve(b()).then(function(){return S})},function(S){return w.resolve(b()).then(function(){throw S})})},u.prototype.catch=function(b){return this.then(null,b)},u.prototype.then=function(b,w){if(typeof b!="function"&&this.state===l||typeof w!="function"&&this.state===c)return this;var S=new this.constructor(s);return this.state!==d?f(S,this.state===l?b:w,this.outcome):this.queue.push(new y(S,b,w)),S},y.prototype.callFulfilled=function(b){o.resolve(this.promise,b)},y.prototype.otherCallFulfilled=function(b){f(this.promise,this.onFulfilled,b)},y.prototype.callRejected=function(b){o.reject(this.promise,b)},y.prototype.otherCallRejected=function(b){f(this.promise,this.onRejected,b)},o.resolve=function(b,w){var S=v(g,w);if(S.status==="error")return o.reject(b,S.value);var T=S.value;if(T)m(b,T);else{b.state=l,b.outcome=w;for(var E=-1,O=b.queue.length;++E<O;)b.queue[E].callFulfilled(w)}return b},o.reject=function(b,w){b.state=c,b.outcome=w;for(var S=-1,T=b.queue.length;++S<T;)b.queue[S].callRejected(w);return b},u.resolve=function(b){return b instanceof this?b:o.resolve(new this(s),b)},u.reject=function(b){var w=new this(s);return o.reject(w,b)},u.all=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=b.length,T=!1;if(!S)return this.resolve([]);for(var E=new Array(S),O=0,I=-1,L=new this(s);++I<S;)P(b[I],I);return L;function P(j,Q){w.resolve(j).then(function(_){E[Q]=_,++O!==S||T||(T=!0,o.resolve(L,E))},function(_){T||(T=!0,o.reject(L,_))})}},u.race=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=b.length,T=!1;if(!S)return this.resolve([]);for(var E=-1,O=new this(s);++E<S;)I=b[E],w.resolve(I).then(function(L){T||(T=!0,o.resolve(O,L))},function(L){T||(T=!0,o.reject(O,L))});var I;return O}},{immediate:36}],38:[function(i,r,a){var n={};(0,i("./lib/utils/common").assign)(n,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,a){var n=i("./zlib/deflate"),s=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/messages"),l=i("./zlib/zstream"),d=Object.prototype.toString,u=0,y=-1,f=0,g=8;function m(b){if(!(this instanceof m))return new m(b);this.options=s.assign({level:y,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},b||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var S=n.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(S!==u)throw new Error(c[S]);if(w.header&&n.deflateSetHeader(this.strm,w.header),w.dictionary){var T;if(T=typeof w.dictionary=="string"?o.string2buf(w.dictionary):d.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(S=n.deflateSetDictionary(this.strm,T))!==u)throw new Error(c[S]);this._dict_set=!0}}function v(b,w){var S=new m(w);if(S.push(b,!0),S.err)throw S.msg||c[S.err];return S.result}m.prototype.push=function(b,w){var S,T,E=this.strm,O=this.options.chunkSize;if(this.ended)return!1;T=w===~~w?w:w===!0?4:0,typeof b=="string"?E.input=o.string2buf(b):d.call(b)==="[object ArrayBuffer]"?E.input=new Uint8Array(b):E.input=b,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new s.Buf8(O),E.next_out=0,E.avail_out=O),(S=n.deflate(E,T))!==1&&S!==u)return this.onEnd(S),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(s.shrinkBuf(E.output,E.next_out))):this.onData(s.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&S!==1);return T===4?(S=n.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===u):T!==2||(this.onEnd(u),!(E.avail_out=0))},m.prototype.onData=function(b){this.chunks.push(b)},m.prototype.onEnd=function(b){b===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},a.Deflate=m,a.deflate=v,a.deflateRaw=function(b,w){return(w=w||{}).raw=!0,v(b,w)},a.gzip=function(b,w){return(w=w||{}).gzip=!0,v(b,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,a){var n=i("./zlib/inflate"),s=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/constants"),l=i("./zlib/messages"),d=i("./zlib/zstream"),u=i("./zlib/gzheader"),y=Object.prototype.toString;function f(m){if(!(this instanceof f))return new f(m);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},m||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||m&&m.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var b=n.inflateInit2(this.strm,v.windowBits);if(b!==c.Z_OK)throw new Error(l[b]);this.header=new u,n.inflateGetHeader(this.strm,this.header)}function g(m,v){var b=new f(v);if(b.push(m,!0),b.err)throw b.msg||l[b.err];return b.result}f.prototype.push=function(m,v){var b,w,S,T,E,O,I=this.strm,L=this.options.chunkSize,P=this.options.dictionary,j=!1;if(this.ended)return!1;w=v===~~v?v:v===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof m=="string"?I.input=o.binstring2buf(m):y.call(m)==="[object ArrayBuffer]"?I.input=new Uint8Array(m):I.input=m,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new s.Buf8(L),I.next_out=0,I.avail_out=L),(b=n.inflate(I,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&P&&(O=typeof P=="string"?o.string2buf(P):y.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,b=n.inflateSetDictionary(this.strm,O)),b===c.Z_BUF_ERROR&&j===!0&&(b=c.Z_OK,j=!1),b!==c.Z_STREAM_END&&b!==c.Z_OK)return this.onEnd(b),!(this.ended=!0);I.next_out&&(I.avail_out!==0&&b!==c.Z_STREAM_END&&(I.avail_in!==0||w!==c.Z_FINISH&&w!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=o.utf8border(I.output,I.next_out),T=I.next_out-S,E=o.buf2string(I.output,S),I.next_out=T,I.avail_out=L-T,T&&s.arraySet(I.output,I.output,S,T,0),this.onData(E)):this.onData(s.shrinkBuf(I.output,I.next_out)))),I.avail_in===0&&I.avail_out===0&&(j=!0)}while((0<I.avail_in||I.avail_out===0)&&b!==c.Z_STREAM_END);return b===c.Z_STREAM_END&&(w=c.Z_FINISH),w===c.Z_FINISH?(b=n.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===c.Z_OK):w!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(I.avail_out=0))},f.prototype.onData=function(m){this.chunks.push(m)},f.prototype.onEnd=function(m){m===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},a.Inflate=f,a.inflate=g,a.inflateRaw=function(m,v){return(v=v||{}).raw=!0,g(m,v)},a.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,a){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var d=l.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var u in d)d.hasOwnProperty(u)&&(c[u]=d[u])}}return c},a.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var s={arraySet:function(c,l,d,u,y){if(l.subarray&&c.subarray)c.set(l.subarray(d,d+u),y);else for(var f=0;f<u;f++)c[y+f]=l[d+f]},flattenChunks:function(c){var l,d,u,y,f,g;for(l=u=0,d=c.length;l<d;l++)u+=c[l].length;for(g=new Uint8Array(u),l=y=0,d=c.length;l<d;l++)f=c[l],g.set(f,y),y+=f.length;return g}},o={arraySet:function(c,l,d,u,y){for(var f=0;f<u;f++)c[y+f]=l[d+f]},flattenChunks:function(c){return[].concat.apply([],c)}};a.setTyped=function(c){c?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,s)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,o))},a.setTyped(n)},{}],42:[function(i,r,a){var n=i("./common"),s=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var c=new n.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function d(u,y){if(y<65537&&(u.subarray&&o||!u.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(u,y));for(var f="",g=0;g<y;g++)f+=String.fromCharCode(u[g]);return f}c[254]=c[254]=1,a.string2buf=function(u){var y,f,g,m,v,b=u.length,w=0;for(m=0;m<b;m++)(64512&(f=u.charCodeAt(m)))==55296&&m+1<b&&(64512&(g=u.charCodeAt(m+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),m++),w+=f<128?1:f<2048?2:f<65536?3:4;for(y=new n.Buf8(w),m=v=0;v<w;m++)(64512&(f=u.charCodeAt(m)))==55296&&m+1<b&&(64512&(g=u.charCodeAt(m+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),m++),f<128?y[v++]=f:(f<2048?y[v++]=192|f>>>6:(f<65536?y[v++]=224|f>>>12:(y[v++]=240|f>>>18,y[v++]=128|f>>>12&63),y[v++]=128|f>>>6&63),y[v++]=128|63&f);return y},a.buf2binstring=function(u){return d(u,u.length)},a.binstring2buf=function(u){for(var y=new n.Buf8(u.length),f=0,g=y.length;f<g;f++)y[f]=u.charCodeAt(f);return y},a.buf2string=function(u,y){var f,g,m,v,b=y||u.length,w=new Array(2*b);for(f=g=0;f<b;)if((m=u[f++])<128)w[g++]=m;else if(4<(v=c[m]))w[g++]=65533,f+=v-1;else{for(m&=v===2?31:v===3?15:7;1<v&&f<b;)m=m<<6|63&u[f++],v--;1<v?w[g++]=65533:m<65536?w[g++]=m:(m-=65536,w[g++]=55296|m>>10&1023,w[g++]=56320|1023&m)}return d(w,g)},a.utf8border=function(u,y){var f;for((y=y||u.length)>u.length&&(y=u.length),f=y-1;0<=f&&(192&u[f])==128;)f--;return f<0||f===0?y:f+c[u[f]]>y?f:y}},{"./common":41}],43:[function(i,r,a){r.exports=function(n,s,o,c){for(var l=65535&n|0,d=n>>>16&65535|0,u=0;o!==0;){for(o-=u=2e3<o?2e3:o;d=d+(l=l+s[c++]|0)|0,--u;);l%=65521,d%=65521}return l|d<<16|0}},{}],44:[function(i,r,a){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,a){var n=(function(){for(var s,o=[],c=0;c<256;c++){s=c;for(var l=0;l<8;l++)s=1&s?3988292384^s>>>1:s>>>1;o[c]=s}return o})();r.exports=function(s,o,c,l){var d=n,u=l+c;s^=-1;for(var y=l;y<u;y++)s=s>>>8^d[255&(s^o[y])];return-1^s}},{}],46:[function(i,r,a){var n,s=i("../utils/common"),o=i("./trees"),c=i("./adler32"),l=i("./crc32"),d=i("./messages"),u=0,y=4,f=0,g=-2,m=-1,v=4,b=2,w=8,S=9,T=286,E=30,O=19,I=2*T+1,L=15,P=3,j=258,Q=j+P+1,_=42,z=113,p=1,H=2,ee=3,W=4;function se(h,U){return h.msg=d[U],U}function V(h){return(h<<1)-(4<h?9:0)}function ne(h){for(var U=h.length;0<=--U;)h[U]=0}function M(h){var U=h.state,F=U.pending;F>h.avail_out&&(F=h.avail_out),F!==0&&(s.arraySet(h.output,U.pending_buf,U.pending_out,F,h.next_out),h.next_out+=F,U.pending_out+=F,h.total_out+=F,h.avail_out-=F,U.pending-=F,U.pending===0&&(U.pending_out=0))}function R(h,U){o._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,U),h.block_start=h.strstart,M(h.strm)}function ae(h,U){h.pending_buf[h.pending++]=U}function Y(h,U){h.pending_buf[h.pending++]=U>>>8&255,h.pending_buf[h.pending++]=255&U}function K(h,U){var F,k,x=h.max_chain_length,B=h.strstart,D=h.prev_length,$=h.nice_match,A=h.strstart>h.w_size-Q?h.strstart-(h.w_size-Q):0,G=h.window,J=h.w_mask,Z=h.prev,re=h.strstart+j,he=G[B+D-1],fe=G[B+D];h.prev_length>=h.good_match&&(x>>=2),$>h.lookahead&&($=h.lookahead);do if(G[(F=U)+D]===fe&&G[F+D-1]===he&&G[F]===G[B]&&G[++F]===G[B+1]){B+=2,F++;do;while(G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&B<re);if(k=j-(re-B),B=re-j,D<k){if(h.match_start=U,$<=(D=k))break;he=G[B+D-1],fe=G[B+D]}}while((U=Z[U&J])>A&&--x!=0);return D<=h.lookahead?D:h.lookahead}function be(h){var U,F,k,x,B,D,$,A,G,J,Z=h.w_size;do{if(x=h.window_size-h.lookahead-h.strstart,h.strstart>=Z+(Z-Q)){for(s.arraySet(h.window,h.window,Z,Z,0),h.match_start-=Z,h.strstart-=Z,h.block_start-=Z,U=F=h.hash_size;k=h.head[--U],h.head[U]=Z<=k?k-Z:0,--F;);for(U=F=Z;k=h.prev[--U],h.prev[U]=Z<=k?k-Z:0,--F;);x+=Z}if(h.strm.avail_in===0)break;if(D=h.strm,$=h.window,A=h.strstart+h.lookahead,G=x,J=void 0,J=D.avail_in,G<J&&(J=G),F=J===0?0:(D.avail_in-=J,s.arraySet($,D.input,D.next_in,J,A),D.state.wrap===1?D.adler=c(D.adler,$,J,A):D.state.wrap===2&&(D.adler=l(D.adler,$,J,A)),D.next_in+=J,D.total_in+=J,J),h.lookahead+=F,h.lookahead+h.insert>=P)for(B=h.strstart-h.insert,h.ins_h=h.window[B],h.ins_h=(h.ins_h<<h.hash_shift^h.window[B+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[B+P-1])&h.hash_mask,h.prev[B&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=B,B++,h.insert--,!(h.lookahead+h.insert<P)););}while(h.lookahead<Q&&h.strm.avail_in!==0)}function Te(h,U){for(var F,k;;){if(h.lookahead<Q){if(be(h),h.lookahead<Q&&U===u)return p;if(h.lookahead===0)break}if(F=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),F!==0&&h.strstart-F<=h.w_size-Q&&(h.match_length=K(h,F)),h.match_length>=P)if(k=o._tr_tally(h,h.strstart-h.match_start,h.match_length-P),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=P){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else k=o._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(k&&(R(h,!1),h.strm.avail_out===0))return p}return h.insert=h.strstart<P-1?h.strstart:P-1,U===y?(R(h,!0),h.strm.avail_out===0?ee:W):h.last_lit&&(R(h,!1),h.strm.avail_out===0)?p:H}function le(h,U){for(var F,k,x;;){if(h.lookahead<Q){if(be(h),h.lookahead<Q&&U===u)return p;if(h.lookahead===0)break}if(F=0,h.lookahead>=P&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=P-1,F!==0&&h.prev_length<h.max_lazy_match&&h.strstart-F<=h.w_size-Q&&(h.match_length=K(h,F),h.match_length<=5&&(h.strategy===1||h.match_length===P&&4096<h.strstart-h.match_start)&&(h.match_length=P-1)),h.prev_length>=P&&h.match_length<=h.prev_length){for(x=h.strstart+h.lookahead-P,k=o._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-P),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=x&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+P-1])&h.hash_mask,F=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=P-1,h.strstart++,k&&(R(h,!1),h.strm.avail_out===0))return p}else if(h.match_available){if((k=o._tr_tally(h,0,h.window[h.strstart-1]))&&R(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return p}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(k=o._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<P-1?h.strstart:P-1,U===y?(R(h,!0),h.strm.avail_out===0?ee:W):h.last_lit&&(R(h,!1),h.strm.avail_out===0)?p:H}function de(h,U,F,k,x){this.good_length=h,this.max_lazy=U,this.nice_length=F,this.max_chain=k,this.func=x}function ke(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*I),this.dyn_dtree=new s.Buf16(2*(2*E+1)),this.bl_tree=new s.Buf16(2*(2*O+1)),ne(this.dyn_ltree),ne(this.dyn_dtree),ne(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(L+1),this.heap=new s.Buf16(2*T+1),ne(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*T+1),ne(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ye(h){var U;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=b,(U=h.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?_:z,h.adler=U.wrap===2?0:1,U.last_flush=u,o._tr_init(U),f):se(h,g)}function Ge(h){var U=ye(h);return U===f&&(function(F){F.window_size=2*F.w_size,ne(F.head),F.max_lazy_match=n[F.level].max_lazy,F.good_match=n[F.level].good_length,F.nice_match=n[F.level].nice_length,F.max_chain_length=n[F.level].max_chain,F.strstart=0,F.block_start=0,F.lookahead=0,F.insert=0,F.match_length=F.prev_length=P-1,F.match_available=0,F.ins_h=0})(h.state),U}function Ue(h,U,F,k,x,B){if(!h)return g;var D=1;if(U===m&&(U=6),k<0?(D=0,k=-k):15<k&&(D=2,k-=16),x<1||S<x||F!==w||k<8||15<k||U<0||9<U||B<0||v<B)return se(h,g);k===8&&(k=9);var $=new ke;return(h.state=$).strm=h,$.wrap=D,$.gzhead=null,$.w_bits=k,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=x+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+P-1)/P),$.window=new s.Buf8(2*$.w_size),$.head=new s.Buf16($.hash_size),$.prev=new s.Buf16($.w_size),$.lit_bufsize=1<<x+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new s.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=U,$.strategy=B,$.method=F,Ge(h)}n=[new de(0,0,0,0,function(h,U){var F=65535;for(F>h.pending_buf_size-5&&(F=h.pending_buf_size-5);;){if(h.lookahead<=1){if(be(h),h.lookahead===0&&U===u)return p;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var k=h.block_start+F;if((h.strstart===0||h.strstart>=k)&&(h.lookahead=h.strstart-k,h.strstart=k,R(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-Q&&(R(h,!1),h.strm.avail_out===0))return p}return h.insert=0,U===y?(R(h,!0),h.strm.avail_out===0?ee:W):(h.strstart>h.block_start&&(R(h,!1),h.strm.avail_out),p)}),new de(4,4,8,4,Te),new de(4,5,16,8,Te),new de(4,6,32,32,Te),new de(4,4,16,16,le),new de(8,16,32,32,le),new de(8,16,128,128,le),new de(8,32,128,256,le),new de(32,128,258,1024,le),new de(32,258,258,4096,le)],a.deflateInit=function(h,U){return Ue(h,U,w,15,8,0)},a.deflateInit2=Ue,a.deflateReset=Ge,a.deflateResetKeep=ye,a.deflateSetHeader=function(h,U){return h&&h.state?h.state.wrap!==2?g:(h.state.gzhead=U,f):g},a.deflate=function(h,U){var F,k,x,B;if(!h||!h.state||5<U||U<0)return h?se(h,g):g;if(k=h.state,!h.output||!h.input&&h.avail_in!==0||k.status===666&&U!==y)return se(h,h.avail_out===0?-5:g);if(k.strm=h,F=k.last_flush,k.last_flush=U,k.status===_)if(k.wrap===2)h.adler=0,ae(k,31),ae(k,139),ae(k,8),k.gzhead?(ae(k,(k.gzhead.text?1:0)+(k.gzhead.hcrc?2:0)+(k.gzhead.extra?4:0)+(k.gzhead.name?8:0)+(k.gzhead.comment?16:0)),ae(k,255&k.gzhead.time),ae(k,k.gzhead.time>>8&255),ae(k,k.gzhead.time>>16&255),ae(k,k.gzhead.time>>24&255),ae(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),ae(k,255&k.gzhead.os),k.gzhead.extra&&k.gzhead.extra.length&&(ae(k,255&k.gzhead.extra.length),ae(k,k.gzhead.extra.length>>8&255)),k.gzhead.hcrc&&(h.adler=l(h.adler,k.pending_buf,k.pending,0)),k.gzindex=0,k.status=69):(ae(k,0),ae(k,0),ae(k,0),ae(k,0),ae(k,0),ae(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),ae(k,3),k.status=z);else{var D=w+(k.w_bits-8<<4)<<8;D|=(2<=k.strategy||k.level<2?0:k.level<6?1:k.level===6?2:3)<<6,k.strstart!==0&&(D|=32),D+=31-D%31,k.status=z,Y(k,D),k.strstart!==0&&(Y(k,h.adler>>>16),Y(k,65535&h.adler)),h.adler=1}if(k.status===69)if(k.gzhead.extra){for(x=k.pending;k.gzindex<(65535&k.gzhead.extra.length)&&(k.pending!==k.pending_buf_size||(k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),M(h),x=k.pending,k.pending!==k.pending_buf_size));)ae(k,255&k.gzhead.extra[k.gzindex]),k.gzindex++;k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),k.gzindex===k.gzhead.extra.length&&(k.gzindex=0,k.status=73)}else k.status=73;if(k.status===73)if(k.gzhead.name){x=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),M(h),x=k.pending,k.pending===k.pending_buf_size)){B=1;break}B=k.gzindex<k.gzhead.name.length?255&k.gzhead.name.charCodeAt(k.gzindex++):0,ae(k,B)}while(B!==0);k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),B===0&&(k.gzindex=0,k.status=91)}else k.status=91;if(k.status===91)if(k.gzhead.comment){x=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),M(h),x=k.pending,k.pending===k.pending_buf_size)){B=1;break}B=k.gzindex<k.gzhead.comment.length?255&k.gzhead.comment.charCodeAt(k.gzindex++):0,ae(k,B)}while(B!==0);k.gzhead.hcrc&&k.pending>x&&(h.adler=l(h.adler,k.pending_buf,k.pending-x,x)),B===0&&(k.status=103)}else k.status=103;if(k.status===103&&(k.gzhead.hcrc?(k.pending+2>k.pending_buf_size&&M(h),k.pending+2<=k.pending_buf_size&&(ae(k,255&h.adler),ae(k,h.adler>>8&255),h.adler=0,k.status=z)):k.status=z),k.pending!==0){if(M(h),h.avail_out===0)return k.last_flush=-1,f}else if(h.avail_in===0&&V(U)<=V(F)&&U!==y)return se(h,-5);if(k.status===666&&h.avail_in!==0)return se(h,-5);if(h.avail_in!==0||k.lookahead!==0||U!==u&&k.status!==666){var $=k.strategy===2?(function(A,G){for(var J;;){if(A.lookahead===0&&(be(A),A.lookahead===0)){if(G===u)return p;break}if(A.match_length=0,J=o._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,J&&(R(A,!1),A.strm.avail_out===0))return p}return A.insert=0,G===y?(R(A,!0),A.strm.avail_out===0?ee:W):A.last_lit&&(R(A,!1),A.strm.avail_out===0)?p:H})(k,U):k.strategy===3?(function(A,G){for(var J,Z,re,he,fe=A.window;;){if(A.lookahead<=j){if(be(A),A.lookahead<=j&&G===u)return p;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=P&&0<A.strstart&&(Z=fe[re=A.strstart-1])===fe[++re]&&Z===fe[++re]&&Z===fe[++re]){he=A.strstart+j;do;while(Z===fe[++re]&&Z===fe[++re]&&Z===fe[++re]&&Z===fe[++re]&&Z===fe[++re]&&Z===fe[++re]&&Z===fe[++re]&&Z===fe[++re]&&re<he);A.match_length=j-(he-re),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=P?(J=o._tr_tally(A,1,A.match_length-P),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(J=o._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),J&&(R(A,!1),A.strm.avail_out===0))return p}return A.insert=0,G===y?(R(A,!0),A.strm.avail_out===0?ee:W):A.last_lit&&(R(A,!1),A.strm.avail_out===0)?p:H})(k,U):n[k.level].func(k,U);if($!==ee&&$!==W||(k.status=666),$===p||$===ee)return h.avail_out===0&&(k.last_flush=-1),f;if($===H&&(U===1?o._tr_align(k):U!==5&&(o._tr_stored_block(k,0,0,!1),U===3&&(ne(k.head),k.lookahead===0&&(k.strstart=0,k.block_start=0,k.insert=0))),M(h),h.avail_out===0))return k.last_flush=-1,f}return U!==y?f:k.wrap<=0?1:(k.wrap===2?(ae(k,255&h.adler),ae(k,h.adler>>8&255),ae(k,h.adler>>16&255),ae(k,h.adler>>24&255),ae(k,255&h.total_in),ae(k,h.total_in>>8&255),ae(k,h.total_in>>16&255),ae(k,h.total_in>>24&255)):(Y(k,h.adler>>>16),Y(k,65535&h.adler)),M(h),0<k.wrap&&(k.wrap=-k.wrap),k.pending!==0?f:1)},a.deflateEnd=function(h){var U;return h&&h.state?(U=h.state.status)!==_&&U!==69&&U!==73&&U!==91&&U!==103&&U!==z&&U!==666?se(h,g):(h.state=null,U===z?se(h,-3):f):g},a.deflateSetDictionary=function(h,U){var F,k,x,B,D,$,A,G,J=U.length;if(!h||!h.state||(B=(F=h.state).wrap)===2||B===1&&F.status!==_||F.lookahead)return g;for(B===1&&(h.adler=c(h.adler,U,J,0)),F.wrap=0,J>=F.w_size&&(B===0&&(ne(F.head),F.strstart=0,F.block_start=0,F.insert=0),G=new s.Buf8(F.w_size),s.arraySet(G,U,J-F.w_size,F.w_size,0),U=G,J=F.w_size),D=h.avail_in,$=h.next_in,A=h.input,h.avail_in=J,h.next_in=0,h.input=U,be(F);F.lookahead>=P;){for(k=F.strstart,x=F.lookahead-(P-1);F.ins_h=(F.ins_h<<F.hash_shift^F.window[k+P-1])&F.hash_mask,F.prev[k&F.w_mask]=F.head[F.ins_h],F.head[F.ins_h]=k,k++,--x;);F.strstart=k,F.lookahead=P-1,be(F)}return F.strstart+=F.lookahead,F.block_start=F.strstart,F.insert=F.lookahead,F.lookahead=0,F.match_length=F.prev_length=P-1,F.match_available=0,h.next_in=$,h.input=A,h.avail_in=D,F.wrap=B,f},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,a){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,a){r.exports=function(n,s){var o,c,l,d,u,y,f,g,m,v,b,w,S,T,E,O,I,L,P,j,Q,_,z,p,H;o=n.state,c=n.next_in,p=n.input,l=c+(n.avail_in-5),d=n.next_out,H=n.output,u=d-(s-n.avail_out),y=d+(n.avail_out-257),f=o.dmax,g=o.wsize,m=o.whave,v=o.wnext,b=o.window,w=o.hold,S=o.bits,T=o.lencode,E=o.distcode,O=(1<<o.lenbits)-1,I=(1<<o.distbits)-1;e:do{S<15&&(w+=p[c++]<<S,S+=8,w+=p[c++]<<S,S+=8),L=T[w&O];t:for(;;){if(w>>>=P=L>>>24,S-=P,(P=L>>>16&255)===0)H[d++]=65535&L;else{if(!(16&P)){if((64&P)==0){L=T[(65535&L)+(w&(1<<P)-1)];continue t}if(32&P){o.mode=12;break e}n.msg="invalid literal/length code",o.mode=30;break e}j=65535&L,(P&=15)&&(S<P&&(w+=p[c++]<<S,S+=8),j+=w&(1<<P)-1,w>>>=P,S-=P),S<15&&(w+=p[c++]<<S,S+=8,w+=p[c++]<<S,S+=8),L=E[w&I];i:for(;;){if(w>>>=P=L>>>24,S-=P,!(16&(P=L>>>16&255))){if((64&P)==0){L=E[(65535&L)+(w&(1<<P)-1)];continue i}n.msg="invalid distance code",o.mode=30;break e}if(Q=65535&L,S<(P&=15)&&(w+=p[c++]<<S,(S+=8)<P&&(w+=p[c++]<<S,S+=8)),f<(Q+=w&(1<<P)-1)){n.msg="invalid distance too far back",o.mode=30;break e}if(w>>>=P,S-=P,(P=d-u)<Q){if(m<(P=Q-P)&&o.sane){n.msg="invalid distance too far back",o.mode=30;break e}if(z=b,(_=0)===v){if(_+=g-P,P<j){for(j-=P;H[d++]=b[_++],--P;);_=d-Q,z=H}}else if(v<P){if(_+=g+v-P,(P-=v)<j){for(j-=P;H[d++]=b[_++],--P;);if(_=0,v<j){for(j-=P=v;H[d++]=b[_++],--P;);_=d-Q,z=H}}}else if(_+=v-P,P<j){for(j-=P;H[d++]=b[_++],--P;);_=d-Q,z=H}for(;2<j;)H[d++]=z[_++],H[d++]=z[_++],H[d++]=z[_++],j-=3;j&&(H[d++]=z[_++],1<j&&(H[d++]=z[_++]))}else{for(_=d-Q;H[d++]=H[_++],H[d++]=H[_++],H[d++]=H[_++],2<(j-=3););j&&(H[d++]=H[_++],1<j&&(H[d++]=H[_++]))}break}}break}}while(c<l&&d<y);c-=j=S>>3,w&=(1<<(S-=j<<3))-1,n.next_in=c,n.next_out=d,n.avail_in=c<l?l-c+5:5-(c-l),n.avail_out=d<y?y-d+257:257-(d-y),o.hold=w,o.bits=S}},{}],49:[function(i,r,a){var n=i("../utils/common"),s=i("./adler32"),o=i("./crc32"),c=i("./inffast"),l=i("./inftrees"),d=1,u=2,y=0,f=-2,g=1,m=852,v=592;function b(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(_){var z;return _&&_.state?(z=_.state,_.total_in=_.total_out=z.total=0,_.msg="",z.wrap&&(_.adler=1&z.wrap),z.mode=g,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new n.Buf32(m),z.distcode=z.distdyn=new n.Buf32(v),z.sane=1,z.back=-1,y):f}function T(_){var z;return _&&_.state?((z=_.state).wsize=0,z.whave=0,z.wnext=0,S(_)):f}function E(_,z){var p,H;return _&&_.state?(H=_.state,z<0?(p=0,z=-z):(p=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?f:(H.window!==null&&H.wbits!==z&&(H.window=null),H.wrap=p,H.wbits=z,T(_))):f}function O(_,z){var p,H;return _?(H=new w,(_.state=H).window=null,(p=E(_,z))!==y&&(_.state=null),p):f}var I,L,P=!0;function j(_){if(P){var z;for(I=new n.Buf32(512),L=new n.Buf32(32),z=0;z<144;)_.lens[z++]=8;for(;z<256;)_.lens[z++]=9;for(;z<280;)_.lens[z++]=7;for(;z<288;)_.lens[z++]=8;for(l(d,_.lens,0,288,I,0,_.work,{bits:9}),z=0;z<32;)_.lens[z++]=5;l(u,_.lens,0,32,L,0,_.work,{bits:5}),P=!1}_.lencode=I,_.lenbits=9,_.distcode=L,_.distbits=5}function Q(_,z,p,H){var ee,W=_.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new n.Buf8(W.wsize)),H>=W.wsize?(n.arraySet(W.window,z,p-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(H<(ee=W.wsize-W.wnext)&&(ee=H),n.arraySet(W.window,z,p-H,ee,W.wnext),(H-=ee)?(n.arraySet(W.window,z,p-H,H,0),W.wnext=H,W.whave=W.wsize):(W.wnext+=ee,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=ee))),0}a.inflateReset=T,a.inflateReset2=E,a.inflateResetKeep=S,a.inflateInit=function(_){return O(_,15)},a.inflateInit2=O,a.inflate=function(_,z){var p,H,ee,W,se,V,ne,M,R,ae,Y,K,be,Te,le,de,ke,ye,Ge,Ue,h,U,F,k,x=0,B=new n.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return f;(p=_.state).mode===12&&(p.mode=13),se=_.next_out,ee=_.output,ne=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,M=p.hold,R=p.bits,ae=V,Y=ne,U=y;e:for(;;)switch(p.mode){case g:if(p.wrap===0){p.mode=13;break}for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(2&p.wrap&&M===35615){B[p.check=0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0),R=M=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&M)<<8)+(M>>8))%31){_.msg="incorrect header check",p.mode=30;break}if((15&M)!=8){_.msg="unknown compression method",p.mode=30;break}if(R-=4,h=8+(15&(M>>>=4)),p.wbits===0)p.wbits=h;else if(h>p.wbits){_.msg="invalid window size",p.mode=30;break}p.dmax=1<<h,_.adler=p.check=1,p.mode=512&M?10:12,R=M=0;break;case 2:for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(p.flags=M,(255&p.flags)!=8){_.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){_.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=M>>8&1),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0)),R=M=0,p.mode=3;case 3:for(;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.head&&(p.head.time=M),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,B[2]=M>>>16&255,B[3]=M>>>24&255,p.check=o(p.check,B,4,0)),R=M=0,p.mode=4;case 4:for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.head&&(p.head.xflags=255&M,p.head.os=M>>8),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0)),R=M=0,p.mode=5;case 5:if(1024&p.flags){for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.length=M,p.head&&(p.head.extra_len=M),512&p.flags&&(B[0]=255&M,B[1]=M>>>8&255,p.check=o(p.check,B,2,0)),R=M=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(V<(K=p.length)&&(K=V),K&&(p.head&&(h=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),n.arraySet(p.head.extra,H,W,K,h)),512&p.flags&&(p.check=o(p.check,H,K,W)),V-=K,W+=K,p.length-=K),p.length))break e;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(V===0)break e;for(K=0;h=H[W+K++],p.head&&h&&p.length<65536&&(p.head.name+=String.fromCharCode(h)),h&&K<V;);if(512&p.flags&&(p.check=o(p.check,H,K,W)),V-=K,W+=K,h)break e}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(V===0)break e;for(K=0;h=H[W+K++],p.head&&h&&p.length<65536&&(p.head.comment+=String.fromCharCode(h)),h&&K<V;);if(512&p.flags&&(p.check=o(p.check,H,K,W)),V-=K,W+=K,h)break e}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;R<16;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(M!==(65535&p.check)){_.msg="header crc mismatch",p.mode=30;break}R=M=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),_.adler=p.check=0,p.mode=12;break;case 10:for(;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}_.adler=p.check=b(M),R=M=0,p.mode=11;case 11:if(p.havedict===0)return _.next_out=se,_.avail_out=ne,_.next_in=W,_.avail_in=V,p.hold=M,p.bits=R,2;_.adler=p.check=1,p.mode=12;case 12:if(z===5||z===6)break e;case 13:if(p.last){M>>>=7&R,R-=7&R,p.mode=27;break}for(;R<3;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}switch(p.last=1&M,R-=1,3&(M>>>=1)){case 0:p.mode=14;break;case 1:if(j(p),p.mode=20,z!==6)break;M>>>=2,R-=2;break e;case 2:p.mode=17;break;case 3:_.msg="invalid block type",p.mode=30}M>>>=2,R-=2;break;case 14:for(M>>>=7&R,R-=7&R;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if((65535&M)!=(M>>>16^65535)){_.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&M,R=M=0,p.mode=15,z===6)break e;case 15:p.mode=16;case 16:if(K=p.length){if(V<K&&(K=V),ne<K&&(K=ne),K===0)break e;n.arraySet(ee,H,W,K,se),V-=K,W+=K,ne-=K,se+=K,p.length-=K;break}p.mode=12;break;case 17:for(;R<14;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(p.nlen=257+(31&M),M>>>=5,R-=5,p.ndist=1+(31&M),M>>>=5,R-=5,p.ncode=4+(15&M),M>>>=4,R-=4,286<p.nlen||30<p.ndist){_.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;R<3;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.lens[D[p.have++]]=7&M,M>>>=3,R-=3}for(;p.have<19;)p.lens[D[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,F={bits:p.lenbits},U=l(0,p.lens,0,19,p.lencode,0,p.work,F),p.lenbits=F.bits,U){_.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;de=(x=p.lencode[M&(1<<p.lenbits)-1])>>>16&255,ke=65535&x,!((le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(ke<16)M>>>=le,R-=le,p.lens[p.have++]=ke;else{if(ke===16){for(k=le+2;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(M>>>=le,R-=le,p.have===0){_.msg="invalid bit length repeat",p.mode=30;break}h=p.lens[p.have-1],K=3+(3&M),M>>>=2,R-=2}else if(ke===17){for(k=le+3;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}R-=le,h=0,K=3+(7&(M>>>=le)),M>>>=3,R-=3}else{for(k=le+7;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}R-=le,h=0,K=11+(127&(M>>>=le)),M>>>=7,R-=7}if(p.have+K>p.nlen+p.ndist){_.msg="invalid bit length repeat",p.mode=30;break}for(;K--;)p.lens[p.have++]=h}}if(p.mode===30)break;if(p.lens[256]===0){_.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,F={bits:p.lenbits},U=l(d,p.lens,0,p.nlen,p.lencode,0,p.work,F),p.lenbits=F.bits,U){_.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,F={bits:p.distbits},U=l(u,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,F),p.distbits=F.bits,U){_.msg="invalid distances set",p.mode=30;break}if(p.mode=20,z===6)break e;case 20:p.mode=21;case 21:if(6<=V&&258<=ne){_.next_out=se,_.avail_out=ne,_.next_in=W,_.avail_in=V,p.hold=M,p.bits=R,c(_,Y),se=_.next_out,ee=_.output,ne=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,M=p.hold,R=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;de=(x=p.lencode[M&(1<<p.lenbits)-1])>>>16&255,ke=65535&x,!((le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(de&&(240&de)==0){for(ye=le,Ge=de,Ue=ke;de=(x=p.lencode[Ue+((M&(1<<ye+Ge)-1)>>ye)])>>>16&255,ke=65535&x,!(ye+(le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}M>>>=ye,R-=ye,p.back+=ye}if(M>>>=le,R-=le,p.back+=le,p.length=ke,de===0){p.mode=26;break}if(32&de){p.back=-1,p.mode=12;break}if(64&de){_.msg="invalid literal/length code",p.mode=30;break}p.extra=15&de,p.mode=22;case 22:if(p.extra){for(k=p.extra;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.length+=M&(1<<p.extra)-1,M>>>=p.extra,R-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;de=(x=p.distcode[M&(1<<p.distbits)-1])>>>16&255,ke=65535&x,!((le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if((240&de)==0){for(ye=le,Ge=de,Ue=ke;de=(x=p.distcode[Ue+((M&(1<<ye+Ge)-1)>>ye)])>>>16&255,ke=65535&x,!(ye+(le=x>>>24)<=R);){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}M>>>=ye,R-=ye,p.back+=ye}if(M>>>=le,R-=le,p.back+=le,64&de){_.msg="invalid distance code",p.mode=30;break}p.offset=ke,p.extra=15&de,p.mode=24;case 24:if(p.extra){for(k=p.extra;R<k;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}p.offset+=M&(1<<p.extra)-1,M>>>=p.extra,R-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){_.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(ne===0)break e;if(K=Y-ne,p.offset>K){if((K=p.offset-K)>p.whave&&p.sane){_.msg="invalid distance too far back",p.mode=30;break}be=K>p.wnext?(K-=p.wnext,p.wsize-K):p.wnext-K,K>p.length&&(K=p.length),Te=p.window}else Te=ee,be=se-p.offset,K=p.length;for(ne<K&&(K=ne),ne-=K,p.length-=K;ee[se++]=Te[be++],--K;);p.length===0&&(p.mode=21);break;case 26:if(ne===0)break e;ee[se++]=p.length,ne--,p.mode=21;break;case 27:if(p.wrap){for(;R<32;){if(V===0)break e;V--,M|=H[W++]<<R,R+=8}if(Y-=ne,_.total_out+=Y,p.total+=Y,Y&&(_.adler=p.check=p.flags?o(p.check,ee,Y,se-Y):s(p.check,ee,Y,se-Y)),Y=ne,(p.flags?M:b(M))!==p.check){_.msg="incorrect data check",p.mode=30;break}R=M=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;R<32;){if(V===0)break e;V--,M+=H[W++]<<R,R+=8}if(M!==(4294967295&p.total)){_.msg="incorrect length check",p.mode=30;break}R=M=0}p.mode=29;case 29:U=1;break e;case 30:U=-3;break e;case 31:return-4;case 32:default:return f}return _.next_out=se,_.avail_out=ne,_.next_in=W,_.avail_in=V,p.hold=M,p.bits=R,(p.wsize||Y!==_.avail_out&&p.mode<30&&(p.mode<27||z!==4))&&Q(_,_.output,_.next_out,Y-_.avail_out)?(p.mode=31,-4):(ae-=_.avail_in,Y-=_.avail_out,_.total_in+=ae,_.total_out+=Y,p.total+=Y,p.wrap&&Y&&(_.adler=p.check=p.flags?o(p.check,ee,Y,_.next_out-Y):s(p.check,ee,Y,_.next_out-Y)),_.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(ae==0&&Y===0||z===4)&&U===y&&(U=-5),U)},a.inflateEnd=function(_){if(!_||!_.state)return f;var z=_.state;return z.window&&(z.window=null),_.state=null,y},a.inflateGetHeader=function(_,z){var p;return _&&_.state?(2&(p=_.state).wrap)==0?f:((p.head=z).done=!1,y):f},a.inflateSetDictionary=function(_,z){var p,H=z.length;return _&&_.state?(p=_.state).wrap!==0&&p.mode!==11?f:p.mode===11&&s(1,z,H,0)!==p.check?-3:Q(_,z,H,H)?(p.mode=31,-4):(p.havedict=1,y):f},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,a){var n=i("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(d,u,y,f,g,m,v,b){var w,S,T,E,O,I,L,P,j,Q=b.bits,_=0,z=0,p=0,H=0,ee=0,W=0,se=0,V=0,ne=0,M=0,R=null,ae=0,Y=new n.Buf16(16),K=new n.Buf16(16),be=null,Te=0;for(_=0;_<=15;_++)Y[_]=0;for(z=0;z<f;z++)Y[u[y+z]]++;for(ee=Q,H=15;1<=H&&Y[H]===0;H--);if(H<ee&&(ee=H),H===0)return g[m++]=20971520,g[m++]=20971520,b.bits=1,0;for(p=1;p<H&&Y[p]===0;p++);for(ee<p&&(ee=p),_=V=1;_<=15;_++)if(V<<=1,(V-=Y[_])<0)return-1;if(0<V&&(d===0||H!==1))return-1;for(K[1]=0,_=1;_<15;_++)K[_+1]=K[_]+Y[_];for(z=0;z<f;z++)u[y+z]!==0&&(v[K[u[y+z]]++]=z);if(I=d===0?(R=be=v,19):d===1?(R=s,ae-=257,be=o,Te-=257,256):(R=c,be=l,-1),_=p,O=m,se=z=M=0,T=-1,E=(ne=1<<(W=ee))-1,d===1&&852<ne||d===2&&592<ne)return 1;for(;;){for(L=_-se,j=v[z]<I?(P=0,v[z]):v[z]>I?(P=be[Te+v[z]],R[ae+v[z]]):(P=96,0),w=1<<_-se,p=S=1<<W;g[O+(M>>se)+(S-=w)]=L<<24|P<<16|j|0,S!==0;);for(w=1<<_-1;M&w;)w>>=1;if(w!==0?(M&=w-1,M+=w):M=0,z++,--Y[_]==0){if(_===H)break;_=u[y+v[z]]}if(ee<_&&(M&E)!==T){for(se===0&&(se=ee),O+=p,V=1<<(W=_-se);W+se<H&&!((V-=Y[W+se])<=0);)W++,V<<=1;if(ne+=1<<W,d===1&&852<ne||d===2&&592<ne)return 1;g[T=M&E]=ee<<24|W<<16|O-m|0}}return M!==0&&(g[O+M]=_-se<<24|64<<16|0),b.bits=ee,0}},{"../utils/common":41}],51:[function(i,r,a){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,a){var n=i("../utils/common"),s=0,o=1;function c(x){for(var B=x.length;0<=--B;)x[B]=0}var l=0,d=29,u=256,y=u+1+d,f=30,g=19,m=2*y+1,v=15,b=16,w=7,S=256,T=16,E=17,O=18,I=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(y+2));c(Q);var _=new Array(2*f);c(_);var z=new Array(512);c(z);var p=new Array(256);c(p);var H=new Array(d);c(H);var ee,W,se,V=new Array(f);function ne(x,B,D,$,A){this.static_tree=x,this.extra_bits=B,this.extra_base=D,this.elems=$,this.max_length=A,this.has_stree=x&&x.length}function M(x,B){this.dyn_tree=x,this.max_code=0,this.stat_desc=B}function R(x){return x<256?z[x]:z[256+(x>>>7)]}function ae(x,B){x.pending_buf[x.pending++]=255&B,x.pending_buf[x.pending++]=B>>>8&255}function Y(x,B,D){x.bi_valid>b-D?(x.bi_buf|=B<<x.bi_valid&65535,ae(x,x.bi_buf),x.bi_buf=B>>b-x.bi_valid,x.bi_valid+=D-b):(x.bi_buf|=B<<x.bi_valid&65535,x.bi_valid+=D)}function K(x,B,D){Y(x,D[2*B],D[2*B+1])}function be(x,B){for(var D=0;D|=1&x,x>>>=1,D<<=1,0<--B;);return D>>>1}function Te(x,B,D){var $,A,G=new Array(v+1),J=0;for($=1;$<=v;$++)G[$]=J=J+D[$-1]<<1;for(A=0;A<=B;A++){var Z=x[2*A+1];Z!==0&&(x[2*A]=be(G[Z]++,Z))}}function le(x){var B;for(B=0;B<y;B++)x.dyn_ltree[2*B]=0;for(B=0;B<f;B++)x.dyn_dtree[2*B]=0;for(B=0;B<g;B++)x.bl_tree[2*B]=0;x.dyn_ltree[2*S]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function de(x){8<x.bi_valid?ae(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function ke(x,B,D,$){var A=2*B,G=2*D;return x[A]<x[G]||x[A]===x[G]&&$[B]<=$[D]}function ye(x,B,D){for(var $=x.heap[D],A=D<<1;A<=x.heap_len&&(A<x.heap_len&&ke(B,x.heap[A+1],x.heap[A],x.depth)&&A++,!ke(B,$,x.heap[A],x.depth));)x.heap[D]=x.heap[A],D=A,A<<=1;x.heap[D]=$}function Ge(x,B,D){var $,A,G,J,Z=0;if(x.last_lit!==0)for(;$=x.pending_buf[x.d_buf+2*Z]<<8|x.pending_buf[x.d_buf+2*Z+1],A=x.pending_buf[x.l_buf+Z],Z++,$===0?K(x,A,B):(K(x,(G=p[A])+u+1,B),(J=I[G])!==0&&Y(x,A-=H[G],J),K(x,G=R(--$),D),(J=L[G])!==0&&Y(x,$-=V[G],J)),Z<x.last_lit;);K(x,S,B)}function Ue(x,B){var D,$,A,G=B.dyn_tree,J=B.stat_desc.static_tree,Z=B.stat_desc.has_stree,re=B.stat_desc.elems,he=-1;for(x.heap_len=0,x.heap_max=m,D=0;D<re;D++)G[2*D]!==0?(x.heap[++x.heap_len]=he=D,x.depth[D]=0):G[2*D+1]=0;for(;x.heap_len<2;)G[2*(A=x.heap[++x.heap_len]=he<2?++he:0)]=1,x.depth[A]=0,x.opt_len--,Z&&(x.static_len-=J[2*A+1]);for(B.max_code=he,D=x.heap_len>>1;1<=D;D--)ye(x,G,D);for(A=re;D=x.heap[1],x.heap[1]=x.heap[x.heap_len--],ye(x,G,1),$=x.heap[1],x.heap[--x.heap_max]=D,x.heap[--x.heap_max]=$,G[2*A]=G[2*D]+G[2*$],x.depth[A]=(x.depth[D]>=x.depth[$]?x.depth[D]:x.depth[$])+1,G[2*D+1]=G[2*$+1]=A,x.heap[1]=A++,ye(x,G,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(fe,Me){var Nt,Xe,Wt,we,si,nr,rt=Me.dyn_tree,sn=Me.max_code,fd=Me.stat_desc.static_tree,dd=Me.stat_desc.has_stree,ud=Me.stat_desc.extra_bits,on=Me.stat_desc.extra_base,Dt=Me.stat_desc.max_length,oi=0;for(we=0;we<=v;we++)fe.bl_count[we]=0;for(rt[2*fe.heap[fe.heap_max]+1]=0,Nt=fe.heap_max+1;Nt<m;Nt++)Dt<(we=rt[2*rt[2*(Xe=fe.heap[Nt])+1]+1]+1)&&(we=Dt,oi++),rt[2*Xe+1]=we,sn<Xe||(fe.bl_count[we]++,si=0,on<=Xe&&(si=ud[Xe-on]),nr=rt[2*Xe],fe.opt_len+=nr*(we+si),dd&&(fe.static_len+=nr*(fd[2*Xe+1]+si)));if(oi!==0){do{for(we=Dt-1;fe.bl_count[we]===0;)we--;fe.bl_count[we]--,fe.bl_count[we+1]+=2,fe.bl_count[Dt]--,oi-=2}while(0<oi);for(we=Dt;we!==0;we--)for(Xe=fe.bl_count[we];Xe!==0;)sn<(Wt=fe.heap[--Nt])||(rt[2*Wt+1]!==we&&(fe.opt_len+=(we-rt[2*Wt+1])*rt[2*Wt],rt[2*Wt+1]=we),Xe--)}})(x,B),Te(G,he,x.bl_count)}function h(x,B,D){var $,A,G=-1,J=B[1],Z=0,re=7,he=4;for(J===0&&(re=138,he=3),B[2*(D+1)+1]=65535,$=0;$<=D;$++)A=J,J=B[2*($+1)+1],++Z<re&&A===J||(Z<he?x.bl_tree[2*A]+=Z:A!==0?(A!==G&&x.bl_tree[2*A]++,x.bl_tree[2*T]++):Z<=10?x.bl_tree[2*E]++:x.bl_tree[2*O]++,G=A,he=(Z=0)===J?(re=138,3):A===J?(re=6,3):(re=7,4))}function U(x,B,D){var $,A,G=-1,J=B[1],Z=0,re=7,he=4;for(J===0&&(re=138,he=3),$=0;$<=D;$++)if(A=J,J=B[2*($+1)+1],!(++Z<re&&A===J)){if(Z<he)for(;K(x,A,x.bl_tree),--Z!=0;);else A!==0?(A!==G&&(K(x,A,x.bl_tree),Z--),K(x,T,x.bl_tree),Y(x,Z-3,2)):Z<=10?(K(x,E,x.bl_tree),Y(x,Z-3,3)):(K(x,O,x.bl_tree),Y(x,Z-11,7));G=A,he=(Z=0)===J?(re=138,3):A===J?(re=6,3):(re=7,4)}}c(V);var F=!1;function k(x,B,D,$){Y(x,(l<<1)+($?1:0),3),(function(A,G,J,Z){de(A),ae(A,J),ae(A,~J),n.arraySet(A.pending_buf,A.window,G,J,A.pending),A.pending+=J})(x,B,D)}a._tr_init=function(x){F||((function(){var B,D,$,A,G,J=new Array(v+1);for(A=$=0;A<d-1;A++)for(H[A]=$,B=0;B<1<<I[A];B++)p[$++]=A;for(p[$-1]=A,A=G=0;A<16;A++)for(V[A]=G,B=0;B<1<<L[A];B++)z[G++]=A;for(G>>=7;A<f;A++)for(V[A]=G<<7,B=0;B<1<<L[A]-7;B++)z[256+G++]=A;for(D=0;D<=v;D++)J[D]=0;for(B=0;B<=143;)Q[2*B+1]=8,B++,J[8]++;for(;B<=255;)Q[2*B+1]=9,B++,J[9]++;for(;B<=279;)Q[2*B+1]=7,B++,J[7]++;for(;B<=287;)Q[2*B+1]=8,B++,J[8]++;for(Te(Q,y+1,J),B=0;B<f;B++)_[2*B+1]=5,_[2*B]=be(B,5);ee=new ne(Q,I,u+1,y,v),W=new ne(_,L,0,f,v),se=new ne(new Array(0),P,0,g,w)})(),F=!0),x.l_desc=new M(x.dyn_ltree,ee),x.d_desc=new M(x.dyn_dtree,W),x.bl_desc=new M(x.bl_tree,se),x.bi_buf=0,x.bi_valid=0,le(x)},a._tr_stored_block=k,a._tr_flush_block=function(x,B,D,$){var A,G,J=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(Z){var re,he=4093624447;for(re=0;re<=31;re++,he>>>=1)if(1&he&&Z.dyn_ltree[2*re]!==0)return s;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return o;for(re=32;re<u;re++)if(Z.dyn_ltree[2*re]!==0)return o;return s})(x)),Ue(x,x.l_desc),Ue(x,x.d_desc),J=(function(Z){var re;for(h(Z,Z.dyn_ltree,Z.l_desc.max_code),h(Z,Z.dyn_dtree,Z.d_desc.max_code),Ue(Z,Z.bl_desc),re=g-1;3<=re&&Z.bl_tree[2*j[re]+1]===0;re--);return Z.opt_len+=3*(re+1)+5+5+4,re})(x),A=x.opt_len+3+7>>>3,(G=x.static_len+3+7>>>3)<=A&&(A=G)):A=G=D+5,D+4<=A&&B!==-1?k(x,B,D,$):x.strategy===4||G===A?(Y(x,2+($?1:0),3),Ge(x,Q,_)):(Y(x,4+($?1:0),3),(function(Z,re,he,fe){var Me;for(Y(Z,re-257,5),Y(Z,he-1,5),Y(Z,fe-4,4),Me=0;Me<fe;Me++)Y(Z,Z.bl_tree[2*j[Me]+1],3);U(Z,Z.dyn_ltree,re-1),U(Z,Z.dyn_dtree,he-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,J+1),Ge(x,x.dyn_ltree,x.dyn_dtree)),le(x),$&&de(x)},a._tr_tally=function(x,B,D){return x.pending_buf[x.d_buf+2*x.last_lit]=B>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&B,x.pending_buf[x.l_buf+x.last_lit]=255&D,x.last_lit++,B===0?x.dyn_ltree[2*D]++:(x.matches++,B--,x.dyn_ltree[2*(p[D]+u+1)]++,x.dyn_dtree[2*R(B)]++),x.last_lit===x.lit_bufsize-1},a._tr_align=function(x){Y(x,2,3),K(x,S,Q),(function(B){B.bi_valid===16?(ae(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,r,a){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,a){(function(n){(function(s,o){if(!s.setImmediate){var c,l,d,u,y=1,f={},g=!1,m=s.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(s);v=v&&v.setTimeout?v:s,c={}.toString.call(s.process)==="[object process]"?function(T){process.nextTick(function(){w(T)})}:(function(){if(s.postMessage&&!s.importScripts){var T=!0,E=s.onmessage;return s.onmessage=function(){T=!1},s.postMessage("","*"),s.onmessage=E,T}})()?(u="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",S,!1):s.attachEvent("onmessage",S),function(T){s.postMessage(u+T,"*")}):s.MessageChannel?((d=new MessageChannel).port1.onmessage=function(T){w(T.data)},function(T){d.port2.postMessage(T)}):m&&"onreadystatechange"in m.createElement("script")?(l=m.documentElement,function(T){var E=m.createElement("script");E.onreadystatechange=function(){w(T),E.onreadystatechange=null,l.removeChild(E),E=null},l.appendChild(E)}):function(T){setTimeout(w,0,T)},v.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var E=new Array(arguments.length-1),O=0;O<E.length;O++)E[O]=arguments[O+1];var I={callback:T,args:E};return f[y]=I,c(y),y++},v.clearImmediate=b}function b(T){delete f[T]}function w(T){if(g)setTimeout(w,0,T);else{var E=f[T];if(E){g=!0;try{(function(O){var I=O.callback,L=O.args;switch(L.length){case 0:I();break;case 1:I(L[0]);break;case 2:I(L[0],L[1]);break;case 3:I(L[0],L[1],L[2]);break;default:I.apply(o,L)}})(E)}finally{b(T),g=!1}}}}function S(T){T.source===s&&typeof T.data=="string"&&T.data.indexOf(u)===0&&w(+T.data.slice(u.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(wi)),wi.exports}var $s=Ds();const qs=Ws($s);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function N(t){if(!t)throw new Error("Assertion failed.")}const js=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},We=t=>t&&t[t.length-1],st=t=>t>=0&&t<2**32,X=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},Ye=t=>{const e=X(t);return(e&1)===0?-(e>>1):e+1>>1},Fe=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),Gt=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),De=new TextEncoder,Xt={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Zt={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Kt={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Vs=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,xi=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Ir{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(a=>{let n=!1;e=()=>{n||(a(),this.pending--,n=!0)}}),r=this.currentPromise;return this.currentPromise=i,this.pending++,await r,e}}const Pr=(t,e,i)=>{let r=0,a=t.length-1,n=-1;for(;r<=a;){const s=r+(a-r+1)/2|0;i(t[s])<=e?(n=s,r=s+1):a=s-1}return n},Rr=()=>{let t,e;return{promise:new Promise((r,a)=>{t=r,e=a}),resolve:t,reject:e}},pt=t=>{throw new Error(`Unexpected value: ${t}`)},Gs=(t,e,i)=>{const r=t.getUint8(e),a=t.getUint8(e+1),n=t.getUint8(e+2);return r<<16|a<<8|n},Xs=(t,e,i,r)=>{i=i>>>0,i=i&16777215,t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255)},Mr=(t,e,i)=>Math.max(e,Math.min(i,t)),Zs=(t,e,i)=>t+(e-t)*i,Ks="und",zr=(t,e)=>Math.round(t/e)*e,Fr=(t,e)=>Math.floor(t*e)/e,Qs=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},Ys=/^[a-z]{3}$/,Js=t=>Ys.test(t),gt=1e6*(1+Number.EPSILON),eo=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let r=0,a=1,n=1,s=0,o=t;for(;;){const c=Math.floor(o),l=c*n+r,d=c*s+a;if(d>e)return{num:i*n,den:s};if(r=n,a=s,n=l,s=d,o=1/(o-c),!isFinite(o))break}return{num:i*n,den:s}};class to{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let _i=null;const Or=()=>_i!==null?_i:_i=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let ki=null;const io=()=>ki!==null?ki:ki=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let Si=null;const ro=()=>{if(Si!==null)return Si;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?Si=Number(t[1]):null},Hr=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},ao=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},no=(t,e)=>{let i=-1,r=1/0;for(let a=0;a<t.length;a++){const n=e(t[a]);n<r&&(r=n,i=a)}return i},Lr=t=>{N(Number.isInteger(t.num)),N(Number.isInteger(t.den)),N(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const a=e%i;e=i,i=a}const r=e||1;return{num:t.num/r,den:t.den/r}},Ti=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},so=t=>new Promise(e=>setTimeout(e,t)),Ur=t=>Array.isArray(t)?t:[t];class Ci{constructor(){this._listeners=new Map}on(e,i,r){this._listeners.has(e)||this._listeners.set(e,new Set);const a={fn:i,once:r?.once??!1};return this._listeners.get(e).add(a),()=>{this._listeners.get(e)?.delete(a)}}_emit(...e){const[i,r]=e,a=this._listeners.get(i);if(a)for(const n of a){try{n.fn(r)}catch(s){console.error(s)}n.once&&a.delete(n)}}}const oo=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var $e;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})($e||($e={}));class ge{constructor(){}static get level(){return ge._level}static set level(e){if(e!==$e.Silent&&e!==$e.Errors&&e!==$e.Warnings&&e!==$e.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");ge._level=e}static get _emitter(){return ge._emitterInstance??=new Ci}static on(e,i,r){return ge._emitter.on(e,i,r)}static _error(...e){ge._emitter._emit("error",e),ge._level>=$e.Errors&&console.error(...e)}static _warn(...e){ge._emitter._emit("warn",e),ge._level>=$e.Warnings&&console.warn(...e)}static _info(...e){ge._emitter._emit("info",e),ge._level>=$e.Info&&console.info(...e)}}ge._level=$e.Info,ge._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Nr{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class co{constructor(e,i,r,a){if(this.data=e,this.mimeType=i,this.name=r,this.description=a,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("name, when provided, must be a string.");if(a!==void 0&&typeof a!="string")throw new TypeError("description, when provided, must be a string.")}}const lo=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof Nr)&&!(e instanceof co)&&!oo(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},fo=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class _e{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,r=7-(this.pos&7),a=(i&1<<r)>>r;return this.pos++,a}readBits(e){if(e===1)return this.readBit();let i=0;for(let r=0;r<e;r++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const r=this.pos+e;for(let a=this.pos;a<r;a++){const n=Math.floor(a/8);let s=this.bytes[n];const o=7-(a&7);s&=~(1<<o),s|=(i&1<<r-a-1)>>r-a-1<<o,this.bytes[n]=s}this.pos=r}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new _e(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Wr=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Dr=[-1,1,2,3,4,5,6,8],uo=t=>{let e=Wr.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const r=Dr.indexOf(t.numberOfChannels);if(r===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let a=13;t.objectType>=32&&(a+=6),e===15&&(a+=24);const n=Math.ceil(a/8),s=new Uint8Array(n),o=new _e(s);return t.objectType<32?o.writeBits(5,t.objectType):(o.writeBits(5,31),o.writeBits(6,t.objectType-32)),o.writeBits(4,e),e===15&&o.writeBits(24,i),o.writeBits(4,r),s};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Je=["avc","hevc","vp9","av1","vp8","prores"],ft=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Ei=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Qt=[...Ei,...ft],Et=["webvtt"],Yt=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],$r=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],qr=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],jr=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Bt=["ap4x","ap4h","apch","apcn","apcs","apco"],Bi=["dtsc","dtsh","dtsl","dtse"],ho=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],mo=(t,e,i,r,a)=>{if(t==="avc"){const s=Math.ceil(e/16)*Math.ceil(i/16),o=Yt.find(y=>s<=y.maxMacroblocks&&r<=y.maxBitrate)??We(Yt),c=o?o.level:0,l="64".padStart(2,"0"),d="00",u=c.toString(16).padStart(2,"0");return`avc1.${l}${d}${u}`}else if(t==="hevc"){const c=e*i,l=$r.find(u=>c<=u.maxPictureSize&&r<=u.maxBitrate)??We($r);return`hev1.1.6.${l.tier}${l.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const s=e*i;return`vp09.00.${(qr.find(l=>s<=l.maxPictureSize&&r<=l.maxBitrate)??We(qr)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const s=e*i,o=jr.find(d=>s<=d.maxPictureSize&&r<=d.maxBitrate)??We(jr);return`av01.0.${o.level.toString().padStart(2,"0")}${o.tier}.08`}else if(t==="prores"){const s=Math.pow(e*i/2073600,.95),o=ho.filter(d=>d.alpha===a);let c=o[0].fourCc,l=1/0;for(const{fourCc:d,bitrate:u}of o){const y=Math.abs(u*s-r);y<l&&(l=y,c=d)}return c}else pt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},po=t=>{const e=t.split("."),a=(1<<7)+1,n=Number(e[1]),s=e[2],o=Number(s.slice(0,-1)),c=(n<<5)+o,l=s.slice(-1)==="H"?1:0,u=Number(e[3])===8?0:1,y=0,f=e[4]?Number(e[4]):0,g=e[5]?Number(e[5][0]):1,m=e[5]?Number(e[5][1]):1,v=e[5]?Number(e[5][2]):0,b=(l<<7)+(u<<6)+(y<<5)+(f<<4)+(g<<3)+(m<<2)+v;return[a,c,b,0]},Vr=/^pcm-([usf])(\d+)(be)?$/,vt=t=>{if(N(ft.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Vr.exec(t);N(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const r=Number(e[2])/8,a=e[3]!=="be",n=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:r,littleEndian:a,silentValue:n}},Ai=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Bt.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Bi.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":Vr.test(t)?t:t==="webvtt"?"webvtt":null,go=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},vo=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Bt],bo=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,yo=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,wo=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,xo=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Gr=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!vo.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!xi(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const r=Object.keys(Xt);if(i.primaries!=null&&!r.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${r.join(", ")}.`);const a=Object.keys(Zt);if(i.transfer!=null&&!a.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${a.join(", ")}.`);const n=Object.keys(Kt);if(i.matrix!=null&&!n.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${n.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!bo.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!yo.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!wo.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!xo.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Bt.some(i=>t.decoderConfig.codec.startsWith(i))&&!Bt.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Bt.join(", ")}.`);if(e!==null&&Ai(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},_o=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],Xr=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!_o.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!xi(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Bi.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Bi.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!ft.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${ft.join(", ")}).`);if(e!==null&&Ai(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},ko=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const So=[48e3,44100,32e3],To=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var et;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(et||(et={}));var Ie;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Ie||(Ie={}));const At=function*(t){let e=0,i=-1;for(;e<t.length-2;){const r=t.indexOf(0,e);if(r===-1||r>=t.length-2)break;e=r;let a=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?a=4:t[e+1]===0&&t[e+2]===1&&(a=3),a===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+a,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Zr=function*(t,e){let i=0;const r=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let a;e===1?a=r.getUint8(i):e===2?a=r.getUint16(i,!1):e===3?a=Gs(r,i):(N(e===4),a=r.getUint32(i,!1)),i+=e,yield{offset:i,length:a},i+=a}},Co=(t,e)=>{if(e.description){const a=(Fe(e.description)[4]&3)+1;return Zr(t,a)}else return At(t)},Kr=t=>t&31,Jt=t=>{const e=[],i=t.length;for(let r=0;r<i;r++)r+2<i&&t[r]===0&&t[r+1]===0&&t[r+2]===3?(e.push(0,0),r+=2):e.push(t[r]);return new Uint8Array(e)},Eo=(t,e)=>{const i=t.reduce((n,s)=>n+e+s.byteLength,0),r=new Uint8Array(i);let a=0;for(const n of t){const s=new DataView(r.buffer,r.byteOffset,r.byteLength);switch(e){case 1:s.setUint8(a,n.byteLength);break;case 2:s.setUint16(a,n.byteLength,!1);break;case 3:Xs(s,a,n.byteLength);break;case 4:s.setUint32(a,n.byteLength,!1);break}a+=e,r.set(n,a),a+=n.byteLength}return r},Bo=t=>{try{const e=[],i=[],r=[];for(const o of At(t)){const c=t.subarray(o.offset,o.offset+o.length),l=Kr(c[0]);l===et.SPS?e.push(c):l===et.PPS?i.push(c):l===et.SPS_EXT&&r.push(c)}if(e.length===0||i.length===0)return null;const a=e[0],n=Io(a);N(n!==null);const s=n.profileIdc===100||n.profileIdc===110||n.profileIdc===122||n.profileIdc===144;return{configurationVersion:1,avcProfileIndication:n.profileIdc,profileCompatibility:n.constraintFlags,avcLevelIndication:n.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:s?n.chromaFormatIdc:null,bitDepthLumaMinus8:s?n.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?n.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?r:null}}catch(e){return ge._error("Error building AVC Decoder Configuration Record:",e),null}},Ao=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){N(t.chromaFormat!==null),N(t.bitDepthLumaMinus8!==null),N(t.bitDepthChromaMinus8!==null),N(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let a=0;a<r;a++)e.push(i[a])}}return new Uint8Array(e)},Qr={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Io=t=>{try{const e=new _e(Jt(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const r=e.readAlignedByte(),a=e.readAlignedByte(),n=e.readAlignedByte();X(e);let s=1,o=0,c=0,l=0;if((r===100||r===110||r===122||r===244||r===44||r===83||r===86||r===118||r===128)&&(s=X(e),s===3&&(l=e.readBits(1)),o=X(e),c=X(e),e.skipBits(1),e.readBits(1))){for(let _=0;_<(s!==3?8:12);_++)if(e.readBits(1)){const p=_<6?16:64;let H=8,ee=8;for(let W=0;W<p;W++){if(ee!==0){const se=Ye(e);ee=(H+se+256)%256}H=ee===0?H:ee}}}X(e);const d=X(e);if(d===0)X(e);else if(d===1){e.skipBits(1),Ye(e),Ye(e);const Q=X(e);for(let _=0;_<Q;_++)Ye(e)}X(e),e.skipBits(1);const u=X(e),y=X(e),f=16*(u+1),g=16*(y+1);let m=f,v=g;const b=e.readBits(1);if(b||e.skipBits(1),e.skipBits(1),e.readBits(1)){const Q=X(e),_=X(e),z=X(e),p=X(e);let H,ee;if((l===0?s:0)===0)H=1,ee=2-b;else{const se=s===3?1:2,V=s===1?2:1;H=se,ee=V*(2-b)}m-=H*(Q+_),v-=ee*(z+p)}let S=2,T=2,E=2,O=0,I={num:1,den:1},L=null,P=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)I={num:e.readBits(16),den:e.readBits(16)};else{const ne=Qr[V];ne&&(I=ne)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),O=e.readBits(1),e.readBits(1)&&(S=e.readBits(8),T=e.readBits(8),E=e.readBits(8))),e.readBits(1)&&(X(e),X(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const ee=e.readBits(1);ee&&Yr(e);const W=e.readBits(1);W&&Yr(e),(ee||W)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),X(e),X(e),X(e),X(e),L=X(e),P=X(e))}if(L===null){N(P===null);const Q=a&16;if((r===44||r===86||r===100||r===110||r===122||r===244)&&Q)L=0,P=0;else{const _=u+1,z=y+1,p=(2-b)*z,H=Yt.find(W=>W.level>=n)??We(Yt),ee=Math.min(Math.floor(H.maxDpbMbs/(_*p)),16);L=ee,P=ee}}return N(P!==null),{profileIdc:r,constraintFlags:a,levelIdc:n,frameMbsOnlyFlag:b,chromaFormatIdc:s,bitDepthLumaMinus8:o,bitDepthChromaMinus8:c,codedWidth:f,codedHeight:g,displayWidth:m,displayHeight:v,pixelAspectRatio:I,colourPrimaries:S,matrixCoefficients:E,transferCharacteristics:T,fullRangeFlag:O,numReorderFrames:L,maxDecFrameBuffering:P}}catch(e){return ge._error("Error parsing AVC SPS:",e),null}},Yr=t=>{const e=X(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)X(t),X(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},Po=(t,e)=>{if(e.description){const a=(Fe(e.description)[21]&3)+1;return Zr(t,a)}else return At(t)},Ii=t=>t>>1&63,Ro=t=>{try{const e=new _e(Jt(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),r=e.readBits(1),{general_profile_space:a,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:o,general_constraint_indicator_flags:c,general_level_idc:l}=zo(e,i);X(e);const d=X(e);let u=0;d===3&&(u=e.readBits(1));const y=X(e),f=X(e);let g=y,m=f;if(e.readBits(1)){const _=X(e),z=X(e),p=X(e),H=X(e);let ee=1,W=1;const se=u===0?d:0;se===1?(ee=2,W=2):se===2&&(ee=2,W=1),g-=(_+z)*ee,m-=(p+H)*W}const v=X(e),b=X(e);X(e);const S=e.readBits(1)?0:i;let T=0;for(let _=S;_<=i;_++)X(e),T=X(e),X(e);X(e),X(e),X(e),X(e),X(e),X(e),e.readBits(1)&&e.readBits(1)&&Fo(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),X(e),X(e),e.skipBits(1));const E=X(e);if(Oo(e,E),e.readBits(1)){const _=X(e);for(let z=0;z<_;z++)X(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let O=2,I=2,L=2,P=0,j=0,Q={num:1,den:1};if(e.readBits(1)){const _=Lo(e,i);Q=_.pixelAspectRatio,O=_.colourPrimaries,I=_.transferCharacteristics,L=_.matrixCoefficients,P=_.fullRangeFlag,j=_.minSpatialSegmentationIdc}return{displayWidth:g,displayHeight:m,pixelAspectRatio:Q,colourPrimaries:O,transferCharacteristics:I,matrixCoefficients:L,fullRangeFlag:P,maxDecFrameBuffering:T+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:r,generalProfileSpace:a,generalTierFlag:n,generalProfileIdc:s,generalProfileCompatibilityFlags:o,generalConstraintIndicatorFlags:c,generalLevelIdc:l,chromaFormatIdc:d,bitDepthLumaMinus8:v,bitDepthChromaMinus8:b,minSpatialSegmentationIdc:j}}catch(e){return ge._error("Error parsing HEVC SPS:",e),null}},Mo=t=>{try{const e=[],i=[],r=[],a=[];for(const l of At(t)){const d=t.subarray(l.offset,l.offset+l.length),u=Ii(d[0]);u===Ie.VPS_NUT?e.push(d):u===Ie.SPS_NUT?i.push(d):u===Ie.PPS_NUT?r.push(d):(u===Ie.PREFIX_SEI_NUT||u===Ie.SUFFIX_SEI_NUT)&&a.push(d)}if(i.length===0||r.length===0)return null;const n=Ro(i[0]);if(!n)return null;let s=0;if(r.length>0){const l=r[0],d=new _e(Jt(l));d.skipBits(16),X(d),X(d),d.skipBits(1),d.skipBits(1),d.skipBits(3),d.skipBits(1),d.skipBits(1),X(d),X(d),Ye(d),d.skipBits(1),d.skipBits(1),d.readBits(1)&&X(d),Ye(d),Ye(d),d.skipBits(1),d.skipBits(1),d.skipBits(1),d.skipBits(1);const u=d.readBits(1),y=d.readBits(1);!u&&!y?s=0:u&&!y?s=2:!u&&y?s=3:s=0}const o=[...e.length?[{arrayCompleteness:1,nalUnitType:Ie.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Ie.SPS_NUT,nalUnits:i}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:Ie.PPS_NUT,nalUnits:r}]:[],...a.length?[{arrayCompleteness:1,nalUnitType:Ii(a[0][0]),nalUnits:a}]:[]];return{configurationVersion:1,generalProfileSpace:n.generalProfileSpace,generalTierFlag:n.generalTierFlag,generalProfileIdc:n.generalProfileIdc,generalProfileCompatibilityFlags:n.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:n.generalConstraintIndicatorFlags,generalLevelIdc:n.generalLevelIdc,minSpatialSegmentationIdc:n.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:n.chromaFormatIdc,bitDepthLumaMinus8:n.bitDepthLumaMinus8,bitDepthChromaMinus8:n.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:n.spsMaxSubLayersMinus1+1,temporalIdNested:n.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:o}}catch(e){return ge._error("Error building HEVC Decoder Configuration Record:",e),null}},zo=(t,e)=>{const i=t.readBits(2),r=t.readBits(1),a=t.readBits(5);let n=0;for(let d=0;d<32;d++)n=n<<1|t.readBits(1);const s=new Uint8Array(6);for(let d=0;d<6;d++)s[d]=t.readBits(8);const o=t.readBits(8),c=[],l=[];for(let d=0;d<e;d++)c.push(t.readBits(1)),l.push(t.readBits(1));if(e>0)for(let d=e;d<8;d++)t.skipBits(2);for(let d=0;d<e;d++)c[d]&&t.skipBits(88),l[d]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:r,general_profile_idc:a,general_profile_compatibility_flags:n,general_constraint_indicator_flags:s,general_level_idc:o}},Fo=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))X(t);else{const a=Math.min(64,1<<4+(e<<1));e>1&&Ye(t);for(let n=0;n<a;n++)Ye(t)}},Oo=(t,e)=>{const i=[];for(let r=0;r<e;r++)i[r]=Ho(t,r,e,i)},Ho=(t,e,i,r)=>{let a=0,n=0,s=0;if(e!==0&&(n=t.readBits(1)),n){if(e===i){const c=X(t);s=e-(c+1)}else s=e-1;t.readBits(1),X(t);const o=r[s]??0;for(let c=0;c<=o;c++)t.readBits(1)||t.readBits(1);a=r[s]}else{const o=X(t),c=X(t);for(let l=0;l<o;l++)X(t),t.readBits(1);for(let l=0;l<c;l++)X(t),t.readBits(1);a=o+c}return a},Lo=(t,e)=>{let i=2,r=2,a=2,n=0,s=0,o={num:1,den:1};if(t.readBits(1)){const c=t.readBits(8);if(c===255)o={num:t.readBits(16),den:t.readBits(16)};else{const l=Qr[c];l&&(o=l)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),n=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),r=t.readBits(8),a=t.readBits(8))),t.readBits(1)&&(X(t),X(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(X(t),X(t),X(t),X(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&X(t),t.readBits(1)&&Uo(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=X(t),X(t),X(t),X(t),X(t)),{pixelAspectRatio:o,colourPrimaries:i,transferCharacteristics:r,matrixCoefficients:a,fullRangeFlag:n,minSpatialSegmentationIdc:s}},Uo=(t,e,i)=>{let r=!1,a=!1,n=!1;r=t.readBits(1)===1,a=t.readBits(1)===1,(r||a)&&(n=t.readBits(1)===1,n&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),n&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let s=0;s<=i;s++){const o=t.readBits(1)===1;let c=!0;o||(c=t.readBits(1)===1);let l=!1;c?X(t):l=t.readBits(1)===1;let d=1;l||(d=X(t)+1),r&&Jr(t,d,n),a&&Jr(t,d,n)}},Jr=(t,e,i)=>{for(let r=0;r<e;r++)X(t),X(t),i&&(X(t),X(t)),t.readBits(1)},No=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const r of i.nalUnits){e.push(r.length>>8&255),e.push(r.length&255);for(let a=0;a<r.length;a++)e.push(r[a])}}return new Uint8Array(e)};var ea;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(ea||(ea={}));const Wo=function*(t){const e=new _e(t),i=()=>{let r=0;for(let a=0;a<8;a++){const n=e.readAlignedByte();if(r|=(n&127)<<a*7,!(n&128))break;if(a===7&&n&128)return null}return r>=2**32-1?null:r};for(;e.getBitsLeft()>=8;){e.skipBits(1);const r=e.readBits(4),a=e.readBits(1),n=e.readBits(1);e.skipBits(1),a&&e.skipBits(8);let s;if(n){const o=i();if(o===null)return;s=o}else s=Math.floor(e.getBitsLeft()/8);N(e.pos%8===0),yield{type:r,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},Do=t=>{const e=Gt(t),i=e.getUint8(9),r=e.getUint16(10,!0),a=e.getUint32(12,!0),n=e.getInt16(16,!0),s=e.getUint8(18);let o=null;return s&&(o=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:r,inputSampleRate:a,outputGain:n,channelMappingFamily:s,channelMappingTable:o}},$o=(t,e,i)=>{switch(t){case"avc":{for(const r of Co(i,e)){const a=i[r.offset],n=Kr(a);if(n>=et.NON_IDR_SLICE&&n<=et.SLICE_DPC)return"delta";if(n===et.IDR)return"key";if(n===et.SEI&&(!io()||ro()>=144)){const s=i.subarray(r.offset,r.offset+r.length),o=Jt(s);let c=1;do{let l=0;for(;;){const y=o[c++];if(y===void 0||(l+=y,y<255))break}let d=0;for(;;){const y=o[c++];if(y===void 0||(d+=y,y<255))break}if(l===6){const y=new _e(o);y.pos=8*c;const f=X(y),g=y.readBits(1);if(f===0&&g===1)return"key"}c+=d}while(c<o.length-1)}}return"delta"}case"hevc":{for(const r of Po(i,e)){const a=Ii(i[r.offset]);if(a<Ie.BLA_W_LP)return"delta";if(a<=Ie.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const r=new _e(i);if(r.readBits(2)!==2)return null;const a=r.readBits(1);return(r.readBits(1)<<1)+a===3&&r.skipBits(1),r.readBits(1)?null:r.readBits(1)===0?"key":"delta"}case"av1":{let r=!1;for(const{type:a,data:n}of Wo(i))if(a===1){const s=new _e(n);s.skipBits(4),r=!!s.readBits(1)}else if(a===3||a===6||a===7){if(r)return"key";const s=new _e(n);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:pt(t),N(!1)}};var ta;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(ta||(ta={}));const qo=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const r=e.readBits(6),a=e.readBits(5);if(a>8)return null;const n=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);const o=e.readBits(1),c=Math.floor(r/2);return{fscod:i,bsid:a,bsmod:n,acmod:s,lfeon:o,bitRateCode:c}},jo=[1,2,3,6],Vo=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new _e(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const r=e.readBits(11),a=e.readBits(2);let n=0,s;a===3?(n=e.readBits(2),s=3):s=e.readBits(2);const o=e.readBits(3),c=e.readBits(1),l=e.readBits(5);if(l<11||l>16)return null;const d=jo[s];let u;return a<3?u=So[a]/1e3:u=To[n]/1e3,{dataRate:Math.round((r+1)*u/(d*16)),substreams:[{fscod:a,fscod2:n,bsid:l,bsmod:0,acmod:o,lfeon:c,numDepSub:0,chanLoc:0}]}},Go=1683496997,Xo=18,Zo=10,ia=32,Ko=20,Qo=8,Yo=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Jo=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],ec=[16,16,20,20,0,24,24,0],ra=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],tc=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],ic=8,rc=[32e3,44100,48e3,0],ac=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],nc=[512,1024,2048,4096],sc=t=>{const e=oc(t),i=Gt(t);let r=e?Math.ceil(e.frameSize/4)*4:0,a=null;for(;r+4<=t.length&&i.getUint32(r)===Go;){const s=cc(t.subarray(r));if(!s)break;a??=s,r+=s.frameSize}if(e)return{frameSize:a?r:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:a!==null};if(!a?.asset)return null;const{asset:n}=a;return{frameSize:r,sampleRate:n.sampleRate,numberOfChannels:n.numberOfChannels,sampleCount:n.sampleCount,channelLayout:n.channelLayout,pcmResolution:n.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},oc=t=>{if(t.length<Xo||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new _e(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==ia-1)return null;const i=e.readBits(1),r=e.readBits(7)+1;if(r%Qo!==0)return null;const a=e.readBits(14)+1;if(a<96)return null;const n=e.readBits(6);if(n>=ra.length)return null;const s=Yo[e.readBits(4)];if(s===0)return null;const o=Jo[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const c=e.readBits(2);if(c===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const l=ec[e.readBits(3)];if(l===0)return null;const d=c!==0;return{frameSize:a,sampleRate:s,numberOfChannels:ra[n]+(d?1:0),sampleCount:r*ia,channelLayout:tc[n]|(d?ic:0),amode:n,lfePresent:d,bitRate:o,pcmResolution:l}},cc=t=>{if(t.length<Zo||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new _e(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),r=e.readBits(1),a=8+4*r,n=16+4*r;e.skipBits(a);const s=e.readBits(n)+1,o={frameSize:s,asset:null};if(!e.readBits(1))return o;const c=rc[e.readBits(2)],l=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const d=e.readBits(3)+1,u=e.readBits(3)+1,y=[];for(let b=0;b<d;b++)y.push(e.readBits(i+1));for(const b of y)e.skipBits(8*Qs(b));if(e.readBits(1)){e.skipBits(2);const b=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*b)}for(let b=0;b<u;b++)e.skipBits(n);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const f=e.readBits(5)+1,g=ac[e.readBits(4)],m=e.readBits(8)+1;let v=0;if(e.readBits(1)&&(m>2&&e.skipBits(1),m>6&&e.skipBits(1),e.readBits(1))){const b=e.readBits(2)+1<<2;v=e.readBits(b)}return c===0||e.getBitsLeft()<0?o:{frameSize:s,asset:{sampleRate:g,numberOfChannels:m,sampleCount:Math.round(l*g/c),channelLayout:v,pcmResolution:f}}},lc=t=>{const e=new Uint8Array(Ko),i=Gt(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const r=t.core&&!t.hasExtensions?1:0,a=new _e(e);return a.seekToByte(13),a.writeBits(2,Math.max(nc.indexOf(t.sampleCount),0)),a.writeBits(5,r),a.writeBits(1,t.core?.lfePresent?1:0),a.writeBits(6,t.core?.amode??0),a.writeBits(14,t.core?t.core.frameSize-1:0),a.writeBits(1,0),a.writeBits(3,0),a.writeBits(16,t.channelLayout),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(1,0),a.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const aa=new Uint8Array(0);class dt{constructor(e,i,r,a,n=-1,s,o){if(this.data=e,this.type=i,this.timestamp=r,this.duration=a,this.sequenceNumber=n,e===aa&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(r))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(a)||a<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(n))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(o!==void 0&&(typeof o!="object"||!o))throw new TypeError("sideData, when provided, must be an object.");if(o?.alpha!==void 0&&!(o.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(o?.alphaByteLength!==void 0&&(!Number.isInteger(o.alphaByteLength)||o.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=o??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===aa}get microsecondTimestamp(){return Math.trunc(gt*this.timestamp)}get microsecondDuration(){return Math.trunc(gt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const r=new Uint8Array(e.byteLength);return e.copyTo(r),new dt(r,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new dt(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const fc=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const r=[...new Set(t.codecStrings)];i+=`; codecs="${r.join(", ")}"`}return i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Pi=8,na=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const dc=7,uc=9,sa=t=>{const e=t.filePos,i=Ec(t,9),r=new _e(i);if(r.readBits(12)!==4095||(r.skipBits(1),r.readBits(2)!==0))return null;const s=r.readBits(1),o=r.readBits(2)+1,c=r.readBits(4);if(c===15)return null;r.skipBits(1);const l=r.readBits(3);if(l===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);const d=r.readBits(13);r.skipBits(11);const u=r.readBits(2)+1;if(u!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let y=null;return s===1?t.filePos-=2:y=r.readBits(16),{objectType:o,samplingFrequencyIndex:c,channelConfiguration:l,frameLength:d,numberOfAacFrames:u,crcCheck:y,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var hc=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(a=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");a&&(r=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},mc=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,a=0;function n(){for(;r=e.stack.pop();)try{if(!r.async&&a===1)return a=0,e.stack.push(r),Promise.resolve().then(n);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return a|=2,Promise.resolve(s).then(n,function(o){return i(o),n()})}else a|=1}catch(o){i(o)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});ao();let oa=-1/0,ca=-1/0,Ri=null;typeof FinalizationRegistry<"u"&&(Ri=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-oa>=1e3&&(ge._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),oa=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-ca>=1e3&&(ge._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),ca=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class ut{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Mi=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],pc=new Set(Mi);class Ee{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(gt*this.timestamp)}get microsecondDuration(){return Math.trunc(gt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!pc.has(i.format))throw new TypeError("init.format must be one of: "+Mi.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const n of i.layout){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(n.offset)||n.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(n.stride)||n.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Ti(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const r=i.layout??bc(i.format,i.codedWidth,i.codedHeight);let a=i.colorSpace??null;a===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?a={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:a={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?Fe(e):Fe(e).slice(),this._layout=r,this.colorSpace=new zi(a)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Ti(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new zi(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Ti(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Ee(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*gt),duration:Math.trunc((i.duration??0)*gt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let r=0,a=0;if("naturalWidth"in e?(r=e.naturalWidth,a=e.naturalHeight):"videoWidth"in e?(r=e.videoWidth,a=e.videoHeight):"width"in e&&(r=Number(e.width),a=Number(e.height)),!r||!a)throw new TypeError("Could not determine dimensions.");const n=i.visibleRect??{left:0,top:0,width:r,height:a},s=new OffscreenCanvas(n.width,n.height),o=s.getContext("2d",{alpha:Or(),willReadFrequently:!0});if(!o)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");o.drawImage(e,-n.left,-n.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:n.width,height:n.height},this.squarePixelWidth=n.width,this.squarePixelHeight=n.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new zi({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof ut){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Mi.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=Lr({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Ri?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return N(this._data!==null),this._data instanceof ut?new Ee(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Pt(this._data)?new Ee(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(N(this._layout),new Ee(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Ee(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Ri?.unregister(this),this._data instanceof ut?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Pt(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(ua(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Pt(this._data)?this._data.allocationSize(e):ha(this,e).allocationSize}async copyTo(e,i={}){if(!xi(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(ua(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(N(this._data!==null),Pt(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof ut){const l={stack:[],error:void 0,hasError:!1};try{const d=hc(l,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(d instanceof Ee))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(d.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${d.format}' instead.`);return await d.copyTo(e,i)}catch(d){l.error=d,l.hasError=!0}finally{mc(l)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const l=this.toVideoFrame(),d=await l.copyTo(e,i);return l.close(),d}const r=ha(this,i);N(this.format);const a=Fe(e);if(a.byteLength<r.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${r.allocationSize}, Available: ${a.byteLength}`);const n=ei(this.format);let s;if(this._data instanceof ut){let l=this._data.getDataPlanes();if(l instanceof Promise&&(l=await l),!Array.isArray(l)||l.some(d=>!(d.data instanceof Uint8Array)||!Number.isInteger(d.stride)||d.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=l}else if(this._data instanceof Uint8Array)N(this._layout),N(this._layout.length===n.length),s=this._layout.map((l,d)=>{const u=Math.ceil(this.codedHeight/n[d].heightDivisor);return{data:this._data.subarray(l.offset,l.offset+l.stride*u),stride:l.stride}});else{const d=this._data.getContext("2d");N(d);const u=d.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:Fe(u.data),stride:4*this.codedWidth}]}const o=[],c=n.length;for(let l=0;l<c;l++){const d=r.computedLayouts[l],u=s[l].stride,y=s[l].data;let f=d.sourceTop*u;f+=d.sourceLeftBytes;let g=d.destinationOffset;const m=d.sourceWidthBytes,v={offset:g,stride:d.destinationStride};for(let b=0;b<d.sourceHeight;b++){if(f+m>y.byteLength)throw new Error("Source buffer OOB read.");if(g+m>a.byteLength)throw new Error("Destination buffer OOB write.");const w=y.subarray(f,f+m);a.set(w,g),f+=u,g+=d.destinationStride}o.push(v)}if(i.format!==void 0){const l=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),d=this.format.includes("X")&&i.format.includes("A");if(l||d)for(let u=0;u<r.allocationSize;u+=4){if(l){const y=a[u],f=a[u+2];a[u]=f,a[u+2]=y}d&&(a[u+3]=255)}}return o}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof ut){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((s,o)=>s+o.data.byteLength,0),r=new Uint8Array(i);let a=0;const n=[];for(const s of e)r.set(s.data,a),n.push(a),a+=s.data.byteLength;return new VideoFrame(r,{format:this.format,layout:e.map((s,o)=>({offset:n[o],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Pt(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(N(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,r,a,n,s,o,c,l){let d=0,u=0,y=this.displayWidth,f=this.displayHeight,g=0,m=0,v=this.displayWidth,b=this.displayHeight;if(s!==void 0?(d=i,u=r,y=a,f=n,g=s,m=o,c!==void 0?(v=c,b=l):(v=y,b=f)):(g=i,m=r,a!==void 0&&(v=a,b=n)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(d))throw new TypeError("sx must be a number.");if(!Number.isFinite(u))throw new TypeError("sy must be a number.");if(!Number.isFinite(y)||y<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(g))throw new TypeError("dx must be a number.");if(!Number.isFinite(m))throw new TypeError("dy must be a number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(b)||b<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:d,sy:u,sWidth:y,sHeight:f}=this._rotateSourceRegion(d,u,y,f,this.rotation));const w=this.toCanvasImageSource();e.save();const S=g+v/2,T=m+b/2;e.translate(S,T),e.rotate(this.rotation*Math.PI/180);const E=this.rotation%180===0?1:v/b;e.scale(1/E,E),e.drawImage(w,d,u,y,f,-v/2,-b/2,v,b),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&Fi(i.crop,"options.");const r=e.canvas.width,a=e.canvas.height,n=i.rotation??this.rotation,[s,o]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let c=i.crop;c&&(c=da(c,s,o));let l,d,u,y;const{sx:f,sy:g,sWidth:m,sHeight:v}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??s,i.crop?.height??o,n);if(i.fit==="fill")l=0,d=0,u=r,y=a;else{const[w,S]=i.crop?[i.crop.width,i.crop.height]:[s,o],T=i.fit==="contain"?Math.min(r/w,a/S):Math.max(r/w,a/S);u=w*T,y=S*T,l=(r-u)/2,d=(a-y)/2}e.save();const b=n%180===0?1:u/y;e.translate(r/2,a/2),e.rotate(n*Math.PI/180),e.scale(1/b,b),e.translate(-r/2,-a/2),e.drawImage(this.toCanvasImageSource(),f,g,m,v,l,d,u,y),e.restore()}_rotateSourceRegion(e,i,r,a,n){return n===90?[e,i,r,a]=[i,this.squarePixelHeight-e-r,a,r]:n===180?[e,i]=[this.squarePixelWidth-e-r,this.squarePixelHeight-i-a]:n===270&&([e,i,r,a]=[this.squarePixelWidth-i-a,e,a,r]),{sx:e,sy:i,sWidth:r,sHeight:a}}_drawWithFitAndMipmapping(e,i,r){const a=e.width,n=e.height,[s,o]=r.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=r.crop?r.crop.width:s,l=r.crop?r.crop.height:o;let d=0;2*a<c&&2*n<l&&(d=Math.floor(Math.log2(Math.min(c/a,l/n))));const u=a*2**d,y=n*2**d,{canvas:f,context:g,isNew:m}=d>0?fa(u,y):{canvas:e,context:i,isNew:r.targetIsFresh};g.imageSmoothingQuality="high",r.fillBlack?(g.fillStyle="black",g.fillRect(0,0,u,y)):m||g.clearRect(0,0,u,y),this.drawWithFit(g,{fit:r.fit,rotation:r.rotation,crop:r.crop}),g.globalCompositeOperation="copy";for(let v=d;v>1;v--){const b=a*2**v,w=n*2**v;g.drawImage(f,0,0,b,w,0,0,b/2,w/2)}g.globalCompositeOperation="source-over",d>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(f,0,0,2*a,2*n,0,0,a,n),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof ut||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&Fi(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=js(this.rotation+(e.rotate??0)),[r,a]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n=e.crop;n&&(n=da(n,r,a));const s=n?n.width:r,o=n?n.height:a,c=s/o;let l,d;e.width!==void 0&&e.height===void 0?(l=e.width,d=l/c):e.width===void 0&&e.height!==void 0?(d=e.height,l=d*c):e.width!==void 0&&e.height!==void 0?(l=e.width,d=e.height):(l=s,d=o),l=zr(l,e.roundDimensionsTo??1),d=zr(d,e.roundDimensionsTo??1);const u={width:l,height:d,fit:e.fit??"fill",rotation:i,crop:n??{left:0,top:0,width:r,height:a},alpha:e.alpha??"keep"};for(const m of gc){let v=m(this,u);if(v instanceof Promise&&(v=await v),v!==null)return v}const{canvas:y,context:f,isNew:g}=fa(u.width,u.height);return this._drawWithFitAndMipmapping(y,f,{fit:u.fit,rotation:u.rotation,crop:u.crop,targetIsFresh:g,fillBlack:u.alpha==="discard"}),new Ee(y,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const gc=[],vc=3,It=[];let la=0;const fa=(t,e)=>{for(const a of It)if(a.canvas.width===t&&a.canvas.height===e)return a.age=la++,{canvas:a.canvas,context:a.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const r=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!r)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return It.length>=vc&&It.splice(no(It,a=>a.age),1),It.push({canvas:i,context:r,age:la++}),{canvas:i,context:r,isNew:!0}};class zi{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Xt);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const r=Object.keys(Zt);if(e.transfer!=null&&!r.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${r.join(", ")}.`);const a=Object.keys(Kt);if(e.matrix!=null&&!a.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${a.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Pt=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,da=(t,e,i)=>{const r=Math.min(t.left,e),a=Math.min(t.top,i),n=Math.min(t.width,e-r),s=Math.min(t.height,i-a);return N(n>=0),N(s>=0),{left:r,top:a,width:n,height:s}},Fi=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},ua=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},bc=(t,e,i)=>{const r=ei(t),a=[];let n=0;for(const s of r){const o=Math.ceil(e/s.widthDivisor),c=Math.ceil(i/s.heightDivisor),l=o*s.sampleBytes,d=l*c;a.push({offset:n,stride:l}),n+=d}return a},ei=t=>{const e=(i,r,a,n,s)=>{const o=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:r,widthDivisor:a,heightDivisor:n},{sampleBytes:r,widthDivisor:a,heightDivisor:n}];return s&&o.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),o};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:pt(t),N(!1)}},ha=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},r=e.rect,a=yc(i,r,t.codedWidth,t.codedHeight,t.format),n=e.layout;let s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return xc(a,s,n)},yc=(t,e,i,r,a)=>{const n={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>r)throw new TypeError("visibleRect exceeds codedHeight.");n.x=e.x||0,n.y=e.y||0,n.width=e.width||0,n.height=e.height||0}if(!wc(a,n))throw new TypeError("visibleRect alignment is invalid for the format.");return n},wc=(t,e)=>{if(t===null)return!0;const i=ei(t);for(let r=0;r<i.length;r++){const a=i[r],n=a.widthDivisor,s=a.heightDivisor;if((e.x||0)%n!==0||(e.y||0)%s!==0)return!1}return!0},xc=(t,e,i)=>{const r=ei(e),a=r.length;if(i!==void 0&&i.length!==a)throw new TypeError(`Layout must have ${a} planes.`);let n=0;const s=[],o=[];for(let c=0;c<a;c++){const l=r[c],d=l.sampleBytes,u=l.widthDivisor,y=l.heightDivisor,f={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(f.sourceTop=Math.ceil(Math.trunc(t.y||0)/y),f.sourceHeight=Math.ceil(Math.trunc(t.height||0)/y),f.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/u)*d,f.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/u)*d,i!==void 0){const v=i[c];if(v.stride<f.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);f.destinationOffset=v.offset,f.destinationStride=v.stride}else f.destinationOffset=n,f.destinationStride=f.sourceWidthBytes;const m=f.destinationStride*f.sourceHeight+f.destinationOffset;if(m>4294967295)throw new TypeError("Allocation size exceeds limit.");o.push(m),n=Math.max(n,m);for(let v=0;v<c;v++){const b=s[v];if(!(o[c]<=b.destinationOffset||o[v]<=f.destinationOffset))throw new TypeError("Planes overlap.")}s.push(f)}return{allocationSize:n,computedLayouts:s}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ma=new Map,_c=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Je.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${Je.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ot))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ot)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&Fi(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");pa(t.codec,t)},pa=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Ai(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},ga=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),r=(n,s,o)=>({codec:t.fullCodecString??mo(t.codec,t.width,t.height,o,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:n,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...go(t.codec)}),a=[];return i.quantizer!==null&&a.push({config:r(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&a.push({config:r(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),N(a.length>0),a};class ot{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in va):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?va[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,r,a){const n=kc[e];let s=null,o=this._bitrateMode??a??"variable";if(this._quantizer!==void 0){if(n)if(this._quantizer<n.min||this._quantizer>n.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${n.min} and ${n.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(o="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&n&&!this._preferBitrate&&(N(this._quality!==void 0),s=Mr(Math.round(Zs(n.worst,n.best,this._quality)),n.min,n.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let l=this._quality;l===void 0&&(N(s!==null&&n),l=Mr((s-n.worst)/(n.best-n.worst),0,1)),c=ba(e,i,r,Oi(l))}return{quantizer:s,bitrate:c,bitrateMode:o}}_toVideoBitrate(e,i,r){return this._bitrate!==void 0?this._bitrate:(N(this._quality!==void 0),ba(e,i,r,Oi(this._quality)))}_toAudioBitrate(e){if(ft.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=Oi(this._quality),a={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!a)throw new Error(`Unhandled codec: ${e}`);let n=a*i;return e==="aac"?n=[96e3,128e3,16e4,192e3].reduce((o,c)=>Math.abs(c-n)<Math.abs(o-n)?c:o):e==="opus"||e==="vorbis"?n=Math.max(6e3,n):e==="mp3"&&(n=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((o,c)=>Math.abs(c-n)<Math.abs(o-n)?c:o)),Math.round(n/1e3)*1e3}}const va={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},kc={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Oi=t=>.3*Math.exp(2.5538*t),ba=(t,e,i,r)=>{const a=e*i,n=1920*1080,s=3e6,o=Math.pow(a/n,.95),c=s*o,l={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},u=c*l[t]*r;return Math.ceil(u/1e3)*1e3},ya=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};N(!1)},Sc=async(t,e={})=>{const{width:i=1280,height:r=720,quality:a,bitrate:n,...s}=e;if(!Je.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(r)||r<=0)throw new TypeError("height must be a positive integer.");if(a!==void 0&&!(a instanceof ot))throw new TypeError("quality, when provided, must be a Quality.");if(a!==void 0&&n!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(n!==void 0&&!(n instanceof ot)&&(!Number.isInteger(n)||n<=0))throw new TypeError("bitrate must be a positive integer or a quality.");pa(t,s);const o=wa(a,n)??new ot("medium");let c;try{c=ga({codec:t,width:i,height:r,quality:o,framerate:void 0,...s,alpha:"discard"})}catch{return!1}const l=JSON.stringify(c),d=ma.get(l);if(d)return d;const u=(async()=>{for(const{config:f}of c)if(xa.some(g=>g.supports(t,f)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||r%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:f,quantizer:g}of c){try{if(!(await VideoEncoder.isConfigSupported(f)).supported)continue}catch{continue}if(!Or()||await new Promise(async v=>{try{const b=new VideoEncoder({output:()=>{},error:()=>v(!1)});b.configure(f);const w=new Uint8Array(i*r*4),S=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:r,timestamp:0});b.encode(S,g!==null?ya(t,g):void 0),S.close(),await b.flush(),v(!0)}catch{v(!1)}}))return!0}return!1})();return ma.set(l,u),u},wa=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ot?e:new ot({bitrate:e})},Tc=async(t,e)=>{for(const i of t)if(await Sc(i,e))return i;return null};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const xa=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Rt{constructor(e,i,r,a,n){this.bytes=e,this.view=i,this.offset=r,this.start=a,this.end=n,this.bufferPos=a-r}static tempFromBytes(e){return new Rt(e,Gt(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new Rt(this.bytes,this.view,this.offset,e,e+i)}}const Cc=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Ec=(t,e)=>{Cc(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Bc{constructor(e){this.mutex=new Ir,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,r){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let a=this.trackTimestampInfo.get(e);if(a){if(r&&(a.maxTimestampBeforeLastKeyPacket=a.maxTimestamp),a.maxTimestampBeforeLastKeyPacket!==null&&i<a.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${a.maxTimestampBeforeLastKeyPacket}s.`);a.maxTimestamp=Math.max(a.maxTimestamp,i)}else{if(!r)throw new Error("First packet must be a key packet.");a={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,a)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const _a=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,Ac=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),r=Math.floor(t%(60*1e3)/1e3),a=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+a.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ti{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const n of e.children)n&&this.writeBox(n);const r=this.writer.getPos(),a=e.size??r-i;this.writer.seek(i),this.writeBoxHeader(e,a),this.writer.seek(r)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);N(i!==void 0);const r=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(r)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const r of e.children)r&&(i+=this.measureBox(r));return i}}}const oe=new Uint8Array(8),Pe=new DataView(oe.buffer),ve=t=>[(t%256+256)%256],ie=t=>(Pe.setUint16(0,t,!1),[oe[0],oe[1]]),Hi=t=>(Pe.setInt16(0,t,!1),[oe[0],oe[1]]),ka=t=>(Pe.setUint32(0,t,!1),[oe[1],oe[2],oe[3]]),q=t=>(Pe.setUint32(0,t,!1),[oe[0],oe[1],oe[2],oe[3]]),tt=t=>(Pe.setInt32(0,t,!1),[oe[0],oe[1],oe[2],oe[3]]),qe=t=>(Pe.setUint32(0,Math.floor(t/2**32),!1),Pe.setUint32(4,t,!1),[oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7]]),Ic=t=>(Pe.setInt32(0,Math.floor(t/2**32),!1),Pe.setUint32(4,t,!1),[oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7]]),Sa=t=>(Pe.setInt16(0,2**8*t,!1),[oe[0],oe[1]]),Oe=t=>(Pe.setInt32(0,2**16*t,!1),[oe[0],oe[1],oe[2],oe[3]]),Li=t=>(Pe.setInt32(0,2**30*t,!1),[oe[0],oe[1],oe[2],oe[3]]),Ui=(t,e)=>{const i=[];let r=t;do{let a=r&127;r>>=7,i.length>0&&(a|=128),i.push(a)}while(r>0||e);return i.reverse()},ue=(t,e=!1)=>{const i=Array(t.length).fill(null).map((r,a)=>t.charCodeAt(a));return e&&i.push(0),i},Ta=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),r=Math.round(Math.sin(e));return[i,r,0,-r,i,0,0,0,1]},Ca=Ta(0),Ea=t=>[Oe(t[0]),Oe(t[1]),Li(t[2]),Oe(t[3]),Oe(t[4]),Li(t[5]),Oe(t[6]),Oe(t[7]),Li(t[8])],te=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),ce=(t,e,i,r,a)=>te(t,[ve(e),ka(i),r??[]],a),Pc=t=>t.isQuickTime?te("ftyp",[ue("qt  "),q(512),ue("qt  ")]):t.fragmented?t.cmaf?te("ftyp",[ue("iso5"),q(512),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]):te("ftyp",[ue("iso5"),q(512),ue("iso5"),ue("iso6"),ue("mp41")]):te("ftyp",[ue("isom"),q(512),ue("isom"),t.holdsAvc?ue("avc1"):[],ue("mp41")]),Ba=()=>te("styp",[ue("iso5"),q(0),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]),Aa=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),ce("sidx",1,0,[q(1),q(Le),qe(pe(t.minWrittenTimestamp,Le)),qe(0),ie(0),ie(1),q(e&2147483647),q(pe(i,Le)),q(0)])},ii=t=>({type:"mdat",largeSize:t}),Rc=t=>({type:"free",size:t}),Mt=t=>te("moov",void 0,[Mc(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>zc(e,t.creationTime)),t.isFragmented?vl(t.trackDatas):null,Il(t)]),Mc=(t,e)=>{const i=Math.max(0,...e.map(s=>pe(ri(s),Le)+pe(s.startTimestampOffset??0,Le))),r=Math.max(0,...e.map(s=>s.track.id))+1,a=!st(t)||!st(i),n=a?qe:q;return ce("mvhd",+a,0,[n(t),n(t),q(Le),n(i),Oe(1),Sa(1),Array(10).fill(0),Ea(Ca),Array(24).fill(0),q(r)])},ri=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let r=0;r<t.samples.length;r++){const a=t.samples[r];a.timestamp<e&&(e=a.timestamp),a.timestamp+a.duration>i&&(i=a.timestamp+a.duration)}return e===1/0?0:i-e},zc=(t,e)=>{const i=Wl(t),r=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return te("trak",void 0,[Fc(t,e),r?Oc(t,t.startTimestampOffset):null,Hc(t,e),i.name!==void 0?te("udta",void 0,[te("name",[...De.encode(i.name)])]):null])},Fc=(t,e)=>{const i=pe(ri(t),Le)+pe(t.startTimestampOffset??0,Le),r=!st(e)||!st(i),a=r?qe:q;let n;if(t.type==="video"){const c=t.track.metadata.rotation;n=Ta(c??0)}else n=Ca;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);const o=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:pt(t);return ce("tkhd",+r,s,[a(e),a(e),q(t.track.id),q(0),a(i),Array(8).fill(0),ie(0),ie(o),Sa(t.type==="audio"?1:0),ie(0),Ea(n),Oe(t.type==="video"?t.info.width:0),Oe(t.type==="video"?t.info.height:0)])},Oc=(t,e)=>{const i=pe(e,Le),r=pe(ri(t),Le),a=!st(i)||!st(r),n=a?qe:q,s=a?Ic:tt;return te("edts",void 0,[ce("elst",a?1:0,0,[q(2),n(i),s(-1),Oe(1),n(r),s(0),Oe(1)])])},Hc=(t,e)=>te("mdia",void 0,[Lc(t,e),Ni(!0,Uc[t.type],Nc[t.type]),Wc(t)]),Lc=(t,e)=>{const i=pe(ri(t),t.timescale),r=!st(e)||!st(i),a=r?qe:q;return ce("mdhd",+r,0,[a(e),a(e),q(t.timescale),a(i),ie(Oa(t.track.metadata.languageCode??Ks)),ie(0)])},Uc={video:"vide",audio:"soun",subtitle:"text"},Nc={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Ni=(t,e,i,r="\0\0\0\0")=>ce("hdlr",0,0,[t?ue("mhlr"):q(0),ue(e),ue(r),q(0),q(0),ue(i,!0)]),Wc=t=>te("minf",void 0,[Dc[t.type](),$c(),Vc(t)]),Dc={video:()=>ce("vmhd",0,1,[ie(0),ie(0),ie(0),ie(0)]),audio:()=>ce("smhd",0,0,[ie(0),ie(0)]),subtitle:()=>ce("nmhd",0,0)},$c=()=>te("dinf",void 0,[qc()]),qc=()=>ce("dref",0,0,[q(1)],[jc()]),jc=()=>ce("url ",0,1),Vc=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return te("stbl",void 0,[Gc(t),fl(t),e?pl(t):null,e?gl(t):null,ul(t),hl(t),ml(t),dl(t)])},Gc=t=>{let e;if(t.type==="video")e=Xc(zl(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=Fa(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);N(i),e=el(i,t)}else t.type==="subtitle"&&(e=cl(Hl[t.track.source._codec],t));return N(e),ce("stsd",0,0,[q(1)],[e])},Xc=(t,e)=>te(t,[Array(6).fill(0),ie(1),ie(0),ie(0),Array(12).fill(0),ie(e.info.width),ie(e.info.height),q(4718592),q(4718592),q(0),ie(1),ve(10),ue("Mediabunny"),Array(21).fill(0),ie(e.info.hasAlphaChannel?32:24),Hi(65535)],[Fl[e.track.source._codec]?.(e)??null,Zc(e),Vs(e.info.decoderConfig.colorSpace)?Kc(e):null]),Zc=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:te("pasp",[q(t.info.pixelAspectRatio.num),q(t.info.pixelAspectRatio.den)]),Kc=t=>te("colr",[ue(t.muxer.isQuickTime?"nclc":"nclx"),ie(Xt[t.info.decoderConfig.colorSpace.primaries]),ie(Zt[t.info.decoderConfig.colorSpace.transfer]),ie(Kt[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:ve((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Qc=t=>t.info.decoderConfig&&te("avcC",[...Fe(t.info.decoderConfig.description)]),Yc=t=>t.info.decoderConfig&&te("hvcC",[...Fe(t.info.decoderConfig.description)]),Ia=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),r=Number(i[1]),a=Number(i[2]),n=Number(i[3]),s=i[4]?Number(i[4]):1,o=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),c=(n<<4)+(s<<1)+o,l=i[5]?Number(i[5]):e.colorSpace?.primaries?Xt[e.colorSpace.primaries]:2,d=i[6]?Number(i[6]):e.colorSpace?.transfer?Zt[e.colorSpace.transfer]:2,u=i[7]?Number(i[7]):e.colorSpace?.matrix?Kt[e.colorSpace.matrix]:2;return ce("vpcC",1,0,[ve(r),ve(a),ve(c),ve(l),ve(d),ve(u),ie(0)])},Jc=t=>te("av1C",po(t.info.decoderConfig.codec)),el=(t,e)=>{let i=0,r,a=16;const n=ft.includes(e.track.source._codec);if(n){const s=e.track.source._codec,{sampleSize:o}=vt(s);a=8*o,a>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)r=[Array(6).fill(0),ie(1),ie(i),ie(0),q(0),ie(e.info.numberOfChannels),ie(a),ie(0),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0)];else{const s=n?0:-2;r=[Array(6).fill(0),ie(1),ie(i),ie(0),q(0),ie(e.info.numberOfChannels),ie(Math.min(a,16)),Hi(s),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0),n?[q(1),q(a/8),q(e.info.numberOfChannels*a/8)]:[q(0),q(0),q(0)],q(2)]}return te(t,r,[Ol(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Wi=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...ve(e),...ve(21),...ka(0),...q(0),...q(0)];if(t.info.decoderConfig.description){const r=Fe(t.info.decoderConfig.description);i=[...i,...ve(5),...Ui(r.byteLength),...r]}return i=[...ie(1),...ve(0),...ve(4),...Ui(i.length),...i,...ve(6),...ve(1),...ve(2)],i=[...ve(3),...Ui(i.length),...i],ce("esds",0,0,i)},ct=t=>te("wave",void 0,[tl(t),il(t),te("\0\0\0\0")]),tl=t=>te("frma",[ue(Fa(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),il=t=>{const{littleEndian:e}=vt(t.track.source._codec);return te("enda",[ie(+e)])},rl=t=>{let e=t.info.numberOfChannels,i=3840,r=t.info.sampleRate,a=0,n=0,s=new Uint8Array(0);const o=t.info.decoderConfig?.description;if(o){N(o.byteLength>=18);const c=Fe(o),l=Do(c);e=l.outputChannelCount,i=l.preSkip,r=l.inputSampleRate,a=l.outputGain,n=l.channelMappingFamily,l.channelMappingTable&&(s=l.channelMappingTable)}return te("dOps",[ve(0),ve(e),ie(i),q(r),Hi(a),ve(n),...s])},al=t=>{const e=t.info.decoderConfig?.description;N(e);const i=Fe(e);return ce("dfLa",0,0,[...i.subarray(4)])},je=t=>{const{littleEndian:e,sampleSize:i}=vt(t.track.source._codec),r=+e;return ce("pcmC",0,0,[ve(r),ve(8*i)])},nl=t=>{N(t.info.primingPacket);const e=qo(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),r=new _e(i);return r.writeBits(2,e.fscod),r.writeBits(5,e.bsid),r.writeBits(3,e.bsmod),r.writeBits(3,e.acmod),r.writeBits(1,e.lfeon),r.writeBits(5,e.bitRateCode),r.writeBits(5,0),te("dac3",[...i])},sl=t=>{N(t.info.primingPacket);const e=Vo(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const s of e.substreams)i+=23,s.numDepSub>0?i+=9:i+=1;const r=Math.ceil(i/8),a=new Uint8Array(r),n=new _e(a);n.writeBits(13,e.dataRate),n.writeBits(3,e.substreams.length-1);for(const s of e.substreams)n.writeBits(2,s.fscod),n.writeBits(5,s.bsid),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(3,s.bsmod),n.writeBits(3,s.acmod),n.writeBits(1,s.lfeon),n.writeBits(3,0),n.writeBits(4,s.numDepSub),s.numDepSub>0?n.writeBits(9,s.chanLoc):n.writeBits(1,0);return te("dec3",[...a])},ol=t=>{N(t.info.primingPacket);const e=sc(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return te("ddts",[...lc(e)])},cl=(t,e)=>te(t,[Array(6).fill(0),ie(1)],[Ll[e.track.source._codec](e)]),ll=t=>te("vttC",[...De.encode(t.info.config.description)]),fl=t=>ce("stts",0,0,[q(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[q(e.sampleCount),q(e.sampleDelta)])]),dl=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return ce("stss",0,0,[q(e.length),e.map(([i])=>q(i+1))])},ul=t=>ce("stsc",0,0,[q(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[q(e.firstChunk),q(e.samplesPerChunk),q(1)])]),hl=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=vt(t.track.source._codec);return ce("stsz",0,0,[q(e*t.info.numberOfChannels),q(t.samples.reduce((i,r)=>i+pe(r.duration,t.timescale),0))])}return ce("stsz",0,0,[q(0),q(t.samples.length),t.samples.map(e=>q(e.size))])},ml=t=>t.finalizedChunks.length>0&&We(t.finalizedChunks).offset>=2**32?ce("co64",0,0,[q(t.finalizedChunks.length),t.finalizedChunks.map(e=>qe(e.offset))]):ce("stco",0,0,[q(t.finalizedChunks.length),t.finalizedChunks.map(e=>q(e.offset))]),pl=t=>ce("ctts",1,0,[q(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[q(e.sampleCount),tt(e.sampleCompositionTimeOffset)])]),gl=t=>{let e=1/0,i=-1/0,r=1/0,a=-1/0;N(t.compositionTimeOffsetTable.length>0),N(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){const o=t.compositionTimeOffsetTable[s];e=Math.min(e,o.sampleCompositionTimeOffset),i=Math.max(i,o.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){const o=t.samples[s];r=Math.min(r,pe(o.timestamp,t.timescale)),a=Math.max(a,pe(o.timestamp+o.duration,t.timescale))}const n=Math.max(-e,0);return a>=2**31?null:ce("cslg",0,0,[tt(n),tt(e),tt(i),tt(r),tt(a)])},vl=t=>te("mvex",void 0,t.map(bl)),bl=t=>ce("trex",0,0,[q(t.track.id),q(1),q(0),q(0),q(0)]),Pa=(t,e)=>te("moof",void 0,[yl(t),...e.map(wl)]),yl=t=>ce("mfhd",0,0,[q(t)]),Ra=t=>{let e=0,i=0;const r=0,a=0,n=t.type==="delta";return i|=+n,n?e|=1:e|=2,e<<24|i<<16|r<<8|a},wl=t=>te("traf",void 0,[xl(t),_l(t),kl(t)]),xl=t=>{N(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],r={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Ra(i)};return ce("tfhd",0,e,[q(t.track.id),q(r.duration),q(r.size),q(r.flags)])},_l=t=>(N(t.currentChunk),ce("tfdt",1,0,[qe(pe(t.currentChunk.startTimestamp,t.timescale))])),kl=t=>{N(t.currentChunk);const e=t.currentChunk.samples.map(m=>m.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(m=>m.size),r=t.currentChunk.samples.map(Ra),a=t.currentChunk.samples.map(m=>pe(m.timestamp-m.decodeTimestamp,t.timescale)),n=new Set(e),s=new Set(i),o=new Set(r),c=new Set(a),l=o.size===2&&r[0]!==r[1],d=n.size>1,u=s.size>1,y=!l&&o.size>1,f=c.size>1||[...c].some(m=>m!==0);let g=0;return g|=1,g|=4*+l,g|=256*+d,g|=512*+u,g|=1024*+y,g|=2048*+f,ce("trun",1,g,[q(t.currentChunk.samples.length),q(t.currentChunk.offset-t.currentChunk.moofOffset||0),l?q(r[0]):[],t.currentChunk.samples.map((m,v)=>[d?q(e[v]):[],u?q(i[v]):[],y?q(r[v]):[],f?tt(a[v]):[]])])},Sl=t=>te("mfra",void 0,[...t.map(Tl),Cl()]),Tl=t=>ce("tfra",1,0,[q(t.track.id),q(63),q(t.finalizedChunks.length),t.finalizedChunks.map(i=>[qe(pe(i.samples[0].timestamp,t.timescale)),qe(i.moofOffset),q(i.trafIndex+1),q(1),q(1)])]),Cl=()=>ce("mfro",0,0,[q(0)]),El=()=>te("vtte"),Bl=(t,e,i,r,a)=>te("vttc",void 0,[a!==null?te("vsid",[tt(a)]):null,i!==null?te("iden",[...De.encode(i)]):null,e!==null?te("ctim",[...De.encode(Ac(e))]):null,r!==null?te("sttg",[...De.encode(r)]):null,te("payl",[...De.encode(t)])]),Al=t=>te("vtta",[...De.encode(t)]),Il=t=>{const e=[],i=t.format._options.metadataFormat??"auto",r=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const a=Rl(r);a&&e.push(a)}else if(i==="mdta"){const a=Ml(r);a&&e.push(a)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&Pl(e,t.output._metadataTags);return e.length===0?null:te("udta",void 0,e)},Pl=(t,e)=>{for(const{key:i,value:r}of Hr(e))switch(i){case"title":t.push(Ve("©nam",r));break;case"description":t.push(Ve("©des",r));break;case"artist":t.push(Ve("©ART",r));break;case"album":t.push(Ve("©alb",r));break;case"albumArtist":t.push(Ve("albr",r));break;case"genre":t.push(Ve("©gen",r));break;case"date":t.push(Ve("©day",r.toISOString().slice(0,10)));break;case"comment":t.push(Ve("©cmt",r));break;case"lyrics":t.push(Ve("©lyr",r));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:pt(i)}if(e.raw)for(const i in e.raw){const r=e.raw[i];r==null||i.length!==4||t.some(a=>a.type===i)||(typeof r=="string"?t.push(Ve(i,r)):r instanceof Uint8Array&&t.push(te(i,Array.from(r))))}},Ve=(t,e)=>{const i=De.encode(e);return te(t,[ie(i.length),ie(Oa("und")),Array.from(i)])},Ma={"image/jpeg":13,"image/png":14,"image/bmp":27},za=(t,e)=>{const i=[];for(const{key:r,value:a}of Hr(t))switch(r){case"title":i.push({key:e?"title":"©nam",value:He(a)});break;case"description":i.push({key:e?"description":"©des",value:He(a)});break;case"artist":i.push({key:e?"artist":"©ART",value:He(a)});break;case"album":i.push({key:e?"album":"©alb",value:He(a)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:He(a)});break;case"comment":i.push({key:e?"comment":"©cmt",value:He(a)});break;case"genre":i.push({key:e?"genre":"©gen",value:He(a)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:He(a)});break;case"date":i.push({key:e?"date":"©day",value:He(a.toISOString().slice(0,10))});break;case"images":for(const n of a)n.kind==="coverFront"&&i.push({key:"covr",value:te("data",[q(Ma[n.mimeType]??0),q(0),Array.from(n.data)])});break;case"trackNumber":if(e){const n=t.tracksTotal!==void 0?`${a}/${t.tracksTotal}`:a.toString();i.push({key:"track",value:He(n)})}else i.push({key:"trkn",value:te("data",[q(0),q(0),ie(0),ie(a),ie(t.tracksTotal??0),ie(0)])});break;case"discNumber":e||i.push({key:"disc",value:te("data",[q(0),q(0),ie(0),ie(a),ie(t.discsTotal??0),ie(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:pt(r)}if(t.raw)for(const r in t.raw){const a=t.raw[r];a==null||!e&&r.length!==4||i.some(n=>n.key===r)||(typeof a=="string"?i.push({key:r,value:He(a)}):a instanceof Uint8Array?i.push({key:r,value:te("data",[q(0),q(0),Array.from(a)])}):a instanceof Nr&&i.push({key:r,value:te("data",[q(Ma[a.mimeType]??0),q(0),Array.from(a.data)])}))}return i},Rl=t=>{const e=za(t,!1);return e.length===0?null:ce("meta",0,0,void 0,[Ni(!1,"mdir","","appl"),te("ilst",void 0,e.map(i=>te(i.key,void 0,[i.value])))])},Ml=t=>{const e=za(t,!0);return e.length===0?null:te("meta",void 0,[Ni(!1,"mdta",""),ce("keys",0,0,[q(e.length)],e.map(i=>te("mdta",[...De.encode(i.key)]))),te("ilst",void 0,e.map((i,r)=>{const a=String.fromCharCode(...q(r+1));return te(a,void 0,[i.value])}))])},He=t=>te("data",[q(1),q(0),...De.encode(t)]),zl=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},Fl={avc:Qc,hevc:Yc,vp8:Ia,vp9:Ia,av1:Jc,prores:null},Fa=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},Ol=(t,e)=>{switch(t){case"aac":return Wi;case"mp3":return Wi;case"opus":return rl;case"vorbis":return Wi;case"flac":return al;case"ac3":return nl;case"eac3":return sl;case"dts":return ol}if(e)switch(t){case"pcm-s24":return ct;case"pcm-s24be":return ct;case"pcm-s32":return ct;case"pcm-s32be":return ct;case"pcm-f32":return ct;case"pcm-f32be":return ct;case"pcm-f64":return ct;case"pcm-f64be":return ct}else switch(t){case"pcm-s16":return je;case"pcm-s16be":return je;case"pcm-s24":return je;case"pcm-s24be":return je;case"pcm-s32":return je;case"pcm-s32be":return je;case"pcm-f32":return je;case"pcm-f32be":return je;case"pcm-f64":return je;case"pcm-f64be":return je}return null},Hl={webvtt:"wvtt"},Ll={webvtt:ll},Oa=t=>{N(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Di{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){N(!this.started),this.target._start(),this.started=!0}write(e){N(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return N(this.started&&!this.finalized),this.target._flush()}async finalize(){N(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const r=i+e.byteLength-this.trackedStart;let a=this.trackedWrites.byteLength;for(;a<r;)a*=2;if(a!==this.trackedWrites.byteLength){const n=new Uint8Array(a);n.set(this.trackedWrites,0),this.trackedWrites=n}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class it extends Ci{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new Ul(this,e)}}const $i=2**16,qi=2**32;class ai extends it{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer($i,{maxByteLength:qi})}catch{this._buffer=new ArrayBuffer($i),this._supportsResize=!1}else this._buffer=new ArrayBuffer($i);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>qi)throw new Error(`ArrayBuffer exceeded maximum size of ${qi} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const r=new ArrayBuffer(i),a=new Uint8Array(r);a.set(this._bytes,0),this._buffer=r,this._bytes=a}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class Ul extends it{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class ji{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Le=57600,Nl=2082844800,Wl=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},pe=(t,e,i=!0)=>{const r=t*e;return i?Math.round(r):r};class Dl extends Bc{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new ai,this.auxWriter=new Di(this.auxTarget,!1),this.auxBoxWriter=new ti(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Rr(),this.creationTime=Math.floor(Date.now()/1e3)+Nl,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Da,this.isCmaf=i instanceof Wa,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Wa?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(r=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":r instanceof ai),this.boxWriter=new ti(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof ai?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const r=await this.output._getInitTarget(),a=new Di(r,!0);a.start(),this.initWriter=a,this.initBoxWriter=new ti(a)}const i=this.output.tracks.some(r=>r.isVideoTrack()&&r.source._codec==="avc");{const r=this.initBoxWriter??this.boxWriter;if(N(r),this.formatOptions.onFtyp&&r.writer.startTrackingWrites(),r.writeBox(Pc({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:a,start:n}=r.writer.stopTrackingWrites();this.formatOptions.onFtyp(a,n)}this.ftypSize=r.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const r of this.output.tracks)if(r.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(N(this.writer),N(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ii(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const r of this.output.tracks)r.isVideoTrack()&&r.metadata.decoderConfig?this.getVideoTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig}):r.isAudioTrack()&&r.metadata.decoderConfig&&this.getAudioTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return fc({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,r){const a=this.trackDatas.find(f=>f.track===e);if(a)return a;Gr(r,e.source._codec),N(r),N(r.decoderConfig);const n={...r.decoderConfig};N(n.codedWidth!==void 0),N(n.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!n.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const f=Bo(i.data);if(!f)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");n.description=Ao(f),s=!0}else if(e.source._codec==="hevc"&&!n.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const f=Mo(i.data);if(!f)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");n.description=No(f),s=!0}const o=eo(1/(e.metadata.frameRate??Le),1e6).den,c=n.displayAspectWidth,l=n.displayAspectHeight,d=c===void 0||l===void 0?{num:1,den:1}:Lr({num:c*n.codedHeight,den:l*n.codedWidth}),u=n.codec==="ap4h"||n.codec==="ap4x",y={muxer:this,track:e,type:"video",info:{width:n.codedWidth,height:n.codedHeight,pixelAspectRatio:d,decoderConfig:n,requiresAnnexBTransformation:s,hasAlphaChannel:u},timescale:o,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(y),this.trackDatas.sort((f,g)=>f.track.id-g.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),y}getAudioTrackData(e,i,r){const a=this.trackDatas.find(c=>c.track===e);if(a)return a;Xr(r,e.source._codec),N(r),N(r.decoderConfig);const n={...r.decoderConfig};let s=!1;if(e.source._codec==="aac"&&!n.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=sa(Rt.tempFromBytes(i.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const l=Wr[c.samplingFrequencyIndex],d=Dr[c.channelConfiguration];if(l===void 0||d===void 0)throw new Error("Invalid ADTS frame header.");n.description=uo({objectType:c.objectType,sampleRate:l,numberOfChannels:d}),s=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const o={muxer:this,track:e,type:"audio",info:{numberOfChannels:r.decoderConfig.numberOfChannels,sampleRate:r.decoderConfig.sampleRate,decoderConfig:n,requiresPcmTransformation:!this.isFragmented&&ft.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:i},timescale:n.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(o),this.trackDatas.sort((c,l)=>c.track.id-l.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}getSubtitleTrackData(e,i){const r=this.trackDatas.find(n=>n.track===e);if(r)return r;ko(i),N(i),N(i.config);const a={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(a),this.trackDatas.sort((n,s)=>n.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),a}async addEncodedVideoPacket(e,i,r){const a=await this.mutex.acquire();try{const n=this.getVideoTrackData(e,i,r);let s=i.data;if(n.info.requiresAnnexBTransformation){const c=[...At(s)].map(l=>s.subarray(l.offset,l.offset+l.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=Eo(c,4)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");const o=this.createSampleForTrack(n,s,i.timestamp,i.duration,i.type);await this.registerSample(n,o)}finally{a()}}async addEncodedAudioPacket(e,i,r){const a=await this.mutex.acquire();try{const n=this.getAudioTrackData(e,i,r);let s=i.data;if(n.info.requiresAdtsStripping){const d=sa(Rt.tempFromBytes(s));if(!d)throw new Error("Expected ADTS frame, didn't get one.");const u=d.crcCheck===null?dc:uc;s=s.subarray(u)}this.validateTimestamp(n.track,i.timestamp,i.type==="key");let o=i.timestamp,c=i.duration;if(n.info.requiresPcmTransformation){const u=vt(n.info.decoderConfig.codec).sampleSize*n.info.numberOfChannels;if(c=s.byteLength/u/n.info.sampleRate,n.info.expectedNextPcmPacketTimestamp!==null){const y=o-n.info.expectedNextPcmPacketTimestamp;if(y<.01)o=n.info.expectedNextPcmPacketTimestamp;else{const f=await this.padWithSilence(n,n.info.expectedNextPcmPacketTimestamp,y);o=n.info.expectedNextPcmPacketTimestamp+f}}n.info.expectedNextPcmPacketTimestamp=o+c}const l=this.createSampleForTrack(n,s,o,c,i.type);await this.registerSample(n,l)}finally{a()}}async padWithSilence(e,i,r){const a=pe(r,e.timescale);if(r=a/e.timescale,a>0){const{sampleSize:n,silentValue:s}=vt(e.info.decoderConfig.codec),o=a*e.info.numberOfChannels,c=new Uint8Array(n*o).fill(s),l=this.createSampleForTrack(e,new Uint8Array(c.buffer),i,r,"key");await this.registerSample(e,l)}return r}async addSubtitleCue(e,i,r){const a=await this.mutex.acquire();try{const n=this.getSubtitleTrackData(e,r);this.validateTimestamp(n.track,i.timestamp,!0),e.source._codec==="webvtt"&&(n.cueQueue.push(i),await this.processWebVTTCues(n,i.timestamp))}finally{a()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const r=new Set([]);for(const l of e.cueQueue)N(l.timestamp<=i),N(e.lastCueEndTimestamp<=l.timestamp+l.duration),r.add(Math.max(l.timestamp,e.lastCueEndTimestamp)),r.add(l.timestamp+l.duration);const a=[...r].sort((l,d)=>l-d),n=a[0],s=a[1]??n;if(i<s)break;if(e.lastCueEndTimestamp<n){this.auxWriter.seek(0);const l=El();this.auxBoxWriter.writeBox(l);const d=this.auxTarget._getSlice(0,this.auxWriter.getPos()),u=this.createSampleForTrack(e,d,e.lastCueEndTimestamp,n-e.lastCueEndTimestamp,"key");await this.registerSample(e,u),e.lastCueEndTimestamp=n}this.auxWriter.seek(0);for(let l=0;l<e.cueQueue.length;l++){const d=e.cueQueue[l];if(d.timestamp>=s)break;_a.lastIndex=0;const u=_a.test(d.text),y=d.timestamp+d.duration;let f=e.cueToSourceId.get(d);if(f===void 0&&s<y&&(f=e.nextSourceId++,e.cueToSourceId.set(d,f)),d.notes){const m=Al(d.notes);this.auxBoxWriter.writeBox(m)}const g=Bl(d.text,u?n:null,d.identifier??null,d.settings??null,f??null);this.auxBoxWriter.writeBox(g),y===s&&e.cueQueue.splice(l--,1)}const o=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,o,n,s-n,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=s}}createSampleForTrack(e,i,r,a,n){return{timestamp:r,decodeTimestamp:r,duration:a,data:i,size:i.byteLength,type:n,timescaleUnitsToNextSample:pe(a,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let a=0;for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n],o=pe(s.duration,e.timescale);a+=o}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:a,sampleDelta:1});else{const n=We(e.timeToSampleTable);n.sampleCount+=a}e.timestampProcessingQueue.length=0;return}const r=e.timestampProcessingQueue.map(a=>a.timestamp).sort((a,n)=>a-n);this.isFragmented||(e.startTimestampOffset??=r[0]);for(let a=0;a<e.timestampProcessingQueue.length;a++){const n=e.timestampProcessingQueue[a];n.decodeTimestamp=r[a];const s=pe(n.timestamp-n.decodeTimestamp,e.timescale),o=pe(n.duration,e.timescale);if(e.lastTimescaleUnits!==null){N(e.lastSample);const c=pe(n.decodeTimestamp,e.timescale,!1),l=Math.round(c-e.lastTimescaleUnits);if(N(l>=0),e.lastTimescaleUnits+=l,e.lastSample.timescaleUnitsToNextSample=l,!this.isFragmented){let d=We(e.timeToSampleTable);if(N(d),d.sampleCount===1){d.sampleDelta=l;const y=e.timeToSampleTable[e.timeToSampleTable.length-2];y&&y.sampleDelta===l&&(y.sampleCount++,e.timeToSampleTable.pop(),d=y)}else d.sampleDelta!==l&&(d.sampleCount--,e.timeToSampleTable.push(d={sampleCount:1,sampleDelta:l}));d.sampleDelta===o?d.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:o});const u=We(e.compositionTimeOffsetTable);N(u),u.sampleCompositionTimeOffset===s?u.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=pe(n.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:o}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=n}if(e.timestampProcessingQueue.length=0,N(e.lastSample),N(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){N(i.type==="key");const a=pe(i.timestamp,e.timescale,!1),n=Math.round(a-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=n}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const a=e.track.metadata.maximumPacketCount;if(N(a!==void 0),e.samples.length>a)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${a}). Either add less packets or increase the maximum packet count.`)}let r=!1;if(!e.currentChunk)r=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const a=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const n=this.trackDatas.every(s=>{if(e===s)return i.type==="key";const o=s.sampleQueue[0];return o?o.type==="key":s.closed});a>=this.minimumFragmentDuration&&n&&i.timestamp>this.maxWrittenTimestamp&&(r=!0,await this.finalizeFragment())}else r=a>=.5}r&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),N(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(N(!this.isFragmented),N(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((r,a)=>r+pe(a.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||We(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const r of e.currentChunk.samples)N(r.data),this.writer.write(r.data),r.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(N(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,r=1/0;for(const n of this.trackDatas){if(!e&&n.sampleQueue.length===0&&!n.closed)break e;n.sampleQueue.length>0&&n.sampleQueue[0].timestamp<r&&(i=n,r=n.sampleQueue[0].timestamp)}if(!i)break;const a=i.sampleQueue.shift();await this.addSampleToTrack(i,a)}}async finalizeFragment(e=!this.isCmaf){if(N(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const f=this.initBoxWriter??this.boxWriter;N(f),this.formatOptions.onMoov&&f.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const g=Mt(this);if(f.writeBox(g),this.formatOptions.onMoov){const{data:m,start:v}=f.writer.stopTrackingWrites();this.formatOptions.onMoov(m,v)}if(this.isCmaf){N(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new ti(this.writer);const m=this.boxWriter.measureBox(Ba()),v=this.boxWriter.measureBox(Aa(this,0));this.segmentHeaderSize=m+v,this.writer.seek(this.segmentHeaderSize)}}N(this.writer),N(this.boxWriter);const i=this.trackDatas.filter(f=>f.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const r=this.nextFragmentNumber++,a=Pa(r,i),n=this.writer.getPos(),s=n+this.boxWriter.measureBox(a);let o=s+Pi,c=1/0;for(let f=0;f<i.length;f++){const g=i[f];g.currentChunk.offset=o,g.currentChunk.moofOffset=n,g.currentChunk.trafIndex=f;for(const m of g.currentChunk.samples)o+=m.size;c=Math.min(c,g.currentChunk.startTimestamp)}const l=o-s,d=l>=2**32;if(d)for(const f of i)f.currentChunk.offset+=na-Pi;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const u=Pa(r,i);if(this.boxWriter.writeBox(u),this.formatOptions.onMoof){const{data:f,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(f,g,c)}N(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const y=ii(d);y.size=l,this.boxWriter.writeBox(y),this.writer.seek(s+(d?na:Pi));for(const f of i)for(const g of f.currentChunk.samples)this.writer.write(g.data),g.data=null;if(this.formatOptions.onMdat){const{data:f,start:g}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(f,g)}for(const f of i)f.finalizedChunks.push(f.currentChunk),this.finalizedChunks.push(f.currentChunk),f.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){N(this.writer),N(this.boxWriter),this.ensureOneEnabledTrack();const e=Mt(this),r=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;N(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ii(!0),this.boxWriter.writeBox(this.mdat);for(const a of this.trackDatas){for(const n of a.sampleQueue)await this.addSampleToTrack(a,n);a.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){N(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const r=i.track.metadata.maximumPacketCount;N(r!==void 0),e+=8*Math.ceil(2/3*r),e+=4*r,e+=8*Math.ceil(2/3*r),e+=12*Math.ceil(2/3*r),e+=4*r,e+=8*r}return e}async onTrackClose(e){const i=await this.mutex.acquire(),r=this.trackDatas.find(a=>a.track===e);r&&(r.closed=!0,r.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(r,1/0),this.processTimestamps(r)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(a=>a.type===e);if(i.length===0)continue;if(!i.some(a=>a.track.metadata.disposition?.default!==!1)){const a=i[0];a.track.metadata.disposition={...a.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){N(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let r=0;r<i.samples.length;r++){const a=i.samples[r];a.timestamp-=i.startTimestampOffset,a.decodeTimestamp-=i.startTimestampOffset}if(N(this.writer),N(this.boxWriter),this.fastStart==="in-memory"){this.mdat=ii(!1);let i;for(let a=0;a<2;a++){const n=Mt(this),s=this.boxWriter.measureBox(n);i=this.boxWriter.measureBox(this.mdat);let o=this.writer.getPos()+s+i;for(const c of this.finalizedChunks){c.offset=o;for(const{data:l}of c.samples)N(l),o+=l.byteLength,i+=l.byteLength}if(o<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const r=Mt(this);if(this.boxWriter.writeBox(r),this.formatOptions.onMoov){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(a,n)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const a of this.finalizedChunks)for(const n of a.samples)N(n.data),this.writer.write(n.data),n.data=null;if(this.formatOptions.onMdat){const{data:a,start:n}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(a,n)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Ba()),this.boxWriter.writeBox(Aa(this,i))}else{const i=this.writer.getPos(),r=Sl(this.trackDatas);this.boxWriter.writeBox(r);const a=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(a)}else{N(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);N(i!==void 0);const r=this.writer.getPos()-i;if(this.mdat.size=r,this.mdat.largeSize=r>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}const a=Mt(this);if(this.fastStart==="reserve"){N(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);const n=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(Rc(n))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(a);if(this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var $l=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,a;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(a=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");a&&(r=function(){try{a.call(this)}catch(n){return Promise.reject(n)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},ql=(function(t){return function(e){function i(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,a=0;function n(){for(;r=e.stack.pop();)try{if(!r.async&&a===1)return a=0,e.stack.push(r),Promise.resolve().then(n);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return a|=2,Promise.resolve(s).then(n,function(o){return i(o),n()})}else a|=1}catch(o){i(o)}if(a===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return n()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});class Vi{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class Ha extends Vi{constructor(e){if(super(),this._connectedTrack=null,!Je.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${Je.join(", ")}.`);this._codec=e}}const La=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class jl{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new to,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,r){const a=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const n=this.encodingConfig,s=n.sizeChangeBehavior??"deny";let o=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(o=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(n.transform?.width!==void 0||n.transform?.height!==void 0||n.transform?.rotate!==void 0||n.transform?.crop!==void 0||n.transform?.force===!0||o&&s!=="passThrough"){let u=n.transform?.width,y=n.transform?.height,f=n.transform?.fit??"fill";o&&s!=="passThrough"&&(N(this.outputWidth),N(this.outputHeight),N(s!=="deny"),u=this.outputWidth,y=this.outputHeight,f=s);const g=await e.transform({width:u,height:y,roundDimensionsTo:2,crop:n.transform?.crop,rotate:n.transform?.rotate,fit:f,alpha:n.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=g.displayWidth,this.outputHeight=g.displayHeight),i&&e.close(),e=g,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const d=n.transform?.frameRate;if(d!==void 0){const u=e.timestamp+e.duration,y=Fr(e.timestamp,d);if(this.frameRateLastSample!==null)if(y<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=u;return}else await this.padFrameRate(y,r);e===a&&(e=e.clone(),i=!0),e.setTimestamp(y),e.setDuration(1/d),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=y,this.frameRateLastEndTimestamp=u}await this.processAndEncode(e,r)}finally{i&&e.close()}}async processAndEncode(e,i){const r=this.encodingConfig;let a;if(r.transform?.process){let n=r.transform.process(e);if(n instanceof Promise&&(n=await n),n===null)return;Array.isArray(n)||(n=[n]);const s=[];try{for(const o of n)o instanceof Ee?s.push(o):typeof VideoFrame<"u"&&o instanceof VideoFrame?s.push(new Ee(o)):s.push(new Ee(o,{timestamp:e.timestamp,duration:e.duration}))}catch(o){for(const c of s)c!==e&&c.close();for(const c of n)(c instanceof Ee&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw o}a=s}else a=[e];try{for(const n of a){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(n),this.encoderInitialized||await this.ensureEncoderPromise),N(this.encoderInitialized),this.closed)break;const s=this.encodingConfig.keyFrameInterval??2,o=Math.floor(n.timestamp/s),c={...this.defaultEncodeOptions,...n.encodeOptions,...i},l={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:s===0||o!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=o,this.encodingConfig.onEncodedSample?.(n),this.customEncoder){this.customEncoderQueueSize++;const d=n.clone(),u=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(d,l)).catch(y=>this.setError(y)).finally(()=>{this.customEncoderQueueSize--,d.close()});this.customEncoderQueueSize>=4&&await u}else{N(this.encoder);const d=n.toVideoFrame(),u=Pr(this.preciseTimings,d.timestamp,f=>f.microsecondTimestamp),y=u!==-1?this.preciseTimings[u]:null;if(y&&y.microsecondTimestamp===d.timestamp?(y.timestamp!==n.timestamp&&(y.timestampIsValid=!1),y.duration!==n.duration&&(y.durationIsValid=!1)):(this.preciseTimings.splice(u+1,0,{microsecondTimestamp:d.timestamp,timestamp:n.timestamp,duration:n.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!d.format&&!d.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(d,l)}finally{d.close()}}else{this.splitter||(this.splitter=new Vl);const{colorFrame:g,alphaFrame:m}=await this.splitter.split(d);this.alphaFrameQueue.push(m);try{this.encoder.encode(g,l)}finally{g.close()}}else try{this.encoder.encode(d,l)}finally{d.close()}this.encoder.encodeQueueSize>=4&&await new Promise(f=>this.encoder.addEventListener("dequeue",f,{once:!0}))}await this.lastMuxerPromise}}finally{for(const n of a)n!==e&&n.close()}}async padFrameRate(e,i){const r=this.encodingConfig.transform.frameRate;N(this.frameRateLastSample);const a=Math.round((e-this.frameRateLastTimestamp)*r);for(let n=1;n<a;n++){const s={stack:[],error:void 0,hasError:!1};try{const o=$l(s,this.frameRateLastSample.clone(),!1);o.setTimestamp(this.frameRateLastTimestamp+n/r),o.setDuration(1/r),await this.processAndEncode(o,i)}catch(o){s.error=o,s.hasError=!0}finally{ql(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=wa(this.encodingConfig.quality,this.encodingConfig.bitrate);N(i!==void 0);const r=ga({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let a=null,n;for(const o of r){const c=o.config;if(this.encodingConfig.onEncoderConfig?.(c),n=xa.find(d=>d.supports(this.encodingConfig.codec,c)),n){a=o;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){a=o;break}}catch{}}if(!a){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const o=r[0].config,c=r.map(({config:l,quantizer:d})=>d!==null?`quantizer ${d}`:`${l.bitrate} bps`);throw new Error(`This specific encoder configuration (${o.codec}, ${c.join(" / ")}, ${o.width}x${o.height}, hardware acceleration: ${o.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const s=a.config;if(a.quantizer!==null&&(this.defaultEncodeOptions=ya(this.encodingConfig.codec,a.quantizer)),n)this.customEncoder=new n,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(o,c)=>{if(!(o instanceof dt))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");La(this.source._connectedTrack,o),this.encodingConfig.onEncodedPacket?.(o,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,o,c).catch(l=>{this.setError(l)})},this.customEncoder.onError=o=>{this.setError(o)},await this.customEncoder.init();else{const o=[],c=[];let l=0,d=0;const u=(f,g,m)=>{const v={};if(g){const E=new Uint8Array(g.byteLength);g.copyTo(E),v.alpha=E}let b=dt.fromEncodedChunk(f,v);const w=Pr(this.preciseTimings,f.timestamp,E=>E.microsecondTimestamp),S=w!==-1?this.preciseTimings[w]:null;let T=null;this.emittedEncoderPackets===0&&b.type==="delta"&&m?.decoderConfig&&(T=$o(this.encodingConfig.codec,m.decoderConfig,b.data)),(S&&S.microsecondTimestamp===f.timestamp||T!==null)&&(b=b.clone({timestamp:S?.timestampIsValid?S.timestamp:void 0,duration:S?.durationIsValid?S.duration:void 0,type:T??void 0})),La(this.source._connectedTrack,b),this.encodingConfig.onEncodedPacket?.(b,m),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,b,m).catch(E=>{this.setError(E)}),this.emittedEncoderPackets++},y=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(f,g)=>{if(!this.alphaEncoder){u(f,null,g);return}const m=this.alphaFrameQueue.shift();N(m!==void 0),m?(this.alphaEncoder.encode(m,{...this.defaultEncodeOptions,keyFrame:f.type==="key"}),d++,m.close(),o.push({chunk:f,meta:g})):d===0?u(f,null,g):(c.push(l+d),o.push({chunk:f,meta:g}))},error:f=>{f.stack=y,this.setError(f)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){const f=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(g,m)=>{d--;const v=o.shift();for(N(v!==void 0),u(v.chunk,g,v.meta),l++;c.length>0&&c[0]===l;){c.shift();const b=o.shift();N(b!==void 0),u(b.chunk,null,b.meta)}},error:g=>{g.stack=f,this.setError(g)}}),this.alphaEncoder.configure(s)}}N(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,r=Fr(this.frameRateLastEndTimestamp,i);await this.padFrameRate(r)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await so(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let Gi=null;class Vl{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!Gi){const a=new Blob([`(${Gl.toString()})()`],{type:"application/javascript"});Gi=URL.createObjectURL(a)}this.worker=new Worker(Gi),this.worker.addEventListener("message",a=>{const n=a.data,s=this.pendingRequests.get(n.id);s&&(this.pendingRequests.delete(n.id),"error"in n?s.reject(new Error(n.error)):s.resolve({colorFrame:n.colorFrame,alphaFrame:n.alphaFrame}))}),this.worker.addEventListener("error",a=>{const n=new Error(a.message||"Color/alpha splitter worker error.");for(const s of this.pendingRequests.values())s.reject(n);this.pendingRequests.clear()})}const i=this.nextRequestId++,r=Rr();return this.pendingRequests.set(i,r),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),r.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const Gl=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",n=>{const{id:s,sourceFrame:o}=n.data;e=e.then(async()=>{try{const{colorFrame:c,alphaFrame:l}=await i(o);self.postMessage({id:s,colorFrame:c,alphaFrame:l},{transfer:[c,l]})}catch(c){self.postMessage({id:s,error:c.message})}finally{o.close()}})});const i=async n=>{const s=n.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const o=n.allocationSize();if((!t||t.byteLength!==o)&&(t=new Uint8Array(o)),await n.copyTo(t),s==="RGBA"||s==="BGRA")return r(t,s,n);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return a(t,s,n);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},r=(n,s,o)=>{const c=o.visibleRect?.width??o.codedWidth,l=o.visibleRect?.height??o.codedHeight,d=c*l,u=Math.ceil(c/2),y=Math.ceil(l/2),f=d+u*y*2,g=new Uint8Array(f);for(let w=0,S=3;w<d;w++,S+=4)g[w]=n[S];g.fill(128,d);const m=new VideoFrame(n,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0}),v={format:"I420",codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[g.buffer]},b=new VideoFrame(g,v);return{colorFrame:m,alphaFrame:b}},a=(n,s,o)=>{const c=o.visibleRect?.width??o.codedWidth,l=o.visibleRect?.height??o.codedHeight,d=s.includes("P10"),u=s.includes("P12"),y=d||u?2:1;let f,g;s.startsWith("I420")?(f=Math.ceil(c/2),g=Math.ceil(l/2)):s.startsWith("I422")?(f=Math.ceil(c/2),g=l):(f=c,g=l);const m=c*l,v=f*g,b=m*y,w=v*y,S=m*y,T=b+w*2,E=s.replace("A",""),O=Math.ceil(c/2),I=Math.ceil(l/2),L=O*I,P=L*y,j=S+2*P,Q=new Uint8Array(j),_=T;Q.set(n.subarray(_,_+S),0);const z=S,p=d?512:u?2048:128;y===1?Q.fill(p,z):new Uint16Array(Q.buffer,z,2*L).fill(p);const H=d?"I420P10":u?"I420P12":"I420",ee=new VideoFrame(n.subarray(0,T),{format:E,codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0}),W={format:H,codedWidth:c,codedHeight:l,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[Q.buffer]},se=new VideoFrame(Q,W);return{colorFrame:ee,alphaFrame:se}}};class Xl extends Ha{constructor(e){_c(e),super(e.codec),this._encoder=new jl(this,e)}add(e,i){if(!(e instanceof Ee))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Zl extends Vi{constructor(e){if(super(),this._connectedTrack=null,!Qt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Qt.join(", ")}.`);this._codec=e}}class Kl extends Vi{constructor(e){if(super(),this._connectedTrack=null,!Et.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Et.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Ua{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>Je.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Qt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Et.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class Xi extends Ua{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new Dl(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Na extends Xi{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Je,...Ei,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Et]}_codecUnsupportedHint(e){return new Da().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Wa extends Xi{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Je,...Ei,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Et]}}class Da extends Xi{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...Je,...Qt]}_codecUnsupportedHint(e){return new Na().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $a=["video","audio","subtitle"];class zt{constructor(e,i,r,a,n){this.id=e,this.output=i,this.type=r,this.source=a,this.metadata=n}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof zt))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Ur(this.metadata.group),r=Ur(e.metadata.group);for(const a of i)if(this.type!==e.type&&r.some(o=>a===o)||r.some(o=>a._pairedGroups.has(o)))return!0;return!1}}class Ql extends zt{constructor(e,i,r,a){super(e,i,"video",r,a)}}class Yl extends zt{constructor(e,i,r,a){super(e,i,"audio",r,a)}}class Jl extends zt{constructor(e,i,r,a){super(e,i,"subtitle",r,a)}}class Ft{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof Ft))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const Zi=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!Js(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&fo(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof Ft)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof Ft))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class ef extends Ci{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new Ft,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Ir,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Ua))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof it||e.target instanceof ji))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof it&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof it)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof it&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){N(this._target instanceof ji);const i=this._target.getTarget(e),r=a=>{if(!(a instanceof it))throw new TypeError("getTarget must return a Target.");return a};return i instanceof Promise?i.then(r):r(i)}async _getTarget(e){N(this._target instanceof ji);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(N(this._initTarget!==null),this._initTarget instanceof it)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof it)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),r=a=>(this.state==="canceled"?a._close():this._rememberTarget(a),this._emit("target",{target:a,request:e,isRoot:!0}),this._rootTarget=a,a);return i instanceof Promise?this._rootTargetPromise=i.then(r):r(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),r=new Di(i,typeof e=="boolean"?e:e(i));return r.start(),r})()}addVideoTrack(e,i={}){if(!(e instanceof Ha))throw new TypeError("source must be a VideoSource.");if(Zi(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&Gr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof dt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Ql(this.tracks.length+1,this,e,r))}addAudioTrack(e,i={}){if(!(e instanceof Zl))throw new TypeError("source must be an AudioSource.");if(Zi(i),i.decoderConfig!==void 0&&Xr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof dt))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Yl(this.tracks.length+1,this,e,r))}addSubtitleTrack(e,i={}){if(!(e instanceof Kl))throw new TypeError("source must be a SubtitleSource.");Zi(i);const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Jl(this.tracks.length+1,this,e,r))}setMetadataTags(e){if(lo(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),r=this.tracks.reduce((s,o)=>s+(o.type===e.type?1:0),0),a=i[e.type].max;if(r===a)throw new Error(a===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${a} ${e.type} track${a===1?"":"s"}.`);const n=i.total.max;if(this.tracks.length===n)throw new Error(`${this.format._name} does not support more than ${n} tracks${n===1?"":"s"} in total.`);if(e.isVideoTrack()){const s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const r of $a){const a=this.tracks.reduce((s,o)=>s+(o.type===r?1:0),0),n=e[r].min;if(a<n)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const r of $a){const a=this.tracks.reduce((s,o)=>s+(o.type===r?1:0),0),n=e[r].min;if(a<n)throw new Error(n===e[r].max?`${this.format._name} requires exactly ${n} ${r} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} ${r} track${n===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ge._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const r=this._mutex.acquire();try{await this._muxer.start();const a=this.tracks.map(n=>n.source._start());await Promise.all(a)}finally{(await r)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return ge._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ge._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(r=>r._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ge._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const r=await this._rootWriterPromise;r.finalized||(await r.flush(),await r.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const tf={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},rf=new Set(["window","buddy"]);function qa(t){return!rf.has(t.typeId)}const af=new Set(["bitmap","video","audio","pcm","objectUrl","frozenFrame"]);function nf(t){const e=JSON.parse(JSON.stringify(t,(i,r)=>{if(!af.has(i))return r}));return JSON.stringify(e,null,2)}function sf(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>of(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const r=tf[i.generator??""];return r?{...i,generator:r}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(qa)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(r=>({...r,effects:(r.effects??[]).filter(qa)}))}:i.data})),e}function of(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,objectUrl:null,frozenFrame:null}}function cf(t,e){const i=new Blob([e],{type:"application/json"});bt(t,i)}function bt(t,e){const i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Ki=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function ja(t,e,i=1280){const r=i/Math.max(t,e,1e-4);return{width:Ne(t*r),height:Ne(e*r)}}function lf(t,e){const i=t/Math.max(e,1);let r="16:9",a=1/0;for(const n of Ki){const s=Math.abs(i-n.rw/n.rh);s<a&&(a=s,r=n.id)}return r}function ff(t,e,i=1280){if(t<2||e<2)return ja(16,9,i);const r=Math.max(t,e),a=i/r;return{width:Ne(t*a),height:Ne(e*a)}}function df(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),r=e-i;return t<r?0:(t-r+1)/i}const uf=960,hf=1920;function Qi(t,e=!1){const i=e?uf:hf;return fr(t.exportSettings.width,t.exportSettings.height,i,i)}async function mf(t,e,i){const{width:r,height:a,format:n,quality:s,filename:o}=e.exportSettings,c=n==="jpg"?"image/jpeg":"image/png",l=await t.capture(e,i,Ne(r),Ne(a),c,s);bt(`${o}.${n==="jpg"?"jpg":"png"}`,l)}async function pf(t,e,i){const{fps:r,duration:a,filename:n,quality:s}=e.exportSettings,{width:o,height:c}=Qi(e,!1),l=Math.max(1,Math.round(a*r)),d=new qs,u=d.folder(n)??d,y=document.createElement("canvas");for(let g=0;g<l;g++){const m=g/r;i?.(g,l),t.paintFrame(e,m,o,c,y);const v=await wf(y,"image/png",s);u.file(`${n}_${String(g).padStart(5,"0")}.png`,await v.arrayBuffer()),await Yi()}const f=await d.generateAsync({type:"blob"});bt(`${n}_sequence.zip`,f)}async function Va(t,e,i,r=!1){const a=await Ga(t,e,bf(),i,r);bt(`${e.exportSettings.filename}.webm`,a)}async function gf(t,e,i,r=!1){try{return await vf(t,e,i,r),"mp4 clip saved"}catch(a){const n=yf();if(n){const o=await Ga(t,e,n,i,r);return bt(`${e.exportSettings.filename}.mp4`,o),"mp4 clip saved"}return await Va(t,e,i,r),`MP4 not available (${a instanceof Error?a.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function vf(t,e,i,r=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const a=Math.min(24,Math.max(12,e.exportSettings.fps||24)),n=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:s,height:o}=Qi(e,r),c=new ot({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),l=new Na({fastStart:"in-memory"}),u=await Tc(["avc","hevc"].filter(w=>l.getSupportedVideoCodecs().includes(w)),{width:s,height:o,quality:c});if(!u)throw new Error("this browser cannot encode H.264");const y=new ai,f=new ef({format:l,target:y}),g=new Xl({codec:u,quality:c,keyFrameInterval:1});f.addVideoTrack(g,{frameRate:a}),t.resetTemporal();const m=document.createElement("canvas");await f.start();try{const w=Math.max(1,Math.round(n*a)),S=1/a,T=e.exportSettings.loopClose!==!1;let E=null;for(let O=0;O<w;O++){const I=pi(O/a,n,e.playback.mode,1,!0);i?.(O,w),t.paintFrame(e,I,s,o,m),O===0&&T?E=Za(m):Xa(m,E,O,w,T);const L=new Ee(m,{timestamp:O*S,duration:S});await g.add(L,{keyFrame:O%a===0}),L.close(),await Yi()}await f.finalize()}catch(w){try{await f.cancel()}catch{}throw w}const v=y.buffer;if(!v||v.byteLength<32)throw new Error("MP4 mux produced an empty file");const b=v.slice(0);bt(`${e.exportSettings.filename}.mp4`,new Blob([b],{type:"video/mp4"}))}async function Ga(t,e,i,r,a=!1){const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),s=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:o,height:c}=Qi(e,a),l=document.createElement("canvas");l.width=o,l.height=c;const d=l.getContext("2d");if(!d)throw new Error("No 2d context");const u=l.captureStream(0),y=u.getVideoTracks()[0],f=new MediaRecorder(u,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),g=[];f.ondataavailable=S=>{S.data.size&&g.push(S.data)},t.resetTemporal(),f.start(200);const m=Math.max(1,Math.round(s*n)),v=document.createElement("canvas"),b=e.exportSettings.loopClose!==!1;let w=null;for(let S=0;S<m;S++){const T=pi(S/n,s,e.playback.mode,1,!0);r?.(S,m),t.paintFrame(e,T,o,c,v),S===0&&b?w=Za(v):Xa(v,w,S,m,b),d.drawImage(v,0,0,o,c),y.requestFrame?.(),await Yi()}if(await new Promise(S=>{f.onstop=()=>S(),f.stop()}),u.getTracks().forEach(S=>S.stop()),!g.length)throw new Error("recorder produced no data");return new Blob(g,{type:i})}function bf(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function yf(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Xa(t,e,i,r,a){if(!a||!e||i===0)return;const n=df(i,r);if(n<=0)return;const s=t.getContext("2d");s&&(s.save(),s.globalAlpha=n,s.drawImage(e,0,0,t.width,t.height),s.restore())}function Za(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Yi(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function wf(t,e,i){return new Promise((r,a)=>{t.toBlob(n=>{n?r(n):a(new Error("frame capture failed"))},e,i)})}async function xf(t,e,i,r,a=!1){const n=e.exportSettings.format;return n==="mp4"?gf(t,e,r,a):n==="webm"?Va(t,e,r,a):n==="sequence"?pf(t,e,r):mf(t,e,i)}const _f=768,kf="sana",Ka=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function Sf(t=768,e=768){const i=Math.max(1,t),r=Math.max(1,e),a=_f/Math.max(i,r);return{width:Ne(i*a,256),height:Ne(r*a,256)}}function Tf(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16);if(Number.isNaN(i))return"muted earth";const r=i>>16&255,a=i>>8&255,n=i&255;let s=Ka[0],o=1e9;for(const c of Ka){const l=(r-c.r)**2+(a-c.g)**2+(n-c.b)**2;l<o&&(o=l,s=c)}return s.name}function Cf(t,e=[],i=!1){const r=t.trim()||"experimental photographic still, cinematic light, analog film",a="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${r}, ${a}`;const n=e.map(Tf).filter((s,o,c)=>c.indexOf(s)===o).slice(0,4);return`${r}, palette of ${n.join(", ")}, ${a}`}function Ef(t,e,i){return`#${[t,e,i].map(r=>Math.max(0,Math.min(255,r)).toString(16).padStart(2,"0")).join("")}`}function Bf(t,e,i,r=4){const a=[];for(let n=0;n<3;n++)for(let s=0;s<3;s++){const o=Math.min(e-1,Math.floor((s+.5)/3*e)),l=(Math.min(i-1,Math.floor((n+.5)/3*i))*e+o)*4,d=t[l],u=t[l+1],y=t[l+2],f=Ef(d,u,y);a.some(m=>(m.r-d)**2+(m.g-u)**2+(m.b-y)**2<1400)||a.push({hex:f,r:d,g:u,b:y})}return a.slice(0,r).map(n=>n.hex)}function Af(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const r=i.getImageData(0,0,e.width,e.height);return Bf(r.data,e.width,e.height)}function If(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function Pf(t,e,i,r,a=kf){const n=t.length>400?t.slice(0,400):t,s=`width=${i}&height=${r}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(a)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(n)}?${s}`}async function Rf(t,e){const i=new AbortController,r=setTimeout(()=>i.abort(),e);try{const a=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!a.ok)throw a.status===429||a.status>=500?new Error(`busy:${a.status}`):new Error(`Generation failed (${a.status}). Try a shorter prompt.`);const n=await a.arrayBuffer(),s=new Uint8Array(n),o=a.headers.get("content-type")||"";if(!If(s,o))throw new Error("Generation returned no image. Try again.");const c=o.startsWith("image/")?o.split(";")[0]:"image/jpeg";return new Blob([n],{type:c})}catch(a){throw a instanceof Error&&a.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):a}finally{clearTimeout(r)}}async function Mf(t){const{width:e,height:i}=Sf(t.width??768,t.height??768),r=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let a=null;for(let s=0;s<2;s++){t.onStatus?.(s===0?"generating new image…":"still working, trying once more…");try{return await Rf(Pf(r,t.seed+s*7919,e,i),s===0?22e3:3e4)}catch(o){a=o instanceof Error?o:new Error(String(o))}}const n=a?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":a?.message;throw new Error(n||"Generation failed. Try a shorter prompt.")}function xe(t){const e=C.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Ot(t){if(!t)return;const e=C.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Be(t,e,i=!0){C.setProject(r=>({...r,layers:r.layers.map(a=>a.id===t?e(a):a)}),i)}function Ht(t,e=!0){C.setProject(i=>{const r=e?i.layers.map(a=>a.id===C.state.ui.selectedLayerId?{...a,sourceId:t.id}:a):i.layers;return{...i,sources:[...i.sources,t],layers:r}}),C.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function zf(t){const e=C.project.sources.filter(r=>r.kind==="audio");for(const r of e)Br(r);if(C.setProject(r=>{const a=r.sources.filter(o=>o.kind!=="audio"),n=r.layers.map(o=>e.some(c=>c.id===o.sourceId)?{...o,sourceId:a.find(c=>c.kind!=="audio")?.id??null}:o),s=Math.max(r.duration,t.duration||0);return{...r,sources:[...a,t],layers:n,duration:s}}),qt(),C.project.playback.playing&&t.audio){try{const r=t.duration||t.audio.duration||1;t.audio.currentTime=C.project.playback.time%Math.max(r,.001)}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"";C.patchUi({selectedSourceId:t.id,status:`soundtrack ${t.name}${i?` · ${i}`:""} — hit Play; the mix moves idols, floaters, and places`})}async function Ji(t,e=!1){for(const i of Array.from(t))try{const r=await Fs(i);if(r.kind==="audio"){zf(r);continue}if(e){const a=C.state.ui.selectedSourceId;C.setProject(n=>({...n,sources:n.sources.map(s=>s.id===a?{...r,id:s.id}:s)})),C.patchUi({status:`replaced ${i.name}`})}else Ht(r,!0)}catch(r){C.patchUi({status:r instanceof Error?r.message:"import failed"})}}function Ff(){C.setProject(e=>{const i=e.sources.find(a=>a.kind!=="audio")?.id??null,r=yr(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,r]}});const t=C.project.layers.at(-1);C.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function Of(t){C.setProject(e=>{const i=e.layers.find(s=>s.id===t);if(!i)return e;const r=JSON.parse(JSON.stringify(i));r.id=Ce("lyr"),r.name=`${i.name}*`,r.effects=r.effects.map(s=>({...s,id:Ce("fx")}));const a=e.layers.findIndex(s=>s.id===t),n=[...e.layers];return n.splice(a+1,0,r),{...e,layers:n}})}function Hf(t){C.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function er(t){const e=xe(C.project);if(!e)return;const i=br(t);Be(e.id,r=>({...r,effects:[...r.effects,i]})),C.patchUi({selectedEffectId:i.id})}function Lf(t,e){Be(t,i=>({...i,effects:i.effects.filter(r=>r.id!==e)}))}function Qa(t,e,i){Be(t,r=>{const a=r.effects.findIndex(c=>c.id===e),n=a+i;if(a<0||n<0||n>=r.effects.length)return r;const s=[...r.effects],[o]=s.splice(a,1);return s.splice(n,0,o),{...r,effects:s}})}function Uf(t,e){Be(t,i=>({...i,effects:i.effects.map(r=>r.id===e?{...r,enabled:!r.enabled}:r)}))}function Lt(t,e,i,r,a=!0){Be(t,n=>({...n,effects:n.effects.map(s=>s.id===e?{...s,params:{...s.params,[i]:r}}:s)}),a)}function yt(t,e=!1){const i=C.state.ui;(t==="all"||t==="selected")&&C.setProject(a=>({...a,seed:a.seed+1+(Date.now()&255)>>>0}),!1),C.setProject(a=>{let s=mr(a,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&i.includeCritters&&!e&&(s=ur(s)),t==="all"&&(i.includeIdol||e)&&(s=dr(s)),s});const r=C.project.layers[0]?.effects.map(a=>a.typeId).join(" · ");C.patchUi({status:`${e?"next tape":"look"} · ${r||t} · seed ${C.project.seed}`})}function Nf(){const t=xe(C.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="critters"),i=1+(C.project.seed+Date.now())%9998;if(e){Lt(t.id,e.id,"seed",i),C.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}er("critters");const r=xe(C.project),a=Ot(r);r&&a?.typeId==="critters"&&Lt(r.id,a.id,"seed",i),C.patchUi({status:"stamped floaters"})}function Wf(){const t=xe(C.project);if(!t)return;const e=t.effects.find(n=>n.typeId==="dancer"),i=1+(C.project.seed+Date.now()+17)%9998;if(e){Lt(t.id,e.id,"seed",i),C.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}er("dancer");const r=xe(C.project),a=Ot(r);r&&a?.typeId==="dancer"&&Lt(r.id,a.id,"seed",i),C.patchUi({status:"stamped idol"})}function Df(){C.setProject(t=>In({...t,seed:t.seed+1+(Date.now()&255)>>>0})),C.patchUi({status:"new floater and idol seeds"})}function $f(){C.setProject(e=>Pn(e));const t=C.project.sources.find(e=>e.kind==="generator")?.generator??"void";C.patchUi({status:`channel · ${t}`})}async function qf(t){const e=C.project,{width:i,height:r}=fr(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const a=await t.capture(e,e.playback.time,i,r,"image/png",.92),n=await Cr(a,`print_${Date.now()}.png`);Ht(n,!0),C.patchUi({status:"printed the live frame as a new still"})}catch(a){C.patchUi({status:a instanceof Error?a.message:"print failed"})}}function Ya(t){C.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Ja(){cf(`${C.project.name||"phosphene"}.phos.json`,nf(C.project)),C.patchUi({status:"project downloaded"})}async function jf(t){const e=await t.text(),i=sf(e);C.replace(i),C.patchUi({status:"project loaded — re-drop media if needed"})}function Vf(){const t=prompt("Preset name",`look ${C.project.presets.length+1}`);if(!t)return;const e=fi(C.project,t);C.setProject(i=>({...i,presets:[...i.presets,e]}))}function tr(t){const e=C.project.presets.find(i=>i.id===t);e&&(C.setProject(i=>_n(i,e)),C.patchUi({status:`preset ${e.name}`}))}function Gf(){const t=kn(C.project.presets,C.project.seed+Date.now());if(!t){C.patchUi({status:"no presets saved"});return}tr(t.id)}function Xf(t){const e=C.project.presets.find(i=>i.id===t);e&&C.setProject(i=>({...i,presets:[...i.presets,Sn(e)]}))}function Zf(t){C.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function en(){const t=C.state.ui,e=xe(C.project),i=Ot(e),r=t.selectedParam?.paramId;if(!e||!i||!r){C.patchUi({status:"select a numeric parameter first"});return}const a=i.params[r];if(typeof a!="number"){C.patchUi({status:"keyframes are numeric"});return}const n={id:Ce("kf"),time:C.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:r,value:a,easing:"smooth"};C.setProject(s=>({...s,keyframes:[...s.keyframes,n]})),C.patchUi({status:`key ${r} @ ${n.time.toFixed(2)}s`})}function Kf(){C.setProject(t=>({...t,keyframes:[]}))}async function Qf(){const t=C.project.sources.find(i=>i.id===C.state.ui.selectedSourceId);if(!t)return;const e=await Ls(t);e&&Ht(e,!0)}function tn(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of C.project.sources)Br(e);C.replace(wr()),C.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Yf(){if(C.state.ui.generating)return;const t=C.state.ui.prompt.trim();if(!t){C.patchUi({status:"type a prompt first"});return}C.patchUi({generating:!0,status:"generating new image…"});try{const e=C.project.sources.find(l=>l.id===C.state.ui.selectedSourceId),i=C.state.ui.useSourceForGen;let r=[];const a=e?.frozenFrame||e?.bitmap||e?.video||null;i&&a&&(r=Af(a));const n=Cf(t,r,i&&r.length>0),s=C.project.seed+Date.now()>>>0,o=await Mf({prompt:n,seed:s,width:C.project.exportSettings.width,height:C.project.exportSettings.height,onStatus:l=>C.patchUi({generating:!0,status:l},!1)}),c=await Cr(o,`gen_${s}.jpg`);Ht(c,!0),C.patchUi({generating:!1,status:i&&r.length?"new image from prompt + source":"new image from prompt"})}catch(e){C.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let ni=!1,Ut=null;function Jf(t,e){Ut=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
      <button class="btn tiny hot" data-act="rand-wacky" title="Next tape: a Sato room, analog wrap, and a dancing idol">Next tape</button>
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
          <li><strong>Rand all</strong> picks a new look. <strong>Next tape</strong> is the Sato machine: one dancing idol, cassette wrap, a room (void / tile / corridor / moon / snow). <strong>Channel</strong> flips the room and keeps the idol.</li>
          <li><strong>Idol</strong> is a graphic totem. Wild stays a simple body. Grow can still add petals, a halo, antennae, a skirt, wings, horns, crystals, puff, spikes, a sprout, or a quieter body. Coat tints the paint. Stamp it for a new seed. Crowd → Mini army.</li>
          <li><strong>Stamp chaos</strong> rerolls overlays, not the room. <strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Rooms</strong> — Void, Tile, Corridor, Moon, Snow are the tape sets. Stage, Sketch, and the toy-pop fabrics are still on the rail. Click one to put that place on the picture. Drop an MP3 and the mix moves idols and rooms.</li>
          <li><strong>Soundtrack</strong> — drop an MP3 (or wav/ogg/m4a). It does not replace your picture. Hit Play and the timeline follows the song; idols kick harder on the bass; floaters and places move with it. Exported clips are silent for now — the motion still follows the mix. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",td(t),C.subscribe(()=>{ni||ir(t)}),ir(t)}async function ed(t=!1){if(Ut&&!C.state.ui.exporting){C.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),C.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await xf(Ut,C.project,C.project.playback.time,(i,r)=>{C.patchUi({status:`export ${i+1}/${r}`,exporting:!0},!1)},t);C.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){C.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function td(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const r=i.dataset.act,a=i.dataset.id;if(r==="save"&&Ja(),r==="load"&&t.querySelector("#proj-file")?.click(),r==="scratch"&&tn(),r==="imagine"&&Yf(),r==="seed-"&&Ya(-1),r==="seed+"&&Ya(1),r==="rand-all"&&yt("all"),r==="rand-wacky"&&yt("all",!0),r==="channel"&&$f(),r==="stamp-chaos"&&Df(),r==="reprint"&&Ut&&qf(Ut),r==="rand-sel"&&yt("selected"),r==="rand-param"){const n=i.dataset.paramId,s=xe(C.project),o=Ot(s);n&&s&&o&&C.patchUi({selectedParam:{layerId:s.id,effectId:o.id,paramId:n}},!1),yt("param")}if(r==="help"&&C.patchUi({helpOpen:!C.state.ui.helpOpen}),r==="import"&&t.querySelector("#media-file")?.click(),r==="replace"&&t.querySelector("#replace-file")?.click(),r==="freeze"&&Qf(),r==="gen"){const n=i.dataset.kind??"plasma",s=vr(n);Ht(s,!0),C.patchUi({status:n==="critters"?"floaters on this layer":`place · ${n}`})}if(r==="stamp-critters"&&Nf(),r==="stamp-idol"&&Wf(),r==="add-layer"&&Ff(),r==="dup-layer"&&a&&Of(a),r==="del-layer"&&a&&Hf(a),r==="sel-layer"&&a&&C.patchUi({selectedLayerId:a,selectedEffectId:C.project.layers.find(n=>n.id===a)?.effects[0]?.id??null}),r==="sel-fx"&&a&&C.patchUi({selectedEffectId:a}),r==="sel-src"&&a&&C.patchUi({selectedSourceId:a}),r==="bypass"&&a){const n=xe(C.project);n&&Uf(n.id,a)}if(r==="fx-up"&&a){const n=xe(C.project);n&&Qa(n.id,a,-1)}if(r==="fx-dn"&&a){const n=xe(C.project);n&&Qa(n.id,a,1)}if(r==="fx-del"&&a){const n=xe(C.project);n&&Lf(n.id,a)}if(r==="key"&&en(),r==="key-clear"&&Kf(),r==="pst-save"&&Vf(),r==="pst-rand"&&Gf(),r==="pst-load"&&a&&tr(a),r==="pst-dup"&&a&&Xf(a),r==="pst-del"&&a&&Zf(a),r==="export"&&ed(),r==="clip"){const n=Math.max(1,Number(i.dataset.secs||4));C.setProject(s=>({...s,duration:Math.max(s.duration,n),exportSettings:{...s.exportSettings,duration:n,format:"mp4",fps:24,bitrate:Math.min(s.exportSettings.bitrate,8)}})),C.patchUi({status:`${n}s clip ready — hit Export`})}if(r==="exp-aspect"&&a){const n=Ki.find(s=>s.id===a);if(n){const s=ja(n.rw,n.rh,1280);C.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:s.width,height:s.height}}))}}if(r==="exp-aspect-src"){const n=C.project,s=xe(n),o=n.sources.find(d=>d.id===(s?.sourceId??n.sources[0]?.id)),c=o?.kind==="audio"?n.sources.find(d=>d.kind!=="audio"):o,l=ff(c?.width??1280,c?.height??720,1280);C.setProject(d=>({...d,exportSettings:{...d.exportSettings,width:l.width,height:l.height}}))}if(r==="play"&&(qt(),C.setProject(n=>({...n,playback:{...n.playback,playing:!n.playback.playing}}))),r==="use-src"&&a){if(C.project.sources.find(o=>o.id===a)?.kind==="audio")return;const s=xe(C.project);s&&Be(s.id,o=>({...o,sourceId:a}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(jf(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Ji(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Ji(i.files,!0),i.value=""),i.id==="quality"&&C.setProject(r=>({...r,quality:i.value})),i.id==="add-fx"&&(i.value&&er(i.value),i.value=""),i.id==="blend"){const r=xe(C.project);r&&Be(r.id,a=>({...a,blendMode:i.value}))}if(i.id==="mask-type"){const r=xe(C.project);r&&Be(r.id,a=>({...a,mask:{...a.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&tr(i.value),i.id==="exp-format"&&C.setProject(r=>({...r,exportSettings:{...r.exportSettings,format:i.value}})),i.id==="play-mode"&&C.setProject(r=>({...r,playback:{...r.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&C.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&C.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,r=C.project;if(i.id==="gen-prompt"&&C.patchUi({prompt:i.value},!1),i.id==="gen-src"&&C.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&C.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&C.patchUi({includeIdol:i.checked}),i.id==="seed"&&C.setProject(a=>({...a,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&C.setProject(a=>({...a,randomAmount:Number(i.value)}),!1),i.id==="speed"&&C.setProject(a=>({...a,playback:{...a.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&C.setProject(a=>({...a,playback:{...a.playback,loop:i.checked}}),!1),i.id==="loop-close"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&C.setProject(a=>({...a,playback:{...a.playback,freeze:i.checked}}),!1),i.id==="time"&&C.setProject(a=>({...a,playback:{...a.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const a=xe(r);a&&Be(a.id,n=>({...n,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const a=xe(r);a&&Be(a.id,n=>({...n,enabled:i.checked}),!1)}for(const a of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${a}`&&C.setProject(n=>({...n,globalFeedback:{...n.globalFeedback,[a]:Number(i.value)}}),!1),i.id===`lfb-${a}`){const n=xe(r);n&&Be(n.id,s=>({...s,feedback:{...s.feedback,[a]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const a=xe(r),n=i.id.slice(3);a&&n in a.transform&&Be(a.id,s=>({...s,transform:{...s.transform,[n]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){ni=!0;const a=id(i.dataset.fxType||"",i.dataset.param),n=rd(i,a);Lt(i.dataset.layer,i.dataset.fx,i.dataset.param,n,!1),C.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="exp-q"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&C.setProject(a=>({...a,exportSettings:{...a.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{ni&&(ni=!1,ir(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),C.state.ui.dropActive||C.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&C.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),C.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Ji(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),qt(),C.setProject(r=>({...r,playback:{...r.playback,playing:!r.playback.playing}}))),(e.key==="r"||e.key==="R")&&yt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&yt("all",!0),(e.key==="k"||e.key==="K")&&en(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),tn()),e.key==="?"&&C.patchUi({helpOpen:!C.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Ja()))})}function id(t,e){return ze(t)?.params.find(i=>i.id===e)}function rd(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function ir(t){const{project:e,ui:i}=C.state,r=t.querySelector("#proj-name"),a=t.querySelector("#seed"),n=t.querySelector("#rnd-amt"),s=t.querySelector("#quality");r&&document.activeElement!==r&&(r.value=e.name),a&&document.activeElement!==a&&(a.value=String(e.seed)),n&&(n.value=String(e.randomAmount)),s&&(s.value=e.quality);const o=t.querySelector("#top-export");o&&(o.disabled=i.exporting);const c=t.querySelector("#inc-critters");c&&(c.checked=i.includeCritters);const l=t.querySelector("#inc-idol");l&&(l.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),ad(t.querySelector("#rail")),nd(t.querySelector("#stack")),od(t.querySelector("#transport"))}function ad(t){const e=C.project,i=C.state.ui;t.innerHTML=`
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
      <button class="btn tiny acid" data-act="gen" data-kind="void">Void</button>
      <button class="btn tiny acid" data-act="gen" data-kind="tile">Tile</button>
      <button class="btn tiny acid" data-act="gen" data-kind="corridor">Corridor</button>
      <button class="btn tiny acid" data-act="gen" data-kind="moon">Moon</button>
      <button class="btn tiny acid" data-act="gen" data-kind="snow">Snow</button>
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
      <button class="btn tiny acid" data-act="gen" data-kind="confetti">Confetti</button>
      <button class="btn tiny acid" data-act="gen" data-kind="disco">Disco</button>
      <button class="btn tiny acid" data-act="gen" data-kind="terrazzo">Terrazzo</button>
      <button class="btn tiny acid" data-act="gen" data-kind="comic">Comic</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="critters">Floaters</button>
      <button class="btn tiny acid" data-act="stamp-critters">Stamp floaters</button>
      <button class="btn tiny acid" data-act="stamp-idol">Stamp idol</button>
    </div>
    <div class="row">
      <button class="btn tiny hot" data-act="channel">Channel</button>
      <button class="btn tiny hot" data-act="rand-wacky">Next tape</button>
      <button class="btn tiny hot" data-act="stamp-chaos">Stamp chaos</button>
      <button class="btn tiny" data-act="reprint">Print frame</button>
    </div>
    <label class="check"><input type="checkbox" id="inc-critters-rail" ${i.includeCritters?"checked":""}/> include floaters in Rand all</label>
    <label class="check"><input type="checkbox" id="inc-idol-rail" ${i.includeIdol?"checked":""}/> include idol in Rand all</label>
    <div class="status" style="margin-top:4px">Tape rooms: Void, Tile, Corridor, Moon, Snow. Channel flips the room and keeps the idol. Next tape rolls a new scene + analog wrap. Idol Wild is a simple totem — Grow still adds extras if you pick them. Stamp chaos rerolls overlays, not the room.</div>
    <div style="margin-top:8px">
      ${e.sources.map(r=>{const a=r.kind==="audio"?`soundtrack · ${wt(r.duration||0)}`:`${r.kind} ${r.width}×${r.height}`,n=r.kind==="audio"?'<span class="status">mix</span>':`<button class="btn tiny" data-act="use-src" data-id="${r.id}">use</button>`;return`
        <div class="thumb ${r.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${r.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Re(r.name)}</b><span>${a}</span></div>
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
        <div class="hd"><span>${Re(r.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${r.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${r.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${r.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function nd(t){const e=C.project,i=xe(e),r=Ot(i),a=yn();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(n=>`
      <div class="layer ${n.id===i?.id?"on":""}" data-act="sel-layer" data-id="${n.id}">
        <div class="hd">
          <span class="name">${Re(n.name)}</span>
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
        <select id="blend">${Ns.map(n=>`<option value="${n}" ${n===i.blendMode?"selected":""}>${n}</option>`).join("")}</select>
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
      ${i.effects.map((n,s)=>`
        <div class="fx ${n.id===r?.id?"on":""} ${n.enabled?"":"bypass"}" draggable="true" data-fx-index="${s}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${n.id}">${s+1}. ${Re(ze(n.typeId)?.name??n.typeId)}</span>
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
        ${wn.map(n=>{const s=a[n.id]??[];return s.length?`<optgroup label="${n.label}">${s.map(o=>`<option value="${o.id}">${o.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny acid" data-act="stamp-critters">stamp floaters</button>
        <button class="btn tiny acid" data-act="stamp-idol">stamp idol</button>
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${r?`
        <hr class="div" />
        <div class="sec">${Re(ze(r.typeId)?.name??"params")} · ${Re(ze(r.typeId)?.description??"")}</div>
        ${(ze(r.typeId)?.params??[]).map(n=>sd(i.id,r,n)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(n=>{n.addEventListener("dragstart",s=>{s.dataTransfer?.setData("text/plain",n.getAttribute("data-fx-index")||"0")}),n.addEventListener("dragover",s=>s.preventDefault()),n.addEventListener("drop",s=>{s.preventDefault();const o=Number(s.dataTransfer?.getData("text/plain")),c=Number(n.getAttribute("data-fx-index"));!i||Number.isNaN(o)||Number.isNaN(c)||o===c||Be(i.id,l=>{const d=[...l.effects],[u]=d.splice(o,1);return d.splice(c,0,u),{...l,effects:d}})})})}function sd(t,e,i){const r=e.params[i.id]??i.default,a=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${a} ${r?"checked":""}/> ${Re(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Re(i.label)}</span><input type="color" ${a} value="${Re(String(r))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Re(i.label)}</span>
      <select ${a}>${(i.options??[]).map(n=>`<option value="${n.value}" ${n.value===r?"selected":""}>${n.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Re(i.label)}</span>
    <input type="range" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(r)}" />
    <input type="number" ${a} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(r).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function od(t){const e=C.project,i=e.playback,r=e.exportSettings,a=C.state.ui.exporting,n=Math.max(e.duration,.1),s=i.time/n*100;t.innerHTML=`
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
        <span class="status" id="clock">${wt(i.time)} / ${wt(n)}</span>
        <span class="status" id="status-line">${C.state.ui.status}</span>
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
        ${Ki.map(o=>`<button class="btn tiny ${lf(r.width,r.height)===o.id?"acid":""}" data-act="exp-aspect" data-id="${o.id}">${o.label}</button>`).join("")}
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
  `,t.querySelector("#timeline")?.addEventListener("click",o=>{const c=o.currentTarget.getBoundingClientRect(),l=(o.clientX-c.left)/c.width*n;C.setProject(d=>({...d,playback:{...d.playback,time:Math.max(0,l)}}))})}function Se(t,e,i,r,a,n){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${r}" max="${a}" step="${n}" value="${i}" />
    <input id="${t}" type="number" min="${r}" max="${a}" step="${n}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Re(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function wt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function rn(t,e){if(C.state.ui.exporting)return;const i=1,r=e.getBoundingClientRect(),a=Math.max(16,Math.floor(r.width*i)),n=Math.max(16,Math.floor(r.height*i));(t.width!==a||t.height!==n)&&(t.width=a,t.height=n)}function cd(t,e,i){const r=t.querySelector("#hud");r&&(r.textContent=`PHOSPHENE  ${wt(i)}  ${e.toFixed(0)}FPS  ${C.project.quality.toUpperCase()}`);const a=Math.max(C.project.duration,.1),n=t.querySelector(".playhead");n&&(n.style.left=`${i/a*100}%`);const s=t.querySelector("#clock");s&&(s.textContent=`${wt(i)} / ${wt(a)}`);const o=t.querySelector("#time");o&&document.activeElement!==o&&(o.value=String(i));const c=t.querySelector("#status-line");c&&(c.textContent=C.state.ui.status)}const an=window;an.__phospheneMark=!0;const nn=document.querySelector("#app");if(!nn)throw new Error("#app missing");const rr=nn,ar=document.createElement("canvas");async function ld(){await new Promise(c=>requestAnimationFrame(()=>c()));let t;try{t=new Is(ar)}catch(c){const l=document.querySelector("#boot-note");l?l.textContent=`PHOSPHENE · plasma · ${c instanceof Error?c.message:"WebGL failed"}`:rr.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${c instanceof Error?c.message:String(c)}</p>
      </div>`;return}Jf(rr,t),an.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>rn(ar,e)).observe(e),rn(ar,e);let r=performance.now(),a=60,n=0,s=performance.now();function o(c){const l=Math.min(.08,(c-r)/1e3);r=c;const d=C.state.ui.exporting,u=C.project,y=Wn(u,u.playback.time),f=_r(u);if(!d&&u.playback.playing&&!u.playback.freeze)if(f?.audio&&u.playback.mode==="forward"){bi(f.audio,u.playback);const g=f.audio.currentTime;Number.isFinite(g)&&C.setProject(m=>({...m,playback:{...m.playback,time:g}}),!1)}else{let g=u.playback.time+l*y;const m=Math.max(u.duration,.001);u.playback.loop?g=(g%m+m)%m:g=Math.min(g,m),C.setProject(v=>({...v,playback:{...v.playback,time:g}}),!1),f?.audio&&bi(f.audio,{...u.playback,playing:!1,time:g})}else f?.audio&&bi(f.audio,{...u.playback,playing:!1});for(const g of C.project.sources)if(g.kind==="video"&&g.video&&!C.project.playback.freeze){const m=pi(C.project.playback.time,g.duration||g.video.duration||1,C.project.playback.mode,1,C.project.playback.loop);Us(g,m,{playing:C.project.playback.playing,freeze:C.project.playback.freeze,mode:C.project.playback.mode,speed:C.project.playback.speed})}if(!d)try{t.render(C.project,C.project.playback.time)}catch(g){C.patchUi({status:g instanceof Error?g.message:"render error"},!1)}n++,c-s>400&&(a=n*1e3/(c-s),s=c,n=0),cd(rr,a,C.project.playback.time),requestAnimationFrame(o)}requestAnimationFrame(o)}ld()})();

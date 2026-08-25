(function(){"use strict";function Se(t="id"){const e=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);return`${t}_${e}`}const ss=[{id:"grade",name:"Grade",category:"color",description:"Brightness, contrast, exposure, saturation, hue, gamma",params:[{id:"brightness",label:"Brightness",kind:"float",min:-1,max:1,step:.01,default:0},{id:"contrast",label:"Contrast",kind:"float",min:-1,max:1,step:.01,default:0},{id:"exposure",label:"Exposure",kind:"float",min:-2,max:2,step:.01,default:0},{id:"saturation",label:"Saturation",kind:"float",min:-1,max:1,step:.01,default:0},{id:"hue",label:"Hue",kind:"float",min:-1,max:1,step:.01,default:0},{id:"gamma",label:"Gamma",kind:"float",min:.2,max:3,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],as=[{id:"warp",name:"Wave Warp",category:"distort",description:"Sine-wave displacement / liquid glass",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:.4,step:.001,default:.05},{id:"freq",label:"Freq",kind:"float",min:.5,max:40,step:.1,default:8},{id:"speed",label:"Speed",kind:"float",min:0,max:4,step:.01,default:.7},{id:"angle",label:"Angle",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],os=[{id:"analog",name:"Cathode",category:"analog",description:"Scanlines, tracking, VHS jitter, flicker",params:[{id:"mixScan",label:"Scanlines",kind:"float",min:0,max:1,step:.01,default:.4},{id:"tracking",label:"Tracking",kind:"float",min:0,max:1,step:.01,default:.15},{id:"noise",label:"Tape noise",kind:"float",min:0,max:1,step:.01,default:.12},{id:"flicker",label:"Flicker",kind:"float",min:0,max:1,step:.01,default:.08},{id:"weave",label:"Gate weave",kind:"float",min:0,max:1,step:.01,default:.1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],cs=[{id:"kaleido",name:"Kaleidoscope",category:"geometric",description:"Radial mirror segments",params:[{id:"segments",label:"Segments",kind:"int",min:2,max:16,step:1,default:6},{id:"offset",label:"Offset",kind:"float",min:0,max:6.283,step:.01,default:0},{id:"zoom",label:"Zoom",kind:"float",min:.4,max:2.5,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`}],ls=[{id:"echo",name:"Echo / Trails",category:"temporal",description:"Blend with previous frames",params:[{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:.45},{id:"decay",label:"Decay",kind:"float",min:0,max:1,step:.01,default:.7},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
float musicFam(vec2 p, float id, float fam) {
  float k = mod(fam, 9.0);
  if (k < 0.5) return musicNote(p, id);
  if (k < 1.5) return vinyl(p, id);
  if (k < 2.5) return cassette(p, id);
  if (k < 3.5) return headphones(p, id);
  if (k < 4.5) return heart(p, id);
  if (k < 5.5) return sparkle(p, id);
  if (k < 6.5) return mic(p, id);
  if (k < 7.5) return speaker(p, id);
  return clef(p, id);
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
  pos = fract(pos);
  float heading = atan(vel.y + bob * cos(time * bobHz + id) * bobHz, vel.x + 0.0001);
  float spin = heading + time * mix(-2.2, 2.2, crHash(vec2(id, 12.1)));
  float sz = mix(0.035, 0.17, crHash(vec2(id, 9.2))) * max(sizeMul, 0.2);
  sz *= 1.0 + 0.08 * sin(time * 1.7 + id);
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
    float fill = 1.0 - smoothstep(-0.02, fillSoft, sd);
    float rim = 1.0 - smoothstep(0.0, 0.18, abs(sd + 0.02));
    float glow = exp(-max(sd, 0.0) * 3.6) * 0.48;
    float hl = fill * (1.0 - smoothstep(0.45, 0.0, length(p - vec2(-0.2, -0.25))));
    vec3 col = mix(fillCol, rimCol, rim * 0.6);
    col = mix(col, vec3(1.0), hl * 0.28);
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
  if (kit > 1.5 && kit < 2.5) nFam = 18.0;
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
`,ar=`
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
  float wings, collar, bow;
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
  f.sx = mix(0.62, 1.48, figH(seed + 1.22));
  f.sz = mix(0.7, 1.38, figH(seed + 1.26));
  f.torsoKind = figH(seed + 1.1);
  f.ts = vec3(
    mix(0.12, 0.42, figH(seed + 1.2)),
    mix(0.16, 0.55, pow(figH(seed + 1.3), 0.8)),
    mix(0.09, 0.3, figH(seed + 1.4))
  );
  f.neck = mix(0.0, 0.52, pow(figH(seed + 2.05), 1.2));
  f.headKind = figH(seed + 2.2);
  f.hs = mix(0.18, 0.54, pow(figH(seed + 2.3), 0.68));
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
  f.eyeZ = -f.hs * mix(0.88, 1.28, figH(seed + 6.3));
  f.eyeSpread = f.hs * mix(0.18, 0.82, figH(seed + 6.4));
  f.eyeR = f.hs * mix(0.2, 0.55, figH(seed + 6.5));
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
  if (f.petals > 0.5) f.halo = 0.0;
  if (u_grow > 0.5 && u_grow < 1.5) { f.petals = 1.0; f.halo = 0.0; f.antenna = 0.0; }
  else if (u_grow > 1.5 && u_grow < 2.5) { f.halo = 1.0; f.petals = 0.0; }
  else if (u_grow > 2.5 && u_grow < 3.5) { f.antenna = 1.0; f.halo = 0.0; }
  else if (u_grow > 3.5 && u_grow < 4.5) { f.skirt = 1.0; }
  else if (u_grow > 4.5) {
    f.petals = 0.0; f.skirt = 0.0; f.antenna = 0.0; f.halo = 0.0;
    f.tusks = 0.0; f.wings = 0.0; f.bow = 0.0; f.pack = 0.0; f.orb = 0.0;
    f.extraLeg = 0.0; f.arms = 2.0; f.nEyes = min(f.nEyes, 2.0);
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
  vec2 d = vec2(figBox(hp - vec3(0.0, hs * 0.02, -hs * 0.82), vec3(hs * 0.72, hs * 0.62, hs * 0.14)), 2.4);
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
    d = figMin(d, vec2(length(ep - vec3(0.0, 0.0, -eR * 0.5)) - eR * 0.45, 5.6));
  }
  if (f.mouth < 0.3) {
    vec3 sn = hp - vec3(0.0, hs * -0.02, -hs * 1.35);
    d = figMin(d, vec2(figBox(sn, vec3(hs * 0.28, hs * 0.16, hs * 0.38)), 6.0));
  } else if (f.mouth < 0.55) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.02, -hs * 0.4), vec3(0.0, 0.0, -hs * 1.7), hs * 0.09), 7.0));
  } else if (f.mouth < 0.78) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.06, -hs * 0.5), vec3(hs * 0.12, -hs * 0.4, -hs * 1.5), hs * 0.1), 6.0));
  } else {
    d = figMin(d, vec2(figBox(hp - vec3(0.0, -hs * 0.12, -hs * 0.95), vec3(hs * 0.32, hs * 0.08, hs * 0.18)), 7.0));
  }
  if (f.ears > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.48, hs * 0.55, 0.08), vec3(-hs * 1.15, hs * 1.35, 0.12), hs * 0.09), 7.5));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.52, hs * 0.42, 0.1), vec3(hs * 0.88, hs * 0.85, -0.05), hs * 0.07), 7.5));
  }
  if (f.tusks > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.16, -hs * 0.14, -hs * 0.62), vec3(-hs * 0.22, -hs * 0.48, -hs * 1.1), hs * 0.042), 8.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.16, -hs * 0.14, -hs * 0.62), vec3(hs * 0.22, -hs * 0.48, -hs * 1.1), hs * 0.042), 8.0));
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
      vec3 tip = vec3(sin(a) * hs * 1.32, cos(a) * hs * 1.18, -hs * 0.12);
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
  if (f.torsoKind < 0.34) d = vec2(figBox(p, f.ts), 1.0);
  else if (f.torsoKind < 0.68) d = vec2(figOcta(p * vec3(1.0, 0.75, 1.1), mix(0.28, 0.48, figH(seed + 1.5))), 1.0);
  else d = vec2(figCap(p, vec3(0.0, f.ts.y * 0.55, 0.0), vec3(0.0, -f.ts.y * 0.7, 0.0), f.ts.x * 0.72), 1.0);
  if (f.neck > 0.07) {
    d = figMin(d, vec2(figCap(p, vec3(0.0, f.ts.y * 0.65, 0.0), vec3(0.0, f.ts.y + f.neck, 0.0), 0.055), 1.0));
  }
  vec3 hp = p - vec3(0.0, f.ts.y + mix(0.16, 0.28, figH(seed + 2.1)) + f.neck, 0.0);
  hp = figRotZ(hp, sin(f.t * 4.1) * 0.1);
  hp = figRotX(hp, cos(f.t * 3.2) * 0.06 - f.peck);
  if (f.headKind < 0.22) d = figMin(d, vec2(figOcta(hp, f.hs * 1.35), 2.0));
  else if (f.headKind < 0.42) d = figMin(d, vec2(figBox(hp, vec3(f.hs, f.hs * 1.05, f.hs * 0.85)), 2.0));
  else if (f.headKind < 0.78) {
    d = figMin(d, vec2(figOcta(hp - vec3(f.hs * 0.55, 0.0, 0.0), f.hs), 2.0));
    d = figMin(d, vec2(figOcta(hp + vec3(f.hs * 0.62, f.hs * 0.08, 0.0), f.hs * 0.88), 2.2));
  } else {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -f.hs * 0.2, 0.0), vec3(0.0, f.hs * 1.4, 0.0), f.hs * 0.45), 2.0));
  }
  if (length(hp) < f.hs * 2.8) d = figMin(d, figureFaceF(hp, f));
  if (f.horn > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, f.hs * 0.6, 0.0), vec3(0.0, f.hs * 1.7, 0.0), 0.055), 4.0));
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
  if (f.pack > 0.5) d = figMin(d, vec2(figBox(p - vec3(0.0, 0.0, f.ts.z + 0.08), vec3(0.12, 0.12, 0.08)), 1.5));
  if (f.tail > 0.5) {
    vec3 tb = vec3(0.0, -f.ts.y * 0.42, f.ts.z * 0.4);
    vec3 te = tb + vec3(sin(f.t * 3.7) * 0.24, 0.05, -0.4);
    d = figMin(d, vec2(figCap(p, tb, te, 0.05), 1.5));
  }
  if (f.orb > 0.5) d = figMin(d, vec2(length(p - vec3(0.32, 0.12, 0.12)) - 0.1, 4.0));
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
    d = figMin(d, vec2(figCap(p, vec3(-f.ts.x * 0.2, f.ts.y * 0.18, f.ts.z * 0.4), vec3(-f.ts.x * 1.28, f.ts.y * 0.52, -0.04), 0.042), 6.9));
    d = figMin(d, vec2(figCap(p, vec3(f.ts.x * 0.2, f.ts.y * 0.18, f.ts.z * 0.4), vec3(f.ts.x * 1.28, f.ts.y * 0.52, -0.04), 0.042), 6.9));
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
  } else if (u_coat > 4.5) {
    sat = mix(0.72, 1.0, figH(seed + matId + 8.2));
    val = mix(0.86, 1.0, figH(seed + matId + 9.1));
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
vec4 figureShade(vec3 p, vec3 rd, Fig f, float seed, float matId) {
  vec3 n = figNormal(p, f, seed);
  vec3 l = normalize(vec3(0.35, 0.95, 0.55));
  float ndv = max(0.0, dot(n, -rd));
  float dif = 0.86 + 0.14 * max(0.0, dot(n, l));
  float rim = pow(1.0 - ndv, 2.4) * 0.28;
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), 18.0) * 0.12;
  vec3 albedo = figPal(seed, matId);
  vec3 col = albedo * dif + albedo * rim + vec3(spec);
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
`,ds=`
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
`,fs=`
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,us=`
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
`,oi={id:"dancer",name:"Idol",category:"wacky",description:"One seed-grown low-poly creature with a face like an animal that does not exist. Grow picks petals, a halo, antennae, a skirt, or a quieter body. Coat tints the paint. Drop an MP3 and they dance to it. Mini army fills the frame with tiny ones in sync",params:[{id:"count",label:"Count",kind:"int",min:1,max:4,step:1,default:1},{id:"size",label:"Size",kind:"float",min:.12,max:2.5,step:.01,default:.12},{id:"crowd",label:"Crowd",kind:"enum",default:"normal",randomizable:!1,options:[{value:"normal",label:"Normal"},{value:"mini",label:"Mini army"}]},{id:"place",label:"Place",kind:"enum",default:"center",options:[{value:"center",label:"Center"},{value:"scatter",label:"Scatter + depth"}]},{id:"move",label:"Move",kind:"enum",default:"dance",options:[{value:"dance",label:"Dance"},{value:"drift",label:"Drift"},{value:"float",label:"Float"},{value:"orbit",label:"Orbit"}]},{id:"grow",label:"Grow",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"petals",label:"Petals"},{value:"halo",label:"Halo"},{value:"antenna",label:"Antenna"},{value:"skirt",label:"Skirt"},{value:"quiet",label:"Quiet"}]},{id:"coat",label:"Coat",kind:"enum",default:"wild",options:[{value:"wild",label:"Wild"},{value:"cream",label:"Cream"},{value:"moss",label:"Moss"},{value:"sodium",label:"Sodium"},{value:"night",label:"Night"},{value:"candy",label:"Candy"}]},{id:"echo",label:"Echo",kind:"float",min:0,max:1,step:.01,default:.5},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:256},{id:"speed",label:"Dance",kind:"float",min:0,max:3,step:.01,default:1},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`${or}${ar}`,applyGlsl:fs};function hs(t){return t?{...oi,extraUniforms:`${or}${ar}${ds}`,applyGlsl:us}:oi}const ms=[{id:"critters",name:"Floaters",category:"wacky",description:"Drifting stickers. Kit picks lumpy families, toy-pop music icons, chapel votives, moths, or small charms",params:[{id:"kit",label:"Kit",kind:"enum",default:"shapes",options:[{value:"shapes",label:"Shapes"},{value:"toy pop",label:"Toy pop"},{value:"mix",label:"Shapes + toy pop"},{value:"votives",label:"Votives"},{value:"moths",label:"Moths"},{value:"charms",label:"Charms"}]},{id:"count",label:"Shapes",kind:"int",min:1,max:8,step:1,default:5},{id:"size",label:"Size",kind:"float",min:.4,max:2.5,step:.01,default:1.1},{id:"seed",label:"Seed",kind:"int",min:1,max:9999,step:1,default:77},{id:"speed",label:"Drift",kind:"float",min:0,max:3,step:.01,default:1.15},{id:"amount",label:"Amount",kind:"float",min:0,max:1,step:.01,default:1},{id:"mix",label:"Mix",kind:"float",min:0,max:1,step:.01,default:1,randomizable:!1}],extraUniforms:`
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
`},oi],cr=[...ss,...as,...os,...cs,...ls,...ms],ps=new Map(cr.map(t=>[t.id,t]));function Me(t){return ps.get(t)}function gs(){const t={};for(const e of cr)(t[e.category]??=[]).push(e);return t}const vs=[{id:"color",label:"Color"},{id:"distort",label:"Distort"},{id:"analog",label:"Analog"},{id:"geometric",label:"Geometry"},{id:"temporal",label:"Time"},{id:"wacky",label:"Shapes"}];function it(t){let e=t>>>0;return()=>{e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Dt(t,e,i){return Math.min(i,Math.max(e,t))}function Ue(t,e=16){return Math.max(e,Math.round(t)&-2)}function lr(t,e,i,r){const n=Math.min(1,i/Math.max(t,1),r/Math.max(e,1));return{width:Ue(t*n),height:Ue(e*n)}}function ci(t,e,i){return t+(e-t)*i}function bs(t){const e=Dt(t,0,1);return e*e*(3-2*e)}function li(t,e){const i={seed:t.seed,duration:t.duration,fps:t.fps,layers:t.layers.map(r=>({...r,sourceId:null,effects:r.effects.map(n=>({...n,params:{...n.params}})),transform:{...r.transform},mask:{...r.mask,rect:{...r.mask.rect},center:{...r.mask.center}},feedback:{...r.feedback}})),keyframes:t.keyframes.map(r=>({...r})),playback:{speed:t.playback.speed,loop:t.playback.loop,mode:t.playback.mode},globalFeedback:{...t.globalFeedback}};return{id:Se("pst"),name:e,createdAt:Date.now(),seed:t.seed,data:i}}function ys(t,e){const i=e.data,r=t.sources.map(s=>s.id),n=i.layers.map((s,a)=>({...s,id:s.id,sourceId:s.sourceId&&r.includes(s.sourceId)?s.sourceId:r[Math.min(a,r.length-1)]??null}));return{...t,seed:i.seed,duration:i.duration,fps:i.fps,layers:n,keyframes:i.keyframes,playback:{...t.playback,...i.playback},globalFeedback:{...i.globalFeedback}}}function ws(t,e){if(t.length===0)return null;const i=it(e);return t[Math.floor(i()*t.length)]}function xs(t){return{...t,id:Se("pst"),name:`${t.name} copy`,createdAt:Date.now(),data:JSON.parse(JSON.stringify(t.data))}}const rt=[{shadow:"#1a1024",highlight:"#f4e2c4",leak:"#ff8a5c",inkA:"#120814",inkB:"#f2d2a8"},{shadow:"#0d1f18",highlight:"#e8f5d0",leak:"#b6ff7a",inkA:"#07140f",inkB:"#d7f0b8"},{shadow:"#101428",highlight:"#c9d4ff",leak:"#7aa2ff",inkA:"#070b18",inkB:"#dce4ff"},{shadow:"#2a1220",highlight:"#ffd5e5",leak:"#ff6a8a",inkA:"#180810",inkB:"#ffd0dc"},{shadow:"#1a1208",highlight:"#ffe7b3",leak:"#ff9a3c",inkA:"#140c04",inkB:"#ffe2a8"},{shadow:"#041820",highlight:"#b8fff2",leak:"#3dffd0",inkA:"#031018",inkB:"#c8fff6"},{shadow:"#1c1010",highlight:"#ffd8c2",leak:"#ff7a4a",inkA:"#140808",inkB:"#ffc8a8"},{shadow:"#0a0a0a",highlight:"#f2f0e6",leak:"#ffeeaa",inkA:"#050505",inkB:"#efece0"},{shadow:"#1a0820",highlight:"#d0ff3d",leak:"#ff4ad2",inkA:"#100414",inkB:"#e8ff88"},{shadow:"#3a0018",highlight:"#ffee55",leak:"#ff3355",inkA:"#220010",inkB:"#ffe98a"},{shadow:"#2a0830",highlight:"#ffe66d",leak:"#ff4ad2",inkA:"#180420",inkB:"#ffd6f4"},{shadow:"#082428",highlight:"#7dffc4",leak:"#ff8ad4",inkA:"#041418",inkB:"#d8fff0"}],di=[{name:"silk garden",mood:"lush",stack:["grade","bloom","grain","warp"],blend:"normal"},{name:"honey dusk",mood:"lush",stack:["grade","duotone","bloom","lens"],blend:"normal"},{name:"lagoon",mood:"lush",stack:["grade","channels","bloom","chroma"],blend:"screen"},{name:"rose room",mood:"lush",stack:["grade","grain","warp","bloom"],blend:"normal"},{name:"holy smear",mood:"lush",stack:["grade","smear","bloom","echo"],blend:"lighten"},{name:"xerox folk",mood:"outsider",stack:["posterize","threshold","analog","chroma"],blend:"normal"},{name:"bruise print",mood:"outsider",stack:["solarize","channels","warp","analog"],blend:"difference"},{name:"marker night",mood:"outsider",stack:["duotone","posterize","grain","kaleido"],blend:"overlay"},{name:"carnival",mood:"mix",stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"field notes",mood:"mix",stack:["grade","posterize","grain","critters"],blend:"normal"},{name:"toy pop",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"},{name:"flower drift",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"prism marsh",mood:"mix",stack:["kaleido","chroma","bloom","duotone"],blend:"overlay"},{name:"outsider silk",mood:"mix",wacky:!0,stack:["grade","bloom","analog","critters"],blend:"normal"},{name:"candy idol",mood:"mix",wacky:!0,stack:["grade","bloom","critters","dancer"],blend:"normal"},{name:"esoteric retina",mood:"mix",stack:["grade","bloom","analog","dancer"],blend:"normal"},{name:"plaza idol",mood:"mix",wacky:!0,stack:["duotone","grain","warp","dancer"],blend:"normal"},{name:"night idol",mood:"outsider",stack:["posterize","chroma","bloom","dancer"],blend:"overlay"},{name:"copier saint",mood:"outsider",stack:["posterize","threshold","grain","dancer"],blend:"normal"},{name:"lot opera",mood:"mix",wacky:!0,stack:["duotone","bloom","analog","dancer"],blend:"normal"},{name:"chapel smear",mood:"lush",stack:["grade","smear","bloom","grain"],blend:"normal"},{name:"aquarium idol",mood:"lush",wacky:!0,stack:["grade","chroma","bloom","dancer"],blend:"screen"},{name:"moth lamp",mood:"outsider",stack:["solarize","bloom","grain","critters"],blend:"normal"},{name:"sodium folk",mood:"mix",wacky:!0,stack:["duotone","analog","grain","critters"],blend:"normal"},{name:"tv dropout",mood:"outsider",stack:["analog","dropout","chroma","dancer"],blend:"normal"},{name:"print ghost",mood:"mix",stack:["grade","key","echo","dancer"],blend:"normal"},{name:"chapel idol",mood:"lush",wacky:!0,stack:["grade","bloom","grain","dancer"],blend:"normal"},{name:"cream garden",mood:"lush",wacky:!0,stack:["grade","bloom","grain","critters"],blend:"normal"},{name:"charm lamp",mood:"mix",wacky:!0,stack:["duotone","bloom","grain","critters"],blend:"screen"}];function _s(t,e,i,r){if(e.randomizable===!1)return i;if(e.kind==="bool")return r<.15?i:t()>.5;if(e.kind==="enum"&&e.options?.length)return r<.2?i:e.options[Math.floor(t()*e.options.length)].value;if(e.kind==="color"&&typeof i=="string")return(f=>{const h=parseInt(f.slice(1),16),y=h>>16&255,l=h>>8&255,p=h&255,m=v=>Dt(Math.round(ci(v,t()*255,r)),0,255);return`#${[m(y),m(l),m(p)].map(v=>v.toString(16).padStart(2,"0")).join("")}`})(i.startsWith("#")?i:"#888888");const n=e.min??0,s=e.max??1,a=typeof i=="number"?i:Number(e.default),o=n+t()*(s-n),c=ci(a,o,Math.max(r,.35));return e.kind==="int"?Math.round(c):c}function fi(t,e,i,r){const n=Me(t.typeId);if(!n)return t;const s=it(e),a={...t.params};for(const o of n.params)r&&o.id!==r||(a[o.id]=_s(s,o,a[o.id]??o.default,Dt(i,0,1)));return{...t,params:a}}function ks(t,e,i,r=!1,n){const s=t.effects.map((a,o)=>r&&n&&a.id!==n?a:fi(a,e+o*997,i));return{...t,effects:s}}function ui(t,e,i){const r=Me(t),n={};if(r)for(const s of r.params)n[s.id]=s.default;return fi({id:Se("fx"),typeId:t,enabled:!0,params:n},e,i)}function hi(t,e,i,r){const n={...t.params};if(t.typeId==="grade"&&(e==="lush"?(n.saturation=.18+r()*.42,n.brightness=-.04+r()*.16,n.contrast=.06+r()*.22,n.gamma=.82+r()*.35,n.hue=(r()-.5)*.18,n.exposure=-.15+r()*.4):e==="outsider"?(n.saturation=r()>.5?-.35+r()*.3:.4+r()*.5,n.contrast=.2+r()*.55,n.gamma=.55+r()*1.1,n.hue=(r()-.5)*.7):(n.saturation=.05+r()*.5,n.contrast=.1+r()*.35,n.hue=(r()-.5)*.35)),t.typeId==="duotone"&&(n.shadow=i.shadow,n.highlight=i.highlight,n.amount=e==="lush"?.45+r()*.4:.7+r()*.3),t.typeId==="grain"&&(n.leakColor=i.leak,n.leak=e==="lush"?.18+r()*.35:r()*.22,n.grain=e==="lush"?.12+r()*.22:.2+r()*.4),t.typeId==="bloom"&&(n.amount=e==="outsider"?.15+r()*.3:.4+r()*.45,n.halation=e==="lush"?.22+r()*.4:r()*.25,n.size=1.4+r()*2.2),t.typeId==="warp"&&(n.amount=e==="lush"?.012+r()*.04:.04+r()*.12),t.typeId==="chroma"&&(n.amount=e==="lush"?.002+r()*.006:.006+r()*.02),t.typeId==="analog"&&(n.mixScan=e==="lush"?r()*.2:.25+r()*.5,n.noise=e==="lush"?r()*.1:.12+r()*.35),t.typeId==="posterize"&&(n.levels=3+Math.floor(r()*6),n.dither=.08+r()*.35),t.typeId==="threshold"&&(n.mix=.35+r()*.45,n.soft=.04+r()*.18),t.typeId==="critters"){n.count=e==="lush"?3+Math.floor(r()*3):4+Math.floor(r()*4),n.size=.85+r()*.7,n.amount=.7+r()*.3,n.speed=.7+r()*1.3,n.seed=1+Math.floor(r()*9998);const s=r();e==="lush"?n.kit=s>.72?"votives":s>.48?"charms":s>.22?"shapes":"toy pop":e==="mix"?n.kit=s>.62?"moths":s>.4?"toy pop":s>.2?"mix":"shapes":n.kit=s>.55?"toy pop":s>.28?"mix":"shapes"}if(t.typeId==="dancer"){n.size=.12+r()*.05,n.count=1,n.crowd="normal",n.place="center";const s=r();e==="lush"?n.move=s>.38?"float":s>.18?"drift":"dance":e==="mix"?n.move=s>.52?"float":s>.3?"drift":s>.16?"orbit":"dance":n.move=s>.78?"drift":"dance",n.echo=.35+r()*.5,n.amount=1,n.speed=n.move==="dance"?.55+r()*1.5:.32+r()*.7,n.seed=1+Math.floor(r()*9998);const a=r();e==="lush"?n.grow=a>.55?"petals":a>.32?"halo":a>.14?"quiet":"wild":e==="mix"?n.grow=a>.62?"skirt":a>.38?"antenna":a>.18?"petals":"wild":n.grow=a>.7?"quiet":"wild";const o=r();e==="lush"?n.coat=o>.48?"cream":o>.24?"moss":"wild":e==="mix"?n.coat=o>.5?"sodium":o>.26?"cream":"wild":n.coat=o>.55?"night":"wild"}return t.typeId==="kaleido"&&(n.segments=e==="lush"?4+Math.floor(r()*4):5+Math.floor(r()*8),n.zoom=.7+r()*.8),t.typeId==="channels"&&(n.tint=i.leak,n.tintAmt=e==="lush"?.12+r()*.28:r()*.45),t.typeId==="key"&&(n.lo=.1+r()*.22,n.hi=.5+r()*.35,n.amount=.45+r()*.4,n.invert=r()>.72),t.typeId==="dropout"&&(n.amount=.28+r()*.4,n.rate=.18+r()*.4,n.tear=e==="outsider"?.3+r()*.5:r()*.28),{...t,params:n}}function Ts(t,e="mix"){const i=it(t>>>0);return hi(ui("critters",t,.85),e,rt[t%rt.length],i)}function Ss(t,e="mix"){const i=it(t>>>0);return hi(ui("dancer",t,.85),e,rt[t%rt.length],i)}function dr(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="dancer")?e:{...e,effects:[...e.effects,Ss(t.seed+i*4243,"mix")]})}}function fr(t){return{...t,layers:t.layers.map((e,i)=>e.effects.some(r=>r.typeId==="critters")?e:{...e,effects:[...e.effects,Ts(t.seed+i*7919,"mix")]})}}function Es(t,e,i,r=!1){const n=it(e>>>0),s=r?di.filter(h=>h.wacky):di,a=s[Math.floor(n()*s.length)]??di[0],o=rt[Math.floor(n()*rt.length)],d=a.stack.filter(h=>Me(h)).slice(0,5).map((h,y)=>hi(ui(h,e+y*997,i),a.mood,o,n));if(a.name==="toy pop"||a.name==="candy idol"||a.name==="flower drift"||a.name==="chapel idol"||a.name==="cream garden"||a.name==="charm lamp")for(const h of d)h.typeId==="critters"&&(a.name==="candy idol"?h.params.kit="mix":a.name==="cream garden"||a.name==="chapel idol"?h.params.kit="votives":a.name==="charm lamp"?h.params.kit="charms":h.params.kit="toy pop"),h.typeId==="dancer"&&(h.params.move="float",h.params.speed=.35+n()*.45,(a.name==="chapel idol"||a.name==="flower drift")&&(h.params.grow=a.name==="chapel idol"?"halo":"petals",h.params.coat="cream"));const f=r||a.mood==="lush"?.05+n()*.14:.04+n()*.22;return{...t,blendMode:a.blend??"normal",opacity:.88+n()*.12,effects:d,feedback:{...t.feedback,amount:f,opacity:.45+n()*.3,scale:1.005+n()*.03,rotation:(n()-.5)*.04,distortion:a.mood==="outsider"?n()*.28:n()*.1}}}function ur(t,e,i,r,n,s=!1){const a=Math.max(t.randomAmount,e==="all"?.75:0),o=t.seed>>>0,c=it(o^2654435769),d=t.layers.map((l,p)=>e==="selected"&&l.id!==i?l:e==="param"?l.id!==i?l:{...l,effects:l.effects.map(m=>m.id===r&&n?fi(m,o+p*13,Math.max(a,.55),n):m)}:e==="all"?Es(l,o+p*7919,a,s):ks(l,o+p*7919,a,!0,r)),f=s?["marsh","oil","paper","stars","cave"]:["plasma","noise","gradient","stars","marsh","oil","paper","cave"],h=t.sources.map((l,p)=>{if(e!=="all"||l.kind!=="generator")return l;const m=it(o+p*131),v=rt[Math.floor(m()*rt.length)],b=s?m()>.45:m()>.35;return{...l,generator:b?l.generator:f[Math.floor(m()*f.length)],colorA:v.inkA,colorB:v.inkB}}),y=e==="all"?{...t.globalFeedback,amount:.05+c()*.22,opacity:.4+c()*.3,scale:1.004+c()*.02,rotation:(c()-.5)*.03,distortion:c()*.12}:t.globalFeedback;return{...t,layers:d,sources:h,globalFeedback:y}}function Cs(t){const e=t.seed+7919>>>0,i=it(e^2246822507),r=["shapes","toy pop","votives","moths","charms"],n=["wild","petals","halo","quiet"],s=["wild","cream","moss","sodium"];let a={...t,seed:e,layers:t.layers.map(o=>({...o,effects:o.effects.map(c=>c.typeId==="critters"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),kit:r[Math.floor(i()*r.length)]}}:c.typeId==="dancer"?{...c,params:{...c.params,seed:1+Math.floor(i()*9998),grow:n[Math.floor(i()*n.length)],coat:s[Math.floor(i()*s.length)]}}:c)}))};return a=fr(a),a=dr(a),a}function Bs(){return{x:0,y:0,scale:1,rotation:0}}function As(){return{type:"none",invert:!1,softness:.12,rect:{x:.15,y:.15,w:.7,h:.7},center:{x:.5,y:.5},radius:.4,gradientAngle:0,noiseScale:4,imageSourceId:null}}function hr(){return{amount:0,delay:0,opacity:.65,scale:1.02,rotation:0,distortion:0}}function Ps(){return{playing:!0,time:0,speed:1,loop:!0,mode:"forward",freeze:!1,duration:8}}function Is(){return{width:960,height:540,fps:24,duration:4,format:"png",quality:.92,bitrate:8,filename:"phosphene",loopClose:!0}}const Rs={stars:{a:"#060814",b:"#c8d4ff"},marsh:{a:"#0c1410",b:"#ffb44a"},oil:{a:"#12081c",b:"#3dffd0"},paper:{a:"#e8dcc8",b:"#2a1810"},cave:{a:"#08060c",b:"#7aa2ff"}};function mr(t="plasma"){const e=Rs[t??"plasma"]??{a:"#140c10",b:"#f0d2b0"};return{id:Se("src"),name:t==="critters"?"FLOATERS":t?t.toUpperCase():"SIGNAL",kind:"generator",generator:t??"plasma",colorA:e.a,colorB:e.b,width:1280,height:720,duration:0}}function pr(t){const e=Me(t);if(!e)throw new Error(`Unknown effect: ${t}`);const i={};for(const r of e.params)i[r.id]=r.default;return{id:Se("fx"),typeId:t,enabled:!0,params:i}}function gr(t,e,i=[]){return{id:Se("lyr"),name:t,enabled:!0,opacity:1,blendMode:"normal",sourceId:e,transform:Bs(),effects:i.map(pr),mask:As(),feedback:hr()}}function vr(){const t=mr("plasma"),e=gr("SIGNAL",t.id,[]),i={version:1,app:"phosphene",name:"untitled",seed:256,randomAmount:.82,quality:"draft",duration:8,fps:30,sources:[t],layers:[e],keyframes:[],playback:Ps(),globalFeedback:hr(),exportSettings:Is(),presets:[]},r=ur({...i,seed:90210,randomAmount:1},"all",null,null,null);return i.presets=[li(i,"factory · signal"),li(r,"factory · scramble")],i}function br(t){return{selectedLayerId:t.layers[0]?.id??null,selectedEffectId:t.layers[0]?.effects[0]?.id??null,selectedSourceId:t.sources[0]?.id??null,selectedParam:null,dropActive:!1,helpOpen:!1,status:"ready",fps:0,prompt:"",useSourceForGen:!0,generating:!1,includeCritters:!0,includeIdol:!0,exporting:!1}}class Ms{state;listeners=new Set;constructor(e=vr()){this.state={project:e,ui:br(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}setProject(e,i=!0){this.state={...this.state,project:e(this.state.project)},i&&this.emit()}setUi(e){this.state={...this.state,ui:e(this.state.ui)},this.emit()}patchUi(e,i=!0){this.state={...this.state,ui:{...this.state.ui,...e}},i&&this.emit()}replace(e){this.state={project:e,ui:{...br(e),status:this.state.ui.status}},this.emit()}get project(){return this.state.project}}const C=new Ms;function mi(t,e,i,r,n){if(e<=0)return 0;const s=t*Math.max(.01,r);if(i==="random")return Math.floor(Math.abs(Math.sin(s*12.9898)*43758.5453))%Math.max(1,Math.floor(e*1e3))/1e3;let a=s;if(i==="reverse"&&(a=-s),i==="pingpong"){const o=e*2,c=(a%o+o)%o;return c<=e?c:o-c}return n?(a%e+e)%e:Dt(a,0,e)}function zs(t,e,i,r,n){return t.filter(s=>s.layerId===e&&s.target===i&&s.paramId===r&&(i!=="effect"||s.effectId===n)).sort((s,a)=>s.time-a.time)}function Fs(t,e,i){if(t.length===0)return i;if(e<=t[0].time)return t[0].value;const r=t[t.length-1];if(e>=r.time)return r.value;for(let n=0;n<t.length-1;n++){const s=t[n],a=t[n+1];if(e>=s.time&&e<=a.time){const o=a.time-s.time||1;let c=(e-s.time)/o;return(a.easing==="smooth"||s.easing==="smooth")&&(c=bs(c)),ci(s.value,a.value,c)}}return i}function nt(t,e,i,r,n,s,a){const o=zs(t.keyframes,e,i,r,a);return Fs(o,s,n)}function Os(t,e,i){const r={...e,transform:{...e.transform},mask:{...e.mask,rect:{...e.mask.rect},center:{...e.mask.center}},feedback:{...e.feedback},effects:e.effects.map(n=>({...n,params:{...n.params}}))};r.opacity=nt(t,e.id,"layer","opacity",e.opacity,i),r.transform.x=nt(t,e.id,"layer","x",e.transform.x,i),r.transform.y=nt(t,e.id,"layer","y",e.transform.y,i),r.transform.scale=nt(t,e.id,"layer","scale",e.transform.scale,i),r.transform.rotation=nt(t,e.id,"layer","rotation",e.transform.rotation,i);for(const n of Object.keys(r.feedback))r.feedback[n]=nt(t,e.id,"feedback",n,e.feedback[n],i);for(const n of r.effects)for(const[s,a]of Object.entries(n.params))typeof a=="number"&&(n.params[s]=nt(t,e.id,"effect",s,a,i,n.id));return r}function Hs(t,e){const i=t.layers[0]?.id??"";return nt(t,i,"playback","speed",t.playback.speed,e)}const Ls=/\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;function Us(t){return(t.type??"").startsWith("audio/")||Ls.test(t.name)}function yr(t){return t.sources.find(e=>e.kind==="audio")}let xt=null,Xe=null,_t=null;const pi=new WeakSet;let kt=0,Tt=0;function gi(){const t=globalThis.AudioContext||globalThis.webkitAudioContext;return t?(xt||(xt=new t,Xe=xt.createAnalyser(),Xe.fftSize=256,Xe.smoothingTimeConstant=.72,Xe.connect(xt.destination),_t=new Uint8Array(Xe.frequencyBinCount)),xt):null}async function $t(){const t=gi();t&&t.state==="suspended"&&await t.resume().catch(()=>{})}function Ns(t){const e=gi();if(!(!e||!Xe||pi.has(t)))try{e.createMediaElementSource(t).connect(Xe),pi.add(t)}catch{pi.add(t)}}async function Ws(t){const e=URL.createObjectURL(t),i=document.createElement("audio");i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.preload="auto";const r=await new Promise((a,o)=>{i.addEventListener("loadedmetadata",()=>a(Number.isFinite(i.duration)?i.duration:0),{once:!0}),i.addEventListener("error",()=>o(new Error(`Audio failed: ${t.name}`)),{once:!0})});Ns(i),await $t();let n=null;const s=gi();if(s)try{const a=await t.arrayBuffer();n=await s.decodeAudioData(a.slice(0))}catch{n=null}return{id:Se("src"),name:t.name,kind:"audio",fileName:t.name,mime:t.type||"audio/mpeg",width:0,height:0,duration:r,audio:i,pcm:n,objectUrl:e}}function Ds(t,e,i,r){if(t.length<8||e<1||i<=0)return{energy:0,bass:0};const n=(r%i+i)%i,s=Math.floor(n*e),a=Math.max(64,Math.floor(e*.046)),o=Math.max(0,Math.min(t.length-1,s)),c=Math.max(o+1,Math.min(t.length,s+a));let d=0;for(let v=o;v<c;v++)d+=t[v]*t[v];const f=Math.min(1,Math.sqrt(d/(c-o))*3.4),h=Math.max(a,Math.floor(e*.09)),y=Math.min(t.length,s+h);let l=0,p=0;for(let v=o;v<y;v+=8)l+=t[v]*t[v],p++;const m=Math.min(1,Math.sqrt(l/Math.max(1,p))*4.2);return{energy:f,bass:m}}function $s(){if(!Xe||!_t)return null;Xe.getByteFrequencyData(_t);let t=0,e=0;const i=_t.length,r=Math.max(4,Math.floor(i*.12));for(let n=0;n<i;n++){const s=_t[n]/255;t+=s,n<r&&(e+=s)}return{energy:t/i,bass:e/r}}function js(t,e){let i=0,r=0;if(t?.kind==="audio"&&t.pcm&&t.pcm.duration>0){const s=Ds(t.pcm.getChannelData(0),t.pcm.sampleRate,t.pcm.duration,e);i=s.energy,r=s.bass}else if(t?.kind==="audio"){const s=$s();s&&(i=s.energy,r=s.bass)}const n=t?.kind==="audio"?.28:.18;return kt+=(i-kt)*n,Tt+=(r-Tt)*Math.min(n,.22),!t&&kt<.002&&(kt=0),!t&&Tt<.002&&(Tt=0),{energy:kt,bass:Tt}}function vi(t,e){if(!t)return;if(t.loop=e.loop,t.playbackRate=Math.max(.25,Math.min(4,e.speed||1)),!(e.playing&&!e.freeze)){if(t.paused||t.pause(),Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.08)try{t.currentTime=Math.max(0,e.time)}catch{}return}if(Number.isFinite(e.time)&&Math.abs(t.currentTime-e.time)>.35)try{t.currentTime=Math.max(0,e.time)}catch{}t.paused&&t.play().catch(()=>{})}const qs=`#version 300 es
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
`,Xs=`#version 300 es
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
`,Zs=`#version 300 es
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
`,Ks=`#version 300 es
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
`,Js=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,ea=`#version 300 es
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
`;class lt extends Error{}function ta(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new lt("WebGL2 is required for Phosphene.");return e}function wr(t,e,i){const r=t.createShader(e);if(!r)throw new lt("Unable to create shader");if(t.shaderSource(r,i),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS)){const n=t.getShaderInfoLog(r)??"shader compile failed";throw t.deleteShader(r),new lt(n)}return r}class st{gl;prog;uniforms=new Map;constructor(e,i,r=qs){this.gl=e;const n=wr(e,e.VERTEX_SHADER,r),s=wr(e,e.FRAGMENT_SHADER,i),a=e.createProgram();if(!a)throw new lt("Unable to create program");if(e.attachShader(a,n),e.attachShader(a,s),e.linkProgram(a),e.deleteShader(n),e.deleteShader(s),!e.getProgramParameter(a,e.LINK_STATUS)){const o=e.getProgramInfoLog(a)??"link failed";throw e.deleteProgram(a),new lt(o)}this.prog=a}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,i){const r=this.loc(e);r&&this.gl.uniform1i(r,i)}f(e,i){const r=this.loc(e);r&&this.gl.uniform1f(r,i)}v2(e,i,r){const n=this.loc(e);n&&this.gl.uniform2f(n,i,r)}v3(e,i,r,n){const s=this.loc(e);s&&this.gl.uniform3f(s,i,r,n)}v4(e,i,r,n,s){const a=this.loc(e);a&&this.gl.uniform4f(a,i,r,n,s)}dispose(){this.gl.deleteProgram(this.prog)}}function bi(t){const e=t.createTexture();if(!e)throw new lt("Unable to create texture");return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e}function ia(t,e,i){t.bindTexture(t.TEXTURE_2D,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i)}function ra(t,e,i,r){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,r,0,t.RGBA,t.UNSIGNED_BYTE,null)}class ht{constructor(e){this.gl=e;const i=e.createFramebuffer();if(!i)throw new lt("Unable to create framebuffer");this.fbo=i,this.tex=bi(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,i){e=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(i)),!(e===this.w&&i===this.h)&&(this.w=e,this.h=i,ra(this.gl,this.tex,e,i),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function Be(t,e,i){t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,i)}function Ze(t){t.drawArrays(t.TRIANGLES,0,3)}const na={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},sa={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},xr={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11};function aa(t){return`${Vs}
${t.extraUniforms??""}
${t.applyGlsl}
${Gs}`}function oa(t,e){return new st(t,aa(e))}function St(t){const e=t.replace("#",""),i=parseInt(e.length===3?e.split("").map(r=>r+r).join(""):e,16);return Number.isNaN(i)?[1,1,1]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}const mt=2;function _r(t,e,i){return new ImageData(t,e,i)}function ca(t,e,i){const r=t.find(s=>s.id===e);if(!r?.options)return Number(i)||0;const n=r.options.findIndex(s=>s.value===i);return n<0?0:n}class la{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;textureProg=null;black=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=ta(e),this.generatorProg=new st(this.gl,Qs)}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=mt&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}ensurePipeline(){if(this.pipelineReady())return;const e=this.gl;for(this.ping??=new ht(e),this.pong??=new ht(e),this.composite??=new ht(e),this.post??=new ht(e);this.ring.length<mt;)this.ring.push(new ht(e));this.copy??=new st(e,Js),this.blit??=new st(e,Zs),this.compositeProg??=new st(e,Xs),this.feedbackProg??=new st(e,Ks),this.textureProg??=new st(e,ea),this.black||(this.black=bi(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]))),this.width>1&&this.ensureSize(this.width,this.height)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const i=e.layers.filter(s=>s.enabled);if(i.length!==1)return!0;const r=i[0];if(r.feedback.amount>.001||r.effects.some(s=>s.enabled))return!0;const n=e.sources.find(s=>s.id===r.sourceId);return!!(n&&n.kind!=="generator"&&n.kind!=="audio")}genProg(e){return e<6?this.generatorProg:(this.generatorFull??=new st(this.gl,Ys),this.generatorFull)}compileType(e,i=!1){const r=e!=="dancer"?e:i?"dancer:mini":"dancer",n=this.effectProg.get(r);if(n)return n;const s=e==="dancer"?hs(i):Me(e);if(!s)return null;try{const a=oa(this.gl,s);return this.effectProg.set(r,a),a}catch(a){return this.lastError=`${r}: ${a instanceof Error?a.message:String(a)}`,console.warn(this.lastError),null}}progFor(e){return e.typeId!=="dancer"?this.compileType(e.typeId):this.compileType("dancer",e.params.crowd==="mini")}resetTemporal(){const e=this.gl;for(const i of[...this.ring,...this.layerHist.values()])i.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,i){if(e===this.width&&i===this.height)return;this.width=e,this.height=i;const r=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(n=>!!n);for(const n of r)n.resize(e,i)}histFor(e){let i=this.layerHist.get(e);return i||(i=new ht(this.gl),i.resize(this.width,this.height),this.layerHist.set(e,i)),i}uploadSource(e){let i=this.sourceTex.get(e.id);i||(i=bi(this.gl),this.sourceTex.set(e.id,i));const r=e.frozenFrame||e.bitmap||e.video;return r&&ia(this.gl,i,r),i}blitTo(e,i){const r=this.gl,n=this.copy;n&&(e.bind(),n.use(),Be(r,0,i),n.i("uTex",0),Ze(r))}drawGenerator(e,i,r,n=77){const s=this.gl,a=xr[i.generator??"plasma"]??0,o=this.genProg(a);e.bind(),o.use(),o.i("uMode",a),o.f("uTime",r);const c=i.colorA?St(i.colorA):[.07,.04,.1],d=i.colorB?St(i.colorB):[.92,.78,.55];o.v3("uColorA",c[0],c[1],c[2]),o.v3("uColorB",d[0],d[1],d[2]),o.f("uScale",6),o.f("uSeed",n),o.f("u_audio",this.audioEnergy),o.f("u_bass",this.audioBass),Ze(s)}drawTexture(e,i,r){const n=this.gl,s=this.textureProg;s&&(e.bind(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),s.use(),Be(n,0,i),s.i("uTex",0),s.v2("uTranslate",r.transform.x,r.transform.y),s.f("uScale",r.transform.scale),s.f("uRotation",r.transform.rotation),s.v2("uFit",1,1),Ze(n))}applyEffect(e,i,r,n,s,a,o,c,d){const f=Me(r.typeId),h=this.progFor(r);if(!f||!h){this.blitTo(e,i);return}const y=this.gl;e.bind(),h.use(),Be(y,0,i),Be(y,1,c),Be(y,2,d),h.i("uTex",0),h.i("uFeedback",1),h.i("uHistory",2),h.i("uMask",3),h.v2("uResolution",e.w,e.h),h.v2("uTexel",1/e.w,1/e.h),h.f("uTime",s),h.f("uFrame",a),h.f("uQuality",o==="draft"?0:o==="preview"?1:2),h.f("u_audio",this.audioEnergy),h.f("u_bass",this.audioBass),h.v2("u_translate",n.transform.x,n.transform.y),h.f("u_scale",n.transform.scale),h.f("u_rotation",n.transform.rotation);const l=n.mask;h.i("u_maskType",sa[l.type]??0),h.i("u_maskInvert",l.invert?1:0),h.f("u_maskSoftness",l.softness),h.v4("u_maskRect",l.rect.x,l.rect.y,l.rect.w,l.rect.h),h.v2("u_maskCenter",l.center.x,l.center.y),h.f("u_maskRadius",l.radius),h.f("u_maskGradientAngle",l.gradientAngle),h.f("u_maskNoiseScale",l.noiseScale);let p=1;for(const m of f.params){const v=r.params[m.id]??m.default,b=`u_${m.id}`;if(m.kind==="color"&&typeof v=="string"){const[w,T,S]=St(v);h.v3(b,w,T,S)}else m.kind==="bool"?h.f(b,v?1:0):m.kind==="enum"?h.f(b,ca(f.params,m.id,v)):h.f(b,Number(v));m.id==="mix"&&(p=Number(v))}h.f("u_mix",p),Ze(y)}drawLite(e,i){const r=this.gl,n=e.layers.find(h=>h.enabled)??e.layers[0],s=n?e.sources.find(h=>h.id===n.sourceId):null,a=s&&s.kind!=="audio"?s:{generator:"plasma"};r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.canvas.width,this.canvas.height);const o=xr[a.generator??"plasma"]??0,c=this.genProg(o);c.use(),c.i("uMode",o),c.f("uTime",i);const d=a.colorA?St(a.colorA):[.07,.04,.1],f=a.colorB?St(a.colorB):[.92,.78,.55];c.v3("uColorA",d[0],d[1],d[2]),c.v3("uColorB",f[0],f[1],f[2]),c.f("uScale",6),c.f("uSeed",e.seed),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),Ze(r)}render(e,i,r){const n=this.gl,s=r?.quality??e.quality,a=js(yr(e),i);if(this.audioEnergy=a.energy,this.audioBass=a.bass,s!=="export"&&!this.needsPipeline(e)){this.drawLite(e,i);return}this.ensurePipeline();const o=this.ping,c=this.pong,d=this.composite,f=this.post,h=this.blit,y=this.compositeProg,l=this.feedbackProg,p=s==="draft"?.5:1,m=Math.max(16,Math.floor((r?.width??this.canvas.width)*p)),v=Math.max(16,Math.floor((r?.height??this.canvas.height)*p));this.ensureSize(m,v),d.bind(),n.clearColor(.02,.02,.03,1),n.clear(n.COLOR_BUFFER_BIT);const b=e.globalFeedback,w=Math.max(0,Math.min(mt-1,Math.round(b.delay))),T=(this.ringIndex-1-w+mt*8)%mt,S=this.ring[T].tex,E=Math.floor(i*e.fps);for(const O of e.layers){if(!O.enabled)continue;const R=Os(e,O,i),L=e.sources.find(_=>_.id===R.sourceId)??null;if(!L||L.kind==="generator"||L.kind==="audio"){const _=L&&L.kind!=="audio"?L:{generator:"plasma"};this.drawGenerator(o,_,i,e.seed)}else{const _=this.uploadSource(L);this.drawTexture(o,_,R)}let P=o,q=c;const Q=this.histFor(R.id);for(const _ of R.effects){if(!_.enabled)continue;this.applyEffect(q,P.tex,_,R,i,E,s,S,Q.tex);const z=P;P=q,q=z}if(R.feedback.amount>.001){q.bind(),l.use(),Be(n,0,P.tex),Be(n,1,Q.tex),l.i("uTex",0),l.i("uFeedback",1),l.f("uAmount",R.feedback.amount),l.f("uOpacity",R.feedback.opacity),l.f("uScale",R.feedback.scale),l.f("uRotation",R.feedback.rotation),l.f("uDistortion",R.feedback.distortion),l.f("uTime",i),Ze(n);const _=P;P=q,q=_}this.blitTo(f,d.tex),d.bind(),y.use(),Be(n,0,f.tex),Be(n,1,P.tex),y.i("uBase",0),y.i("uLayer",1),y.f("uOpacity",R.opacity),y.i("uBlend",na[R.blendMode]??0),y.v2("uResolution",m,v),Ze(n),this.blitTo(Q,P.tex)}b.amount>.001&&(f.bind(),l.use(),Be(n,0,d.tex),Be(n,1,S),l.i("uTex",0),l.i("uFeedback",1),l.f("uAmount",b.amount),l.f("uOpacity",b.opacity),l.f("uScale",b.scale),l.f("uRotation",b.rotation),l.f("uDistortion",b.distortion),l.f("uTime",i),Ze(n),this.blitTo(d,f.tex)),this.blitTo(this.ring[this.ringIndex],d.tex),this.ringIndex=(this.ringIndex+1)%mt,n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,this.canvas.width,this.canvas.height),h.use(),Be(n,0,d.tex),h.i("uTex",0),h.f("uVignette",r?.vignette??.25),Ze(n)}capture(e,i,r,n,s="image/png",a=.92){const o=this.paintFrame(e,i,r,n);return new Promise((c,d)=>{o.toBlob(f=>{f?c(f):d(new Error("Export failed"))},s,a)})}paintFrame(e,i,r,n,s){const a=s??document.createElement("canvas");a.width!==r&&(a.width=r),a.height!==n&&(a.height=n);const o=a.getContext("2d",{alpha:!1});if(!o)throw new Error("No 2d context");this.render(e,i,{width:r,height:n,quality:"export",vignette:0}),this.gl.finish();const c=this.readPixels(this.width,this.height);if(this.width===r&&this.height===n)o.putImageData(_r(c,r,n),0,0);else{const d=document.createElement("canvas");d.width=this.width,d.height=this.height,d.getContext("2d")?.putImageData(_r(c,this.width,this.height),0,0),o.drawImage(d,0,0,r,n)}return a}readPixels(e,i){const r=this.gl,n=new Uint8Array(e*i*4);r.bindFramebuffer(r.FRAMEBUFFER,this.composite.fbo),r.readPixels(0,0,e,i,r.RGBA,r.UNSIGNED_BYTE,n),r.bindFramebuffer(r.FRAMEBUFFER,null);const s=new Uint8ClampedArray(new ArrayBuffer(n.length)),a=e*4;for(let o=0;o<i;o++)s.set(n.subarray((i-1-o)*a,(i-o)*a),o*a);return s}}const da=/\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i,fa=/\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;function ua(t){return t.type.startsWith("video/")||fa.test(t.name)}function ha(t){return t.type.startsWith("image/")||da.test(t.name)}async function ma(t){if(ua(t))return ga(t);if(ha(t))return Tr(t);if(Us(t))return Ws(t);throw new Error(`Unsupported media: ${t.name}`)}async function kr(t,e){const i=new File([t],e,{type:t.type||"image/jpeg"});return Tr(i)}async function Tr(t){const e=URL.createObjectURL(t);try{const i=await createImageBitmap(t);return{id:Se("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.width,height:i.height,duration:0,bitmap:i,objectUrl:e}}catch{const i=await pa(e);return{id:Se("src"),name:t.name,kind:"image",fileName:t.name,mime:t.type,width:i.naturalWidth,height:i.naturalHeight,duration:0,bitmap:i,objectUrl:e}}}function pa(t){return new Promise((e,i)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>i(new Error("Image failed to load")),r.src=t})}function ga(t){const e=URL.createObjectURL(t),i=document.createElement("video");return i.src=e,i.crossOrigin="anonymous",i.loop=!0,i.muted=!0,i.playsInline=!0,i.preload="auto",new Promise((r,n)=>{const s=()=>{r({id:Se("src"),name:t.name,kind:"video",fileName:t.name,mime:t.type||"video/mp4",width:i.videoWidth||1280,height:i.videoHeight||720,duration:Number.isFinite(i.duration)?i.duration:0,video:i,objectUrl:e})};i.addEventListener("loadedmetadata",s,{once:!0}),i.addEventListener("error",()=>n(new Error(`Video failed: ${t.name}`)),{once:!0})})}async function va(t){if(t.kind!=="video"||!t.video)return null;const e=t.video,i=await createImageBitmap(e);return{id:Se("src"),name:`${t.name} @ ${e.currentTime.toFixed(2)}s`,kind:"image",fileName:t.fileName,mime:"image/png",width:i.width,height:i.height,duration:0,bitmap:i,frozenFrame:i}}function Sr(t){t.objectUrl&&URL.revokeObjectURL(t.objectUrl),t.video?.pause(),t.audio?.pause(),t.bitmap=null,t.video=null,t.audio=null,t.pcm=null,t.frozenFrame=null}function ba(t,e){if(t.kind!=="video"||!t.video)return;const i=t.video.duration;if(!Number.isFinite(i)||i<=0)return;const r=(e%i+i)%i;Math.abs(t.video.currentTime-r)>1/60&&(t.video.currentTime=r)}const ya=["normal","add","screen","multiply","overlay","difference","exclusion","lighten","darken"];var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function qt(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var yi={exports:{}};/*!

  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */var Er;function xa(){return Er||(Er=1,(function(t,e){(function(i){t.exports=i()})(function(){return(function i(r,n,s){function a(d,f){if(!n[d]){if(!r[d]){var h=typeof qt=="function"&&qt;if(!f&&h)return h(d,!0);if(o)return o(d,!0);var y=new Error("Cannot find module '"+d+"'");throw y.code="MODULE_NOT_FOUND",y}var l=n[d]={exports:{}};r[d][0].call(l.exports,function(p){var m=r[d][1][p];return a(m||p)},l,l.exports,i,r,n,s)}return n[d].exports}for(var o=typeof qt=="function"&&qt,c=0;c<s.length;c++)a(s[c]);return a})({1:[function(i,r,n){var s=i("./utils"),a=i("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(c){for(var d,f,h,y,l,p,m,v=[],b=0,w=c.length,T=w,S=s.getTypeOf(c)!=="string";b<c.length;)T=w-b,h=S?(d=c[b++],f=b<w?c[b++]:0,b<w?c[b++]:0):(d=c.charCodeAt(b++),f=b<w?c.charCodeAt(b++):0,b<w?c.charCodeAt(b++):0),y=d>>2,l=(3&d)<<4|f>>4,p=1<T?(15&f)<<2|h>>6:64,m=2<T?63&h:64,v.push(o.charAt(y)+o.charAt(l)+o.charAt(p)+o.charAt(m));return v.join("")},n.decode=function(c){var d,f,h,y,l,p,m=0,v=0,b="data:";if(c.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var w,T=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===o.charAt(64)&&T--,c.charAt(c.length-2)===o.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=a.uint8array?new Uint8Array(0|T):new Array(0|T);m<c.length;)d=o.indexOf(c.charAt(m++))<<2|(y=o.indexOf(c.charAt(m++)))>>4,f=(15&y)<<4|(l=o.indexOf(c.charAt(m++)))>>2,h=(3&l)<<6|(p=o.indexOf(c.charAt(m++))),w[v++]=d,l!==64&&(w[v++]=f),p!==64&&(w[v++]=h);return w}},{"./support":30,"./utils":32}],2:[function(i,r,n){var s=i("./external"),a=i("./stream/DataWorker"),o=i("./stream/Crc32Probe"),c=i("./stream/DataLengthProbe");function d(f,h,y,l,p){this.compressedSize=f,this.uncompressedSize=h,this.crc32=y,this.compression=l,this.compressedContent=p}d.prototype={getContentWorker:function(){var f=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),h=this;return f.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(f,h,y){return f.pipe(new o).pipe(new c("uncompressedSize")).pipe(h.compressWorker(y)).pipe(new c("compressedSize")).withStreamInfo("compression",h)},r.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,n){var s=i("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},n.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,n){var s=i("./utils"),a=(function(){for(var o,c=[],d=0;d<256;d++){o=d;for(var f=0;f<8;f++)o=1&o?3988292384^o>>>1:o>>>1;c[d]=o}return c})();r.exports=function(o,c){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(d,f,h,y){var l=a,p=y+h;d^=-1;for(var m=y;m<p;m++)d=d>>>8^l[255&(d^f[m])];return-1^d})(0|c,o,o.length,0):(function(d,f,h,y){var l=a,p=y+h;d^=-1;for(var m=y;m<p;m++)d=d>>>8^l[255&(d^f.charCodeAt(m))];return-1^d})(0|c,o,o.length,0):0}},{"./utils":32}],5:[function(i,r,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(i,r,n){var s=null;s=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:s}},{lie:37}],7:[function(i,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=i("pako"),o=i("./utils"),c=i("./stream/GenericWorker"),d=s?"uint8array":"array";function f(h,y){c.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=y,this.meta={}}n.magic="\b\0",o.inherits(f,c),f.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(d,h.data),!1)},f.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(y){h.push({data:y,meta:h.meta})}},n.compressWorker=function(h){return new f("Deflate",h)},n.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,n){function s(l,p){var m,v="";for(m=0;m<p;m++)v+=String.fromCharCode(255&l),l>>>=8;return v}function a(l,p,m,v,b,w){var T,S,E=l.file,O=l.compression,R=w!==d.utf8encode,L=o.transformTo("string",w(E.name)),P=o.transformTo("string",d.utf8encode(E.name)),q=E.comment,Q=o.transformTo("string",w(q)),_=o.transformTo("string",d.utf8encode(q)),z=P.length!==E.name.length,g=_.length!==q.length,H="",ee="",W="",ae=E.dir,V=E.date,se={crc32:0,compressedSize:0,uncompressedSize:0};p&&!m||(se.crc32=l.crc32,se.compressedSize=l.compressedSize,se.uncompressedSize=l.uncompressedSize);var M=0;p&&(M|=8),R||!z&&!g||(M|=2048);var I=0,ne=0;ae&&(I|=16),b==="UNIX"?(ne=798,I|=(function(K,ve){var Te=K;return K||(Te=ve?16893:33204),(65535&Te)<<16})(E.unixPermissions,ae)):(ne=20,I|=(function(K){return 63&(K||0)})(E.dosPermissions)),T=V.getUTCHours(),T<<=6,T|=V.getUTCMinutes(),T<<=5,T|=V.getUTCSeconds()/2,S=V.getUTCFullYear()-1980,S<<=4,S|=V.getUTCMonth()+1,S<<=5,S|=V.getUTCDate(),z&&(ee=s(1,1)+s(f(L),4)+P,H+="up"+s(ee.length,2)+ee),g&&(W=s(1,1)+s(f(Q),4)+_,H+="uc"+s(W.length,2)+W);var Y="";return Y+=`
\0`,Y+=s(M,2),Y+=O.magic,Y+=s(T,2),Y+=s(S,2),Y+=s(se.crc32,4),Y+=s(se.compressedSize,4),Y+=s(se.uncompressedSize,4),Y+=s(L.length,2),Y+=s(H.length,2),{fileRecord:h.LOCAL_FILE_HEADER+Y+L+H,dirRecord:h.CENTRAL_FILE_HEADER+s(ne,2)+Y+s(Q.length,2)+"\0\0\0\0"+s(I,4)+s(v,4)+L+H+Q}}var o=i("../utils"),c=i("../stream/GenericWorker"),d=i("../utf8"),f=i("../crc32"),h=i("../signature");function y(l,p,m,v){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=p,this.zipPlatform=m,this.encodeFileName=v,this.streamFiles=l,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(y,c),y.prototype.push=function(l){var p=l.meta.percent||0,m=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(l):(this.bytesWritten+=l.data.length,c.prototype.push.call(this,{data:l.data,meta:{currentFile:this.currentFile,percent:m?(p+100*(m-v-1))/m:100}}))},y.prototype.openedSource=function(l){this.currentSourceOffset=this.bytesWritten,this.currentFile=l.file.name;var p=this.streamFiles&&!l.file.dir;if(p){var m=a(l,p,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(l){this.accumulate=!1;var p=this.streamFiles&&!l.file.dir,m=a(l,p,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),p)this.push({data:(function(v){return h.DATA_DESCRIPTOR+s(v.crc32,4)+s(v.compressedSize,4)+s(v.uncompressedSize,4)})(l),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var l=this.bytesWritten,p=0;p<this.dirRecords.length;p++)this.push({data:this.dirRecords[p],meta:{percent:100}});var m=this.bytesWritten-l,v=(function(b,w,T,S,E){var O=o.transformTo("string",E(S));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(b,2)+s(b,2)+s(w,4)+s(T,4)+s(O.length,2)+O})(this.dirRecords.length,m,l,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(l){this._sources.push(l);var p=this;return l.on("data",function(m){p.processChunk(m)}),l.on("end",function(){p.closedSource(p.previous.streamInfo),p._sources.length?p.prepareNextSource():p.end()}),l.on("error",function(m){p.error(m)}),this},y.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(l){var p=this._sources;if(!c.prototype.error.call(this,l))return!1;for(var m=0;m<p.length;m++)try{p[m].error(l)}catch{}return!0},y.prototype.lock=function(){c.prototype.lock.call(this);for(var l=this._sources,p=0;p<l.length;p++)l[p].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,n){var s=i("../compressions"),a=i("./ZipFileWorker");n.generateWorker=function(o,c,d){var f=new a(c.streamFiles,d,c.platform,c.encodeFileName),h=0;try{o.forEach(function(y,l){h++;var p=(function(w,T){var S=w||T,E=s[S];if(!E)throw new Error(S+" is not a valid compression method !");return E})(l.options.compression,c.compression),m=l.options.compressionOptions||c.compressionOptions||{},v=l.dir,b=l.date;l._compressWorker(p,m).withStreamInfo("file",{name:y,dir:v,date:b,comment:l.comment||"",unixPermissions:l.unixPermissions,dosPermissions:l.dosPermissions}).pipe(f)}),f.entriesCount=h}catch(y){f.error(y)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,n){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=i("./object")).loadAsync=i("./load"),s.support=i("./support"),s.defaults=i("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=i("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,n){var s=i("./utils"),a=i("./external"),o=i("./utf8"),c=i("./zipEntries"),d=i("./stream/Crc32Probe"),f=i("./nodejsUtils");function h(y){return new a.Promise(function(l,p){var m=y.decompressed.getContentWorker().pipe(new d);m.on("error",function(v){p(v)}).on("end",function(){m.streamInfo.crc32!==y.decompressed.crc32?p(new Error("Corrupted zip : CRC32 mismatch")):l()}).resume()})}r.exports=function(y,l){var p=this;return l=s.extend(l||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),f.isNode&&f.isStream(y)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",y,!0,l.optimizedBinaryString,l.base64).then(function(m){var v=new c(l);return v.load(m),v}).then(function(m){var v=[a.Promise.resolve(m)],b=m.files;if(l.checkCRC32)for(var w=0;w<b.length;w++)v.push(h(b[w]));return a.Promise.all(v)}).then(function(m){for(var v=m.shift(),b=v.files,w=0;w<b.length;w++){var T=b[w],S=T.fileNameStr,E=s.resolve(T.fileNameStr);p.file(E,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:l.createFolders}),T.dir||(p.file(E).unsafeOriginalName=S)}return v.zipComment.length&&(p.comment=v.zipComment),p})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,n){var s=i("../utils"),a=i("../stream/GenericWorker");function o(c,d){a.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(d)}s.inherits(o,a),o.prototype._bindStream=function(c){var d=this;(this._stream=c).pause(),c.on("data",function(f){d.push({data:f,meta:{percent:0}})}).on("error",function(f){d.isPaused?this.generatedError=f:d.error(f)}).on("end",function(){d.isPaused?d._upstreamEnded=!0:d.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,n){var s=i("readable-stream").Readable;function a(o,c,d){s.call(this,c),this._helper=o;var f=this;o.on("data",function(h,y){f.push(h)||f._helper.pause(),d&&d(y)}).on("error",function(h){f.emit("error",h)}).on("end",function(){f.push(null)})}i("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},r.exports=a},{"../utils":32,"readable-stream":16}],14:[function(i,r,n){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(i,r,n){function s(E,O,R){var L,P=o.getTypeOf(O),q=o.extend(R||{},f);q.date=q.date||new Date,q.compression!==null&&(q.compression=q.compression.toUpperCase()),typeof q.unixPermissions=="string"&&(q.unixPermissions=parseInt(q.unixPermissions,8)),q.unixPermissions&&16384&q.unixPermissions&&(q.dir=!0),q.dosPermissions&&16&q.dosPermissions&&(q.dir=!0),q.dir&&(E=b(E)),q.createFolders&&(L=v(E))&&w.call(this,L,!0);var Q=P==="string"&&q.binary===!1&&q.base64===!1;R&&R.binary!==void 0||(q.binary=!Q),(O instanceof h&&O.uncompressedSize===0||q.dir||!O||O.length===0)&&(q.base64=!1,q.binary=!0,O="",q.compression="STORE",P="string");var _=null;_=O instanceof h||O instanceof c?O:p.isNode&&p.isStream(O)?new m(E,O):o.prepareContent(E,O,q.binary,q.optimizedBinaryString,q.base64);var z=new y(E,_,q);this.files[E]=z}var a=i("./utf8"),o=i("./utils"),c=i("./stream/GenericWorker"),d=i("./stream/StreamHelper"),f=i("./defaults"),h=i("./compressedObject"),y=i("./zipObject"),l=i("./generate"),p=i("./nodejsUtils"),m=i("./nodejs/NodejsStreamInputAdapter"),v=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var O=E.lastIndexOf("/");return 0<O?E.substring(0,O):""},b=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},w=function(E,O){return O=O!==void 0?O:f.createFolders,E=b(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:O}),this.files[E]};function T(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var O,R,L;for(O in this.files)L=this.files[O],(R=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&E(R,L)},filter:function(E){var O=[];return this.forEach(function(R,L){E(R,L)&&O.push(L)}),O},file:function(E,O,R){if(arguments.length!==1)return E=this.root+E,s.call(this,E,O,R),this;if(T(E)){var L=E;return this.filter(function(q,Q){return!Q.dir&&L.test(q)})}var P=this.files[this.root+E];return P&&!P.dir?P:null},folder:function(E){if(!E)return this;if(T(E))return this.filter(function(P,q){return q.dir&&E.test(P)});var O=this.root+E,R=w.call(this,O),L=this.clone();return L.root=R.name,L},remove:function(E){E=this.root+E;var O=this.files[E];if(O||(E.slice(-1)!=="/"&&(E+="/"),O=this.files[E]),O&&!O.dir)delete this.files[E];else for(var R=this.filter(function(P,q){return q.name.slice(0,E.length)===E}),L=0;L<R.length;L++)delete this.files[R[L].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var O,R={};try{if((R=o.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=R.type.toLowerCase(),R.compression=R.compression.toUpperCase(),R.type==="binarystring"&&(R.type="string"),!R.type)throw new Error("No output type specified.");o.checkSupport(R.type),R.platform!=="darwin"&&R.platform!=="freebsd"&&R.platform!=="linux"&&R.platform!=="sunos"||(R.platform="UNIX"),R.platform==="win32"&&(R.platform="DOS");var L=R.comment||this.comment||"";O=l.generateWorker(this,R,L)}catch(P){(O=new c("error")).error(P)}return new d(O,R.type||"string",R.mimeType)},generateAsync:function(E,O){return this.generateInternalStream(E).accumulate(O)},generateNodeStream:function(E,O){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(O)}};r.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,n){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,n){var s=i("./DataReader");function a(o){s.call(this,o);for(var c=0;c<this.data.length;c++)o[c]=255&o[c]}i("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var c=o.charCodeAt(0),d=o.charCodeAt(1),f=o.charCodeAt(2),h=o.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===c&&this.data[y+1]===d&&this.data[y+2]===f&&this.data[y+3]===h)return y-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var c=o.charCodeAt(0),d=o.charCodeAt(1),f=o.charCodeAt(2),h=o.charCodeAt(3),y=this.readData(4);return c===y[0]&&d===y[1]&&f===y[2]&&h===y[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=a},{"../utils":32,"./DataReader":18}],18:[function(i,r,n){var s=i("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var c,d=0;for(this.checkOffset(o),c=this.index+o-1;c>=this.index;c--)d=(d<<8)+this.byteAt(c);return this.index+=o,d},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},r.exports=a},{"../utils":32}],19:[function(i,r,n){var s=i("./Uint8ArrayReader");function a(o){s.call(this,o)}i("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,n){var s=i("./DataReader");function a(o){s.call(this,o)}i("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=a},{"../utils":32,"./DataReader":18}],21:[function(i,r,n){var s=i("./ArrayReader");function a(o){s.call(this,o)}i("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},r.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,n){var s=i("../utils"),a=i("../support"),o=i("./ArrayReader"),c=i("./StringReader"),d=i("./NodeBufferReader"),f=i("./Uint8ArrayReader");r.exports=function(h){var y=s.getTypeOf(h);return s.checkSupport(y),y!=="string"||a.uint8array?y==="nodebuffer"?new d(h):a.uint8array?new f(s.transformTo("uint8array",h)):new o(s.transformTo("array",h)):new c(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,n){var s=i("./GenericWorker"),a=i("../utils");function o(c){s.call(this,"ConvertWorker to "+c),this.destType=c}a.inherits(o,s),o.prototype.processChunk=function(c){this.push({data:a.transformTo(this.destType,c.data),meta:c.meta})},r.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,n){var s=i("./GenericWorker"),a=i("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(o,s),o.prototype.processChunk=function(c){this.streamInfo.crc32=a(c.data,this.streamInfo.crc32||0),this.push(c)},r.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,n){var s=i("../utils"),a=i("./GenericWorker");function o(c){a.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}s.inherits(o,a),o.prototype.processChunk=function(c){if(c){var d=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=d+c.data.length}a.prototype.processChunk.call(this,c)},r.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,n){var s=i("../utils"),a=i("./GenericWorker");function o(c){a.call(this,"DataWorker");var d=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(f){d.dataIsReady=!0,d.data=f,d.max=f&&f.length||0,d.type=s.getTypeOf(f),d.isPaused||d._tickAndRepeat()},function(f){d.error(f)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,d=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,d);break;case"uint8array":c=this.data.subarray(this.index,d);break;case"array":case"nodebuffer":c=this.data.slice(this.index,d)}return this.index=d,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,n){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var c=0;c<this._listeners[a].length;c++)this._listeners[a][c].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(c){o.processChunk(c)}),a.on("end",function(){o.end()}),a.on("error",function(c){o.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},r.exports=s},{}],29:[function(i,r,n){var s=i("../utils"),a=i("./ConvertWorker"),o=i("./GenericWorker"),c=i("../base64"),d=i("../support"),f=i("../external"),h=null;if(d.nodestream)try{h=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(p,m){return new f.Promise(function(v,b){var w=[],T=p._internalType,S=p._outputType,E=p._mimeType;p.on("data",function(O,R){w.push(O),m&&m(R)}).on("error",function(O){w=[],b(O)}).on("end",function(){try{var O=(function(R,L,P){switch(R){case"blob":return s.newBlob(s.transformTo("arraybuffer",L),P);case"base64":return c.encode(L);default:return s.transformTo(R,L)}})(S,(function(R,L){var P,q=0,Q=null,_=0;for(P=0;P<L.length;P++)_+=L[P].length;switch(R){case"string":return L.join("");case"array":return Array.prototype.concat.apply([],L);case"uint8array":for(Q=new Uint8Array(_),P=0;P<L.length;P++)Q.set(L[P],q),q+=L[P].length;return Q;case"nodebuffer":return Buffer.concat(L);default:throw new Error("concat : unsupported type '"+R+"'")}})(T,w),E);v(O)}catch(R){b(R)}w=[]}).resume()})}function l(p,m,v){var b=m;switch(m){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=m,this._mimeType=v,s.checkSupport(b),this._worker=p.pipe(new a(b)),p.lock()}catch(w){this._worker=new o("error"),this._worker.error(w)}}l.prototype={accumulate:function(p){return y(this,p)},on:function(p,m){var v=this;return p==="data"?this._worker.on(p,function(b){m.call(v,b.data,b.meta)}):this._worker.on(p,function(){s.delay(m,arguments,v)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(p){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},p)}},r.exports=l},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var s=new ArrayBuffer(0);try{n.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),n.blob=a.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!i("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,n){for(var s=i("./utils"),a=i("./support"),o=i("./nodejsUtils"),c=i("./stream/GenericWorker"),d=new Array(256),f=0;f<256;f++)d[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;d[254]=d[254]=1;function h(){c.call(this,"utf-8 decode"),this.leftOver=null}function y(){c.call(this,"utf-8 encode")}n.utf8encode=function(l){return a.nodebuffer?o.newBufferFrom(l,"utf-8"):(function(p){var m,v,b,w,T,S=p.length,E=0;for(w=0;w<S;w++)(64512&(v=p.charCodeAt(w)))==55296&&w+1<S&&(64512&(b=p.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),w++),E+=v<128?1:v<2048?2:v<65536?3:4;for(m=a.uint8array?new Uint8Array(E):new Array(E),w=T=0;T<E;w++)(64512&(v=p.charCodeAt(w)))==55296&&w+1<S&&(64512&(b=p.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),w++),v<128?m[T++]=v:(v<2048?m[T++]=192|v>>>6:(v<65536?m[T++]=224|v>>>12:(m[T++]=240|v>>>18,m[T++]=128|v>>>12&63),m[T++]=128|v>>>6&63),m[T++]=128|63&v);return m})(l)},n.utf8decode=function(l){return a.nodebuffer?s.transformTo("nodebuffer",l).toString("utf-8"):(function(p){var m,v,b,w,T=p.length,S=new Array(2*T);for(m=v=0;m<T;)if((b=p[m++])<128)S[v++]=b;else if(4<(w=d[b]))S[v++]=65533,m+=w-1;else{for(b&=w===2?31:w===3?15:7;1<w&&m<T;)b=b<<6|63&p[m++],w--;1<w?S[v++]=65533:b<65536?S[v++]=b:(b-=65536,S[v++]=55296|b>>10&1023,S[v++]=56320|1023&b)}return S.length!==v&&(S.subarray?S=S.subarray(0,v):S.length=v),s.applyFromCharCode(S)})(l=s.transformTo(a.uint8array?"uint8array":"array",l))},s.inherits(h,c),h.prototype.processChunk=function(l){var p=s.transformTo(a.uint8array?"uint8array":"array",l.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var m=p;(p=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),p.set(m,this.leftOver.length)}else p=this.leftOver.concat(p);this.leftOver=null}var v=(function(w,T){var S;for((T=T||w.length)>w.length&&(T=w.length),S=T-1;0<=S&&(192&w[S])==128;)S--;return S<0||S===0?T:S+d[w[S]]>T?S:T})(p),b=p;v!==p.length&&(a.uint8array?(b=p.subarray(0,v),this.leftOver=p.subarray(v,p.length)):(b=p.slice(0,v),this.leftOver=p.slice(v,p.length))),this.push({data:n.utf8decode(b),meta:l.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=h,s.inherits(y,c),y.prototype.processChunk=function(l){this.push({data:n.utf8encode(l.data),meta:l.meta})},n.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,n){var s=i("./support"),a=i("./base64"),o=i("./nodejsUtils"),c=i("./external");function d(m){return m}function f(m,v){for(var b=0;b<m.length;++b)v[b]=255&m.charCodeAt(b);return v}i("setimmediate"),n.newBlob=function(m,v){n.checkSupport("blob");try{return new Blob([m],{type:v})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(m),b.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(m,v,b){var w=[],T=0,S=m.length;if(S<=b)return String.fromCharCode.apply(null,m);for(;T<S;)v==="array"||v==="nodebuffer"?w.push(String.fromCharCode.apply(null,m.slice(T,Math.min(T+b,S)))):w.push(String.fromCharCode.apply(null,m.subarray(T,Math.min(T+b,S)))),T+=b;return w.join("")},stringifyByChar:function(m){for(var v="",b=0;b<m.length;b++)v+=String.fromCharCode(m[b]);return v},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function y(m){var v=65536,b=n.getTypeOf(m),w=!0;if(b==="uint8array"?w=h.applyCanBeUsed.uint8array:b==="nodebuffer"&&(w=h.applyCanBeUsed.nodebuffer),w)for(;1<v;)try{return h.stringifyByChunk(m,b,v)}catch{v=Math.floor(v/2)}return h.stringifyByChar(m)}function l(m,v){for(var b=0;b<m.length;b++)v[b]=m[b];return v}n.applyFromCharCode=y;var p={};p.string={string:d,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return p.string.uint8array(m).buffer},uint8array:function(m){return f(m,new Uint8Array(m.length))},nodebuffer:function(m){return f(m,o.allocBuffer(m.length))}},p.array={string:y,array:d,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(m)}},p.arraybuffer={string:function(m){return y(new Uint8Array(m))},array:function(m){return l(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:d,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return o.newBufferFrom(new Uint8Array(m))}},p.uint8array={string:y,array:function(m){return l(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:d,nodebuffer:function(m){return o.newBufferFrom(m)}},p.nodebuffer={string:y,array:function(m){return l(m,new Array(m.length))},arraybuffer:function(m){return p.nodebuffer.uint8array(m).buffer},uint8array:function(m){return l(m,new Uint8Array(m.length))},nodebuffer:d},n.transformTo=function(m,v){if(v=v||"",!m)return v;n.checkSupport(m);var b=n.getTypeOf(v);return p[b][m](v)},n.resolve=function(m){for(var v=m.split("/"),b=[],w=0;w<v.length;w++){var T=v[w];T==="."||T===""&&w!==0&&w!==v.length-1||(T===".."?b.pop():b.push(T))}return b.join("/")},n.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(m)?"nodebuffer":s.uint8array&&m instanceof Uint8Array?"uint8array":s.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(m){if(!s[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(m){var v,b,w="";for(b=0;b<(m||"").length;b++)w+="\\x"+((v=m.charCodeAt(b))<16?"0":"")+v.toString(16).toUpperCase();return w},n.delay=function(m,v,b){setImmediate(function(){m.apply(b||null,v||[])})},n.inherits=function(m,v){function b(){}b.prototype=v.prototype,m.prototype=new b},n.extend=function(){var m,v,b={};for(m=0;m<arguments.length;m++)for(v in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],v)&&b[v]===void 0&&(b[v]=arguments[m][v]);return b},n.prepareContent=function(m,v,b,w,T){return c.Promise.resolve(v).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new c.Promise(function(E,O){var R=new FileReader;R.onload=function(L){E(L.target.result)},R.onerror=function(L){O(L.target.error)},R.readAsArrayBuffer(S)}):S}).then(function(S){var E=n.getTypeOf(S);return E?(E==="arraybuffer"?S=n.transformTo("uint8array",S):E==="string"&&(T?S=a.decode(S):b&&w!==!0&&(S=(function(O){return f(O,s.uint8array?new Uint8Array(O.length):new Array(O.length))})(S))),S):c.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,n){var s=i("./reader/readerFor"),a=i("./utils"),o=i("./signature"),c=i("./zipEntry"),d=i("./support");function f(h){this.files=[],this.loadOptions=h}f.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(y)+", expected "+a.pretty(h)+")")}},isSignature:function(h,y){var l=this.reader.index;this.reader.setIndex(h);var p=this.reader.readString(4)===y;return this.reader.setIndex(l),p},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),y=d.uint8array?"uint8array":"array",l=a.transformTo(y,h);this.zipComment=this.loadOptions.decodeFileName(l)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,y,l,p=this.zip64EndOfCentralSize-44;0<p;)h=this.reader.readInt(2),y=this.reader.readInt(4),l=this.reader.readData(y),this.zip64ExtensibleData[h]={id:h,length:y,value:l}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,y;for(h=0;h<this.files.length;h++)y=this.files[h],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var y=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var l=this.centralDirOffset+this.centralDirSize;this.zip64&&(l+=20,l+=12+this.zip64EndOfCentralSize);var p=y-l;if(0<p)this.isSignature(y,o.CENTRAL_FILE_HEADER)||(this.reader.zero=p);else if(p<0)throw new Error("Corrupted zip: missing "+Math.abs(p)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,n){var s=i("./reader/readerFor"),a=i("./utils"),o=i("./compressedObject"),c=i("./crc32"),d=i("./utf8"),f=i("./compressions"),h=i("./support");function y(l,p){this.options=l,this.loadOptions=p}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(l){var p,m;if(l.skip(22),this.fileNameLength=l.readInt(2),m=l.readInt(2),this.fileName=l.readData(this.fileNameLength),l.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((p=(function(v){for(var b in f)if(Object.prototype.hasOwnProperty.call(f,b)&&f[b].magic===v)return f[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,p,l.readData(this.compressedSize))},readCentralPart:function(l){this.versionMadeBy=l.readInt(2),l.skip(2),this.bitFlag=l.readInt(2),this.compressionMethod=l.readString(2),this.date=l.readDate(),this.crc32=l.readInt(4),this.compressedSize=l.readInt(4),this.uncompressedSize=l.readInt(4);var p=l.readInt(2);if(this.extraFieldsLength=l.readInt(2),this.fileCommentLength=l.readInt(2),this.diskNumberStart=l.readInt(2),this.internalFileAttributes=l.readInt(2),this.externalFileAttributes=l.readInt(4),this.localHeaderOffset=l.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");l.skip(p),this.readExtraFields(l),this.parseZIP64ExtraField(l),this.fileComment=l.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var l=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),l==0&&(this.dosPermissions=63&this.externalFileAttributes),l==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var l=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=l.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=l.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=l.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=l.readInt(4))}},readExtraFields:function(l){var p,m,v,b=l.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});l.index+4<b;)p=l.readInt(2),m=l.readInt(2),v=l.readData(m),this.extraFields[p]={id:p,length:m,value:v};l.setIndex(b)},handleUTF8:function(){var l=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=d.utf8decode(this.fileName),this.fileCommentStr=d.utf8decode(this.fileComment);else{var p=this.findExtraFieldUnicodePath();if(p!==null)this.fileNameStr=p;else{var m=a.transformTo(l,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var b=a.transformTo(l,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var l=this.extraFields[28789];if(l){var p=s(l.value);return p.readInt(1)!==1||c(this.fileName)!==p.readInt(4)?null:d.utf8decode(p.readData(l.length-5))}return null},findExtraFieldUnicodeComment:function(){var l=this.extraFields[25461];if(l){var p=s(l.value);return p.readInt(1)!==1||c(this.fileComment)!==p.readInt(4)?null:d.utf8decode(p.readData(l.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,n){function s(p,m,v){this.name=p,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=m,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var a=i("./stream/StreamHelper"),o=i("./stream/DataWorker"),c=i("./utf8"),d=i("./compressedObject"),f=i("./stream/GenericWorker");s.prototype={internalStream:function(p){var m=null,v="string";try{if(!p)throw new Error("No output type specified.");var b=(v=p.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),m=this._decompressWorker();var w=!this._dataBinary;w&&!b&&(m=m.pipe(new c.Utf8EncodeWorker)),!w&&b&&(m=m.pipe(new c.Utf8DecodeWorker))}catch(T){(m=new f("error")).error(T)}return new a(m,v,"")},async:function(p,m){return this.internalStream(p).accumulate(m)},nodeStream:function(p,m){return this.internalStream(p||"nodebuffer").toNodejsStream(m)},_compressWorker:function(p,m){if(this._data instanceof d&&this._data.compression.magic===p.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new c.Utf8EncodeWorker)),d.createWorkerFrom(v,p,m)},_decompressWorker:function(){return this._data instanceof d?this._data.getContentWorker():this._data instanceof f?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},l=0;l<h.length;l++)s.prototype[h[l]]=y;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,n){(function(s){var a,o,c=s.MutationObserver||s.WebKitMutationObserver;if(c){var d=0,f=new c(p),h=s.document.createTextNode("");f.observe(h,{characterData:!0}),a=function(){h.data=d=++d%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var m=s.document.createElement("script");m.onreadystatechange=function(){p(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:function(){setTimeout(p,0)};else{var y=new s.MessageChannel;y.port1.onmessage=p,a=function(){y.port2.postMessage(0)}}var l=[];function p(){var m,v;o=!0;for(var b=l.length;b;){for(v=l,l=[],m=-1;++m<b;)v[m]();b=l.length}o=!1}r.exports=function(m){l.push(m)!==1||o||a()}}).call(this,typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,n){var s=i("immediate");function a(){}var o={},c=["REJECTED"],d=["FULFILLED"],f=["PENDING"];function h(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,b!==a&&m(this,b)}function y(b,w,T){this.promise=b,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function l(b,w,T){s(function(){var S;try{S=w(T)}catch(E){return o.reject(b,E)}S===b?o.reject(b,new TypeError("Cannot resolve promise with itself")):o.resolve(b,S)})}function p(b){var w=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof w=="function")return function(){w.apply(b,arguments)}}function m(b,w){var T=!1;function S(R){T||(T=!0,o.reject(b,R))}function E(R){T||(T=!0,o.resolve(b,R))}var O=v(function(){w(E,S)});O.status==="error"&&S(O.value)}function v(b,w){var T={};try{T.value=b(w),T.status="success"}catch(S){T.status="error",T.value=S}return T}(r.exports=h).prototype.finally=function(b){if(typeof b!="function")return this;var w=this.constructor;return this.then(function(T){return w.resolve(b()).then(function(){return T})},function(T){return w.resolve(b()).then(function(){throw T})})},h.prototype.catch=function(b){return this.then(null,b)},h.prototype.then=function(b,w){if(typeof b!="function"&&this.state===d||typeof w!="function"&&this.state===c)return this;var T=new this.constructor(a);return this.state!==f?l(T,this.state===d?b:w,this.outcome):this.queue.push(new y(T,b,w)),T},y.prototype.callFulfilled=function(b){o.resolve(this.promise,b)},y.prototype.otherCallFulfilled=function(b){l(this.promise,this.onFulfilled,b)},y.prototype.callRejected=function(b){o.reject(this.promise,b)},y.prototype.otherCallRejected=function(b){l(this.promise,this.onRejected,b)},o.resolve=function(b,w){var T=v(p,w);if(T.status==="error")return o.reject(b,T.value);var S=T.value;if(S)m(b,S);else{b.state=d,b.outcome=w;for(var E=-1,O=b.queue.length;++E<O;)b.queue[E].callFulfilled(w)}return b},o.reject=function(b,w){b.state=c,b.outcome=w;for(var T=-1,S=b.queue.length;++T<S;)b.queue[T].callRejected(w);return b},h.resolve=function(b){return b instanceof this?b:o.resolve(new this(a),b)},h.reject=function(b){var w=new this(a);return o.reject(w,b)},h.all=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=b.length,S=!1;if(!T)return this.resolve([]);for(var E=new Array(T),O=0,R=-1,L=new this(a);++R<T;)P(b[R],R);return L;function P(q,Q){w.resolve(q).then(function(_){E[Q]=_,++O!==T||S||(S=!0,o.resolve(L,E))},function(_){S||(S=!0,o.reject(L,_))})}},h.race=function(b){var w=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=b.length,S=!1;if(!T)return this.resolve([]);for(var E=-1,O=new this(a);++E<T;)R=b[E],w.resolve(R).then(function(L){S||(S=!0,o.resolve(O,L))},function(L){S||(S=!0,o.reject(O,L))});var R;return O}},{immediate:36}],38:[function(i,r,n){var s={};(0,i("./lib/utils/common").assign)(s,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,n){var s=i("./zlib/deflate"),a=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/messages"),d=i("./zlib/zstream"),f=Object.prototype.toString,h=0,y=-1,l=0,p=8;function m(b){if(!(this instanceof m))return new m(b);this.options=a.assign({level:y,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:l,to:""},b||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var T=s.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(T!==h)throw new Error(c[T]);if(w.header&&s.deflateSetHeader(this.strm,w.header),w.dictionary){var S;if(S=typeof w.dictionary=="string"?o.string2buf(w.dictionary):f.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(T=s.deflateSetDictionary(this.strm,S))!==h)throw new Error(c[T]);this._dict_set=!0}}function v(b,w){var T=new m(w);if(T.push(b,!0),T.err)throw T.msg||c[T.err];return T.result}m.prototype.push=function(b,w){var T,S,E=this.strm,O=this.options.chunkSize;if(this.ended)return!1;S=w===~~w?w:w===!0?4:0,typeof b=="string"?E.input=o.string2buf(b):f.call(b)==="[object ArrayBuffer]"?E.input=new Uint8Array(b):E.input=b,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new a.Buf8(O),E.next_out=0,E.avail_out=O),(T=s.deflate(E,S))!==1&&T!==h)return this.onEnd(T),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(E.output,E.next_out))):this.onData(a.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&T!==1);return S===4?(T=s.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===h):S!==2||(this.onEnd(h),!(E.avail_out=0))},m.prototype.onData=function(b){this.chunks.push(b)},m.prototype.onEnd=function(b){b===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},n.Deflate=m,n.deflate=v,n.deflateRaw=function(b,w){return(w=w||{}).raw=!0,v(b,w)},n.gzip=function(b,w){return(w=w||{}).gzip=!0,v(b,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,n){var s=i("./zlib/inflate"),a=i("./utils/common"),o=i("./utils/strings"),c=i("./zlib/constants"),d=i("./zlib/messages"),f=i("./zlib/zstream"),h=i("./zlib/gzheader"),y=Object.prototype.toString;function l(m){if(!(this instanceof l))return new l(m);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},m||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||m&&m.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var b=s.inflateInit2(this.strm,v.windowBits);if(b!==c.Z_OK)throw new Error(d[b]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function p(m,v){var b=new l(v);if(b.push(m,!0),b.err)throw b.msg||d[b.err];return b.result}l.prototype.push=function(m,v){var b,w,T,S,E,O,R=this.strm,L=this.options.chunkSize,P=this.options.dictionary,q=!1;if(this.ended)return!1;w=v===~~v?v:v===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof m=="string"?R.input=o.binstring2buf(m):y.call(m)==="[object ArrayBuffer]"?R.input=new Uint8Array(m):R.input=m,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new a.Buf8(L),R.next_out=0,R.avail_out=L),(b=s.inflate(R,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&P&&(O=typeof P=="string"?o.string2buf(P):y.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,b=s.inflateSetDictionary(this.strm,O)),b===c.Z_BUF_ERROR&&q===!0&&(b=c.Z_OK,q=!1),b!==c.Z_STREAM_END&&b!==c.Z_OK)return this.onEnd(b),!(this.ended=!0);R.next_out&&(R.avail_out!==0&&b!==c.Z_STREAM_END&&(R.avail_in!==0||w!==c.Z_FINISH&&w!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=o.utf8border(R.output,R.next_out),S=R.next_out-T,E=o.buf2string(R.output,T),R.next_out=S,R.avail_out=L-S,S&&a.arraySet(R.output,R.output,T,S,0),this.onData(E)):this.onData(a.shrinkBuf(R.output,R.next_out)))),R.avail_in===0&&R.avail_out===0&&(q=!0)}while((0<R.avail_in||R.avail_out===0)&&b!==c.Z_STREAM_END);return b===c.Z_STREAM_END&&(w=c.Z_FINISH),w===c.Z_FINISH?(b=s.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===c.Z_OK):w!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(R.avail_out=0))},l.prototype.onData=function(m){this.chunks.push(m)},l.prototype.onEnd=function(m){m===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},n.Inflate=l,n.inflate=p,n.inflateRaw=function(m,v){return(v=v||{}).raw=!0,p(m,v)},n.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(c){for(var d=Array.prototype.slice.call(arguments,1);d.length;){var f=d.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var h in f)f.hasOwnProperty(h)&&(c[h]=f[h])}}return c},n.shrinkBuf=function(c,d){return c.length===d?c:c.subarray?c.subarray(0,d):(c.length=d,c)};var a={arraySet:function(c,d,f,h,y){if(d.subarray&&c.subarray)c.set(d.subarray(f,f+h),y);else for(var l=0;l<h;l++)c[y+l]=d[f+l]},flattenChunks:function(c){var d,f,h,y,l,p;for(d=h=0,f=c.length;d<f;d++)h+=c[d].length;for(p=new Uint8Array(h),d=y=0,f=c.length;d<f;d++)l=c[d],p.set(l,y),y+=l.length;return p}},o={arraySet:function(c,d,f,h,y){for(var l=0;l<h;l++)c[y+l]=d[f+l]},flattenChunks:function(c){return[].concat.apply([],c)}};n.setTyped=function(c){c?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,a)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))},n.setTyped(s)},{}],42:[function(i,r,n){var s=i("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var c=new s.Buf8(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;function f(h,y){if(y<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(h,y));for(var l="",p=0;p<y;p++)l+=String.fromCharCode(h[p]);return l}c[254]=c[254]=1,n.string2buf=function(h){var y,l,p,m,v,b=h.length,w=0;for(m=0;m<b;m++)(64512&(l=h.charCodeAt(m)))==55296&&m+1<b&&(64512&(p=h.charCodeAt(m+1)))==56320&&(l=65536+(l-55296<<10)+(p-56320),m++),w+=l<128?1:l<2048?2:l<65536?3:4;for(y=new s.Buf8(w),m=v=0;v<w;m++)(64512&(l=h.charCodeAt(m)))==55296&&m+1<b&&(64512&(p=h.charCodeAt(m+1)))==56320&&(l=65536+(l-55296<<10)+(p-56320),m++),l<128?y[v++]=l:(l<2048?y[v++]=192|l>>>6:(l<65536?y[v++]=224|l>>>12:(y[v++]=240|l>>>18,y[v++]=128|l>>>12&63),y[v++]=128|l>>>6&63),y[v++]=128|63&l);return y},n.buf2binstring=function(h){return f(h,h.length)},n.binstring2buf=function(h){for(var y=new s.Buf8(h.length),l=0,p=y.length;l<p;l++)y[l]=h.charCodeAt(l);return y},n.buf2string=function(h,y){var l,p,m,v,b=y||h.length,w=new Array(2*b);for(l=p=0;l<b;)if((m=h[l++])<128)w[p++]=m;else if(4<(v=c[m]))w[p++]=65533,l+=v-1;else{for(m&=v===2?31:v===3?15:7;1<v&&l<b;)m=m<<6|63&h[l++],v--;1<v?w[p++]=65533:m<65536?w[p++]=m:(m-=65536,w[p++]=55296|m>>10&1023,w[p++]=56320|1023&m)}return f(w,p)},n.utf8border=function(h,y){var l;for((y=y||h.length)>h.length&&(y=h.length),l=y-1;0<=l&&(192&h[l])==128;)l--;return l<0||l===0?y:l+c[h[l]]>y?l:y}},{"./common":41}],43:[function(i,r,n){r.exports=function(s,a,o,c){for(var d=65535&s|0,f=s>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;f=f+(d=d+a[c++]|0)|0,--h;);d%=65521,f%=65521}return d|f<<16|0}},{}],44:[function(i,r,n){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,n){var s=(function(){for(var a,o=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}return o})();r.exports=function(a,o,c,d){var f=s,h=d+c;a^=-1;for(var y=d;y<h;y++)a=a>>>8^f[255&(a^o[y])];return-1^a}},{}],46:[function(i,r,n){var s,a=i("../utils/common"),o=i("./trees"),c=i("./adler32"),d=i("./crc32"),f=i("./messages"),h=0,y=4,l=0,p=-2,m=-1,v=4,b=2,w=8,T=9,S=286,E=30,O=19,R=2*S+1,L=15,P=3,q=258,Q=q+P+1,_=42,z=113,g=1,H=2,ee=3,W=4;function ae(u,U){return u.msg=f[U],U}function V(u){return(u<<1)-(4<u?9:0)}function se(u){for(var U=u.length;0<=--U;)u[U]=0}function M(u){var U=u.state,F=U.pending;F>u.avail_out&&(F=u.avail_out),F!==0&&(a.arraySet(u.output,U.pending_buf,U.pending_out,F,u.next_out),u.next_out+=F,U.pending_out+=F,u.total_out+=F,u.avail_out-=F,U.pending-=F,U.pending===0&&(U.pending_out=0))}function I(u,U){o._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,U),u.block_start=u.strstart,M(u.strm)}function ne(u,U){u.pending_buf[u.pending++]=U}function Y(u,U){u.pending_buf[u.pending++]=U>>>8&255,u.pending_buf[u.pending++]=255&U}function K(u,U){var F,k,x=u.max_chain_length,B=u.strstart,D=u.prev_length,$=u.nice_match,A=u.strstart>u.w_size-Q?u.strstart-(u.w_size-Q):0,G=u.window,J=u.w_mask,Z=u.prev,re=u.strstart+q,he=G[B+D-1],de=G[B+D];u.prev_length>=u.good_match&&(x>>=2),$>u.lookahead&&($=u.lookahead);do if(G[(F=U)+D]===de&&G[F+D-1]===he&&G[F]===G[B]&&G[++F]===G[B+1]){B+=2,F++;do;while(G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&G[++B]===G[++F]&&B<re);if(k=q-(re-B),B=re-q,D<k){if(u.match_start=U,$<=(D=k))break;he=G[B+D-1],de=G[B+D]}}while((U=Z[U&J])>A&&--x!=0);return D<=u.lookahead?D:u.lookahead}function ve(u){var U,F,k,x,B,D,$,A,G,J,Z=u.w_size;do{if(x=u.window_size-u.lookahead-u.strstart,u.strstart>=Z+(Z-Q)){for(a.arraySet(u.window,u.window,Z,Z,0),u.match_start-=Z,u.strstart-=Z,u.block_start-=Z,U=F=u.hash_size;k=u.head[--U],u.head[U]=Z<=k?k-Z:0,--F;);for(U=F=Z;k=u.prev[--U],u.prev[U]=Z<=k?k-Z:0,--F;);x+=Z}if(u.strm.avail_in===0)break;if(D=u.strm,$=u.window,A=u.strstart+u.lookahead,G=x,J=void 0,J=D.avail_in,G<J&&(J=G),F=J===0?0:(D.avail_in-=J,a.arraySet($,D.input,D.next_in,J,A),D.state.wrap===1?D.adler=c(D.adler,$,J,A):D.state.wrap===2&&(D.adler=d(D.adler,$,J,A)),D.next_in+=J,D.total_in+=J,J),u.lookahead+=F,u.lookahead+u.insert>=P)for(B=u.strstart-u.insert,u.ins_h=u.window[B],u.ins_h=(u.ins_h<<u.hash_shift^u.window[B+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[B+P-1])&u.hash_mask,u.prev[B&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=B,B++,u.insert--,!(u.lookahead+u.insert<P)););}while(u.lookahead<Q&&u.strm.avail_in!==0)}function Te(u,U){for(var F,k;;){if(u.lookahead<Q){if(ve(u),u.lookahead<Q&&U===h)return g;if(u.lookahead===0)break}if(F=0,u.lookahead>=P&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+P-1])&u.hash_mask,F=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),F!==0&&u.strstart-F<=u.w_size-Q&&(u.match_length=K(u,F)),u.match_length>=P)if(k=o._tr_tally(u,u.strstart-u.match_start,u.match_length-P),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=P){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+P-1])&u.hash_mask,F=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else k=o._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(k&&(I(u,!1),u.strm.avail_out===0))return g}return u.insert=u.strstart<P-1?u.strstart:P-1,U===y?(I(u,!0),u.strm.avail_out===0?ee:W):u.last_lit&&(I(u,!1),u.strm.avail_out===0)?g:H}function le(u,U){for(var F,k,x;;){if(u.lookahead<Q){if(ve(u),u.lookahead<Q&&U===h)return g;if(u.lookahead===0)break}if(F=0,u.lookahead>=P&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+P-1])&u.hash_mask,F=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=P-1,F!==0&&u.prev_length<u.max_lazy_match&&u.strstart-F<=u.w_size-Q&&(u.match_length=K(u,F),u.match_length<=5&&(u.strategy===1||u.match_length===P&&4096<u.strstart-u.match_start)&&(u.match_length=P-1)),u.prev_length>=P&&u.match_length<=u.prev_length){for(x=u.strstart+u.lookahead-P,k=o._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-P),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=x&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+P-1])&u.hash_mask,F=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=P-1,u.strstart++,k&&(I(u,!1),u.strm.avail_out===0))return g}else if(u.match_available){if((k=o._tr_tally(u,0,u.window[u.strstart-1]))&&I(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return g}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(k=o._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<P-1?u.strstart:P-1,U===y?(I(u,!0),u.strm.avail_out===0?ee:W):u.last_lit&&(I(u,!1),u.strm.avail_out===0)?g:H}function fe(u,U,F,k,x){this.good_length=u,this.max_lazy=U,this.nice_length=F,this.max_chain=k,this.func=x}function _e(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*R),this.dyn_dtree=new a.Buf16(2*(2*E+1)),this.bl_tree=new a.Buf16(2*(2*O+1)),se(this.dyn_ltree),se(this.dyn_dtree),se(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(L+1),this.heap=new a.Buf16(2*S+1),se(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),se(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function be(u){var U;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=b,(U=u.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?_:z,u.adler=U.wrap===2?0:1,U.last_flush=h,o._tr_init(U),l):ae(u,p)}function Ve(u){var U=be(u);return U===l&&(function(F){F.window_size=2*F.w_size,se(F.head),F.max_lazy_match=s[F.level].max_lazy,F.good_match=s[F.level].good_length,F.nice_match=s[F.level].nice_length,F.max_chain_length=s[F.level].max_chain,F.strstart=0,F.block_start=0,F.lookahead=0,F.insert=0,F.match_length=F.prev_length=P-1,F.match_available=0,F.ins_h=0})(u.state),U}function Le(u,U,F,k,x,B){if(!u)return p;var D=1;if(U===m&&(U=6),k<0?(D=0,k=-k):15<k&&(D=2,k-=16),x<1||T<x||F!==w||k<8||15<k||U<0||9<U||B<0||v<B)return ae(u,p);k===8&&(k=9);var $=new _e;return(u.state=$).strm=u,$.wrap=D,$.gzhead=null,$.w_bits=k,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=x+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+P-1)/P),$.window=new a.Buf8(2*$.w_size),$.head=new a.Buf16($.hash_size),$.prev=new a.Buf16($.w_size),$.lit_bufsize=1<<x+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new a.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=U,$.strategy=B,$.method=F,Ve(u)}s=[new fe(0,0,0,0,function(u,U){var F=65535;for(F>u.pending_buf_size-5&&(F=u.pending_buf_size-5);;){if(u.lookahead<=1){if(ve(u),u.lookahead===0&&U===h)return g;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var k=u.block_start+F;if((u.strstart===0||u.strstart>=k)&&(u.lookahead=u.strstart-k,u.strstart=k,I(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-Q&&(I(u,!1),u.strm.avail_out===0))return g}return u.insert=0,U===y?(I(u,!0),u.strm.avail_out===0?ee:W):(u.strstart>u.block_start&&(I(u,!1),u.strm.avail_out),g)}),new fe(4,4,8,4,Te),new fe(4,5,16,8,Te),new fe(4,6,32,32,Te),new fe(4,4,16,16,le),new fe(8,16,32,32,le),new fe(8,16,128,128,le),new fe(8,32,128,256,le),new fe(32,128,258,1024,le),new fe(32,258,258,4096,le)],n.deflateInit=function(u,U){return Le(u,U,w,15,8,0)},n.deflateInit2=Le,n.deflateReset=Ve,n.deflateResetKeep=be,n.deflateSetHeader=function(u,U){return u&&u.state?u.state.wrap!==2?p:(u.state.gzhead=U,l):p},n.deflate=function(u,U){var F,k,x,B;if(!u||!u.state||5<U||U<0)return u?ae(u,p):p;if(k=u.state,!u.output||!u.input&&u.avail_in!==0||k.status===666&&U!==y)return ae(u,u.avail_out===0?-5:p);if(k.strm=u,F=k.last_flush,k.last_flush=U,k.status===_)if(k.wrap===2)u.adler=0,ne(k,31),ne(k,139),ne(k,8),k.gzhead?(ne(k,(k.gzhead.text?1:0)+(k.gzhead.hcrc?2:0)+(k.gzhead.extra?4:0)+(k.gzhead.name?8:0)+(k.gzhead.comment?16:0)),ne(k,255&k.gzhead.time),ne(k,k.gzhead.time>>8&255),ne(k,k.gzhead.time>>16&255),ne(k,k.gzhead.time>>24&255),ne(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),ne(k,255&k.gzhead.os),k.gzhead.extra&&k.gzhead.extra.length&&(ne(k,255&k.gzhead.extra.length),ne(k,k.gzhead.extra.length>>8&255)),k.gzhead.hcrc&&(u.adler=d(u.adler,k.pending_buf,k.pending,0)),k.gzindex=0,k.status=69):(ne(k,0),ne(k,0),ne(k,0),ne(k,0),ne(k,0),ne(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),ne(k,3),k.status=z);else{var D=w+(k.w_bits-8<<4)<<8;D|=(2<=k.strategy||k.level<2?0:k.level<6?1:k.level===6?2:3)<<6,k.strstart!==0&&(D|=32),D+=31-D%31,k.status=z,Y(k,D),k.strstart!==0&&(Y(k,u.adler>>>16),Y(k,65535&u.adler)),u.adler=1}if(k.status===69)if(k.gzhead.extra){for(x=k.pending;k.gzindex<(65535&k.gzhead.extra.length)&&(k.pending!==k.pending_buf_size||(k.gzhead.hcrc&&k.pending>x&&(u.adler=d(u.adler,k.pending_buf,k.pending-x,x)),M(u),x=k.pending,k.pending!==k.pending_buf_size));)ne(k,255&k.gzhead.extra[k.gzindex]),k.gzindex++;k.gzhead.hcrc&&k.pending>x&&(u.adler=d(u.adler,k.pending_buf,k.pending-x,x)),k.gzindex===k.gzhead.extra.length&&(k.gzindex=0,k.status=73)}else k.status=73;if(k.status===73)if(k.gzhead.name){x=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>x&&(u.adler=d(u.adler,k.pending_buf,k.pending-x,x)),M(u),x=k.pending,k.pending===k.pending_buf_size)){B=1;break}B=k.gzindex<k.gzhead.name.length?255&k.gzhead.name.charCodeAt(k.gzindex++):0,ne(k,B)}while(B!==0);k.gzhead.hcrc&&k.pending>x&&(u.adler=d(u.adler,k.pending_buf,k.pending-x,x)),B===0&&(k.gzindex=0,k.status=91)}else k.status=91;if(k.status===91)if(k.gzhead.comment){x=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>x&&(u.adler=d(u.adler,k.pending_buf,k.pending-x,x)),M(u),x=k.pending,k.pending===k.pending_buf_size)){B=1;break}B=k.gzindex<k.gzhead.comment.length?255&k.gzhead.comment.charCodeAt(k.gzindex++):0,ne(k,B)}while(B!==0);k.gzhead.hcrc&&k.pending>x&&(u.adler=d(u.adler,k.pending_buf,k.pending-x,x)),B===0&&(k.status=103)}else k.status=103;if(k.status===103&&(k.gzhead.hcrc?(k.pending+2>k.pending_buf_size&&M(u),k.pending+2<=k.pending_buf_size&&(ne(k,255&u.adler),ne(k,u.adler>>8&255),u.adler=0,k.status=z)):k.status=z),k.pending!==0){if(M(u),u.avail_out===0)return k.last_flush=-1,l}else if(u.avail_in===0&&V(U)<=V(F)&&U!==y)return ae(u,-5);if(k.status===666&&u.avail_in!==0)return ae(u,-5);if(u.avail_in!==0||k.lookahead!==0||U!==h&&k.status!==666){var $=k.strategy===2?(function(A,G){for(var J;;){if(A.lookahead===0&&(ve(A),A.lookahead===0)){if(G===h)return g;break}if(A.match_length=0,J=o._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,J&&(I(A,!1),A.strm.avail_out===0))return g}return A.insert=0,G===y?(I(A,!0),A.strm.avail_out===0?ee:W):A.last_lit&&(I(A,!1),A.strm.avail_out===0)?g:H})(k,U):k.strategy===3?(function(A,G){for(var J,Z,re,he,de=A.window;;){if(A.lookahead<=q){if(ve(A),A.lookahead<=q&&G===h)return g;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=P&&0<A.strstart&&(Z=de[re=A.strstart-1])===de[++re]&&Z===de[++re]&&Z===de[++re]){he=A.strstart+q;do;while(Z===de[++re]&&Z===de[++re]&&Z===de[++re]&&Z===de[++re]&&Z===de[++re]&&Z===de[++re]&&Z===de[++re]&&Z===de[++re]&&re<he);A.match_length=q-(he-re),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=P?(J=o._tr_tally(A,1,A.match_length-P),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(J=o._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),J&&(I(A,!1),A.strm.avail_out===0))return g}return A.insert=0,G===y?(I(A,!0),A.strm.avail_out===0?ee:W):A.last_lit&&(I(A,!1),A.strm.avail_out===0)?g:H})(k,U):s[k.level].func(k,U);if($!==ee&&$!==W||(k.status=666),$===g||$===ee)return u.avail_out===0&&(k.last_flush=-1),l;if($===H&&(U===1?o._tr_align(k):U!==5&&(o._tr_stored_block(k,0,0,!1),U===3&&(se(k.head),k.lookahead===0&&(k.strstart=0,k.block_start=0,k.insert=0))),M(u),u.avail_out===0))return k.last_flush=-1,l}return U!==y?l:k.wrap<=0?1:(k.wrap===2?(ne(k,255&u.adler),ne(k,u.adler>>8&255),ne(k,u.adler>>16&255),ne(k,u.adler>>24&255),ne(k,255&u.total_in),ne(k,u.total_in>>8&255),ne(k,u.total_in>>16&255),ne(k,u.total_in>>24&255)):(Y(k,u.adler>>>16),Y(k,65535&u.adler)),M(u),0<k.wrap&&(k.wrap=-k.wrap),k.pending!==0?l:1)},n.deflateEnd=function(u){var U;return u&&u.state?(U=u.state.status)!==_&&U!==69&&U!==73&&U!==91&&U!==103&&U!==z&&U!==666?ae(u,p):(u.state=null,U===z?ae(u,-3):l):p},n.deflateSetDictionary=function(u,U){var F,k,x,B,D,$,A,G,J=U.length;if(!u||!u.state||(B=(F=u.state).wrap)===2||B===1&&F.status!==_||F.lookahead)return p;for(B===1&&(u.adler=c(u.adler,U,J,0)),F.wrap=0,J>=F.w_size&&(B===0&&(se(F.head),F.strstart=0,F.block_start=0,F.insert=0),G=new a.Buf8(F.w_size),a.arraySet(G,U,J-F.w_size,F.w_size,0),U=G,J=F.w_size),D=u.avail_in,$=u.next_in,A=u.input,u.avail_in=J,u.next_in=0,u.input=U,ve(F);F.lookahead>=P;){for(k=F.strstart,x=F.lookahead-(P-1);F.ins_h=(F.ins_h<<F.hash_shift^F.window[k+P-1])&F.hash_mask,F.prev[k&F.w_mask]=F.head[F.ins_h],F.head[F.ins_h]=k,k++,--x;);F.strstart=k,F.lookahead=P-1,ve(F)}return F.strstart+=F.lookahead,F.block_start=F.strstart,F.insert=F.lookahead,F.lookahead=0,F.match_length=F.prev_length=P-1,F.match_available=0,u.next_in=$,u.input=A,u.avail_in=D,F.wrap=B,l},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,n){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,n){r.exports=function(s,a){var o,c,d,f,h,y,l,p,m,v,b,w,T,S,E,O,R,L,P,q,Q,_,z,g,H;o=s.state,c=s.next_in,g=s.input,d=c+(s.avail_in-5),f=s.next_out,H=s.output,h=f-(a-s.avail_out),y=f+(s.avail_out-257),l=o.dmax,p=o.wsize,m=o.whave,v=o.wnext,b=o.window,w=o.hold,T=o.bits,S=o.lencode,E=o.distcode,O=(1<<o.lenbits)-1,R=(1<<o.distbits)-1;e:do{T<15&&(w+=g[c++]<<T,T+=8,w+=g[c++]<<T,T+=8),L=S[w&O];t:for(;;){if(w>>>=P=L>>>24,T-=P,(P=L>>>16&255)===0)H[f++]=65535&L;else{if(!(16&P)){if((64&P)==0){L=S[(65535&L)+(w&(1<<P)-1)];continue t}if(32&P){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}q=65535&L,(P&=15)&&(T<P&&(w+=g[c++]<<T,T+=8),q+=w&(1<<P)-1,w>>>=P,T-=P),T<15&&(w+=g[c++]<<T,T+=8,w+=g[c++]<<T,T+=8),L=E[w&R];i:for(;;){if(w>>>=P=L>>>24,T-=P,!(16&(P=L>>>16&255))){if((64&P)==0){L=E[(65535&L)+(w&(1<<P)-1)];continue i}s.msg="invalid distance code",o.mode=30;break e}if(Q=65535&L,T<(P&=15)&&(w+=g[c++]<<T,(T+=8)<P&&(w+=g[c++]<<T,T+=8)),l<(Q+=w&(1<<P)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(w>>>=P,T-=P,(P=f-h)<Q){if(m<(P=Q-P)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(z=b,(_=0)===v){if(_+=p-P,P<q){for(q-=P;H[f++]=b[_++],--P;);_=f-Q,z=H}}else if(v<P){if(_+=p+v-P,(P-=v)<q){for(q-=P;H[f++]=b[_++],--P;);if(_=0,v<q){for(q-=P=v;H[f++]=b[_++],--P;);_=f-Q,z=H}}}else if(_+=v-P,P<q){for(q-=P;H[f++]=b[_++],--P;);_=f-Q,z=H}for(;2<q;)H[f++]=z[_++],H[f++]=z[_++],H[f++]=z[_++],q-=3;q&&(H[f++]=z[_++],1<q&&(H[f++]=z[_++]))}else{for(_=f-Q;H[f++]=H[_++],H[f++]=H[_++],H[f++]=H[_++],2<(q-=3););q&&(H[f++]=H[_++],1<q&&(H[f++]=H[_++]))}break}}break}}while(c<d&&f<y);c-=q=T>>3,w&=(1<<(T-=q<<3))-1,s.next_in=c,s.next_out=f,s.avail_in=c<d?d-c+5:5-(c-d),s.avail_out=f<y?y-f+257:257-(f-y),o.hold=w,o.bits=T}},{}],49:[function(i,r,n){var s=i("../utils/common"),a=i("./adler32"),o=i("./crc32"),c=i("./inffast"),d=i("./inftrees"),f=1,h=2,y=0,l=-2,p=1,m=852,v=592;function b(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(_){var z;return _&&_.state?(z=_.state,_.total_in=_.total_out=z.total=0,_.msg="",z.wrap&&(_.adler=1&z.wrap),z.mode=p,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(m),z.distcode=z.distdyn=new s.Buf32(v),z.sane=1,z.back=-1,y):l}function S(_){var z;return _&&_.state?((z=_.state).wsize=0,z.whave=0,z.wnext=0,T(_)):l}function E(_,z){var g,H;return _&&_.state?(H=_.state,z<0?(g=0,z=-z):(g=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?l:(H.window!==null&&H.wbits!==z&&(H.window=null),H.wrap=g,H.wbits=z,S(_))):l}function O(_,z){var g,H;return _?(H=new w,(_.state=H).window=null,(g=E(_,z))!==y&&(_.state=null),g):l}var R,L,P=!0;function q(_){if(P){var z;for(R=new s.Buf32(512),L=new s.Buf32(32),z=0;z<144;)_.lens[z++]=8;for(;z<256;)_.lens[z++]=9;for(;z<280;)_.lens[z++]=7;for(;z<288;)_.lens[z++]=8;for(d(f,_.lens,0,288,R,0,_.work,{bits:9}),z=0;z<32;)_.lens[z++]=5;d(h,_.lens,0,32,L,0,_.work,{bits:5}),P=!1}_.lencode=R,_.lenbits=9,_.distcode=L,_.distbits=5}function Q(_,z,g,H){var ee,W=_.state;return W.window===null&&(W.wsize=1<<W.wbits,W.wnext=0,W.whave=0,W.window=new s.Buf8(W.wsize)),H>=W.wsize?(s.arraySet(W.window,z,g-W.wsize,W.wsize,0),W.wnext=0,W.whave=W.wsize):(H<(ee=W.wsize-W.wnext)&&(ee=H),s.arraySet(W.window,z,g-H,ee,W.wnext),(H-=ee)?(s.arraySet(W.window,z,g-H,H,0),W.wnext=H,W.whave=W.wsize):(W.wnext+=ee,W.wnext===W.wsize&&(W.wnext=0),W.whave<W.wsize&&(W.whave+=ee))),0}n.inflateReset=S,n.inflateReset2=E,n.inflateResetKeep=T,n.inflateInit=function(_){return O(_,15)},n.inflateInit2=O,n.inflate=function(_,z){var g,H,ee,W,ae,V,se,M,I,ne,Y,K,ve,Te,le,fe,_e,be,Ve,Le,u,U,F,k,x=0,B=new s.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return l;(g=_.state).mode===12&&(g.mode=13),ae=_.next_out,ee=_.output,se=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,M=g.hold,I=g.bits,ne=V,Y=se,U=y;e:for(;;)switch(g.mode){case p:if(g.wrap===0){g.mode=13;break}for(;I<16;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(2&g.wrap&&M===35615){B[g.check=0]=255&M,B[1]=M>>>8&255,g.check=o(g.check,B,2,0),I=M=0,g.mode=2;break}if(g.flags=0,g.head&&(g.head.done=!1),!(1&g.wrap)||(((255&M)<<8)+(M>>8))%31){_.msg="incorrect header check",g.mode=30;break}if((15&M)!=8){_.msg="unknown compression method",g.mode=30;break}if(I-=4,u=8+(15&(M>>>=4)),g.wbits===0)g.wbits=u;else if(u>g.wbits){_.msg="invalid window size",g.mode=30;break}g.dmax=1<<u,_.adler=g.check=1,g.mode=512&M?10:12,I=M=0;break;case 2:for(;I<16;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(g.flags=M,(255&g.flags)!=8){_.msg="unknown compression method",g.mode=30;break}if(57344&g.flags){_.msg="unknown header flags set",g.mode=30;break}g.head&&(g.head.text=M>>8&1),512&g.flags&&(B[0]=255&M,B[1]=M>>>8&255,g.check=o(g.check,B,2,0)),I=M=0,g.mode=3;case 3:for(;I<32;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}g.head&&(g.head.time=M),512&g.flags&&(B[0]=255&M,B[1]=M>>>8&255,B[2]=M>>>16&255,B[3]=M>>>24&255,g.check=o(g.check,B,4,0)),I=M=0,g.mode=4;case 4:for(;I<16;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}g.head&&(g.head.xflags=255&M,g.head.os=M>>8),512&g.flags&&(B[0]=255&M,B[1]=M>>>8&255,g.check=o(g.check,B,2,0)),I=M=0,g.mode=5;case 5:if(1024&g.flags){for(;I<16;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}g.length=M,g.head&&(g.head.extra_len=M),512&g.flags&&(B[0]=255&M,B[1]=M>>>8&255,g.check=o(g.check,B,2,0)),I=M=0}else g.head&&(g.head.extra=null);g.mode=6;case 6:if(1024&g.flags&&(V<(K=g.length)&&(K=V),K&&(g.head&&(u=g.head.extra_len-g.length,g.head.extra||(g.head.extra=new Array(g.head.extra_len)),s.arraySet(g.head.extra,H,W,K,u)),512&g.flags&&(g.check=o(g.check,H,K,W)),V-=K,W+=K,g.length-=K),g.length))break e;g.length=0,g.mode=7;case 7:if(2048&g.flags){if(V===0)break e;for(K=0;u=H[W+K++],g.head&&u&&g.length<65536&&(g.head.name+=String.fromCharCode(u)),u&&K<V;);if(512&g.flags&&(g.check=o(g.check,H,K,W)),V-=K,W+=K,u)break e}else g.head&&(g.head.name=null);g.length=0,g.mode=8;case 8:if(4096&g.flags){if(V===0)break e;for(K=0;u=H[W+K++],g.head&&u&&g.length<65536&&(g.head.comment+=String.fromCharCode(u)),u&&K<V;);if(512&g.flags&&(g.check=o(g.check,H,K,W)),V-=K,W+=K,u)break e}else g.head&&(g.head.comment=null);g.mode=9;case 9:if(512&g.flags){for(;I<16;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(M!==(65535&g.check)){_.msg="header crc mismatch",g.mode=30;break}I=M=0}g.head&&(g.head.hcrc=g.flags>>9&1,g.head.done=!0),_.adler=g.check=0,g.mode=12;break;case 10:for(;I<32;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}_.adler=g.check=b(M),I=M=0,g.mode=11;case 11:if(g.havedict===0)return _.next_out=ae,_.avail_out=se,_.next_in=W,_.avail_in=V,g.hold=M,g.bits=I,2;_.adler=g.check=1,g.mode=12;case 12:if(z===5||z===6)break e;case 13:if(g.last){M>>>=7&I,I-=7&I,g.mode=27;break}for(;I<3;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}switch(g.last=1&M,I-=1,3&(M>>>=1)){case 0:g.mode=14;break;case 1:if(q(g),g.mode=20,z!==6)break;M>>>=2,I-=2;break e;case 2:g.mode=17;break;case 3:_.msg="invalid block type",g.mode=30}M>>>=2,I-=2;break;case 14:for(M>>>=7&I,I-=7&I;I<32;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if((65535&M)!=(M>>>16^65535)){_.msg="invalid stored block lengths",g.mode=30;break}if(g.length=65535&M,I=M=0,g.mode=15,z===6)break e;case 15:g.mode=16;case 16:if(K=g.length){if(V<K&&(K=V),se<K&&(K=se),K===0)break e;s.arraySet(ee,H,W,K,ae),V-=K,W+=K,se-=K,ae+=K,g.length-=K;break}g.mode=12;break;case 17:for(;I<14;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(g.nlen=257+(31&M),M>>>=5,I-=5,g.ndist=1+(31&M),M>>>=5,I-=5,g.ncode=4+(15&M),M>>>=4,I-=4,286<g.nlen||30<g.ndist){_.msg="too many length or distance symbols",g.mode=30;break}g.have=0,g.mode=18;case 18:for(;g.have<g.ncode;){for(;I<3;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}g.lens[D[g.have++]]=7&M,M>>>=3,I-=3}for(;g.have<19;)g.lens[D[g.have++]]=0;if(g.lencode=g.lendyn,g.lenbits=7,F={bits:g.lenbits},U=d(0,g.lens,0,19,g.lencode,0,g.work,F),g.lenbits=F.bits,U){_.msg="invalid code lengths set",g.mode=30;break}g.have=0,g.mode=19;case 19:for(;g.have<g.nlen+g.ndist;){for(;fe=(x=g.lencode[M&(1<<g.lenbits)-1])>>>16&255,_e=65535&x,!((le=x>>>24)<=I);){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(_e<16)M>>>=le,I-=le,g.lens[g.have++]=_e;else{if(_e===16){for(k=le+2;I<k;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(M>>>=le,I-=le,g.have===0){_.msg="invalid bit length repeat",g.mode=30;break}u=g.lens[g.have-1],K=3+(3&M),M>>>=2,I-=2}else if(_e===17){for(k=le+3;I<k;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}I-=le,u=0,K=3+(7&(M>>>=le)),M>>>=3,I-=3}else{for(k=le+7;I<k;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}I-=le,u=0,K=11+(127&(M>>>=le)),M>>>=7,I-=7}if(g.have+K>g.nlen+g.ndist){_.msg="invalid bit length repeat",g.mode=30;break}for(;K--;)g.lens[g.have++]=u}}if(g.mode===30)break;if(g.lens[256]===0){_.msg="invalid code -- missing end-of-block",g.mode=30;break}if(g.lenbits=9,F={bits:g.lenbits},U=d(f,g.lens,0,g.nlen,g.lencode,0,g.work,F),g.lenbits=F.bits,U){_.msg="invalid literal/lengths set",g.mode=30;break}if(g.distbits=6,g.distcode=g.distdyn,F={bits:g.distbits},U=d(h,g.lens,g.nlen,g.ndist,g.distcode,0,g.work,F),g.distbits=F.bits,U){_.msg="invalid distances set",g.mode=30;break}if(g.mode=20,z===6)break e;case 20:g.mode=21;case 21:if(6<=V&&258<=se){_.next_out=ae,_.avail_out=se,_.next_in=W,_.avail_in=V,g.hold=M,g.bits=I,c(_,Y),ae=_.next_out,ee=_.output,se=_.avail_out,W=_.next_in,H=_.input,V=_.avail_in,M=g.hold,I=g.bits,g.mode===12&&(g.back=-1);break}for(g.back=0;fe=(x=g.lencode[M&(1<<g.lenbits)-1])>>>16&255,_e=65535&x,!((le=x>>>24)<=I);){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(fe&&(240&fe)==0){for(be=le,Ve=fe,Le=_e;fe=(x=g.lencode[Le+((M&(1<<be+Ve)-1)>>be)])>>>16&255,_e=65535&x,!(be+(le=x>>>24)<=I);){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}M>>>=be,I-=be,g.back+=be}if(M>>>=le,I-=le,g.back+=le,g.length=_e,fe===0){g.mode=26;break}if(32&fe){g.back=-1,g.mode=12;break}if(64&fe){_.msg="invalid literal/length code",g.mode=30;break}g.extra=15&fe,g.mode=22;case 22:if(g.extra){for(k=g.extra;I<k;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}g.length+=M&(1<<g.extra)-1,M>>>=g.extra,I-=g.extra,g.back+=g.extra}g.was=g.length,g.mode=23;case 23:for(;fe=(x=g.distcode[M&(1<<g.distbits)-1])>>>16&255,_e=65535&x,!((le=x>>>24)<=I);){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if((240&fe)==0){for(be=le,Ve=fe,Le=_e;fe=(x=g.distcode[Le+((M&(1<<be+Ve)-1)>>be)])>>>16&255,_e=65535&x,!(be+(le=x>>>24)<=I);){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}M>>>=be,I-=be,g.back+=be}if(M>>>=le,I-=le,g.back+=le,64&fe){_.msg="invalid distance code",g.mode=30;break}g.offset=_e,g.extra=15&fe,g.mode=24;case 24:if(g.extra){for(k=g.extra;I<k;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}g.offset+=M&(1<<g.extra)-1,M>>>=g.extra,I-=g.extra,g.back+=g.extra}if(g.offset>g.dmax){_.msg="invalid distance too far back",g.mode=30;break}g.mode=25;case 25:if(se===0)break e;if(K=Y-se,g.offset>K){if((K=g.offset-K)>g.whave&&g.sane){_.msg="invalid distance too far back",g.mode=30;break}ve=K>g.wnext?(K-=g.wnext,g.wsize-K):g.wnext-K,K>g.length&&(K=g.length),Te=g.window}else Te=ee,ve=ae-g.offset,K=g.length;for(se<K&&(K=se),se-=K,g.length-=K;ee[ae++]=Te[ve++],--K;);g.length===0&&(g.mode=21);break;case 26:if(se===0)break e;ee[ae++]=g.length,se--,g.mode=21;break;case 27:if(g.wrap){for(;I<32;){if(V===0)break e;V--,M|=H[W++]<<I,I+=8}if(Y-=se,_.total_out+=Y,g.total+=Y,Y&&(_.adler=g.check=g.flags?o(g.check,ee,Y,ae-Y):a(g.check,ee,Y,ae-Y)),Y=se,(g.flags?M:b(M))!==g.check){_.msg="incorrect data check",g.mode=30;break}I=M=0}g.mode=28;case 28:if(g.wrap&&g.flags){for(;I<32;){if(V===0)break e;V--,M+=H[W++]<<I,I+=8}if(M!==(4294967295&g.total)){_.msg="incorrect length check",g.mode=30;break}I=M=0}g.mode=29;case 29:U=1;break e;case 30:U=-3;break e;case 31:return-4;case 32:default:return l}return _.next_out=ae,_.avail_out=se,_.next_in=W,_.avail_in=V,g.hold=M,g.bits=I,(g.wsize||Y!==_.avail_out&&g.mode<30&&(g.mode<27||z!==4))&&Q(_,_.output,_.next_out,Y-_.avail_out)?(g.mode=31,-4):(ne-=_.avail_in,Y-=_.avail_out,_.total_in+=ne,_.total_out+=Y,g.total+=Y,g.wrap&&Y&&(_.adler=g.check=g.flags?o(g.check,ee,Y,_.next_out-Y):a(g.check,ee,Y,_.next_out-Y)),_.data_type=g.bits+(g.last?64:0)+(g.mode===12?128:0)+(g.mode===20||g.mode===15?256:0),(ne==0&&Y===0||z===4)&&U===y&&(U=-5),U)},n.inflateEnd=function(_){if(!_||!_.state)return l;var z=_.state;return z.window&&(z.window=null),_.state=null,y},n.inflateGetHeader=function(_,z){var g;return _&&_.state?(2&(g=_.state).wrap)==0?l:((g.head=z).done=!1,y):l},n.inflateSetDictionary=function(_,z){var g,H=z.length;return _&&_.state?(g=_.state).wrap!==0&&g.mode!==11?l:g.mode===11&&a(1,z,H,0)!==g.check?-3:Q(_,z,H,H)?(g.mode=31,-4):(g.havedict=1,y):l},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,n){var s=i("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(f,h,y,l,p,m,v,b){var w,T,S,E,O,R,L,P,q,Q=b.bits,_=0,z=0,g=0,H=0,ee=0,W=0,ae=0,V=0,se=0,M=0,I=null,ne=0,Y=new s.Buf16(16),K=new s.Buf16(16),ve=null,Te=0;for(_=0;_<=15;_++)Y[_]=0;for(z=0;z<l;z++)Y[h[y+z]]++;for(ee=Q,H=15;1<=H&&Y[H]===0;H--);if(H<ee&&(ee=H),H===0)return p[m++]=20971520,p[m++]=20971520,b.bits=1,0;for(g=1;g<H&&Y[g]===0;g++);for(ee<g&&(ee=g),_=V=1;_<=15;_++)if(V<<=1,(V-=Y[_])<0)return-1;if(0<V&&(f===0||H!==1))return-1;for(K[1]=0,_=1;_<15;_++)K[_+1]=K[_]+Y[_];for(z=0;z<l;z++)h[y+z]!==0&&(v[K[h[y+z]]++]=z);if(R=f===0?(I=ve=v,19):f===1?(I=a,ne-=257,ve=o,Te-=257,256):(I=c,ve=d,-1),_=g,O=m,ae=z=M=0,S=-1,E=(se=1<<(W=ee))-1,f===1&&852<se||f===2&&592<se)return 1;for(;;){for(L=_-ae,q=v[z]<R?(P=0,v[z]):v[z]>R?(P=ve[Te+v[z]],I[ne+v[z]]):(P=96,0),w=1<<_-ae,g=T=1<<W;p[O+(M>>ae)+(T-=w)]=L<<24|P<<16|q|0,T!==0;);for(w=1<<_-1;M&w;)w>>=1;if(w!==0?(M&=w-1,M+=w):M=0,z++,--Y[_]==0){if(_===H)break;_=h[y+v[z]]}if(ee<_&&(M&E)!==S){for(ae===0&&(ae=ee),O+=g,V=1<<(W=_-ae);W+ae<H&&!((V-=Y[W+ae])<=0);)W++,V<<=1;if(se+=1<<W,f===1&&852<se||f===2&&592<se)return 1;p[S=M&E]=ee<<24|W<<16|O-m|0}}return M!==0&&(p[O+M]=_-ae<<24|64<<16|0),b.bits=ee,0}},{"../utils/common":41}],51:[function(i,r,n){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,n){var s=i("../utils/common"),a=0,o=1;function c(x){for(var B=x.length;0<=--B;)x[B]=0}var d=0,f=29,h=256,y=h+1+f,l=30,p=19,m=2*y+1,v=15,b=16,w=7,T=256,S=16,E=17,O=18,R=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(y+2));c(Q);var _=new Array(2*l);c(_);var z=new Array(512);c(z);var g=new Array(256);c(g);var H=new Array(f);c(H);var ee,W,ae,V=new Array(l);function se(x,B,D,$,A){this.static_tree=x,this.extra_bits=B,this.extra_base=D,this.elems=$,this.max_length=A,this.has_stree=x&&x.length}function M(x,B){this.dyn_tree=x,this.max_code=0,this.stat_desc=B}function I(x){return x<256?z[x]:z[256+(x>>>7)]}function ne(x,B){x.pending_buf[x.pending++]=255&B,x.pending_buf[x.pending++]=B>>>8&255}function Y(x,B,D){x.bi_valid>b-D?(x.bi_buf|=B<<x.bi_valid&65535,ne(x,x.bi_buf),x.bi_buf=B>>b-x.bi_valid,x.bi_valid+=D-b):(x.bi_buf|=B<<x.bi_valid&65535,x.bi_valid+=D)}function K(x,B,D){Y(x,D[2*B],D[2*B+1])}function ve(x,B){for(var D=0;D|=1&x,x>>>=1,D<<=1,0<--B;);return D>>>1}function Te(x,B,D){var $,A,G=new Array(v+1),J=0;for($=1;$<=v;$++)G[$]=J=J+D[$-1]<<1;for(A=0;A<=B;A++){var Z=x[2*A+1];Z!==0&&(x[2*A]=ve(G[Z]++,Z))}}function le(x){var B;for(B=0;B<y;B++)x.dyn_ltree[2*B]=0;for(B=0;B<l;B++)x.dyn_dtree[2*B]=0;for(B=0;B<p;B++)x.bl_tree[2*B]=0;x.dyn_ltree[2*T]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function fe(x){8<x.bi_valid?ne(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function _e(x,B,D,$){var A=2*B,G=2*D;return x[A]<x[G]||x[A]===x[G]&&$[B]<=$[D]}function be(x,B,D){for(var $=x.heap[D],A=D<<1;A<=x.heap_len&&(A<x.heap_len&&_e(B,x.heap[A+1],x.heap[A],x.depth)&&A++,!_e(B,$,x.heap[A],x.depth));)x.heap[D]=x.heap[A],D=A,A<<=1;x.heap[D]=$}function Ve(x,B,D){var $,A,G,J,Z=0;if(x.last_lit!==0)for(;$=x.pending_buf[x.d_buf+2*Z]<<8|x.pending_buf[x.d_buf+2*Z+1],A=x.pending_buf[x.l_buf+Z],Z++,$===0?K(x,A,B):(K(x,(G=g[A])+h+1,B),(J=R[G])!==0&&Y(x,A-=H[G],J),K(x,G=I(--$),D),(J=L[G])!==0&&Y(x,$-=V[G],J)),Z<x.last_lit;);K(x,T,B)}function Le(x,B){var D,$,A,G=B.dyn_tree,J=B.stat_desc.static_tree,Z=B.stat_desc.has_stree,re=B.stat_desc.elems,he=-1;for(x.heap_len=0,x.heap_max=m,D=0;D<re;D++)G[2*D]!==0?(x.heap[++x.heap_len]=he=D,x.depth[D]=0):G[2*D+1]=0;for(;x.heap_len<2;)G[2*(A=x.heap[++x.heap_len]=he<2?++he:0)]=1,x.depth[A]=0,x.opt_len--,Z&&(x.static_len-=J[2*A+1]);for(B.max_code=he,D=x.heap_len>>1;1<=D;D--)be(x,G,D);for(A=re;D=x.heap[1],x.heap[1]=x.heap[x.heap_len--],be(x,G,1),$=x.heap[1],x.heap[--x.heap_max]=D,x.heap[--x.heap_max]=$,G[2*A]=G[2*D]+G[2*$],x.depth[A]=(x.depth[D]>=x.depth[$]?x.depth[D]:x.depth[$])+1,G[2*D+1]=G[2*$+1]=A,x.heap[1]=A++,be(x,G,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(de,Re){var Ut,Ge,Nt,ye,si,nr,tt=Re.dyn_tree,rs=Re.max_code,Wd=Re.stat_desc.static_tree,Dd=Re.stat_desc.has_stree,$d=Re.stat_desc.extra_bits,ns=Re.stat_desc.extra_base,Wt=Re.stat_desc.max_length,ai=0;for(ye=0;ye<=v;ye++)de.bl_count[ye]=0;for(tt[2*de.heap[de.heap_max]+1]=0,Ut=de.heap_max+1;Ut<m;Ut++)Wt<(ye=tt[2*tt[2*(Ge=de.heap[Ut])+1]+1]+1)&&(ye=Wt,ai++),tt[2*Ge+1]=ye,rs<Ge||(de.bl_count[ye]++,si=0,ns<=Ge&&(si=$d[Ge-ns]),nr=tt[2*Ge],de.opt_len+=nr*(ye+si),Dd&&(de.static_len+=nr*(Wd[2*Ge+1]+si)));if(ai!==0){do{for(ye=Wt-1;de.bl_count[ye]===0;)ye--;de.bl_count[ye]--,de.bl_count[ye+1]+=2,de.bl_count[Wt]--,ai-=2}while(0<ai);for(ye=Wt;ye!==0;ye--)for(Ge=de.bl_count[ye];Ge!==0;)rs<(Nt=de.heap[--Ut])||(tt[2*Nt+1]!==ye&&(de.opt_len+=(ye-tt[2*Nt+1])*tt[2*Nt],tt[2*Nt+1]=ye),Ge--)}})(x,B),Te(G,he,x.bl_count)}function u(x,B,D){var $,A,G=-1,J=B[1],Z=0,re=7,he=4;for(J===0&&(re=138,he=3),B[2*(D+1)+1]=65535,$=0;$<=D;$++)A=J,J=B[2*($+1)+1],++Z<re&&A===J||(Z<he?x.bl_tree[2*A]+=Z:A!==0?(A!==G&&x.bl_tree[2*A]++,x.bl_tree[2*S]++):Z<=10?x.bl_tree[2*E]++:x.bl_tree[2*O]++,G=A,he=(Z=0)===J?(re=138,3):A===J?(re=6,3):(re=7,4))}function U(x,B,D){var $,A,G=-1,J=B[1],Z=0,re=7,he=4;for(J===0&&(re=138,he=3),$=0;$<=D;$++)if(A=J,J=B[2*($+1)+1],!(++Z<re&&A===J)){if(Z<he)for(;K(x,A,x.bl_tree),--Z!=0;);else A!==0?(A!==G&&(K(x,A,x.bl_tree),Z--),K(x,S,x.bl_tree),Y(x,Z-3,2)):Z<=10?(K(x,E,x.bl_tree),Y(x,Z-3,3)):(K(x,O,x.bl_tree),Y(x,Z-11,7));G=A,he=(Z=0)===J?(re=138,3):A===J?(re=6,3):(re=7,4)}}c(V);var F=!1;function k(x,B,D,$){Y(x,(d<<1)+($?1:0),3),(function(A,G,J,Z){fe(A),ne(A,J),ne(A,~J),s.arraySet(A.pending_buf,A.window,G,J,A.pending),A.pending+=J})(x,B,D)}n._tr_init=function(x){F||((function(){var B,D,$,A,G,J=new Array(v+1);for(A=$=0;A<f-1;A++)for(H[A]=$,B=0;B<1<<R[A];B++)g[$++]=A;for(g[$-1]=A,A=G=0;A<16;A++)for(V[A]=G,B=0;B<1<<L[A];B++)z[G++]=A;for(G>>=7;A<l;A++)for(V[A]=G<<7,B=0;B<1<<L[A]-7;B++)z[256+G++]=A;for(D=0;D<=v;D++)J[D]=0;for(B=0;B<=143;)Q[2*B+1]=8,B++,J[8]++;for(;B<=255;)Q[2*B+1]=9,B++,J[9]++;for(;B<=279;)Q[2*B+1]=7,B++,J[7]++;for(;B<=287;)Q[2*B+1]=8,B++,J[8]++;for(Te(Q,y+1,J),B=0;B<l;B++)_[2*B+1]=5,_[2*B]=ve(B,5);ee=new se(Q,R,h+1,y,v),W=new se(_,L,0,l,v),ae=new se(new Array(0),P,0,p,w)})(),F=!0),x.l_desc=new M(x.dyn_ltree,ee),x.d_desc=new M(x.dyn_dtree,W),x.bl_desc=new M(x.bl_tree,ae),x.bi_buf=0,x.bi_valid=0,le(x)},n._tr_stored_block=k,n._tr_flush_block=function(x,B,D,$){var A,G,J=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(Z){var re,he=4093624447;for(re=0;re<=31;re++,he>>>=1)if(1&he&&Z.dyn_ltree[2*re]!==0)return a;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return o;for(re=32;re<h;re++)if(Z.dyn_ltree[2*re]!==0)return o;return a})(x)),Le(x,x.l_desc),Le(x,x.d_desc),J=(function(Z){var re;for(u(Z,Z.dyn_ltree,Z.l_desc.max_code),u(Z,Z.dyn_dtree,Z.d_desc.max_code),Le(Z,Z.bl_desc),re=p-1;3<=re&&Z.bl_tree[2*q[re]+1]===0;re--);return Z.opt_len+=3*(re+1)+5+5+4,re})(x),A=x.opt_len+3+7>>>3,(G=x.static_len+3+7>>>3)<=A&&(A=G)):A=G=D+5,D+4<=A&&B!==-1?k(x,B,D,$):x.strategy===4||G===A?(Y(x,2+($?1:0),3),Ve(x,Q,_)):(Y(x,4+($?1:0),3),(function(Z,re,he,de){var Re;for(Y(Z,re-257,5),Y(Z,he-1,5),Y(Z,de-4,4),Re=0;Re<de;Re++)Y(Z,Z.bl_tree[2*q[Re]+1],3);U(Z,Z.dyn_ltree,re-1),U(Z,Z.dyn_dtree,he-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,J+1),Ve(x,x.dyn_ltree,x.dyn_dtree)),le(x),$&&fe(x)},n._tr_tally=function(x,B,D){return x.pending_buf[x.d_buf+2*x.last_lit]=B>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&B,x.pending_buf[x.l_buf+x.last_lit]=255&D,x.last_lit++,B===0?x.dyn_ltree[2*D]++:(x.matches++,B--,x.dyn_ltree[2*(g[D]+h+1)]++,x.dyn_dtree[2*I(B)]++),x.last_lit===x.lit_bufsize-1},n._tr_align=function(x){Y(x,2,3),K(x,T,Q),(function(B){B.bi_valid===16?(ne(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,r,n){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,n){(function(s){(function(a,o){if(!a.setImmediate){var c,d,f,h,y=1,l={},p=!1,m=a.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(a);v=v&&v.setTimeout?v:a,c={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){w(S)})}:(function(){if(a.postMessage&&!a.importScripts){var S=!0,E=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=E,S}})()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",T,!1):a.attachEvent("onmessage",T),function(S){a.postMessage(h+S,"*")}):a.MessageChannel?((f=new MessageChannel).port1.onmessage=function(S){w(S.data)},function(S){f.port2.postMessage(S)}):m&&"onreadystatechange"in m.createElement("script")?(d=m.documentElement,function(S){var E=m.createElement("script");E.onreadystatechange=function(){w(S),E.onreadystatechange=null,d.removeChild(E),E=null},d.appendChild(E)}):function(S){setTimeout(w,0,S)},v.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var E=new Array(arguments.length-1),O=0;O<E.length;O++)E[O]=arguments[O+1];var R={callback:S,args:E};return l[y]=R,c(y),y++},v.clearImmediate=b}function b(S){delete l[S]}function w(S){if(p)setTimeout(w,0,S);else{var E=l[S];if(E){p=!0;try{(function(O){var R=O.callback,L=O.args;switch(L.length){case 0:R();break;case 1:R(L[0]);break;case 2:R(L[0],L[1]);break;case 3:R(L[0],L[1],L[2]);break;default:R.apply(o,L)}})(E)}finally{b(S),p=!1}}}}function T(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(h)===0&&w(+S.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(yi)),yi.exports}var _a=xa();const ka=wa(_a);/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function N(t){if(!t)throw new Error("Assertion failed.")}const Ta=t=>{const e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Ne=t=>t&&t[t.length-1],at=t=>t>=0&&t<2**32,X=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},Ke=t=>{const e=X(t);return(e&1)===0?-(e>>1):e+1>>1},ze=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),Vt=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),We=new TextEncoder,Gt={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Xt={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Zt={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Sa=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,wi=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t);class Cr{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const i=new Promise(n=>{let s=!1;e=()=>{s||(n(),this.pending--,s=!0)}}),r=this.currentPromise;return this.currentPromise=i,this.pending++,await r,e}}const Br=(t,e,i)=>{let r=0,n=t.length-1,s=-1;for(;r<=n;){const a=r+(n-r+1)/2|0;i(t[a])<=e?(s=a,r=a+1):n=a-1}return s},Ar=()=>{let t,e;return{promise:new Promise((r,n)=>{t=r,e=n}),resolve:t,reject:e}},pt=t=>{throw new Error(`Unexpected value: ${t}`)},Ea=(t,e,i)=>{const r=t.getUint8(e),n=t.getUint8(e+1),s=t.getUint8(e+2);return r<<16|n<<8|s},Ca=(t,e,i,r)=>{i=i>>>0,i=i&16777215,t.setUint8(e,i>>>16&255),t.setUint8(e+1,i>>>8&255),t.setUint8(e+2,i&255)},Pr=(t,e,i)=>Math.max(e,Math.min(i,t)),Ba=(t,e,i)=>t+(e-t)*i,Aa="und",Ir=(t,e)=>Math.round(t/e)*e,Rr=(t,e)=>Math.floor(t*e)/e,Pa=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},Ia=/^[a-z]{3}$/,Ra=t=>Ia.test(t),gt=1e6*(1+Number.EPSILON),Ma=(t,e)=>{const i=t<0?-1:1;t=Math.abs(t);let r=0,n=1,s=1,a=0,o=t;for(;;){const c=Math.floor(o),d=c*s+r,f=c*a+n;if(f>e)return{num:i*s,den:a};if(r=s,n=a,s=d,a=f,o=1/(o-c),!isFinite(o))break}return{num:i*s,den:a}};class za{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let xi=null;const Mr=()=>xi!==null?xi:xi=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox");let _i=null;const Fa=()=>_i!==null?_i:_i=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));let ki=null;const Oa=()=>{if(ki!==null)return ki;if(typeof navigator>"u")return null;const t=/\bChrome\/(\d+)/.exec(navigator.userAgent);return t?ki=Number(t[1]):null},zr=function*(t){for(const e in t){const i=t[e];i!==void 0&&(yield{key:e,value:i})}},Ha=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},La=(t,e)=>{let i=-1,r=1/0;for(let n=0;n<t.length;n++){const s=e(t[n]);s<r&&(r=s,i=n)}return i},Fr=t=>{N(Number.isInteger(t.num)),N(Number.isInteger(t.den)),N(t.den!==0);let e=Math.abs(t.num),i=Math.abs(t.den);for(;i!==0;){const n=e%i;e=i,i=n}const r=e||1;return{num:t.num/r,den:t.den/r}},Ti=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)},Ua=t=>new Promise(e=>setTimeout(e,t)),Or=t=>Array.isArray(t)?t:[t];class Si{constructor(){this._listeners=new Map}on(e,i,r){this._listeners.has(e)||this._listeners.set(e,new Set);const n={fn:i,once:r?.once??!1};return this._listeners.get(e).add(n),()=>{this._listeners.get(e)?.delete(n)}}_emit(...e){const[i,r]=e,n=this._listeners.get(i);if(n)for(const s of n){try{s.fn(r)}catch(a){console.error(a)}s.once&&n.delete(s)}}}const Na=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var De;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(De||(De={}));class pe{constructor(){}static get level(){return pe._level}static set level(e){if(e!==De.Silent&&e!==De.Errors&&e!==De.Warnings&&e!==De.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");pe._level=e}static get _emitter(){return pe._emitterInstance??=new Si}static on(e,i,r){return pe._emitter.on(e,i,r)}static _error(...e){pe._emitter._emit("error",e),pe._level>=De.Errors&&console.error(...e)}static _warn(...e){pe._emitter._emit("warn",e),pe._level>=De.Warnings&&console.warn(...e)}static _info(...e){pe._emitter._emit("info",e),pe._level>=De.Info&&console.info(...e)}}pe._level=De.Info,pe._emitterInstance=null;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Hr{constructor(e,i){if(this.data=e,this.mimeType=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof i!="string")throw new TypeError("mimeType must be a string.")}}class Wa{constructor(e,i,r,n){if(this.data=e,this.mimeType=i,this.name=r,this.description=n,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!==void 0&&typeof i!="string")throw new TypeError("mimeType, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("name, when provided, must be a string.");if(n!==void 0&&typeof n!="string")throw new TypeError("description, when provided, must be a string.")}}const Da=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof Hr)&&!(e instanceof Wa)&&!Na(e))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}},$a=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class xe{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),i=this.bytes[e]??0,r=7-(this.pos&7),n=(i&1<<r)>>r;return this.pos++,n}readBits(e){if(e===1)return this.readBit();let i=0;for(let r=0;r<e;r++)i<<=1,i|=this.readBit();return i}writeBits(e,i){const r=this.pos+e;for(let n=this.pos;n<r;n++){const s=Math.floor(n/8);let a=this.bytes[s];const o=7-(n&7);a&=~(1<<o),a|=(i&1<<r-n-1)>>r-n-1<<o,this.bytes[s]=a}this.pos=r}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,i=this.bytes[e]??0;return this.pos+=8,i}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new xe(this.bytes);return e.pos=this.pos,e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Lr=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Ur=[-1,1,2,3,4,5,6,8],ja=t=>{let e=Lr.indexOf(t.sampleRate),i=null;e===-1&&(e=15,i=t.sampleRate);const r=Ur.indexOf(t.numberOfChannels);if(r===-1)throw new TypeError(`Unsupported number of channels: ${t.numberOfChannels}`);let n=13;t.objectType>=32&&(n+=6),e===15&&(n+=24);const s=Math.ceil(n/8),a=new Uint8Array(s),o=new xe(a);return t.objectType<32?o.writeBits(5,t.objectType):(o.writeBits(5,31),o.writeBits(6,t.objectType-32)),o.writeBits(4,e),e===15&&o.writeBits(24,i),o.writeBits(4,r),a};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Qe=["avc","hevc","vp9","av1","vp8","prores"],dt=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Ei=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],Kt=[...Ei,...dt],Et=["webvtt"],Qt=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Nr=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],Wr=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Dr=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Ct=["ap4x","ap4h","apch","apcn","apcs","apco"],Ci=["dtsc","dtsh","dtsl","dtse"],qa=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Va=(t,e,i,r,n)=>{if(t==="avc"){const a=Math.ceil(e/16)*Math.ceil(i/16),o=Qt.find(y=>a<=y.maxMacroblocks&&r<=y.maxBitrate)??Ne(Qt),c=o?o.level:0,d="64".padStart(2,"0"),f="00",h=c.toString(16).padStart(2,"0");return`avc1.${d}${f}${h}`}else if(t==="hevc"){const c=e*i,d=Nr.find(h=>c<=h.maxPictureSize&&r<=h.maxBitrate)??Ne(Nr);return`hev1.1.6.${d.tier}${d.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){const a=e*i;return`vp09.00.${(Wr.find(d=>a<=d.maxPictureSize&&r<=d.maxBitrate)??Ne(Wr)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){const a=e*i,o=Dr.find(f=>a<=f.maxPictureSize&&r<=f.maxBitrate)??Ne(Dr);return`av01.0.${o.level.toString().padStart(2,"0")}${o.tier}.08`}else if(t==="prores"){const a=Math.pow(e*i/2073600,.95),o=qa.filter(f=>f.alpha===n);let c=o[0].fourCc,d=1/0;for(const{fourCc:f,bitrate:h}of o){const y=Math.abs(h*a-r);y<d&&(d=y,c=f)}return c}else pt(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)},Ga=t=>{const e=t.split("."),n=(1<<7)+1,s=Number(e[1]),a=e[2],o=Number(a.slice(0,-1)),c=(s<<5)+o,d=a.slice(-1)==="H"?1:0,h=Number(e[3])===8?0:1,y=0,l=e[4]?Number(e[4]):0,p=e[5]?Number(e[5][0]):1,m=e[5]?Number(e[5][1]):1,v=e[5]?Number(e[5][2]):0,b=(d<<7)+(h<<6)+(y<<5)+(l<<4)+(p<<3)+(m<<2)+v;return[n,c,b,0]},$r=/^pcm-([usf])(\d+)(be)?$/,vt=t=>{if(N(dt.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=$r.exec(t);N(e);let i;e[1]==="u"?i="unsigned":e[1]==="s"?i="signed":i="float";const r=Number(e[2])/8,n=e[3]!=="be",s=t==="pcm-u8"?2**7:0;return{dataType:i,sampleSize:r,littleEndian:n,silentValue:s}},Bi=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Ct.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Ci.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":$r.test(t)?t:t==="webvtt"?"webvtt":null,Xa=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{},Za=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Ct],Ka=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Qa=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Ya=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Ja=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,jr=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Za.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!wi(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){const{colorSpace:i}=t.decoderConfig;if(typeof i!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const r=Object.keys(Gt);if(i.primaries!=null&&!r.includes(i.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${r.join(", ")}.`);const n=Object.keys(Xt);if(i.transfer!=null&&!n.includes(i.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${n.join(", ")}.`);const s=Object.keys(Zt);if(i.matrix!=null&&!s.includes(i.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);if(i.fullRange!=null&&typeof i.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!Ka.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!Qa.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!Ya.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!Ja.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Ct.some(i=>t.decoderConfig.codec.startsWith(i))&&!Ct.some(i=>t.decoderConfig.codec===i))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Ct.join(", ")}.`);if(e!==null&&Bi(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},eo=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],qr=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!eo.some(i=>t.decoderConfig.codec.startsWith(i)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!wi(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Ci.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Ci.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!dt.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${dt.join(", ")}).`);if(e!==null&&Bi(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},to=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const io=[48e3,44100,32e3],ro=[24e3,22050,16e3];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Ye;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(Ye||(Ye={}));var Ae;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(Ae||(Ae={}));const Bt=function*(t){let e=0,i=-1;for(;e<t.length-2;){const r=t.indexOf(0,e);if(r===-1||r>=t.length-2)break;e=r;let n=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?n=4:t[e+1]===0&&t[e+2]===1&&(n=3),n===0){e++;continue}i!==-1&&e>i&&(yield{offset:i,length:e-i}),i=e+n,e=i}i!==-1&&i<t.length&&(yield{offset:i,length:t.length-i})},Vr=function*(t,e){let i=0;const r=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;i+e<=t.length;){let n;e===1?n=r.getUint8(i):e===2?n=r.getUint16(i,!1):e===3?n=Ea(r,i):(N(e===4),n=r.getUint32(i,!1)),i+=e,yield{offset:i,length:n},i+=n}},no=(t,e)=>{if(e.description){const n=(ze(e.description)[4]&3)+1;return Vr(t,n)}else return Bt(t)},Gr=t=>t&31,Yt=t=>{const e=[],i=t.length;for(let r=0;r<i;r++)r+2<i&&t[r]===0&&t[r+1]===0&&t[r+2]===3?(e.push(0,0),r+=2):e.push(t[r]);return new Uint8Array(e)},so=(t,e)=>{const i=t.reduce((s,a)=>s+e+a.byteLength,0),r=new Uint8Array(i);let n=0;for(const s of t){const a=new DataView(r.buffer,r.byteOffset,r.byteLength);switch(e){case 1:a.setUint8(n,s.byteLength);break;case 2:a.setUint16(n,s.byteLength,!1);break;case 3:Ca(a,n,s.byteLength);break;case 4:a.setUint32(n,s.byteLength,!1);break}n+=e,r.set(s,n),n+=s.byteLength}return r},ao=t=>{try{const e=[],i=[],r=[];for(const o of Bt(t)){const c=t.subarray(o.offset,o.offset+o.length),d=Gr(c[0]);d===Ye.SPS?e.push(c):d===Ye.PPS?i.push(c):d===Ye.SPS_EXT&&r.push(c)}if(e.length===0||i.length===0)return null;const n=e[0],s=co(n);N(s!==null);const a=s.profileIdc===100||s.profileIdc===110||s.profileIdc===122||s.profileIdc===144;return{configurationVersion:1,avcProfileIndication:s.profileIdc,profileCompatibility:s.constraintFlags,avcLevelIndication:s.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:i,chromaFormat:a?s.chromaFormatIdc:null,bitDepthLumaMinus8:a?s.bitDepthLumaMinus8:null,bitDepthChromaMinus8:a?s.bitDepthChromaMinus8:null,sequenceParameterSetExt:a?r:null}}catch(e){return pe._error("Error building AVC Decoder Configuration Record:",e),null}},oo=t=>{const e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(const i of t.sequenceParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let n=0;n<r;n++)e.push(i[n])}e.push(t.pictureParameterSets.length);for(const i of t.pictureParameterSets){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let n=0;n<r;n++)e.push(i[n])}if(t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144){N(t.chromaFormat!==null),N(t.bitDepthLumaMinus8!==null),N(t.bitDepthChromaMinus8!==null),N(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(const i of t.sequenceParameterSetExt){const r=i.byteLength;e.push(r>>8),e.push(r&255);for(let n=0;n<r;n++)e.push(i[n])}}return new Uint8Array(e)},Xr={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},co=t=>{try{const e=new xe(Yt(t));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const r=e.readAlignedByte(),n=e.readAlignedByte(),s=e.readAlignedByte();X(e);let a=1,o=0,c=0,d=0;if((r===100||r===110||r===122||r===244||r===44||r===83||r===86||r===118||r===128)&&(a=X(e),a===3&&(d=e.readBits(1)),o=X(e),c=X(e),e.skipBits(1),e.readBits(1))){for(let _=0;_<(a!==3?8:12);_++)if(e.readBits(1)){const g=_<6?16:64;let H=8,ee=8;for(let W=0;W<g;W++){if(ee!==0){const ae=Ke(e);ee=(H+ae+256)%256}H=ee===0?H:ee}}}X(e);const f=X(e);if(f===0)X(e);else if(f===1){e.skipBits(1),Ke(e),Ke(e);const Q=X(e);for(let _=0;_<Q;_++)Ke(e)}X(e),e.skipBits(1);const h=X(e),y=X(e),l=16*(h+1),p=16*(y+1);let m=l,v=p;const b=e.readBits(1);if(b||e.skipBits(1),e.skipBits(1),e.readBits(1)){const Q=X(e),_=X(e),z=X(e),g=X(e);let H,ee;if((d===0?a:0)===0)H=1,ee=2-b;else{const ae=a===3?1:2,V=a===1?2:1;H=ae,ee=V*(2-b)}m-=H*(Q+_),v-=ee*(z+g)}let T=2,S=2,E=2,O=0,R={num:1,den:1},L=null,P=null;if(e.readBits(1)){if(e.readBits(1)){const V=e.readBits(8);if(V===255)R={num:e.readBits(16),den:e.readBits(16)};else{const se=Xr[V];se&&(R=se)}}e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),O=e.readBits(1),e.readBits(1)&&(T=e.readBits(8),S=e.readBits(8),E=e.readBits(8))),e.readBits(1)&&(X(e),X(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const ee=e.readBits(1);ee&&Zr(e);const W=e.readBits(1);W&&Zr(e),(ee||W)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),X(e),X(e),X(e),X(e),L=X(e),P=X(e))}if(L===null){N(P===null);const Q=n&16;if((r===44||r===86||r===100||r===110||r===122||r===244)&&Q)L=0,P=0;else{const _=h+1,z=y+1,g=(2-b)*z,H=Qt.find(W=>W.level>=s)??Ne(Qt),ee=Math.min(Math.floor(H.maxDpbMbs/(_*g)),16);L=ee,P=ee}}return N(P!==null),{profileIdc:r,constraintFlags:n,levelIdc:s,frameMbsOnlyFlag:b,chromaFormatIdc:a,bitDepthLumaMinus8:o,bitDepthChromaMinus8:c,codedWidth:l,codedHeight:p,displayWidth:m,displayHeight:v,pixelAspectRatio:R,colourPrimaries:T,matrixCoefficients:E,transferCharacteristics:S,fullRangeFlag:O,numReorderFrames:L,maxDecFrameBuffering:P}}catch(e){return pe._error("Error parsing AVC SPS:",e),null}},Zr=t=>{const e=X(t);t.skipBits(4),t.skipBits(4);for(let i=0;i<=e;i++)X(t),X(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},lo=(t,e)=>{if(e.description){const n=(ze(e.description)[21]&3)+1;return Vr(t,n)}else return Bt(t)},Ai=t=>t>>1&63,fo=t=>{try{const e=new xe(Yt(t));e.skipBits(16),e.readBits(4);const i=e.readBits(3),r=e.readBits(1),{general_profile_space:n,general_tier_flag:s,general_profile_idc:a,general_profile_compatibility_flags:o,general_constraint_indicator_flags:c,general_level_idc:d}=ho(e,i);X(e);const f=X(e);let h=0;f===3&&(h=e.readBits(1));const y=X(e),l=X(e);let p=y,m=l;if(e.readBits(1)){const _=X(e),z=X(e),g=X(e),H=X(e);let ee=1,W=1;const ae=h===0?f:0;ae===1?(ee=2,W=2):ae===2&&(ee=2,W=1),p-=(_+z)*ee,m-=(g+H)*W}const v=X(e),b=X(e);X(e);const T=e.readBits(1)?0:i;let S=0;for(let _=T;_<=i;_++)X(e),S=X(e),X(e);X(e),X(e),X(e),X(e),X(e),X(e),e.readBits(1)&&e.readBits(1)&&mo(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),X(e),X(e),e.skipBits(1));const E=X(e);if(po(e,E),e.readBits(1)){const _=X(e);for(let z=0;z<_;z++)X(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let O=2,R=2,L=2,P=0,q=0,Q={num:1,den:1};if(e.readBits(1)){const _=vo(e,i);Q=_.pixelAspectRatio,O=_.colourPrimaries,R=_.transferCharacteristics,L=_.matrixCoefficients,P=_.fullRangeFlag,q=_.minSpatialSegmentationIdc}return{displayWidth:p,displayHeight:m,pixelAspectRatio:Q,colourPrimaries:O,transferCharacteristics:R,matrixCoefficients:L,fullRangeFlag:P,maxDecFrameBuffering:S+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:r,generalProfileSpace:n,generalTierFlag:s,generalProfileIdc:a,generalProfileCompatibilityFlags:o,generalConstraintIndicatorFlags:c,generalLevelIdc:d,chromaFormatIdc:f,bitDepthLumaMinus8:v,bitDepthChromaMinus8:b,minSpatialSegmentationIdc:q}}catch(e){return pe._error("Error parsing HEVC SPS:",e),null}},uo=t=>{try{const e=[],i=[],r=[],n=[];for(const d of Bt(t)){const f=t.subarray(d.offset,d.offset+d.length),h=Ai(f[0]);h===Ae.VPS_NUT?e.push(f):h===Ae.SPS_NUT?i.push(f):h===Ae.PPS_NUT?r.push(f):(h===Ae.PREFIX_SEI_NUT||h===Ae.SUFFIX_SEI_NUT)&&n.push(f)}if(i.length===0||r.length===0)return null;const s=fo(i[0]);if(!s)return null;let a=0;if(r.length>0){const d=r[0],f=new xe(Yt(d));f.skipBits(16),X(f),X(f),f.skipBits(1),f.skipBits(1),f.skipBits(3),f.skipBits(1),f.skipBits(1),X(f),X(f),Ke(f),f.skipBits(1),f.skipBits(1),f.readBits(1)&&X(f),Ke(f),Ke(f),f.skipBits(1),f.skipBits(1),f.skipBits(1),f.skipBits(1);const h=f.readBits(1),y=f.readBits(1);!h&&!y?a=0:h&&!y?a=2:!h&&y?a=3:a=0}const o=[...e.length?[{arrayCompleteness:1,nalUnitType:Ae.VPS_NUT,nalUnits:e}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Ae.SPS_NUT,nalUnits:i}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:Ae.PPS_NUT,nalUnits:r}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:Ai(n[0][0]),nalUnits:n}]:[]];return{configurationVersion:1,generalProfileSpace:s.generalProfileSpace,generalTierFlag:s.generalTierFlag,generalProfileIdc:s.generalProfileIdc,generalProfileCompatibilityFlags:s.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:s.generalConstraintIndicatorFlags,generalLevelIdc:s.generalLevelIdc,minSpatialSegmentationIdc:s.minSpatialSegmentationIdc,parallelismType:a,chromaFormatIdc:s.chromaFormatIdc,bitDepthLumaMinus8:s.bitDepthLumaMinus8,bitDepthChromaMinus8:s.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:s.spsMaxSubLayersMinus1+1,temporalIdNested:s.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:o}}catch(e){return pe._error("Error building HEVC Decoder Configuration Record:",e),null}},ho=(t,e)=>{const i=t.readBits(2),r=t.readBits(1),n=t.readBits(5);let s=0;for(let f=0;f<32;f++)s=s<<1|t.readBits(1);const a=new Uint8Array(6);for(let f=0;f<6;f++)a[f]=t.readBits(8);const o=t.readBits(8),c=[],d=[];for(let f=0;f<e;f++)c.push(t.readBits(1)),d.push(t.readBits(1));if(e>0)for(let f=e;f<8;f++)t.skipBits(2);for(let f=0;f<e;f++)c[f]&&t.skipBits(88),d[f]&&t.skipBits(8);return{general_profile_space:i,general_tier_flag:r,general_profile_idc:n,general_profile_compatibility_flags:s,general_constraint_indicator_flags:a,general_level_idc:o}},mo=t=>{for(let e=0;e<4;e++)for(let i=0;i<(e===3?2:6);i++)if(!t.readBits(1))X(t);else{const n=Math.min(64,1<<4+(e<<1));e>1&&Ke(t);for(let s=0;s<n;s++)Ke(t)}},po=(t,e)=>{const i=[];for(let r=0;r<e;r++)i[r]=go(t,r,e,i)},go=(t,e,i,r)=>{let n=0,s=0,a=0;if(e!==0&&(s=t.readBits(1)),s){if(e===i){const c=X(t);a=e-(c+1)}else a=e-1;t.readBits(1),X(t);const o=r[a]??0;for(let c=0;c<=o;c++)t.readBits(1)||t.readBits(1);n=r[a]}else{const o=X(t),c=X(t);for(let d=0;d<o;d++)X(t),t.readBits(1);for(let d=0;d<c;d++)X(t),t.readBits(1);n=o+c}return n},vo=(t,e)=>{let i=2,r=2,n=2,s=0,a=0,o={num:1,den:1};if(t.readBits(1)){const c=t.readBits(8);if(c===255)o={num:t.readBits(16),den:t.readBits(16)};else{const d=Xr[c];d&&(o=d)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),s=t.readBits(1),t.readBits(1)&&(i=t.readBits(8),r=t.readBits(8),n=t.readBits(8))),t.readBits(1)&&(X(t),X(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(X(t),X(t),X(t),X(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&X(t),t.readBits(1)&&bo(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),a=X(t),X(t),X(t),X(t),X(t)),{pixelAspectRatio:o,colourPrimaries:i,transferCharacteristics:r,matrixCoefficients:n,fullRangeFlag:s,minSpatialSegmentationIdc:a}},bo=(t,e,i)=>{let r=!1,n=!1,s=!1;r=t.readBits(1)===1,n=t.readBits(1)===1,(r||n)&&(s=t.readBits(1)===1,s&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),s&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let a=0;a<=i;a++){const o=t.readBits(1)===1;let c=!0;o||(c=t.readBits(1)===1);let d=!1;c?X(t):d=t.readBits(1)===1;let f=1;d||(f=X(t)+1),r&&Kr(t,f,s),n&&Kr(t,f,s)}},Kr=(t,e,i)=>{for(let r=0;r<e;r++)X(t),X(t),i&&(X(t),X(t)),t.readBits(1)},yo=t=>{const e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(const i of t.arrays){e.push((i.arrayCompleteness&1)<<7|0|i.nalUnitType&63),e.push(i.nalUnits.length>>8&255),e.push(i.nalUnits.length&255);for(const r of i.nalUnits){e.push(r.length>>8&255),e.push(r.length&255);for(let n=0;n<r.length;n++)e.push(r[n])}}return new Uint8Array(e)};var Qr;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(Qr||(Qr={}));const wo=function*(t){const e=new xe(t),i=()=>{let r=0;for(let n=0;n<8;n++){const s=e.readAlignedByte();if(r|=(s&127)<<n*7,!(s&128))break;if(n===7&&s&128)return null}return r>=2**32-1?null:r};for(;e.getBitsLeft()>=8;){e.skipBits(1);const r=e.readBits(4),n=e.readBits(1),s=e.readBits(1);e.skipBits(1),n&&e.skipBits(8);let a;if(s){const o=i();if(o===null)return;a=o}else a=Math.floor(e.getBitsLeft()/8);N(e.pos%8===0),yield{type:r,data:t.subarray(e.pos/8,e.pos/8+a)},e.skipBits(a*8)}},xo=t=>{const e=Vt(t),i=e.getUint8(9),r=e.getUint16(10,!0),n=e.getUint32(12,!0),s=e.getInt16(16,!0),a=e.getUint8(18);let o=null;return a&&(o=t.subarray(19,21+i)),{outputChannelCount:i,preSkip:r,inputSampleRate:n,outputGain:s,channelMappingFamily:a,channelMappingTable:o}},_o=(t,e,i)=>{switch(t){case"avc":{for(const r of no(i,e)){const n=i[r.offset],s=Gr(n);if(s>=Ye.NON_IDR_SLICE&&s<=Ye.SLICE_DPC)return"delta";if(s===Ye.IDR)return"key";if(s===Ye.SEI&&(!Fa()||Oa()>=144)){const a=i.subarray(r.offset,r.offset+r.length),o=Yt(a);let c=1;do{let d=0;for(;;){const y=o[c++];if(y===void 0||(d+=y,y<255))break}let f=0;for(;;){const y=o[c++];if(y===void 0||(f+=y,y<255))break}if(d===6){const y=new xe(o);y.pos=8*c;const l=X(y),p=y.readBits(1);if(l===0&&p===1)return"key"}c+=f}while(c<o.length-1)}}return"delta"}case"hevc":{for(const r of lo(i,e)){const n=Ai(i[r.offset]);if(n<Ae.BLA_W_LP)return"delta";if(n<=Ae.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(i[0]&1)===0?"key":"delta";case"vp9":{const r=new xe(i);if(r.readBits(2)!==2)return null;const n=r.readBits(1);return(r.readBits(1)<<1)+n===3&&r.skipBits(1),r.readBits(1)?null:r.readBits(1)===0?"key":"delta"}case"av1":{let r=!1;for(const{type:n,data:s}of wo(i))if(n===1){const a=new xe(s);a.skipBits(4),r=!!a.readBits(1)}else if(n===3||n===6||n===7){if(r)return"key";const a=new xe(s);return a.readBits(1)?null:a.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:pt(t),N(!1)}};var Yr;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(Yr||(Yr={}));const ko=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;const e=new xe(t);e.skipBits(16),e.skipBits(16);const i=e.readBits(2);if(i===3)return null;const r=e.readBits(6),n=e.readBits(5);if(n>8)return null;const s=e.readBits(3),a=e.readBits(3);(a&1)!==0&&a!==1&&e.skipBits(2),(a&4)!==0&&e.skipBits(2),a===2&&e.skipBits(2);const o=e.readBits(1),c=Math.floor(r/2);return{fscod:i,bsid:n,bsmod:s,acmod:a,lfeon:o,bitRateCode:c}},To=[1,2,3,6],So=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;const e=new xe(t);e.skipBits(16);const i=e.readBits(2);if(e.skipBits(3),i!==0&&i!==2)return null;const r=e.readBits(11),n=e.readBits(2);let s=0,a;n===3?(s=e.readBits(2),a=3):a=e.readBits(2);const o=e.readBits(3),c=e.readBits(1),d=e.readBits(5);if(d<11||d>16)return null;const f=To[a];let h;return n<3?h=io[n]/1e3:h=ro[s]/1e3,{dataRate:Math.round((r+1)*h/(f*16)),substreams:[{fscod:n,fscod2:s,bsid:d,bsmod:0,acmod:o,lfeon:c,numDepSub:0,chanLoc:0}]}},Eo=1683496997,Co=18,Bo=10,Jr=32,Ao=20,Po=8,Io=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],Ro=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],Mo=[16,16,20,20,0,24,24,0],en=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],zo=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],Fo=8,Oo=[32e3,44100,48e3,0],Ho=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Lo=[512,1024,2048,4096],Uo=t=>{const e=No(t),i=Vt(t);let r=e?Math.ceil(e.frameSize/4)*4:0,n=null;for(;r+4<=t.length&&i.getUint32(r)===Eo;){const a=Wo(t.subarray(r));if(!a)break;n??=a,r+=a.frameSize}if(e)return{frameSize:n?r:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:n!==null};if(!n?.asset)return null;const{asset:s}=n;return{frameSize:r,sampleRate:s.sampleRate,numberOfChannels:s.numberOfChannels,sampleCount:s.sampleCount,channelLayout:s.channelLayout,pcmResolution:s.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},No=t=>{if(t.length<Co||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;const e=new xe(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==Jr-1)return null;const i=e.readBits(1),r=e.readBits(7)+1;if(r%Po!==0)return null;const n=e.readBits(14)+1;if(n<96)return null;const s=e.readBits(6);if(s>=en.length)return null;const a=Io[e.readBits(4)];if(a===0)return null;const o=Ro[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);const c=e.readBits(2);if(c===3)return null;e.skipBits(1),i&&e.skipBits(16),e.skipBits(7);const d=Mo[e.readBits(3)];if(d===0)return null;const f=c!==0;return{frameSize:n,sampleRate:a,numberOfChannels:en[s]+(f?1:0),sampleCount:r*Jr,channelLayout:zo[s]|(f?Fo:0),amode:s,lfePresent:f,bitRate:o,pcmResolution:d}},Wo=t=>{if(t.length<Bo||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;const e=new xe(t);e.skipBits(32),e.skipBits(8);const i=e.readBits(2),r=e.readBits(1),n=8+4*r,s=16+4*r;e.skipBits(n);const a=e.readBits(s)+1,o={frameSize:a,asset:null};if(!e.readBits(1))return o;const c=Oo[e.readBits(2)],d=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);const f=e.readBits(3)+1,h=e.readBits(3)+1,y=[];for(let b=0;b<f;b++)y.push(e.readBits(i+1));for(const b of y)e.skipBits(8*Pa(b));if(e.readBits(1)){e.skipBits(2);const b=e.readBits(2)+1<<2,w=e.readBits(2)+1;e.skipBits(w*b)}for(let b=0;b<h;b++)e.skipBits(s);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));const l=e.readBits(5)+1,p=Ho[e.readBits(4)],m=e.readBits(8)+1;let v=0;if(e.readBits(1)&&(m>2&&e.skipBits(1),m>6&&e.skipBits(1),e.readBits(1))){const b=e.readBits(2)+1<<2;v=e.readBits(b)}return c===0||e.getBitsLeft()<0?o:{frameSize:a,asset:{sampleRate:p,numberOfChannels:m,sampleCount:Math.round(d*p/c),channelLayout:v,pcmResolution:l}}},Do=t=>{const e=new Uint8Array(Ao),i=Vt(e);i.setUint32(0,t.sampleRate),i.setUint32(4,t.bitRate),i.setUint32(8,t.bitRate),e[12]=t.pcmResolution;const r=t.core&&!t.hasExtensions?1:0,n=new xe(e);return n.seekToByte(13),n.writeBits(2,Math.max(Lo.indexOf(t.sampleCount),0)),n.writeBits(5,r),n.writeBits(1,t.core?.lfePresent?1:0),n.writeBits(6,t.core?.amode??0),n.writeBits(14,t.core?t.core.frameSize-1:0),n.writeBits(1,0),n.writeBits(3,0),n.writeBits(16,t.channelLayout),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(1,0),n.writeBits(5,0),e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const tn=new Uint8Array(0);class ft{constructor(e,i,r,n,s=-1,a,o){if(this.data=e,this.type=i,this.timestamp=r,this.duration=n,this.sequenceNumber=s,e===tn&&a===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(a===void 0&&(a=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(i!=="key"&&i!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(r))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(n)||n<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(s))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(a)||a<0)throw new TypeError("byteLength must be a non-negative integer.");if(o!==void 0&&(typeof o!="object"||!o))throw new TypeError("sideData, when provided, must be an object.");if(o?.alpha!==void 0&&!(o.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(o?.alphaByteLength!==void 0&&(!Number.isInteger(o.alphaByteLength)||o.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=a,this.sideData=o??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===tn}get microsecondTimestamp(){return Math.trunc(gt*this.timestamp)}get microsecondDuration(){return Math.trunc(gt*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,i){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const r=new Uint8Array(e.byteLength);return e.copyTo(r),new ft(r,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,i)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new ft(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $o=t=>{let i=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){const r=[...new Set(t.codecStrings)];i+=`; codecs="${r.join(", ")}"`}return i};/*!
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
 */const jo=7,qo=9,nn=t=>{const e=t.filePos,i=ac(t,9),r=new xe(i);if(r.readBits(12)!==4095||(r.skipBits(1),r.readBits(2)!==0))return null;const a=r.readBits(1),o=r.readBits(2)+1,c=r.readBits(4);if(c===15)return null;r.skipBits(1);const d=r.readBits(3);if(d===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);const f=r.readBits(13);r.skipBits(11);const h=r.readBits(2)+1;if(h!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let y=null;return a===1?t.filePos-=2:y=r.readBits(16),{objectType:o,samplingFrequencyIndex:c,channelConfiguration:d,frameLength:f,numberOfAacFrames:h,crcCheck:y,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Vo=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(n=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");n&&(r=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},Go=(function(t){return function(e){function i(a){e.error=e.hasError?new t(a,e.error,"An error was suppressed during disposal."):a,e.hasError=!0}var r,n=0;function s(){for(;r=e.stack.pop();)try{if(!r.async&&n===1)return n=0,e.stack.push(r),Promise.resolve().then(s);if(r.dispose){var a=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(a).then(s,function(o){return i(o),s()})}else n|=1}catch(o){i(o)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});Ha();let sn=-1/0,an=-1/0,Ii=null;typeof FinalizationRegistry<"u"&&(Ii=new FinalizationRegistry(t=>{const e=performance.now();t.type==="video"?(e-sn>=1e3&&(pe._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),sn=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-an>=1e3&&(pe._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),an=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));class ut{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}}const Ri=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Xo=new Set(Ri);class Ee{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(gt*this.timestamp)}get microsecondDuration(){return Math.trunc(gt*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,i){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.format===void 0||!Xo.has(i.format))throw new TypeError("init.format must be one of: "+Ri.join(", "));if(!Number.isInteger(i.codedWidth)||i.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(i.codedHeight)||i.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.layout!==void 0){if(!Array.isArray(i.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const s of i.layout){if(!s||typeof s!="object"||Array.isArray(s))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(s.offset)||s.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(s.stride)||s.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(i.visibleRect!==void 0&&Ti(i.visibleRect,"init.visibleRect"),i.displayWidth!==void 0&&(!Number.isInteger(i.displayWidth)||i.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(i.displayHeight!==void 0&&(!Number.isInteger(i.displayHeight)||i.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(i.displayWidth!==void 0!=(i.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=i.format,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0;const r=i.layout??Qo(i.format,i.codedWidth,i.codedHeight);let n=i.colorSpace??null;n===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?n={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:n={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:i.visibleRect?.left??0,top:i.visibleRect?.top??0,width:i.visibleRect?.width??i.codedWidth,height:i.visibleRect?.height??i.codedHeight},i.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?i.displayWidth:i.displayHeight,this.squarePixelHeight=this.rotation%180===0?i.displayHeight:i.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=i._doNotCopy?ze(e):ze(e).slice(),this._layout=r,this.colorSpace=new Mi(n)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(i?.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(i?.timestamp!==void 0&&!Number.isFinite(i?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(i?.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");i?.visibleRect!==void 0&&Ti(i.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=i?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=i?.timestamp??e.timestamp/1e6,this.duration=i?.duration??(e.duration??0)/1e6,this.colorSpace=new Mi(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(i.visibleRect!==void 0&&Ti(i.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new Ee(new VideoFrame(e,{timestamp:Math.trunc(i.timestamp*gt),duration:Math.trunc((i.duration??0)*gt)||void 0,visibleRect:i.visibleRect&&{x:i.visibleRect.left,y:i.visibleRect.top,width:i.visibleRect.width,height:i.visibleRect.height}}),i);let r=0,n=0;if("naturalWidth"in e?(r=e.naturalWidth,n=e.naturalHeight):"videoWidth"in e?(r=e.videoWidth,n=e.videoHeight):"width"in e&&(r=Number(e.width),n=Number(e.height)),!r||!n)throw new TypeError("Could not determine dimensions.");const s=i.visibleRect??{left:0,top:0,width:r,height:n},a=new OffscreenCanvas(s.width,s.height),o=a.getContext("2d",{alpha:Mr(),willReadFrequently:!0});if(!o)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");o.drawImage(e,-s.left,-s.top),this._data=a,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:s.width,height:s.height},this.squarePixelWidth=s.width,this.squarePixelHeight=s.height,this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=new Mi({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof ut){if(!i||typeof i!="object")throw new TypeError("init must be an object.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(i.timestamp))throw new TypeError("init.timestamp must be a number.");if(i.duration!==void 0&&(!Number.isFinite(i.duration)||i.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Ri.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=i.rotation??0,this.timestamp=i.timestamp,this.duration=i.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=i?.encodeOptions??{},this.pixelAspectRatio=Fr({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Ii?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return N(this._data!==null),this._data instanceof ut?new Ee(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):Pt(this._data)?new Ee(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(N(this._layout),new Ee(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new Ee(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Ii?.unregister(this),this._data instanceof ut?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Pt(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(dn(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Pt(this._data)?this._data.allocationSize(e):fn(this,e).allocationSize}async copyTo(e,i={}){if(!wi(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(dn(i),this._closed)throw new Error("VideoSample is closed.");if((i.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(N(this._data!==null),Pt(this._data))return this._data.copyTo(e,i);if(i.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(i.format))if(this._data instanceof ut){const d={stack:[],error:void 0,hasError:!1};try{const f=Vo(d,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation},i.colorSpace??"srgb"),!1);if(!(f instanceof Ee))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(f.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${f.format}' instead.`);return await f.copyTo(e,i)}catch(f){d.error=f,d.hasError=!0}finally{Go(d)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");const d=this.toVideoFrame(),f=await d.copyTo(e,i);return d.close(),f}const r=fn(this,i);N(this.format);const n=ze(e);if(n.byteLength<r.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${r.allocationSize}, Available: ${n.byteLength}`);const s=Jt(this.format);let a;if(this._data instanceof ut){let d=this._data.getDataPlanes();if(d instanceof Promise&&(d=await d),!Array.isArray(d)||d.some(f=>!(f.data instanceof Uint8Array)||!Number.isInteger(f.stride)||f.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');a=d}else if(this._data instanceof Uint8Array)N(this._layout),N(this._layout.length===s.length),a=this._layout.map((d,f)=>{const h=Math.ceil(this.codedHeight/s[f].heightDivisor);return{data:this._data.subarray(d.offset,d.offset+d.stride*h),stride:d.stride}});else{const f=this._data.getContext("2d");N(f);const h=f.getImageData(0,0,this.codedWidth,this.codedHeight);a=[{data:ze(h.data),stride:4*this.codedWidth}]}const o=[],c=s.length;for(let d=0;d<c;d++){const f=r.computedLayouts[d],h=a[d].stride,y=a[d].data;let l=f.sourceTop*h;l+=f.sourceLeftBytes;let p=f.destinationOffset;const m=f.sourceWidthBytes,v={offset:p,stride:f.destinationStride};for(let b=0;b<f.sourceHeight;b++){if(l+m>y.byteLength)throw new Error("Source buffer OOB read.");if(p+m>n.byteLength)throw new Error("Destination buffer OOB write.");const w=y.subarray(l,l+m);n.set(w,p),l+=h,p+=f.destinationStride}o.push(v)}if(i.format!==void 0){const d=this.format.startsWith("RGB")!==i.format.startsWith("RGB"),f=this.format.includes("X")&&i.format.includes("A");if(d||f)for(let h=0;h<r.allocationSize;h+=4){if(d){const y=n[h],l=n[h+2];n[h]=l,n[h+2]=y}f&&(n[h+3]=255)}}return o}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof ut){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");const e=this._data.getDataPlanes();if(e instanceof Promise)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");const i=e.reduce((a,o)=>a+o.data.byteLength,0),r=new Uint8Array(i);let n=0;const s=[];for(const a of e)r.set(a.data,n),s.push(n),n+=a.data.byteLength;return new VideoFrame(r,{format:this.format,layout:e.map((a,o)=>({offset:s[o],stride:a.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Pt(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(N(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,i,r,n,s,a,o,c,d){let f=0,h=0,y=this.displayWidth,l=this.displayHeight,p=0,m=0,v=this.displayWidth,b=this.displayHeight;if(a!==void 0?(f=i,h=r,y=n,l=s,p=a,m=o,c!==void 0?(v=c,b=d):(v=y,b=l)):(p=i,m=r,n!==void 0&&(v=n,b=s)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(f))throw new TypeError("sx must be a number.");if(!Number.isFinite(h))throw new TypeError("sy must be a number.");if(!Number.isFinite(y)||y<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(l)||l<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(p))throw new TypeError("dx must be a number.");if(!Number.isFinite(m))throw new TypeError("dy must be a number.");if(!Number.isFinite(v)||v<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(b)||b<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:f,sy:h,sWidth:y,sHeight:l}=this._rotateSourceRegion(f,h,y,l,this.rotation));const w=this.toCanvasImageSource();e.save();const T=p+v/2,S=m+b/2;e.translate(T,S),e.rotate(this.rotation*Math.PI/180);const E=this.rotation%180===0?1:v/b;e.scale(1/E,E),e.drawImage(w,f,h,y,l,-v/2,-b/2,v,b),e.restore()}drawWithFit(e,i){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!i||typeof i!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(i.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");i.crop!==void 0&&zi(i.crop,"options.");const r=e.canvas.width,n=e.canvas.height,s=i.rotation??this.rotation,[a,o]=s%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let c=i.crop;c&&(c=ln(c,a,o));let d,f,h,y;const{sx:l,sy:p,sWidth:m,sHeight:v}=this._rotateSourceRegion(i.crop?.left??0,i.crop?.top??0,i.crop?.width??a,i.crop?.height??o,s);if(i.fit==="fill")d=0,f=0,h=r,y=n;else{const[w,T]=i.crop?[i.crop.width,i.crop.height]:[a,o],S=i.fit==="contain"?Math.min(r/w,n/T):Math.max(r/w,n/T);h=w*S,y=T*S,d=(r-h)/2,f=(n-y)/2}e.save();const b=s%180===0?1:h/y;e.translate(r/2,n/2),e.rotate(s*Math.PI/180),e.scale(1/b,b),e.translate(-r/2,-n/2),e.drawImage(this.toCanvasImageSource(),l,p,m,v,d,f,h,y),e.restore()}_rotateSourceRegion(e,i,r,n,s){return s===90?[e,i,r,n]=[i,this.squarePixelHeight-e-r,n,r]:s===180?[e,i]=[this.squarePixelWidth-e-r,this.squarePixelHeight-i-n]:s===270&&([e,i,r,n]=[this.squarePixelWidth-i-n,e,n,r]),{sx:e,sy:i,sWidth:r,sHeight:n}}_drawWithFitAndMipmapping(e,i,r){const n=e.width,s=e.height,[a,o]=r.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=r.crop?r.crop.width:a,d=r.crop?r.crop.height:o;let f=0;2*n<c&&2*s<d&&(f=Math.floor(Math.log2(Math.min(c/n,d/s))));const h=n*2**f,y=s*2**f,{canvas:l,context:p,isNew:m}=f>0?cn(h,y):{canvas:e,context:i,isNew:r.targetIsFresh};p.imageSmoothingQuality="high",r.fillBlack?(p.fillStyle="black",p.fillRect(0,0,h,y)):m||p.clearRect(0,0,h,y),this.drawWithFit(p,{fit:r.fit,rotation:r.rotation,crop:r.crop}),p.globalCompositeOperation="copy";for(let v=f;v>1;v--){const b=n*2**v,w=s*2**v;p.drawImage(l,0,0,b,w,0,0,b/2,w/2)}p.globalCompositeOperation="source-over",f>0&&(i.imageSmoothingQuality="high",i.globalCompositeOperation="copy",i.drawImage(l,0,0,2*n,2*s,0,0,n,s),i.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(N(this._data!==null),this._data instanceof ut||this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.crop!==void 0&&zi(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");const i=Ta(this.rotation+(e.rotate??0)),[r,n]=i%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let s=e.crop;s&&(s=ln(s,r,n));const a=s?s.width:r,o=s?s.height:n,c=a/o;let d,f;e.width!==void 0&&e.height===void 0?(d=e.width,f=d/c):e.width===void 0&&e.height!==void 0?(f=e.height,d=f*c):e.width!==void 0&&e.height!==void 0?(d=e.width,f=e.height):(d=a,f=o),d=Ir(d,e.roundDimensionsTo??1),f=Ir(f,e.roundDimensionsTo??1);const h={width:d,height:f,fit:e.fit??"fill",rotation:i,crop:s??{left:0,top:0,width:r,height:n},alpha:e.alpha??"keep"};for(const m of Zo){let v=m(this,h);if(v instanceof Promise&&(v=await v),v!==null)return v}const{canvas:y,context:l,isNew:p}=cn(h.width,h.height);return this._drawWithFitAndMipmapping(y,l,{fit:h.fit,rotation:h.rotation,crop:h.crop,targetIsFresh:p,fillBlack:h.alpha==="discard"}),new Ee(y,{timestamp:this.timestamp,duration:this.duration,rotation:0})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}}const Zo=[],Ko=3,At=[];let on=0;const cn=(t,e)=>{for(const n of At)if(n.canvas.width===t&&n.canvas.height===e)return n.age=on++,{canvas:n.canvas,context:n.context,isNew:!1};let i;if(typeof OffscreenCanvas<"u")i=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");i=document.createElement("canvas"),i.width=t,i.height=e}const r=i.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!r)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return At.length>=Ko&&At.splice(La(At,n=>n.age),1),At.push({canvas:i,context:r,age:on++}),{canvas:i,context:r,isNew:!0}};class Mi{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");const i=Object.keys(Gt);if(e.primaries!=null&&!i.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${i.join(", ")}.`);const r=Object.keys(Xt);if(e.transfer!=null&&!r.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${r.join(", ")}.`);const n=Object.keys(Zt);if(e.matrix!=null&&!n.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${n.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const Pt=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,ln=(t,e,i)=>{const r=Math.min(t.left,e),n=Math.min(t.top,i),s=Math.min(t.width,e-r),a=Math.min(t.height,i-n);return N(s>=0),N(a>=0),{left:r,top:n,width:s,height:a}},zi=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},dn=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},Qo=(t,e,i)=>{const r=Jt(t),n=[];let s=0;for(const a of r){const o=Math.ceil(e/a.widthDivisor),c=Math.ceil(i/a.heightDivisor),d=o*a.sampleBytes,f=d*c;n.push({offset:s,stride:d}),s+=f}return n},Jt=t=>{const e=(i,r,n,s,a)=>{const o=[{sampleBytes:i,widthDivisor:1,heightDivisor:1},{sampleBytes:r,widthDivisor:n,heightDivisor:s},{sampleBytes:r,widthDivisor:n,heightDivisor:s}];return a&&o.push({sampleBytes:i,widthDivisor:1,heightDivisor:1}),o};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:pt(t),N(!1)}},fn=(t,e)=>{const i={left:0,top:0,width:t.codedWidth,height:t.codedHeight},r=e.rect,n=Yo(i,r,t.codedWidth,t.codedHeight,t.format),s=e.layout;let a;if(!e.format||e.format===t.format)a=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))a=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return ec(n,a,s)},Yo=(t,e,i,r,n)=>{const s={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>i)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>r)throw new TypeError("visibleRect exceeds codedHeight.");s.x=e.x||0,s.y=e.y||0,s.width=e.width||0,s.height=e.height||0}if(!Jo(n,s))throw new TypeError("visibleRect alignment is invalid for the format.");return s},Jo=(t,e)=>{if(t===null)return!0;const i=Jt(t);for(let r=0;r<i.length;r++){const n=i[r],s=n.widthDivisor,a=n.heightDivisor;if((e.x||0)%s!==0||(e.y||0)%a!==0)return!1}return!0},ec=(t,e,i)=>{const r=Jt(e),n=r.length;if(i!==void 0&&i.length!==n)throw new TypeError(`Layout must have ${n} planes.`);let s=0;const a=[],o=[];for(let c=0;c<n;c++){const d=r[c],f=d.sampleBytes,h=d.widthDivisor,y=d.heightDivisor,l={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(l.sourceTop=Math.ceil(Math.trunc(t.y||0)/y),l.sourceHeight=Math.ceil(Math.trunc(t.height||0)/y),l.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/h)*f,l.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/h)*f,i!==void 0){const v=i[c];if(v.stride<l.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);l.destinationOffset=v.offset,l.destinationStride=v.stride}else l.destinationOffset=s,l.destinationStride=l.sourceWidthBytes;const m=l.destinationStride*l.sourceHeight+l.destinationOffset;if(m>4294967295)throw new TypeError("Allocation size exceeds limit.");o.push(m),s=Math.max(s,m);for(let v=0;v<c;v++){const b=a[v];if(!(o[c]<=b.destinationOffset||o[v]<=l.destinationOffset))throw new TypeError("Planes overlap.")}a.push(l)}return{allocationSize:s,computedLayouts:a}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const un=new Map,tc=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!Qe.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${Qe.join(", ")}.`);const e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof ot))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof ot)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.crop!==void 0&&zi(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");hn(t.codec,t)},hn=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");const i=e.bitrateMode;if(i!==void 0&&!["constant","variable"].includes(i))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&Bi(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},mn=t=>{const e=t.bitrateMode,i=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),r=(s,a,o)=>({codec:t.fullCodecString??Va(t.codec,t.width,t.height,o,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:s,bitrateMode:a,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Xa(t.codec)}),n=[];return i.quantizer!==null&&n.push({config:r(void 0,"quantizer",i.bitrate),quantizer:i.quantizer}),i.bitrateMode!=="quantizer"&&n.push({config:r(i.bitrate,i.bitrateMode,i.bitrate),quantizer:null}),N(n.length>0),n};class ot{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in pn):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?pn[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,i,r,n){const s=ic[e];let a=null,o=this._bitrateMode??n??"variable";if(this._quantizer!==void 0){if(s)if(this._quantizer<s.min||this._quantizer>s.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${s.min} and ${s.max}.`)}else a=this._quantizer,this._bitrate===void 0&&(o="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&s&&!this._preferBitrate&&(N(this._quality!==void 0),a=Pr(Math.round(Ba(s.worst,s.best,this._quality)),s.min,s.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let d=this._quality;d===void 0&&(N(a!==null&&s),d=Pr((a-s.worst)/(s.best-s.worst),0,1)),c=gn(e,i,r,Fi(d))}return{quantizer:a,bitrate:c,bitrateMode:o}}_toVideoBitrate(e,i,r){return this._bitrate!==void 0?this._bitrate:(N(this._quality!==void 0),gn(e,i,r,Fi(this._quality)))}_toAudioBitrate(e){if(dt.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");const i=Fi(this._quality),n={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!n)throw new Error(`Unhandled codec: ${e}`);let s=n*i;return e==="aac"?s=[96e3,128e3,16e4,192e3].reduce((o,c)=>Math.abs(c-s)<Math.abs(o-s)?c:o):e==="opus"||e==="vorbis"?s=Math.max(6e3,s):e==="mp3"&&(s=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((o,c)=>Math.abs(c-s)<Math.abs(o-s)?c:o)),Math.round(s/1e3)*1e3}}const pn={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},ic={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Fi=t=>.3*Math.exp(2.5538*t),gn=(t,e,i,r)=>{const n=e*i,s=1920*1080,a=3e6,o=Math.pow(n/s,.95),c=a*o,d={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/a},h=c*d[t]*r;return Math.ceil(h/1e3)*1e3},vn=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};N(!1)},rc=async(t,e={})=>{const{width:i=1280,height:r=720,quality:n,bitrate:s,...a}=e;if(!Qe.includes(t))return!1;if(!Number.isInteger(i)||i<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(r)||r<=0)throw new TypeError("height must be a positive integer.");if(n!==void 0&&!(n instanceof ot))throw new TypeError("quality, when provided, must be a Quality.");if(n!==void 0&&s!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(s!==void 0&&!(s instanceof ot)&&(!Number.isInteger(s)||s<=0))throw new TypeError("bitrate must be a positive integer or a quality.");hn(t,a);const o=bn(n,s)??new ot("medium");let c;try{c=mn({codec:t,width:i,height:r,quality:o,framerate:void 0,...a,alpha:"discard"})}catch{return!1}const d=JSON.stringify(c),f=un.get(d);if(f)return f;const h=(async()=>{for(const{config:l}of c)if(yn.some(p=>p.supports(t,l)))return!0;if(typeof VideoEncoder>"u"||(i%2===1||r%2===1)&&(t==="avc"||t==="hevc"))return!1;for(const{config:l,quantizer:p}of c){try{if(!(await VideoEncoder.isConfigSupported(l)).supported)continue}catch{continue}if(!Mr()||await new Promise(async v=>{try{const b=new VideoEncoder({output:()=>{},error:()=>v(!1)});b.configure(l);const w=new Uint8Array(i*r*4),T=new VideoFrame(w,{format:"RGBA",codedWidth:i,codedHeight:r,timestamp:0});b.encode(T,p!==null?vn(t,p):void 0),T.close(),await b.flush(),v(!0)}catch{v(!1)}}))return!0}return!1})();return un.set(d,h),h},bn=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof ot?e:new ot({bitrate:e})},nc=async(t,e)=>{for(const i of t)if(await rc(i,e))return i;return null};/*!
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
 */class It{constructor(e,i,r,n,s){this.bytes=e,this.view=i,this.offset=r,this.start=n,this.end=s,this.bufferPos=n-r}static tempFromBytes(e){return new It(e,Vt(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,i=this.end-e){if(e<this.start||e+i>this.end)throw new RangeError("Slicing outside of original slice.");return new It(this.bytes,this.view,this.offset,e,e+i)}}const sc=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},ac=(t,e)=>{sc(t,e);const i=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,i};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class oc{constructor(e){this.mutex=new Cr,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,i,r){if(i<0)throw new Error(`Timestamps must be non-negative (got ${i}s).`);let n=this.trackTimestampInfo.get(e);if(n){if(r&&(n.maxTimestampBeforeLastKeyPacket=n.maxTimestamp),n.maxTimestampBeforeLastKeyPacket!==null&&i<n.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${i}s, but largest timestamp is ${n.maxTimestampBeforeLastKeyPacket}s.`);n.maxTimestamp=Math.max(n.maxTimestamp,i)}else{if(!r)throw new Error("First packet must be a key packet.");n={maxTimestamp:i,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,n)}}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const wn=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,cc=t=>{const e=Math.floor(t/36e5),i=Math.floor(t%(3600*1e3)/(60*1e3)),r=Math.floor(t%(60*1e3)/1e3),n=t%1e3;return e.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+n.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ei{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let i=0;i<e.length;i++)this.helperView.setUint8(i%8,e.charCodeAt(i)),i%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const i=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const s of e.children)s&&this.writeBox(s);const r=this.writer.getPos(),n=e.size??r-i;this.writer.seek(i),this.writeBoxHeader(e,n),this.writer.seek(r)}}writeBoxHeader(e,i){this.writeU32(e.largeSize?1:i),this.writeAscii(e.type),e.largeSize&&this.writeU64(i)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const i=this.offsets.get(e);N(i!==void 0);const r=this.writer.getPos();this.writer.seek(i),this.writeBox(e),this.writer.seek(r)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let i=this.measureBoxHeader(e);if(e.contents&&(i+=e.contents.byteLength),e.children)for(const r of e.children)r&&(i+=this.measureBox(r));return i}}}const oe=new Uint8Array(8),Pe=new DataView(oe.buffer),ge=t=>[(t%256+256)%256],ie=t=>(Pe.setUint16(0,t,!1),[oe[0],oe[1]]),Oi=t=>(Pe.setInt16(0,t,!1),[oe[0],oe[1]]),xn=t=>(Pe.setUint32(0,t,!1),[oe[1],oe[2],oe[3]]),j=t=>(Pe.setUint32(0,t,!1),[oe[0],oe[1],oe[2],oe[3]]),Je=t=>(Pe.setInt32(0,t,!1),[oe[0],oe[1],oe[2],oe[3]]),$e=t=>(Pe.setUint32(0,Math.floor(t/2**32),!1),Pe.setUint32(4,t,!1),[oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7]]),lc=t=>(Pe.setInt32(0,Math.floor(t/2**32),!1),Pe.setUint32(4,t,!1),[oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7]]),_n=t=>(Pe.setInt16(0,2**8*t,!1),[oe[0],oe[1]]),Fe=t=>(Pe.setInt32(0,2**16*t,!1),[oe[0],oe[1],oe[2],oe[3]]),Hi=t=>(Pe.setInt32(0,2**30*t,!1),[oe[0],oe[1],oe[2],oe[3]]),Li=(t,e)=>{const i=[];let r=t;do{let n=r&127;r>>=7,i.length>0&&(n|=128),i.push(n)}while(r>0||e);return i.reverse()},ue=(t,e=!1)=>{const i=Array(t.length).fill(null).map((r,n)=>t.charCodeAt(n));return e&&i.push(0),i},kn=t=>{const e=t*(Math.PI/180),i=Math.round(Math.cos(e)),r=Math.round(Math.sin(e));return[i,r,0,-r,i,0,0,0,1]},Tn=kn(0),Sn=t=>[Fe(t[0]),Fe(t[1]),Hi(t[2]),Fe(t[3]),Fe(t[4]),Hi(t[5]),Fe(t[6]),Fe(t[7]),Hi(t[8])],te=(t,e,i)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:i}),ce=(t,e,i,r,n)=>te(t,[ge(e),xn(i),r??[]],n),dc=t=>t.isQuickTime?te("ftyp",[ue("qt  "),j(512),ue("qt  ")]):t.fragmented?t.cmaf?te("ftyp",[ue("iso5"),j(512),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]):te("ftyp",[ue("iso5"),j(512),ue("iso5"),ue("iso6"),ue("mp41")]):te("ftyp",[ue("isom"),j(512),ue("isom"),t.holdsAvc?ue("avc1"):[],ue("mp41")]),En=()=>te("styp",[ue("iso5"),j(0),ue("iso5"),ue("iso6"),ue("mp41"),ue("cmfc"),ue("dash")]),Cn=(t,e)=>{let i=t.maxWrittenEndTimestamp-t.minWrittenTimestamp;return Number.isFinite(i)||(i=0),ce("sidx",1,0,[j(1),j(He),$e(me(t.minWrittenTimestamp,He)),$e(0),ie(0),ie(1),j(e&2147483647),j(me(i,He)),j(0)])},ti=t=>({type:"mdat",largeSize:t}),fc=t=>({type:"free",size:t}),Rt=t=>te("moov",void 0,[uc(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>hc(e,t.creationTime)),t.isFragmented?Kc(t.trackDatas):null,ll(t)]),uc=(t,e)=>{const i=Math.max(0,...e.map(a=>me(ii(a),He)+me(a.startTimestampOffset??0,He))),r=Math.max(0,...e.map(a=>a.track.id))+1,n=!at(t)||!at(i),s=n?$e:j;return ce("mvhd",+n,0,[s(t),s(t),j(He),s(i),Fe(1),_n(1),Array(10).fill(0),Sn(Tn),Array(24).fill(0),j(r)])},ii=t=>{if(t.samples.length===0)return 0;let e=1/0,i=-1/0;for(let r=0;r<t.samples.length;r++){const n=t.samples[r];n.timestamp<e&&(e=n.timestamp),n.timestamp+n.duration>i&&(i=n.timestamp+n.duration)}return e===1/0?0:i-e},hc=(t,e)=>{const i=wl(t),r=t.startTimestampOffset!==null&&t.startTimestampOffset>0;return te("trak",void 0,[mc(t,e),r?pc(t,t.startTimestampOffset):null,gc(t,e),i.name!==void 0?te("udta",void 0,[te("name",[...We.encode(i.name)])]):null])},mc=(t,e)=>{const i=me(ii(t),He)+me(t.startTimestampOffset??0,He),r=!at(e)||!at(i),n=r?$e:j;let s;if(t.type==="video"){const c=t.track.metadata.rotation;s=kn(c??0)}else s=Tn;let a=2;t.track.metadata.disposition?.default!==!1&&(a|=1);const o=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:pt(t);return ce("tkhd",+r,a,[n(e),n(e),j(t.track.id),j(0),n(i),Array(8).fill(0),ie(0),ie(o),_n(t.type==="audio"?1:0),ie(0),Sn(s),Fe(t.type==="video"?t.info.width:0),Fe(t.type==="video"?t.info.height:0)])},pc=(t,e)=>{const i=me(e,He),r=me(ii(t),He),n=!at(i)||!at(r),s=n?$e:j,a=n?lc:Je;return te("edts",void 0,[ce("elst",n?1:0,0,[j(2),s(i),a(-1),Fe(1),s(r),a(0),Fe(1)])])},gc=(t,e)=>te("mdia",void 0,[vc(t,e),Ui(!0,bc[t.type],yc[t.type]),wc(t)]),vc=(t,e)=>{const i=me(ii(t),t.timescale),r=!at(e)||!at(i),n=r?$e:j;return ce("mdhd",+r,0,[n(e),n(e),j(t.timescale),n(i),ie(zn(t.track.metadata.languageCode??Aa)),ie(0)])},bc={video:"vide",audio:"soun",subtitle:"text"},yc={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Ui=(t,e,i,r="\0\0\0\0")=>ce("hdlr",0,0,[t?ue("mhlr"):j(0),ue(e),ue(r),j(0),j(0),ue(i,!0)]),wc=t=>te("minf",void 0,[xc[t.type](),_c(),Sc(t)]),xc={video:()=>ce("vmhd",0,1,[ie(0),ie(0),ie(0),ie(0)]),audio:()=>ce("smhd",0,0,[ie(0),ie(0)]),subtitle:()=>ce("nmhd",0,0)},_c=()=>te("dinf",void 0,[kc()]),kc=()=>ce("dref",0,0,[j(1)],[Tc()]),Tc=()=>ce("url ",0,1),Sc=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(i=>i.sampleCompositionTimeOffset!==0);return te("stbl",void 0,[Ec(t),$c(t),e?Xc(t):null,e?Zc(t):null,qc(t),Vc(t),Gc(t),jc(t)])},Ec=t=>{let e;if(t.type==="video")e=Cc(hl(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){const i=Mn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);N(i),e=Mc(i,t)}else t.type==="subtitle"&&(e=Wc(gl[t.track.source._codec],t));return N(e),ce("stsd",0,0,[j(1)],[e])},Cc=(t,e)=>te(t,[Array(6).fill(0),ie(1),ie(0),ie(0),Array(12).fill(0),ie(e.info.width),ie(e.info.height),j(4718592),j(4718592),j(0),ie(1),ge(10),ue("Mediabunny"),Array(21).fill(0),ie(e.info.hasAlphaChannel?32:24),Oi(65535)],[ml[e.track.source._codec]?.(e)??null,Bc(e),Sa(e.info.decoderConfig.colorSpace)?Ac(e):null]),Bc=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:te("pasp",[j(t.info.pixelAspectRatio.num),j(t.info.pixelAspectRatio.den)]),Ac=t=>te("colr",[ue(t.muxer.isQuickTime?"nclc":"nclx"),ie(Gt[t.info.decoderConfig.colorSpace.primaries]),ie(Xt[t.info.decoderConfig.colorSpace.transfer]),ie(Zt[t.info.decoderConfig.colorSpace.matrix]),t.muxer.isQuickTime?[]:ge((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Pc=t=>t.info.decoderConfig&&te("avcC",[...ze(t.info.decoderConfig.description)]),Ic=t=>t.info.decoderConfig&&te("hvcC",[...ze(t.info.decoderConfig.description)]),Bn=t=>{if(!t.info.decoderConfig)return null;const e=t.info.decoderConfig,i=e.codec.split("."),r=Number(i[1]),n=Number(i[2]),s=Number(i[3]),a=i[4]?Number(i[4]):1,o=i[8]?Number(i[8]):Number(e.colorSpace?.fullRange??0),c=(s<<4)+(a<<1)+o,d=i[5]?Number(i[5]):e.colorSpace?.primaries?Gt[e.colorSpace.primaries]:2,f=i[6]?Number(i[6]):e.colorSpace?.transfer?Xt[e.colorSpace.transfer]:2,h=i[7]?Number(i[7]):e.colorSpace?.matrix?Zt[e.colorSpace.matrix]:2;return ce("vpcC",1,0,[ge(r),ge(n),ge(c),ge(d),ge(f),ge(h),ie(0)])},Rc=t=>te("av1C",Ga(t.info.decoderConfig.codec)),Mc=(t,e)=>{let i=0,r,n=16;const s=dt.includes(e.track.source._codec);if(s){const a=e.track.source._codec,{sampleSize:o}=vt(a);n=8*o,n>16&&(i=1)}if(e.muxer.isQuickTime&&(i=1),i===0)r=[Array(6).fill(0),ie(1),ie(i),ie(0),j(0),ie(e.info.numberOfChannels),ie(n),ie(0),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0)];else{const a=s?0:-2;r=[Array(6).fill(0),ie(1),ie(i),ie(0),j(0),ie(e.info.numberOfChannels),ie(Math.min(n,16)),Oi(a),ie(0),ie(e.info.sampleRate<2**16?e.info.sampleRate:0),ie(0),s?[j(1),j(n/8),j(e.info.numberOfChannels*n/8)]:[j(0),j(0),j(0)],j(2)]}return te(t,r,[pl(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null])},Ni=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let i=[...ge(e),...ge(21),...xn(0),...j(0),...j(0)];if(t.info.decoderConfig.description){const r=ze(t.info.decoderConfig.description);i=[...i,...ge(5),...Li(r.byteLength),...r]}return i=[...ie(1),...ge(0),...ge(4),...Li(i.length),...i,...ge(6),...ge(1),...ge(2)],i=[...ge(3),...Li(i.length),...i],ce("esds",0,0,i)},ct=t=>te("wave",void 0,[zc(t),Fc(t),te("\0\0\0\0")]),zc=t=>te("frma",[ue(Mn(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),Fc=t=>{const{littleEndian:e}=vt(t.track.source._codec);return te("enda",[ie(+e)])},Oc=t=>{let e=t.info.numberOfChannels,i=3840,r=t.info.sampleRate,n=0,s=0,a=new Uint8Array(0);const o=t.info.decoderConfig?.description;if(o){N(o.byteLength>=18);const c=ze(o),d=xo(c);e=d.outputChannelCount,i=d.preSkip,r=d.inputSampleRate,n=d.outputGain,s=d.channelMappingFamily,d.channelMappingTable&&(a=d.channelMappingTable)}return te("dOps",[ge(0),ge(e),ie(i),j(r),Oi(n),ge(s),...a])},Hc=t=>{const e=t.info.decoderConfig?.description;N(e);const i=ze(e);return ce("dfLa",0,0,[...i.subarray(4)])},je=t=>{const{littleEndian:e,sampleSize:i}=vt(t.track.source._codec),r=+e;return ce("pcmC",0,0,[ge(r),ge(8*i)])},Lc=t=>{N(t.info.primingPacket);const e=ko(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),r=new xe(i);return r.writeBits(2,e.fscod),r.writeBits(5,e.bsid),r.writeBits(3,e.bsmod),r.writeBits(3,e.acmod),r.writeBits(1,e.lfeon),r.writeBits(5,e.bitRateCode),r.writeBits(5,0),te("dac3",[...i])},Uc=t=>{N(t.info.primingPacket);const e=So(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const a of e.substreams)i+=23,a.numDepSub>0?i+=9:i+=1;const r=Math.ceil(i/8),n=new Uint8Array(r),s=new xe(n);s.writeBits(13,e.dataRate),s.writeBits(3,e.substreams.length-1);for(const a of e.substreams)s.writeBits(2,a.fscod),s.writeBits(5,a.bsid),s.writeBits(1,0),s.writeBits(1,0),s.writeBits(3,a.bsmod),s.writeBits(3,a.acmod),s.writeBits(1,a.lfeon),s.writeBits(3,0),s.writeBits(4,a.numDepSub),a.numDepSub>0?s.writeBits(9,a.chanLoc):s.writeBits(1,0);return te("dec3",[...n])},Nc=t=>{N(t.info.primingPacket);const e=Uo(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return te("ddts",[...Do(e)])},Wc=(t,e)=>te(t,[Array(6).fill(0),ie(1)],[vl[e.track.source._codec](e)]),Dc=t=>te("vttC",[...We.encode(t.info.config.description)]),$c=t=>ce("stts",0,0,[j(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[j(e.sampleCount),j(e.sampleDelta)])]),jc=t=>{if(t.samples.every(i=>i.type==="key"))return null;const e=[...t.samples.entries()].filter(([,i])=>i.type==="key");return ce("stss",0,0,[j(e.length),e.map(([i])=>j(i+1))])},qc=t=>ce("stsc",0,0,[j(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[j(e.firstChunk),j(e.samplesPerChunk),j(1)])]),Vc=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){const{sampleSize:e}=vt(t.track.source._codec);return ce("stsz",0,0,[j(e*t.info.numberOfChannels),j(t.samples.reduce((i,r)=>i+me(r.duration,t.timescale),0))])}return ce("stsz",0,0,[j(0),j(t.samples.length),t.samples.map(e=>j(e.size))])},Gc=t=>t.finalizedChunks.length>0&&Ne(t.finalizedChunks).offset>=2**32?ce("co64",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>$e(e.offset))]):ce("stco",0,0,[j(t.finalizedChunks.length),t.finalizedChunks.map(e=>j(e.offset))]),Xc=t=>ce("ctts",1,0,[j(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[j(e.sampleCount),Je(e.sampleCompositionTimeOffset)])]),Zc=t=>{let e=1/0,i=-1/0,r=1/0,n=-1/0;N(t.compositionTimeOffsetTable.length>0),N(t.samples.length>0);for(let a=0;a<t.compositionTimeOffsetTable.length;a++){const o=t.compositionTimeOffsetTable[a];e=Math.min(e,o.sampleCompositionTimeOffset),i=Math.max(i,o.sampleCompositionTimeOffset)}for(let a=0;a<t.samples.length;a++){const o=t.samples[a];r=Math.min(r,me(o.timestamp,t.timescale)),n=Math.max(n,me(o.timestamp+o.duration,t.timescale))}const s=Math.max(-e,0);return n>=2**31?null:ce("cslg",0,0,[Je(s),Je(e),Je(i),Je(r),Je(n)])},Kc=t=>te("mvex",void 0,t.map(Qc)),Qc=t=>ce("trex",0,0,[j(t.track.id),j(1),j(0),j(0),j(0)]),An=(t,e)=>te("moof",void 0,[Yc(t),...e.map(Jc)]),Yc=t=>ce("mfhd",0,0,[j(t)]),Pn=t=>{let e=0,i=0;const r=0,n=0,s=t.type==="delta";return i|=+s,s?e|=1:e|=2,e<<24|i<<16|r<<8|n},Jc=t=>te("traf",void 0,[el(t),tl(t),il(t)]),el=t=>{N(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const i=t.currentChunk.samples[1]??t.currentChunk.samples[0],r={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Pn(i)};return ce("tfhd",0,e,[j(t.track.id),j(r.duration),j(r.size),j(r.flags)])},tl=t=>(N(t.currentChunk),ce("tfdt",1,0,[$e(me(t.currentChunk.startTimestamp,t.timescale))])),il=t=>{N(t.currentChunk);const e=t.currentChunk.samples.map(m=>m.timescaleUnitsToNextSample),i=t.currentChunk.samples.map(m=>m.size),r=t.currentChunk.samples.map(Pn),n=t.currentChunk.samples.map(m=>me(m.timestamp-m.decodeTimestamp,t.timescale)),s=new Set(e),a=new Set(i),o=new Set(r),c=new Set(n),d=o.size===2&&r[0]!==r[1],f=s.size>1,h=a.size>1,y=!d&&o.size>1,l=c.size>1||[...c].some(m=>m!==0);let p=0;return p|=1,p|=4*+d,p|=256*+f,p|=512*+h,p|=1024*+y,p|=2048*+l,ce("trun",1,p,[j(t.currentChunk.samples.length),j(t.currentChunk.offset-t.currentChunk.moofOffset||0),d?j(r[0]):[],t.currentChunk.samples.map((m,v)=>[f?j(e[v]):[],h?j(i[v]):[],y?j(r[v]):[],l?Je(n[v]):[]])])},rl=t=>te("mfra",void 0,[...t.map(nl),sl()]),nl=t=>ce("tfra",1,0,[j(t.track.id),j(63),j(t.finalizedChunks.length),t.finalizedChunks.map(i=>[$e(me(i.samples[0].timestamp,t.timescale)),$e(i.moofOffset),j(i.trafIndex+1),j(1),j(1)])]),sl=()=>ce("mfro",0,0,[j(0)]),al=()=>te("vtte"),ol=(t,e,i,r,n)=>te("vttc",void 0,[n!==null?te("vsid",[Je(n)]):null,i!==null?te("iden",[...We.encode(i)]):null,e!==null?te("ctim",[...We.encode(cc(e))]):null,r!==null?te("sttg",[...We.encode(r)]):null,te("payl",[...We.encode(t)])]),cl=t=>te("vtta",[...We.encode(t)]),ll=t=>{const e=[],i=t.format._options.metadataFormat??"auto",r=t.output._metadataTags;if(i==="mdir"||i==="auto"&&!t.isQuickTime){const n=fl(r);n&&e.push(n)}else if(i==="mdta"){const n=ul(r);n&&e.push(n)}else(i==="udta"||i==="auto"&&t.isQuickTime)&&dl(e,t.output._metadataTags);return e.length===0?null:te("udta",void 0,e)},dl=(t,e)=>{for(const{key:i,value:r}of zr(e))switch(i){case"title":t.push(qe("©nam",r));break;case"description":t.push(qe("©des",r));break;case"artist":t.push(qe("©ART",r));break;case"album":t.push(qe("©alb",r));break;case"albumArtist":t.push(qe("albr",r));break;case"genre":t.push(qe("©gen",r));break;case"date":t.push(qe("©day",r.toISOString().slice(0,10)));break;case"comment":t.push(qe("©cmt",r));break;case"lyrics":t.push(qe("©lyr",r));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:pt(i)}if(e.raw)for(const i in e.raw){const r=e.raw[i];r==null||i.length!==4||t.some(n=>n.type===i)||(typeof r=="string"?t.push(qe(i,r)):r instanceof Uint8Array&&t.push(te(i,Array.from(r))))}},qe=(t,e)=>{const i=We.encode(e);return te(t,[ie(i.length),ie(zn("und")),Array.from(i)])},In={"image/jpeg":13,"image/png":14,"image/bmp":27},Rn=(t,e)=>{const i=[];for(const{key:r,value:n}of zr(t))switch(r){case"title":i.push({key:e?"title":"©nam",value:Oe(n)});break;case"description":i.push({key:e?"description":"©des",value:Oe(n)});break;case"artist":i.push({key:e?"artist":"©ART",value:Oe(n)});break;case"album":i.push({key:e?"album":"©alb",value:Oe(n)});break;case"albumArtist":i.push({key:e?"album_artist":"aART",value:Oe(n)});break;case"comment":i.push({key:e?"comment":"©cmt",value:Oe(n)});break;case"genre":i.push({key:e?"genre":"©gen",value:Oe(n)});break;case"lyrics":i.push({key:e?"lyrics":"©lyr",value:Oe(n)});break;case"date":i.push({key:e?"date":"©day",value:Oe(n.toISOString().slice(0,10))});break;case"images":for(const s of n)s.kind==="coverFront"&&i.push({key:"covr",value:te("data",[j(In[s.mimeType]??0),j(0),Array.from(s.data)])});break;case"trackNumber":if(e){const s=t.tracksTotal!==void 0?`${n}/${t.tracksTotal}`:n.toString();i.push({key:"track",value:Oe(s)})}else i.push({key:"trkn",value:te("data",[j(0),j(0),ie(0),ie(n),ie(t.tracksTotal??0),ie(0)])});break;case"discNumber":e||i.push({key:"disc",value:te("data",[j(0),j(0),ie(0),ie(n),ie(t.discsTotal??0),ie(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:pt(r)}if(t.raw)for(const r in t.raw){const n=t.raw[r];n==null||!e&&r.length!==4||i.some(s=>s.key===r)||(typeof n=="string"?i.push({key:r,value:Oe(n)}):n instanceof Uint8Array?i.push({key:r,value:te("data",[j(0),j(0),Array.from(n)])}):n instanceof Hr&&i.push({key:r,value:te("data",[j(In[n.mimeType]??0),j(0),Array.from(n.data)])}))}return i},fl=t=>{const e=Rn(t,!1);return e.length===0?null:ce("meta",0,0,void 0,[Ui(!1,"mdir","","appl"),te("ilst",void 0,e.map(i=>te(i.key,void 0,[i.value])))])},ul=t=>{const e=Rn(t,!0);return e.length===0?null:te("meta",void 0,[Ui(!1,"mdta",""),ce("keys",0,0,[j(e.length)],e.map(i=>te("mdta",[...We.encode(i.key)]))),te("ilst",void 0,e.map((i,r)=>{const n=String.fromCharCode(...j(r+1));return te(n,void 0,[i.value])}))])},Oe=t=>te("data",[j(1),j(0),...We.encode(t)]),hl=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},ml={avc:Pc,hevc:Ic,vp8:Bn,vp9:Bn,av1:Rc,prores:null},Mn=(t,e,i)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(i)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},pl=(t,e)=>{switch(t){case"aac":return Ni;case"mp3":return Ni;case"opus":return Oc;case"vorbis":return Ni;case"flac":return Hc;case"ac3":return Lc;case"eac3":return Uc;case"dts":return Nc}if(e)switch(t){case"pcm-s24":return ct;case"pcm-s24be":return ct;case"pcm-s32":return ct;case"pcm-s32be":return ct;case"pcm-f32":return ct;case"pcm-f32be":return ct;case"pcm-f64":return ct;case"pcm-f64be":return ct}else switch(t){case"pcm-s16":return je;case"pcm-s16be":return je;case"pcm-s24":return je;case"pcm-s24be":return je;case"pcm-s32":return je;case"pcm-s32be":return je;case"pcm-f32":return je;case"pcm-f32be":return je;case"pcm-f64":return je;case"pcm-f64be":return je}return null},gl={webvtt:"wvtt"},vl={webvtt:Dc},zn=t=>{N(t.length===3);let e=0;for(let i=0;i<3;i++)e<<=5,e+=t.charCodeAt(i)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Wi{constructor(e,i){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(i),e._writerAcquired=!0}start(){N(!this.started),this.target._start(),this.started=!0}write(e){N(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return N(this.started&&!this.finalized),this.target._flush()}async finalize(){N(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let i=this.getPos();if(i<this.trackedStart){if(i+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-i),i=0}const r=i+e.byteLength-this.trackedStart;let n=this.trackedWrites.byteLength;for(;n<r;)n*=2;if(n!==this.trackedWrites.byteLength){const s=new Uint8Array(n);s.set(this.trackedWrites,0),this.trackedWrites=s}this.trackedWrites.set(e,i-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,i+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const i={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,i}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class et extends Si{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,i){this.onwrite?.(e,i),this._emit("write",{start:e,end:i})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new bl(this,e)}}const Di=2**16,$i=2**32;class ri extends et{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(Di,{maxByteLength:$i})}catch{this._buffer=new ArrayBuffer(Di),this._supportsResize=!1}else this._buffer=new ArrayBuffer(Di);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let i=this._buffer.byteLength;for(;i<e;)i*=2;if(i!==this._buffer.byteLength){if(i>$i)throw new Error(`ArrayBuffer exceeded maximum size of ${$i} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(i);else{const r=new ArrayBuffer(i),n=new Uint8Array(r);n.set(this._bytes,0),this._buffer=r,this._bytes=n}}}_start(){}_write(e,i){this._ensureSize(i+e.byteLength),this._bytes.set(e,i),this._maxPos=Math.max(this._maxPos,i+e.byteLength),this._dispatchWrite(i,i+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,i){return this._bytes.slice(e,i)}}class bl extends et{constructor(e,i){super(),this._baseTarget=e,this._offset=i}_start(){}_write(e,i){this._baseTarget._write(e,this._offset+i),this._dispatchWrite(i,i+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}}class ji{constructor(e,i){if(this.rootPath=e,this.getTarget=i,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof i!="function")throw new TypeError("getTarget must be a function.")}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const He=57600,yl=2082844800,wl=t=>{const e={},i=t.track;return i.metadata.name!==void 0&&(e.name=i.metadata.name),e},me=(t,e,i=!0)=>{const r=t*e;return i?Math.round(r):r};class xl extends oc{constructor(e,i){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new ri,this.auxWriter=new Wi(this.auxTarget,!1),this.auxBoxWriter=new ei(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Ar(),this.creationTime=Math.floor(Date.now()/1e3)+yl,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=i,this.formatOptions={...i._options},this.isQuickTime=i instanceof Nn,this.isCmaf=i instanceof Un,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(i instanceof Un?1/0:1),this.auxWriter.start()}async start(){const e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(r=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":r instanceof ri),this.boxWriter=new ei(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof ri?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");const r=await this.output._getInitTarget(),n=new Wi(r,!0);n.start(),this.initWriter=n,this.initBoxWriter=new ei(n)}const i=this.output.tracks.some(r=>r.isVideoTrack()&&r.source._codec==="avc");{const r=this.initBoxWriter??this.boxWriter;if(N(r),this.formatOptions.onFtyp&&r.writer.startTrackingWrites(),r.writeBox(dc({isQuickTime:this.isQuickTime,holdsAvc:i,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){const{data:n,start:s}=r.writer.stopTrackingWrites();this.formatOptions.onFtyp(n,s)}this.ftypSize=r.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const r of this.output.tracks)if(r.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(N(this.writer),N(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ti(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(const r of this.output.tracks)r.isVideoTrack()&&r.metadata.decoderConfig?this.getVideoTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig}):r.isAudioTrack()&&r.metadata.decoderConfig&&this.getAudioTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig});e()}allTracksAreKnown(){for(const e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(i=>i.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(i=>i.type==="video"||i.type==="audio"?i.info.decoderConfig.codec:{webvtt:"wvtt"}[i.track.source._codec]);return $o({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(i=>i.type==="video"),hasAudio:this.trackDatas.some(i=>i.type==="audio"),codecStrings:e})}getVideoTrackData(e,i,r){const n=this.trackDatas.find(l=>l.track===e);if(n)return n;jr(r,e.source._codec),N(r),N(r.decoderConfig);const s={...r.decoderConfig};N(s.codedWidth!==void 0),N(s.codedHeight!==void 0);let a=!1;if(e.source._codec==="avc"&&!s.description){if(!i)throw new Error("No AVC description provided; you must therefore provide a priming packet.");const l=ao(i.data);if(!l)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");s.description=oo(l),a=!0}else if(e.source._codec==="hevc"&&!s.description){if(!i)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");const l=uo(i.data);if(!l)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");s.description=yo(l),a=!0}const o=Ma(1/(e.metadata.frameRate??He),1e6).den,c=s.displayAspectWidth,d=s.displayAspectHeight,f=c===void 0||d===void 0?{num:1,den:1}:Fr({num:c*s.codedHeight,den:d*s.codedWidth}),h=s.codec==="ap4h"||s.codec==="ap4x",y={muxer:this,track:e,type:"video",info:{width:s.codedWidth,height:s.codedHeight,pixelAspectRatio:f,decoderConfig:s,requiresAnnexBTransformation:a,hasAlphaChannel:h},timescale:o,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(y),this.trackDatas.sort((l,p)=>l.track.id-p.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),y}getAudioTrackData(e,i,r){const n=this.trackDatas.find(c=>c.track===e);if(n)return n;qr(r,e.source._codec),N(r),N(r.decoderConfig);const s={...r.decoderConfig};let a=!1;if(e.source._codec==="aac"&&!s.description){if(!i)throw new Error("No AAC description provided; you must therefore provide a priming packet.");const c=nn(It.tempFromBytes(i.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const d=Lr[c.samplingFrequencyIndex],f=Ur[c.channelConfiguration];if(d===void 0||f===void 0)throw new Error("Invalid ADTS frame header.");s.description=ja({objectType:c.objectType,sampleRate:d,numberOfChannels:f}),a=!0}if(!i){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}const o={muxer:this,track:e,type:"audio",info:{numberOfChannels:r.decoderConfig.numberOfChannels,sampleRate:r.decoderConfig.sampleRate,decoderConfig:s,requiresPcmTransformation:!this.isFragmented&&dt.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:a,primingPacket:i},timescale:s.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1};return this.trackDatas.push(o),this.trackDatas.sort((c,d)=>c.track.id-d.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}getSubtitleTrackData(e,i){const r=this.trackDatas.find(s=>s.track===e);if(r)return r;to(i),N(i),N(i.config);const n={muxer:this,track:e,type:"subtitle",info:{config:i.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(n),this.trackDatas.sort((s,a)=>s.track.id-a.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),n}async addEncodedVideoPacket(e,i,r){const n=await this.mutex.acquire();try{const s=this.getVideoTrackData(e,i,r);let a=i.data;if(s.info.requiresAnnexBTransformation){const c=[...Bt(a)].map(d=>a.subarray(d.offset,d.offset+d.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");a=so(c,4)}this.validateTimestamp(s.track,i.timestamp,i.type==="key");const o=this.createSampleForTrack(s,a,i.timestamp,i.duration,i.type);await this.registerSample(s,o)}finally{n()}}async addEncodedAudioPacket(e,i,r){const n=await this.mutex.acquire();try{const s=this.getAudioTrackData(e,i,r);let a=i.data;if(s.info.requiresAdtsStripping){const f=nn(It.tempFromBytes(a));if(!f)throw new Error("Expected ADTS frame, didn't get one.");const h=f.crcCheck===null?jo:qo;a=a.subarray(h)}this.validateTimestamp(s.track,i.timestamp,i.type==="key");let o=i.timestamp,c=i.duration;if(s.info.requiresPcmTransformation){const h=vt(s.info.decoderConfig.codec).sampleSize*s.info.numberOfChannels;if(c=a.byteLength/h/s.info.sampleRate,s.info.expectedNextPcmPacketTimestamp!==null){const y=o-s.info.expectedNextPcmPacketTimestamp;if(y<.01)o=s.info.expectedNextPcmPacketTimestamp;else{const l=await this.padWithSilence(s,s.info.expectedNextPcmPacketTimestamp,y);o=s.info.expectedNextPcmPacketTimestamp+l}}s.info.expectedNextPcmPacketTimestamp=o+c}const d=this.createSampleForTrack(s,a,o,c,i.type);await this.registerSample(s,d)}finally{n()}}async padWithSilence(e,i,r){const n=me(r,e.timescale);if(r=n/e.timescale,n>0){const{sampleSize:s,silentValue:a}=vt(e.info.decoderConfig.codec),o=n*e.info.numberOfChannels,c=new Uint8Array(s*o).fill(a),d=this.createSampleForTrack(e,new Uint8Array(c.buffer),i,r,"key");await this.registerSample(e,d)}return r}async addSubtitleCue(e,i,r){const n=await this.mutex.acquire();try{const s=this.getSubtitleTrackData(e,r);this.validateTimestamp(s.track,i.timestamp,!0),e.source._codec==="webvtt"&&(s.cueQueue.push(i),await this.processWebVTTCues(s,i.timestamp))}finally{n()}}async processWebVTTCues(e,i){for(;e.cueQueue.length>0;){const r=new Set([]);for(const d of e.cueQueue)N(d.timestamp<=i),N(e.lastCueEndTimestamp<=d.timestamp+d.duration),r.add(Math.max(d.timestamp,e.lastCueEndTimestamp)),r.add(d.timestamp+d.duration);const n=[...r].sort((d,f)=>d-f),s=n[0],a=n[1]??s;if(i<a)break;if(e.lastCueEndTimestamp<s){this.auxWriter.seek(0);const d=al();this.auxBoxWriter.writeBox(d);const f=this.auxTarget._getSlice(0,this.auxWriter.getPos()),h=this.createSampleForTrack(e,f,e.lastCueEndTimestamp,s-e.lastCueEndTimestamp,"key");await this.registerSample(e,h),e.lastCueEndTimestamp=s}this.auxWriter.seek(0);for(let d=0;d<e.cueQueue.length;d++){const f=e.cueQueue[d];if(f.timestamp>=a)break;wn.lastIndex=0;const h=wn.test(f.text),y=f.timestamp+f.duration;let l=e.cueToSourceId.get(f);if(l===void 0&&a<y&&(l=e.nextSourceId++,e.cueToSourceId.set(f,l)),f.notes){const m=cl(f.notes);this.auxBoxWriter.writeBox(m)}const p=ol(f.text,h?s:null,f.identifier??null,f.settings??null,l??null);this.auxBoxWriter.writeBox(p),y===a&&e.cueQueue.splice(d--,1)}const o=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,o,s,a-s,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=a}}createSampleForTrack(e,i,r,n,s){return{timestamp:r,decodeTimestamp:r,duration:n,data:i,size:i.byteLength,type:s,timescaleUnitsToNextSample:me(n,e.timescale)}}processTimestamps(e,i){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){this.isFragmented||(e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp);let n=0;for(let s=0;s<e.timestampProcessingQueue.length;s++){const a=e.timestampProcessingQueue[s],o=me(a.duration,e.timescale);n+=o}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:n,sampleDelta:1});else{const s=Ne(e.timeToSampleTable);s.sampleCount+=n}e.timestampProcessingQueue.length=0;return}const r=e.timestampProcessingQueue.map(n=>n.timestamp).sort((n,s)=>n-s);this.isFragmented||(e.startTimestampOffset??=r[0]);for(let n=0;n<e.timestampProcessingQueue.length;n++){const s=e.timestampProcessingQueue[n];s.decodeTimestamp=r[n];const a=me(s.timestamp-s.decodeTimestamp,e.timescale),o=me(s.duration,e.timescale);if(e.lastTimescaleUnits!==null){N(e.lastSample);const c=me(s.decodeTimestamp,e.timescale,!1),d=Math.round(c-e.lastTimescaleUnits);if(N(d>=0),e.lastTimescaleUnits+=d,e.lastSample.timescaleUnitsToNextSample=d,!this.isFragmented){let f=Ne(e.timeToSampleTable);if(N(f),f.sampleCount===1){f.sampleDelta=d;const y=e.timeToSampleTable[e.timeToSampleTable.length-2];y&&y.sampleDelta===d&&(y.sampleCount++,e.timeToSampleTable.pop(),f=y)}else f.sampleDelta!==d&&(f.sampleCount--,e.timeToSampleTable.push(f={sampleCount:1,sampleDelta:d}));f.sampleDelta===o?f.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:o});const h=Ne(e.compositionTimeOffsetTable);N(h),h.sampleCompositionTimeOffset===a?h.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:a})}}else e.lastTimescaleUnits=me(s.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:o}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:a}));e.lastSample=s}if(e.timestampProcessingQueue.length=0,N(e.lastSample),N(e.lastTimescaleUnits!==null),i!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){N(i.type==="key");const n=me(i.timestamp,e.timescale,!1),s=Math.round(n-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=s}}async registerSample(e,i){i.type==="key"&&this.processTimestamps(e,i),e.timestampProcessingQueue.push(i),this.isFragmented?(e.sampleQueue.push(i),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,i):await this.addSampleToTrack(e,i)}async addSampleToTrack(e,i){if(!this.isFragmented&&(e.samples.push(i),this.fastStart==="reserve")){const n=e.track.metadata.maximumPacketCount;if(N(n!==void 0),e.samples.length>n)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${n}). Either add less packets or increase the maximum packet count.`)}let r=!1;if(!e.currentChunk)r=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,i.timestamp);const n=i.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const s=this.trackDatas.every(a=>{if(e===a)return i.type==="key";const o=a.sampleQueue[0];return o?o.type==="key":a.closed});n>=this.minimumFragmentDuration&&s&&i.timestamp>this.maxWrittenTimestamp&&(r=!0,await this.finalizeFragment())}else r=n>=.5}r&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:i.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),N(e.currentChunk),e.currentChunk.samples.push(i),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,i.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,i.timestamp+i.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,i.timestamp))}async finalizeCurrentChunk(e){if(N(!this.isFragmented),N(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let i=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(i=e.currentChunk.samples.reduce((r,n)=>r+me(n.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Ne(e.compactlyCodedChunkTable).samplesPerChunk!==i)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:i}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const r of e.currentChunk.samples)N(r.data),this.writer.write(r.data),r.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(N(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let i=null,r=1/0;for(const s of this.trackDatas){if(!e&&s.sampleQueue.length===0&&!s.closed)break e;s.sampleQueue.length>0&&s.sampleQueue[0].timestamp<r&&(i=s,r=s.sampleQueue[0].timestamp)}if(!i)break;const n=i.sampleQueue.shift();await this.addSampleToTrack(i,n)}}async finalizeFragment(e=!this.isCmaf){if(N(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;const l=this.initBoxWriter??this.boxWriter;N(l),this.formatOptions.onMoov&&l.writer.startTrackingWrites(),this.ensureOneEnabledTrack();const p=Rt(this);if(l.writeBox(p),this.formatOptions.onMoov){const{data:m,start:v}=l.writer.stopTrackingWrites();this.formatOptions.onMoov(m,v)}if(this.isCmaf){N(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new ei(this.writer);const m=this.boxWriter.measureBox(En()),v=this.boxWriter.measureBox(Cn(this,0));this.segmentHeaderSize=m+v,this.writer.seek(this.segmentHeaderSize)}}N(this.writer),N(this.boxWriter);const i=this.trackDatas.filter(l=>l.currentChunk);if(i.length===0){e&&await this.writer.flush();return}const r=this.nextFragmentNumber++,n=An(r,i),s=this.writer.getPos(),a=s+this.boxWriter.measureBox(n);let o=a+Pi,c=1/0;for(let l=0;l<i.length;l++){const p=i[l];p.currentChunk.offset=o,p.currentChunk.moofOffset=s,p.currentChunk.trafIndex=l;for(const m of p.currentChunk.samples)o+=m.size;c=Math.min(c,p.currentChunk.startTimestamp)}const d=o-a,f=d>=2**32;if(f)for(const l of i)l.currentChunk.offset+=rn-Pi;this.formatOptions.onMoof&&this.writer.startTrackingWrites();const h=An(r,i);if(this.boxWriter.writeBox(h),this.formatOptions.onMoof){const{data:l,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(l,p,c)}N(this.writer.getPos()===a),this.formatOptions.onMdat&&this.writer.startTrackingWrites();const y=ti(f);y.size=d,this.boxWriter.writeBox(y),this.writer.seek(a+(f?rn:Pi));for(const l of i)for(const p of l.currentChunk.samples)this.writer.write(p.data),p.data=null;if(this.formatOptions.onMdat){const{data:l,start:p}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(l,p)}for(const l of i)l.finalizedChunks.push(l.currentChunk),this.finalizedChunks.push(l.currentChunk),l.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,i){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,i)):e.sampleQueue.push(i)}async createFastStartReserveMdat(){N(this.writer),N(this.boxWriter),this.ensureOneEnabledTrack();const e=Rt(this),r=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;N(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ti(!0),this.boxWriter.writeBox(this.mdat);for(const n of this.trackDatas){for(const s of n.sampleQueue)await this.addSampleToTrack(n,s);n.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){N(this.fastStart==="reserve");let e=0;for(const i of this.trackDatas){const r=i.track.metadata.maximumPacketCount;N(r!==void 0),e+=8*Math.ceil(2/3*r),e+=4*r,e+=8*Math.ceil(2/3*r),e+=12*Math.ceil(2/3*r),e+=4*r,e+=8*r}return e}async onTrackClose(e){const i=await this.mutex.acquire(),r=this.trackDatas.find(n=>n.track===e);r&&(r.closed=!0,r.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(r,1/0),this.processTimestamps(r)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),i()}ensureOneEnabledTrack(){for(const e of["video","audio","subtitle"]){const i=this.trackDatas.filter(n=>n.type===e);if(i.length===0)continue;if(!i.some(n=>n.track.metadata.disposition?.default!==!1)){const n=i[0];n.track.metadata.disposition={...n.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){N(this.isFragmented);const e=await this.mutex.acquire();try{for(const i of this.trackDatas)i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(const i of this.trackDatas)i.closed=!0,i.type==="subtitle"&&i.track.source._codec==="webvtt"&&await this.processWebVTTCues(i,1/0),this.processTimestamps(i);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(const i of this.trackDatas)if(await this.finalizeCurrentChunk(i),i.startTimestampOffset!==null)for(let r=0;r<i.samples.length;r++){const n=i.samples[r];n.timestamp-=i.startTimestampOffset,n.decodeTimestamp-=i.startTimestampOffset}if(N(this.writer),N(this.boxWriter),this.fastStart==="in-memory"){this.mdat=ti(!1);let i;for(let n=0;n<2;n++){const s=Rt(this),a=this.boxWriter.measureBox(s);i=this.boxWriter.measureBox(this.mdat);let o=this.writer.getPos()+a+i;for(const c of this.finalizedChunks){c.offset=o;for(const{data:d}of c.samples)N(d),o+=d.byteLength,i+=d.byteLength}if(o<2**32)break;i>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();const r=Rt(this);if(this.boxWriter.writeBox(r),this.formatOptions.onMoov){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(n,s)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=i,this.boxWriter.writeBox(this.mdat);for(const n of this.finalizedChunks)for(const s of n.samples)N(s.data),this.writer.write(s.data),s.data=null;if(this.formatOptions.onMdat){const{data:n,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(n,s)}}else if(this.isFragmented)if(this.isCmaf){const i=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(En()),this.boxWriter.writeBox(Cn(this,i))}else{const i=this.writer.getPos(),r=rl(this.trackDatas);this.boxWriter.writeBox(r);const n=this.writer.getPos()-i;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(n)}else{N(this.mdat);const i=this.boxWriter.offsets.get(this.mdat);N(i!==void 0);const r=this.writer.getPos()-i;if(this.mdat.size=r,this.mdat.largeSize=r>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){const{data:s,start:a}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(s,a)}const n=Rt(this);if(this.fastStart==="reserve"){N(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);const s=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(fc(s))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(n);if(this.formatOptions.onMoov){const{data:s,start:a}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(s,a)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var _l=function(t,e,i){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,n;if(i){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],i&&(n=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");n&&(r=function(){try{n.call(this)}catch(s){return Promise.reject(s)}}),t.stack.push({value:e,dispose:r,async:i})}else i&&t.stack.push({async:!0});return e},kl=(function(t){return function(e){function i(a){e.error=e.hasError?new t(a,e.error,"An error was suppressed during disposal."):a,e.hasError=!0}var r,n=0;function s(){for(;r=e.stack.pop();)try{if(!r.async&&n===1)return n=0,e.stack.push(r),Promise.resolve().then(s);if(r.dispose){var a=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(a).then(s,function(o){return i(o),s()})}else n|=1}catch(o){i(o)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return s()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,i){var r=new Error(i);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});class qi{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class Fn extends qi{constructor(e){if(super(),this._connectedTrack=null,!Qe.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${Qe.join(", ")}.`);this._codec=e}}const On=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};class Tl{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,i){this.source=e,this.encodingConfig=i,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new za,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,i,r){const n=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();const s=this.encodingConfig,a=s.sizeChangeBehavior??"deny";let o=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(o=!0,a==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(s.transform?.width!==void 0||s.transform?.height!==void 0||s.transform?.rotate!==void 0||s.transform?.crop!==void 0||s.transform?.force===!0||o&&a!=="passThrough"){let h=s.transform?.width,y=s.transform?.height,l=s.transform?.fit??"fill";o&&a!=="passThrough"&&(N(this.outputWidth),N(this.outputHeight),N(a!=="deny"),h=this.outputWidth,y=this.outputHeight,l=a);const p=await e.transform({width:h,height:y,roundDimensionsTo:2,crop:s.transform?.crop,rotate:s.transform?.rotate,fit:l,alpha:s.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=p.displayWidth,this.outputHeight=p.displayHeight),i&&e.close(),e=p,i=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);const f=s.transform?.frameRate;if(f!==void 0){const h=e.timestamp+e.duration,y=Rr(e.timestamp,f);if(this.frameRateLastSample!==null)if(y<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=h;return}else await this.padFrameRate(y,r);e===n&&(e=e.clone(),i=!0),e.setTimestamp(y),e.setDuration(1/f),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=y,this.frameRateLastEndTimestamp=h}await this.processAndEncode(e,r)}finally{i&&e.close()}}async processAndEncode(e,i){const r=this.encodingConfig;let n;if(r.transform?.process){let s=r.transform.process(e);if(s instanceof Promise&&(s=await s),s===null)return;Array.isArray(s)||(s=[s]);const a=[];try{for(const o of s)o instanceof Ee?a.push(o):typeof VideoFrame<"u"&&o instanceof VideoFrame?a.push(new Ee(o)):a.push(new Ee(o,{timestamp:e.timestamp,duration:e.duration}))}catch(o){for(const c of a)c!==e&&c.close();for(const c of s)(c instanceof Ee&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw o}n=a}else n=[e];try{for(const s of n){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(s),this.encoderInitialized||await this.ensureEncoderPromise),N(this.encoderInitialized),this.closed)break;const a=this.encodingConfig.keyFrameInterval??2,o=Math.floor(s.timestamp/a),c={...this.defaultEncodeOptions,...s.encodeOptions,...i},d={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:a===0||o!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=o,this.encodingConfig.onEncodedSample?.(s),this.customEncoder){this.customEncoderQueueSize++;const f=s.clone(),h=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(f,d)).catch(y=>this.setError(y)).finally(()=>{this.customEncoderQueueSize--,f.close()});this.customEncoderQueueSize>=4&&await h}else{N(this.encoder);const f=s.toVideoFrame(),h=Br(this.preciseTimings,f.timestamp,l=>l.microsecondTimestamp),y=h!==-1?this.preciseTimings[h]:null;if(y&&y.microsecondTimestamp===f.timestamp?(y.timestamp!==s.timestamp&&(y.timestampIsValid=!1),y.duration!==s.duration&&(y.durationIsValid=!1)):(this.preciseTimings.splice(h+1,0,{microsecondTimestamp:f.timestamp,timestamp:s.timestamp,duration:s.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!f.format&&!f.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(f,d)}finally{f.close()}}else{this.splitter||(this.splitter=new Sl);const{colorFrame:p,alphaFrame:m}=await this.splitter.split(f);this.alphaFrameQueue.push(m);try{this.encoder.encode(p,d)}finally{p.close()}}else try{this.encoder.encode(f,d)}finally{f.close()}this.encoder.encodeQueueSize>=4&&await new Promise(l=>this.encoder.addEventListener("dequeue",l,{once:!0}))}await this.lastMuxerPromise}}finally{for(const s of n)s!==e&&s.close()}}async padFrameRate(e,i){const r=this.encodingConfig.transform.frameRate;N(this.frameRateLastSample);const n=Math.round((e-this.frameRateLastTimestamp)*r);for(let s=1;s<n;s++){const a={stack:[],error:void 0,hasError:!1};try{const o=_l(a,this.frameRateLastSample.clone(),!1);o.setTimestamp(this.frameRateLastTimestamp+s/r),o.setDuration(1/r),await this.processAndEncode(o,i)}catch(o){a.error=o,a.hasError=!0}finally{kl(a)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const i=bn(this.encodingConfig.quality,this.encodingConfig.bitrate);N(i!==void 0);const r=mn({...this.encodingConfig,quality:i,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate});let n=null,s;for(const o of r){const c=o.config;if(this.encodingConfig.onEncoderConfig?.(c),s=yn.find(f=>f.supports(this.encodingConfig.codec,c)),s){n=o;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){n=o;break}}catch{}}if(!n){if(typeof VideoEncoder>"u")throw new Error("VideoEncoder is not supported by this browser.");const o=r[0].config,c=r.map(({config:d,quantizer:f})=>f!==null?`quantizer ${f}`:`${d.bitrate} bps`);throw new Error(`This specific encoder configuration (${o.codec}, ${c.join(" / ")}, ${o.width}x${o.height}, hardware acceleration: ${o.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`)}const a=n.config;if(n.quantizer!==null&&(this.defaultEncodeOptions=vn(this.encodingConfig.codec,n.quantizer)),s)this.customEncoder=new s,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=a,this.customEncoder.onPacket=(o,c)=>{if(!(o instanceof ft))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");On(this.source._connectedTrack,o),this.encodingConfig.onEncodedPacket?.(o,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,o,c).catch(d=>{this.setError(d)})},this.customEncoder.onError=o=>{this.setError(o)},await this.customEncoder.init();else{const o=[],c=[];let d=0,f=0;const h=(l,p,m)=>{const v={};if(p){const E=new Uint8Array(p.byteLength);p.copyTo(E),v.alpha=E}let b=ft.fromEncodedChunk(l,v);const w=Br(this.preciseTimings,l.timestamp,E=>E.microsecondTimestamp),T=w!==-1?this.preciseTimings[w]:null;let S=null;this.emittedEncoderPackets===0&&b.type==="delta"&&m?.decoderConfig&&(S=_o(this.encodingConfig.codec,m.decoderConfig,b.data)),(T&&T.microsecondTimestamp===l.timestamp||S!==null)&&(b=b.clone({timestamp:T?.timestampIsValid?T.timestamp:void 0,duration:T?.durationIsValid?T.duration:void 0,type:S??void 0})),On(this.source._connectedTrack,b),this.encodingConfig.onEncodedPacket?.(b,m),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,b,m).catch(E=>{this.setError(E)}),this.emittedEncoderPackets++},y=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(l,p)=>{if(!this.alphaEncoder){h(l,null,p);return}const m=this.alphaFrameQueue.shift();N(m!==void 0),m?(this.alphaEncoder.encode(m,{...this.defaultEncodeOptions,keyFrame:l.type==="key"}),f++,m.close(),o.push({chunk:l,meta:p})):f===0?h(l,null,p):(c.push(d+f),o.push({chunk:l,meta:p}))},error:l=>{l.stack=y,this.setError(l)}}),this.encoder.configure(a),this.encodingConfig.alpha==="keep"){const l=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(p,m)=>{f--;const v=o.shift();for(N(v!==void 0),h(v.chunk,p,v.meta),d++;c.length>0&&c[0]===d;){c.shift();const b=o.shift();N(b!==void 0),h(b.chunk,null,b.meta)}},error:p=>{p.stack=l,this.setError(p)}}),this.alphaEncoder.configure(a)}}N(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){const i=this.encodingConfig.transform.frameRate,r=Rr(this.frameRateLastEndTimestamp,i);await this.padFrameRate(r)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await Ua(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(i=>this.setError(i)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(i=>i?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}}let Vi=null;class Sl{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!Vi){const n=new Blob([`(${El.toString()})()`],{type:"application/javascript"});Vi=URL.createObjectURL(n)}this.worker=new Worker(Vi),this.worker.addEventListener("message",n=>{const s=n.data,a=this.pendingRequests.get(s.id);a&&(this.pendingRequests.delete(s.id),"error"in s?a.reject(new Error(s.error)):a.resolve({colorFrame:s.colorFrame,alphaFrame:s.alphaFrame}))}),this.worker.addEventListener("error",n=>{const s=new Error(n.message||"Color/alpha splitter worker error.");for(const a of this.pendingRequests.values())a.reject(s);this.pendingRequests.clear()})}const i=this.nextRequestId++,r=Ar();return this.pendingRequests.set(i,r),this.worker.postMessage({id:i,sourceFrame:e},{transfer:[e]}),r.promise}close(){this.worker?.terminate(),this.worker=null;const e=new Error("Color/alpha splitter closed.");for(const i of this.pendingRequests.values())i.reject(e);this.pendingRequests.clear()}}const El=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",s=>{const{id:a,sourceFrame:o}=s.data;e=e.then(async()=>{try{const{colorFrame:c,alphaFrame:d}=await i(o);self.postMessage({id:a,colorFrame:c,alphaFrame:d},{transfer:[c,d]})}catch(c){self.postMessage({id:a,error:c.message})}finally{o.close()}})});const i=async s=>{const a=s.format;if(!a)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");const o=s.allocationSize();if((!t||t.byteLength!==o)&&(t=new Uint8Array(o)),await s.copyTo(t),a==="RGBA"||a==="BGRA")return r(t,a,s);if(a==="I420A"||a==="I420AP10"||a==="I420AP12"||a==="I422A"||a==="I422AP10"||a==="I422AP12"||a==="I444A"||a==="I444AP10"||a==="I444AP12")return n(t,a,s);throw new Error(`CPU color/alpha splitting does not support format '${a}'.`)},r=(s,a,o)=>{const c=o.visibleRect?.width??o.codedWidth,d=o.visibleRect?.height??o.codedHeight,f=c*d,h=Math.ceil(c/2),y=Math.ceil(d/2),l=f+h*y*2,p=new Uint8Array(l);for(let w=0,T=3;w<f;w++,T+=4)p[w]=s[T];p.fill(128,f);const m=new VideoFrame(s,{format:a==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:d,timestamp:o.timestamp,duration:o.duration??void 0}),v={format:"I420",codedWidth:c,codedHeight:d,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[p.buffer]},b=new VideoFrame(p,v);return{colorFrame:m,alphaFrame:b}},n=(s,a,o)=>{const c=o.visibleRect?.width??o.codedWidth,d=o.visibleRect?.height??o.codedHeight,f=a.includes("P10"),h=a.includes("P12"),y=f||h?2:1;let l,p;a.startsWith("I420")?(l=Math.ceil(c/2),p=Math.ceil(d/2)):a.startsWith("I422")?(l=Math.ceil(c/2),p=d):(l=c,p=d);const m=c*d,v=l*p,b=m*y,w=v*y,T=m*y,S=b+w*2,E=a.replace("A",""),O=Math.ceil(c/2),R=Math.ceil(d/2),L=O*R,P=L*y,q=T+2*P,Q=new Uint8Array(q),_=S;Q.set(s.subarray(_,_+T),0);const z=T,g=f?512:h?2048:128;y===1?Q.fill(g,z):new Uint16Array(Q.buffer,z,2*L).fill(g);const H=f?"I420P10":h?"I420P12":"I420",ee=new VideoFrame(s.subarray(0,S),{format:E,codedWidth:c,codedHeight:d,timestamp:o.timestamp,duration:o.duration??void 0}),W={format:H,codedWidth:c,codedHeight:d,timestamp:o.timestamp,duration:o.duration??void 0,transfer:[Q.buffer]},ae=new VideoFrame(Q,W);return{colorFrame:ee,alphaFrame:ae}}};class Cl extends Fn{constructor(e){tc(e),super(e.codec),this._encoder=new Tl(this,e)}add(e,i){if(!(e instanceof Ee))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,i)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Bl extends qi{constructor(e){if(super(),this._connectedTrack=null,!Kt.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Kt.join(", ")}.`);this._codec=e}}class Al extends qi{constructor(e){if(super(),this._connectedTrack=null,!Et.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Et.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Hn{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>Qe.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Kt.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Et.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}}class Gi extends Hn{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new xl(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}}class Ln extends Gi{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Qe,...Ei,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Et]}_codecUnsupportedHint(e){return new Nn().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Un extends Gi{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...Qe,...Ei,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Et]}}class Nn extends Gi{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...Qe,...Kt]}_codecUnsupportedHint(e){return new Ln().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Wn=["video","audio","subtitle"];class Mt{constructor(e,i,r,n,s){this.id=e,this.output=i,this.type=r,this.source=n,this.metadata=s}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof Mt))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;const i=Or(this.metadata.group),r=Or(e.metadata.group);for(const n of i)if(this.type!==e.type&&r.some(o=>n===o)||r.some(o=>n._pairedGroups.has(o)))return!0;return!1}}class Pl extends Mt{constructor(e,i,r,n){super(e,i,"video",r,n)}}class Il extends Mt{constructor(e,i,r,n){super(e,i,"audio",r,n)}}class Rl extends Mt{constructor(e,i,r,n){super(e,i,"subtitle",r,n)}}class zt{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof zt))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}}const Xi=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!Ra(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&$a(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.group!==void 0&&!(t.group instanceof zt)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof zt))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")};class Ml extends Si{get target(){const e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);const i=this._getRootTarget();if(i instanceof Promise)throw new TypeError(e);return i}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new zt,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Cr,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Hn))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof et||e.target instanceof ji))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof et&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof et)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof et&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){N(this._target instanceof ji);const i=this._target.getTarget(e),r=n=>{if(!(n instanceof et))throw new TypeError("getTarget must return a Target.");return n};return i instanceof Promise?i.then(r):r(i)}async _getTarget(e){N(this._target instanceof ji);const i=await this._getTargetValidated(e);return this._emit("target",{target:i,request:e,isRoot:e.isRoot}),this.state==="canceled"?await i._close():this._rememberTarget(i),i}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(N(this._initTarget!==null),this._initTarget instanceof et)return this._initTarget;const e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof et)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;const e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},i=this._getTargetValidated(e),r=n=>(this.state==="canceled"?n._close():this._rememberTarget(n),this._emit("target",{target:n,request:e,isRoot:!0}),this._rootTarget=n,n);return i instanceof Promise?this._rootTargetPromise=i.then(r):r(i)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{const i=await this._getRootTarget(),r=new Wi(i,typeof e=="boolean"?e:e(i));return r.start(),r})()}addVideoTrack(e,i={}){if(!(e instanceof Fn))throw new TypeError("source must be a VideoSource.");if(Xi(i),i.rotation!==void 0&&![0,90,180,270].includes(i.rotation))throw new TypeError(`Invalid video rotation: ${i.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&i.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(i.frameRate!==void 0&&(!Number.isFinite(i.frameRate)||i.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.frameRate}. Must be a positive number.`);if(i.decoderConfig!==void 0&&jr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof ft))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Pl(this.tracks.length+1,this,e,r))}addAudioTrack(e,i={}){if(!(e instanceof Bl))throw new TypeError("source must be an AudioSource.");if(Xi(i),i.decoderConfig!==void 0&&qr({decoderConfig:i.decoderConfig},e._codec),i.primingPacket!==void 0){if(!(i.primingPacket instanceof ft))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(i.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Il(this.tracks.length+1,this,e,r))}addSubtitleTrack(e,i={}){if(!(e instanceof Al))throw new TypeError("source must be a SubtitleSource.");Xi(i);const r={...i};return r.group??=this.defaultTrackGroup,this._addTrack(new Rl(this.tracks.length+1,this,e,r))}setMetadataTags(e){if(Da(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");const i=this.format.getSupportedTrackCounts(),r=this.tracks.reduce((a,o)=>a+(o.type===e.type?1:0),0),n=i[e.type].max;if(r===n)throw new Error(n===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${n} ${e.type} track${n===1?"":"s"}.`);const s=i.total.max;if(this.tracks.length===s)throw new Error(`${this.format._name} does not support more than ${s} tracks${s===1?"":"s"} in total.`);if(e.isVideoTrack()){const a=this.format.getSupportedVideoCodecs();if(a.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!a.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${a.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){const a=this.format.getSupportedAudioCodecs();if(a.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!a.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${a.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){const a=this.format.getSupportedSubtitleCodecs();if(a.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!a.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${a.map(o=>`'${o}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){const e=this.format.getSupportedTrackCounts();for(const r of Wn){const n=this.tracks.reduce((a,o)=>a+(o.type===r?1:0),0),s=e[r].min;if(n<s)return!1}const i=e.total.min;return!(this.tracks.length<i)}async start(){const e=this.format.getSupportedTrackCounts();for(const r of Wn){const n=this.tracks.reduce((a,o)=>a+(o.type===r?1:0),0),s=e[r].min;if(n<s)throw new Error(s===e[r].max?`${this.format._name} requires exactly ${s} ${r} track${s===1?"":"s"}.`:`${this.format._name} requires at least ${s} ${r} track${s===1?"":"s"}.`)}const i=e.total.min;if(this.tracks.length<i)throw new Error(i===e.total.max?`${this.format._name} requires exactly ${i} track${i===1?"":"s"}.`:`${this.format._name} requires at least ${i} track${i===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(pe._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";const r=this._mutex.acquire();try{await this._muxer.start();const n=this.tracks.map(s=>s.source._start());await Promise.all(n)}finally{(await r)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return pe._warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&pe._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!0));await Promise.all(i),await Promise.all([...this._unfinalizedTargets].map(r=>r._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(pe._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire();try{const i=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(i),await this._muxer.finalize(),this._rootWriterPromise){const r=await this._rootWriterPromise;r.finalized||(await r.flush(),await r.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}finally{await Promise.all([...this._unfinalizedTargets].map(i=>i._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}}const zl={lot:"marsh",xerox:"paper",tank:"oil",chapel:"cave",lamp:"stars"},Fl=new Set(["window"]);function Dn(t){return!Fl.has(t.typeId)}const Ol=new Set(["bitmap","video","audio","pcm","objectUrl","frozenFrame"]);function Hl(t){const e=JSON.parse(JSON.stringify(t,(i,r)=>{if(!Ol.has(i))return r}));return JSON.stringify(e,null,2)}function Ll(t){const e=JSON.parse(t);if(!e||e.app!=="phosphene"||e.version!==1)throw new Error("Not a Phosphene v1 project file");return e.sources=(e.sources??[]).map(i=>Ul(i)),e.layers=e.layers??[],e.keyframes=e.keyframes??[],e.presets=e.presets??[],e.exportSettings&&e.exportSettings.loopClose===void 0&&(e.exportSettings.loopClose=!0),e.sources=e.sources.map(i=>{const r=zl[i.generator??""];return r?{...i,generator:r}:i}),e.layers=e.layers.map(i=>({...i,effects:(i.effects??[]).filter(Dn)})),e.presets=e.presets.map(i=>({...i,data:i.data?{...i.data,layers:(i.data.layers??[]).map(r=>({...r,effects:(r.effects??[]).filter(Dn)}))}:i.data})),e}function Ul(t){return{...t,bitmap:null,video:null,audio:null,pcm:null,objectUrl:null,frozenFrame:null}}function Nl(t,e){const i=new Blob([e],{type:"application/json"});bt(t,i)}function bt(t,e){const i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1500)}const Zi=[{id:"16:9",label:"16:9",rw:16,rh:9},{id:"4:3",label:"4:3",rw:4,rh:3},{id:"3:4",label:"3:4",rw:3,rh:4},{id:"1:1",label:"1:1",rw:1,rh:1},{id:"9:16",label:"9:16",rw:9,rh:16},{id:"5:4",label:"5:4",rw:5,rh:4},{id:"4:5",label:"4:5",rw:4,rh:5},{id:"21:9",label:"21:9",rw:21,rh:9}];function $n(t,e,i=1280){const r=i/Math.max(t,e,1e-4);return{width:Ue(t*r),height:Ue(e*r)}}function Wl(t,e){const i=t/Math.max(e,1);let r="16:9",n=1/0;for(const s of Zi){const a=Math.abs(i-s.rw/s.rh);a<n&&(n=a,r=s.id)}return r}function Dl(t,e,i=1280){if(t<2||e<2)return $n(16,9,i);const r=Math.max(t,e),n=i/r;return{width:Ue(t*n),height:Ue(e*n)}}function $l(t,e){if(e<8)return 0;const i=Math.max(2,Math.round(e*.12)),r=e-i;return t<r?0:(t-r+1)/i}const jl=960,ql=1920;function Ki(t,e=!1){const i=e?jl:ql;return lr(t.exportSettings.width,t.exportSettings.height,i,i)}async function Vl(t,e,i){const{width:r,height:n,format:s,quality:a,filename:o}=e.exportSettings,c=s==="jpg"?"image/jpeg":"image/png",d=await t.capture(e,i,Ue(r),Ue(n),c,a);bt(`${o}.${s==="jpg"?"jpg":"png"}`,d)}async function Gl(t,e,i){const{fps:r,duration:n,filename:s,quality:a}=e.exportSettings,{width:o,height:c}=Ki(e,!1),d=Math.max(1,Math.round(n*r)),f=new ka,h=f.folder(s)??f,y=document.createElement("canvas");for(let p=0;p<d;p++){const m=p/r;i?.(p,d),t.paintFrame(e,m,o,c,y);const v=await Yl(y,"image/png",a);h.file(`${s}_${String(p).padStart(5,"0")}.png`,await v.arrayBuffer()),await Qi()}const l=await f.generateAsync({type:"blob"});bt(`${s}_sequence.zip`,l)}async function jn(t,e,i,r=!1){const n=await qn(t,e,Kl(),i,r);bt(`${e.exportSettings.filename}.webm`,n)}async function Xl(t,e,i,r=!1){try{return await Zl(t,e,i,r),"mp4 clip saved"}catch(n){const s=Ql();if(s){const o=await qn(t,e,s,i,r);return bt(`${e.exportSettings.filename}.mp4`,o),"mp4 clip saved"}return await jn(t,e,i,r),`MP4 not available (${n instanceof Error?n.message:"MP4 encoder unavailable"}) — saved WebM instead`}}async function Zl(t,e,i,r=!1){if(typeof VideoEncoder>"u")throw new Error("this browser has no video encoder");const n=Math.min(24,Math.max(12,e.exportSettings.fps||24)),s=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:a,height:o}=Ki(e,r),c=new ot({bitrate:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),d=new Ln({fastStart:"in-memory"}),h=await nc(["avc","hevc"].filter(w=>d.getSupportedVideoCodecs().includes(w)),{width:a,height:o,quality:c});if(!h)throw new Error("this browser cannot encode H.264");const y=new ri,l=new Ml({format:d,target:y}),p=new Cl({codec:h,quality:c,keyFrameInterval:1});l.addVideoTrack(p,{frameRate:n}),t.resetTemporal();const m=document.createElement("canvas");await l.start();try{const w=Math.max(1,Math.round(s*n)),T=1/n,S=e.exportSettings.loopClose!==!1;let E=null;for(let O=0;O<w;O++){const R=mi(O/n,s,e.playback.mode,1,!0);i?.(O,w),t.paintFrame(e,R,a,o,m),O===0&&S?E=Gn(m):Vn(m,E,O,w,S);const L=new Ee(m,{timestamp:O*T,duration:T});await p.add(L,{keyFrame:O%n===0}),L.close(),await Qi()}await l.finalize()}catch(w){try{await l.cancel()}catch{}throw w}const v=y.buffer;if(!v||v.byteLength<32)throw new Error("MP4 mux produced an empty file");const b=v.slice(0);bt(`${e.exportSettings.filename}.mp4`,new Blob([b],{type:"video/mp4"}))}async function qn(t,e,i,r,n=!1){const s=Math.min(24,Math.max(12,e.exportSettings.fps||24)),a=Math.min(8,Math.max(1,e.exportSettings.duration||4)),{width:o,height:c}=Ki(e,n),d=document.createElement("canvas");d.width=o,d.height=c;const f=d.getContext("2d");if(!f)throw new Error("No 2d context");const h=d.captureStream(0),y=h.getVideoTracks()[0],l=new MediaRecorder(h,{mimeType:i,videoBitsPerSecond:Math.max(3,Math.min(8,e.exportSettings.bitrate))*1e6}),p=[];l.ondataavailable=T=>{T.data.size&&p.push(T.data)},t.resetTemporal(),l.start(200);const m=Math.max(1,Math.round(a*s)),v=document.createElement("canvas"),b=e.exportSettings.loopClose!==!1;let w=null;for(let T=0;T<m;T++){const S=mi(T/s,a,e.playback.mode,1,!0);r?.(T,m),t.paintFrame(e,S,o,c,v),T===0&&b?w=Gn(v):Vn(v,w,T,m,b),f.drawImage(v,0,0,o,c),y.requestFrame?.(),await Qi()}if(await new Promise(T=>{l.onstop=()=>T(),l.stop()}),h.getTracks().forEach(T=>T.stop()),!p.length)throw new Error("recorder produced no data");return new Blob(p,{type:i})}function Kl(){return["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))??"video/webm"}function Ql(){return typeof MediaRecorder>"u"?null:["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e))??null}function Vn(t,e,i,r,n){if(!n||!e||i===0)return;const s=$l(i,r);if(s<=0)return;const a=t.getContext("2d");a&&(a.save(),a.globalAlpha=s,a.drawImage(e,0,0,t.width,t.height),a.restore())}function Gn(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d")?.drawImage(t,0,0),e}function Qi(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function Yl(t,e,i){return new Promise((r,n)=>{t.toBlob(s=>{s?r(s):n(new Error("frame capture failed"))},e,i)})}async function Jl(t,e,i,r,n=!1){const s=e.exportSettings.format;return s==="mp4"?Xl(t,e,r,n):s==="webm"?jn(t,e,r,n):s==="sequence"?Gl(t,e,r):Vl(t,e,i)}const ed=768,td="sana",Xn=[{name:"near-black",r:12,g:10,b:12},{name:"charcoal",r:40,g:38,b:42},{name:"warm cream",r:232,g:220,b:192},{name:"paper white",r:240,g:236,b:228},{name:"sodium amber",r:220,g:140,b:48},{name:"rust",r:160,g:64,b:40},{name:"deep teal",r:20,g:64,b:72},{name:"forest green",r:36,g:72,b:40},{name:"moss",r:88,g:120,b:64},{name:"sky blue",r:140,g:176,b:220},{name:"navy",r:24,g:36,b:72},{name:"dusty rose",r:196,g:120,b:132},{name:"magenta",r:200,g:48,b:120},{name:"gold",r:212,g:176,b:64},{name:"olive",r:96,g:100,b:48}];function id(t=768,e=768){const i=Math.max(1,t),r=Math.max(1,e),n=ed/Math.max(i,r);return{width:Ue(i*n,256),height:Ue(r*n,256)}}function rd(t){const e=t.startsWith("#")?t.slice(1):t,i=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16);if(Number.isNaN(i))return"muted earth";const r=i>>16&255,n=i>>8&255,s=i&255;let a=Xn[0],o=1e9;for(const c of Xn){const d=(r-c.r)**2+(n-c.g)**2+(s-c.b)**2;d<o&&(o=d,a=c)}return a.name}function nd(t,e=[],i=!1){const r=t.trim()||"experimental photographic still, cinematic light, analog film",n="still photograph, analog film grain, cinematic lighting, sharp detail";if(!i||e.length===0)return`${r}, ${n}`;const s=e.map(rd).filter((a,o,c)=>c.indexOf(a)===o).slice(0,4);return`${r}, palette of ${s.join(", ")}, ${n}`}function sd(t,e,i){return`#${[t,e,i].map(r=>Math.max(0,Math.min(255,r)).toString(16).padStart(2,"0")).join("")}`}function ad(t,e,i,r=4){const n=[];for(let s=0;s<3;s++)for(let a=0;a<3;a++){const o=Math.min(e-1,Math.floor((a+.5)/3*e)),d=(Math.min(i-1,Math.floor((s+.5)/3*i))*e+o)*4,f=t[d],h=t[d+1],y=t[d+2],l=sd(f,h,y);n.some(m=>(m.r-f)**2+(m.g-h)**2+(m.b-y)**2<1400)||n.push({hex:l,r:f,g:h,b:y})}return n.slice(0,r).map(s=>s.hex)}function od(t){const e=document.createElement("canvas");e.width=48,e.height=48;const i=e.getContext("2d");if(!i)return[];try{i.drawImage(t,0,0,e.width,e.height)}catch{return[]}const r=i.getImageData(0,0,e.width,e.height);return ad(r.data,e.width,e.height)}function cd(t,e){return t.length<24?!1:t[0]===255&&t[1]===216||t[0]===137&&t[1]===80||t[0]===82&&t[1]===73&&t[8]===87?!0:e.startsWith("image/")&&t.length>4e3}function ld(t,e,i,r,n=td){const s=t.length>400?t.slice(0,400):t,a=`width=${i}&height=${r}&nologo=true&enhance=false&private=true&seed=${e>>>0}&model=${encodeURIComponent(n)}`;return`https://image.pollinations.ai/prompt/${encodeURIComponent(s)}?${a}`}async function dd(t,e){const i=new AbortController,r=setTimeout(()=>i.abort(),e);try{const n=await fetch(t,{signal:i.signal,headers:{Accept:"image/*"}});if(!n.ok)throw n.status===429||n.status>=500?new Error(`busy:${n.status}`):new Error(`Generation failed (${n.status}). Try a shorter prompt.`);const s=await n.arrayBuffer(),a=new Uint8Array(s),o=n.headers.get("content-type")||"";if(!cd(a,o))throw new Error("Generation returned no image. Try again.");const c=o.startsWith("image/")?o.split(";")[0]:"image/jpeg";return new Blob([s],{type:c})}catch(n){throw n instanceof Error&&n.name==="AbortError"?new Error("Generation timed out. Check your connection and try again."):n}finally{clearTimeout(r)}}async function fd(t){const{width:e,height:i}=id(t.width??768,t.height??768),r=t.prompt.trim()||"experimental photographic still, cinematic light, analog film";let n=null;for(let a=0;a<2;a++){t.onStatus?.(a===0?"generating new image…":"still working, trying once more…");try{return await dd(ld(r,t.seed+a*7919,e,i),a===0?22e3:3e4)}catch(o){n=o instanceof Error?o:new Error(String(o))}}const s=n?.message.startsWith("busy:")?"The image service was busy. Try again in a moment.":n?.message;throw new Error(s||"Generation failed. Try a shorter prompt.")}function we(t){const e=C.state.ui.selectedLayerId;return t.layers.find(i=>i.id===e)??t.layers[0]}function Ft(t){if(!t)return;const e=C.state.ui.selectedEffectId;return t.effects.find(i=>i.id===e)??t.effects[0]}function Ce(t,e,i=!0){C.setProject(r=>({...r,layers:r.layers.map(n=>n.id===t?e(n):n)}),i)}function Ot(t,e=!0){C.setProject(i=>{const r=e?i.layers.map(n=>n.id===C.state.ui.selectedLayerId?{...n,sourceId:t.id}:n):i.layers;return{...i,sources:[...i.sources,t],layers:r}}),C.patchUi({selectedSourceId:t.id,status:`loaded ${t.name}`})}function ud(t){const e=C.project.sources.filter(r=>r.kind==="audio");for(const r of e)Sr(r);if(C.setProject(r=>{const n=r.sources.filter(o=>o.kind!=="audio"),s=r.layers.map(o=>e.some(c=>c.id===o.sourceId)?{...o,sourceId:n.find(c=>c.kind!=="audio")?.id??null}:o),a=Math.max(r.duration,t.duration||0);return{...r,sources:[...n,t],layers:s,duration:a}}),$t(),C.project.playback.playing&&t.audio){try{const r=t.duration||t.audio.duration||1;t.audio.currentTime=C.project.playback.time%Math.max(r,.001)}catch{}t.audio.play().catch(()=>{})}const i=t.duration?`${Math.floor(t.duration/60)}:${String(Math.floor(t.duration%60)).padStart(2,"0")}`:"";C.patchUi({selectedSourceId:t.id,status:`soundtrack ${t.name}${i?` · ${i}`:""} — hit Play; the mix moves idols, floaters, and places`})}async function Yi(t,e=!1){for(const i of Array.from(t))try{const r=await ma(i);if(r.kind==="audio"){ud(r);continue}if(e){const n=C.state.ui.selectedSourceId;C.setProject(s=>({...s,sources:s.sources.map(a=>a.id===n?{...r,id:a.id}:a)})),C.patchUi({status:`replaced ${i.name}`})}else Ot(r,!0)}catch(r){C.patchUi({status:r instanceof Error?r.message:"import failed"})}}function hd(){C.setProject(e=>{const i=e.sources.find(n=>n.kind!=="audio")?.id??null,r=gr(`L${e.layers.length+1}`,i,["grade"]);return{...e,layers:[...e.layers,r]}});const t=C.project.layers.at(-1);C.patchUi({selectedLayerId:t?.id??null,selectedEffectId:t?.effects[0]?.id??null})}function md(t){C.setProject(e=>{const i=e.layers.find(a=>a.id===t);if(!i)return e;const r=JSON.parse(JSON.stringify(i));r.id=Se("lyr"),r.name=`${i.name}*`,r.effects=r.effects.map(a=>({...a,id:Se("fx")}));const n=e.layers.findIndex(a=>a.id===t),s=[...e.layers];return s.splice(n+1,0,r),{...e,layers:s}})}function pd(t){C.setProject(e=>({...e,layers:e.layers.filter(i=>i.id!==t)}))}function Ji(t){const e=we(C.project);if(!e)return;const i=pr(t);Ce(e.id,r=>({...r,effects:[...r.effects,i]})),C.patchUi({selectedEffectId:i.id})}function gd(t,e){Ce(t,i=>({...i,effects:i.effects.filter(r=>r.id!==e)}))}function Zn(t,e,i){Ce(t,r=>{const n=r.effects.findIndex(c=>c.id===e),s=n+i;if(n<0||s<0||s>=r.effects.length)return r;const a=[...r.effects],[o]=a.splice(n,1);return a.splice(s,0,o),{...r,effects:a}})}function vd(t,e){Ce(t,i=>({...i,effects:i.effects.map(r=>r.id===e?{...r,enabled:!r.enabled}:r)}))}function Ht(t,e,i,r,n=!0){Ce(t,s=>({...s,effects:s.effects.map(a=>a.id===e?{...a,params:{...a.params,[i]:r}}:a)}),n)}function yt(t,e=!1){const i=C.state.ui;(t==="all"||t==="selected")&&C.setProject(n=>({...n,seed:n.seed+1+(Date.now()&255)>>>0}),!1),C.setProject(n=>{let a=ur(n,t,i.selectedLayerId,i.selectedEffectId,i.selectedParam?.paramId??null,e);return t==="all"&&(i.includeCritters||e)&&(a=fr(a)),t==="all"&&(i.includeIdol||e)&&(a=dr(a)),a});const r=C.project.layers[0]?.effects.map(n=>n.typeId).join(" · ");C.patchUi({status:`${e?"wacky look":"look"} · ${r||t} · seed ${C.project.seed}`})}function bd(){const t=we(C.project);if(!t)return;const e=t.effects.find(s=>s.typeId==="critters"),i=1+(C.project.seed+Date.now())%9998;if(e){Ht(t.id,e.id,"seed",i),C.patchUi({selectedEffectId:e.id,status:"rerolled floaters"});return}Ji("critters");const r=we(C.project),n=Ft(r);r&&n?.typeId==="critters"&&Ht(r.id,n.id,"seed",i),C.patchUi({status:"stamped floaters"})}function yd(){const t=we(C.project);if(!t)return;const e=t.effects.find(s=>s.typeId==="dancer"),i=1+(C.project.seed+Date.now()+17)%9998;if(e){Ht(t.id,e.id,"seed",i),C.patchUi({selectedEffectId:e.id,status:"rerolled idol"});return}Ji("dancer");const r=we(C.project),n=Ft(r);r&&n?.typeId==="dancer"&&Ht(r.id,n.id,"seed",i),C.patchUi({status:"stamped idol"})}function wd(){C.setProject(t=>Cs({...t,seed:t.seed+1+(Date.now()&255)>>>0})),C.patchUi({status:"new floater and idol seeds"})}async function xd(t){const e=C.project,{width:i,height:r}=lr(e.exportSettings.width||960,e.exportSettings.height||540,1280,1280);try{const n=await t.capture(e,e.playback.time,i,r,"image/png",.92),s=await kr(n,`print_${Date.now()}.png`);Ot(s,!0),C.patchUi({status:"printed the live frame as a new still"})}catch(n){C.patchUi({status:n instanceof Error?n.message:"print failed"})}}function Kn(t){C.setProject(e=>({...e,seed:e.seed+t>>>0}))}function Qn(){Nl(`${C.project.name||"phosphene"}.phos.json`,Hl(C.project)),C.patchUi({status:"project downloaded"})}async function _d(t){const e=await t.text(),i=Ll(e);C.replace(i),C.patchUi({status:"project loaded — re-drop media if needed"})}function kd(){const t=prompt("Preset name",`look ${C.project.presets.length+1}`);if(!t)return;const e=li(C.project,t);C.setProject(i=>({...i,presets:[...i.presets,e]}))}function er(t){const e=C.project.presets.find(i=>i.id===t);e&&(C.setProject(i=>ys(i,e)),C.patchUi({status:`preset ${e.name}`}))}function Td(){const t=ws(C.project.presets,C.project.seed+Date.now());if(!t){C.patchUi({status:"no presets saved"});return}er(t.id)}function Sd(t){const e=C.project.presets.find(i=>i.id===t);e&&C.setProject(i=>({...i,presets:[...i.presets,xs(e)]}))}function Ed(t){C.setProject(e=>({...e,presets:e.presets.filter(i=>i.id!==t)}))}function Yn(){const t=C.state.ui,e=we(C.project),i=Ft(e),r=t.selectedParam?.paramId;if(!e||!i||!r){C.patchUi({status:"select a numeric parameter first"});return}const n=i.params[r];if(typeof n!="number"){C.patchUi({status:"keyframes are numeric"});return}const s={id:Se("kf"),time:C.project.playback.time,layerId:e.id,target:"effect",effectId:i.id,paramId:r,value:n,easing:"smooth"};C.setProject(a=>({...a,keyframes:[...a.keyframes,s]})),C.patchUi({status:`key ${r} @ ${s.time.toFixed(2)}s`})}function Cd(){C.setProject(t=>({...t,keyframes:[]}))}async function Bd(){const t=C.project.sources.find(i=>i.id===C.state.ui.selectedSourceId);if(!t)return;const e=await va(t);e&&Ot(e,!0)}function Jn(){if(confirm("Start from scratch? This clears the canvas, sources, effects, and keyframes.")){for(const e of C.project.sources)Sr(e);C.replace(vr()),C.patchUi({status:"new piece",prompt:"",generating:!1})}}async function Ad(){if(C.state.ui.generating)return;const t=C.state.ui.prompt.trim();if(!t){C.patchUi({status:"type a prompt first"});return}C.patchUi({generating:!0,status:"generating new image…"});try{const e=C.project.sources.find(d=>d.id===C.state.ui.selectedSourceId),i=C.state.ui.useSourceForGen;let r=[];const n=e?.frozenFrame||e?.bitmap||e?.video||null;i&&n&&(r=od(n));const s=nd(t,r,i&&r.length>0),a=C.project.seed+Date.now()>>>0,o=await fd({prompt:s,seed:a,width:C.project.exportSettings.width,height:C.project.exportSettings.height,onStatus:d=>C.patchUi({generating:!0,status:d},!1)}),c=await kr(o,`gen_${a}.jpg`);Ot(c,!0),C.patchUi({generating:!1,status:i&&r.length?"new image from prompt + source":"new image from prompt"})}catch(e){C.patchUi({generating:!1,status:e instanceof Error?e.message:"generation failed"})}}let ni=!1,Lt=null;function Pd(t,e){Lt=e,t.innerHTML="",t.className="shell",t.innerHTML=`
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
          <li><strong>Idol</strong> is a small low-poly creature. Grow picks petals, halo, antenna, skirt, or quiet. Coat tints the paint (cream, moss, sodium, night). Stamp it for a new seed. Crowd → Mini army.</li>
          <li><strong>Stamp chaos</strong> rerolls floater + idol seeds and their kit/grow/coat — keeps the backdrop. <strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Backgrounds</strong> on the left rail: Plasma, Noise, Bars, plus Stars, Marsh, Oil, Paper, and Cave. Click one to put that place on the picture. Rand all will swap these too. Drop an MP3 and fog/bloom breathe with the mix.</li>
          <li><strong>Soundtrack</strong> — drop an MP3 (or wav/ogg/m4a). It does not replace your picture. Hit Play and the timeline follows the song; idols kick harder on the bass; floaters and places move with it. Exported clips are silent for now — the motion still follows the mix. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `,t.querySelector("#view").append(e.canvas),e.canvas.id="gl",Rd(t),C.subscribe(()=>{ni||tr(t)}),tr(t)}async function Id(t=!1){if(Lt&&!C.state.ui.exporting){C.setProject(e=>({...e,playback:{...e.playback,playing:!1}})),C.patchUi({exporting:!0,status:"exporting clip…"});try{const e=await Jl(Lt,C.project,C.project.playback.time,(i,r)=>{C.patchUi({status:`export ${i+1}/${r}`,exporting:!0},!1)},t);C.patchUi({exporting:!1,status:typeof e=="string"&&e?e:"export done"})}catch(e){C.patchUi({exporting:!1,status:e instanceof Error?e.message:"export failed"})}}}function Rd(t){t.addEventListener("click",async e=>{const i=e.target.closest("[data-act]");if(!i)return;const r=i.dataset.act,n=i.dataset.id;if(r==="save"&&Qn(),r==="load"&&t.querySelector("#proj-file")?.click(),r==="scratch"&&Jn(),r==="imagine"&&Ad(),r==="seed-"&&Kn(-1),r==="seed+"&&Kn(1),r==="rand-all"&&yt("all"),r==="rand-wacky"&&yt("all",!0),r==="stamp-chaos"&&wd(),r==="reprint"&&Lt&&xd(Lt),r==="rand-sel"&&yt("selected"),r==="rand-param"){const s=i.dataset.paramId,a=we(C.project),o=Ft(a);s&&a&&o&&C.patchUi({selectedParam:{layerId:a.id,effectId:o.id,paramId:s}},!1),yt("param")}if(r==="help"&&C.patchUi({helpOpen:!C.state.ui.helpOpen}),r==="import"&&t.querySelector("#media-file")?.click(),r==="replace"&&t.querySelector("#replace-file")?.click(),r==="freeze"&&Bd(),r==="gen"){const s=i.dataset.kind??"plasma",a=mr(s);Ot(a,!0),C.patchUi({status:s==="critters"?"floaters on this layer":`place · ${s}`})}if(r==="stamp-critters"&&bd(),r==="stamp-idol"&&yd(),r==="add-layer"&&hd(),r==="dup-layer"&&n&&md(n),r==="del-layer"&&n&&pd(n),r==="sel-layer"&&n&&C.patchUi({selectedLayerId:n,selectedEffectId:C.project.layers.find(s=>s.id===n)?.effects[0]?.id??null}),r==="sel-fx"&&n&&C.patchUi({selectedEffectId:n}),r==="sel-src"&&n&&C.patchUi({selectedSourceId:n}),r==="bypass"&&n){const s=we(C.project);s&&vd(s.id,n)}if(r==="fx-up"&&n){const s=we(C.project);s&&Zn(s.id,n,-1)}if(r==="fx-dn"&&n){const s=we(C.project);s&&Zn(s.id,n,1)}if(r==="fx-del"&&n){const s=we(C.project);s&&gd(s.id,n)}if(r==="key"&&Yn(),r==="key-clear"&&Cd(),r==="pst-save"&&kd(),r==="pst-rand"&&Td(),r==="pst-load"&&n&&er(n),r==="pst-dup"&&n&&Sd(n),r==="pst-del"&&n&&Ed(n),r==="export"&&Id(),r==="clip"){const s=Math.max(1,Number(i.dataset.secs||4));C.setProject(a=>({...a,duration:Math.max(a.duration,s),exportSettings:{...a.exportSettings,duration:s,format:"mp4",fps:24,bitrate:Math.min(a.exportSettings.bitrate,8)}})),C.patchUi({status:`${s}s clip ready — hit Export`})}if(r==="exp-aspect"&&n){const s=Zi.find(a=>a.id===n);if(s){const a=$n(s.rw,s.rh,1280);C.setProject(o=>({...o,exportSettings:{...o.exportSettings,width:a.width,height:a.height}}))}}if(r==="exp-aspect-src"){const s=C.project,a=we(s),o=s.sources.find(f=>f.id===(a?.sourceId??s.sources[0]?.id)),c=o?.kind==="audio"?s.sources.find(f=>f.kind!=="audio"):o,d=Dl(c?.width??1280,c?.height??720,1280);C.setProject(f=>({...f,exportSettings:{...f.exportSettings,width:d.width,height:d.height}}))}if(r==="play"&&($t(),C.setProject(s=>({...s,playback:{...s.playback,playing:!s.playback.playing}}))),r==="use-src"&&n){if(C.project.sources.find(o=>o.id===n)?.kind==="audio")return;const a=we(C.project);a&&Ce(a.id,o=>({...o,sourceId:n}))}}),t.addEventListener("change",e=>{const i=e.target;if(i.id==="proj-file"&&i instanceof HTMLInputElement&&i.files?.[0]&&(_d(i.files[0]),i.value=""),i.id==="media-file"&&i instanceof HTMLInputElement&&i.files&&(Yi(i.files,!1),i.value=""),i.id==="replace-file"&&i instanceof HTMLInputElement&&i.files&&(Yi(i.files,!0),i.value=""),i.id==="quality"&&C.setProject(r=>({...r,quality:i.value})),i.id==="add-fx"&&(i.value&&Ji(i.value),i.value=""),i.id==="blend"){const r=we(C.project);r&&Ce(r.id,n=>({...n,blendMode:i.value}))}if(i.id==="mask-type"){const r=we(C.project);r&&Ce(r.id,n=>({...n,mask:{...n.mask,type:i.value}}))}i.id==="preset-sel"&&i.value&&er(i.value),i.id==="exp-format"&&C.setProject(r=>({...r,exportSettings:{...r.exportSettings,format:i.value}})),i.id==="play-mode"&&C.setProject(r=>({...r,playback:{...r.playback,mode:i.value}})),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&C.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&C.patchUi({includeIdol:i.checked})}),t.addEventListener("input",e=>{const i=e.target,r=C.project;if(i.id==="gen-prompt"&&C.patchUi({prompt:i.value},!1),i.id==="gen-src"&&C.patchUi({useSourceForGen:i.checked},!1),(i.id==="inc-critters"||i.id==="inc-critters-rail")&&C.patchUi({includeCritters:i.checked}),(i.id==="inc-idol"||i.id==="inc-idol-rail")&&C.patchUi({includeIdol:i.checked}),i.id==="seed"&&C.setProject(n=>({...n,seed:Number(i.value)||0}),!1),i.id==="rnd-amt"&&C.setProject(n=>({...n,randomAmount:Number(i.value)}),!1),i.id==="speed"&&C.setProject(n=>({...n,playback:{...n.playback,speed:Number(i.value)}}),!1),i.id==="loop"&&C.setProject(n=>({...n,playback:{...n.playback,loop:i.checked}}),!1),i.id==="loop-close"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,loopClose:i.checked}}),!1),i.id==="freeze"&&C.setProject(n=>({...n,playback:{...n.playback,freeze:i.checked}}),!1),i.id==="time"&&C.setProject(n=>({...n,playback:{...n.playback,time:Number(i.value)}}),!1),i.id==="opacity"){const n=we(r);n&&Ce(n.id,s=>({...s,opacity:Number(i.value)}),!1)}if(i.id==="lyr-en"){const n=we(r);n&&Ce(n.id,s=>({...s,enabled:i.checked}),!1)}for(const n of["amount","delay","opacity","scale","rotation","distortion"])if(i.id===`fb-${n}`&&C.setProject(s=>({...s,globalFeedback:{...s.globalFeedback,[n]:Number(i.value)}}),!1),i.id===`lfb-${n}`){const s=we(r);s&&Ce(s.id,a=>({...a,feedback:{...a.feedback,[n]:Number(i.value)}}),!1)}if(i.id.startsWith("tr-")){const n=we(r),s=i.id.slice(3);n&&s in n.transform&&Ce(n.id,a=>({...a,transform:{...a.transform,[s]:Number(i.value)}}),!1)}if(i.dataset.param&&i.dataset.fx&&i.dataset.layer){ni=!0;const n=Md(i.dataset.fxType||"",i.dataset.param),s=zd(i,n);Ht(i.dataset.layer,i.dataset.fx,i.dataset.param,s,!1),C.patchUi({selectedParam:{layerId:i.dataset.layer,effectId:i.dataset.fx,paramId:i.dataset.param}},!1)}i.id==="exp-w"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,width:Number(i.value)}}),!1),i.id==="exp-h"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,height:Number(i.value)}}),!1),i.id==="exp-fps"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,fps:Number(i.value)}}),!1),i.id==="exp-dur"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,duration:Number(i.value)},duration:Number(i.value)}),!1),i.id==="exp-q"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,quality:Number(i.value)}}),!1),i.id==="exp-br"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,bitrate:Number(i.value)}}),!1),i.id==="exp-name"&&C.setProject(n=>({...n,exportSettings:{...n.exportSettings,filename:i.value}}),!1)}),t.addEventListener("pointerup",()=>{ni&&(ni=!1,tr(t))}),window.addEventListener("dragover",e=>{e.preventDefault(),C.state.ui.dropActive||C.patchUi({dropActive:!0})}),window.addEventListener("dragleave",e=>{e.target===document.body&&C.patchUi({dropActive:!1})}),window.addEventListener("drop",e=>{e.preventDefault(),C.patchUi({dropActive:!1}),e.dataTransfer?.files?.length&&Yi(e.dataTransfer.files)}),window.addEventListener("keydown",e=>{const i=e.target.tagName;i==="INPUT"||i==="TEXTAREA"||i==="SELECT"||(e.code==="Space"&&(e.preventDefault(),$t(),C.setProject(r=>({...r,playback:{...r.playback,playing:!r.playback.playing}}))),(e.key==="r"||e.key==="R")&&yt(e.shiftKey?"all":"selected"),(e.key==="w"||e.key==="W")&&e.shiftKey&&yt("all",!0),(e.key==="k"||e.key==="K")&&Yn(),(e.key==="n"||e.key==="N")&&(e.preventDefault(),Jn()),e.key==="?"&&C.patchUi({helpOpen:!C.state.ui.helpOpen}),(e.key==="s"||e.key==="S")&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),Qn()))})}function Md(t,e){return Me(t)?.params.find(i=>i.id===e)}function zd(t,e){return e?e.kind==="bool"?t.checked:e.kind==="color"||e.kind==="enum"?t.value:e.kind==="int"?Math.round(Number(t.value)):Number(t.value):t.value}function tr(t){const{project:e,ui:i}=C.state,r=t.querySelector("#proj-name"),n=t.querySelector("#seed"),s=t.querySelector("#rnd-amt"),a=t.querySelector("#quality");r&&document.activeElement!==r&&(r.value=e.name),n&&document.activeElement!==n&&(n.value=String(e.seed)),s&&(s.value=String(e.randomAmount)),a&&(a.value=e.quality);const o=t.querySelector("#top-export");o&&(o.disabled=i.exporting);const c=t.querySelector("#inc-critters");c&&(c.checked=i.includeCritters);const d=t.querySelector("#inc-idol");d&&(d.checked=i.includeIdol),t.querySelector("#help")?.classList.toggle("on",i.helpOpen),t.querySelector("#veil")?.classList.toggle("on",i.dropActive),t.querySelector("#led")?.classList.toggle("hot",e.playback.playing),Fd(t.querySelector("#rail")),Od(t.querySelector("#stack")),Ld(t.querySelector("#transport"))}function Fd(t){const e=C.project,i=C.state.ui;t.innerHTML=`
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
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${Ie(i.prompt)}</textarea>
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
    <div class="status" style="margin-top:4px">Floaters Kit: Shapes, Toy pop, Votives, Moths, Charms. Idol Grow / Coat pick a wardrobe without changing the creature language. Stamp chaos rerolls those, not the backdrop.</div>
    <div style="margin-top:8px">
      ${e.sources.map(r=>{const n=r.kind==="audio"?`soundtrack · ${wt(r.duration||0)}`:`${r.kind} ${r.width}×${r.height}`,s=r.kind==="audio"?'<span class="status">mix</span>':`<button class="btn tiny" data-act="use-src" data-id="${r.id}">use</button>`;return`
        <div class="thumb ${r.id===i.selectedSourceId?"on":""}" data-act="sel-src" data-id="${r.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${Ie(r.name)}</b><span>${n}</span></div>
          ${s}
        </div>`}).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${ke("fb-amount","Amt",e.globalFeedback.amount,0,1,.01)}
    ${ke("fb-delay","Delay",e.globalFeedback.delay,0,15,1)}
    ${ke("fb-opacity","Opac",e.globalFeedback.opacity,0,1,.01)}
    ${ke("fb-scale","Scale",e.globalFeedback.scale,.8,1.4,.001)}
    ${ke("fb-rotation","Rot",e.globalFeedback.rotation,-.2,.2,.001)}
    ${ke("fb-distortion","Dist",e.globalFeedback.distortion,0,2,.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${e.presets.map(r=>`
      <div class="fx " style="margin-top:6px">
        <div class="hd"><span>${Ie(r.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${r.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${r.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${r.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${e.presets.length===0?'<div class="status">no presets yet</div>':""}
  `}function Od(t){const e=C.project,i=we(e),r=Ft(i),n=gs();t.innerHTML=`
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${e.layers.map(s=>`
      <div class="layer ${s.id===i?.id?"on":""}" data-act="sel-layer" data-id="${s.id}">
        <div class="hd">
          <span class="name">${Ie(s.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${s.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${s.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${i?`
      <div class="check"><input type="checkbox" id="lyr-en" ${i.enabled?"checked":""}/> enabled</div>
      ${ke("opacity","Opacity",i.opacity,0,1,.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${ya.map(s=>`<option value="${s}" ${s===i.blendMode?"selected":""}>${s}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${ke("tr-x","X",i.transform.x,-1,1,.01)}
      ${ke("tr-y","Y",i.transform.y,-1,1,.01)}
      ${ke("tr-scale","Scale",i.transform.scale,.1,4,.01)}
      ${ke("tr-rotation","Rot",i.transform.rotation,-3.14,3.14,.01)}
      <div class="sec">Layer feedback</div>
      ${ke("lfb-amount","Amt",i.feedback.amount,0,1,.01)}
      ${ke("lfb-opacity","Opac",i.feedback.opacity,0,1,.01)}
      ${ke("lfb-scale","Scale",i.feedback.scale,.8,1.4,.001)}
      ${ke("lfb-rotation","Rot",i.feedback.rotation,-.5,.5,.001)}
      ${ke("lfb-distortion","Dist",i.feedback.distortion,0,2,.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map(s=>`<option ${i.mask.type===s?"selected":""} value="${s}">${s}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      ${i.effects.map((s,a)=>`
        <div class="fx ${s.id===r?.id?"on":""} ${s.enabled?"":"bypass"}" draggable="true" data-fx-index="${a}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${s.id}">${a+1}. ${Ie(Me(s.typeId)?.name??s.typeId)}</span>
            <span>
              <button class="btn tiny" data-act="bypass" data-id="${s.id}">${s.enabled?"on":"off"}</button>
              <button class="btn tiny" data-act="fx-up" data-id="${s.id}">↑</button>
              <button class="btn tiny" data-act="fx-dn" data-id="${s.id}">↓</button>
              <button class="btn tiny" data-act="fx-del" data-id="${s.id}">x</button>
            </span>
          </div>
        </div>`).join("")}
      <select id="add-fx" class="addfx">
        <option value="">+ add effect</option>
        ${vs.map(s=>{const a=n[s.id]??[];return a.length?`<optgroup label="${s.label}">${a.map(o=>`<option value="${o.id}">${o.name}</option>`).join("")}</optgroup>`:""}).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny acid" data-act="stamp-critters">stamp floaters</button>
        <button class="btn tiny acid" data-act="stamp-idol">stamp idol</button>
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
      </div>
      ${r?`
        <hr class="div" />
        <div class="sec">${Ie(Me(r.typeId)?.name??"params")} · ${Ie(Me(r.typeId)?.description??"")}</div>
        ${(Me(r.typeId)?.params??[]).map(s=>Hd(i.id,r,s)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      `:""}
    `:""}
  `,t.querySelectorAll("[draggable]").forEach(s=>{s.addEventListener("dragstart",a=>{a.dataTransfer?.setData("text/plain",s.getAttribute("data-fx-index")||"0")}),s.addEventListener("dragover",a=>a.preventDefault()),s.addEventListener("drop",a=>{a.preventDefault();const o=Number(a.dataTransfer?.getData("text/plain")),c=Number(s.getAttribute("data-fx-index"));!i||Number.isNaN(o)||Number.isNaN(c)||o===c||Ce(i.id,d=>{const f=[...d.effects],[h]=f.splice(o,1);return f.splice(c,0,h),{...d,effects:f}})})})}function Hd(t,e,i){const r=e.params[i.id]??i.default,n=`data-param="${i.id}" data-fx="${e.id}" data-layer="${t}" data-fx-type="${e.typeId}"`;return i.kind==="bool"?`<label class="check"><input type="checkbox" ${n} ${r?"checked":""}/> ${Ie(i.label)}</label>`:i.kind==="color"?`<div class="param"><span>${Ie(i.label)}</span><input type="color" ${n} value="${Ie(String(r))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:i.kind==="enum"?`<div class="param"><span>${Ie(i.label)}</span>
      <select ${n}>${(i.options??[]).map(s=>`<option value="${s.value}" ${s.value===r?"selected":""}>${s.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button></div>`:`<div class="param">
    <span>${Ie(i.label)}</span>
    <input type="range" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(r)}" />
    <input type="number" ${n} min="${i.min??0}" max="${i.max??1}" step="${i.step??.01}" value="${Number(Number(r).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${i.id}">↻</button>
  </div>`}function Ld(t){const e=C.project,i=e.playback,r=e.exportSettings,n=C.state.ui.exporting,s=Math.max(e.duration,.1),a=i.time/s*100;t.innerHTML=`
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${i.playing?"pause":"play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map(o=>`<option ${i.mode===o?"selected":""} value="${o}">${o}</option>`).join("")}
        </select>
      </div>
      ${ke("speed","Speed",i.speed,.05,4,.01)}
      <div class="check"><input type="checkbox" id="loop" ${i.loop?"checked":""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${i.freeze?"checked":""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${wt(i.time)} / ${wt(s)}</span>
        <span class="status" id="status-line">${C.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${e.keyframes.map(o=>`<div class="key" style="left:${o.time/s*100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${a}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${s}" step="0.001" value="${i.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${Zi.map(o=>`<button class="btn tiny ${Wl(r.width,r.height)===o.id?"acid":""}" data-act="exp-aspect" data-id="${o.id}">${o.label}</button>`).join("")}
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
  `,t.querySelector("#timeline")?.addEventListener("click",o=>{const c=o.currentTarget.getBoundingClientRect(),d=(o.clientX-c.left)/c.width*s;C.setProject(f=>({...f,playback:{...f.playback,time:Math.max(0,d)}}))})}function ke(t,e,i,r,n,s){return`<div class="param"><span>${e}</span>
    <input id="${t}" type="range" min="${r}" max="${n}" step="${s}" value="${i}" />
    <input id="${t}" type="number" min="${r}" max="${n}" step="${s}" value="${Number(i.toFixed(3))}" />
    <span></span></div>`}function Ie(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function wt(t){const e=Math.floor(t/60),i=t-e*60;return`${String(e).padStart(2,"0")}:${i.toFixed(2).padStart(5,"0")}`}function es(t,e){if(C.state.ui.exporting)return;const i=1,r=e.getBoundingClientRect();let n=Math.max(16,Math.floor(r.width*i)),s=Math.max(16,Math.floor(r.height*i));const a=640,o=Math.max(n,s);if(o>a){const c=a/o;n=Math.max(16,Math.floor(n*c)),s=Math.max(16,Math.floor(s*c))}(t.width!==n||t.height!==s)&&(t.width=n,t.height=s)}function Ud(t,e,i){const r=t.querySelector("#hud");r&&(r.textContent=`PHOSPHENE  ${wt(i)}  ${e.toFixed(0)}FPS  ${C.project.quality.toUpperCase()}`);const n=Math.max(C.project.duration,.1),s=t.querySelector(".playhead");s&&(s.style.left=`${i/n*100}%`);const a=t.querySelector("#clock");a&&(a.textContent=`${wt(i)} / ${wt(n)}`);const o=t.querySelector("#time");o&&document.activeElement!==o&&(o.value=String(i));const c=t.querySelector("#status-line");c&&(c.textContent=C.state.ui.status)}const ts=window;ts.__phospheneMark=!0;const is=document.querySelector("#app");if(!is)throw new Error("#app missing");const ir=is,rr=document.createElement("canvas");async function Nd(){await new Promise(c=>requestAnimationFrame(()=>c()));let t;try{t=new la(rr)}catch(c){const d=document.querySelector("#boot-note");d?d.textContent=`PHOSPHENE · plasma · ${c instanceof Error?c.message:"WebGL failed"}`:ir.innerHTML=`<div style="padding:24px;font-family:monospace;color:#d6ff3d">
        <h1>PHOSPHENE</h1>
        <p>WebGL2 is required. ${c instanceof Error?c.message:String(c)}</p>
      </div>`;return}Pd(ir,t),ts.__phospheneGone=!0;const e=document.querySelector("#view");new ResizeObserver(()=>es(rr,e)).observe(e),es(rr,e);let r=performance.now(),n=60,s=0,a=performance.now();function o(c){const d=Math.min(.08,(c-r)/1e3);r=c;const f=C.state.ui.exporting,h=C.project,y=Hs(h,h.playback.time),l=yr(h);if(!f&&h.playback.playing&&!h.playback.freeze)if(l?.audio&&h.playback.mode==="forward"){vi(l.audio,h.playback);const p=l.audio.currentTime;Number.isFinite(p)&&C.setProject(m=>({...m,playback:{...m.playback,time:p}}),!1)}else{let p=h.playback.time+d*y;const m=Math.max(h.duration,.001);h.playback.loop?p=(p%m+m)%m:p=Math.min(p,m),C.setProject(v=>({...v,playback:{...v.playback,time:p}}),!1),l?.audio&&vi(l.audio,{...h.playback,playing:!1,time:p})}else l?.audio&&vi(l.audio,{...h.playback,playing:!1});for(const p of C.project.sources)if(p.kind==="video"&&p.video&&!C.project.playback.freeze){const m=mi(C.project.playback.time,p.duration||p.video.duration||1,C.project.playback.mode,1,C.project.playback.loop);ba(p,m)}if(!f)try{t.render(C.project,C.project.playback.time)}catch(p){C.patchUi({status:p instanceof Error?p.message:"render error"},!1)}s++,c-a>400&&(n=s*1e3/(c-a),a=c,s=0),Ud(ir,n,C.project.playback.time),requestAnimationFrame(o)}requestAnimationFrame(o)}Nd()})();

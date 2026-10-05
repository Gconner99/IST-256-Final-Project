function writeString(view: DataView, offset: number, text: string): void {
  for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
}

/** 16-bit PCM WAV. Channels are interleaved. Values outside ±1 are clipped. */
export function encodeWav(channels: Float32Array[], sampleRate: number): Uint8Array {
  const count = Math.max(1, channels.length);
  const length = channels[0]?.length ?? 0;
  const blockAlign = count * 2;
  const dataSize = length * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, count, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, dataSize, true);

  const pcm = new Int16Array(buffer, 44);
  let o = 0;
  for (let i = 0; i < length; i++) {
    for (let c = 0; c < count; c++) {
      const sample = channels[c]?.[i] ?? 0;
      const clamped = Math.max(-1, Math.min(1, sample));
      pcm[o++] = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;
    }
  }
  return new Uint8Array(buffer);
}

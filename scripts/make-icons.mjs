import fs from "fs";
import path from "path";
import zlib from "zlib";

function createPng(width, height, drawFn) {
  // RGBA buffer
  const buffer = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      buffer[idx] = r;
      buffer[idx + 1] = g;
      buffer[idx + 2] = b;
      buffer[idx + 3] = a;
    }
  }

  // Scanlines with filter byte 0
  const scanlines = Buffer.alloc(height * (width * 4 + 1));
  for (let y = 0; y < height; y++) {
    const scanlineOffset = y * (width * 4 + 1);
    scanlines[scanlineOffset] = 0; // Filter None
    buffer.copy(scanlines, scanlineOffset + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = zlib.deflateSync(scanlines);

  function createChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, "ascii");
    const payload = Buffer.concat([typeBuf, data]);
    const crc = crc32(payload);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([len, payload, crcBuf]);
  }

  // CRC32 table
  function crc32(buf) {
    let c = 0xffffffff;
    for (let n = 0; n < buf.length; n++) {
      c = (c ^ buf[n]) >>> 0;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) >>> 0 : (c >>> 1) >>> 0;
      }
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  const signature = Buffer.from([137, 80, 78, 79, 13, 10, 26, 10]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = createChunk("IHDR", ihdr);
  const idatChunk = createChunk("IDAT", compressed);
  const iendChunk = createChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function drawBrandIcon(x, y, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const radius = w * 0.46;
  const innerRadius = w * 0.43;

  // Background deep emerald: #0B3B2C -> [11, 59, 44, 255]
  // Outer gold ring: #F0CB5E -> [240, 203, 94, 255]
  if (dist > radius) {
    return [11, 59, 44, 255];
  }
  if (dist > innerRadius) {
    return [240, 203, 94, 255];
  }

  // Inside circle: Deep Emerald #072A1F [7, 42, 31, 255]
  // Monogram / gold motif:
  // Render stylized "A" in the center:
  const nx = (x - cx) / (w * 0.35);
  const ny = (y - cy) / (h * 0.35);

  // A simple crisp geometric luxury "AH" emblem in gold:
  const inA_bar = Math.abs(ny - 0.1) < 0.08 && Math.abs(nx) < 0.45;
  const inA_left = Math.abs(ny - (nx * 2 + 0.6)) < 0.14 && ny > -0.6 && ny < 0.6;
  const inA_right = Math.abs(ny - (-nx * 2 + 0.6)) < 0.14 && ny > -0.6 && ny < 0.6;
  const inA_sun = Math.sqrt(nx * nx + (ny + 0.5) * (ny + 0.5)) < 0.15;

  if (inA_bar || inA_left || inA_right || inA_sun) {
    return [240, 203, 94, 255]; // Gold
  }

  return [11, 59, 44, 255];
}

const p192 = createPng(192, 192, drawBrandIcon);
const p512 = createPng(512, 512, drawBrandIcon);

fs.writeFileSync("public/icons/icon-192.png", p192);
fs.writeFileSync("public/icons/icon-512.png", p512);
fs.writeFileSync("public/icons/icon-maskable.png", p512);
fs.writeFileSync("public/favicon.ico", createPng(48, 48, drawBrandIcon));
console.log("PWA Icons created successfully!");

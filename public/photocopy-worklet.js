function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);

    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}


class PhotoCopy {
  paint(ctx, geometry, props) {
    const random = mulberry32(123456);

    const density = geometry.width * geometry.height / 1000;

    ctx.fillStyle = 'hsla(0, 100%, 0%, 0.75)';

    for(let i = 0; i < density; i++) {
      const x = random() * geometry.width;
      const y = random() * geometry.height;
      ctx.beginPath();
      ctx.arc(x, y, random() * 1, 0, Math.PI * 2);
      ctx.fill()
    }
  }
}

registerPaint('photoCopy', PhotoCopy);

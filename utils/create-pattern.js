import { createRandom } from '@georgedoescode/nugget';

const baseFontSize = 16;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!!!!!!!!'.split('');

let backgroundColor = '#fff';

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function rect(ctx, cx, cy, width, height, rotate, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(0.725, 0.725);
  ctx.rotate(degreesToRadians(rotate));
  ctx.beginPath();
  ctx.rect(-width / 2, -height / 2, width, height);
  ctx.restore();

  ctx.fillStyle = color;
  ctx.fill();
}

function circle(ctx, cx, cy, radius, color) {
  ctx.beginPath();
  ctx.arc(cx, cy, radius / 2, 0, Math.PI * 2);

  ctx.fillStyle = color;
  ctx.fill();
}

function halfCircle(ctx, cx, cy, radius, rotate, color, outline) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(degreesToRadians(rotate));
  ctx.beginPath();
  ctx.arc(0, 0, radius / 2, 0, Math.PI * 1);
  ctx.closePath();

  ctx.restore();

  ctx.fillStyle = color;
  ctx.fill();

  if (outline) {
    ctx.fillStyle = backgroundColor;
    ctx.beginPath();
    ctx.arc(cx, cy, radius / 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function letter(ctx, cx, cy, letter, radius, rotate, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(degreesToRadians(rotate));
  ctx.scale(radius / baseFontSize, radius / baseFontSize);
  ctx.beginPath();
  ctx.fillText(letter, 0, 0);
  ctx.restore();

  ctx.fillStyle = color;
  ctx.fill();
}

function line(ctx, cx, cy, radius, rotate, color) {
  const width = radius;
  const height = width / 4;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.beginPath();
  ctx.rotate(degreesToRadians(rotate));
  ctx.rect(-width / 2, -height / 2, width, height);
  ctx.restore();

  ctx.fillStyle = color;
  ctx.fill();
}

function triangle(ctx, cx, cy, radius, rotate, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(degreesToRadians(rotate));
  ctx.scale(0.725, 0.725);
  ctx.beginPath();
  ctx.moveTo(-radius / 2, -radius / 2);
  ctx.lineTo(radius / 2, radius / 2);
  ctx.lineTo(-radius / 2, radius / 2);
  ctx.closePath();
  ctx.restore();

  ctx.fillStyle = color;
  ctx.fill();
}

function squiggle(ctx, cx, cy, radius, rotate, color) {
  const segmentSize = radius / 4;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(degreesToRadians(rotate));
  ctx.beginPath();
  ctx.moveTo(-segmentSize * 2, radius / 8);
  ctx.lineTo(-segmentSize * 1, radius / 8 - radius / 4);
  ctx.lineTo(0, radius / 8);
  ctx.lineTo(segmentSize * 1, radius / 8 - radius / 4);
  ctx.lineTo(segmentSize * 2, radius / 8);
  ctx.restore();

  ctx.lineWidth = radius / 8;

  ctx.stroke();
}

function createPattern(ctx, rects, seed) {
  ctx.font = `900 ${baseFontSize}px Pacaembu`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const options = [
    'letter',
    'letter',
    'letter',
    'rect',
    'circle',
    'halfCircle',

    'line',
    'triangle',
    'squiggle',
  ];

  rects.forEach((r) => {
    ctx.lineWidth = 1;
    // ctx.strokeRect(r.x, r.y, r.width, r.height);
    const random = createRandom(r.id);

    const option = options[random(0, options.length - 1, 1)];

    const cx = r.x + r.width / 2;
    const cy = r.y + r.height / 2;
    const radius = Math.min(r.width, r.height);

    const color = '#000';

    switch (option) {
      case 'rect':
        rect(ctx, cx, cy, radius, radius, random(0, 360), color);
        break;
      case 'circle':
        circle(ctx, cx, cy, radius);
        break;
      case 'halfCircle':
        halfCircle(
          ctx,
          cx,
          cy,
          radius,
          random(0, 360),
          color,
          random(0, 1) > 0.5
        );
        break;
      case 'letter':
        letter(
          ctx,
          cx,
          cy,
          alphabet[random(0, alphabet.length - 1, 1)],
          radius,
          random(0, 360),
          color
        );
        break;
      case 'line':
        line(ctx, cx, cy, radius, random(0, 360), color);
        break;
      case 'triangle':
        triangle(ctx, cx, cy, radius, random(0, 360), color);
        break;
      case 'squiggle':
        squiggle(ctx, cx, cy, radius, random(0, 360), color);
        break;
    }
  });
}

export { createPattern };

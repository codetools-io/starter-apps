import useColor from 'hooks/useColor';
export default function useDarken(color, amount = 10) {
  const hexColor = useColor(color);
  let [r, g, b] = hexColor.replace('#', '').match(/.{2}/g);

  [r, g, b] = [
    parseInt(r, 16) - amount,
    parseInt(g, 16) - amount,
    parseInt(b, 16) - amount,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
}

class T {
  constructor(t, e) {
    this.x = t, this.y = e;
  }

  t() {
    return new T(-this.x, -this.y);
  }

  o(t = 1) {
    return this.i(t / (this.h() || 1 / 0));
  }

  l(e) {
    return new T(this.x + e.x, this.y + e.y);
  }

  u(e) {
    return new T(this.x - e.x, this.y - e.y);
  }

  i(e) {
    return new T(this.x * e, this.y * e);
  }

  _(t) {
    return this.x * t.x + this.y * t.y;
  }

  h() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  M(t) {
    const e = this.x - t.x, r = this.y - t.y;
    return Math.sqrt(e * e + r * r);
  }
}

class e {
  constructor(t, e) {
    this.g = t, this.v = e;
  }
}

const r = (t, e, i, c, u, f, a) => {
  if (u - c == 1) {
    const r = t[c], s = t[u], o = r.M(s) / 3;
    return void n(e, [r, r.l(f.o(o)), s.l(a.o(o)), s]);
  }
  const w = h(t, c, u);
  let _, d = Math.max(i, i * i), M = !0;
  for (let r = 0; r <= 4; r++) {
    const r = s(t, c, u, w, f, a), h = l(t, c, u, r, w);
    if (h.error < i && M) return void n(e, r);
    if (_ = h.index, h.error >= d) break;
    M = o(t, c, u, w, r), d = h.error;
  }
  const g = t[_ - 1].u(t[_ + 1]);
  r(t, e, i, c, _, f, g), r(t, e, i, _, u, g.t(), a);
}, n = (t, r) => {
  t[t.length - 1].m = r[1].u(r[0]), t.push(new e(r[3], r[2].u(r[3])));
}, s = (t, e, r, n, s, o) => {
  const i = 1e-12, c = Math.abs, h = t[e], l = t[r], u = [[0, 0], [0, 0]], f = [0, 0];
  for (let i = 0, c = r - e + 1; i < c; i++) {
    const r = n[i], c = 1 - r, a = 3 * r * c, w = c * c * c, _ = a * c, d = a * r, M = r * r * r, g = s.o(_),
      v = o.o(d), b = t[e + i].u(h.i(w + _)).u(l.i(d + M));
    u[0][0] += g._(g), u[0][1] += g._(v), u[1][0] = u[0][1], u[1][1] += v._(v), f[0] += g._(b), f[1] += v._(b);
  }
  const a = u[0][0] * u[1][1] - u[1][0] * u[0][1];
  let w, _;
  if (c(a) > i) {
    const t = u[0][0] * f[1] - u[1][0] * f[0];
    w = (f[0] * u[1][1] - f[1] * u[0][1]) / a, _ = t / a;
  } else {
    const t = u[0][0] + u[0][1], e = u[1][0] + u[1][1];
    w = _ = c(t) > i ? f[0] / t : c(e) > i ? f[1] / e : 0;
  }
  const d = l.M(h), M = i * d;
  let g, v;
  if (w < M || _ < M) w = _ = d / 3; else {
    const t = l.u(h);
    g = s.o(w), v = o.o(_), g._(t) - v._(t) > d * d && (w = _ = d / 3, g = v = null);
  }
  return [h, h.l(g || s.o(w)), l.l(v || o.o(_)), l];
}, o = (t, e, r, n, s) => {
  for (let o = e; o <= r; o++) n[o - e] = i(s, t[o], n[o - e]);
  for (let t = 1, e = n.length; t < e; t++) if (n[t] <= n[t - 1]) return !1;
  return !0;
}, i = (t, e, r) => {
  const n = [], s = [];
  for (let e = 0; e <= 2; e++) n[e] = t[e + 1].u(t[e]).i(3);
  for (let t = 0; t <= 1; t++) s[t] = n[t + 1].u(n[t]).i(2);
  const o = c(3, t, r), i = c(2, n, r), h = c(1, s, r), l = o.u(e), u = i._(i) + l._(h);
  return (f = u) >= -112e-18 && f <= 112e-18 ? r : r - l._(i) / u;
  var f;
}, c = (t, e, r) => {
  const n = e.slice();
  for (let e = 1; e <= t; e++) for (let s = 0; s <= t - e; s++) n[s] = n[s].i(1 - r).l(n[s + 1].i(r));
  return n[0];
}, h = (t, e, r) => {
  const n = [0];
  for (let s = e + 1; s <= r; s++) n[s - e] = n[s - e - 1] + t[s].M(t[s - 1]);
  for (let t = 1, s = r - e; t <= s; t++) n[t] /= n[s];
  return n;
}, l = (t, e, r, n, s) => {
  let o = Math.floor((r - e + 1) / 2), i = 0;
  for (let h = e + 1; h < r; h++) {
    const r = c(3, n, s[h - e]).u(t[h]), l = r.x * r.x + r.y * r.y;
    l >= i && (i = l, o = h);
  }
  return { error: i, index: o };
};
export default (n, s = {}) => 0 === n.length ? '' : ((t, e, r) => {
  const n = t.length, s = 10 ** r, o = r < 16 ? t => Math.round(t * s) / s : t => t, i = (t, e) => o(t) + ',' + o(e);
  let c, h, l, u, f = !0;
  const a = [], w = (t, e) => {
    const r = t.g.x, n = t.g.y;
    if (f) a.push('M' + i(r, n)), f = !1; else {
      const s = r + (t.v?.x ?? 0), f = n + (t.v?.y ?? 0);
      if (s === r && f === n && l === c && u === h) {
        if (!e) {
          const t = r - c, e = n - h;
          a.push(0 === t ? 'v' + o(e) : 0 === e ? 'h' + o(t) : 'l' + i(t, e));
        }
      } else a.push('c' + i(l - c, u - h) + ' ' + i(s - c, f - h) + ' ' + i(r - c, n - h));
    }
    c = r, h = n, l = r + (t.m?.x ?? 0), u = n + (t.m?.y ?? 0);
  };
  if (!n) return '';
  for (let e = 0; e < n; e++) w(t[e]);
  return e && n > 0 && (w(t[0], !0), a.push('z')), a.join('');
})(((t, n, s) => {
  n && (t.unshift(t[t.length - 1]), t.push(t[1]));
  const o = t.length;
  if (0 === o) return [];
  const i = [new e(t[0])];
  return r(t, i, s, 0, o - 1, t[1].u(t[0]), t[o - 2].u(t[o - 1])), n && (i.shift(), i.pop()), i;
})(n.map('number' == typeof n[0].x ? e => new t(e.x, e.y) : e => new t(e[0], e[1])), s.closed, s.tolerance ?? 2.5), s.closed, s.precision ?? 5);

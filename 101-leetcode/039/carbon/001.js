function rob(n) {
  if (n === null || n.length === 0) return 0;
  if (n.length == 1) return n[0];

  let total = [];
  total[0] = n[0];
  total[1] = Math.max(n[0], n[1]);

  for (let i = 2; i < n.length; i += 1) {
    total[i] = Math.max(n[i] + total[i - 2], total[i - 1]);
  }

  return total[total.length - 1];
}

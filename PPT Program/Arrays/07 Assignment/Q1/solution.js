function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sToT = {};
  let tToS = {};
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (!sToT[charS] && !tToS[charT]) {
      sToT[charS] = charT;
      tToS[charT] = charS;
    } else if (sToT[charS] !== charT || tToS[charT] !== charS) {
      return false;
    }
  }
  return true;
}
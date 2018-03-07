function converter(num, opt) {

  const unities = {
    grlb: 0.00220462,
    groz: 0.035274,
    lbgr: 453.59285929009,
    lboz: 16.000017259200017605,
    ozlb: 0.0625,
    ozgr: 28.3495
  };

  for (let unit in unities) {
    if (unit === opt) {
      return num * unities[unit];
    }
  }
  return "Bad option";
}
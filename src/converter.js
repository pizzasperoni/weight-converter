function converter (num, opt) {
  if (opt == 1) {
    return num * 2.20462
  }else if (opt == 0) {
    return num / 2.20462
  }else{
    return "Error"
  }
} 

exports.default = converter
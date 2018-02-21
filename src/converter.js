function converter (num, opt) {
    if (opt == 1) {
      return num * 2.20462
    }else if (opt == 0) {
      return num / 2.20462
    }else{
      console.log('Error: bad option')
    }
} 

exports.default = converter
const expect = require('chai').expect
const converter = require('..').default

describe('#converter', function (){

  it('if the option is 1, it must return a bigger value', function () {
    const result = converter(10,1); 
    expect(result).to.equal(22.0462);    
  }),
  it('if the option is 0, it must return a lower value', function () {
    const result2 = converter(10,0)
    expect(result2).to.equal(4.535929094356398)  
  }),
  it('if the option is any other value, it must console log', function () {
    const result3 = converter(10, 'a')
    expect(result3).to.equal("Error")
  })

})
(function(){
  'use strict';
  
  /**
   * test function
   * @param {string} desc
   * @param {function} fn
   */
  function it(desc, fn) {
    try {
      fn();
      console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
    } catch (error) {
      console.log('\n');
      console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
      console.error(error);
    }
  }

  function assert(isTrue) {
    if (!isTrue) {
      throw new Error();
    }
  }

  // 80 - 100 A
  // 70 - 79 B
  // 60 - 69 C
  // 50 - 59 D
  // < 50 F

  it('เมื่อเรียก function calculateGrade ด้วย 90 ควรจะมีค่าเป็น A', () => {
    // arrange or given
    const point = 90
    const expected = 'A'

    // act or when
    const result = taeApp.calculateGrade(point);

    // assert or then
    assert(result === expected)
  });
})();

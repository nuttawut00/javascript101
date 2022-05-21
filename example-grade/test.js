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
    const point = 90
    const expected = 'A'
    const result = gradeApp.calculateGrade(point);
    assert(result === expected)
  });

  it('เมื่อเรียก function calculateGrade ด้วย 80 ควรจะมีค่าเป็น A', () => {
    const point = 80
    const expected = 'A'
    const result = gradeApp.calculateGrade(point);
    assert(result === expected)
  });

it('เมื่อเรียก function calculateGrade ด้วย 79 ควรจะมีค่าเป็น B', () => {
  const point = 79
  const expected = 'B'
  const result = gradeApp.calculateGrade(point);
  assert(result === expected)
});

it('เมื่อเรียก function calculateGrade ด้วย 69 ควรจะมีค่าเป็น B', () => {
  const point = 75
  const expected = 'B'
  const result = gradeApp.calculateGrade(point);
  assert(result === expected)
});

it('เมื่อเรียก function calculateGrade ด้วย 69 ควรจะมีค่าเป็น C', () => {
  const point = 69
  const expected = 'C'
  const result = gradeApp.calculateGrade(point);
  assert(result === expected)
});

it('เมื่อเรียก function calculateGrade ด้วย 60 ควรจะมีค่าเป็น C', () => {
  const point = 60
  const expected = 'C'
  const result = gradeApp.calculateGrade(point);
  assert(result === expected)
});

it('เมื่อเรียก function calculateGrade ด้วย 59 ควรจะมีค่าเป็น D', () => {
  const point = 59
  const expected = 'D'
  const result = gradeApp.calculateGrade(point);
  assert(result === expected)
});

it('เมื่อเรียก function calculateGrade ด้วย 49 ควรจะมีค่าเป็น F', () => {
  const point = 49
  const expected = 'F'
  const result = gradeApp.calculateGrade(point);
  assert(result === expected)
});
})();

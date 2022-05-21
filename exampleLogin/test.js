(function(){
  'use strict';

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

  // nut@gmail.com        true
  // 123@gmail.com        false
  
  // @gmail.com           false
  // nut@hotmail.com      true


  it('เมื่อเรียก function validateEmail ด้วย nut@gmail.com ควรจะมีค่าเป็น true', () => {
    // arrange or given
    const email = 'nut@gmail.com'
    const expected = true

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย 123@gmail.com ควรจะมีค่าเป็น false', () => {
    // arrange or given
    const email = '123@gmail.com'
    const expected = false

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });
  
  it('เมื่อเรียก function validateEmail ด้วย @gmail.com ควรจะมีค่าเป็น false', () => {
    // arrange or given
    const email = '@gmail.com'
    const expected = false

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย nut@hotmail.com ควรจะมีค่าเป็น true', () => {
    // arrange or given
    const email = 'nut@hotmail.com'
    const expected = true

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย @gmail ควรจะมีค่าเป็น false', () => {
    // arrange or given
    const email = '@gmail'
    const expected = false

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย asd_2@gmail.com  ควรจะมีค่าเป็น true', () => {
    // arrange or given
    const email = 'asd_2@gmail.com'
    const expected = true

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย nut ควรจะมีค่าเป็น false', () => {
    // arrange or given
    const email = 'nut'
    const expected = false

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย as123+ddd@gmail.com  ควรจะมีค่าเป็น true', () => {
    // arrange or given
    const email = 'as123+ddd@gmail.com'
    const expected = true

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย nut.com ควรจะมีค่าเป็น false', () => {
    // arrange or given
    const email = 'nut.com'
    const expected = false

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });

  it('เมื่อเรียก function validateEmail ด้วย nut@gmail ควรจะมีค่าเป็น false', () => {
    // arrange or given
    const email = 'nut@gmail'
    const expected = false

    // act or when
    const result = taeApp.validateEmail(email);

    // assert or then
    assert(result === expected)
  });
})();



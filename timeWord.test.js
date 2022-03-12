const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('it returns midnight for 00:00', () => {
    expect(timeWord('00:00')).toEqual('midnight');
  });

  test('it returns twelve twelve am for 00:12', () => {
    expect(timeWord('00:12')).toEqual('twelve twelve am');
  });  
  
  test(" it returns one o'clock am for 01:00 ", () => {
    expect(timeWord('01:00')).toEqual("one o'clock am");
  });  
  
  test(" it returns six oh one am for 06:01 ", () => {
    expect(timeWord('06:01')).toEqual("six oh one am");
  });  
  
  test(" it returns six ten am for 06:10 ", () => {
    expect(timeWord('06:10')).toEqual("six ten am");
  });  
  
  test(" it returns six eighteen am for 06:18 ", () => {
    expect(timeWord('06:18')).toEqual("six eighteen am");
  });  

   test(" it returns six thirty am for 06:30 ", () => {
    expect(timeWord('06:30')).toEqual("six thirty am");
  });  

  test(" it returns ten thirty four am for 10:34 ", () => {
    expect(timeWord('10:34')).toEqual("ten thirty four am");
  });  

  test('it returns noon for 12:00', () => {
    expect(timeWord('12:00')).toEqual('noon');
  });

  test('it returns twelve oh nine pm for 12:09', () => {
    expect(timeWord('12:09')).toEqual('twelve oh nine pm');
  });

  test('it returns eleven twenty three pm for 23:23', () => {
    expect(timeWord('23:23')).toEqual('eleven twenty three pm');
  });
    

});
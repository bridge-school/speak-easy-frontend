import { formatDate } from './utils';

describe('formatDate', () => {
  it("returns the date in the correct format when it's valid", () => {
    expect(formatDate('2019-02-14')).toEqual('Feb 14, 2019');
    expect(formatDate('2019-02-03')).toEqual('Feb 3, 2019');
  });

  it('returns an empty string when date is not valid', () => {
    expect(formatDate('2019-02-111')).toEqual('');
    expect(formatDate('Hooray')).toEqual('');
  });
});

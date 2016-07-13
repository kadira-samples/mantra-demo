import { check, Match } from 'meteor/check';

const uuid = Match.Where((x) => { // eslint-disable-line new-cap
  check(x, String);

  return x.length === 17; 
});

export default uuid;

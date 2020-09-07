import { should } from 'chai';

import header, { initialState } from 'src/reducers/header';
import { showNavBar } from 'src/actions';

should();

describe('Header reducer', () => {
  describe('Structure', () => {
    it('Should be a function', () => {
      header.should.be.a('function');
    });

    it('Should return an initialState', () => {
      header().should.be.an('object');
      header().should.deep.equal(initialState);
      header().should.eql(initialState);
    });
  });
  describe('with action', () => {
    it('SHOW_NAVBAR', () => {
      const dummyBool = false;
      const action = showNavBar(dummyBool);

      header({}, action).should.be.eql({ displayNavBar: !false });
      header(initialState, action).should.be.eql({ displayNavBar: !dummyBool });
    });
  });
});

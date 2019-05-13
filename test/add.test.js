import add from '../src/components/test/test'
import { expect } from 'chai'

describe('test add function', () => (
    it('1 + 1 = 2', () => (
      expect(add(1, 1)).to.be.equal(2)
    ))
  ));

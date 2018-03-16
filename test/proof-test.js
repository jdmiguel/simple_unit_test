const chai = require('chai');
const expect = chai.expect;
const atm = require('../lib/atm');


describe('atm functions', ()=>{
	it('exits', ()=>{
		expect(atm).to.be.a('function');
	});
	describe('it receives arg', ()=>{
		it('returns null when arg is an undefined', ()=>{
			const result = atm();
			expect(result).to.be.equal(null);
		});

		it('returns null when arg is a negative', ()=>{
			const result = atm(-5);
			expect(result).to.be.equal(null);
		});

		it('returns null when arg is an object', ()=>{
			const result = atm({});
			expect(result).to.be.equal(null);
		});

		it('returns null when arg is an array', ()=>{
			const result = atm([]);
			expect(result).to.be.equal(null);
		});

		it('returns object when arg is a number', ()=>{
			const result = atm(1);
			expect(result).to.be.deep.equal({
				5:0,
				10:0,
				20:0,
				50:0
			});
		});
	});
});

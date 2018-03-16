module.exports = function atm(amount){
	if(typeof amount !== 'number' || amount < 0) return null;
	
	return{
		5:0,
		10:0,
		20:0,
		50:0
	}
}
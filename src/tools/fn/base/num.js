import BigNumber from 'bignumber.js'

//加法 
function add(val1,val2){
	return new BigNumber(val1).plus(val2).toNumber() 
}

//减法
function diff(val1,val2){
	return new BigNumber(val1).minus(val2).toNumber() 
}

//乘法
function cheng(val1,val2){
	return new BigNumber(val1).times(val2).toNumber() 
}

//普通除法
function chu(val1,val2){
	return new BigNumber(val1).div(val2).toNumber() 
}

//取模
function mod(val1,val2){
	return new BigNumber(val1).mod(val2).toNumber() 
}

export default{
	add,
	diff,
	cheng,
	chu,
	mod
}

// export default{
// 	plus,
// 	minus,
// 	times,
// 	div,
// 	mod
// }

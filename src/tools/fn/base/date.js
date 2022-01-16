//https://www.cnblogs.com/cjrfan/p/9154539.html
import dayjs from 'dayjs'
/* 
.format('YYYY-MM-DD dddd HH:mm:ss.SSS A') 
 */
// 增加时间
function add(date,num,unit = "day",format="YYYY-MM-DD"){
	return dayjs(date).add(num, unit).format(format)
}
//格式化时间对象
function str(date,format="YYYY-MM-DD"){
	return dayjs(date).format(format)
}

//时间差
function diff(date1,date2,unit = "day"){
	return dayjs(date1).diff(dayjs(date2),unit)
}

export default{
	add,
	str,
	diff
}


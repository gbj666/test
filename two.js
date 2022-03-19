//4.2.实现深拷贝支持函数正则日期对象

const arr = [{ a: new Date(), aa: new RegExp('/nihao/i')}]
const copyArr = JSON.parse(JSON.stringify(arr))
console.log(copyArr)
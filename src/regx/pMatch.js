// 匹配所有数字
const regex = /^\p{Number}+$/u;
console.log(regex.test('²³¹¼½¾')) // true
console.log(regex.test('㉛㉜㉝')) // true
console.log(regex.test('15364')) // true
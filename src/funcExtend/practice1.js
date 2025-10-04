// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}
// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
// 函数没有参数的情况
console.log(m1()) // [0, 0]
console.log(m1({z:1,w:2})) // [0, 0]
console.log(m2()) // [0, 0]
console.log(m2({z:1,w:2})) // [undefined,undefined]

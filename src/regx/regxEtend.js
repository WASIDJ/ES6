var s = '𠮷';
console.log(/^.$/.test(s)); // false
console.log((/^.$/u).test(s)); // true
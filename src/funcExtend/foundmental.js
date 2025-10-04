function log(x,y){
    y=y||"World"
    console.log(x,y);
}

log("Hello")
log("Hello","China")
log("Hello",false) // BUG: Hello World
// 如何修改?

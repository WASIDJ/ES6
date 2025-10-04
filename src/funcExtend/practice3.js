var x=1;
function foo(x,y=function(){x=2;}){
// 我困惑的点是 x=2 没声明 即使 声明了也没用 context 不一样
    var x=3;
    y();
    console.log(x);
}

foo() // 3
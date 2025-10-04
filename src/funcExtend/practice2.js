let foo='outer'

function bar(func=()=>foo){
    let foo='inner'
    console.log(func());
}

bar() // outer
// 解释:(func=()=>foo) context 中foo没定义,找全局.
function compile(template) {
    const evalExpr = /<%=(.+?)%>/g;
    const expr = /<%([\s\S]+?)%>/g;
    template = template
      .replace(evalExpr, '`); \n  echo( data.$1 ); \n  echo(`') // Ensure variables are accessed from data object
      .replace(expr, '`); \n $1 \n  echo(`');
    template = 'echo(`' + template + '`);';

    let script=`
    (function parse(data){
        let output = "";
        function echo(html){
            output += html;
        }
        ${template}
        return output;
})`;
    return script;
}

// Example usage:
let template = "Hello, <%= name %>! You are <%= age %> years old."
let parse= eval(compile(template));
div.innerHTML = parse({ name: "Ryou", age: 18 });
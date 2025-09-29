let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    let result = "";
    for (let i = 0; i < literals.length; i++) {
        result += literals[i];
        if (i < arguments.length - 1) {
            result += arguments[i + 1];
        }
    }
}

console.log(msg); // "The total is 30 (31.5 with tax)"
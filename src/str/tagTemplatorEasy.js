let total = 30;
let msg=passthru`The total is ${total} (${total*1.05} with tax)`;
function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }
  output += literals[index]
  return output;
}
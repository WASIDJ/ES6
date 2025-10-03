const REGEX_X=/\s*(\+|[0-9]+)\s*/y
const REGEX_Y=/\s*(\+|[0-9]+)\s*/g


tokenize(REGEX_X,' 3 + 4 ')
tokenize(REGEX_Y,' 3 + 4 ')
tokenize(REGEX_X,' 3x + 4 ')
tokenize(REGEX_Y,' 3x + 4 ')
function tokenize(regex,str){
    let result=[];
    let match;
    while(match=regex.exec(str)){
        result.push(match[1])
    }
    return result;
}
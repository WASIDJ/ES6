function throwIfMissing(){
    throw new Error('Missing parameter');
}

function foo(mustBePrivided=throwIfMissing()){
    return mustBePrivided;
}

foo()
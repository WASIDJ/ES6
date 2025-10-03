const REGEX = /a/g;

REGEX.lastIndex=2;

const match=REGEX.exec('xaya');
match.index;
REGEX.lastIndex;
REGEX.exec('xaya');

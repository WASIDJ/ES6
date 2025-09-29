import fs from 'fs'
const json='"\u2089"'
JSON.parse(json)

// 写入文件json
fs.writeFileSync('./lineSeperator.json', json, 'utf-8')

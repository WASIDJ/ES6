## globalThis对象
|场景|全局对象|
|--|--|
|浏览器|`window`|
|`Node.js`|`global`|
|`Web Worker`|`self`|
|`Deno`|`globalThis`|
- `globalThis`是一个标准化的全局对象引用，可以在任何环境中使用，无论是浏览器、Node.js还是其他JavaScript运行时环境。
- 可以使用`globalThis`来引用全局对象，而不需要关心当前运行环境是浏览器、Node.js还是其他环境。

# @typed-decorators/debounced

[![npm version](https://badge.fury.io/js/%40typed-decorators%2Fdebounced.svg)](https://badge.fury.io/js/%40typed-decorators%2Fdebounced)

An `@debounced(wait)` decorator for TypeScript that is created to "do one thing and do it well".

This is an experimental module while the ES/TypeScript decorators are experimental.

## Synopsis

```typescript
import { debounced } from "@typed-decorators/debounced";

class Foo {
  // Same as `this.method = lodash.debounce(this.method, 10)` in the constructor.
  // If you use TypeScript, debounced methods or functions must return `void`.
  @debounced(10)
  method() {
    // ...
  }
}
```

Note that as of v0.1.0, `@debounced()` just uses `lodash.debounce()`.

## Install

```shell-session
npm install --save '@typed-decorators/debounced'
```

https://www.npmjs.com/package/@typed-decorators/debounced

## Caveats

Decorators in TypeScript (as of v3.3) are experimental
as http://www.typescriptlang.org/docs/handbook/decorators.html describes.

Any specification may change without warnings.

## Copyright and Licenses

The license is ISC: https://opensource.org/licenses/ISC

Copyright (c) 2019, FUJI Goro.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


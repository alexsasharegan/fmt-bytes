# fmt-bytes

[![npm](https://img.shields.io/npm/v/fmt-bytes.svg?style=for-the-badge)](https://img.shields.io/npm/v/fmt-bytes)
[![npm downloads](https://img.shields.io/npm/dt/fmt-bytes.svg?style=for-the-badge)](https://www.npmjs.com/package/fmt-bytes)
[![GitHub issues](https://img.shields.io/github/issues/alexsasharegan/fmt-bytes.svg?style=for-the-badge)](https://github.com/alexsasharegan/fmt-bytes/issues)
<!-- [![Travis](https://img.shields.io/travis/alexsasharegan/fmt-bytes.svg?style=for-the-badge)](https://github.com/alexsasharegan/fmt-bytes) -->
<!-- [![Coverage Status](https://img.shields.io/coveralls/github/alexsasharegan/fmt-bytes.svg?style=for-the-badge)](https://coveralls.io/github/alexsasharegan/fmt-bytes) -->
[![GitHub license](https://img.shields.io/github/license/alexsasharegan/fmt-bytes.svg?style=for-the-badge)](https://github.com/alexsasharegan/fmt-bytes/blob/master/LICENSE.md)


Utility to format/convert bytes.

## Installation

Installation comes with flow and typescript definitions.

```sh
npm install fmt-bytes
```

## Usage

```js
import { format, toBytes } from "fmt-bytes";

toBytes(100, "MiB");
// 104857600
toBytes(100, "MB");
// 100000000
toBytes(100, "gb");
// TypeError: Unknown byte type: "gb"
//     at expect_never (fmt-bytes/lib/index.js:55:11)
//     at Object.toBytes (fmt-bytes/lib/index.js:50:20)

format(117203200);
// '117.2 MB'
format(117203200, { precision: 3 });
// '117.203 MB'

format(117203200, { useBinary: true });
// '111.8 MiB'
format(117203200, { useBinary: true, precision: 3 });
// '111.774 MiB'
format(117203200, { useBinary: true, precision: 0 });
// '112 MiB'
```

## Types

Described in Typescript syntax.

```ts
export declare type ByteType =
  | "B"
  | "KiB"
  | "MiB"
  | "GiB"
  | "TiB"
  | "KB"
  | "MB"
  | "GB"
  | "TB";
export declare enum ByteUnit {
  B = 1,
  KiB = 1024,
  MiB = 1048576,
  GiB = 1073741824,
  TiB = 1099511627776,
  KB = 1000,
  MB = 1000000,
  GB = 1000000000,
  TB = 1000000000000,
}
export declare function format(
  bytes: number,
  options?: {
    useBinary?: boolean;
    precision?: number;
  }
): string;
export declare function toBytes(b: number, unit: ByteType): number;
```

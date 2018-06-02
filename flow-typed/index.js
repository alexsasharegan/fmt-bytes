// @flow
// @ts-nocheck

declare type ByteType =
  | "B"
  | "KiB"
  | "MiB"
  | "GiB"
  | "TiB"
  | "KB"
  | "MB"
  | "GB"
  | "TB";
declare export var ByteUnit: {
  B: 1,
  KiB: 1024,
  MiB: 1048576,
  GiB: 1073741824,
  TiB: 1099511627776,
  KB: 1000,
  MB: 1000000,
  GB: 1000000000,
  TB: 1000000000000,
};
declare export function format(bytes: number): string;
declare export function toBytes(x: number, unit: ByteType): number;

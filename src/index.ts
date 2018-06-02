export type ByteType =
  | "B"
  | "KiB"
  | "MiB"
  | "GiB"
  | "TiB"
  | "KB"
  | "MB"
  | "GB"
  | "TB";

export enum ByteUnit {
  B = 1,

  KiB = 2 ** 10,
  MiB = 2 ** 20,
  GiB = 2 ** 30,
  TiB = 2 ** 40,

  KB = 1000 ** 1,
  MB = 1000 ** 2,
  GB = 1000 ** 3,
  TB = 1000 ** 4,
}

export function format(
  bytes: number,
  options: { useBinary?: boolean; precision?: number } = {}
): string {
  let { useBinary = false, precision = 1 } = options;
  let u = 0;
  let s = useBinary ? ByteUnit.KiB : ByteUnit.KB;

  while (bytes >= s || -bytes >= s) {
    bytes /= s;
    u++;
  }

  if (!u) {
    return bytes + " B";
  }

  if (useBinary) {
    /* spell-checker: disable */
    return `${bytes.toFixed(precision)} ${" KMGTPEZY"[u]}iB`;
  }

  /* spell-checker: disable */
  return `${bytes.toFixed(precision)} ${" KMGTPEZY"[u]}B`;
}

export function toBytes(b: number, unit: ByteType) {
  switch (unit) {
    case "B":
      return b * ByteUnit.B;
    case "KiB":
      return b * ByteUnit.KiB;
    case "MiB":
      return b * ByteUnit.MiB;
    case "GiB":
      return b * ByteUnit.GiB;
    case "TiB":
      return b * ByteUnit.TiB;
    case "KB":
      return b * ByteUnit.KB;
    case "MB":
      return b * ByteUnit.MB;
    case "GB":
      return b * ByteUnit.GB;
    case "TB":
      return b * ByteUnit.TB;

    default:
      return expect_never(unit, `Unknown byte type: "${unit}"`);
  }
}

function expect_never(_: never, message: string): never {
  throw new TypeError(message);
}

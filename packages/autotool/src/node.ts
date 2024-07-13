/**
 * @example
 * ```shell
 * node --import @llamaflow/autotool/node ./dist/index.js
 * ```
 *
 * @example
 * ```shell
 * node --import tsx --import @llamaflow/autotool/node ./src/index.ts
 * ```
 *
 * @module
 */
import { register } from "node:module";

register("./loader.js", import.meta.url);

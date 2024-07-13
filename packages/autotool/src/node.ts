/**
 * @example
 * ```shell
 * node --import @llamaflowjs/autotool/node ./dist/index.js
 * ```
 *
 * @example
 * ```shell
 * node --import tsx --import @llamaflowjs/autotool/node ./src/index.ts
 * ```
 *
 * @module
 */
import { register } from "node:module";

register("./loader.js", import.meta.url);

import { withNext } from "@llamaflowjs/autotool/next";
import withLlamaFlow from "llamaflowjs/next";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withLlamaFlow(withNext(nextConfig));

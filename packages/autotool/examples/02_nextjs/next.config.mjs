import { withNext } from "@llamaflow/autotool/next";
import withLlamaFlow from "llamaflow/next";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withLlamaFlow(withNext(nextConfig));

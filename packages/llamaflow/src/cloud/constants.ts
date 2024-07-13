import type { ServiceContext } from "../ServiceContext.js";

export const DEFAULT_PROJECT_NAME = "Default";
export const DEFAULT_BASE_URL = "https://api.cloud.llamaflow.ai";

export type ClientParams = { apiKey?: string; baseUrl?: string };

export type CloudConstructorParams = {
  name: string;
  projectName: string;
  serviceContext?: ServiceContext;
} & ClientParams;

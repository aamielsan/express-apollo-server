import { Config } from "./types";

const env = process.env.NODE_ENV;

export default function getConfig(): Config {
  const config = require(`./${env}.config`).default;
  return config
}

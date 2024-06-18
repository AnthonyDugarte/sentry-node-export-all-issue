import { register } from "node:module";
import { pathToFileURL } from "node:url";

process.on('uncaughtException', function (err) {
  console.error(err);
  process.exit(1);
});

register("ts-node/esm", pathToFileURL("./"));

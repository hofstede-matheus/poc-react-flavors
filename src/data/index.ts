import { strings as f1strings } from "./flavor1/strings";
import { strings as f2strings } from "./flavor2/strings";
import { strings as f3strings } from "./flavor3/strings";
import f1assets from "./flavor1/assets";
import f2assets from "./flavor2/assets";
import f3assets from "./flavor3/assets";

const flavorFromEnv = import.meta.env.VITE_FLAVOR;

function getStrings(flavorFromEnv: string) {
  switch (flavorFromEnv) {
    case "flavor1":
      return f1strings;
    case "flavor2":
      return f2strings;
    case "flavor3":
      return f3strings;
    default:
      throw Error("React app is on dev mode but no flavor is set");
  }
}

function getAssets(flavorFromEnv: string) {
  switch (flavorFromEnv) {
    case "flavor1":
      return f1assets;
    case "flavor2":
      return f2assets;
    case "flavor3":
      return f3assets;
    default:
      throw Error("React app is on dev mode but no flavor is set");
  }
}

export const strings = getStrings(flavorFromEnv);
export const assets = getAssets(flavorFromEnv);

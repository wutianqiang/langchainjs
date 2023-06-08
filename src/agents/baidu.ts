import type { BaiduParameters } from "serpapi";
import { getJson } from "serpapi";

const params = {
  q: "甘肃紫光",
  api_key: "af6004d6320c824c737422da0e3d2e5cdd467b966c4dec0ffdd5ad0ee6496be0"
} satisfies BaiduParameters;

// Show result as JSON
const response = await getJson("baidu", params);
console.log(response["organic_results"]);
import config from "@/config";
import { LolApi } from "twisted";

const api = new LolApi({
  key: config.riot.API_URL,
  concurrency: 10,
  rateLimitRetryAttempts: 3,
});

export default api;

import { request } from "../helpers/api.handler";

function getHistory(token: string) {
  console.log(token);
  return request({
    url: "/stats/history",
    method: "GET",
    authHeader: token
  });
}

export default {
  getHistory
};

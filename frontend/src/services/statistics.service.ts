import { request } from "../helpers/api.handler";

function getHistory(token: string) {
  return request({
    url: "/stats/history",
    method: "GET",
    authHeader: token
  });
}

function getMoods(token: string) {
  return request({
    url: "/stats/mood",
    method: "GET",
    authHeader: token
  });
}

export default {
  getHistory,
  getMoods
};

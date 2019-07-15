import { Id } from "@store/auth/types";
import { request } from "../helpers/api.handler";

function signIn(id: Id) {
  return request({
    url: "/auth/login",
    method: "POST",
    data: id
  });
}

export default {
  signIn
};

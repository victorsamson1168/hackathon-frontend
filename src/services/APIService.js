import api from "./baseAPI";

const URLs = {
  // login api
  login: "v1.0/login",
};

// login api
async function login(payload) {
  console.log("login");
  return api.post(URLs.login, payload);
}

export default {
  login_URLs: URLs,
  login,
};

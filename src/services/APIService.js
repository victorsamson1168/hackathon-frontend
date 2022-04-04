import api from "./baseAPI";

const user = JSON.parse(localStorage.getItem("user_details"));

const URLs = {
  // login api
  loginRoute: "v1.0/login",
  getChildListRoute: "v1.0/user/getChildUsers",
  putScoreRoute: "v1.0/putScore",
};

// login api
async function login(payload) {
  console.log("login");
  return api.post(URLs.loginRoute, payload);
}

const getChildList = async () => {
  console.log("getChildList");
  return api.get(`${URLs.getChildListRoute}?uuid=${user.uuid}`);
};
const postScore = async (questionArray) => {
  console.log("getChildList");
  return api.put(`${URLs.putScoreRoute}`, questionArray);
};

export default {
  login_URLs: URLs,
  login,
  getChildList,
  postScore
};

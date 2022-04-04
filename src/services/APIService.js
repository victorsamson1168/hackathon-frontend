import api from "./baseAPI";

const user = JSON.parse(localStorage.getItem("user_details"));

const URLs = {
  // login api
  loginRoute: "v1.0/login",
  getChildListRoute: "v1.0/user/getChildUsers",
  putScoreRoute: "v1.0/putScore",
  user: "v1.0/user/getById",
  colleagues: "v1.0/user/getColleges",
  score: "v1.0/user/score"
};

// login api
async function login(payload) {
  console.log("login");
  return api.post(URLs.loginRoute, payload);
}

// Dashboard API

// get user by id
async function getUserById(id) {
  return api.get(URLs.user + `?uuid=${id}`);
}

// get colleagues by id
async function getColleagues(id) {
  return api.get(URLs.colleagues + `?uuid=${id}`);
}

// get user score by id, month & year
async function getUserScore(id, month) {
  return api.get(URLs.score + `?uuid=${id}&month=${month}&year=2022`);
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
  postScore,
  getUserById,
  getColleagues,
  getUserScore,
};

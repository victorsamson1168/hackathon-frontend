import api from "./baseAPI";

const URLs = {
  // login api
  login: "v1.0/login",
  user: "v1.0/user/getById",
  colleagues: "v1.0/user/getColleges",
  score: "v1.0/user/score"
};

// login api
async function login(payload) {
  console.log("login");
  return api.post(URLs.login, payload);
}

// Dashboard API

// get user by id
async function getUserById(id) {
  return api.get(URLs.user+`?uuid=${id}`);
}

// get colleagues by id
async function getColleagues(id) {
  return api.get(URLs.colleagues+`?uuid=${id}`);
}

// get user score by id, month & year
async function getUserScore(id, month) {
  return api.get(URLs.score+`?uuid=${id}&month=${month}&year=2022`);
}



export default {
  login_URLs: URLs,
  login,
  getUserById,
  getColleagues,
  getUserScore,
};

import api from "./baseAPI";

const user = JSON.parse(localStorage.getItem("user_details"));

const URLs = {
  // login api
  loginRoute: "v1.0/login",
  getChildListRoute: "v1.0/user/getChildUsers",
  putScoreRoute: "v1.0/putScore",
  user: "v1.0/user/getById",
  colleagues: "v1.0/user/getColleges",
  score: "v1.0/user/score",
  allUserScore: "v1.0/hr/allscore",
  projects: "v1.0/getProjectsList",
  yearScore: "v1.0/get/allScores"
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


// hr section get all users with scores
async function getAllUserScore(month, year) {
  return api.get(URLs.allUserScore + `?month=${month}&year=${year}`);
}

// get all projects list
async function getProjectsList() {
  return api.get(URLs.projects);
}
// line chart score api
async function getThisYearScore(id, year) {
  return api.get(URLs.yearScore+`?uuid=${id}&year=${year}`);
}

export default {
  login_URLs: URLs,
  login,
  getChildList,
  postScore,
  getUserById,
  getColleagues,
  getUserScore,
  getAllUserScore,
  getProjectsList,
  getThisYearScore,
};

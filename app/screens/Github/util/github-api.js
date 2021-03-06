import axios from 'axios';

export {getRepos, getUserData};

function getRepos(username) {
  username = 'stowersjoshua';

  const url = `https://api.github.com/users/${username}/repos?per_page=250`;
  return axios
    .get(url)
    .then(response => response.data);
}

function getUserData() {
  const username = 'stowersjoshua';

  return axios.all([
    axios.get(`https://api.github.com/users/${username}`),
    axios.get(`https://api.github.com/users/${username}/orgs`),
  ])
    .then(axios.spread((user, orgs) => ({
      user: user.data,
      orgs: orgs.data,
    })));
}

const axios = require('axios');
const fs = require('fs');

// Replace this with your personal access token
// const TOKEN = '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';
const TOKEN = process.env.PROJECT_SHOWCASE_KEY;


// // Make a GET request to the GitHub API to retrieve a list of your repositories
// axios.get('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `Token ${TOKEN}`
//   }
// }).then(response => {
//     console.error(response.data);
//   // Save the list of repositories to the _data/repos.json file
//   fs.writeFileSync('_data/repos.json', JSON.stringify(response.data));
// }).catch(error => {
//   console.error(error);
// });


async function updateRepoList() {
    try {
      // Make a GET request to the GitHub API to retrieve a list of your repositories
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Token ${TOKEN}`
        }
      });
  
      // Save the list of repositories to the _data/repos.json file
      fs.writeFileSync('_data/repos.json', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  
  module.exports = updateRepoList;
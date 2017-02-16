import 'whatwg-fetch';

import data from './user-data';

const userPhoto = document.querySelector('.avatar__pic');
userPhoto.src = data.results[0].picture.large;

const userName = document.querySelector('.space__name');
userName.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

import 'whatwg-fetch';

import data from './user-data';

const userPhoto = document.querySelector('.avatar__pic');
userPhoto.innerText = data.results[0].picture.large;

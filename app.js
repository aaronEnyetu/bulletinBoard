// import functions and grab DOM elements
import { fetchPosts, logout } from '../fetch-utils.js';
import { getUser } from './fetch-utils.js';


const postsElem = document.getElementById('posts');

async function onLoad() {
  //load up all the posts
    const posts = await fetchPosts();

    for (let post of posts) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const h2 = document.createElement('h2');
        h2.textContent = post.title;
        p.textContent = post.description;
        div.append(h2, p);
        div.classList.add('post');
        postsElem.append(div);

    }
}

const headerBtn = document.getElementById('header-btn');
async function handleLogout() {
    await logout();

}
async function handleAuth() {
    window.location.href = '/auth-page';
}


const user = getUser();
if (user) {
    headerBtn.textContent = 'logout';
    headerBtn.addEventListener('click', handleLogout);
    headerBtn.classList.remove('hide');

}

else {
    headerBtn.textContent = 'Sign In / Sign Up';
    headerBtn.addEventListener('click', handleAuth);
    headerBtn.classList.remove('hide');
}

onLoad();
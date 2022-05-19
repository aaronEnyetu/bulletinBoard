import { checkAuth, createNewPost } from '../fetch-utils.js';

const form = document.getElementById('new-post');
checkAuth();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),

    };
    const resp = await createNewPost(newPost);
    console.log(resp);


    if (resp) {
        location.replace('../index.html');
    }
});
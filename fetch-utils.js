const SUPABASE_URL = 'https://wuqcwgxturbjhkdtdjwn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1cWN3Z3h0dXJiamhrZHRkanduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MjQ0MjMsImV4cCI6MTk2ODMwMDQyM30.qVkreSGtYAMaEk7THSwEY_1E0AB9q0iNMjuFXHaIa8Q';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


//returns a user if there is one
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}
 //signs a new user in and puts an auth token in local storage
export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    if (response.user) {
        console.log(response.user);
        return response.user;
    } else {
        console.error(response.error);
    }
}


//When a user tries to visit a page that calls this function, we automatically redirect the user away from the login page if they are already logged in
//
export async function checkAuth() {
    if (!getUser()) {
        location.replace('/');
    }

}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/create-page');
    }
}

export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}

export async function createNewPost(post) {
    const response = await client.from('posts').insert(post);
    if (response.data) {
        return response.data;

    } else {
        console.error(response.error);
    }
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');

}

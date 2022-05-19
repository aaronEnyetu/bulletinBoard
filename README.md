## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan


##From Scratch Bulletin Board Plan

Step 1: Database

###Supabase setup###
<Table for data>
-[] Add a new table called 'posts' 
- [] Add three columns { title, description, contact} plus any others you want to include. Can all be varchars.
-[] Copy your key/url into your fetch-utils and add your client code.

```js
const SUPABASE_URL = '';
const SUPABASE_KEY = '';

const client = supabase.createClient
(SUPABASE_URL, SUPABASE_KEY);
```

-[] Add some rows for testing
-[] Enable row level security

Step 2: Posts Page

-[] TDD a render function for displaying your post information
-[] Add your `fetchPosts` to `fetch-utils.js`
-[]Add your policy for selecting data(allow all users)

```js
export async function fetchPosts() {
  const response = await client.from('posts');
  .select('*');
  return response.data;
}
```
_Validation step: console.log the results to make sure am getting the data back from the database_
-[] Add an async `loadData` function that you will call immediately to load the data, loop through and render each item on the page

Step 3: Auth Page
_dont worry about redirects at first_

- Add sign in form
- Add signUser function to `fetchUtils`
- Add event listener to form submit
- Call function and ensure you get a user back from supabase
    _repeat fr sign up_
- Add your redirects


Step 4: Create Page

-[] Add your `create` folder, index.html, and create.js
-[] Add a form for posts in your index.html
-[] Add form event listener, use FormData to get your data from your for
    _Validation step: console.log your FormData to make sure you're getting the info correctly_
-[] Add `createPost` to your `fetch-utils.js`

```js
export async function createPost(post) {
  const response = await client.from('posts').insert(post);
  if (response.data) {
    return response.data;
  } else {
    console.error(response.error);
  }
}
```

-[] Call your create function on form submit
_Validation step: Confirm new data being added to table in Supabase_
-[] Add in our redirects
*If not logged in, redirect to auth page
*Redirect to home after successful insert

Step 5: Add Home Page Header with Links
    ###HTML Home Page###
<Login Button> in the home page
<Create Button> in the home page
<Diplay for styled Array of posts>


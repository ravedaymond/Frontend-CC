const posts = [
    { title: 'Post One', body: 'This is post one.' },
    { title: 'Post Two', body: 'This is post two.' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    return posts;
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            
            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

// Async / Await
// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three' });
//     // We are waiting for the createPost() call to be done before continuing past the await line   
//     getPosts();
// }

// init();

// Async / Await / Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
    // return data;
}

fetchUsers()
// console.log(fetchUsers());
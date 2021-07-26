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

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// getPosts();
// createPost({ title: 'Post Three', body: 'This is post three.' });
// // We don't see post three because the 'DOM was already painted' since getPosts() took 1 less second

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();
createPost({ title: 'Post Three', body: 'This is post three.' }, getPosts);
// We see the new value get added because getPosts() is passed as a callback that will be run at the end of the createPost call




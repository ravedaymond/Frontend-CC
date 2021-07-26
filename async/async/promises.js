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

            const error = true;
            
            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

createPost({title: 'Post Three', body: 'This is post three' })
    .then(getPosts) // Because it's a promise we can use the .then syntax which resolves by calling getPosts().
    .catch(error => console.log(error)); // For rejections, we can handle the catching off the error with the .catch syntax.


// Promise.all
const promise1 = Promise.resolve('p_1 resolved');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'p_3 goodbye'));
// Fetch is a bit weird because you need to do 2 .then calls, the first to format and the second to process
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));
// However long the longest promise is determines when all groups in the Promise.all are fully resolved/returned.




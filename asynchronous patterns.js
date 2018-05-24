// https://codewithmosh.teachable.com/courses/the-complete-node-js-course/lectures/4509880
// Node.js is single-threaded.
// Asynchronous is not multi-threaded or concurrent. 

// SUMMARY
// =======
// 0. Synchronous
// 1. Callbacks 
// 2. Promises (better) 
// 3. Async/await (sugar-coated promises)



// 0. Synchronous

// 1. Callbacks 
// ------------

console.log("Before");
user = getUser(1, displayUser);

function displayUser(user) {
    console.log("User", user);
    getRepositories(1, displayRepositories);
};

function displayRepositories(repos) {
    console.log("Repositories:", repos);
};

function getUser(id, callback) {
    console.log("Reading a user from a database...");
    setTimeout(() => {
        // Disk/Network access => asynchronous programming
        callback({
            id: id,
            username: "Nihar"
        });
    }, 2000);
}

function getRepositories(user, callback) {
    console.log("Reading repos from Git...");
    setTimeout(() => {
        callback(["repo1", "repo2", "repos3"]);
    }, 2000);
}

// 2. Promises (better) 
// -------------------

/* The Promise object represents the eventual completion (or 
failure) of an asynchronous operation, and its resulting 
value. */

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits())
  .then(commits => console.log(commits))
  .catch(err => console.log("Error:", err));

console.log("After");

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({
                id: id,
                gitHubUsername: 'mosh'
            });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            //   resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error("Error: could not get the repos..."));
        }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    })
}


// 3. Async/await (sugar-coated promises)
// --------------------------------------
// The syntax looks like synchronous code
// It is built on promises though. JS will convert
// this code into promises. 

// The await are inside of an async function. 
async function displayCommits() {
    try {
        const user = await getUser(1); // thread is released until the promise returns a result
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos);
        console.log(commits);
    } catch (err) { // this is how we handle errors
        console.log("error:", err);
    }
}
displayCommits();
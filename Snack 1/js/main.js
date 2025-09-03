function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    });
}

function getPost(id) {
    const promisePost = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj))
            .catch(reject)

        const promiseUser = new Promise((resolve, reject) => {
            fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(obj => resolve(obj))
                .catch(reject)
        });
    });


}
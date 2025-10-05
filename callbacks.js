function getPostsWithCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const sortedPosts = data.sort((a, b) => b.title.length - a.title.length);
            callback(sortedPosts);
        })
        .catch(err => console.error(err));
}

// Получение и сортировка комментариев по имени автора
function getCommentsWithCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            const sortedComments = data.sort((a, b) => a.name.localeCompare(b.name));
            callback(sortedComments);
        })
        .catch(err => console.error(err));
}

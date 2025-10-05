//асинхронные функции
// Async функция для постов
async function getPostsAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data.sort((a, b) => b.title.length - a.title.length);
    } catch (err) {
        console.error(err);
    }
}

// Async функция для комментариев
async function getCommentsAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        return data.sort((a, b) => a.name.localeCompare(b.name));
    } catch (err) {
        console.error(err);
    }
}

// Async функция для пользователей
async function getUsersAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data.map(({id, name, username, email, phone}) => ({id, name, username, email, phone}));
    } catch (err) {
        console.error(err);
    }
}

// Async функция для задач
async function getTodosAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data.filter(todo => !todo.completed);
    } catch (err) {
        console.error(err);
    }
}
//await останавливает выполнение функции,пока промис не завершиться

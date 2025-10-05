function getUsersPromise() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.map(({id, name, username, email, phone}) => ({id, name, username, email, phone})));
}

// Получение задач с фильтрацией по completed = false
function getTodosPromise() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => todos.filter(todo => !todo.completed));
}

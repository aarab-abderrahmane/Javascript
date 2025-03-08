document.addEventListener('DOMContentLoaded',function(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then (todos => {
            let todoList = document.getElementById('todo-list');

            todos.forEach(todo => {
                let li = document.createElement('li');
                li.setAttribute('data-id',todo.id);

                li.innerHTML = `
                    <input type="checkbox" ${todo.completed ? "checked" : ""} class="toggle">
                    <p>${todo.title}</p>
                    <button class="delete-btn">delete</button>
                `;

                todoList.appendChild(li)
            });
        })

        .catch(() => alert("Erreur"))
})
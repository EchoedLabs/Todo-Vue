var app = new Vue({
    el: '#todo-app',
    data: {
      todos: [],
      newTodoName: ''
    },
    created: function() {
        if(localStorage.getItem("todos")) this.todos = JSON.parse(localStorage.getItem("todos"));
    },
    methods: {
        toggleDone: function(index) {
            this.todos[index].isDone = !this.todos[index].isDone;
            this.saveToLocalStorage();
        },
        deleteTodo: function(index) {
            this.todos.splice(index, 1);
            this.saveToLocalStorage();
        },
        addTodo: function() {
            const newTodo = {
                name: this.newTodoName,
                isDone: false
            };
            this.todos.unshift(newTodo);
            this.saveToLocalStorage();
            this.newTodoName = '';
        },
        saveToLocalStorage: function() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    }
  })
var app = new Vue({
    el: '#todo-app',
    data: {
      todos: [],
      newTodoName: ''
    },
    methods: {
        toggleDone: function(index) {
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        deleteTodo: function(index) {
            this.todos.splice(index, 1);
        },
        addTodo: function() {
            const newTodo = {
                name: this.newTodoName,
                isDone: false
            }
            this.todos.push(newTodo)
        }
    }
  })
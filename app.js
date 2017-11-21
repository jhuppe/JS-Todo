var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  editTodo: function(position, span) {
    this.todos[position].span = span;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1)
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !this.completed;
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();

  },
  editTodo: function(position) {
    // var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    // var editTodoText = document.getElementById('editTodoText');
    // todoList.editTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    // changeTodoPositionInput.value = '';
    // changeTodoTextInput.value = '';
    // if ()
    var todoItem = this.parentNode;
    var editInput = todoItem.querySelector('input[type=text]');
    var span = todoItem.querySelector('span');
    var containsClass = todoItem.classList.contains('editMode')

    if (containsClass) {
    span.innerText = editInput.value;
} else {
    editInput.value = span.innerText;
}
  // view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  completeTodo: function() {
    if (classList.contains(''))
    // var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    // todoList.completetodo('toggleCompletedPositionInput.valueAsNumber');
    // toggleCompletedPositionInput.value = '';
    // view.displayTodos();
  };
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function(todo, position){
      var todoLi = document.createElement('li');
      document.createElement('div').classList.add('span');
      var span = '';

     if (todo.completed === true) {
       todoTextWithCompletion = '(x) ' + todo.todoText;
     } else {
       todoTextWithCompletion = todo.todoText;
     }
     todoLi.id = position;
     todoLi.textContent = span;
     todoLi.appendChild(this.createCheckbox());
     todoLi.appendChild(this.createSpan(position));
     todoLi.appendChild(this.createEditButton());
     todoLi.appendChild(this.createDeleteButton());


     //  todoLi.appendChild(this.editTodoText());
     todosUl.appendChild(todoLi);
 }, this);
  },
  createCheckbox: function(){
    var todoItemCheckbox = document.createElement('input');
    todoItemCheckbox.type = 'checkbox';
    todoItemCheckbox.className = 'todoItemCheckbox';
    return todoItemCheckbox;
  },
  createSpan: function(position){
    var span = document.createElement('span');
    span.innerText = todoList.todos[position].todoText;
    return span;
  },
  createEditButton: function(){
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'editButton';
    return editButton;
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {

      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });

    var editItem = document.querySelector('ul');

    editItem.addEventListener('click', function(event) {
      var elementClicked = event.target;
      if (elementClicked.className === 'editButton') {
       elementClicked.parentElement.classList.add("editMode");
        // handlers.changeTodo()
      }
    });

    var completeItem = document.querySelector('todoItemCheckbox');

    completeItem.addEventListener('click', function(event) {
      var elementChecked = event.target;
        if(elementChecked.className === 'todoItemCheckbox') {
          elementChecked.parentElement.classList.add('completed');
          handlers.completeTodo();
        }
    });


  }
};

// view.setUpEventListeners();

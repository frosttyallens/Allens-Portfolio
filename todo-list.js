const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];

displayTodo();

function displayTodo() {
  let todoListHTML = '';
  if (todoArray.length !== 0) {
    for (let i = 0 ; i < todoArray.length ; i++) {
      const { name, date } = todoArray[i];
      const html = `
        <div class="todo-name todos result">${name}</div>
        <div class="todo-date todos result">${date}</div> 
        <button class="css-delete-button result"
        onclick="
        todoArray.splice(${i}, 1);
        displayTodo();
        ">Delete</button>
      `;
      todoListHTML += html;
      console.log(todoListHTML);
      document.querySelector('.js-display-todo')
        .innerHTML = todoListHTML;
    }
  } else {
    document.querySelector('.js-display-todo')
        .innerHTML = '';
  }

  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}

function pushTodo() {
  const inputElement = document.querySelector('.js-todo-name');
  const name = inputElement.value; 

  if (name === '') {
    alert('Please enter a TODO!');
  } else {
    const dateElement = document.querySelector('.js-todo-due-date')
    let date = dateElement.value;

    if (!date) {
      date = "NO DUE DATE"
    } else {
      date = "WHEN: " + date;
    }
    todoArray.push({
      name,
      date
      });

    inputElement.value = '';
    dateElement.value = '';

    displayTodo();
  }

  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}
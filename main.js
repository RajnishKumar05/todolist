document.getElementById('add-button').addEventListener('click', function() {
  let inputValue = document.getElementById('todo-input').value;
  if (inputValue) {
      addTodoItem(inputValue);
      document.getElementById('todo-input').value = ''; // Clear the input after adding
  }
});

function addTodoItem(task) {
  let li = document.createElement('li');
  li.textContent = task;

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
      li.remove();
  };

  li.appendChild(deleteBtn);

  // Toggle complete/incomplete state
  li.addEventListener('click', function() {
      li.classList.toggle('completed');
  });

  document.getElementById('todo-list').appendChild(li);
}

const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();

  if (todoText === "") return;

  const li = document.createElement("li");
  li.textContent = todoText;

  // 클릭 시 완료 처리
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // 오른쪽 클릭 시 삭제
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  todoList.appendChild(li);
  todoInput.value = "";
});

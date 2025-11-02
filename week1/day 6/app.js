// === STATE ===
// if tasks exist in storage, use them; else empty list
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// === SELECT DOM ELEMENTS ===
const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");

function countDone(arr) {
  // Count how many tasks where done === true
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].done === true) count++;
  }
  return count;
}

function updateCounts() {
  const counts = document.querySelector('#counts');
  const done = countDone(tasks);
  const total = tasks.length;
  counts.textContent = `Completed ${done} / Total ${total}`;
}

// === RENDER UI ===
function render() {
  list.innerHTML = ""; // clear UI before re-drawing

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) li.classList.add("done");

    // toggle done
    li.addEventListener("click", () => {
      task.done = !task.done;
      save();
      render();
    });

    // delete button
    const del = document.createElement("button");
    del.textContent = "x";
    del.addEventListener("click", (e) => {
      e.stopPropagation(); // avoid triggering toggle
      tasks.splice(index, 1);
      save();
      render();
    });

    li.appendChild(del);
    list.appendChild(li);
  });
}

// === SAVE TO LOCAL STORAGE ===
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// === FORM HANDLER ===
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  save();
  render();
  form.reset();
});

// first render on page load
render();
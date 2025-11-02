// ----- 1.  Select elements -----
const title = document.querySelector("#title");
const toggle = document.querySelector("#toggle");
const greet = document.querySelector("#greet");
const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");

// ----- 2.  Basic text + style manipulation -----
title.textContent = "Hello, Joseph Nwoke";

// Toggle paragraph visibility
toggle.addEventListener("click", () => {
  greet.classList.toggle("hidden");
  greet.textContent = greet.classList.contains("hidden")
    ? "Greeting hidden!"
    : "Nice to see you again!";
});

// ----- 3.  Dynamic list rendering -----
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  // mark as done
  li.addEventListener("click", () => li.classList.toggle("done"));

  // remove on double click
  li.addEventListener("dblclick", () => li.remove());

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent marking as done
    li.remove();
  });
  li.appendChild(deleteBtn);

  list.appendChild(li);
  form.reset();
});
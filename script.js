"use strict";

const appContainer = document.querySelector(".container");
const newTask = document.querySelector(".newtask");
const inputTask = document.querySelector(".input-task");
const addTask = document.querySelector(".add-task");
const tasksContainer = document.querySelector(".tasks-container");

addTask.addEventListener("click", () => {
  if (inputTask.value === "") {
    alert("Kindly enter a valid task");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputTask.value;
    tasksContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "&#120";
    li.appendChild(span);
  }

  inputTask.value = "";
  inputTask.focus();
  storeTask();
});

tasksContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  storeTask();
});

function storeTask() {
  localStorage.setItem("data", tasksContainer.innerHTML);
}

function showTask() {
  tasksContainer.innerHTML = localStorage.getItem("data");
}

showTask();

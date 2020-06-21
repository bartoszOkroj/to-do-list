import getAndRenderTasks from "./getAndRenderTasks.js";
import addTask from "./addTask.js";

const listOfTasks = document.querySelector('#list-of-tasks');
const url = 'http://51.75.120.145:3000/todo'

function main() {
   getAndRenderTasks(listOfTasks,url);
   addTask(listOfTasks, url);
}
document.addEventListener('DOMContentLoaded', main);
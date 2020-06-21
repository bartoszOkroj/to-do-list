import deleteTask from "./deleteTask.js"
import updateTask from "./updateTask.js";

export default function getAndRenderTasks (listOfTasks, url) {

    fetch(url, {method: 'GET'}).then(response => response.json())
        .then(response =>{
            for (let i=0; i<response.length; i++) {
                const task = document.createElement('li');
                task.id=response[i].id;
                const taskTitle = document.createElement('span');
                const taskDes = document.createElement('span');
                const taskPriority = document.createElement('span');
                const taskUrl = document.createElement('span');
                const taskRemove = document.createElement('button');
                const taskUpdate = document.createElement('button');
                taskRemove.classList.add('btn-delete')
                taskUpdate.classList.add('btn-update')
                taskTitle.innerText = response[i].title;
                taskDes.innerText = response[i].description;
                taskPriority.innerText = response[i].priority;
                taskUrl.innerText = response[i].url;
                taskRemove.innerText = 'usuń';
                taskUpdate.innerText = 'zmień tytul';
                task.appendChild(taskTitle);
                task.appendChild(taskDes);
                task.appendChild(taskPriority);
                task.appendChild(taskUrl);
                task.appendChild(taskRemove);
                task.appendChild(taskUpdate);
                listOfTasks.appendChild(task);

                taskRemove.addEventListener("click", function (event) {
                    deleteTask(task.id, url, task);
                })

                taskUpdate.addEventListener("click", function (event) {
                    updateTask(task.id, url, task, taskTitle, taskUpdate);
                    taskUpdate.remove();
                })
            }
    });
    return listOfTasks;
}
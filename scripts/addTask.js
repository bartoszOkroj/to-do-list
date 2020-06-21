import getAndRenderTasks from "./getAndRenderTasks.js";

export default function addTask(listOfTasks, url) {
    const task = {
        title: '',
        description: '',
        priority: 1,
        url: '',
    }

    const btnAdd = document.querySelector("#add-task")
    btnAdd.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'button') {
            const box = document.querySelector('#box');
            box.style.display = 'flex';
            const title = document.createElement('input');
            const description = document.createElement('input');
            const priority = document.createElement('input');
            priority.setAttribute('type' , 'number');
            const urlInput = document.createElement('input');
            const add = document.createElement('button')
            add.innerText = 'dodaj';
            box.appendChild(title);
            box.appendChild(description);
            box.appendChild(priority);
            box.appendChild(urlInput);
            box.appendChild(add);

            add.addEventListener("click", function (event) {
                task.title = title.value;
                task.description = description.value;
                task.priority = priority.value;
                task.url = url.value;

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({title: task.title, description: task.description, priority:task.priority, url:task.url} ),
                    })
                    .then (response => response.json())
                    .then( () => {
                        listOfTasks.innerHTML = '';
                        getAndRenderTasks(listOfTasks, url);
                    })
                title.remove();
                description.remove();
                priority.remove();
                urlInput.remove();
                add.remove();
            })
        }
    })
}
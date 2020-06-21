export default function updateTask (id, url, task, taskTitle, taskUpdate) {

    url = url + '/' + id ;
    let change = '';
    const newTitle = document.createElement('input');
    const changeTitle = document.createElement('button')
    changeTitle.innerText = 'zmień';
    task.appendChild(newTitle);
    task.appendChild(changeTitle);

    changeTitle.addEventListener("click", function (event) {
        change = newTitle.value;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: change}),
        })
            .then(response => response.json())
        taskTitle.innerText = change;
        newTitle.remove();
        changeTitle.remove();
        task.appendChild(taskUpdate);
    })
    return taskTitle
}
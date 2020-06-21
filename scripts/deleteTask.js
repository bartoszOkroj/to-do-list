export default function deleteTask(id, url, task) {
    url = url + '/' + id ;

    fetch(url, {method:'DELETE'})
        .then(response => response.json());
    task.remove();
}
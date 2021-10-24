function checkTask(id) {
    task_row = document.getElementById(id);
    current_tasks = JSON.parse(localStorage.getItem("active"));

    // находим порядковый номер задачи в массиве для последующего удаления
    for (let i = 0; i < current_tasks.length; i++) {
        if (id == current_tasks[i]['id']) {
            delete_index = i
            break
        }
    }

    // запоминаем завершенную задачу
    temp_task = current_tasks[delete_index];

    // убираем активную задачу
    current_tasks.splice(delete_index, 1);

    // обновляем массив активных задач в localStorage
    current_tasks = JSON.stringify(current_tasks);
    localStorage.setItem("active", current_tasks);

    completed_tasks = JSON.parse(localStorage.getItem('completed'));

    // если списка завершенных задач не существует, то создаем его
    if (completed_tasks == null) {
        completed_tasks = []
    }

    // помещаем задачу в завершенные
    completed_tasks.push(temp_task);

    // обновляем массив завершенных задач
    completed_tasks = JSON.stringify(completed_tasks);
    localStorage.setItem("completed", completed_tasks);

    task_row.innerHTML = "<td colspan = 2><a class = 'text_ok'>Задача завершена!</a></td>";
}

function deleteTask(id) {
    task_row = document.getElementById(id);
    current_tasks = JSON.parse(localStorage.getItem("active"));

    // находим порядковый номер задачи в массиве для последующего удаления
    for (let i = 0; i < current_tasks.length; i++) {
        if (id == current_tasks[i]['id']) {
            delete_index = i
            break
        }
    }

    // убираем активную задачу
    current_tasks.splice(delete_index, 1);

    // обновляем массив активных задач в localStorage
    current_tasks = JSON.stringify(current_tasks);
    localStorage.setItem("active", current_tasks);

    task_row.innerHTML = "<td colspan = 2><a class = 'text_err'>Задача удалена!</a></td>";
}


window.onload = function () {

    // если вдруг почистить надо будет
    // localStorage.removeItem("active");
    // localStorage.removeItem("completed");

    page = sessionStorage.getItem("page");
    app = document.getElementById("app");

    if (page == "active") {
        active_page();
    }
    else if (page == "completed") {
        completed_page();
    }
    else if (page == "add") {
        add_page();
    }
    else {
        index_page();
    }

    function index_page() {
        sessionStorage.setItem("page", "index");
        app.innerHTML = index_html();

        btn_active = document.getElementById("btn_active");
        btn_active.onclick = function () {
            active_page();
        }

        btn_completed = document.getElementById("btn_completed");
        btn_completed.onclick = function () {
            completed_page();
        }

        add_task = document.getElementById("add_task");
        add_task.onclick = function () {
            add_page();
        }
    }

    function active_page() {
        sessionStorage.setItem("page", "active");
        app.innerHTML = active_html();

        btn_back = document.getElementById("btn_back");
        btn_back.onclick = function () {
            index_page();
        }

        add_task = document.getElementById("add_task");
        add_task.onclick = function () {
            add_page();
        }

        current_tasks = JSON.parse(localStorage.getItem("active"));

        active_table = document.getElementById("active_table");
        active_table.innerHTML = `
        <tr>
            <td>Задача</td>
            <td>Опции</td>
        </tr>
        `;

        // заполняем таблицу, если задачи существуют
        if (current_tasks != null) {
            for (let i = 0; i < current_tasks.length; i++) {
                task_id = current_tasks[i]['id'];
                task_name = current_tasks[i]['name'];
                task_date = current_tasks[i]['date'];
                active_table.innerHTML += "<tr id = '" + task_id + "'><td>" + task_name + " " + task_date + "</td><td><img src = 'images/check.svg' onclick = 'checkTask(" + task_id + ")' class = 'icon'><img src = 'images/delete.svg' class = 'icon' onclick = 'deleteTask(" + task_id + ")'></td></tr>";
            }
        }
    }

    function completed_page() {
        sessionStorage.setItem("page", "completed");
        app.innerHTML = completed_html();

        btn_back = document.getElementById("btn_back");
        btn_back.onclick = function () {
            index_page();
        }

        add_task = document.getElementById("add_task");
        add_task.onclick = function () {
            add_page();
        }

        completed_tasks = JSON.parse(localStorage.getItem("completed"));

        completed_table = document.getElementById("completed_table");
        completed_table.innerHTML = `
        <tr>
            <td>Задача</td>
        </tr>
        `;

        // заполняем таблицу, если задачи существуют
        if (completed_tasks != null) {
            for (let i = 0; i < completed_tasks.length; i++) {
                task_id = completed_tasks[i]['id'];
                task_name = completed_tasks[i]['name'];
                task_date = completed_tasks[i]['date'];
                completed_table.innerHTML += "<tr id = '" + task_id + "'><td>" + task_name + " " + task_date + "</td></tr>";
            }
        }
    }

    function add_page() {
        sessionStorage.setItem("page", "add");
        app.innerHTML = add_html();

        btn_back = document.getElementById("btn_back");
        btn_back.onclick = function () {
            index_page();
        }

        add_task = document.getElementById("add_task");
        add_task.onclick = function () {
            add_page();
        }

        btn_accept = document.getElementById("btn_accept");
        btn_accept.onclick = function () {
            task_name = document.getElementById("ent_task").value;
            if (task_name.length != 0) {
                // получаем список текущих задач и переводим из json в массив
                current_tasks = JSON.parse(localStorage.getItem("active"));

                // если задач нет, то создаем пустой список и ставим нулевой айди задаче
                if (current_tasks == null || current_tasks.length == 0) {
                    current_tasks = [];
                    next_id = 0;
                }
                else {
                    // если задачи есть, то id новой увеличиваем на единицу
                    next_id = current_tasks[(current_tasks.length) - 1]['id'] + 1;
                }

                // узнаем текущую дату и время, формируем объект и толкаем в массив
                date_time = new Date().toLocaleString();
                task = {
                    id: next_id,
                    name: task_name,
                    date: date_time
                }
                current_tasks.push(task);

                // после добавления задачи переводим массив в json и сохраняем
                current_tasks = JSON.stringify(current_tasks);
                localStorage.setItem("active", current_tasks);

                alert("Задача добавлена!");
                document.getElementById("ent_task").value = "";
            }
            else {
                alert("Введите задачу!")
            }
        }
    }
}
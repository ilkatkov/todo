function index_html() {
    return `
        <header>
            <div id = "logo">
                <img src = 'images/logo.svg' alt = 'Логотип', id = 'logo_img'>
                <p id = "logo_label">ToDoList by Katkov</p>
            </div>
            <nav>
                <a id = "add_task">Добавить задачу</a>
            </nav>
        </header>

        <section>
            <div id = "content">
                <input type = 'button' id = "btn_active" value = 'Активные'>
                <input type = 'button' id = "btn_completed" value = 'Выполненные'>
            </div>
        </section>
`
}

function active_html() {
    return `
        <header>
            <div id = "logo">
                <img src = 'images/logo.svg' alt = 'Логотип', id = 'logo_img'>
                <p id = "logo_label">ToDoList by Katkov</p>
            </div>
            <nav>
                <a id = "add_task">Добавить задачу</a>
            </nav>
        </header>

        <section>
            <div id = "content">
                <h1>Активные задачи</h1>
                <table id = "active_table">
                </table>
                <input type = 'button' id = "btn_back" value = 'Назад'>
            </div>
        </section>
    `
}

function completed_html() {
    return `
        <header>
            <div id = "logo">
                <img src = 'images/logo.svg' alt = 'Логотип', id = 'logo_img'>
                <p id = "logo_label">ToDoList by Katkov</p>
            </div>
            <nav>
                <a id = "add_task">Добавить задачу</a>
            </nav>
        </header>

        <section>
            <div id = "content">
                <h1>Завершенные задачи</h1>
                <table id = "completed_table">
                </table>
                <input type = 'button' id = "btn_back" value = 'Назад'>
            </div>
        </section>
    `
}

function add_html() {
    return `
        <header>
            <div id = "logo">
                <img src = 'images/logo.svg' alt = 'Логотип', id = 'logo_img'>
                <p id = "logo_label">ToDoList by Katkov</p>
            </div>
            <nav>
                <a id = "add_task">Добавить задачу</a>
            </nav>
        </header>

        <section>
            <div id="content">
                <h1>Добавление задачи</h1>
                <input type="text" id="ent_task" placeholder="Введите задачу">
                <input type="button" id="btn_accept" value="Окей">
                <input type = 'button' id = "btn_back" value = 'Назад'>
            </div>
            
        </section>
    `
}
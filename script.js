// script.js

// Inicializar el modo oscuro/claro
document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Función para agregar curso
document.getElementById('add-course-btn').addEventListener('click', function () {
    const courseName = document.getElementById('course-name').value;
    const platform = document.getElementById('platform').value;
    const progress = document.getElementById('progress').value;

    const table = document.getElementById('courses-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${courseName}</td>
        <td>${platform}</td>
        <td>${progress}%</td>
        <td><button class="delete-btn">Eliminar</button></td>
    `;

    // Limpiar los campos de entrada
    document.getElementById('course-name').value = '';
    document.getElementById('platform').value = '';
    document.getElementById('progress').value = '';

    // Evento para eliminar curso
    newRow.querySelector('.delete-btn').addEventListener('click', function () {
        newRow.remove();
    });
});

// Inicializar FullCalendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Curso JavaScript',
                start: '2024-09-01',
                end: '2024-09-02'
            },
            {
                title: 'Revisión de HTML/CSS',
                start: '2024-09-05'
            }
        ],
        height: 'auto',  // Ajusta el tamaño automáticamente
        contentHeight: 300,  // Establece una altura fija
    });
    calendar.render();
});

// Función para guardar notas
document.getElementById('save-note-btn').addEventListener('click', function () {
    const noteInput = document.getElementById('note-input').value;
    alert("Nota guardada: " + noteInput);
    document.getElementById('note-input').value = '';
});

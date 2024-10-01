// Lista completa de personas por equipo
const nombresCallCenter = [
    "José Roberto Herrera Artiga",
    "Hazel Abigail Servellón Campos",
    "Marcella Michelle Alvarado Reyes",
    "Maria de los angeles polanco umaña",
    "Salvador Alexander Paiz Sanchez",
    "Roxana Patricia Gonzalez Perez",
    "Carlos Antonio Campos Hernandez",
    "Melissa Estefany Obispo Garcia",
    "Melvin Oswaldo Gallardo Gonzalez",
    "Bryan Ernesto Rodriguez Cerna",
    "Mayra Carolina Alvarado Ortiz",
    "Rosa Anayeli Sanchez Campos",
    "Marcela Dinorah Flamenco Castillo",
    "Luis David Vasquez Herrera",
    "Herbert Misael Cortez Ruiz",
    "Jose Manuel Hernandez Guzman",
    "José Héctor Landaverde Mancía",
    "Luisana del Carmen Martinez Mena",
    "Elena Emperatriz Vasquez Mena",
    "Sofia Maricela Polanco",
    "Hugo Rigoberto Velis Bonilla",
    "Kenya Esmeralda Ayala Galdámez",
    "Estrella Reneé Herrera Avalos",
    "Carlos Eduardo Beltran Castillo",
    "Douglas Stanley Martinez Flores",
    "Marcela Alejandra Sanchez Abarca",
    "Alvin Ernesto Flores Martinez",
    "Eldaí Noemí Argueta García",
    "Josué Adolfo Ángel Hernández",
    "Luis Enrique Alas Rivas",
    "Katherine Aleyda Caishpal Lopez",
    "Estefania Elizabeth Padilla Orellana",
    "Josue Orlando Hernandez Aquino",
    "Jose Saul Hernandez Nolasco",
    "Edwin Edgardo Chicas Rodriguez",
    "Jennifer Elizabeth Vasquez Rivas",
    "Oscar Mauricio Cartagena Quintanilla",
    "Kimberli Patricia Martinez Ponce",
    "Jose Mauricio Dimas Baires",
    "Karla Lizeth Vasquez Flores",
    "Ricardo Josué Naranjo Alegría",
    "Ada Elena Aviles Hernandez",
    "Kriscia Lorena Rios Berrios",
    "Mariela Carolina Alvarado Rivera",
    "Manuela Martina Pacheco Escobar",
    "Brayan Yahir Del Cid Vasquez",
    "Delmy Stephanie Santos Hernandez",
    "Jose Alonso Rodriguez Henriquez",
    "Glenda Nicole Ayala Galdámez",
    "Henry Josue Melgar Montenegro",
    "Evelyn Patricia Montes Gutierrez",
    "Krissia Mariela Hernandez Esquivel",
    "Luis Arturo García Reyes",
    "Cristobal Javier Guzman Medina",
    "Rodrigo Misael Cruz López",
    "Linnsy Alejandra Gamez Rivera",
    "Susana Teresa Reyes Guerra",
    "Doris Jeannette Monterrosa Rivas",
    "Perla del Rocio Vasquez Martinez",
    "Lilian Lisbeth Molina Aldana",
    "Johana Milena Quintanilla Calderón",
    "Sofhia Natalia Mauricio Hurtado",
    "Kimberly Nathaly Contreras Gonzalez",
    "Francisco Javier Torres Torres",
    "Oscar René Zelaya Duran",
    "Francisco Eliseo Alvarado Viches",
    "Kevin Antonio Giron Ortiz",
    "Sandra Yanira Quintanilla Hernandez",
    "Carlos Alberto Zelaya",
    "Carmen Elena Medrano Quinteros",
    "Alejandra Guadalupe Novoa Hernandez",
    "Sandra Daniela Suárez Merlos",
    "Walter René Garcia Carpio",
    "Alberto Balmore Martinez Hernandez",
    "Christopher Arnoldo Flores Contreras",
    "Angélica María López Moreira",
    "Ana Griselda Polanco Valladares",
    "Josué Alexander Ramos Fernández",
    "Elba Elizabeth Monterrosa Macias",
    "Carolina Ivette Bonilla Lopez",
    "Miguel Dagoberto Hernandez Mancia",
    "Ricardo Enrique Acevedo Alfaro",
    "Andrea Maria Ardon Barrera",
    "Anderson David Munguia Castillo",
    "Emely Jimena López Hernández",
    "Axel Jarick Torres Garcia",
    "Salvador de Jesus Lopez Zometa",
    "Salvador Eliezer Rodríguez López",
    "Marco Andre Gonzalez Franco",
    "Elizabeth Concepcion Flores Deras"
];

const nombresCentroHistorico = [
    "Nelson Edgardo Hernandez Hernandez - CH AMSS",
    "Ariel Alfredo Elias Alvarez - CH AMSS",
    "Astrid Hillary Campos de Jimenez - CH AMSS",
    "Fernanda Estefaniia Peña Valladares - CH APLAN",
    "Fabricio Humberto Lopez Baches - ASAMBLEA"
    // Añadir más nombres del Centro Histórico
];

const nombresCentroMonitoreo = [
    "Jose David Jimenez Rivera",
    "Xavier Fabricio Moran Rivas",
    "Flavio Emmanuel Alfaro Arevalo",
    "Diego Alexander Cea Hernandez",
    "Alba del Rosario Lopez Perez",
    "Carlos Roberto Carranza Garcia",
    "Emanuel de Jesus Hernandez Ramirez",
    "Javier Enrique Velasquez Quinteros",
    "William Daniel Paredes Cruz"
    // Añadir más nombres del Centro de Monitoreo
];

// Variable global para guardar el equipo seleccionado
let equipoSeleccionado = "";

// Capturar elementos del DOM
const form = document.getElementById('attendanceForm');
const tableBody = document.querySelector('#attendanceTable tbody');
const searchNameInput = document.getElementById('searchName');
const showAbsencesButton = document.getElementById('showAbsencesButton');
const absenceDateInput = document.getElementById('absenceDate');
const absencesTableBody = document.getElementById('absencesTableBody');
const downloadXlsxButton = document.getElementById('downloadXlsx');
const downloadAbsencesXlsxButton = document.getElementById('downloadAbsencesXlsx');
const volverAlMenuButton = document.getElementById('volverAlMenu');
const callCenterButton = document.getElementById('callCenterButton');
const centroHistoricoButton = document.getElementById('centroHistoricoButton');
const centroMonitoreoButton = document.getElementById('centroMonitoreoButton');
const formularioAsistencia = document.getElementById('formularioAsistencia');
const menuSeleccionEquipo = document.getElementById('menuSeleccionEquipo');

// 1. Manejo de selección de equipo con asignación de tema
callCenterButton.addEventListener('click', function () {
    equipoSeleccionado = "Call Center";
    localStorage.setItem('equipoSeleccionado', equipoSeleccionado); // Guardar el equipo en localStorage
    cargarNombres(nombresCallCenter);
    aplicarTema('call-center-theme'); // Aplicar tema específico del equipo
    mostrarFormularioAsistencia();
});

centroHistoricoButton.addEventListener('click', function () {
    equipoSeleccionado = "Centro Histórico";
    localStorage.setItem('equipoSeleccionado', equipoSeleccionado); // Guardar el equipo en localStorage
    cargarNombres(nombresCentroHistorico);
    aplicarTema('centro-historico-theme'); // Aplicar tema específico del equipo
    mostrarFormularioAsistencia();
});

centroMonitoreoButton.addEventListener('click', function () {
    equipoSeleccionado = "Centro de Monitoreo";
    localStorage.setItem('equipoSeleccionado', equipoSeleccionado); // Guardar el equipo en localStorage
    cargarNombres(nombresCentroMonitoreo);
    aplicarTema('centro-monitoreo-theme'); // Aplicar tema específico del equipo
    mostrarFormularioAsistencia();
});

// Función para aplicar tema según el equipo
function aplicarTema(tema) {
    // Primero removemos cualquier tema previo
    formularioAsistencia.classList.remove('call-center-theme', 'centro-historico-theme', 'centro-monitoreo-theme');
    
    // Aplicamos el nuevo tema según el equipo seleccionado
    formularioAsistencia.classList.add(tema);
}

// Al cargar la página, si hay un equipo seleccionado, aplicamos el tema correspondiente
window.onload = function() {
    loadFromLocalStorage();

    equipoSeleccionado = localStorage.getItem('equipoSeleccionado') || '';
    if (equipoSeleccionado) {
        if (equipoSeleccionado === "Call Center") {
            cargarNombres(nombresCallCenter);
            aplicarTema('call-center-theme');
        } else if (equipoSeleccionado === "Centro Histórico") {
            cargarNombres(nombresCentroHistorico);
            aplicarTema('centro-historico-theme');
        } else if (equipoSeleccionado === "Centro de Monitoreo") {
            cargarNombres(nombresCentroMonitoreo);
            aplicarTema('centro-monitoreo-theme');
        }
        mostrarFormularioAsistencia();
    } else {
        mostrarMenuSeleccion();
    }
};

// 2. Función para cargar los nombres en el datalist dinámicamente
function cargarNombres(nombres) {
    const datalist = document.getElementById('nombres');
    datalist.innerHTML = '';
    nombres.forEach(nombre => {
        const option = document.createElement('option');
        option.value = nombre;
        datalist.appendChild(option);
    });
}

// 3. Funciones para mostrar/ocultar secciones
function mostrarFormularioAsistencia() {
    menuSeleccionEquipo.style.display = 'none';
    formularioAsistencia.style.display = 'block';
}

function mostrarMenuSeleccion() {
    menuSeleccionEquipo.style.display = 'block';
    formularioAsistencia.style.display = 'none';
}

// 4. Evento para regresar al menú de selección
volverAlMenuButton.addEventListener('click', function () {
    mostrarMenuSeleccion();
});

// 5. Función de carga de datos desde localStorage al iniciar la página
window.onload = function () {
    loadFromLocalStorage();
};

function loadFromLocalStorage() {
    const storedData = localStorage.getItem('attendanceRecords');
    if (storedData) {
        const records = JSON.parse(storedData);
        tableBody.innerHTML = '';  // Limpiar la tabla

        const registrosFiltrados = records.filter(record => record.equipo === equipoSeleccionado);

        registrosFiltrados.forEach(record => {
            const { nombre, horaEntrada, fechaEntrada, horaSalida, fechaSalida, botonDeshabilitado } = record;
            addRowToTable(nombre, horaEntrada || '', fechaEntrada || '', horaSalida || '', fechaSalida || '', botonDeshabilitado || false);
        });
    }
}

// 6. Función para añadir una nueva fila a la tabla
function addRowToTable(nombre, horaEntrada, fechaEntrada, horaSalida = '', fechaSalida = '', botonDeshabilitado = false) {
    const newRow = document.createElement('tr');

    const horaSalidaTd = document.createElement('td');
    horaSalidaTd.textContent = horaSalida || '';

    const fechaSalidaTd = document.createElement('td');
    fechaSalidaTd.textContent = fechaSalida || '';

    const botonSalida = document.createElement('button');
    botonSalida.textContent = 'Salida';
    botonSalida.classList.add('btn', 'btn-primary');
    botonSalida.disabled = botonDeshabilitado;

    if (botonDeshabilitado) {
        botonSalida.style.backgroundColor = 'blue';
        botonSalida.style.color = 'white';
    }

    botonSalida.addEventListener('click', function () {
        const now = new Date();
        const horaSalida = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        const fechaSalida = formatearFecha(now);

        horaSalidaTd.textContent = horaSalida;
        fechaSalidaTd.textContent = fechaSalida;

        botonSalida.disabled = true;
        botonSalida.style.backgroundColor = 'blue';
        botonSalida.style.color = 'white';

        const storedData = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
        const updatedRecords = storedData.map(record => {
            if (record.nombre === nombre && record.fechaEntrada === fechaEntrada) {
                record.horaSalida = horaSalida;
                record.fechaSalida = fechaSalida;
                record.botonDeshabilitado = true;
            }
            return record;
        });
        saveToLocalStorage(updatedRecords);
    });

    newRow.innerHTML = `
        <td>${nombre}</td>
        <td>${horaEntrada}</td>
        <td>${fechaEntrada}</td>
    `;
    newRow.appendChild(horaSalidaTd);
    newRow.appendChild(fechaSalidaTd);

    const accionTd = document.createElement('td');
    accionTd.appendChild(botonSalida);
    newRow.appendChild(accionTd);

    tableBody.appendChild(newRow);
}

function formatearFecha(fecha) {
    const dateObj = new Date(fecha);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function saveToLocalStorage(records) {
    localStorage.setItem('attendanceRecords', JSON.stringify(records));
}

// 7. Función para registrar asistencia
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value;

    if (!nombre) {
        alert('Por favor, seleccione o escriba un nombre válido');
        return;
    }

    const now = new Date();
    const horaEntrada = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    const fechaEntrada = formatearFecha(now);

    addRowToTable(nombre, horaEntrada, fechaEntrada);

    const storedData = localStorage.getItem('attendanceRecords')
        ? JSON.parse(localStorage.getItem('attendanceRecords'))
        : [];

    storedData.push({
        nombre,
        horaEntrada,
        fechaEntrada,
        horaSalida: '',
        fechaSalida: '',
        botonDeshabilitado: false,
        equipo: equipoSeleccionado  // Guardar el equipo seleccionado con el registro
    });

    saveToLocalStorage(storedData);
    form.reset();
});

/////////////////////

// Evento para filtrar por rango de fechas
const filterButton = document.getElementById('filterButton');
filterButton.addEventListener('click', function () {
    const filterStartDate = document.getElementById('filterStartDate').value;
    const filterEndDate = document.getElementById('filterEndDate').value;

    // Validar que ambos campos de fecha estén llenos
    if (!filterStartDate || !filterEndDate) {
        alert('Por favor, selecciona ambas fechas: de inicio y fin.');
        return;
    }

    // Convertir las fechas a objetos Date para comparaciones
    const startDate = new Date(filterStartDate);
    const endDate = new Date(filterEndDate);

    // Limpiar la tabla antes de aplicar el filtro
    tableBody.innerHTML = '';

    // Obtener los registros almacenados en LocalStorage
    const storedData = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    // Filtrar los registros que caigan dentro del rango de fechas seleccionadas
    const registrosFiltrados = storedData.filter(record => {
        const fechaEntrada = new Date(record.fechaEntrada);
        // Verificar que la fecha de entrada esté dentro del rango
        return fechaEntrada >= startDate && fechaEntrada <= endDate;
    });

    // Mostrar los registros filtrados en la tabla
    registrosFiltrados.forEach(record => {
        addRowToTable(record.nombre, record.horaEntrada, record.fechaEntrada, record.horaSalida, record.fechaSalida, record.botonDeshabilitado);
    });

    // Mostrar mensaje si no hay registros en el rango de fechas seleccionado
    if (registrosFiltrados.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6">No hay registros para el rango de fechas seleccionado.</td></tr>';
    }
});


/////////////////////

const clearFilterButton = document.getElementById('clearFilterButton');
clearFilterButton.addEventListener('click', function () {
    // Limpiar los campos de fecha
    document.getElementById('filterStartDate').value = '';
    document.getElementById('filterEndDate').value = '';

    // Limpiar la tabla
    tableBody.innerHTML = '';

    // Restaurar todos los registros desde localStorage
    loadFromLocalStorage();
});

/////////////////////

// 9. Función para mostrar ausencias por días
function mostrarAusenciasParaTodosLosDias() {
    absencesTableBody.innerHTML = '';

    const storedData = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    const registrosDelEquipo = storedData.filter(record => record.equipo === equipoSeleccionado);
    const fechasUnicas = [...new Set(registrosDelEquipo.map(record => record.fechaEntrada))];

    fechasUnicas.forEach(fecha => {
        const registrosDelDia = registrosDelEquipo.filter(record => formatearFecha(record.fechaEntrada) === formatearFecha(fecha));
        const asistentesFecha = registrosDelDia.map(record => record.nombre.trim().toLowerCase());

        let nombresNormalizados;
        if (equipoSeleccionado === "Call Center") {
            nombresNormalizados = nombresCallCenter.map(nombre => nombre.trim().toLowerCase());
        } else if (equipoSeleccionado === "Centro Histórico") {
            nombresNormalizados = nombresCentroHistorico.map(nombre => nombre.trim().toLowerCase());
        } else if (equipoSeleccionado === "Centro de Monitoreo") {
            nombresNormalizados = nombresCentroMonitoreo.map(nombre => nombre.trim().toLowerCase());
        }

        const ausentes = nombresNormalizados.filter(nombre => !asistentesFecha.includes(nombre));

        ausentes.forEach(ausente => {
            const nombreOriginal = nombresNormalizados.find(n => n.trim().toLowerCase() === ausente);
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${nombreOriginal}</td><td>${fecha}</td>`;
            absencesTableBody.appendChild(newRow);
        });

        if (ausentes.length === 0) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td colspan="2">Todas las personas asistieron el día ${fecha}.</td>`;
            absencesTableBody.appendChild(newRow);
        }
    });

    if (fechasUnicas.length === 0) {
        absencesTableBody.innerHTML = '<tr><td colspan="2">No hay registros de asistencia en el historial.</td></tr>';
    }
}

showAbsencesButton.addEventListener('click', mostrarAusenciasParaTodosLosDias);

const clearAbsencesButton = document.getElementById('clearAbsencesButton');
clearAbsencesButton.addEventListener('click', function () {
    absencesTableBody.innerHTML = '';  // Limpiar la tabla de ausencias
});

// 10. Funciones para descarga en Excel
function descargarExcel() {
    const wb = XLSX.utils.book_new();
    const ws_data = [['Nombre', 'Hora de Entrada', 'Fecha de Entrada', 'Hora de Salida', 'Fecha de Salida']];

    const rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const columns = rows[i].getElementsByTagName('td');
        ws_data.push([columns[0].textContent, columns[1].textContent, columns[2].textContent, columns[3].textContent, columns[4].textContent]);
    }

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, 'Asistencia');
    XLSX.writeFile(wb, 'reporte_asistencia.xlsx');
}

downloadXlsxButton.addEventListener('click', descargarExcel);

function descargarAusenciasExcel() {
    const wb = XLSX.utils.book_new();
    const ws_data = [['Nombre', 'Fecha de Ausencia']];

    const rows = absencesTableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const columns = rows[i].getElementsByTagName('td');
        ws_data.push([columns[0].textContent, columns[1].textContent]);
    }

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, 'Ausencias');
    XLSX.writeFile(wb, 'ausencias.xlsx');
}

downloadAbsencesXlsxButton.addEventListener('click', descargarAusenciasExcel);

function descargarConsolidadoExcel() {
    const wb = XLSX.utils.book_new();

    const asistenciaData = [['Nombre', 'Hora de Entrada', 'Fecha de Entrada', 'Hora de Salida', 'Fecha de Salida']];
    const attendanceRows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < attendanceRows.length; i++) {
        const columns = attendanceRows[i].getElementsByTagName('td');
        asistenciaData.push([columns[0].textContent, columns[1].textContent, columns[2].textContent, columns[3].textContent, columns[4].textContent]);
    }
    const asistenciaSheet = XLSX.utils.aoa_to_sheet(asistenciaData);
    XLSX.utils.book_append_sheet(wb, asistenciaSheet, 'Asistencia');

    const ausenciasData = [['Nombre', 'Fecha de Ausencia']];
    const ausenciasRows = absencesTableBody.getElementsByTagName('tr');
    for (let i = 0; i < ausenciasRows.length; i++) {
        const columns = ausenciasRows[i].getElementsByTagName('td');
        ausenciasData.push([columns[0].textContent, columns[1].textContent]);
    }
    const ausenciasSheet = XLSX.utils.aoa_to_sheet(ausenciasData);
    XLSX.utils.book_append_sheet(wb, ausenciasSheet, 'Ausencias');

    XLSX.writeFile(wb, 'reporte_consolidado.xlsx');
}

const downloadConsolidadoButton = document.getElementById('downloadConsolidadoXlsx');
downloadConsolidadoButton.addEventListener('click', descargarConsolidadoExcel);

// 11. Función para alternar entre modo claro y oscuro
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkModeButton.textContent = 'Desactivar Modo Oscuro';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkModeButton.textContent = 'Activar Modo Oscuro';
    }
}

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleDarkModeButton.textContent = 'Desactivar Modo Oscuro';
}

toggleDarkModeButton.addEventListener('click', toggleDarkMode);

// 12. Función para eliminar historial con PIN
const adminPin = "221322";

const deleteHistoryButton = document.getElementById('deleteHistoryButton');
const pinModal = document.getElementById('pinModal');
const adminPinInput = document.getElementById('adminPinInput');
const confirmPinButton = document.getElementById('confirmPinButton');
const cancelPinButton = document.getElementById('cancelPinButton');
const pinError = document.getElementById('pinError');

deleteHistoryButton.addEventListener('click', function () {
    pinModal.style.display = 'block';
    adminPinInput.value = '';
    pinError.style.display = 'none';
});

cancelPinButton.addEventListener('click', function () {
    pinModal.style.display = 'none';
});

confirmPinButton.addEventListener('click', function () {
    const enteredPin = adminPinInput.value;
    if (enteredPin === adminPin) {
        tableBody.innerHTML = '';
        localStorage.removeItem('attendanceRecords');
        alert('Historial de asistencias eliminado correctamente.');
        pinModal.style.display = 'none';
    } else {
        pinError.style.display = 'block';
    }
});

// Capturar el botón de aplicar filtro de equipo
const applyFilterEquipoButton = document.getElementById('applyFilterEquipo');
const filterEquipoSelect = document.getElementById('filterEquipo');

// Evento para aplicar el filtro por equipo
applyFilterEquipoButton.addEventListener('click', function () {
    const equipoSeleccionadoFiltro = filterEquipoSelect.value; // Obtener el equipo seleccionado

    // Si no se selecciona ningún equipo, mostrar una alerta
    if (!equipoSeleccionadoFiltro) {
        alert('Por favor, selecciona un equipo para aplicar el filtro.');
        return;
    }

    // Limpiar la tabla de asistencia antes de aplicar el filtro
    tableBody.innerHTML = '';

    // Obtener los registros almacenados en LocalStorage
    const storedData = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    // Filtrar los registros que correspondan al equipo seleccionado
    const registrosFiltrados = storedData.filter(record => record.equipo === equipoSeleccionadoFiltro);

    // Añadir los registros filtrados a la tabla de historial de asistencia
    registrosFiltrados.forEach(record => {
        addRowToTable(record.nombre, record.horaEntrada, record.fechaEntrada, record.horaSalida, record.fechaSalida, record.botonDeshabilitado);
    });

    // Si no se encuentran registros para el equipo seleccionado, mostrar un mensaje
    if (registrosFiltrados.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6">No hay registros de asistencia para el equipo seleccionado.</td></tr>';
    }
});

window.onclick = function (event) {
    if (event.target === pinModal) {
        pinModal.style.display = 'none';
    }
};
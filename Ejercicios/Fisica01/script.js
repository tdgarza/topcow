// Variables globales para almacenar los datos del usuario
let velocidadInicial = 0;
let aceleracion = 0;
let tiempo = 0;
let unidades = 'metrico'; // Valor por defecto

// Función para actualizar las variables globales con los datos del usuario
function actualizarDatos() {
  velocidadInicial = parseFloat($('#velocidadInicial').val());
  aceleracion = parseFloat($('#aceleracion').val());
  tiempo = parseFloat($('#tiempo').val());
  unidades = $('#unidades').val();
}

// Función para convertir las unidades del sistema inglés al métrico
function convertirUnidades(valor, tipo) {
  if (tipo === 'metros') {
    return valor;
  } else if (tipo === 'pies') {
    return valor * 0.3048; // 1 pie = 0.3048 metros
  } else if (tipo === 'segundos') {
    return valor;
  } else if (tipo === 'segundos_pies') {
    return valor * 0.3048; // 1 pie/s = 0.3048 m/s
  } else if (tipo === 'segundos_pulgadas') {
    return valor * 0
.0254; // 1 pulgada/s = 0.0254 m/s
} else {
return valor;
}
}

// Función para calcular el MRU y MRUA y mostrar los resultados en la página
function calcular() {
// Actualizar las variables globales con los datos del usuario
actualizarDatos();

// Convertir las unidades del sistema inglés al métrico si es necesario
if (unidades === 'ingles') {
velocidadInicial = convertirUnidades(velocidadInicial, 'pies');
aceleracion = convertirUnidades(aceleracion, 'pies');
tiempo = convertirUnidades(tiempo, 'segundos_pies');
}

// Calcular el desplazamiento y la velocidad final
const desplazamiento = velocidadInicial * tiempo + 0.5 * aceleracion * tiempo ** 2;
const velocidadFinal = velocidadInicial + aceleracion * tiempo;

// Convertir las unidades del métrico al sistema inglés si es necesario
if (unidades === 'ingles') {
desplazamiento = convertirUnidades(desplazamiento, 'pies');
velocidadInicial = convertirUnidades(velocidadInicial, 'pies');
velocidadFinal = convertirUnidades(velocidadFinal, 'pies');
}

// Mostrar los resultados en la página
$('#resultado').html(`Desplazamiento: ${desplazamiento.toFixed(2)} m <br> Velocidad final: ${velocidadFinal.toFixed(2)} m/s`);
}

// Función para graficar el desplazamiento en función del tiempo
function graficar() {
// Actualizar las variables globales con los datos del usuario
actualizarDatos();

// Convertir las unidades del sistema inglés al métrico si es necesario
if (unidades === 'ingles') {
velocidadInicial = convertirUnidades(velocidadInicial, 'pies');
aceleracion = convertirUnidades(aceleracion, 'pies');
tiempo = convertirUnidades(tiempo, 'segundos_pies');
}

// Crear un arreglo de datos para la gráfica
const datos = [];
for (let t = 0; t <= tiempo; t += 0.1) {
const d = velocidadInicial * t + 0.5 * aceleracion * t ** 2;
datos.push(d);
}

// Convertir las unidades del métrico al sistema inglés si es necesario
if (unidades === 'ingles') {
for (let i = 0; i < datos.length; i++) {
datos[i] = convertirUnidades(datos[i], 'pies');
}
}

// Crear la gráfica utilizando la librería Chart.js
const grafica = new Chart(document.getElementById('grafica'), {
type: 'line',
data: {
labels: [],
datasets: [{
data: datos,
label: 'Desplazamiento',
borderColor: '#3e95cd',
fill: false
}]
},
options: {
title: {
display: true,
text: 'Desplazamiento en función del tiempo'
}
}
});
}
// Variables globales para almacenar los datos del usuario
let velocidadInicial;
let aceleracion;
let tiempo;
let unidades;

// Función para actualizar las variables globales con los datos del usuario
function actualizarDatos() {
  velocidadInicial = parseFloat($('#velocidad-inicial').val());
  aceleracion = parseFloat($('#aceleracion').val());
  tiempo = parseFloat($('#tiempo').val());
  unidades = $('#unidades').val();
}

// Función para convertir unidades del sistema inglés al métrico o viceversa
function convertirUnidades(valor, tipo) {
  if (tipo === 'pies') {
    return valor / 3.281; // 1 pie = 0.3048 metros
  } else if (tipo === 'segundos_pies') {
    return valor / 3.281; // 1 pie = 0.3048 metros
  } else if (tipo === 'metros') {
    return valor * 3.281; // 1 metro = 3.281 pies
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
  $('#resultado').html(`Desplazamiento: ${desplazamiento.toFixed(2)} m<br>
                         Velocidad final: ${velocidadFinal.toFixed(2)} m/s`);
  
  // Graficar el desplazamiento en función del tiempo
  graficar(desplazamiento, tiempo);
}

// Función para graficar el desplazamiento en función del tiempo
function graficar(desplazamiento, tiempo) {
  // Convertir las unidades del sistema inglés al métrico si es necesario
  if (unidades === 'ingles') {
    desplazamiento = convertirUnidades(desplazamiento, 'pies');
    tiempo = convertirUnidades(tiempo, 'segundos_pies');
  }
  
  // Crear un arreglo de datos para la gráfica
  const datos = [];
  for (let t = 0; t <= tiempo; t += 0.1) {
    const d = velocidadInicial * t + 0.5 * aceleracion * t ** 2;
    datos.push({x: t, y: d});
    }
    
    // Obtener el contexto del canvas y crear la gráfica
    const canvas = $('#grafica')[0];
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
    type: 'line',
    data: {
    datasets: [{
    label: 'Desplazamiento',
    data: datos,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
    }]
    },
    options: {
    scales: {
    xAxes: [{
    type: 'linear',
    position: 'bottom',
    ticks: {
    beginAtZero: true
    }
    }]
    }
    }
    });
    }
    
    // Asignar la función calcular al evento click del botón
    $('#calcular').click(calcular);
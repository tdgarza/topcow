let velocidadInicial, aceleracion, tiempo, unidades;

// Función para actualizar las variables globales con los datos del usuario
function actualizarDatos() {
  velocidadInicial = parseFloat($('#velocidad').val());
  aceleracion = parseFloat($('#aceleracion').val());
  tiempo = parseFloat($('#tiempo').val());
  unidades = $('option:selected', $('#unidades-velocidad')).val() === 'm/s' ? 'metrico' : 'ingles';
}

// Función para convertir unidades entre el sistema inglés y el métrico
function convertirUnidades(valor, tipo) {
  if (tipo === 'pies') {
    return valor * 3.28084; // 1 m = 3.28084 pies
  } else if (tipo === 'pies/s') {
    return valor / 0.3048; // 1 m/s = 3.28084 pies/s
  } else if (tipo === 'pies/s^2') {
    return valor / 0.3048; // 1 m/s^2 = 3.28084 pies/s^2
  } else if (tipo === 'segundos_pies') {
    return valor / 0.3048; // 1 m = 3.28084 pies, 1 s^2 = 1 s^2
  } else {
    return valor;
  }
}

// Función para calcular el MRU y MRUA y mostrar los resultados en la página
function calcular() {
  //

  ctualizarDatos();

  let desplazamiento, velocidadFinal;
  
  if (unidades === 'ingles') {
  // Convertir las unidades a métricas
  velocidadInicial = convertirUnidades(velocidadInicial, 'pies/s');
  aceleracion = convertirUnidades(aceleracion, 'pies/s^2');
  tiempo = convertirUnidades(tiempo, 'segundos_pies');
  }
  
  desplazamiento = velocidadInicial * tiempo + 0.5 * aceleracion * tiempo ** 2;
  velocidadFinal = velocidadInicial + aceleracion * tiempo;
  
  if (unidades === 'ingles') {
  // Convertir las unidades a inglesas para mostrar los resultados
  desplazamiento = convertirUnidades(desplazamiento, 'pies');
  velocidadFinal = convertirUnidades(velocidadFinal, 'pies/s');
  }
  
  $('#resultado').html(Desplazamiento: ${desplazamiento.toFixed(2)} ${unidades === 'metrico' ? 'm' : 'pies'} <br> Velocidad final: ${velocidadFinal.toFixed(2)} ${unidades === 'metrico' ? 'm/s' : 'pies/s'});
  }
  
  // Función para graficar el desplazamiento en función del tiempo
  function graficar() {
  actualizarDatos();
  
  if (unidades === 'ingles') {
  // Convertir las unidades a métricas
  velocidadInicial = convertirUnidades(velocidadInicial, 'pies/s');
  aceleracion = convertirUnidades(aceleracion, 'pies/s^2');
  tiempo = convertirUnidades(tiempo, 'segundos_pies');
  }
  
  let desplazamientos = [];
  let tiempos = [];
  
  for (let t = 0; t <= tiempo; t += 0.1) {
  let d = velocidadInicial * t + 0.5 * aceleracion * t ** 2;
  desplazamientos.push(d);
  tiempos.push(t);
  }
  
  if (unidades === 'ingles') {
  // Convertir las unidades a inglesas para mostrar la gráfica
  desplazamientos = desplazamientos.map(d => convertirUnidades(d, 'pies'));
  }
  
  let data = {
  labels: tiempos,
  datasets: [{
  label: 'Desplazamiento',
  data: desplazamientos,
  backgroundColor: 'rgba(255, 99, 132, 0.2)',
  borderColor: 'rgba(255, 99, 132, 1)',
  borderWidth: 1
  }]
  };
  
  let options = {
  scales: {
  xAxes: [{
  scaleLabel: {
  display: true,
  labelString: unidades === 'metrico' ? 'Tiempo (s)' : 'Tiempo (s)'
  }
  }],
  yAxes: [{
  scaleLabel: {
  display: true,
  labelString: unidades === 'metrico' ? 'Desplazamiento (m)' : 'Desplazamiento (pies)'
  }
  }]
  }
  };
  
  let grafica = $('#grafica');
  
  new Chart(grafica, {
  type: 'line',
  data: data,
  options: options
  });
  }
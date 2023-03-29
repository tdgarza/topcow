function gaussJordan(A, b) {
    // Combinamos las matrices A y b en una matriz extendida
    const n = A.length;
    const Ab = new Array(n);
    for (let i = 0; i < n; i++) {
      Ab[i] = A[i].concat(b[i]);
    }
  
    // Aplicamos la eliminación gaussiana
    for (let i = 0; i < n; i++) {
      // Encontramos la fila con el elemento máximo en la columna i
      let maxRow = i;
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(Ab[j][i]) > Math.abs(Ab[maxRow][i])) {
          maxRow = j;
        }
      }
  
      // Intercambiamos filas para poner el elemento máximo en la fila i
      [Ab[i], Ab[maxRow]] = [Ab[maxRow], Ab[i]];
  
      // Hacemos cero todos los elementos debajo del elemento diagonal en la columna i
      for (let j = i + 1; j < n; j++) {
        const factor = Ab[j][i] / Ab[i][i];
        for (let k = i + 1; k <= n; k++) {
          Ab[j][k] -= factor * Ab[i][k];
        }
        Ab[j][i] = 0;
      }
    }
  
    // Resolvemos la matriz triangular superior
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = i + 1; j < n; j++) {
        sum += Ab[i][j] * x[j];
      }
      x[i] = (Ab[i][n] - sum) / Ab[i][i];
    }
  
    return x;
  }
  
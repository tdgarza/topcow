// Cargar datos del menú desde archivo JSON
fetch('menu.json')
	.then(response => response.json())
	.then(data => {
		// Mostrar categorías de alimentos
		Object.keys(data).forEach(categoria => {
			const contenedor = document.createElement('div');
			contenedor.innerHTML = `<h2>${categoria}</h2>`;
			document.getElementById('menu').appendChild(contenedor);

			// Mostrar productos de la categoría
			data[categoria].forEach(producto => {
				const item = document.createElement('div');
				item.innerHTML = `
					<label>
						<input type="checkbox" class="producto" data-precio="${producto.precio}">
						${producto.nombre} ($${producto.precio})
					</label>
				`;
				contenedor.appendChild(item);
			});
		});

		// Calcular suma al seleccionar productos
		const productos = document.querySelectorAll('.producto');
		productos.forEach(producto => {
			producto.addEventListener('change', () => {
				let suma = 0;
				productos.forEach(producto => {
					if (producto.checked) {
						suma += parseFloat(producto.dataset.precio);
					}
				});
				document.getElementById('resultado').innerHTML = `Total: $${suma.toFixed(2)}`;
			});
		});
	})
	.catch(error => console.error(error));

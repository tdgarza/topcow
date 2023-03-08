// Seleccionamos el formulario y el div donde vamos a mostrar la orden y el total
const menuForm = document.getElementById('menu-form');
const orderList = document.getElementById('order-list');
const totalPrice = document.getElementById('total-price');

// Precios de cada producto
const prices = {
  hamburguesa: 10.99,
  pizza: 12.99,
  ensalada: 7.99,
  papas: 3.99,
  cebolla: 0.99,
  tocino: 1.99,
  refresco: 2.99,
  cerveza: 4.99
};

// Manejador de eventos para el formulario
menuForm.addEventListener('submit', e => {
  e.preventDefault(); // Evitamos que se envíe el formulario

  // Obtenemos los valores seleccionados en los selects y checkboxes
  const formData = new FormData(menuForm);
  const selectedProducts = Object.fromEntries(formData.entries());

  // Creamos la lista de la orden y el total del precio
  let orderHTML = '';
  let total = 0;
  for (const product in selectedProducts) {
    if (selectedProducts[product] !== '0') {
      const productPrice = prices[product] * parseInt(selectedProducts[product]);
      orderHTML += `<li>${selectedProducts[product]} ${product} ($${productPrice.toFixed(2)})</li>`;
      total += productPrice;
    }
  }

  // Actualizamos la lista de la orden y el total del precio
  orderList.innerHTML = orderHTML;
  totalPrice.innerHTML = `$${total.toFixed(2)}`;
});

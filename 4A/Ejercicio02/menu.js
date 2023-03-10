const form = document.getElementById('order-form');
const pattySelect = document.getElementById('patty');
const cheeseSelect = document.getElementById('cheese');
const toppingsSelect = document.getElementById('toppings');
const sauceSelect = document.getElementById('sauce');
const quantityInput = document.getElementById('quantity');
const totalInput = document.getElementById('total');
let menu;

// Cargar archivo JSON y llenar campos de selección
fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    menu = data;
    fillSelect(pattySelect, menu.patties);
    fillSelect(cheeseSelect, menu.cheeses);
    fillSelect(toppingsSelect, menu.toppings);
    fillSelect(sauceSelect, menu.sauces);
  });

// Función para llenar campos de selección
function fillSelect(select, options) {
  for (let option of options) {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    select.appendChild(optionElement);
  }
}

// Manejador de evento para enviar formulario
form.addEventListener('submit', event => {
  event.preventDefault();
  const patty = menu.patties.find(option => option.value === pattySelect.value);
  const cheese = menu.cheeses.find(option => option.value === cheeseSelect.value);
  const toppings = Array.from(toppingsSelect.selectedOptions, option => menu.toppings.find(topping => topping.value === option.value));
  const sauce = menu.sauces.find(option => optionvalue === sauceSelect.value);
  const quantity = quantityInput.valueAsNumber;
  // Calcular costo total
  let total = 0;
  if (patty) {
  total += patty.price;
  }
  if (cheese) {
  total += cheese.price;
  }
  if (toppings.length > 0) {
  total += toppings.reduce((sum, topping) => sum + topping.price, 0);
  }
  if (sauce) {
  total += sauce.price;
  }
  total *= quantity;
  // Mostrar costo total
  totalInput.value = $$n{total.toFixed(2)};
  });

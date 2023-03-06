const form = document.querySelector('#order-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const burgerType = document.querySelector('#burger-type').value;
  const side = document.querySelector('#side').value;
  const drink = document.querySelector('#drink').value;
  
  const order = {
    name,
    burgerType,
    side,
    drink
  };
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'orders.json', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (this.status === 200) {
      console.log('Orden enviada');
    }
  };
  xhr.send(JSON.stringify(order));
});

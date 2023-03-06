const ordersTable = document.querySelector('#orders-table tbody');

fetch('orders.json')
  .then(response => response.json())
  .then(orders => {
    orders.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.name}</td>
        <td>${order.burgerType}</td>
        <td>${order.side}</td>
        <td>${order.drink}</td>
      `;
      ordersTable.appendChild(row);
    });
  })
  .catch(error => console.error(error));

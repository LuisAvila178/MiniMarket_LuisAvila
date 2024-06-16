document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;
        });
    });
});
// En tu archivo script.js

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.getElementById('cart-count');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartItemsContainer = document.getElementById('cart-items');
  const closeCartButton = document.querySelector('.close-cart');
  let count = 0;

  addToCartButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          count++;
          cartCount.textContent = count;

          // Obtener detalles del producto seleccionado
          const card = button.closest('.card');
          const imgSrc = card.querySelector('img').src;
          const label = card.querySelector('.label').textContent;
          const price = card.querySelector('.price').textContent;

          // Mostrar el producto seleccionado en el carrito
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <img src="${imgSrc}" alt="${label}">
              <div>
                  <h3>${label}</h3>
                  <p>${price}</p>
                  <button class="remove-from-cart">Eliminar</button>
              </div>
          `;
          cartItemsContainer.appendChild(cartItem);

          // Agregar evento para eliminar el producto del carrito
          const removeButton = cartItem.querySelector('.remove-from-cart');
          removeButton.addEventListener('click', () => {
              cartItemsContainer.removeChild(cartItem);
              count--;
              cartCount.textContent = count;
          });
      });
  });

  // Mostrar y ocultar el carrito
  document.querySelector('.cart-icon a').addEventListener('click', () => {
      cartOverlay.style.display = 'flex';
  });

  closeCartButton.addEventListener('click', () => {
      cartOverlay.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.getElementById('cart-count');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartItemsContainer = document.getElementById('cart-items');
  const closeCartButton = document.querySelector('.close-cart');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  let count = 0;

  // Función para cambiar entre modo claro y oscuro
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Guardar el estado del modo oscuro en localStorage
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
  });

  // Verificar si el modo oscuro está activado desde localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
      document.body.classList.add('dark-mode');
  }

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          count++;
          cartCount.textContent = count;

          // Obtener detalles del producto seleccionado
          const card = button.closest('.card');
          const imgSrc = card.querySelector('img').src;
          const label = card.querySelector('.label').textContent;
          const price = card.querySelector('.price').textContent;

          // Mostrar el producto seleccionado en el carrito
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <img src="${imgSrc}" alt="${label}">
              <div>
                  <h3>${label}</h3>
                  <p>${price}</p>
                  <button class="remove-from-cart">Eliminar</button>
              </div>
          `;
          cartItemsContainer.appendChild(cartItem);

          // Agregar evento para eliminar el producto del carrito
          const removeButton = cartItem.querySelector('.remove-from-cart');
          removeButton.addEventListener('click', () => {
              cartItemsContainer.removeChild(cartItem);
              count--;
              cartCount.textContent = count;
          });
      });
  });

  // Mostrar y ocultar el carrito
  document.querySelector('.cart-icon a').addEventListener('click', () => {
      cartOverlay.style.display = 'flex';
  });

  closeCartButton.addEventListener('click', () => {
      cartOverlay.style.display = 'none';
  });
});

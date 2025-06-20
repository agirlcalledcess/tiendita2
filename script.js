let carrito = [];

function agregarAlCarrito(boton) {
  const producto = boton.closest('.producto');
  const id = producto.dataset.id;
  const nombre = producto.dataset.nombre;
  const precio = parseFloat(producto.dataset.precio);

  const existente = carrito.find(item => item.id === id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total');
  lista.innerHTML = '';
  let suma = 0;

  carrito.forEach(item => {
    suma += item.precio * item.cantidad;
    const li = document.createElement('li');
    li.textContent = `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`;
    lista.appendChild(li);
  });

  total.textContent = suma.toFixed(2);
}

function scrollToProductos() {
  document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Carrusel simple
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[currentSlide].classList.remove('activo');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('activo');
}, 4000);


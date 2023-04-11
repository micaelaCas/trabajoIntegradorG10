const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const precio = parseFloat(document.getElementById("precio").value);
  const porcentajeDescuento = parseFloat(document.getElementById("descuento").value);
  
  const descuento = (100 - porcentajeDescuento) / 100 * precio;
  const precioFinal = precio - descuento;
  
  resultado.innerText = `Precio final con descuento: $${precioFinal.toFixed(2)}`;
});
const codigo = document.getElementById("codigo")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  parrafo.innerHTML= ""

  if(codigo.value == "desc"){
    warnings += `Tu codigo tiene 10% de descuento para usar en cualquier producto de nuestra tienda.`
    ver=true
  }
  if(codigo.value == "desc1"){
    warnings += `Tu codigo tiene 20% de descuento para usar en cualquier producto de nuestra tienda.`
    ver=true
  }

  if(codigo.value == "desc2"){
    warnings += `Tu codigo tiene 30% de descuento para usar en cualquier producto de nuestra tienda.`
    ver=true
  }

  if(ver){
    parrafo.innerHTML = warnings
  }
  
})







      

   

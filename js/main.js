let usuario = prompt("ingrese su nombre");

if (usuario == String || usuario != (isNaN)) {
    alert("Hola " + usuario + "!");
}else{
    alert("Nombre de usuario incorrecto");
}

// información de productos

let productos = {};
let totalProductos = 0;

// agregar un nuevo producto 

function agregarProducto() {
  let nombre = prompt("Ingrese el nombre de la prenda:");
  let precio = parseFloat(prompt("Ingrese el precio de la prenda:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad de prendas:"));

  if (!nombre || isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
    alert("Por favor, ingrese información válida para la prenda.");
    return;
  }

  if (productos.hasOwnProperty(nombre)) {
    productos[nombre].cantidad += cantidad;
  } else {
    productos[nombre] = { precio, cantidad };
  }

  totalProductos += cantidad;
  alert(`¡La prenda ${nombre} ha sido agregado correctamente!`);
}

// lista de productos y el total de productos

function mostrarProductos() {
  let listaProductos = "Lista de productos:\n";
  for (let nombre in productos) {
    let producto = productos[nombre];
    listaProductos += `${nombre}: $${producto.precio} - Cantidad: ${producto.cantidad}\n`;
  }
  listaProductos += `\nTotal de prendas agregadas: ${totalProductos}`;
  alert(listaProductos);
}

// Ciclo 

while (true) {
  let opcion = prompt("¿Qué deseas hacer?\n1. Agregar una prenda\n2. Mostrar lista de prendas\n3. Salir");

  if (opcion === "1") {
    agregarProducto();
  } else if (opcion === "2") {
    mostrarProductos();
  } else if (opcion === "3") {
    break; 
  } else {
    alert("Por favor, selecciona una opción válida.");
  }
}

alert(`¡Gracias ${usuario} por usar nuestro sistema de gestión de prendas!`);

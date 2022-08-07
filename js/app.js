//Pantalla
const pantallaCalculadora = document.querySelector("#Pantalla");

//Simbolos de arriba
const porcentajeCalculadora = document.querySelector("#porcentaje");
const borrarCalculadora = document.querySelector("#borrarC");
const retrocesoBtnCalculadora = document.querySelector("#retrocesoBtn");
const unosobrexCalculadora = document.querySelector("#unosobrex");
const cuadradoCalculadora = document.querySelector("#cuadrado");
const raizCuadradaCalculadora = document.querySelector("#raizCuadrada");

//Simbolos basicos
const divisionCalculadora = document.querySelector("#division");
const multiplicacionCalculadora = document.querySelector("#multiplicacion");
const restaCalculadora = document.querySelector("#resta");
const sumaCalculadora = document.querySelector("#suma");

//Numeros
const ceroCalculadora = document.querySelector("#cero"); 
const unoCalculadora = document.querySelector("#uno"); 
const dosCalculadora = document.querySelector("#dos"); 
const tresCalculadora = document.querySelector("#tres"); 
const cuatroCalculadora = document.querySelector("#cuatro"); 
const cincoCalculadora = document.querySelector("#cinco"); 
const seisCalculadora = document.querySelector("#seis"); 
const sieteCalculadora = document.querySelector("#siete"); 
const ochoCalculadora = document.querySelector("#ocho"); 
const nueveCalculadora = document.querySelector("#nueve"); 
const puntoCalculadora = document.querySelector("#punto");

//Escribir en la pantalla
ceroCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "0");
unoCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "1");
dosCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "2");
tresCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "3");
cuatroCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "4");
cincoCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "5");
seisCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "6");
sieteCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "7");
ochoCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "8");
nueveCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + "9");
puntoCalculadora.addEventListener("click", () => pantallaCalculadora.textContent = pantallaCalculadora.textContent + ".");




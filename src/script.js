


/*Usando JavaScript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
Para crear una excusa consistente, tienes que concatenar un elemento de cada array o arreglo en el orden correcto.
Usa la función onload y establece la excusa en el innerHTML del elemento HTML #excuse.
Tecnologías
HTML, CSS3, JavaScript, Vite.

Fundamentos
Este ejercicio cubre los siguientes fundamentos:

Utilizar archivos JavaScript externos en tu proyecto.
Cómo trabajar con arreglos/listas (arrays).
Generar números al azar.
Concatenar strings (cadenas).
Utilizar funciones (al menos un poco).
Trabajar con eventos (al menos un poco).*/
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
function iniciarApp(){
let indiceAleatorioWho = Math.floor(Math.random() * who.length);
let palabraAleatoriaWho = who[indiceAleatorioWho];
let indiceAleatorioAction = Math.floor(Math.random() * action.length);
let palabraAleatoriaAction = action[indiceAleatorioAction];
let indiceAleatorioWhat = Math.floor(Math.random() * what.length);
let palabraAleatoriaWhat = what[indiceAleatorioWhat];
let indiceAleatorioWhen = Math.floor(Math.random() * when.length);
let palabraAleatoriaWhen = when[indiceAleatorioWhen];
let total=palabraAleatoriaWho+"&nbsp;"+palabraAleatoriaAction+"&nbsp;"+palabraAleatoriaWhat+"&nbsp;"+ palabraAleatoriaWhen;

let final=document.getElementById('excuse');

final.innerHTML = total;

console.log(total);
}
iniciarApp();
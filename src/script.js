
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
//tambien se puede usar "" en ves de "&nbsp;" pero como nos enseñasteis eso pues lo uso...

let final=document.getElementById('excuse');

final.innerHTML = total;

console.log(total);
}
iniciarApp();

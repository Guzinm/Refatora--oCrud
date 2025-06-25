import { lista, usuario } from "./classes.js";
import { atualizarInterface, atualizarLista, uploadUser } from "./utils.js";

const formulario = document.querySelector("form");
const listaDeUsuários = new lista();

formulario.addEventListener("submit", async(evento) => {
    evento.preventDefault();

    const nomeInformado = formulario.elements.nome.value;
    const emailInformado = formulario.elements.email.value;

    const user = new usuario(nomeInformado, emailInformado);

    await uploadUser(user);
    await atualizarLista(listaDeUsuários);
    atualizarInterface(listaDeUsuários);

    formulario.reset();
});

document.addEventListener('DOMContentLoaded', async() => {
    
    await atualizarLista(listaDeUsuários);
    atualizarInterface(listaDeUsuários);

});
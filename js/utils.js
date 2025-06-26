const getElement = id => document.getElementById(id);
const getSelector = content => document.querySelectorAll(content);

const chavecrud = '7974b63bd86d4d1e8389fbf69ac7cd9a'
const crudcrudLink = `https://crudcrud.com/api/${chavecrud}/users/`;

export const uploadUser = async(user) => {

    await fetch(crudcrudLink, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })

};

const removeUser = async(id) => {

    await fetch(`${crudcrudLink}${id}`, {
        method: "DELETE"
    });

};

export const atualizarLista = async(lista) => {

    const res = await fetch(crudcrudLink);
    const users = await res.json();

    lista.addUsers(users);

    return lista;
};

export const atualizarInterface = (lista) => {

    const listaInterface = getElement('usersList');
    const botoes = getSelector("#usersList button");

    lista.users.forEach(user => {

        const temEsteElemento = Array.from(botoes).some(botao => botao.dataset.id === user._id);

        if (temEsteElemento){
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `Nome: ${user.nome} || Email: ${user.email} <button data-id="${user._id}">Excluir Usuário</button>`;
        listaInterface.appendChild(li);

    });

    document.querySelectorAll('#usersList button[data-id]').forEach(botao => {
        const novobotao = botao.cloneNode(true);
        botao.replaceWith(novobotao);
        
        novobotao.addEventListener('click', async() => {
            await removeUser(botao.dataset.id);
            const novalista = await atualizarLista(lista);
            atualizarInterface(novalista);

        })}
    );

    removerDesatualizados(lista);

};

const removerDesatualizados = (lista) => {

    const botoes = Array.from(getSelector("#usersList button"));
    const paraDeletar = botoes.filter(botao => !lista.users.some(user => user._id === botao.dataset.id));

    paraDeletar.forEach(botao => {
        botao.parentElement.remove();
    }); 

};
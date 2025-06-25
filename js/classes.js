export class usuario {
    #id;
    nome;
    email;

    constructor(nome, email, id){

        this.nome = nome;
        this.email = email;
        this.#id = id;

    }

    get id(){
        return this.#id;
    }

};

export class lista {

    #usuarios;

    constructor(){
        this.#usuarios = [];
    }

    get users(){
        return this.#usuarios;
    }

    addUsers(usuarios){
        this.#usuarios = [];
        this.#usuarios = usuarios;
    }

};
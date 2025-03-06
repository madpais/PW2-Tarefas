class Mamifero extends Animal {
    constructor(nome, especie, temPelos) {
        super(nome, especie);
        this.temPelos = temPelos;
    }

    exibirDados() {
        console.log(`Mamífero: ${this.nome}, Espécie: ${this.especie}, Tem pelos: ${this.temPelos}`);
    }
}
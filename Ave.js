class Ave extends Animal {
    constructor(nome, especie, podeVoar) {
        super(nome, especie);
        this.podeVoar = podeVoar;
    }

    exibirDados() {
        console.log(`Ave: ${this.nome}, Espécie: ${this.especie}, Pode voar: ${this.podeVoar}`);
    }
}
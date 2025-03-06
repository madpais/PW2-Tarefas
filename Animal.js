class Animal {
  constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
  }

  exibirDados() {
      console.log(`Nome: ${this.nome}, Espécie: ${this.especie}`);
  }
}

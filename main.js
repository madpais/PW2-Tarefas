const cachorro = new Mamifero("Rex", "Cachorro", true);
const gato = new Mamifero("Mia", "Gato", true);
const aguia = new Ave("Águia Real", "Águia", true);
const pinguim = new Ave("Pingu", "Pinguim", false);

console.log("Animais cadastrados:");
cachorro.exibirDados();
gato.exibirDados();
aguia.exibirDados();
pinguim.exibirDados();
// Função para classificar o herói com base na experiência
function classificarHeroi(nome, xp) {
  let nivel; // Variável para armazenar o nível do herói

  // Estrutura de decisão para determinar o nível do herói com base em sua experiência (XP)
  if (xp < 1000) {
      nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
      nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
  } else if (xp >= 10001) {
      nivel = "Radiante";
  } else {
      nivel = "Indefinido"; // Caso algo inesperado aconteça
  }

  // Exibe a mensagem final com o nome do herói e seu nível
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Exemplo de uso
const nomeHeroi = "Arthas";
const xpHeroi = 7500;

// Chama a função para classificar o herói e exibir a mensagem correspondente
classificarHeroi(nomeHeroi, xpHeroi);

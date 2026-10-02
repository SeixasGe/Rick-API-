// URL base da API do Rick and Morty para obter os personagens
const API_URL = "https://rickandmortyapi.com/api/character";

// Função assíncrona para buscar os dados na API
async function carregarPersonagens() {
    const container = document.getElementById("container-personagens");
    
    // Feedback visual enquanto a requisição acontece
    container.innerHTML = "<p>Carregando personagens...</p>";

    try {
        // 1. Requisita os dados para a API (espera a resposta chegar)
        const resposta = await fetch(API_URL);
        
        // 2. Transforma o corpo da resposta em formato JSON
        const dados = await resposta.json();

        // 3. Limpa o texto de "Carregando..."
        container.innerHTML = "";

        // 4. Percorre o array de personagens retornado na propriedade 'results'
        dados.results.forEach(personagem => {
            
            // Criamos a div do card
            const card = document.createElement("div");
            card.classList.add("card");

            // Preenchemos o conteúdo do card com os dados do personagem
            card.innerHTML = `
                <img src="${personagem.image}" alt="${personagem.name}">
                <h3>${personagem.name}</h3>
                <p><strong>Status:</strong> ${personagem.status}</p>
                <p><strong>Espécie:</strong> ${personagem.species}</p>
            `;

            // Adicionamos o card criado dentro do container na página
            container.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
        container.innerHTML = "<p>Ocorreu um erro ao buscar os personagens.</p>";
    }
}

// Escuta o clique no botão e executa a função
document.getElementById("btn-carregar").addEventListener("click", carregarPersonagens);
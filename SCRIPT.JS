let score = 0; // Contador de cliques

    // Adiciona o evento de clique ao botão
    document.getElementById('clickButton').addEventListener('click', function() {
        score++; // Incrementa o contador
        document.getElementById('score').textContent = 'Score: ' + score; // Atualiza o texto do score

        // Verifica se o contador é um dos valores especificados
        if ([10].includes(score)) {
            mostrarMensagem(`Parabeeens! Você atingiu ${score}`);
        } else if ([20].includes(score)) {
            mostrarMensagem(`Parabéns desempregadoooooo, você atingiu ${score}`);
        } else if ([50].includes(score)) {
            mostrarMensagem(`Parabeeeeeeeeeens!! Por isso que você NÃO namora, atingiu ${score}`);
        } else if ([100].includes(score)) {
            mostrarMensagem(`VOCÊ NÃO FAZ NADA NÉ VEY? VAI FAZER ALGUMA COISA!! ARRUMA UM EMPREGO! atingiu ${score}`);
        } else if ([500].includes(score)) {
            mostrarMensagem(`Ai vey.... eu já desisti de você, parabeeeeeeens! atingiu ${score}`);
        } else if ([1000].includes(score)) {
            mostrarMensagem(`Você zerou o jogo! Muito bem desempregado, agora vai arrumar uma carteira de trabalho`);
        }
    });

    function mostrarMensagem(texto) {
        const mensagem = document.getElementById("mensagem");
        mensagem.innerText = texto; // Define o texto da mensagem
        mensagem.style.display = "block"; // Exibe a mensagem

        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
            mensagem.style.display = "none"; // Esconde a mensagem
        }, 3000);
    }
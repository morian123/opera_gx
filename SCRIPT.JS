let score = 0; // Contador de cliques

        // Adiciona o evento de clique ao botão
        document.getElementById('clickButton').addEventListener('click', function() {
            score++; // Incrementa o contador
            document.getElementById('score').textContent = 'Score: ' + score; // Atualiza o texto do score

            // Verifica se o contador é um dos valores especificados
            if ([10].includes(score)) {
                alert(`Você atingiu ${score} cliques!`);
            } else if ([20].includes(score)) {
                alert(`Parabéns desempregadoooooo, você atingiu ${score}`);
            } else if ([50].includes(score)) {
                alert(`Parabeeeeeeeeeens!! Por isso que você namora, atingiu ${score}, prefere clicar num botão do que botar em um`);
            } else if ([100].includes(score)) {
                alert(`VOCÊ NÃO FAZ NADA NÉ VEY? VAI FAZER ALGUMA COISA!! ARRUMA UM EMPREGO! atingiu ${score}`);
            } else if ([500].includes(score)) {
                alert(`Ai vey.... eu já desisti de você, parabeeeeeeens! atingiu ${score}`);
            } else if ([1000].includes(score)) {
                alert(`Você zerou o jogo! Muito bem desempregado, agora vai arrumar uma carteira de trabalho`);
            }
        });
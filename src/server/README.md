# Inicialização de servidor HTTP
Este exemplo inicializa um servidor HTTP que retorna como resposta a GET request: Welcome to Bun

Note que estamos usando váriaveis de ambiente sem a necessidade de instalação de depêndencias.
Os valores dessas variáveis podem ser acessados usando o familiar `process.env.NOMEDAVARIAVEL` ou `Bun.env.NOMEDAVARIAVEL`

## Passos para executar
- Execute o arquivo usando o comando

```terminal
bun run ./src/server/server.ts
``` 
- Visite seu navegador na porta exibida pelo terminal
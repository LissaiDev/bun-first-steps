# Escrita e leitura de arquivos
Este exemplo executa a escrita e leitura de arquivos usando as API's do Bun

Note que estamos usando o await sem antes definir um async, isso deve-se ao Bun ter uma camada top-level async que permite, na maioria dos casos, usar as APIs assíncronas do Bun sem a necessidade de usar o async

## Passos para executar
- Execute o arquivo usando o comando

```terminal
bun run ./src/files/files.ts
``` 
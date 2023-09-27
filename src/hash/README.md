# Escrita e leitura de arquivos
Este exemplo executa encriptação e a verificação de uma senha usando as APIs nativas do Bun

Note que estamos usando o await sem antes definir um async, isso deve-se ao Bun ter uma camada top-level async que permite, na maioria dos casos, usar as APIs assíncronas do Bun sem a necessidade de usar o async

## Passos para executar
- Execute o arquivo usando o comando

```terminal
bun run ./src/hash/hash.ts
``` 
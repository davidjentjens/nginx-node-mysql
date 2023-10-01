# Desafio Fullcyle | Docker | Nginx com Node.js

Desafio para o curso Full Cycle 3.0 (módulo Docker).

O desafio envolve a exibição de uma mensagem na tela, usando a combinação de Nginx e Node.js.

Quando uma solicitação é feita para a aplicação, esta deve registrar um novo dado no banco de dados (MySQL). Em seguida, a página deve mostrar a mensagem ```Full Cycle Rocks!``` e, logo abaixo, listar os registros do banco de dados.

Observação: A página será construída em Node.js, mas a interação com os usuários será mediada pelo Nginx por meio de um servidor proxy reverso.

---

### Utilize o seguinte comando para rodar a aplicação, com o Docker instalado

```
docker-compose up -d 
```

Aguarde alguns instantes e em seguida a aplicação irá ser publicada e disponível para acesso.

---

### Para visualizar o output, acesse a seguinte url no navegador:

[http://localhost:8080/](http://localhost:8080/)

Para visualizar outros nomes, ou seja, não entrar no modo anônimo, passe um parâmetro de URL, name, na requisição, com o valor do nome do usuário que deseja adicionar ao banco. Pode fazer isso através de algum cliente REST, como Insomnia ou Postman.

Observe que mesmo se fechar e abrir a aplicação, os nomes continuarão salvos no volume mapeado na pasta mysql.
# bibliotecaComunitaria

Este é um projeto de uma biblioteca comunitária onde os usuários podem postar livros para compartilhar com outros usuários e também emprestar livros de outros membros da comunidade.

## Sobre o Projeto

A plataforma permite que os usuários:
* Cadastrem-se e autentiquem-se de forma segura via JWT.
* Adicionem livros ao seu acervo pessoal para empréstimo.
* Busquem por livros disponíveis na comunidade.
* Solicitem o empréstimo de livros de outros usuários.
* Gerenciem seus empréstimos ativos.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express.js
- **Banco de Dados:** SQLite (facilmente substituível)
- **Autenticação:** JSON Web Tokens (JWT)
- **Validação:** Zod

## Instalação

### Pré-requisitos

- Node.js (v14.x ou superior)
- npm ou yarn

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/bibliotecaComunitaria.git](https://github.com/seu-usuario/bibliotecaComunitaria.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd bibliotecaComunitaria
    ```

3.  **Instale as dependências:**
    ```bash
    # Com npm
    npm install

    # Ou com yarn
    yarn install
    ```

4.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```env
    # Porta em que o servidor será executado
    PORT=3000

    # Chave secreta para assinatura dos tokens JWT
    JWT_SECRET=sua_chave_secreta_aqui
    ```

5.  **Gere uma chave secreta:**
    Você pode gerar uma chave segura para `JWT_SECRET` com o comando abaixo:
    ```bash
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    ```

6.  **Inicie o servidor:**
    ```bash
    # Com npm
    npm start

    # Ou com yarn
    yarn start
    ```

7.  O servidor estará em execução em `http://localhost:3000`.

## Documentação da API

### Usuários (`/usuarios`)
* `POST /usuarios`: Cria um novo usuário.
* `GET /usuarios`: Lista todos os usuários.
* `GET /usuarios/:usuarioid`: Busca um usuário por ID.

### Livros (`/livros`)
* `POST /livros`: Adiciona um novo livro (requer autenticação).
* `GET /livros`: Lista todos os livros disponíveis.
* `GET /livros/:livroid`: Busca um livro por ID.

### Empréstimos (`/emprestimos`)
* `POST /emprestimos`: Cria uma nova solicitação de empréstimo (requer autenticação).
* `GET /usuarios/:usuarioId/emprestimos`: Lista os empréstimos de um usuário específico.

## Contribuição

Se você gostou do projeto e deseja contribuir, fique à vontade para abrir uma issue ou enviar um pull request. Todas as contribuições são bem-vindas!

1.  Faça um Fork do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`).
3.  Faça o commit de suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4.  Faça o push para a branch (`git push origin feature/AmazingFeature`).
5.  Abra um Pull Request.

Obrigado por acessar o projeto e por considerar contribuir para torná-lo ainda melhor!

## Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.
# 📚 Livroteca

**Livroteca** é um projeto web simples que permite aos usuários pesquisar informações sobre livros utilizando a [API do Google Books](https://developers.google.com/books). Com uma interface amigável, o usuário pode buscar livros pelo título e visualizar detalhes como sinopse, autor(es), categorias e links para mais informações.

---

## 🚀 Como Funciona

1. O usuário insere o nome do livro na barra de pesquisa.
2. Ao clicar no botão **Pesquisar**, a função `pesquisar()` no `app.js` é acionada.
3. Essa função envia uma requisição para a **API do Google Books** com o termo pesquisado.
4. Os resultados são filtrados para exibir apenas livros cujo **título contenha o termo buscado**.
5. Para cada livro, são exibidas informações como:
   - Título
   - Autor(es)
   - Sinopse
   - Categorias
   - Link para mais detalhes

---

## 🗂️ Estrutura do Projeto

Livroteca/

├── index.html              # Estrutura principal da interface

├── styles.css              # Estilos e layout da página

├── app.js                  # Lógica da busca e manipulação dos dados

└── images/

    └── logo_resized.png    # Favicon do site


---

## 🌐 Dependências

- Conexão com a internet (necessária para acessar a API do Google Books)
- Navegador moderno com suporte a JavaScript

---

## 📌 Observações

- Este projeto não utiliza backend, banco de dados ou frameworks externos.
- É ideal como exemplo educacional para quem deseja aprender a consumir APIs REST usando HTML, CSS e JavaScript puro.

---

## 🖼️ Demonstração 

- Tela Inicial
![image](https://github.com/user-attachments/assets/bf4766d4-3c1e-4d81-98fd-1510262a5350)

- Tela de Pesquisa

![image](https://github.com/user-attachments/assets/f18281e6-6f50-476b-8077-a10f415239c1)


---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

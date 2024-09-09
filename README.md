# buscandoLivros - Livroteca
Livroteca é um projeto web simples que permite aos usuários pesquisar informações sobre livros usando a API do Google Books. O usuário pode digitar o título do livro na barra de pesquisa, e os resultados mostrarão detalhes como título, sinopse, autor(es) e categorias do livro, além de fornecer links para mais informações.
Estrutura do Projeto
index.html: Estrutura principal da interface. Contém um campo de pesquisa e uma seção para exibir os resultados da busca.
styles.css: Arquivo de estilo para o layout e design da página.
app.js: Script que realiza a busca de livros e manipula os resultados para exibição.
images/logo_resized.png: Favicon para a página.
Como Funciona:
O usuário insere o nome do livro no campo de busca.
O botão "Pesquisar" aciona a função pesquisar() no arquivo app.js.
A função envia uma requisição à API do Google Books com o termo pesquisado.
Os resultados são filtrados para incluir apenas os livros cujo título contém o termo pesquisado.
Os detalhes dos livros, incluindo título, autor(es), sinopse e categorias, são exibidos na página, com links para mais informações.
Dependências:
Conexão com a internet para consumir a API do Google Books.

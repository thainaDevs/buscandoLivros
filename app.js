function pesquisar(){
const termoPesquisa = document.querySelector('input[type="text"]').value;
const section = document.getElementById("resultados-pesquisa");
section.innerHTML = "";

const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termoPesquisa)}&maxResults=10&fields=items/volumeInfo(authors,title,categories,description,infoLink)`;

fetch(url)
  .then(response => response.json()) 
  .then(data => {
    const resultados = data.items; 
    const resultadosFiltrados = resultados.filter(item => 
      item.volumeInfo.title.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    resultadosFiltrados.forEach(item => {
    console.log(item);
      const titulo = item.volumeInfo.title;
      const sinopse = item.volumeInfo.description ? item.volumeInfo.description : "Descrição não disponível";
      const autores = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : "Autor desconhecido";
      const categorias = item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : "Gênero desconhecido";
      const link = item.volumeInfo.infoLink;

      section.innerHTML += `
        <div class="item-resultado">
          <h2><a href="${link}" target="_blank">${titulo}</a></h2>
          <p class="descricao-meta">Sinopse: ${sinopse}</p>
          <p> Gênero: ${categorias}</p>
          <p>Autor: ${autores}</p>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error('Erro ao buscar os livros:', error);
  });

}


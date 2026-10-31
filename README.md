# Projeto CineTag - Minha Jornada no Mundo do Desenvolvimento React

<p align="center">
  <a href="https://cursos.alura.com.br/course/react-praticando-react-js">Link para o Curso</a>
</p>

Olá pessoal! Neste projeto mergulhei profundamente no universo do desenvolvimento **React** e **JavaScript**. Aqui estão as principais conquistas da minha jornada:

- **Catálogo de Vídeos** 🎥: Explorei a criação de um catálogo e a reprodução dos vídeos referenciados pela API.

- **Favoritos Sempre à Mão** ❤️: Aprendi a marcar meus filmes favoritos com um simples toque no ícone de coração, tornando mais fácil o acesso à minha lista de favoritos.

- **Navegação Intuitiva** 🌐: Utilizei o **React-router-dom** para criar uma navegação suave e intuitiva entre diferentes páginas do projeto.

- **Estilo Personalizado** 🎨: Adicionei meu toque pessoal ao projeto, aplicando estilos incríveis a cada componente com **CSS Modules**.

- **Domínio de React Hooks** 🚀: Aprofundei meus conhecimentos em React com Hooks, incluindo a gestão de estado com `useState()` e o uso de `useEffect()` para efeitos especiais.

- **Contextos e Rotas Avançadas** 🌟: Descobri como gerenciar informações globais usando contextos e explorei a implementação de rotas dinâmicas e aninhadas.

- **Integração com APIs** 🌐: Aprendi a enriquecer o projeto com informações de filmes, trabalhando com Mock de API e APIs reais.

- **Deploy** 🚀: O estudo também aborda a publicação de uma aplicação React.

Este projeto proporcionou uma incrível oportunidade de aprimorar minhas habilidades em **React**, **JavaScript** e desenvolvimento de aplicativos web interativos. Lembre-se de que é importante ter uma base sólida em React antes de começar.

Sinta-se à vontade para explorar e criar sua própria versão do CineTag! 🚀

Divirta-se codificando e compartilhando suas descobertas com a comunidade!

## Execução e limites do projeto

O manifesto usa React 18 e `react-scripts` 5. Para preparar o ambiente local com Node.js/npm e iniciar o frontend:

```sh
npm install
npm start
```

O manifesto também define `npm run build` e `npm test`.

A página inicial consulta `https://my-json-server.typicode.com/GuilhermeSerafim/cinetag-api/videos`. O catálogo depende desse serviço externo e dos recursos de mídia referenciados. O contexto de favoritos mantém a seleção em estado React em memória, sem persistência entre recarregamentos da página.

# 🚀 SpaceApp - A galeria mais completa de fotos do espaço! 🌌🪐

<div align="center">
  <img src="src/assets/banner.png" alt="Capa do projeto" style="max-width: 100%;" />
  <img src="public/imagens/logo.png" alt="Logo do projeto" />
</div>

---

## 📚 Sobre o projeto

O **Space App** é uma galeria de fotos do espaço desenvolvida com **React + Vite**, como parte de um dos cursos da [Alura](https://www.alura.com.br/) em 2024. O projeto proporciona uma experiência imersiva na navegação de imagens espaciais, permitindo ao usuário buscar, filtrar, favoritar e ampliar as fotos.

---

## ✨ Funcionalidades

- 🔍 **Barra de busca**: Filtra imagens pelo título.
- 🏷️ **Filtros por tags**: Todas, Estrelas, Galáxias, Luas, Nebulosas.
- ✨ **Galeria de fotos do espaço**.
- ❤️ **Favoritar imagens**: Com alternância visual.
- 🔍 **Zoom em imagem**: Modal de exibição expandida.
- 📎 **Rodapé com links para redes sociais**.

---

## 🧠 Aprendizados

Durante o desenvolvimento desse projeto, aprofundei meus conhecimentos em:

- ⚡ **Vite**: Ferramenta moderna de build para projetos React.
- 🎨 **Styled Components**: Estilização com CSS-in-JS.
- ⚛️ **React**: Props, estados, hooks, componentização.
- 🧠 **Gerenciamento de estado com useState** e **efeitos com useEffect**.
- 🧱 Organização de componentes reutilizáveis.

---

## 🛠️ Tecnologias Utilizadas

- ✅ [React](https://react.dev/)
- ✅ [Vite](https://vitejs.dev/)
- ✅ [Styled Components](https://styled-components.com/)
- ✅ [JavaScript (JSX)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- ✅ [JSON](https://www.json.org/)
- ✅ [HTML5 + CSS3](https://developer.mozilla.org/pt-BR/)

---

## 📸 Demonstrações

<div>
  <img width="80%" alt="Tela inicial da Space App" src="https://github.com/user-attachments/assets/99d95964-b461-4271-ad73-996745659422" />
  <img width="80%" alt="Zoom em imagem" src="https://github.com/user-attachments/assets/88a0a2bc-4a90-4a52-81ef-34cd2e7f8b6a" />
  <img width="80%" alt="Galeria com imagens e rodapé" src="https://github.com/user-attachments/assets/04000f98-ccf9-4a99-bc31-390b1eac57c6" />
</div>

---

## 📁 Estrutura do Projeto

```bash
space-app/
├── public/
│   ├── icones/                # Ícones utilizados na interface
│   ├── imagens/               # Imagens usadas na galeria e redes sociais
│   │   ├── galeria/           # Fotos do espaço exibidas na galeria
│   │   └── sociais/           # Logos das redes sociais
│   └── logo.png               # Logo principal da aplicação
├── src/
│   ├── assets/
│   │   └── banner.png         # Imagem de destaque do topo (banner)
│   ├── componentes/           # Componentes reutilizáveis da aplicação
│   │   ├── Banner/            # Componente responsável pelo banner
│   │   ├── BarraLateral/      # Menu lateral
│   │   ├── BotaoIcone/        # Botão de ícone (favoritar e expandir)
│   │   ├── Cabecalho/         # Cabeçalho do site com logo e barra de busca
│   │   ├── CampoTexto/        # Campo de busca da galeria
│   │   ├── EstilosGlobais/    # Estilos aplicados globalmente com styled-components
│   │   ├── Galeria/           # Galeria principal de fotos
│   │   ├── ModalZoom/         # Modal para ampliar imagem da galeria
│   │   ├── Rodape/            # Rodapé com informações e redes sociais
│   │   └── Titulo/            # Componente reutilizável de título
│   ├── App.jsx                # Componente principal da aplicação
│   ├── main.jsx               # Ponto de entrada do React
│   └── fotos.json             # Arquivo com os dados (titulo, fonte, path, id e tagId) da galeria
├── index.html                 # HTML base da aplicação (usado pelo Vite)
├── package.json               # Dependências e scripts do projeto
├── vite.config.js             # Configuração do bundler Vite
└── README.md                  # Documentação do projeto
```

---

## 🚀 Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/pedrofaleirosss/space-app.git
```

2. Acesse a pasta:

```bash
cd space-app
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse: `http://localhost:5173`

---

## 🙋‍♂️ Autor

Desenvolvido com 💜 por [Pedro Faleiros](https://github.com/pedrofaleirosss)

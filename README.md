# entrega-final-PW
protótipo de um sistema de portfólio interativo com funções básicas

Uma aplicação web interativa para gerenciamento de projetos pessoais.

O projeto foge do padrão minimalista tradicional, explorando texturas de papel, elementos orgânicos e uma interface que simula uma mesa de trabalho criativa.

## Principais Implementações e Design

### 1. Estética "Handmade" (Feito à Mão)
- **Design de Colagem:** Uso de rotações sutis (`transform: rotate`) e sombras duras (`box-shadow`) para simular recortes de papel e fotos Polaroid sobrepostos.
- **Elementos "Adesivos":** Implementação de imagens (fitas adesivas) utilizando pseudo-elementos CSS (`::before` e `::after`) para decorar a interface sem poluir o HTML.
- **Divisória SVG Customizada:** Criação de uma linha divisória estilo "fio de telefone/mola de caderno" utilizando SVG via CSS `background-image`, garantindo leveza e repetição perfeita.

### 2. Tipografia Expressiva
Combinação de fontes do Google Fonts para reforçar a identidade visual:
- **Títulos:** *Poppins* e *Permanent Marker* (simulando canetão).
- **Corpo:** *Space Mono* (simulando máquina de escrever).

### 3. Funcionalidade (CRUD)
Apesar do foco visual, a aplicação é funcional:
- **Create:** Formulário estilizado para adicionar novos projetos.
- **Read:** Visualização dos projetos em um grid responsivo de "Polaroids".
- **Update/Delete:** Botões de ação integrados para editar ou remover itens.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização avançada (Flexbox, Grid, Transforms, Filters).
- **JavaScript:** Lógica de manipulação do DOM e gerenciamento dos dados.

---

### Como rodar o projeto

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Aproveite a experiência visual!

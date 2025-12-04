// script.js

// 1. Variáveis globais
const form = document.getElementById('projectForm');
const listContainer = document.getElementById('projectList');

// Campos do formulário
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const descInput = document.getElementById('description');
const indexInput = document.getElementById('projectIndex'); // Campo escondido

// 2. Carregar projetos salvos ao iniciar a página
document.addEventListener('DOMContentLoaded', updateScreen);

// 3. Função para obter dados do LocalStorage
function getProjects() {
    // Tenta pegar do armazenamento, se não tiver nada, retorna array vazio
    return JSON.parse(localStorage.getItem('db_projects')) || [];
}

// 4. Função para Salvar no LocalStorage
function setProjects(projects) {
    localStorage.setItem('db_projects', JSON.stringify(projects));
}

// 5. Função Principal: Criar ou Atualizar (Submit do formulário)
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que a página recarregue

    const projects = getProjects();
    
    // Objeto com os dados do novo projeto
    const projectData = {
        title: titleInput.value,
        image: imageInput.value,
        description: descInput.value
    };

    const index = indexInput.value;

    if (index === '') {
        // MODO CRIAR: Adiciona no final do array
        projects.push(projectData);
    } else {
        // MODO EDITAR: Substitui o item na posição específica
        projects[index] = projectData;
    }

    setProjects(projects); // Salva no banco local
    updateScreen();        // Atualiza a tela
    resetForm();           // Limpa o formulário
});

// 6. Função para Deletar
function deleteProject(index) {
    const projects = getProjects();
    projects.splice(index, 1); // Remove 1 item na posição 'index'
    setProjects(projects);
    updateScreen();
}

// 7. Função para Preencher formulário para Edição
function editProject(index) {
    const projects = getProjects();
    const project = projects[index];

    // Preenche os inputs com os dados do projeto clicado
    titleInput.value = project.title;
    imageInput.value = project.image;
    descInput.value = project.description;
    indexInput.value = index; // Define o índice no input escondido
    
    document.getElementById('saveBtn').innerText = 'Atualizar Projeto';
}

// 8. Função para Atualizar a Tela (Renderizar)
function updateScreen() {
    const projects = getProjects();
    listContainer.innerHTML = ''; // Limpa a lista antes de renderizar de novo

    projects.forEach((project, index) => {
        // Cria o HTML de cada card
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="actions">
                <button class="btn-edit" onclick="editProject(${index})">Editar</button>
                <button class="btn-delete" onclick="deleteProject(${index})">Excluir</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// 9. Função para limpar formulário
function resetForm() {
    form.reset();
    indexInput.value = '';
    document.getElementById('saveBtn').innerText = 'Salvar Projeto';
}
const terminalText = "🔒 Segurança em foco proteja sua vida digital 🔒 "; // Titulo principal da página
let index = 0; // Índice para rastrear a posição atual do texto
const terminalElement = document.getElementById("main_header");

// Criação da tag h1
const h1Element = document.createElement("h1");
terminalElement.appendChild(h1Element);

// Criação do cursor
const cursorElement = document.createElement("span");
cursorElement.className = "cursor";
h1Element.appendChild(cursorElement);

function typeWriter() {
    h1Element.innerHTML = terminalText.substring(0, index) + '<span class="cursor"></span>';
    index++;

    if (index <= terminalText.length) {
        // Aguarda antes de chamar a próxima iteração
        setTimeout(() => {
            typeWriter();
        }, 83); // Ajuste a velocidade da digitação ajustando o valor aqui
    }
}

// Inicie a animação quando a página carregar
window.onload = typeWriter;
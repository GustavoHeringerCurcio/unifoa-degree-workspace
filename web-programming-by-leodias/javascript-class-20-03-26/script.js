const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");


form.addEventListener("submit", e => {
    e.preventDefault();

    if(nome.value.trim().length < 3) {
        alert("O nome deve conter pelo menos 3 caracteres.");
        return;
    }

    if(!email.value.includes("@") || !email.value.includes(".")) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (telefone.value.trim().length !== 12) {  
        alert("O telefone deve conter 12 caracteres (formato: (XX) XXXXX-XXXX).");
        return;
    }
    
    if(cpf.value.trim().length !== 11) {
        alert("O CPF deve conter 11 caracteres (apenas números).");
        return;
    }

    
    
    alert("Formulário enviado com sucesso!");

});

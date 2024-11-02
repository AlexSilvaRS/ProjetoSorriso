document.getElementById("btn-mobile").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault(); // Impede o envio do formulário
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});

// Efeito de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
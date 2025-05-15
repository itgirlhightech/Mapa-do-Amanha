const form = document.getElementById("avaliacao-form");
const mensagem = document.getElementById("mensagem-sucesso");

// biome-ignore lint/complexity/useArrowFunction: <explanation>
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/evlynfeitosa@gmail.com", {
        method: "POST",
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Ao invés de só mostrar a mensagem, redireciona para a página de obrigado
        window.location.href = "https://itgirlhightech.github.io/Mapa-do-Amanha/obrigada.html";
    })
    .catch(error => {
        console.error("Erro ao enviar:", error);
        mensagem.textContent = "Erro ao enviar a mensagem. Tente novamente.";
        mensagem.style.color = "red";
        mensagem.style.display = "block";
    });
});

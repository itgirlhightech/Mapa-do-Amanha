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
        mensagem.textContent = "Mensagem enviada com sucesso! Obrigada pelo feedback";
        mensagem.style.color = "#1c65b4";
        mensagem.style.display = "block";
        form.reset();
    })
    .catch(error => {
        console.error("Erro ao enviar:", error);
    });
});
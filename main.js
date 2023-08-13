document.addEventListener("DOMContentLoaded", function () {

    const reservaForm = document.getElementById('reservaForm');
    const dataCheckin = document.getElementById('dataCheckin');
    const dataCheckout = document.getElementById('dataCheckout');
    const mensagem = document.getElementById('mensagem');
    const reservaInfo = document.getElementById('reservaInfo');

    function validarDatas() {
        const dataInicio = new Date(dataCheckin.value);
        const dataFim = new Date(dataCheckout.value);
        return dataFim >= dataInicio;
    }

    reservaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (validarDatas()) {
            mensagem.innerHTML = "<strong>Reserva válida!</strong>";
            mensagem.style.color = "#035AA6";
            mensagem.classList.add("mensagem-valida");  // Adiciona a classe para estilizar a mensagem válida

            // Atualizar a mensagem com as datas de check-in e check-out
            reservaInfo.innerHTML = `
                <strong>Check-in:</strong> ${dataCheckin.value} <br>
                <strong>Check-out:</strong> ${dataCheckout.value}
            `;

            // Limpar os campos após a submissão, se desejado
            dataCheckin.value = '';
            dataCheckout.value = '';
        } else {
            mensagem.textContent = "Erro: A data de check-out deve ser posterior à data de check-in.";
            mensagem.style.color = "red";
            mensagem.classList.remove("mensagem-valida");  // Remove a classe para retornar ao estilo padrão
            reservaInfo.textContent = ''; // Limpa a informação de reserva anterior
        }
    });

    dataCheckout.addEventListener('change', function () {
        if (!validarDatas()) {
            mensagem.textContent = "Erro: A data de check-out não pode ser anterior à data de check-in.";
            mensagem.style.color = "red";
            mensagem.classList.remove("mensagem-valida");  // Remove a classe para retornar ao estilo padrão
            reservaInfo.textContent = ''; // Limpa a informação de reserva anterior
        } else {
            mensagem.textContent = "";
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');

    // Adicionar interatividade ao formulário de reservas
    const reservationForm = document.querySelector('.reservations form');

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = reservationForm.querySelector('input[placeholder="Nome"]').value;
        const date = reservationForm.querySelector('input[type="date"]').value;
        const people = reservationForm.querySelector('input[placeholder="Número de pessoas"]').value;

        if (name && date && people) {
            alert(`Obrigado, ${name}! Sua reserva para ${people} pessoa(s) no dia ${date} foi confirmada.`);
            reservationForm.reset();
        } else {
            alert('Por favor, preencha todos os campos para completar a reserva.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Permite navegação contínua
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: true, // Navegação com teclado
        grabCursor: true, // Cursor de "pegar"
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: true,
        grabCursor: true,
    });
});
//virar folha
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Permite navegação contínua
        navigation: false, // Desabilita a navegação com os botões
        pagination: false, // Desabilita a paginação
        mousewheel: true, // Permite navegação com o scroll do mouse
        touchEventsTarget: 'container', // Torna a área de conteúdo sensível ao toque
        grabCursor: true, // Cursor de "pegar" ao passar o mouse sobre a área interativa
        effect: 'slide', // Efeito de deslizamento simples
        slidesPerView: 1, // Exibe uma imagem por vez
        spaceBetween: 0, // Remove o espaço entre as imagens
    });
});



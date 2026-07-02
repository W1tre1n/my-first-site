document.addEventListener('DOMContentLoaded', () => {
    // Находим все ссылки на сайте
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Если ссылка ведет на внешний сайт или якорь, пропускаем
            if (link.hostname !== window.location.hostname) return;

            e.preventDefault(); // Останавливаем мгновенный переход
            const targetUrl = link.href;

            // Запускаем анимацию исчезновения
            document.body.classList.add('fade-out');

            // Ждем 0.5 сек (время нашей анимации) и переходим
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 200);
        });
    });
    // Анимация
    const btns = document.querySelectorAll('.social-btn');
    
    btns.forEach((btn, index) => {
        // Задержка для каждой следующей плиты
        btn.style.transitionDelay = `${index * 0.15}s`;
        
        // Добавляем класс для запуска анимации
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 100);
    });
});

function switchScreen(screenName) {
    // Скрыть все экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Показать нужный экран
    const targetScreen = document.getElementById(`screen_${screenName}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const loveBox = document.getElementById('loveBox');
    const loveTexts = loveBox.querySelectorAll('.loveText');

    const boxPaddingX = 20; // padding left/right
    const boxPaddingY = 60; // top + space for Back button

    const boxWidth = loveBox.clientWidth - boxPaddingX * 2;
    const boxHeight = loveBox.clientHeight - boxPaddingY;

    loveTexts.forEach(text => {
        // random x and y inside the box
        const x = Math.random() * boxWidth;
        const y = Math.random() * boxHeight;

        text.style.position = 'absolute';
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
        text.style.animation = 'beat 1s infinite alternate';
    });
});

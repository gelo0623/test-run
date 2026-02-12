window.addEventListener('DOMContentLoaded', () => {
    const loveBox = document.getElementById('loveBox');
    const loveTexts = loveBox.querySelectorAll('.loveText');

    const boxWidth = loveBox.clientWidth - 100;  // leave padding space
    const boxHeight = loveBox.clientHeight - 50; // leave space for Back button

    loveTexts.forEach(text => {
        // Generate random position inside the box
        const x = Math.random() * boxWidth;
        const y = Math.random() * boxHeight;

        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
    });
});

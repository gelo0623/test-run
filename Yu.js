const loveBox = document.getElementById('loveBox');
const loveTexts = loveBox.querySelectorAll('.loveText');

function scatterLoveTexts() {
    const boxWidth = loveBox.clientWidth - 100;  // leave padding
    const boxHeight = loveBox.clientHeight - 50; // leave space for Back button

    loveTexts.forEach(text => {
        const x = Math.random() * boxWidth;
        const y = Math.random() * boxHeight;

        text.style.position = 'absolute';
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
    });
}

// Inside your Surprise buttons loop, for Surprise 3:
surprisesBtns.forEach(s => {
    const pageDiv = document.getElementById(s.page);

    s.btn.addEventListener('click', () => {
        if (s.opened) return;

        surprisesPage.classList.remove('active');
        pageDiv.classList.add('active');

        s.opened = true;
        s.btn.style.filter = 'grayscale(80%)';
        s.btn.style.cursor = 'not-allowed';

        // <-- Run scatter function ONLY when Surprise 3 opens
        if (s.page === 'surprise3Page') {
            scatterLoveTexts();
        }
    });

    const backBtn = pageDiv.querySelector('.backBtn');
    backBtn.addEventListener('click', () => {
        pageDiv.classList.remove('active');
        surprisesPage.classList.add('active');

        const allOpened = surprisesBtns.every(sb => sb.opened);
        if (allOpened) {
            surprisesPage.classList.remove('active');
            valentinePage.classList.add('active');
        }
    });
});

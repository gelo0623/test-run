const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesScale = 1; 

function moveNoButton() {
    const x = Math.random() * 800 - 400;
    const y = Math.random() * 400 - 200;  
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    yesScale += 0.2; 
    yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
    yesBtn.style.transition = 'all 1s ease-in-out';
    yesBtn.style.position = 'fixed';
    yesBtn.style.top = '50%';
    yesBtn.style.left = '50%';
    yesBtn.style.transform = 'translate(-50%, -50%) scale(30)';
    yesBtn.style.zIndex = '10';

    noBtn.style.display = 'none';
});


const introPage = document.getElementById('introPage');
const readyPage = document.getElementById('readyPage');
const surprisesPage = document.getElementById('surprisesPage');
const playTogetherBtn = document.getElementById('playTogetherBtn');
const readyYesBtn = document.getElementById('readyYesBtn');

playTogetherBtn.addEventListener('click', () => {
    introPage.classList.remove('active');
    readyPage.classList.add('active');
});

readyYesBtn.addEventListener('click', () => {
    readyPage.classList.remove('active');
    surprisesPage.classList.add('active');
});

// Surprises with gray-out feature
const surprisesBtns = [
    { btn: document.getElementById('surprise1Btn'), page: 'surprise1Page', opened: false },
    { btn: document.getElementById('surprise2Btn'), page: 'surprise2Page', opened: false },
    { btn: document.getElementById('surprise3Btn'), page: 'surprise3Page', opened: false },
    { btn: document.getElementById('surprise4Btn'), page: 'surprise4Page', opened: false },
];

const valentinePage = document.getElementById('valentinePage');

surprisesBtns.forEach(s => {
    const pageDiv = document.getElementById(s.page);

    s.btn.addEventListener('click', () => {
        // Ignore clicks if already opened
        if (s.opened) return;

        surprisesPage.classList.remove('active');
        pageDiv.classList.add('active');

        // Mark as opened and gray it out
        s.opened = true;
        s.btn.style.filter = 'grayscale(80%)';
        s.btn.style.cursor = 'not-allowed';
    });

    const backBtn = pageDiv.querySelector('.backBtn');
    backBtn.addEventListener('click', () => {
        pageDiv.classList.remove('active');
        surprisesPage.classList.add('active');

        // Check if all surprises are opened
        const allOpened = surprisesBtns.every(sb => sb.opened);
        if (allOpened) {
            surprisesPage.classList.remove('active');
            valentinePage.classList.add('active');
        }
    });
});

const playSongBtn = document.getElementById('playSongBtn');
const vinyl = document.querySelector('.vinyl');

playSongBtn.addEventListener('click', () => {
    vinyl.style.animation = 'spin 3s linear infinite';
});



window.addEventListener('DOMContentLoaded', () => {
    const loveBox = document.getElementById('loveBox');
    const loveTexts = loveBox.querySelectorAll('.loveText');

    const boxWidth = loveBox.clientWidth - 100;  // leave padding
    const boxHeight = loveBox.clientHeight - 50; // leave space for Back button

    loveTexts.forEach(text => {
        const x = Math.random() * boxWidth;
        const y = Math.random() * boxHeight;

        text.style.position = 'absolute'; // make sure it's absolute
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
    });
});

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

const surprisesBtns= [
    { btn:
        document.getElementById('surprise1Btn'), opened: false },
        { btn:
            document.getElementById('surprise2Btn'), opened: false },
            { btn:
                document.getElementById('surprise3Btn'), opened: false },
                { btn:
                    document.getElementById('surprise4Btn'), opened: false },
];

const surprisePage = document.getElementById('surprisePage');
const valentinePage = document.getElementById('valentinePage');

surprisesBtns.forEach(s => {
    const pageDiv = 
    document.getElementById(s.page);
    s.btn.addEventListener('click', () => {

        if (s.opened) return;
        
        surprisesPage.classList.remove('active');

        pageDiv.classList.add('active');

        s.opened = true;
        s.btn.style.filter = 'grayscale(80%)';
        s.btn.style.cursor = 'not-allowed'
    });

    const backBtn = pageDiv.querySelector('.backBtn');
    backBtn.addEventListener('click', () => {

        pageDiv.classList.remove('active');
        surprisesPage.classList.add('active');

        const allOpened = surprisesBtns.every(sb => sb.opened);
        if (allOpened) {

            surprisePage.classList.remove('active');
            valentinePage.classList.add('active');
        }
    });
});

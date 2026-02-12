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
        document.getElementById('surprise1Btn'), page: 'surprise1Page' },
        { btn:
            document.getElementById('surprise2Btn'), page: 'surprise2Page' },
            { btn:
                document.getElementById('surprise3Btn'), page: 'surprise3Page' },
                { btn:
                    document.getElementById('surprise4Btn'), page: 'surprise4Page' },
];

surprisesBtns.forEach(s => {
    const pageDiv = 
    document.getElementById(s.page);
    s.btn.addEventListener('click', () => {
        
        surprisesPage.classList.remove('active');

        pageDiv.classList.add('active');
    });

    const backBtn = pageDiv.querySelector('.backBtn');
    backBtn.addEventListener('click', () => {

        pageDiv.classList.remove('active');
        surprisesPage.classList.add('active');
    });
});



const bouton1 = document.getElementById('boutonPrincipal');
const achattps = document.getElementById('achattps');
const achattps2 = document.getElementById('achattps2');
const achattps3 = document.getElementById('achattps3');
const achattps4 = document.getElementById('achattps4');
const achat1 = document.getElementById('achat1');
const scoreLabel = document.getElementById('Score');
const achat2 = document.getElementById('achat2');
const achat3 = document.getElementById('achat3');
const achat4 = document.getElementById('achat4');
const labelTotal = document.getElementById('tolveTotal');
const labelNbAchat1 = document.getElementById('nombreAchatClick1');
const labelNbAchat2 = document.getElementById('nombreAchatClick2');
const labelNbAchat3 = document.getElementById('nombreAchatClick3')
const labelNbAchat4 = document.getElementById('nombreAchatClick4')
const labelAchatTps1 = document.getElementById('nombreAchatTps1');
const labelAchatTps2 = document.getElementById('nombreAchatTps2');
const labelAchatTps3 = document.getElementById('nombreAchatTps3');
const labelAchatTps4 = document.getElementById('nombreAchatTps4');
const labeltpsmain = document.getElementById('tolveParSec');

let score = 0;
let total = 0;
let click = 1;
let prixAchat1 = 17.25;
let prixAchat2 = 115;
let prixAchat3 = 1265;
let prixAchat4 = 120000;
let prixAchattps = 12;
let prixAchattps2 = 1200;
let prixAchattps3 = 12000;
let prixAchattps4 = 120000;
let nbAchat1 = 0;
let nbAchat2 = 0;
let nbAchat3 = 0;
let nbAchat4 = 0;
let nbAchattps = 0;
let nbAchattps2 = 0;
let nbAchattps3 = 0;
let nbAchattps4 = 0;
let tpsUpgrade = 0;
var intervalId;
let particules = true;


function updateScore() {
    score += tpsUpgrade;
    score = Math.round(score * 100) / 100;
    scoreLabel.textContent = score + ' Tolves';

    total = total + tpsUpgrade;
    labelTotal.textContent = total;
};

intervalId = setInterval(updateScore, 1000);

bouton1.addEventListener('click', () => {
    score += click;
    total += click;
    score = Math.round(score * 100) / 100;
    labelTotal.textContent = total
    scoreLabel.textContent = score  + ' Tolves';
    const buttonRect = event.target.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;
    createParticles(x, y);
});

achattps.addEventListener('click', () => {
    
    if (score >= prixAchattps) {
        nbAchattps += 1;
        labelAchatTps1.textContent = nbAchattps;
        score -= prixAchattps;
        score = Math.round(score * 100) / 100;
        scoreLabel.textContent = score + ' Tolves';
        tpsUpgrade += 1;
        labeltpsmain.textContent = tpsUpgrade + ' Tolves/s';
        prixAchattps = 12 * 1.15 ** nbAchattps;
        prixAchattps = prixAchattps.toFixed(2);
        achattps.textContent = 'TPS coût : ' + prixAchattps;
    }
});

achattps2.addEventListener('click', () => {
    
    if (score >= prixAchattps2) {
        nbAchattps2 += 1;
        labelAchatTps2.textContent = nbAchattps2;
        score -= prixAchattps2;
        score = Math.round(score * 100) / 100;
        scoreLabel.textContent = score + ' Tolves';
        tpsUpgrade += 12;
        labeltpsmain.textContent = tpsUpgrade + ' Tolves/s';
        prixAchattps2 = 1200 * 1.15 ** nbAchattps2;
        prixAchattps2 = prixAchattps2.toFixed(2);
        achattps2.textContent = 'TPS coût : ' + prixAchattps2;
    }
});

achattps3.addEventListener('click', () => {
    
    if (score >= prixAchattps3) {
        nbAchattps3 += 1;
        labelAchatTps3.textContent = nbAchattps3;
        score -= prixAchattps3;
        score = Math.round(score * 100) / 100;
        scoreLabel.textContent = score + ' Tolves';
        tpsUpgrade += 120;
        labeltpsmain.textContent = tpsUpgrade + ' Tolves/s';
        prixAchattps3 = 12000 * 1.15 ** nbAchattps3;
        prixAchattps3 = prixAchattps3.toFixed(2);
        achattps3.textContent = 'TPS coût : ' + prixAchattps3;
    }
});

achattps4.addEventListener('click', () => {
    
    if (score >= prixAchattps4) {
        nbAchattps4 += 1;
        labelAchatTps4.textContent = nbAchattps4;
        score -= prixAchattps4;
        score = Math.round(score * 100) / 100;
        scoreLabel.textContent = score + ' Tolves';
        tpsUpgrade += 1200;
        labeltpsmain.textContent = tpsUpgrade + ' Tolves/s';
        prixAchattps4 = 120000 * 1.15 ** nbAchattps4;
        prixAchattps4 = prixAchattps4.toFixed(2);
        achattps4.textContent = 'TPS coût : ' + prixAchattps4;
    }
});

achat1.addEventListener('click', () => {
    if (score >= prixAchat1) {
        nbAchat1 += 1;
        labelNbAchat1.textContent = nbAchat1;
        score -= prixAchat1;
        score = Math.round(score * 100) / 100;
        click += 1;
        scoreLabel.textContent = score + ' Tolves';
        prixAchat1 = 17.25 * 1.15 ** nbAchat1;
        prixAchat1 = prixAchat1.toFixed(2);
        achat1.textContent = 'Achat1 coût : ' + prixAchat1;
    }
});

achat2.addEventListener('click', () => {
    if (score >= prixAchat2) {
        nbAchat2 += 1;
        labelNbAchat2.textContent = nbAchat2;
        score -= prixAchat2;
        score = Math.round(score * 100) / 100;
        click += 6;
        scoreLabel.textContent = score + ' Tolves';
        prixAchat2 = 115 * 1.15 ** nbAchat2;
        prixAchat2 = prixAchat2.toFixed(2);
        achat2.textContent = 'Achat2 coût : ' + prixAchat2;
    }
});


achat3.addEventListener('click', () => {
    if (score >= prixAchat3) {
        nbAchat3 += 1;
        labelNbAchat3.textContent = nbAchat3;
        score -= prixAchat3;
        score = Math.round(score * 100) / 100;
        click += 12;
        scoreLabel.textContent = score + ' Tolves';
        prixAchat3 = 1265 * 1.15 ** nbAchat3;
        prixAchat3 = prixAchat3.toFixed(2);
        achat3.textContent = 'Achat3 coût : ' + prixAchat3;
    }
});

achat4.addEventListener('click', () => {
    if (score >= prixAchat4) {
        nbAchat4 += 1;
        labelNbAchat4.textContent = nbAchat4;
        score -= prixAchat4;
        score = Math.round(score * 100) / 100;
        click += tpsUpgrade*0.12;
        scoreLabel.textContent = score + ' Tolves';
        prixAchat4= 120000 * 1.15 ** nbAchat4;
        prixAchat4 = prixAchat4.toFixed(2);
        achat4.textContent = 'Super Achat coût : ' + prixAchat4;
    }
});

/*
achat5.addEventListener('click', () => {
    if (score >= prixAchat1) {
        nbAchat1 += 1;
        labelNbAchat1.textContent = nbAchat1;
        score -= prixAchat1;
        score = Math.round(score * 100) / 100;
        click += 1;
        scoreLabel.textContent = score + ' Tolves';
        prixAchat1 = 17.25 * 1.15 ** nbAchat1;
        prixAchat1 = prixAchat1.toFixed(2);
        achat1.textContent = 'Achat1 coût : ' + prixAchat1;
        gittest
    }
});

achat6.addEventListener('click', () => {
    if (score >= prixAchat1) {
        nbAchat1 += 1;
        labelNbAchat1.textContent = nbAchat1;
        score -= prixAchat1;
        score = Math.round(score * 100) / 100;
        click += 1;
        scoreLabel.textContent = score + ' Tolves';
        prixAchat1 = 17.25 * 1.15 ** nbAchat1;
        prixAchat1 = prixAchat1.toFixed(2);
        achat1.textContent = 'Achat1 coût : ' + prixAchat1;
    }
});*/

// création des particules
function createParticles(x, y) {
    if (particules) {
        const divParticule = document.querySelector('.divParticule');

        //création des 12 particules
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');  // une div qui sera une particule
            particle.classList.add('particule');
            particle.style.left = x + getRandomOffset() + 'px';
            particle.style.top = y + getRandomOffset() + 'px';
            particle.style.setProperty('--tx', getRandomOffset() + 'px');
            particle.style.setProperty('--ty', getRandomOffset() + 'px');
            particle.style.setProperty('--r', getRandomRotation());
            divParticule.appendChild(particle);
        }
    }
}

const boutonPariculesOnOff = document.getElementById('btnParticulesOnOff')
function particulesOnOff() {
    if (particules) {
        particules = false;
        boutonPariculesOnOff.textContent = "On Particules"
    }else {
        particules = true;
        boutonPariculesOnOff.textContent = "Off Particules"

    }
}

function getRandomOffset() {
    return Math.random() * 220 - 130; // Valeurs aléatoires entre -130 et 220
}

function getRandomRotation() {
    return Math.random() * 360 + 'deg'; // Valeurs aléatoires entre 0deg et 360deg
}





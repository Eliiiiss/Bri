const envelope = document.getElementById('envelope')
const tapHint = document.getElementById('tap-hint')
const letterCard = document.getElementById('letter-card')
const giftsRow = document.querySelector('.gifts-row')

const viewMain = document.getElementById('view-main')
const viewDetail = document.getElementById('view-detail')
const detailContent = document.getElementById('detail-content')
const btnBack = document.getElementById('btn-back')
const giftButtons = document.querySelectorAll('button.gift-icon')

const giftsData = {
    3: {
        html: `<h2>Regalo 3</h2><p>Aquí va el texto o contenido de tu tercer regalo.</p>`,
    },
    4: {
        html: `<h2>Regalo 4</h2><p>Aquí va el contenido del cuarto regalo (la playlist estilo Spotify).</p>`,
    },
}

if (envelope) {
    envelope.addEventListener('click', () => {
        if (envelope.classList.contains('open')) return

        envelope.classList.add('open')
        if (tapHint) tapHint.style.opacity = '0'

        setTimeout(() => {
            if (letterCard) letterCard.classList.add('show')
        }, 500)

        setTimeout(() => {
            if (giftsRow) giftsRow.classList.add('fly')
        }, 1250)
    })
}

giftButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.gift
        if (!giftsData[id]) return
        detailContent.innerHTML = giftsData[id].html
        viewMain.classList.remove('active')
        viewDetail.classList.add('active')
    })
})

if (btnBack) {
    btnBack.addEventListener('click', () => {
        viewDetail.classList.remove('active')
        viewMain.classList.add('active')
    })
}

// Pétalos cayendo en la pantalla principal
const homePetalsContainer = document.getElementById('home-petals')
if (homePetalsContainer) {
    const total = 16
    for (let i = 0; i < total; i++) {
        const petal = document.createElement('span')
        petal.className = 'home-petal'
        petal.style.left = Math.random() * 100 + 'vw'
        petal.style.animationDuration = 8 + Math.random() * 7 + 's'
        petal.style.animationDelay = Math.random() * 10 + 's'
        petal.style.width = petal.style.height = 7 + Math.random() * 9 + 'px'
        petal.style.opacity = 0.5 + Math.random() * 0.4
        homePetalsContainer.appendChild(petal)
    }
}

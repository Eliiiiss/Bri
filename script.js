const envelope = document.getElementById('envelope')
const tapHint = document.getElementById('tap-hint')
const letterCard = document.getElementById('letter-card')
const giftsRow = document.querySelector('.gifts-row')

if (envelope) {
    envelope.addEventListener('click', () => {
        if (envelope.classList.contains('open')) return

        envelope.classList.add('open')

        if (tapHint) {
            tapHint.classList.add('hide')
        }

        setTimeout(() => {
            if (letterCard) letterCard.classList.add('show')
        }, 500)

        setTimeout(() => {
            if (giftsRow) giftsRow.classList.add('fly')
        }, 1250)
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

// Sistema de páginas apiladas de la carta
const letterPages = Array.from(document.querySelectorAll('.letter-page'))
let pageOrder = letterPages
function updateStack() {
    pageOrder.forEach((page, i) => {
        page.classList.remove('stack-pos-0', 'stack-pos-1', 'stack-pos-2')
        page.classList.add('stack-pos-' + i)
    })
}
document.querySelectorAll('.page-next').forEach((btn) => {
    btn.addEventListener('click', () => {
        pageOrder.push(pageOrder.shift())
        updateStack()
    })
})
updateStack()

document.querySelectorAll('.page-prev').forEach((btn) => {
    btn.addEventListener('click', () => {
        pageOrder.unshift(pageOrder.pop())
        updateStack()
    })
})

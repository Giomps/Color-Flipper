/* 1 - Quand on appuye sur le bouton "increase", le compteur augmente */
/* 2 - Quand on appuye sur le bouton "decrease", le compteur diminue*/
/* 3 - Quand on appuye sur le bouton "reset", le compteur revient à zéro */
/* 4 - Si le compteur est supérieur à 0, alors le compteur devient vert */
/* 5 - Si le compteur est inférieur à 0, alors le compteur devient rouge */
/* 6 - Si le compteur est égal à 0, alors le compteur reste noir */

/* On récupère les attributs HTML */
const btn_increase = document.querySelector('.btn-increase')
const btn_decrease = document.querySelector('.btn-decrease')
const btn_reset = document.querySelector('.btn-reset')
const span = document.querySelector('.span')

/* On ajoute un nouveau élément dans la div span */
let counter = document.createElement('span')
counter.innerHTML = 0
counter.style.fontFamily = 'Open Sans'
counter.style.fontSize = '6rem'
counter.style.fontWeight = 'bold'
span.append(counter)

/* Bouton pour incrémenter le compteur */
btn_increase.addEventListener('click', function() {
    counter.innerHTML++
    span_color()
})

/* Bouton pour décrémenter le compteur */
btn_decrease.addEventListener('click', function() {
    counter.innerHTML--
    span_color()
})

/* Bouton pour reinitialiser le compteur */
btn_reset.addEventListener('click', function() {
    counter.innerHTML = 0
    span_color()
})

function span_color() {
    if(counter.innerHTML > 0) {
        counter.style.color = 'green'
    } else if(counter.innerHTML < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = 'black'
    }    
}

const bt = document.getElementById('btTroca')
const home = document.getElementById('home')
const perfil = document.getElementById('perfil')

const menu = document.getElementById('menu')

const text = document.getElementById('textAbout')
const contentAbout = document.getElementById('contentAbout')

var click = 0

const titulo = document.getElementById('titulo')
const texto = document.getElementById('texto')
const dev = document.getElementById('dev')
const citacao = document.getElementById('citacao')

const wave = document.getElementById('wave')

const li01 = document.getElementById('li01')
const icon01 = document.getElementById('icon01')
const textIcon01 = document.getElementById('textIcon01')
const li02 = document.getElementById('li02')
const icon02 = document.getElementById('icon02')
const textIcon02 = document.getElementById('textIcon02')
const li03 = document.getElementById('li03')
const icon03 = document.getElementById('icon03')
const textIcon03 = document.getElementById('textIcon03')
const li04 = document.getElementById('li04')
const icon04 = document.getElementById('icon04')
const textIcon04 = document.getElementById('textIcon04')
const li05 = document.getElementById('li05')
const icon05 = document.getElementById('icon05')
const textIcon05 = document.getElementById('textIcon05')

const cards = document.getElementById('services')

var roxoClaro = '#642fe8'
var rocoEscuro = '#2c1168'

function goNewHome() {
    home.classList.add('containerAbout2')
    perfil.classList.add('perfil2')
    bt.classList.add('bt2')

    titulo.innerHTML = "Programador <span class='dev'>Front-End</span>"
    texto.innerText = "Atualmente estou atuando mais na área como programador Front-End com foco em desenvolvimento Web, realizo alguns trabalhos nessa área, atuando como FreeLancer. Tenho conhecimento nas principais linguagens da área, além do conhecimento em versionamento de código (GIT) e alguns Frameworks, buscando aprender cada vez mais. Atualmente procuro melhorar meus conhecimento em Typescript e Vue.js"
    citacao.innerHTML = '<p id="citacao" class="citação">" Quando a caminhada fica dura, só os duros continuam caminhando " - Mano Brown</p>'

    text.classList.remove('sumir')
    perfil.classList.remove('sumir')
    contentAbout.classList.remove('deslocar')
}

function backFirstHome() {
    home.classList.remove('containerAbout2')
    perfil.classList.remove('perfil2')
    bt.classList.remove('bt2')

    titulo.innerHTML = "João Pedro do Espirito Santo <span class='dev'>Almeida</span>"
    texto.innerText = "Ola! Meu nome é João Pedro, tenho 22 anos , sou técnico de automação industrial pelo SENAI e graduando de Engenharia de Controle e Automação, com foco em me especializar na área de software, a fim de me tornar um Engenheiro de Software"
    citacao.innerHTML = '<p id="citacao" class="citação">" Você nunca vai cruzar o oceano se não tiver coragem de perder a costa de vista " - André Gide</p>'

    text.classList.remove('sumir')
    perfil.classList.remove('sumir')
    contentAbout.classList.remove('deslocar')
}

function addAparecer() {
    text.classList.add('aparecer')
    perfil.classList.add('aparecer')
    contentAbout.classList.add('deslocarAparecer')
    setTimeout(removeAparecer, 500)
}
function removeAparecer() {
    text.classList.remove('aparecer')
    perfil.classList.remove('aparecer')
    contentAbout.classList.remove('deslocarAparecer')
}

function trocaHome() {
    text.classList.add('sumir')
    perfil.classList.add('sumir')
    contentAbout.classList.add('deslocar')
    setTimeout(addAparecer, 1000)
    if (click === 0) {
        setTimeout(goNewHome, 1000)
        click++
    } else {
        setTimeout(backFirstHome, 1000)
        click = 0
    }


}




bt.addEventListener('click', trocaHome)

window.addEventListener('scroll', function () {
    let value = window.scrollY
    console.log(value)
    if (value >= 0 && value < 350) {
        menu.style.transition = 0.5 + 's'
        li01.classList.add('activeLI')
        icon01.classList.add('activeIcon')
        textIcon01.classList.add('activeTextIcon')
    } else {
        li01.classList.remove('activeLI')
        icon01.classList.remove('activeIcon')
        textIcon01.classList.remove('activeTextIcon')
        menu.style.boxShadow = "0 0 0 rgba(0,0,0,0.8)"
        menu.style.transition = 0.5 + 's'
    }
    if (value >= 350 && value < 1150) {
        li01.classList.remove('activeLI')
        icon01.classList.remove('activeIcon')
        textIcon01.classList.remove('activeTextIcon')
        li02.classList.add('activeLI')
        icon02.classList.add('activeIcon')
        textIcon02.classList.add('activeTextIcon')
        cards.classList.add('aparecer02')
    } else {
        li02.classList.remove('activeLI')
        icon02.classList.remove('activeIcon')
        textIcon02.classList.remove('activeTextIcon')
    }
    if (value >= 1150 && value < 2200) {
        li02.classList.remove('activeLI')
        icon02.classList.remove('activeIcon')
        textIcon02.classList.remove('activeTextIcon')
        li03.classList.add('activeLI')
        icon03.classList.add('activeIcon')
        textIcon03.classList.add('activeTextIcon')
    } else {
        li03.classList.remove('activeLI')
        icon03.classList.remove('activeIcon')
        textIcon03.classList.remove('activeTextIcon')

    }
    if (value >= 2200 && value < 2550) {
        li03.classList.remove('activeLI')
        icon03.classList.remove('activeIcon')
        textIcon03.classList.remove('activeTextIcon')
        li04.classList.add('activeLI')
        icon04.classList.add('activeIcon')
        textIcon04.classList.add('activeTextIcon')
    } else {
        li04.classList.remove('activeLI')
        icon04.classList.remove('activeIcon')
        textIcon04.classList.remove('activeTextIcon')

    }
    if (value >= 2550) {
        li04.classList.remove('activeLI')
        icon04.classList.remove('activeIcon')
        textIcon04.classList.remove('activeTextIcon')
        li05.classList.add('activeLI')
        icon05.classList.add('activeIcon')
        textIcon05.classList.add('activeTextIcon')
    } else {
        li05.classList.remove('activeLI')
        icon05.classList.remove('activeIcon')
        textIcon05.classList.remove('activeTextIcon')

    }
    movimetCardProject(value)
})

function movimetCardProject(value) {
    let cardProject01 = document.getElementById('project01')
    let cardProject02 = document.getElementById('project02')
    let cardProject03 = document.getElementById('project03')
    let cardProject04 = document.getElementById('project04')
    console.log(value + '-----------')
    let total = 1490 - value
    if (total < 0) {
        total = 0
    }
    cardProject03.style.transform = `translateX(${total}px)`
    

    cardProject01.style.transform = `translateX(-${total}px)`
    cardProject02.style.transform = `translateX(-${total}px)`

}
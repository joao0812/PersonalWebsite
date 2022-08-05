function slide(e) {
    console.log(e.target)
    console.log(e.target.id)
    let idSeta = e.target.id
    let id = '#skillBar' + idSeta

    $(`#${idSeta}`).toggleClass('rotate')
    $(`${id}`).slideToggle(700)
}

const seta = document.querySelectorAll('.seta')
console.log(seta)
seta.forEach((evento) => {
    evento.addEventListener('click', slide)
})



window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll() 

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {

const targetLine = scrollY + innerHeight / 2


// verificar se a seção passou  da linha 
// quais dados vou precisar?

const sectionTop = section.offsetTop

const sectionHeight = section.offsetHeight
 
const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

console.log('o topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline)



// verificar  se a base astá abaixo da linha alvo 
// quais dados vou precisar ?

// a seçao termina onde?

const sectionEndsAt = sectionTop + sectionHeight

// o final da seçao passou da linha alvo

const sectionEndPassedTargetline = sectionEndsAt <= targetLine

console.log('o fundo da seçao passou da linha?',
 sectionEndPassedTargetline)

 // limites da seçao
 const sectionBoundaries =
 sectionTopReachOrPassedTargetline &&
!sectionEndPassedTargetline 

const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


menuElement.classList.remove('active')
if (sectionBoundaries) {
 menuElement.classList.add('active') 

}
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)






  function sayMyName(name) {
    console.log(name)
  }

  sayMyName('Algoritmo')
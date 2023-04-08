// document.onmousemove = (e) => {
//   let body = document.querySelector('body');
//   let snow = document.createElement('span');
//   let x = e.pageX;
//   let y = e.pageY;
//   let size = Math.random() * 50;

//   snow.style.left = x + 'px';
//   snow.style.top = y + 'px';
//   snow.style.width = size + 'px';
//   snow.style.height = size + 'px';
//   body.appendChild(snow);

//   setTimeout(() => {
//     snow.remove();
//   }, 2000);
// }

function typeWriter(el) {
  const mainText = el.innerHTML.split("")
  el.innerHTML = ''
  mainText.forEach(function(letter,i) {

  setTimeout(function(){
    el.innerHTML += letter
  }, 150*i)
  });
}

const phrase = document.querySelector('.feliz');

for (let i = 0; i < 10; i++) {
  typeWriter(phrase);
}


// function typeWriter(el) {
//   const mainText = el.innerHTML.split("")
//   el.innerHTML = ''
//   let i = 0

//   while (true) {
//     mainText.forEach(function(letter, j) {
//       if (j === i) {
//         setTimeout(function() {
//           el.innerHTML += letter
//         }, 150 * i)
//       }
//     })

//     i++
//     if (i === mainText.length) {
//       i = 0
//       el.innerHTML = ''
//     }
//   }
// }

// const phrase = document.querySelector('.feliz')
// typeWriter(phrase)

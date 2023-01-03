document.onmousemove = (e) => {
  let body = document.querySelector('body');
  let snow = document.createElement('span');
  let x = e.pageX;
  let y = e.pageY;
  let size = Math.random() * 50;

  snow.style.left = x + 'px';
  snow.style.top = y + 'px';
  snow.style.width = size + 'px';
  snow.style.height = size + 'px';
  body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 2000);
}
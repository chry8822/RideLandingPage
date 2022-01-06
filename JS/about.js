let show = document.querySelector('.about-cont');
let about = document.querySelector('.about-click');
let aboutlist = document.querySelector('.about-list')


// 어바웃 설명 열기
function aboutclick() {
  about.style.display = 'none';
  show.style.opacity = 1;
  // window.onclick = function (event) {
  //   if (event.path.includes(show) && !event.path.includes(about)) {
  //     aboutclose();
  //     about.style.display = 'flex';
  //     window.onclick = null;
  //   }
  // };
}
function windowabout(event) {
  console.log('클릭', event.path,event.composedPath)
  if (event.path.includes(show) && !event.path.includes(aboutlist)) {
    aboutclose();
    about.style.display = 'flex';    
  }
};
//  어바웃 닫기
function aboutclose () {
  show.style.opacity = 0;
}

window.addEventListener('click', windowabout)
window.addEventListener('touchstart', windowabout)

about.addEventListener("touchstart", aboutclick)
about.addEventListener('click', aboutclick)


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
  console.log('클릭')
  if (event.path.includes(show) && !event.path.includes(aboutlist)) {
    aboutclose();
    about.style.display = 'flex';    
  }
};
//  어바웃 닫기
function aboutclose () {
  show.style.opacity = 0;
}

//  메뉴 열기
function menuOpen(e) {
  e.stopPropagation();
  hidemenu.style.transform = "translate(" + 0 + "%)";
  // window.onclick = function (event) {
  //   if (!event.path.includes(hidemenu)) {
  //     menuClose();
  //     window.onclick = null;
  //   }
  // };
}
function windowclose (event) {
  if (!event.path.includes(hidemenu)) {
    menuClose();
    window.onclick = null;
    window.ontouchstart = null;
  }
};
// 메뉴 닫기
function menuClose() {
  hidemenu.style.transform = "translate(" + 100 + "%)";
}
// 화면 위로 올리는 버튼
function up() {
  window.scrollTo({ top: loca2, behavior:"smooth"});
}

window.addEventListener('click', windowabout)
window.addEventListener('touchstart', windowabout)

about.addEventListener("touchstart", aboutclick)
about.addEventListener('click', aboutclick)

menu.addEventListener("click", menuOpen);
menu.addEventListener("touchstart", menuOpen);

closemenu.addEventListener("click", menuClose);
closemenu.addEventListener("touchstart", menuClose);

window.addEventListener('touchstart', windowclose);
window.addEventListener('click', windowclose);

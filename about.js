let menu = document.querySelector(".menu-btn");
let hidemenu = document.querySelector(".hide-menu");
let closemenu = document.querySelector(".menu-close");
let loca2 = document.querySelector(".banner-header").offsetTop;
let upbtn = document.querySelector('.upbtn');
let show = document.querySelector('.about-cont');
let about = document.querySelector('.about-click');







// 어바웃 설명 열기
function aboutclick() {
  about.style.display = 'none';
  show.style.opacity = 1;

  window.onclick = function (event) {
    if (event.path.includes(show) && !event.path.includes(about)) {
      aboutclose();
      about.style.display = 'flex';
      window.onclick = null;
    }
  };
}

//  어바웃 닫기

function aboutclose () {
  show.style.opacity = 0;
}




//  메뉴 열기
function menuOpen(e) {
  e.stopPropagation();
  hidemenu.style.transform = "translate(" + 0 + "%)";

  window.onclick = function (event) {
    if (!event.path.includes(hidemenu)) {
      menuClose();
      window.onclick = null;
    }
  };
}

// 메뉴 닫기
function menuClose() {
  hidemenu.style.transform = "translate(" + 100 + "%)";
}

// 화면 위로 올리는 버튼

function up() {
  console.log('클릭')
  window.scrollTo({ top: loca2, behavior:"smooth"});
}

about.addEventListener('click', aboutclick)
upbtn.addEventListener("click",up);
menu.addEventListener("click", menuOpen);
closemenu.addEventListener("click", menuClose);
let menu = document.querySelector(".menu-btn");
let hidemenu = document.querySelector(".hide-menu");
let closemenu = document.querySelector(".menu-close");
let upbtn = document.querySelector('.upbtn');
let loca2 = document.querySelector(".banner-header").offsetTop;


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
    console.log('클릭')
    window.scrollTo({ top: loca2, behavior:"smooth"});
  }


upbtn.addEventListener("click",up);

menu.addEventListener("click", menuOpen);
menu.addEventListener("touchstart", menuOpen);

closemenu.addEventListener("click", menuClose);
closemenu.addEventListener("touchstart", menuClose);

window.addEventListener('touchstart', windowclose);
window.addEventListener('click', windowclose);

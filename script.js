let menu = document.querySelector(".menu-btn");
let hidemenu = document.querySelector(".hide-menu");
let closemenu = document.querySelector(".menu-close");
let learn = document.querySelector(".banner-scroll");
let loca = document.querySelector(".banner-scroll").offsetTop;
let loca2 = document.querySelector(".banner-header").offsetTop;
let closemodal = document.querySelector(".modal-close");
let modal = document.querySelector(".modal-wrap");
let modalbtn = document.querySelector(".submit-btn");
let mainmodal = document.querySelector("#modal");
let upbtn = document.querySelector('.upbtn');


// 이메일 서밋으로 모달 열기
function openmodal(e) {
 
  e.preventDefault();
  // console.log("클릭11", e.path, e.path.includes);
  let email = document.getElementById("email").value;

  var reg_email =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  if (reg_email.test(email) === true) {
    modal.style.display = "flex";
  } else {
    alert("이메일 형식에 맞게 입력해주세요");
    return false;
  }
  // window.onclick = function (event) {
  //   // console.log("클릭", event.path, event.path.includes);
  //   if (event.path.includes(modal) && !event.path.includes(mainmodal)) {
  //     modalclose();
  //     window.onclick = null;
  //   };
  // };
}

 function windowmodal (event) {
  // console.log("클릭", event.path, event.path.includes);
  if (event.path.includes(modal) && !event.path.includes(mainmodal)) {
    modalclose();
    window.onclick = null;
  };
};







// 모달 닫기
function modalclose() {
  modal.style.display = "none";
}


// learn more 버튼시 스크롤 이동됨
function more() {
  window.scrollTo({ top: loca, behavior: "smooth" });
}
// 화면 위로 올리는 버튼

function up() {
  console.log('클릭')
  window.scrollTo({ top: loca2, behavior:"smooth"});
}



// 숨겨진 메뉴 열기
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





function windowtouch(event) {
  if(window.onclick || window.ontouchstart){
    if (!event.path.includes(hidemenu)) {
      menuClose();
      window.onclick = null;
      window.ontouchstart = null;
   }
 }
}  


// 메뉴 닫기
function menuClose() {
  // hidemenu.style.transform = "translate(" + 100 + "%)";
  hidemenu.style.transform = "translate(" + 100 + "%)";
  hidemenu.style['-webkit-transform'] = "translate(" + 100 + "%)";
}

upbtn.addEventListener("click",up);

modalbtn.addEventListener("click", openmodal);
modalbtn.addEventListener("touchstart", openmodal);

closemodal.addEventListener("click", modalclose);
closemodal.addEventListener("touchstart", modalclose);
menu.addEventListener("click", menuOpen);


closemenu.addEventListener("click", menuClose);
closemenu.addEventListener("touchstart", menuClose);

learn.addEventListener("click", more);

window.addEventListener('touchstart', windowclose);
window.addEventListener('click', windowclose);

window.addEventListener('touchstart', windowmodal);
window.addEventListener('click', windowmodal);
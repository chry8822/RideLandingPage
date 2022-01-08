

# 랜딩페이지 (RideLandingPage)  
- [랜딩페이지 사이트 링크](https://chry8822.github.io/RideLandingPage/index.html) 🌐
* 소요기간 6 일


  
  

<br/>  



## 내용 및 목적 (Content)  
* 바이크관련 몰 느낌의 랜딩페이지
* 남자 다운 느낌과 무거운 느낌을 줄수 있도록 배색과 구색
* 과하지 않은 인터렉티브 요소들 배치  
  

<br/>  



## 기능 (Function)  
* 백그라운드 동영상 재생
* scrollTo 과 페이지 최상단이동 버튼  
* 이메일 서밋기능 (입력시 감사 모달창)
* SNS 기능
* Shop - 마우스호버시 해당 내용에 대한 이미지

  
  

<br/>  



## 기술 스택 (Tech stack)  
<div align="center">  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" />  
</div>  

<br/>  



## 작업후 느낀점 (epilogue)  

<br/>  

* 백그라운드로 비디오를 재생하고 싶어서 처음에는 유튜브 영상을 가져왔는데(iframe) 유튜브 영상이 가지고있는 기본적인 ui 들을 완벽하게 안나오게 할수 없어서 video  태그로 용량이 작은 영상으로 대체 하였습니다. 영상 용량이 작으면 직접 불러오는것도 나쁘지 않다고 생각했습니다.  

<br/>  

* 히든 메뉴 작업시에 처음에는 기본값을 display : none 을주고 JS 로 클릭시 flex를 주어 메뉴가 나타나게 했는데 동작이 딱딱하게 보여서 기본값을   transform: translateX(100%); 과 transition을 줘서 옆으로 안보이게 밀고 JS 로 클릭시 반대로 transfrom 을 주어서 부드럽게 열고 닫히게 작성했습니다. 다른 스타일에 transition 을 주면 JS 로 컨트롤시에도 작동을 하는데 display: none 에서 다시 보이게 하는 속성에는 적용이 안되는거 같습니다.
  
  

<br/>  



## 문제점

<br/>  

### 반응형에서 문제점 (안드로이드에서는 작동 잘됨)

<br/>  

**1. 아이폰에서 scrollTo 가 웹에서처럼 부드럽게 움직이지 않고 바로 이동 (사파리, 크롬 테스트)**
   * 구글링을 통해서 pollyfill 로 해결할수 있다는걸 알고 scroll - behavior 관련 polyfill.js 로 - 해결

<br/>  

**2. 아이폰에서 서밋버튼 터치시 무반응? (서밋버튼 함수 첫줄에 alert 를 찍으면 alert는 뜨는데 그뒤로 반응없음)**
   * 블로그에서 예전부터 아이폰에 클릭 이벤트 관련 버그(?) 가 있다는 글을 봤는데 보통 스타일에 cursor: pointer 를 주면 해결된다고 해서 넣어주고 혹시 몰라서 이벤트 리스너에 touchstrat 도 넣어서 - 해결 

<br/>  

**3. 아이폰에서 메뉴와 about 페이지에서 해당 요소를 제외한 곳을 클릭하거나 누르면 해당 요소가 꺼져야 하는데 꺼지지 않는 현상**
   *  아이폰에서 window.onclick을 인식 못하는거 같아서 기존에 함수 안에 window.onclick 을 밖으로 빼서 함수로 만들고 이벤트 리스너를 click 과 touchstrat 각각 만들어서 테스트 - 실패
   * 스타일에 cursor : pointer 실패. 
   
<br/>  
<br />

----
<div align="center">Generated using <a href="https://profilinator.rishav.dev/" target="_blank">Github Profilinator</a></div>

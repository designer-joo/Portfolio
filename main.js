
let SectionIntroPage = document.querySelector("#intro");

let Nav = document.querySelector("nav ul");
let Section = document.querySelectorAll("section");
let PointText1 = document.querySelector('.point-text1');
let PointText2 = document.querySelector('.point-text2');
let innerHeight = window.innerHeight;
let SkillSection = document.getElementById("skill");

let modals = document.getElementsByClassName('multi-modal')


let content = document.querySelector('.modalpopup');
let contents = document.querySelectorAll('.modalpopup');

let modalContent = document.querySelectorAll(".modal-content")

let closeModal = document.querySelectorAll('.close-page')

let Body = document.querySelector('body')


//스크롤 시 부드럽게 앵커 이동

let aboutus = document.querySelector("#about")
let aboutusTop = aboutus.offsetTop

let portfolio = document.querySelector("#my-project")
let portfolioTop = portfolio.offsetTop


let nav = document.querySelector(".nav-box")
let navHeight = nav.offsetHeight


function ClickMenu(event){


  if(event.target.className == "about"){
    scrollTo({ top: aboutusTop-navHeight, behavior: 'smooth' });
    
  }else if(event.target.className == "portfolio"){
    scrollTo({ top: portfolioTop-navHeight, behavior: 'smooth' });
  }

}





/*스크롤시 Fade In Fade Out 효과*/
window.addEventListener("scroll",ScrollEvent);
 window.onbeforeunload = () => {
     window.scrollTo(0, 0);
 }
 

 

function ScrollEvent(){

function Navview(){
    
    if(scrollY < innerHeight){
        //   console.log(scrollY, innerHeight)
        //  console.log(((innerHeight - scrollY) / innerHeight)); // 스크롤 할 수록 점점 줄어드는 수
        // console.log( (scrollY*2 -innerHeight ) / innerHeight) // 스크롤 할 수록 점점 늘어나는 수
        Nav.style.opacity =(scrollY*2 -innerHeight ) / innerHeight+0.5 ;
        SectionIntroPage.style.opacity = ((innerHeight - scrollY*2) / innerHeight)
    }
}


//글씨 스크롤 시 효과주기//
function PointTextHandler(){
    
    // console.log(window.pageYOffset,SkillSection.offsetTop);
   //SkillSection.offsetTop의 /2 보다 window.pageYOffset이 클때 스크롤 하는 만큼 ! 동작해야함.
    let SSection_Half = SkillSection.offsetTop/2
    
    if(SSection_Half<= window.pageYOffset && (SSection_Half*2.5) > window.pageYOffset){
        PointText1.style.left = -(window.pageYOffset-SkillSection.offsetTop)*2 -200 +"px"
    }
 
    function PointTextHandler_here(){
         if((SSection_Half*1.5) < window.pageYOffset){
             
            PointText2.style.opacity =  (window.pageYOffset-SkillSection.offsetTop+500)
            PointText2.style.right =(window.pageYOffset-SkillSection.offsetTop+500)+"px"
        }

      
}
PointTextHandler_here(); 

}

Navview();
PointTextHandler();

}

ScrollEvent();


// TOP 버튼 누를때 이동

mybutton = document.getElementById("myBtn");

// 화면에서 20px 아래로 내려갈 때 버튼생성
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// TOP버튼 누르면 위로 이동 //
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}



//모달창 매칭해서 띄우기//

function Mopen(event){

  console.log(event.target.accessKey)
  console.log(modals)

  for(let i=0; i<contents.length; i++){
   
    if(modals[i].accessKey == event.target.accessKey ){
       
      modals[i].style.display = "table"
      Nav.style.display = "none"
      Body.style.overflowY = "hidden"
    }
       
  }

}

//모달창 닫기//

function Mclose(){
  for(let i=0; i<contents.length; i++){
       
      modals[i].style.display = "none"
      Nav.style.display = "flex"
      Body.style.overflowY = "scroll"
  }
}



//로딩 페이지//

function onloadevent(){
  document.getElementById("load").style.visibility="hidden"
}

window.onload=function(){
  onloadevent();
}

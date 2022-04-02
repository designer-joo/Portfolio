
let SectionIntroPage = document.querySelector("#intro");

let Nav = document.querySelector("nav ul");
let Section = document.querySelectorAll("section");
let PointText1 = document.querySelector('.point-text1');
let PointText2 = document.querySelector('.point-text2');
let innerHeight = window.innerHeight;
let SkillSection = document.getElementById("skill");


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

function PointTextHandler(){
    
    // console.log(window.pageYOffset,SkillSection.offsetTop);
   //SkillSection.offsetTop의 /2 보다 window.pageYOffset이 클때 스크롤 하는 만큼 ! 동작해야함.
    let SSection_Half = SkillSection.offsetTop/2
    
    if(SSection_Half<= window.pageYOffset && (SSection_Half*2.5) > window.pageYOffset){
        PointText1.style.left = -(window.pageYOffset-SkillSection.offsetTop)*0.5 +"px"
    }
 
    function PointTextHandler_here(){
         if((SSection_Half*1.5) < window.pageYOffset){
             
            PointText2.style.opacity =  (window.pageYOffset-SkillSection.offsetTop+200)
            PointText2.style.right =(window.pageYOffset-SkillSection.offsetTop+200)+"px"
        }

      
}
PointTextHandler_here(); 

}

Navview();
PointTextHandler();

}

ScrollEvent();
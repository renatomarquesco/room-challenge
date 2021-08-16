let margin = 0;
let wrapper = document.getElementById("wrapper");
let leftAngle = document.querySelectorAll(".left-angle")
let rightAngle = document.querySelectorAll(".right-angle")
let showNavbar = document.querySelectorAll(".show-navbar")

leftAngle.forEach((btn)=> {
    btn.addEventListener("click", function(){
        margin-=100;
        if(margin < 0){
            margin = 200;
        }
        wrapper.style.marginLeft = "-" + margin + "vw";
    })
})

rightAngle.forEach((btn)=> {
    btn.addEventListener("click", function(){
        margin+=100;
        if(margin > 200){
            margin = 0;
        }
        wrapper.style.marginLeft = "-" + margin + "vw";
    })
})

showNavbar.forEach((div)=>{
    div.addEventListener("click", function(){
        document.getElementById("navbar-small-open").classList.toggle("margin-zero");
        document.getElementById("opaque").classList.toggle("to-the-front")
        document.body.classList.toggle("no-overflow")
    })
})

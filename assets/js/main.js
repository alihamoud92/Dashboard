// جعل عند وضع الماوس على احد عناصر القائمة ان يبقى التحديد//

let list = document.querySelectorAll(".nav li");

function activeLink(){
    // console.log('ok');
    list.forEach((item)=> {
        item.classList.remove("hovered");
        
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));


//زر التكبير والتصغير لل nav//

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".nav");
let main = document.querySelector(".main");
toggle.onclick = function(){
    console.log("ok");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
const donateIcon = document.getElementById("icon");
const cartIcon = document.getElementById("cart");
const burgerIcon = document.getElementById("burger");
const burgerIconClosed = document.getElementById("closed-burger");
const moveUP = document.getElementById("moveUpBar");
const defaultIcon = document.querySelector('.defaultIcon');
const hoverIcon = document.querySelector('.hoverIcon');
const drop = document.getElementById("dropDownMenu");
const drop2 = document.getElementById("dropDownMenu2");
const drop3 = document.getElementById("dropDownMenu3");
const imgPara1 = document.getElementById("img-para1");
const imgPara2 = document.getElementById("img-para2");
const imgPara3 = document.getElementById("img-para3");
const imgPara4 = document.getElementById("img-para4");
const imgPara5 = document.getElementById("img-para5");
const imgPara6 = document.getElementById("img-para6");
const person1 = document.getElementById("per1");
const circle1 = document.getElementById("cir1");
const person2 = document.getElementById("per2");
const circle2 = document.getElementById("cir2");
const person3 = document.getElementById("per3");
const circle3 = document.getElementById("cir3");
const dynamictext1 = document.querySelector(" #para1")
const dynamictext2 = document.querySelector(" #para2")
const dynamictext3 = document.querySelector(" #para3")


moveUP.addEventListener("mouseover", ()=>{
    defaultIcon.style.display = "none"
    hoverIcon.style.display = "inline-block"
})

moveUP.addEventListener("mouseleave", ()=>{
    defaultIcon.style.display = "inline-block"
    hoverIcon.style.display = "none"
})

burgerIcon.addEventListener("click", ()=>{
    moveUP.style.display = "block"
})


burgerIconClosed.addEventListener("click", ()=>{
    moveUP.style.display = "none"
})

donateIcon.addEventListener("mouseover", () => {
    donateIcon.style.color = "green"
})
donateIcon.addEventListener("mouseleave", () => {
    donateIcon.style.color = "black"
})

// code for card 1
window.addEventListener("load", () => {
    imgPara1.style.display = "none"
    imgPara2.style.display = "none"
})

drop.addEventListener("mouseover", () => {
    drop.style.height = `${42}%`
    drop.style.transition = `${0.2}s`
    imgPara1.style.display = "block"
    imgPara2.style.display = "block"
})

drop.addEventListener("mouseleave", () => {
    drop.style.height = `${9}%`
    imgPara1.style.display = "none"
    imgPara2.style.display = "none"
})

// code for card2
window.addEventListener("load", () => {
    imgPara3.style.display = "none"
    imgPara4.style.display = "none"
})

drop2.addEventListener("mouseover", () => {
    drop2.style.height = `${42}%`
    drop2.style.transition = `${0.2}s`
    imgPara3.style.display = "block"
    imgPara4.style.display = "block"
})

drop2.addEventListener("mouseleave", () => {
    drop2.style.height = `${9}%`
    imgPara3.style.display = "none"
    imgPara4.style.display = "none"
})

// code for card3
window.addEventListener("load", () => {
    imgPara5.style.display = "none"
    imgPara6.style.display = "none"
})

drop3.addEventListener("mouseover", () => {
    drop3.style.height = `${42}%`
    drop3.style.transition = `${0.2}s`
    imgPara5.style.display = "block"
    imgPara6.style.display = "block"
})

drop3.addEventListener("mouseleave", () => {
    drop3.style.height = `${9}%`
    imgPara5.style.display = "none"
    imgPara6.style.display = "none"
})

function getComments1() {
    let flag1 = 0;
    person1.addEventListener("click", () => {
        if (flag1 == 0) {
            circle1.style.backgroundColor = "black"
            dynamictext1.style.display = "block"
            flag1 = 1
        } else if (flag1 == 1) {
            circle1.style.backgroundColor = "white"
            dynamictext1.style.display = "none"
            flag1 = 0
        }
    })
}
function getComments2() {
    let flag2 = 0;
    person2.addEventListener("click", () => {
        if (flag2 == 0) {
            circle2.style.backgroundColor = "black"
            dynamictext2.style.display = "block"
            flag2 = 1
        } else if (flag2 == 1) {
            circle2.style.backgroundColor = "white"
            dynamictext2.style.display = "none"
            flag2 = 0
        }
    })
}
function getComments3() {
    let flag3 = 0;
    person3.addEventListener("click", () => {
        if (flag3 == 0) {
            circle3.style.backgroundColor = "black"
            dynamictext3.style.display = "block"
            flag3 = 1
        } else if (flag3 == 1) {
            circle3.style.backgroundColor = "white"
            dynamictext3.style.display = "none"
            flag3 = 0
        }
    })
}

getComments1();
getComments2();
getComments3();

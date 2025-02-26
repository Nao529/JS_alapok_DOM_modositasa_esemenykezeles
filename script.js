window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();   
});

function elemekElerese1() {
    const elem1 = document.querySelectorAll("section h2")[0];
    console.log(elem1.innerHTML);
                        
}
function elemekElerese2() {
    const elem2 = document.querySelectorAll("#ide")[0];  
    elem2.innerHTML = "<p>Jó reggelt!</p>";

}
function elemekElerese3() {
    const elem3 = document.querySelectorAll(".ide")[0];  
    elem3.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
    const elem4 = document.querySelectorAll(".lista")[0];  
    let txt = "<ul>";
    for (let i = 0; i < 5; i++) {
        let velSzam = Math.floor(Math.random() * 21 + 10);
        txt += `<li>${velSzam}</li>`;
    }
    txt += "</ul>";
    elem4.innerHTML += txt;
    elem4.classList.add("formazott")
}
function esemenyKezeles1() {
    let elem4 = document.querySelectorAll(".lista")[0];
    elem4.addEventListener("click", fveny);
}
function fveny() {
    let elem4 = document.querySelectorAll(".lista")[0]; /* aminek a tartalma kell */
    const kattintasutanElem = document.querySelectorAll(".kattintasutan")[0]; /* ahova írni akarok */
    kattintasutanElem.appendChild(elem4);
}


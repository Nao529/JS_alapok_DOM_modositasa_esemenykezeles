 window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles4();
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
    let elem4 = document.querySelector(".lista");
    elem4.addEventListener("click", fveny);
    function fveny() {
        const kattintasutanElem = document.querySelector(".kattintasutan"); /* ahova írni akarok */
        kattintasutanElem.innerHTML=elem4.innerHTML;
        console.log(kattintasutanElem.innerHTML)
    }
}
function esemenyKezeles2() {
    let elem5 = document.querySelector(".feladat");
    elem5.innerHTML = "<button>OK</button>";
    let gomb = document.querySelector(".feladat button");
    gomb.addEventListener("click", fveny);
    function fveny() {
        elem5.innerHTML += "<div><img src='https://us-tuna-sounds-images.voicemod.net/ec521c4c-c05d-402e-b90f-eb5b2b3dc595-1679647518156.png' id='kep'></div>"
        esemenyKezeles3();
    }
    function esemenyKezeles3() {
        let elem = document.querySelector("#kep");
        elem.addEventListener("mouseenter", fveny);
        elem.addEventListener("mouseleave", fveny2);
        function fveny() {
            elem.classList.add("nagyit");
            console.log("nagy kep")
        }
        function fveny2() {
            elem.classList.remove("nagyit");
            console.log("normalis")
        }
    }
}
function esemenyKezeles4() {
    let tarolo = document.querySelectorAll(".tarolo div");
    let eredmeny = document.querySelector(".eredmeny");
    for (let i = 0; i < tarolo.length; i++) {
        tarolo[i].addEventListener("click", fveny);
        function fveny() {
            eredmeny.innerHTML += tarolo[i].innerHTML;
        }
    }

}


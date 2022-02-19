console.group("Bài 1");

let s = 0;
let n = 0;
while (s < 10000) {
    n++;
    s = s + n
}
console.log("Số nguyên dương nhỏ nhất là", n);

console.groupEnd();

console.group("Bài 2");
const totalEl = document.getElementById("total");
document.getElementById("total").onclick = function() {
    const x2 = +document.getElementById("x2").value;
    const n2 = +document.getElementById("n2").value;

    let t2 = 1;
    let s2 = 0;
    for (let i = 1; i <= n2; i++) {
        t2 = t2 * x2;
        s2 = s2 + t2;
    }
    const displayEl = document.getElementById("display");
    document.getElementById('display').value = s2;
}
console.groupEnd();


console.group("Bài 3");
const multiplicationEl = document.getElementById("multiplication");
document.getElementById("multiplication").onclick = function() {
    const n3 = +document.getElementById("n3").value;
    let m = 1;
    for (let i = 1; i <= n3; i++) {
        m = m * i;
    }
    const resultEl = document.getElementById("result");
    document.getElementById('result').value = m;
}
console.groupEnd();

console.group("Bài 4")

function setdiv4(divs) {
    const divsEl = document.getElementById("div4");
    divsEl.style.display = "block";
    divsEl.innerHTML = "divs"
}

function change_backgroud() {
    var divs = document.getElementsByTagName("div4");
    for (var i = 0; i < divs.length; i++) {
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
        } else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }

}
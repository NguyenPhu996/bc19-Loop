document.getElementById("add").addEventListener("click", ex1);
const numberss = [];

//Hiển thị array ra giao diện
document.getElementById("array").innerHTML = numberss;

function ex1() {
    const number = +document.getElementById("number").value;
    numberss.push(number);
    document.getElementById("array").innerHTML = numberss;
    let result1 = 0;
    let result2 = 0;
    for (i = 0; i < numberss.length; i++) {
        const value = numberss[i];
        if (value > 0) {
            result1 += value;
        }
        if (value > 0) {
            result2++;
        }
    }

    // Tìm số nhỏ nhất trong mảng
    var minInNumbers = Math.min.apply(Math, numberss);

    //Tìm số ngyên dương nhỏ nhất trong mảng
    function check_duong(n) {
        let tim_duong = 1;
        if (n >= 0) tim_duong = 0;
        return tim_duong;
    }

    numberss.sort(function(a, b) {
        return a - b;
    });


    for (let i = 0; i < numberss.length; i++) {
        let check = check_duong(numberss[i]);
        if (check == 0) {
            document.getElementById("result4").innerHTML = numberss[i];
            break;
        }
    }

    // Tìm số chẵn cuối cùng trong mảng
    function tim_chan(n) {
        let find_odd = 1;
        if (n % 2 == 0) find_odd = 0;
        return find_odd;
    }

    for (let i = numberss.length - 1; i < numberss.length; i--) {
        let find = tim_chan(numberss[i]);
        if (find % 2 == 0) {
            document.getElementById("result5").innerHTML = numberss[i];
        }

        break;
    }

    // console.log(numberss.sort((firstEl, secondEl) => {
    //     if (secondEl > firstEl) {
    //         return -1;
    //     } else {
    //         return 0;
    //     }
    // }));

    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = minInNumbers;

}




// let array = [1, 5, 9, 10, -1, 5];
// let tong_duong = 0;
// for (i = 0; i < array.length; i++) {
//     const value = array[i];
//     if (value > 0) {
//         tong_duong += value;
//     }
// }
// console.log(tong_duong);

// let array = [1, 5, 9, 10, -1, 5];
// let dem_duong = 0;
// for (i = 0; i < array.length; i++) {
//     const value = array[i];
//     if (value > 0) {
//         dem_duong++;
//     }

// }
// console.log(dem_duong);


// Tìm số nhỏ nhất trong mảng
// let array = [1, 5, 9, 10, -1, 5];
// var minInNumbers = Math.min.apply(Math, array);
// console.log(minInNumbers);



// Tìm số nguyên dương nhỏ nhất

// function check_duong(n) {
//     let tim_duong = 1;
//     if (n >= 0) tim_duong = 0;
//     return tim_duong;
// }

// let number = [7, 5, 9, 10, -1, 1, 14];
// number.sort(function(a, b) {
//     return a - b;
// });

// for (let i = 0; i < number.length; i++) {
//     let check = check_duong(number[i]);
//     if (check == 0) {
//         console.log("Số nguyên dương nhỏ nhất =", number[i])
//         break;
//     }
// }

// Tìm số chẵn cuối cùng trong mảng

// function tim_chan(n) {
//     let find_odd = 1;
//     if (n % 2 == 0) find_odd = 0;
//     return find_odd;
// }

// let array = [3, 5, 7, 9, 2, 8];

// for (let i = array.length - 1; i < array.length; i--) {
//     let find = tim_chan(array[i]);
//     if (find % 2 == 0) {
//         console.log(array[i])
//     } else
//         console.log("-1")
//     break;
// }


// Sắp xếp mảng theo thứ tự tăng dần
//     let score = [13, 12, 7, 4, 2, 5, 9, 8, -1, 5, 24, 32, 63];

// console.log(score.sort((firstEl, secondEl) => {
//     if (secondEl > firstEl) {
//         return -1;
//     } else {
//         return 0;
//     }
// }));

// let array = [3, 5, 7, 9, 2, 8];
// const tmp = array[4]
// array[4] = array[1]
// array[1] = tmp

// console.log(array)
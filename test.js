let list_data = document.querySelectorAll("[data-cell]");
let obj = {
    0: "X",
    1: "O"
}

let arr_game = [
    [],
    [],
    []
]
console.log(arr_game)
let currentPlayer = "X";
let flag = true;
function swap_turn() {

    if (flag) {
        currentPlayer = "X"
        flag = false
    } else {
        currentPlayer = "O"
        flag = true;
    }
    return currentPlayer
}
function add_Array(index, str) {
    if (index < 4) {
        arr_game[0].push(str)
    } else if (index > 3 && index < 7) {
        arr_game[1].push(str)
    } else {
        arr_game[2].push(str)
    }
}
function checkWin(arr) {
    if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]) {
        console.log("chuc mung bn da thang")
    }
    if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]) {
        console.log("hello world")
    }
    if (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]) {
        console.log("1")
    }

}
const winCondition = [[0, 1, 2],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[1, 5, 9],
[3, 5, 7]
]
list_data.forEach((div) => {
    div.addEventListener("click", () => {
        div.innerHTML = swap_turn();
        console.log(div.dataset.cell)
        add_Array(div.dataset.cell, div.textContent);

    })
    // checkWin(arr_game);
})


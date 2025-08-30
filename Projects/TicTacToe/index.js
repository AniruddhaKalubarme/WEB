let player = document.querySelector(".player");
let boxes = document.querySelectorAll(".box");
let new_game_btn = document.querySelector(".New_Game");

let curr_Player = 'X';
const win = [[0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 4, 8],
             [2, 4, 6]];

let matrix;

function switchPlayer()
{
    if(curr_Player == 'X')
    {
        curr_Player = 'O';
    }
    else
    {
        curr_Player = 'X';
    }
    player.innerText = `Current Player: ${curr_Player}`;
}

function NewGameInit()
{
    curr_Player = 'X';
    matrix = ["", "", "", "", "", "", "", "", ""];

    boxes.forEach((box)=>{
        box.innerText="";
        box.style.pointerEvents = "auto";
        box.style.cursor = "pointer";
        if(box.classList.contains('win'))
            box.classList.remove('win');
    });

    new_game_btn.classList.remove('active');
    player.innerText = `Current Player: ${curr_Player}`;


}

function handleClick(index)
{
    if(matrix[index] == "")
    {
        boxes[index].innerText = curr_Player;
        matrix[index] = curr_Player;
        switchPlayer();
        boxes[index].style.cursor = "default";

        CHK_WIN();
    }

    new_game_btn.classList.add('active');
}

function CHK_WIN()
{
    let ans = "";

    win.forEach((position) => {
        if((matrix[position[0]] != "" || matrix[position[1]] != "" || matrix[position[2]] != "") && matrix[position[0]] === matrix[position[1]] && matrix[position[1]] === matrix[position[2]])
        {
            if(matrix[position[0]] === 'X')
            ans = 'X';
            else
            ans = 'O';

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

            setTimeout(() => {
                alert(`'${ans}' player WIN`);
                NewGameInit();
            }, 100);

            boxes.forEach((bx) => {
            bx.style.pointerEvents = 'none';
            });
        }
    })
}  

new_game_btn.addEventListener('click', ()=>{
    NewGameInit();
})

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

NewGameInit();
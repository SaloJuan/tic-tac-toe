//hacer que cada sector realmente sea un llamado a una fn que devuelva un objeto sector con su nombre?

let boardContainer = document.querySelector('.board-container');

let gameBoard = {

    sectors : ['sector1', 'sector2', 'sector3',
                'sector4', 'sector5', 'sector6',
                'sector7', 'sector8', 'sector9'
              ]    
    
}

let players = {
    player1 : 'usuario',
    player2: 'pc'
}





for (let sector in gameBoard.sectors){

    let newSector = document.createElement('div');
 
    newSector.classList.add('sector');

    newSector.addEventListener('click', () =>{

        newSector.innerHTML = 'X'
        
    })

    boardContainer.appendChild(newSector);    

}

// let domSectors = document.querySelectorAll('.sector');



let markedSectors = document.querySelectorAll('.sector');


let pcmove = document.querySelector('.aimove');

pcmove.addEventListener('click', () =>{
    
    for (let i=0; i<=markedSectors.length; i++){

        if(markedSectors[i].innerHTML !== 'X'){

            if(Math.floor(Math.random()*10) <5){

                markedSectors[i].innerHTML = 'jugo la pc';

                break;

            }else{

            }

        }
    }

})

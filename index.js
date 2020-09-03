const playButton = null || document.getElementById('playButton');
const gameContainer = null || document.getElementById('gameContainer');
const rockChoose = null || document.getElementById('optionPiedra');
const paperChoose = null || document.getElementById('optionPapel');
const scissorsChoose = null || document.getElementById('optionTijeras');
const playerChooseImage = null || document.getElementById('yourChoose');
const machineChooseImage = null || document.getElementById('machineChoose');
const resultsOverlay = null || document.getElementById('resultsOverlay')
const closeModal = null || document.getElementById('closeModal');
const playerPoints = null || document.getElementById('playerPoints');
const pcPoints = null || document.getElementById('pcPoints');
const modalTitle = null || document.getElementById('modalTitle');

playButton.addEventListener('click',() => {
    setTimeout(() => {
        playButton.style.display = 'none';
        gameContainer.style.display = 'flex';
    },500);
})

closeModal.addEventListener('click',() => oneMore())

function gameBrian(){
    let localPoints = 0;
    let machinePoints = 0; 
    
    return{

    addPoints: (winner)=>{
        if (winner === 'player'){
            localPoints ++;
            return '1 Point added to player'
        }else{
            if(winner === 'machine'){
                machinePoints++;
                return '1 Point added to machine'
            }
        if(winner === 'tie') return 0;
        }
    },
    getUserPoints: () => localPoints,
    getMachinePoints: () => machinePoints,
    whoWons: (localChoose, machineChoose)=> {
            if(localChoose === 'piedra'){
                if(machineChoose === 'piedra') return 'tie';
                if(machineChoose === 'papel') return 'machine';
                if(machineChoose === 'tijeras') return 'player';
            }
            if(localChoose === 'papel'){
                if(machineChoose === 'piedra') return 'player';
                if(machineChoose === 'papel') return 'tie';
                if(machineChoose === 'tijeras') return 'machine';
            }
            if(localChoose === 'tijeras'){
                if(machineChoose === 'piedra') return 'machine';
                if(machineChoose === 'papel') return 'player';
                if(machineChoose === 'tijeras') return 'tie';
            }
        }
    }
}

function getMachineOption () {
    randomNumber = Math.floor(Math.random()*3) + 1;
    let machineOption = 0; 
    if(randomNumber === 1){
        machineOption = 'piedra';
        machineChooseImage.style.animationName = 'none';
        machineChooseImage.style.backgroundImage = `url('assets/opcion-1.png')`;
        return machineOption;
    }
    if(randomNumber === 2){
        machineOption = 'papel';
        machineChooseImage.style.animationName = 'none';
        machineChooseImage.style.backgroundImage = `url('assets/opcion-2.png')`;
        return machineOption;
    }
    if(randomNumber === 3){
        machineOption = 'tijeras';
        // machineChooseImage.style.animationName = 'randomize-image';
        // machineChooseImage.style.animationPlayState = 'running';
        machineChooseImage.style.animationName = 'none';
        machineChooseImage.style.backgroundImage = `url('assets/opcion-3.png')`;
        return machineOption;
    }
}

function openResults (winner) {
    resultsOverlay.style.display = 'flex';
    modalTitle.innerText = winner === 'player'? 'Felicidades, has ganado' : 'Lo siento, vuelve a intentar';
    if(winner === 'tie') modalTitle.innerText = 'Fué un empate'
    playerPoints.innerText = game.getUserPoints();
    pcPoints.innerText = game.getMachinePoints();

}
function oneMore(){
    resultsOverlay.style.display = 'none';
    machineChooseImage.style.backgroundImage = `url('assets/opcion-1.png')`;
    machineChooseImage.style.animationName = 'randomize-image';
}

    
const game = gameBrian();

rockChoose.addEventListener('click',()=>{
    playerChooseImage.style.animationName = 'none';
   playerChooseImage.style.backgroundImage = `url('assets/opcion-1.png')`;
   let machineOption =  getMachineOption();
   let winner = game.whoWons('piedra',machineOption);
   game.addPoints(winner);
   setTimeout(()=>{
    openResults(winner);
   },1000)
})
paperChoose.addEventListener('click',()=>{
    playerChooseImage.style.animationName = 'none';
    playerChooseImage.style.backgroundImage = `url('assets/opcion-2.png')`;
   let machineOption =  getMachineOption();
   let winner = game.whoWons('papel',machineOption);
   game.addPoints(winner);
   setTimeout(()=>{
    openResults(winner);
   },1200)
})
scissorsChoose.addEventListener('click',()=>{
    playerChooseImage.style.animationName = 'none';
    playerChooseImage.style.backgroundImage = `url('assets/opcion-3.png')`;
   let machineOption =  getMachineOption();
   let winner = game.whoWons('tijeras',machineOption);
   game.addPoints(winner);
   setTimeout(()=>{
    openResults(winner);
   },1200)
})

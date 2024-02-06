function choice_comp(){
    var choice_number = Math.floor(Math.random()*3);
    if (choice_number == 0){
        return 'pedra';
    }
    else if (choice_number == 1){
        return 'papel';
    }
    else{
        return 'tesoura';
    }
}
function countscore() {
    var scorehtml = document.querySelector('.points');
    var scorepoints = Number.parseInt(scorehtml)
    scorehtml.innerText = scorepoints+1;
    
}
function play(user_btn){
    const choice_pc = choice_comp()
    alert('PC ESCOLHEU '+ choice_pc);
    if (user_btn === 'papel' && choice_pc === 'papel') {
         alert('Empate');   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'tesoura') {
        alert('Empate');   
    }
    else if (user_btn === 'pedra' && choice_pc === 'pedra') {
        alert('Empate');   
    }
    else if (user_btn === 'papel' && choice_pc === 'tesoura') {
        alert('PC ganhou');   
    }
    else if (user_btn === 'papel' && choice_pc === 'pedra') {
        alert('VOCÊ ganhou');
        countscore();   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'papel') {
        alert('VOCÊ ganhou');
        countscore();   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'pedra') {
        alert('PC ganhou');   
    }
    else if (user_btn === 'pedra' && choice_pc === 'papel') {
        alert('PC ganhou');   
    }
    else if (user_btn === 'pedra' && choice_pc === 'tesoura') {
        alert('VOCÊ ganhou');
        countscore();   
    }
}

function showhide(){
    Swal.fire({
        title: "REGRAS",
        imageUrl: "./rock-paper-scissors-master/images/image-rules.svg",
        imageWidth: 304,
        imageHeight: 270,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        imageAlt: "Imagem Regras"
      });
};
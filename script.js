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
    }
    else if (user_btn === 'tesoura' && choice_pc === 'papel') {
        alert('VOCÊ ganhou');   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'pedra') {
        alert('PC ganhou');   
    }
    else if (user_btn === 'pedra' && choice_pc === 'papel') {
        alert('PC ganhou');   
    }
    else if (user_btn === 'pedra' && choice_pc === 'tesoura') {
        alert('VOCÊ ganhou');   
    }
}
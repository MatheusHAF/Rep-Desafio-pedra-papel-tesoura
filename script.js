//Função em que a maquina escolhe de forma aleatória
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

//Função que conta o score de vitórias do usuário
function countscore() {
    var scoreElement = document.querySelector('.points');
    var scorepoints = Number.parseInt(scoreElement.innerText);
    scorepoints++;
    if (scorepoints<10) {
        scoreElement.innerText = '0'+scorepoints;
    }
    else{
        scoreElement.innerText = scorepoints;
    }
}

//Função que zera o score
function zerascore() {
    var scoreElement = document.querySelector('.points');
    scoreElement.innerText = '00';
}

//Função que compara a jogada do jogador e da máquina
function play(user_btn){
    const choice_pc = choice_comp();
    var result; //0 = perdeu, 1 = ganhou, 2 = empate
    //alert('PC ESCOLHEU '+ choice_pc);
    if (user_btn === 'papel' && choice_pc === 'papel') {
        result = 2;
        mudamainescolha(user_btn,choice_pc,result);   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'tesoura') {
        result = 2;
        mudamainescolha(user_btn,choice_pc,result);   
    }
    else if (user_btn === 'pedra' && choice_pc === 'pedra') {
        result = 2;
        mudamainescolha(user_btn,choice_pc,result); 
    }
    else if (user_btn === 'papel' && choice_pc === 'tesoura') {
        result = 0;
        mudamainescolha(user_btn,choice_pc,result);
        zerascore(); 
    }
    else if (user_btn === 'papel' && choice_pc === 'pedra') {
        result = 1;
        mudamainescolha(user_btn,choice_pc,result);
        countscore();   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'papel') {
        result = 1;
        mudamainescolha(user_btn,choice_pc,result);
        countscore();   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'pedra') {
        result = 0;
        mudamainescolha(user_btn,choice_pc,result);
        zerascore();   
    }
    else if (user_btn === 'pedra' && choice_pc === 'papel') {
        result = 0;
        mudamainescolha(user_btn,choice_pc,result);
        zerascore();   
    }
    else if (user_btn === 'pedra' && choice_pc === 'tesoura') {
        result = 1;
        mudamainescolha(user_btn,choice_pc,result);
        countscore();   
    }
}

// Função que mostra o alerta de REGRAS
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

function mudamainescolha(user,pc,res){
    //desaparecer a primeira div
    document.getElementById('cont-1').style.display = 'none';
    
    //alterar button e imgs das divs
    var botao_player = document.getElementsByClassName("pl-ch");
    var botao_house = document.getElementsByClassName("hs-ch");

    var img_player = document.getElementById("img-pl");
    var img_house = document.getElementById("img-hs");

    //arrumar a proxima div
    var btnplayer = document.getElementsByClassName("pk-pl-btn");
    var btnhouse = document.getElementsByClassName("pk-hs-btn");

    var imgplayer = document.getElementById("pk-pl-img");
    var imghouse = document.getElementById("pk-hs-img");

    //alterar o resultado
    var r = document.getElementById("result");
    if (res == 0) {
        r.innerText = 'YOU LOST'
    }
    else if (res == 1) {
        r.innerText = 'YOU WIN'
    }
    else if (res == 2) {
        r.innerText = 'DRAW'
    }

    if (user == "papel") {
        botao_player[0].setAttribute('id','pap-btn');
        img_player.src = "./rock-paper-scissors-master/images/icon-paper.svg";
        //
        btnplayer[0].setAttribute('id','pap-btn');
        imgplayer.src = "./rock-paper-scissors-master/images/icon-paper.svg";
    }
    else if (user == "tesoura") {
        botao_player[0].setAttribute('id','tes-btn');
        img_player.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
        //
        btnplayer[0].setAttribute('id','tes-btn');
        imgplayer.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
    }
    else if (user == "pedra") {
        botao_player[0].setAttribute('id','ped-btn');
        img_player.src ="./rock-paper-scissors-master/images/icon-rock.svg";
        //
        btnplayer[0].setAttribute('id','ped-btn');
        imgplayer.src = "./rock-paper-scissors-master/images/icon-rock.svg";
    }
    if (pc == "papel") {
        botao_house[0].setAttribute('id','pap-btn');
        img_house.src = "./rock-paper-scissors-master/images/icon-paper.svg";
        //
        btnhouse[0].setAttribute('id','pap-btn');
        imghouse.src = "./rock-paper-scissors-master/images/icon-paper.svg";
    }
    else if(pc == "tesoura"){
        botao_house[0].setAttribute('id','tes-btn');
        img_house.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
        //
        btnhouse[0].setAttribute('id','tes-btn');
        imghouse.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
    }
    else if(pc == "pedra"){
        botao_house[0].setAttribute('id','ped-btn');
        img_house.src = "./rock-paper-scissors-master/images/icon-rock.svg";
        //
        btnhouse[0].setAttribute('id','ped-btn');
        imghouse.src = "./rock-paper-scissors-master/images/icon-rock.svg";
    }
    
    //mostrar div
    document.getElementById('cont-2').style.display = 'flex';

    //timezinho de uns 3s e mostrar a proxima div
    //document.getElementById('cont-3').style.display = 'block';
    setTimeout(function() {
        // Coloque aqui as funções que deseja executar após o atraso de 3 segundos
        document.getElementById('cont-2').style.display = 'none';
        document.getElementById('cont-3').style.display = 'flex';
      }, 1500); // 3000 milissegundos = 3 segundos
}

function playagain() {
    document.getElementById('cont-3').style.display = 'none';
    document.getElementById('cont-1').style.display = 'block';
}
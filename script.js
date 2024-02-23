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
    const choice_pc = choice_comp()

    //alert('PC ESCOLHEU '+ choice_pc);
    if (user_btn === 'papel' && choice_pc === 'papel') {
        mudamainescolha(user_btn,choice_pc);   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'tesoura') {
        mudamainescolha(user_btn,choice_pc);   
    }
    else if (user_btn === 'pedra' && choice_pc === 'pedra') {
        mudamainescolha(user_btn,choice_pc); 
    }
    else if (user_btn === 'papel' && choice_pc === 'tesoura') {
        mudamainescolha(user_btn,choice_pc); 
        zerascore(); 
    }
    else if (user_btn === 'papel' && choice_pc === 'pedra') {
        mudamainescolha(user_btn,choice_pc);
        countscore();   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'papel') {
        mudamainescolha(user_btn,choice_pc);
        countscore();   
    }
    else if (user_btn === 'tesoura' && choice_pc === 'pedra') {
        mudamainescolha(user_btn,choice_pc);
        zerascore();   
    }
    else if (user_btn === 'pedra' && choice_pc === 'papel') {
        mudamainescolha(user_btn,choice_pc);
        zerascore();   
    }
    else if (user_btn === 'pedra' && choice_pc === 'tesoura') {
        mudamainescolha(user_btn,choice_pc);
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

function mudamainescolha(user,pc){
    //desaparecer a primeira div
    document.getElementById('cont-1').style.display = 'none';
    
    //alterar button e imgs das divs
    var botao_player = document.getElementById("pl-ch");
    var botao_house = document.getElementById("hs-ch");

    var img_player = document.getElementById("img-pl");
    var img_house = document.getElementById("img-hs");

    //arrumar a proxima div
    var btnplayer = document.getElementById("pk-pl-btn");
    var btnhouse = document.getElementById("pk-hs-btn");

    var imgplayer = document.getElementById("pk-pl-img");
    var imghouse = document.getElementById("pk-hs-img");

    if (user == "papel") {
        botao_player.id = "pap-btn";
        img_player.src = "./rock-paper-scissors-master/images/icon-paper.svg";
        //
        btnplayer.id = "pap-btn";
        imgplayer.src = "./rock-paper-scissors-master/images/icon-paper.svg";
    }
    else if (user == "tesoura") {
        botao_player.id = "tes-btn";
        img_player.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
        //
        btnplayer.id = "tes-btn";
        imgplayer.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
    }
    else if (user == "pedra") {
        botao_player.id = "ped-btn";
        img_player.src ="./rock-paper-scissors-master/images/icon-rock.svg";
        //
        btnplayer.id = "ped-btn";
        imgplayer.src = "./rock-paper-scissors-master/images/icon-rock.svg";
    }
    if (pc == "papel") {
        botao_house.id ="pap-btn";
        img_house.src = "./rock-paper-scissors-master/images/icon-paper.svg";
        //
        btnhouse.id = "pap-btn";
        imghouse.src = "./rock-paper-scissors-master/images/icon-paper.svg";
    }
    else if(pc == "tesoura"){
        botao_house.id ="tes-btn";
        img_house.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
        //
        btnhouse.id = "tes-btn";
        imghouse.src = "./rock-paper-scissors-master/images/icon-scissors.svg";
    }
    else if(pc == "pedra"){
        botao_house.id ="ped-btn";
        img_house.src = "./rock-paper-scissors-master/images/icon-rock.svg";
        //
        btnhouse.id = "ped-btn";
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
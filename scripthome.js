
//Menu Lateral-------------------------------------------
function some(){
  var check = document.getElementById("check");
  check.checked = "";
}

//CARROSSEL-------------------------------------------
var intervalo = 4000;

function slide1(){
    document.getElementById("slide").src="imagens/slide2.png";
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById("slide").src="imagens/slide3.png";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById("slide").src="imagens/slide4.png";
    setTimeout("slide4()",intervalo);
}

function slide4(){
    document.getElementById("slide").src="imagens/slide1.png";
    setTimeout("slide1()",intervalo);
}

//VALIDAR-------------------------------------------------
function validar(){
  var nome = formulario.nome.value;
  var tel = formulario.tel.value;
  var email = formulario.email.value;
  var mensagem = formulario.mensagem.value;
  var v = 0;

  if(nome == "" || nome == "*DIGITE O SEU NOME*"){
      formulario.nome.value = "*DIGITE O SEU NOME CORRETAMENTE*";
      formulario.nome.focus();
      v = 1;
  }

  if(tel == "" || tel == "*DIGITE O SEU TELEFONE*" ){
      formulario.tel.value = "*DIGITE O SEU TELEFONE CORRETAMENTE*";
      formulario.tel.focus();
      v = 1;
  }

  if(email == "" || email == "*DIGITE O SEU E-MAIL*" || email.indexOf('@') == -1){
      formulario.email.value = "*DIGITE O SEU E-MAIL CORRETAMENTE*";
      formulario.email.focus();
      v = 1;
  }

  if(mensagem == "" || mensagem == "*DIGITE A SUA MENSAGEM*"){
      formulario.mensagem.value = "*DIGITE A SUA MENSAGEM*";
      formulario.mensagem.focus();
      v = 1;
  }

  if(v == 1) return false;
}

//ACEITAR TERMOS-------------------------------------------------
function ativo(){
  var terms = document.getElementById("terms");
  var botao = document.getElementById("botao");
  if(terms.checked){
    botao.classList.remove("not-active");
    botao.classList.add("active");
  }else{
    botao.classList.remove("active");
    botao.classList.add("not-active");
  }
}

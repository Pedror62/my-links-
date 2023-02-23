

  function Saudacao() {
    var mensagem = document.getElementById("mensagem");
    
    var horaAtual = new Date().getHours();
    var saudacao;
   
   
  
  
    if (horaAtual >= 5 && horaAtual < 12) {
      saudacao = "Olá, Bom dia! &#9925";
     
     document.getElementById('Saudacao').style.backgroundColor = '#e2cd9f';
      
    } else if (horaAtual >= 12 && horaAtual < 18) {
      saudacao = "Olá, Boa tarde! &#127774";
      document.getElementById(`Saudacao`).style.backgroundColor = `#b9846f`
     
    } else {
      saudacao = "Olá, Boa noite! &#127769";
      document.getElementById(`Saudacao`).style.backgroundColor = `#515154`
    
    }
  
    mensagem.innerHTML = saudacao ;
  
   
  }
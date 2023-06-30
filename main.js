 // Crie uma função para verificar a senha:

 function checkPassword() {
  // Obtenha os valores de usuário e senha do formulário
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Verifique se a senha é correta
  if (username === "Coisinha" && password === "1131518") {
    // Se a senha estiver correta, redirecione para a página protegida
    window.location.href = "pagina_protegida.html";
  } else {
    // Se a senha estiver incorreta, exiba uma mensagem de erro
    alert("Nome de usuário ou senha incorretos.");
  }
}

 // Adicione um ouvinte de eventos para o formulário de login:

// var form = document.getElementById("login-form");
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Impede que o formulário seja enviado
//   checkPassword(); // Verifique a senha
// });

// // Verifica se já existe um contador no localStorage
// if(localStorage.getItem('visits')) {
//   // Se já existir, incrementa o contador em 1
//   var visits = parseInt(localStorage.getItem('visits')) + 1;
//   localStorage.setItem('visits', visits);
// } else {
//   // Se não existir, cria um novo contador com valor 1
//   localStorage.setItem('visits', 1);
// }

// // Exibe o número de visitas na página
// document.getElementById('visit-count').textContent = 'Número de visitas: ' + localStorage.getItem('visits');



// Função para obter a data atual no formato "YYYY-MM-DD"
function getCurrentDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, '0');
  var day = String(today.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

// Verifica se já existe um contador para a data atual no localStorage
var currentDate = getCurrentDate();
if(localStorage.getItem(currentDate)) {
  // Se já existir, incrementa o contador em 1
  var visits = parseInt(localStorage.getItem(currentDate)) + 1;
  localStorage.setItem(currentDate, visits);
} else {
  // Se não existir, cria um novo contador com valor 1
  localStorage.setItem(currentDate, 1);
}

// Obter o total de acessos nos últimos três dias
var totalVisits = 0;
for (var i = 0; i < 3; i++) {
  var date = new Date();
  date.setDate(date.getDate() - i);
  var dateString = date.toISOString().split('T')[0];
  if (localStorage.getItem(dateString)) {
    totalVisits += parseInt(localStorage.getItem(dateString));
  }
}

// Exibir o total de acessos nos últimos três dias
console.log('Total de acessos nos últimos três dias: ' + totalVisits);




//              ///

function salvarTexto() {
  var texto = document.getElementById("texto").value;
  localStorage.setItem("textoSalvo", texto);
  alert("Texto salvo com sucesso!");
}

function carregarTexto() {
  var textoSalvo = localStorage.getItem("textoSalvo");
  if (textoSalvo) {
    document.getElementById("texto").value = textoSalvo;
    alert("Texto carregado com sucesso!");
  } else {
    alert("Nenhum texto foi salvo anteriormente.");
  }
}

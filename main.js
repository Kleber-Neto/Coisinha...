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

var form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede que o formulário seja enviado
  checkPassword(); // Verifique a senha
});
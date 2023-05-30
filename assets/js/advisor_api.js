// Substitua 'SEU_TOKEN' pelo seu token real
const token = ' 7d553c2582595de589ed5d91289eb0fd';

fetch('https://api.advisor.com/recommendations', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Manipule a resposta da API aqui
    console.log(data);
  })
  .catch(error => {
    // Lida com erros de solicitação
    console.error('Ocorreu um erro:', error);
  });


  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.advisor.com/recommendations', true);

xhr.setRequestHeader('Authorization', 'Bearer  7d553c2582595de589ed5d91289eb0fd');

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 400) {
    var data = JSON.parse(xhr.responseText);
    // Manipule a resposta da API aqui
    console.log(data);
  } else {
    console.error('Ocorreu um erro na solicitação.');
  }
};

xhr.onerror = function() {
  console.error('Erro de conexão.');
};

xhr.send();

